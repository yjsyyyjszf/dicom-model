# Data dictionary

This data dictionary was generated from data obtained from the
[node-dicom](https://github.com/grmble/node-dicom) project.

## Data Elements

`data-elements.csv` was generated from
https://github.com/grmble/node-dicom/blob/master/extra/dataelements.xml using this python code:

```python
from xml.etree.ElementTree import ElementTree
tree = ElementTree()
tree.parse("dataelements.xml")
output = open("data-elements.csv', 'w')
output.write('\n'.join([f'{e.get("tag","")},{e.get("keyword","")},{e.get("vr","")},{e.get("vm","")},{e.text}' for e in tree.findall('el')]))
```

## uids

`uids.csv` was generated from https://github.com/grmble/node-dicom/blob/master/extra/dataelements.xml
using this python code:

```python
from xml.etree.ElementTree import ElementTree
tree = ElementTree()
tree.parse('dataelements.xml')
output = open('data-elements.csv', 'w')
output.write('\n'.join([f'{e.get("value","")},{e.get("keyword","")},{e.get("type","")},{e.text}' for e in tree.findall('uid')]))
```

## Generate a class from data elements

You can create a [doT.js template (v1)](https://olado.github.io/doT/index.html)
and use `dicom-class-generator.js` this way to generate a typescript class suiting
your need:
```bash
./dicom-class-generator.js data-elements.csv your-template.dotjs you-class.ts
```

There are two examples of template in the `data-dictionary` folder:
* `bulkdata.ts.template`
* `metadata.ts.template`

The model provided is an array of elements containing data from data-element.csv
and some additional computed fields:
```json
[
  {
    "tag": "00280103",
    "keyword": "PixelRepresentation",
    "vr": "US",
    "vm": "1",
    "prettyName": "Pixel Representation",
    "vrArray": [ "US" ],
    "isLinkable": false,
    "onlyOneElement": true,
    "returnedType": "number"
  },
  {
    "tag": "7FE00010",
    "keyword": "PixelData",
    "vr": "OB or OW",
    "vm": "1",
    "prettyName": "Pixel Data",
    "vrArray": [ "OB", "OW" ],
    "isLinkable": true,
    "onlyOneElement": true,
    "returnedType": "Uint8Array"
  },
  [...]
]
```

* `isLinkable` indicates if this field is considered as a bulk data field by DICOMWeb
and could be provided as a rest link instead of as a fully formed data.
* `onlyOneElement` means value multiplicity is 1.
* `returnedType` is the recommended typescript returned type of this field.

# Additional information

See also: http://dicom.nema.org/medical/Dicom/2016c/output/chtml/part06/chapter_6.html
