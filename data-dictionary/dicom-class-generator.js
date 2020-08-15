#!/usr/bin/env node

// import 'source-map-support/register';

const { readFileSync, writeFileSync } = require('fs');
const dot = require('dot');

const dicomTypeMapping = {
  AE: 'string',
  AS: 'string',
  AT: 'Uint16Array',
  CS: 'string',
  DA: 'Date',
  DS: 'number',
  DT: 'string',
  FD: 'number',
  FL: 'number',
  IS: 'number',
  LO: 'string',
  LT: 'string',
  OB: 'Uint8Array', // must be like OW because some fields are OB or OW
  OF: 'Float32Array',
  OW: 'Uint8Array', // must be like OB because some fields are OB or OW
  PN: 'any',
  SH: 'string',
  SL: 'number',
  SQ: 'Dataset',
  SS: 'Uint8Array', // must be like OW because some fields are US or SS
  ST: 'string',
  TM: 'string',
  UI: 'string',
  UL: 'number',
  US: 'number',
  UT: 'string',
};

// Load the data element csv file into a list of objects.
function loadDataElements(dataElementsPath) {
  const dataElements = readFileSync(dataElementsPath)
  .toString()
  .split('\n')
  .map(line => {
    tokens = line.split(',');
    return {
      tag: tokens[0],
      keyword: tokens[1],
      vr: tokens[2],
      vm: tokens[3],
      prettyName: tokens[4],
    }
  });

  return dataElements;
}

function createModel(dataElements) {
  return dataElements.map(element => {
    element.vrArray = element.vr.split('or').map(x => x.trim());
    element.isLinkable = ([
      'LT', 'OB', 'OD', 'OF', 'OL', 'OV', 'OW', 'ST', 'SV', 'UC', 'UN', 'UT', 'UV'
    ].findIndex(vr => element.vrArray.findIndex(evr => evr === vr) !== -1) !== -1);
    // Value multiplicity is set to 1 only when not a sequence. Because the vm for SQ is always 1
    // but in DICOM the sequence is always an array with one or several elements.
    element.onlyOneElement = element.vm === '1' && !element.vrArray.some(vr => vr === 'SQ');
    element.returnedType = `${element.onlyOneElement
      ? ''
      : 'Array<'
    }${dicomTypeMapping[element.vrArray[0]]}${element.onlyOneElement
      ? ''
      : '>'
    }`;
    return element;
  }).filter(element => element.vr !== '' && element.vr !== undefined);
}

function getOption(argv, markers) {
  const args = argv.filter((item, index) => markers.includes(argv[index - 1]));
  if (args.length === 0) return undefined;
  return args[0];
}

async function main(argv) {
  if (argv.length <= 3) {
    console.error('error: incorrect number of arguments');
    console.error(`usage: ${argv[1]} <data_elements_csv> <template> <class_file> [additional_models, ...]`);
    process.exit(1);
  }

  const [_1, _2, dataElementsPath, templatePath, classFile, ...extModelFiles] = argv;
  const dataElementModel = createModel(loadDataElements(dataElementsPath));
  const models = Object.fromEntries(extModelFiles.map(m =>
    [m.split('.')[0], JSON.parse(readFileSync(m).toString())]
  ));
  // console.log(dataElementModel.filter(e => e.keyword === 'PixelData' || e.keyword === 'PixelRepresentation'));

  const template = readFileSync(templatePath).toString();
  dot.templateSettings.strip = false;
  const report = dot.template(template)({
    elements: dataElementModel,
    ...models,
  });
  // console.log(report);

  writeFileSync(classFile, report);
}

main(process.argv);
