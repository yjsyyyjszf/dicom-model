# dicom-model

Provides typescript definitions for a DICOM dataset. Fields are divided in two
categories:
1. metadata
2. bulkdata

The `Metadata` class contains accessors to the first category of data. The
`Bulkdata` interface for the second.

A `Dataset` is a union of the two:
```typescript
type Dataset = Metadata & Bulkdata;
```

## Class generator

Due to the sheer number of DICOM fields (> 7000) it is impossible to handcraft
those interfaces and any manual implementation would it be impossible.
Consequently, this package provides the mean to generate those classes.

In order to use that generator, first create the [doT.js](https://olado.github.io/doT/index.html)
template of your class:
```typescript
import { Dataset } from '@jdmichaud/dicom-model';

class MyDataset implements Dataset {
  {{~ it.elements :element}}
    // {{=element.prettyName }}
    {{=element.keyword}}: {{=element.returnedType}} | undefined {
      // put your code here
    }
  {{~}}
}
```

Then, use the provided tool to generate the class from the template:
```bash
node_modules/.bin/dicom-class-generator node_modules/@jdmichaud/dicom-model/dist/data-dictionary/data-elements.csv my-template.dotjs my-dataset.ts
```

The tool leverage the provided file `data-element.csv` which contains the list
of all the currently (at the time of this writing) known public DICOM fields
along with their type and name. Please refer to [README.md](data-dictionary/README.md)
for more information.
