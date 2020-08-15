/**
 * Describes the metadata of DICOM dataset with fields based on:
 * - the DICOM tag presented as an hexadecimal 8 characters string (ex.: 00100010) and
 * - the short DICOM name (ex.: PatientName).
 * All the fields are optional.
 */
export interface Metadata {

  // File Meta Information Group Length
  FileMetaInformationGroupLength: number | undefined;
  x00020000: number | undefined;

  // Media Storage SOP Class UID
  MediaStorageSOPClassUID: string | undefined;
  x00020002: string | undefined;

  // Media Storage SOP Instance UID
  MediaStorageSOPInstanceUID: string | undefined;
  x00020003: string | undefined;

  // Transfer Syntax UID
  TransferSyntaxUID: string | undefined;
  x00020010: string | undefined;

  // Implementation Class UID
  ImplementationClassUID: string | undefined;
  x00020012: string | undefined;

  // Implementation Version Name
  ImplementationVersionName: string | undefined;
  x00020013: string | undefined;

  // Source Application Entity Title
  SourceApplicationEntityTitle: string | undefined;
  x00020016: string | undefined;

  // Sending Application Entity Title
  SendingApplicationEntityTitle: string | undefined;
  x00020017: string | undefined;

  // Receiving Application Entity Title
  ReceivingApplicationEntityTitle: string | undefined;
  x00020018: string | undefined;

  // Private Information Creator UID
  PrivateInformationCreatorUID: string | undefined;
  x00020100: string | undefined;

  // File-set ID
  FileSetID: string | undefined;
  x00041130: string | undefined;

  // File-set Descriptor File ID
  FileSetDescriptorFileID: Array<string> | undefined;
  x00041141: Array<string> | undefined;

  // Specific Character Set of File-set Descriptor File
  SpecificCharacterSetOfFileSetDescriptorFile: string | undefined;
  x00041142: string | undefined;

  // Offset of the First Directory Record of the Root Directory Entity
  OffsetOfTheFirstDirectoryRecordOfTheRootDirectoryEntity: number | undefined;
  x00041200: number | undefined;

  // Offset of the Last Directory Record of the Root Directory Entity
  OffsetOfTheLastDirectoryRecordOfTheRootDirectoryEntity: number | undefined;
  x00041202: number | undefined;

  // File-set Consistency Flag
  FileSetConsistencyFlag: number | undefined;
  x00041212: number | undefined;

  // Directory Record Sequence
  DirectoryRecordSequence: Array<Dataset> | undefined;
  x00041220: Array<Dataset> | undefined;

  // Offset of the Next Directory Record
  OffsetOfTheNextDirectoryRecord: number | undefined;
  x00041400: number | undefined;

  // Record In-use Flag
  RecordInUseFlag: number | undefined;
  x00041410: number | undefined;

  // Offset of Referenced Lower-Level Directory Entity
  OffsetOfReferencedLowerLevelDirectoryEntity: number | undefined;
  x00041420: number | undefined;

  // Directory Record Type
  DirectoryRecordType: string | undefined;
  x00041430: string | undefined;

  // Private Record UID
  PrivateRecordUID: string | undefined;
  x00041432: string | undefined;

  // Referenced File ID
  ReferencedFileID: Array<string> | undefined;
  x00041500: Array<string> | undefined;

  // MRDR Directory Record Offset
  MRDRDirectoryRecordOffset: number | undefined;
  x00041504: number | undefined;

  // Referenced SOP Class UID in File
  ReferencedSOPClassUIDInFile: string | undefined;
  x00041510: string | undefined;

  // Referenced SOP Instance UID in File
  ReferencedSOPInstanceUIDInFile: string | undefined;
  x00041511: string | undefined;

  // Referenced Transfer Syntax UID in File
  ReferencedTransferSyntaxUIDInFile: string | undefined;
  x00041512: string | undefined;

  // Referenced Related General SOP Class UID in File
  ReferencedRelatedGeneralSOPClassUIDInFile: Array<string> | undefined;
  x0004151a: Array<string> | undefined;

  // Number of References
  NumberOfReferences: number | undefined;
  x00041600: number | undefined;

  // Length to End
  LengthToEnd: number | undefined;
  x00080001: number | undefined;

  // Specific Character Set
  SpecificCharacterSet: Array<string> | undefined;
  x00080005: Array<string> | undefined;

  // Language Code Sequence
  LanguageCodeSequence: Array<Dataset> | undefined;
  x00080006: Array<Dataset> | undefined;

  // Image Type
  ImageType: Array<string> | undefined;
  x00080008: Array<string> | undefined;

  // Recognition Code
  RecognitionCode: string | undefined;
  x00080010: string | undefined;

  // Instance Creation Date
  InstanceCreationDate: Date | undefined;
  x00080012: Date | undefined;

  // Instance Creation Time
  InstanceCreationTime: string | undefined;
  x00080013: string | undefined;

  // Instance Creator UID
  InstanceCreatorUID: string | undefined;
  x00080014: string | undefined;

  // Instance Coercion DateTime
  InstanceCoercionDateTime: string | undefined;
  x00080015: string | undefined;

  // SOP Class UID
  SOPClassUID: string | undefined;
  x00080016: string | undefined;

  // SOP Instance UID
  SOPInstanceUID: string | undefined;
  x00080018: string | undefined;

  // Related General SOP Class UID
  RelatedGeneralSOPClassUID: Array<string> | undefined;
  x0008001a: Array<string> | undefined;

  // Original Specialized SOP Class UID
  OriginalSpecializedSOPClassUID: string | undefined;
  x0008001b: string | undefined;

  // Study Date
  StudyDate: Date | undefined;
  x00080020: Date | undefined;

  // Series Date
  SeriesDate: Date | undefined;
  x00080021: Date | undefined;

  // Acquisition Date
  AcquisitionDate: Date | undefined;
  x00080022: Date | undefined;

  // Content Date
  ContentDate: Date | undefined;
  x00080023: Date | undefined;

  // Overlay Date
  OverlayDate: Date | undefined;
  x00080024: Date | undefined;

  // Curve Date
  CurveDate: Date | undefined;
  x00080025: Date | undefined;

  // Acquisition DateTime
  AcquisitionDateTime: string | undefined;
  x0008002a: string | undefined;

  // Study Time
  StudyTime: string | undefined;
  x00080030: string | undefined;

  // Series Time
  SeriesTime: string | undefined;
  x00080031: string | undefined;

  // Acquisition Time
  AcquisitionTime: string | undefined;
  x00080032: string | undefined;

  // Content Time
  ContentTime: string | undefined;
  x00080033: string | undefined;

  // Overlay Time
  OverlayTime: string | undefined;
  x00080034: string | undefined;

  // Curve Time
  CurveTime: string | undefined;
  x00080035: string | undefined;

  // Data Set Type
  DataSetType: number | undefined;
  x00080040: number | undefined;

  // Data Set Subtype
  DataSetSubtype: string | undefined;
  x00080041: string | undefined;

  // Nuclear Medicine Series Type
  NuclearMedicineSeriesType: string | undefined;
  x00080042: string | undefined;

  // Accession Number
  AccessionNumber: string | undefined;
  x00080050: string | undefined;

  // Issuer of Accession Number Sequence
  IssuerOfAccessionNumberSequence: Array<Dataset> | undefined;
  x00080051: Array<Dataset> | undefined;

  // Query/Retrieve Level
  QueryRetrieveLevel: string | undefined;
  x00080052: string | undefined;

  // Query/Retrieve View
  QueryRetrieveView: string | undefined;
  x00080053: string | undefined;

  // Retrieve AE Title
  RetrieveAETitle: Array<string> | undefined;
  x00080054: Array<string> | undefined;

  // Instance Availability
  InstanceAvailability: string | undefined;
  x00080056: string | undefined;

  // Failed SOP Instance UID List
  FailedSOPInstanceUIDList: Array<string> | undefined;
  x00080058: Array<string> | undefined;

  // Modality
  Modality: string | undefined;
  x00080060: string | undefined;

  // Modalities in Study
  ModalitiesInStudy: Array<string> | undefined;
  x00080061: Array<string> | undefined;

  // SOP Classes in Study
  SOPClassesInStudy: Array<string> | undefined;
  x00080062: Array<string> | undefined;

  // Conversion Type
  ConversionType: string | undefined;
  x00080064: string | undefined;

  // Presentation Intent Type
  PresentationIntentType: string | undefined;
  x00080068: string | undefined;

  // Manufacturer
  Manufacturer: string | undefined;
  x00080070: string | undefined;

  // Institution Name
  InstitutionName: string | undefined;
  x00080080: string | undefined;

  // Institution Code Sequence
  InstitutionCodeSequence: Array<Dataset> | undefined;
  x00080082: Array<Dataset> | undefined;

  // Referring Physician's Name
  ReferringPhysicianName: any | undefined;
  x00080090: any | undefined;

  // Referring Physician's Telephone Numbers
  ReferringPhysicianTelephoneNumbers: Array<string> | undefined;
  x00080094: Array<string> | undefined;

  // Referring Physician Identification Sequence
  ReferringPhysicianIdentificationSequence: Array<Dataset> | undefined;
  x00080096: Array<Dataset> | undefined;

  // Code Value
  CodeValue: string | undefined;
  x00080100: string | undefined;

  // Extended Code Value
  ExtendedCodeValue: string | undefined;
  x00080101: string | undefined;

  // Coding Scheme Designator
  CodingSchemeDesignator: string | undefined;
  x00080102: string | undefined;

  // Coding Scheme Version
  CodingSchemeVersion: string | undefined;
  x00080103: string | undefined;

  // Code Meaning
  CodeMeaning: string | undefined;
  x00080104: string | undefined;

  // Mapping Resource
  MappingResource: string | undefined;
  x00080105: string | undefined;

  // Context Group Version
  ContextGroupVersion: string | undefined;
  x00080106: string | undefined;

  // Context Group Local Version
  ContextGroupLocalVersion: string | undefined;
  x00080107: string | undefined;

  // Context Group Extension Flag
  ContextGroupExtensionFlag: string | undefined;
  x0008010b: string | undefined;

  // Coding Scheme UID
  CodingSchemeUID: string | undefined;
  x0008010c: string | undefined;

  // Context Group Extension Creator UID
  ContextGroupExtensionCreatorUID: string | undefined;
  x0008010d: string | undefined;

  // Context Identifier
  ContextIdentifier: string | undefined;
  x0008010f: string | undefined;

  // Coding Scheme Identification Sequence
  CodingSchemeIdentificationSequence: Array<Dataset> | undefined;
  x00080110: Array<Dataset> | undefined;

  // Coding Scheme Registry
  CodingSchemeRegistry: string | undefined;
  x00080112: string | undefined;

  // Context UID
  ContextUID: string | undefined;
  x00080117: string | undefined;

  // Timezone Offset From UTC
  TimezoneOffsetFromUTC: string | undefined;
  x00080201: string | undefined;

  // Network ID
  NetworkID: string | undefined;
  x00081000: string | undefined;

  // Station Name
  StationName: string | undefined;
  x00081010: string | undefined;

  // Study Description
  StudyDescription: string | undefined;
  x00081030: string | undefined;

  // Procedure Code Sequence
  ProcedureCodeSequence: Array<Dataset> | undefined;
  x00081032: Array<Dataset> | undefined;

  // Series Description
  SeriesDescription: string | undefined;
  x0008103e: string | undefined;

  // Series Description Code Sequence
  SeriesDescriptionCodeSequence: Array<Dataset> | undefined;
  x0008103f: Array<Dataset> | undefined;

  // Institutional Department Name
  InstitutionalDepartmentName: string | undefined;
  x00081040: string | undefined;

  // Physician(s) of Record
  PhysiciansOfRecord: Array<any> | undefined;
  x00081048: Array<any> | undefined;

  // Physician(s) of Record Identification Sequence
  PhysiciansOfRecordIdentificationSequence: Array<Dataset> | undefined;
  x00081049: Array<Dataset> | undefined;

  // Performing Physician's Name
  PerformingPhysicianName: Array<any> | undefined;
  x00081050: Array<any> | undefined;

  // Performing Physician Identification Sequence
  PerformingPhysicianIdentificationSequence: Array<Dataset> | undefined;
  x00081052: Array<Dataset> | undefined;

  // Name of Physician(s) Reading Study
  NameOfPhysiciansReadingStudy: Array<any> | undefined;
  x00081060: Array<any> | undefined;

  // Physician(s) Reading Study Identification Sequence
  PhysiciansReadingStudyIdentificationSequence: Array<Dataset> | undefined;
  x00081062: Array<Dataset> | undefined;

  // Operators' Name
  OperatorsName: Array<any> | undefined;
  x00081070: Array<any> | undefined;

  // Operator Identification Sequence
  OperatorIdentificationSequence: Array<Dataset> | undefined;
  x00081072: Array<Dataset> | undefined;

  // Admitting Diagnoses Description
  AdmittingDiagnosesDescription: Array<string> | undefined;
  x00081080: Array<string> | undefined;

  // Admitting Diagnoses Code Sequence
  AdmittingDiagnosesCodeSequence: Array<Dataset> | undefined;
  x00081084: Array<Dataset> | undefined;

  // Manufacturer's Model Name
  ManufacturerModelName: string | undefined;
  x00081090: string | undefined;

  // Referenced Results Sequence
  ReferencedResultsSequence: Array<Dataset> | undefined;
  x00081100: Array<Dataset> | undefined;

  // Referenced Study Sequence
  ReferencedStudySequence: Array<Dataset> | undefined;
  x00081110: Array<Dataset> | undefined;

  // Referenced Performed Procedure Step Sequence
  ReferencedPerformedProcedureStepSequence: Array<Dataset> | undefined;
  x00081111: Array<Dataset> | undefined;

  // Referenced Series Sequence
  ReferencedSeriesSequence: Array<Dataset> | undefined;
  x00081115: Array<Dataset> | undefined;

  // Referenced Patient Sequence
  ReferencedPatientSequence: Array<Dataset> | undefined;
  x00081120: Array<Dataset> | undefined;

  // Referenced Visit Sequence
  ReferencedVisitSequence: Array<Dataset> | undefined;
  x00081125: Array<Dataset> | undefined;

  // Referenced Overlay Sequence
  ReferencedOverlaySequence: Array<Dataset> | undefined;
  x00081130: Array<Dataset> | undefined;

  // Referenced Stereometric Instance Sequence
  ReferencedStereometricInstanceSequence: Array<Dataset> | undefined;
  x00081134: Array<Dataset> | undefined;

  // Referenced Waveform Sequence
  ReferencedWaveformSequence: Array<Dataset> | undefined;
  x0008113a: Array<Dataset> | undefined;

  // Referenced Image Sequence
  ReferencedImageSequence: Array<Dataset> | undefined;
  x00081140: Array<Dataset> | undefined;

  // Referenced Curve Sequence
  ReferencedCurveSequence: Array<Dataset> | undefined;
  x00081145: Array<Dataset> | undefined;

  // Referenced Instance Sequence
  ReferencedInstanceSequence: Array<Dataset> | undefined;
  x0008114a: Array<Dataset> | undefined;

  // Referenced Real World Value Mapping Instance Sequence
  ReferencedRealWorldValueMappingInstanceSequence: Array<Dataset> | undefined;
  x0008114b: Array<Dataset> | undefined;

  // Referenced SOP Class UID
  ReferencedSOPClassUID: string | undefined;
  x00081150: string | undefined;

  // Referenced SOP Instance UID
  ReferencedSOPInstanceUID: string | undefined;
  x00081155: string | undefined;

  // SOP Classes Supported
  SOPClassesSupported: Array<string> | undefined;
  x0008115a: Array<string> | undefined;

  // Referenced Frame Number
  ReferencedFrameNumber: Array<number> | undefined;
  x00081160: Array<number> | undefined;

  // Simple Frame List
  SimpleFrameList: Array<number> | undefined;
  x00081161: Array<number> | undefined;

  // Calculated Frame List
  CalculatedFrameList: Array<number> | undefined;
  x00081162: Array<number> | undefined;

  // Time Range
  TimeRange: Array<number> | undefined;
  x00081163: Array<number> | undefined;

  // Frame Extraction Sequence
  FrameExtractionSequence: Array<Dataset> | undefined;
  x00081164: Array<Dataset> | undefined;

  // Multi-frame Source SOP Instance UID
  MultiFrameSourceSOPInstanceUID: string | undefined;
  x00081167: string | undefined;

  // Transaction UID
  TransactionUID: string | undefined;
  x00081195: string | undefined;

  // Warning Reason
  WarningReason: number | undefined;
  x00081196: number | undefined;

  // Failure Reason
  FailureReason: number | undefined;
  x00081197: number | undefined;

  // Failed SOP Sequence
  FailedSOPSequence: Array<Dataset> | undefined;
  x00081198: Array<Dataset> | undefined;

  // Referenced SOP Sequence
  ReferencedSOPSequence: Array<Dataset> | undefined;
  x00081199: Array<Dataset> | undefined;

  // Studies Containing Other Referenced Instances Sequence
  StudiesContainingOtherReferencedInstancesSequence: Array<Dataset> | undefined;
  x00081200: Array<Dataset> | undefined;

  // Related Series Sequence
  RelatedSeriesSequence: Array<Dataset> | undefined;
  x00081250: Array<Dataset> | undefined;

  // Lossy Image Compression (Retired)
  LossyImageCompressionRetired: string | undefined;
  x00082110: string | undefined;

  // Source Image Sequence
  SourceImageSequence: Array<Dataset> | undefined;
  x00082112: Array<Dataset> | undefined;

  // Stage Name
  StageName: string | undefined;
  x00082120: string | undefined;

  // Stage Number
  StageNumber: number | undefined;
  x00082122: number | undefined;

  // Number of Stages
  NumberOfStages: number | undefined;
  x00082124: number | undefined;

  // View Name
  ViewName: string | undefined;
  x00082127: string | undefined;

  // View Number
  ViewNumber: number | undefined;
  x00082128: number | undefined;

  // Number of Event Timers
  NumberOfEventTimers: number | undefined;
  x00082129: number | undefined;

  // Number of Views in Stage
  NumberOfViewsInStage: number | undefined;
  x0008212a: number | undefined;

  // Event Elapsed Time(s)
  EventElapsedTimes: Array<number> | undefined;
  x00082130: Array<number> | undefined;

  // Event Timer Name(s)
  EventTimerNames: Array<string> | undefined;
  x00082132: Array<string> | undefined;

  // Event Timer Sequence
  EventTimerSequence: Array<Dataset> | undefined;
  x00082133: Array<Dataset> | undefined;

  // Event Time Offset
  EventTimeOffset: number | undefined;
  x00082134: number | undefined;

  // Event Code Sequence
  EventCodeSequence: Array<Dataset> | undefined;
  x00082135: Array<Dataset> | undefined;

  // Start Trim
  StartTrim: number | undefined;
  x00082142: number | undefined;

  // Stop Trim
  StopTrim: number | undefined;
  x00082143: number | undefined;

  // Recommended Display Frame Rate
  RecommendedDisplayFrameRate: number | undefined;
  x00082144: number | undefined;

  // Transducer Position
  TransducerPosition: string | undefined;
  x00082200: string | undefined;

  // Transducer Orientation
  TransducerOrientation: string | undefined;
  x00082204: string | undefined;

  // Anatomic Structure
  AnatomicStructure: string | undefined;
  x00082208: string | undefined;

  // Anatomic Region Sequence
  AnatomicRegionSequence: Array<Dataset> | undefined;
  x00082218: Array<Dataset> | undefined;

  // Anatomic Region Modifier Sequence
  AnatomicRegionModifierSequence: Array<Dataset> | undefined;
  x00082220: Array<Dataset> | undefined;

  // Primary Anatomic Structure Sequence
  PrimaryAnatomicStructureSequence: Array<Dataset> | undefined;
  x00082228: Array<Dataset> | undefined;

  // Anatomic Structure
  AnatomicStructureSpaceOrRegionSequence: Array<Dataset> | undefined;
  x00082229: Array<Dataset> | undefined;

  // Primary Anatomic Structure Modifier Sequence
  PrimaryAnatomicStructureModifierSequence: Array<Dataset> | undefined;
  x00082230: Array<Dataset> | undefined;

  // Transducer Position Sequence
  TransducerPositionSequence: Array<Dataset> | undefined;
  x00082240: Array<Dataset> | undefined;

  // Transducer Position Modifier Sequence
  TransducerPositionModifierSequence: Array<Dataset> | undefined;
  x00082242: Array<Dataset> | undefined;

  // Transducer Orientation Sequence
  TransducerOrientationSequence: Array<Dataset> | undefined;
  x00082244: Array<Dataset> | undefined;

  // Transducer Orientation Modifier Sequence
  TransducerOrientationModifierSequence: Array<Dataset> | undefined;
  x00082246: Array<Dataset> | undefined;

  // Anatomic Structure Space Or Region Code Sequence (Trial)
  AnatomicStructureSpaceOrRegionCodeSequenceTrial: Array<Dataset> | undefined;
  x00082251: Array<Dataset> | undefined;

  // Anatomic Portal Of Entrance Code Sequence (Trial)
  AnatomicPortalOfEntranceCodeSequenceTrial: Array<Dataset> | undefined;
  x00082253: Array<Dataset> | undefined;

  // Anatomic Approach Direction Code Sequence (Trial)
  AnatomicApproachDirectionCodeSequenceTrial: Array<Dataset> | undefined;
  x00082255: Array<Dataset> | undefined;

  // Anatomic Perspective Code Sequence (Trial)
  AnatomicPerspectiveCodeSequenceTrial: Array<Dataset> | undefined;
  x00082257: Array<Dataset> | undefined;

  // Anatomic Location Of Examining Instrument Code Sequence (Trial)
  AnatomicLocationOfExaminingInstrumentCodeSequenceTrial: Array<Dataset> | undefined;
  x00082259: Array<Dataset> | undefined;

  // Anatomic Structure Space Or Region Modifier Code Sequence (Trial)
  AnatomicStructureSpaceOrRegionModifierCodeSequenceTrial: Array<Dataset> | undefined;
  x0008225a: Array<Dataset> | undefined;

  // OnAxis Background Anatomic Structure Code Sequence (Trial)
  OnAxisBackgroundAnatomicStructureCodeSequenceTrial: Array<Dataset> | undefined;
  x0008225c: Array<Dataset> | undefined;

  // Alternate Representation Sequence
  AlternateRepresentationSequence: Array<Dataset> | undefined;
  x00083001: Array<Dataset> | undefined;

  // Irradiation Event UID
  IrradiationEventUID: Array<string> | undefined;
  x00083010: Array<string> | undefined;

  // Source Irradiation Event Sequence
  SourceIrradiationEventSequence: Array<Dataset> | undefined;
  x00083011: Array<Dataset> | undefined;

  // Radiopharmaceutical Administration Event UID
  RadiopharmaceuticalAdministrationEventUID: string | undefined;
  x00083012: string | undefined;

  // Frame Type
  FrameType: Array<string> | undefined;
  x00089007: Array<string> | undefined;

  // Referenced Image Evidence Sequence
  ReferencedImageEvidenceSequence: Array<Dataset> | undefined;
  x00089092: Array<Dataset> | undefined;

  // Referenced Raw Data Sequence
  ReferencedRawDataSequence: Array<Dataset> | undefined;
  x00089121: Array<Dataset> | undefined;

  // Creator-Version UID
  CreatorVersionUID: string | undefined;
  x00089123: string | undefined;

  // Derivation Image Sequence
  DerivationImageSequence: Array<Dataset> | undefined;
  x00089124: Array<Dataset> | undefined;

  // Source Image Evidence Sequence
  SourceImageEvidenceSequence: Array<Dataset> | undefined;
  x00089154: Array<Dataset> | undefined;

  // Pixel Presentation
  PixelPresentation: string | undefined;
  x00089205: string | undefined;

  // Volumetric Properties
  VolumetricProperties: string | undefined;
  x00089206: string | undefined;

  // Volume Based Calculation Technique
  VolumeBasedCalculationTechnique: string | undefined;
  x00089207: string | undefined;

  // Complex Image Component
  ComplexImageComponent: string | undefined;
  x00089208: string | undefined;

  // Acquisition Contrast
  AcquisitionContrast: string | undefined;
  x00089209: string | undefined;

  // Derivation Code Sequence
  DerivationCodeSequence: Array<Dataset> | undefined;
  x00089215: Array<Dataset> | undefined;

  // Referenced Presentation State Sequence
  ReferencedPresentationStateSequence: Array<Dataset> | undefined;
  x00089237: Array<Dataset> | undefined;

  // Referenced Other Plane Sequence
  ReferencedOtherPlaneSequence: Array<Dataset> | undefined;
  x00089410: Array<Dataset> | undefined;

  // Frame Display Sequence
  FrameDisplaySequence: Array<Dataset> | undefined;
  x00089458: Array<Dataset> | undefined;

  // Recommended Display Frame Rate in Float
  RecommendedDisplayFrameRateInFloat: number | undefined;
  x00089459: number | undefined;

  // Skip Frame Range Flag
  SkipFrameRangeFlag: string | undefined;
  x00089460: string | undefined;

  // Patient's Name
  PatientName: any | undefined;
  x00100010: any | undefined;

  // Patient ID
  PatientID: string | undefined;
  x00100020: string | undefined;

  // Issuer of Patient ID
  IssuerOfPatientID: string | undefined;
  x00100021: string | undefined;

  // Type of Patient ID
  TypeOfPatientID: string | undefined;
  x00100022: string | undefined;

  // Issuer of Patient ID Qualifiers Sequence
  IssuerOfPatientIDQualifiersSequence: Array<Dataset> | undefined;
  x00100024: Array<Dataset> | undefined;

  // Patient's Birth Date
  PatientBirthDate: Date | undefined;
  x00100030: Date | undefined;

  // Patient's Birth Time
  PatientBirthTime: string | undefined;
  x00100032: string | undefined;

  // Patient's Sex
  PatientSex: string | undefined;
  x00100040: string | undefined;

  // Patient's Insurance Plan Code Sequence
  PatientInsurancePlanCodeSequence: Array<Dataset> | undefined;
  x00100050: Array<Dataset> | undefined;

  // Patient's Primary Language Code Sequence
  PatientPrimaryLanguageCodeSequence: Array<Dataset> | undefined;
  x00100101: Array<Dataset> | undefined;

  // Patient's Primary Language Modifier Code Sequence
  PatientPrimaryLanguageModifierCodeSequence: Array<Dataset> | undefined;
  x00100102: Array<Dataset> | undefined;

  // Quality Control Subject
  QualityControlSubject: string | undefined;
  x00100200: string | undefined;

  // Quality Control Subject Type Code Sequence
  QualityControlSubjectTypeCodeSequence: Array<Dataset> | undefined;
  x00100201: Array<Dataset> | undefined;

  // Other Patient IDs
  OtherPatientIDs: Array<string> | undefined;
  x00101000: Array<string> | undefined;

  // Other Patient Names
  OtherPatientNames: Array<any> | undefined;
  x00101001: Array<any> | undefined;

  // Other Patient IDs Sequence
  OtherPatientIDsSequence: Array<Dataset> | undefined;
  x00101002: Array<Dataset> | undefined;

  // Patient's Birth Name
  PatientBirthName: any | undefined;
  x00101005: any | undefined;

  // Patient's Age
  PatientAge: string | undefined;
  x00101010: string | undefined;

  // Patient's Size
  PatientSize: number | undefined;
  x00101020: number | undefined;

  // Patient's Size Code Sequence
  PatientSizeCodeSequence: Array<Dataset> | undefined;
  x00101021: Array<Dataset> | undefined;

  // Patient's Weight
  PatientWeight: number | undefined;
  x00101030: number | undefined;

  // Patient's Address
  PatientAddress: string | undefined;
  x00101040: string | undefined;

  // Insurance Plan Identification
  InsurancePlanIdentification: Array<string> | undefined;
  x00101050: Array<string> | undefined;

  // Patient's Mother's Birth Name
  PatientMotherBirthName: any | undefined;
  x00101060: any | undefined;

  // Military Rank
  MilitaryRank: string | undefined;
  x00101080: string | undefined;

  // Branch of Service
  BranchOfService: string | undefined;
  x00101081: string | undefined;

  // Medical Record Locator
  MedicalRecordLocator: string | undefined;
  x00101090: string | undefined;

  // Referenced Patient Photo Sequence
  ReferencedPatientPhotoSequence: Array<Dataset> | undefined;
  x00101100: Array<Dataset> | undefined;

  // Medical Alerts
  MedicalAlerts: Array<string> | undefined;
  x00102000: Array<string> | undefined;

  // Allergies
  Allergies: Array<string> | undefined;
  x00102110: Array<string> | undefined;

  // Country of Residence
  CountryOfResidence: string | undefined;
  x00102150: string | undefined;

  // Region of Residence
  RegionOfResidence: string | undefined;
  x00102152: string | undefined;

  // Patient's Telephone Numbers
  PatientTelephoneNumbers: Array<string> | undefined;
  x00102154: Array<string> | undefined;

  // Ethnic Group
  EthnicGroup: string | undefined;
  x00102160: string | undefined;

  // Occupation
  Occupation: string | undefined;
  x00102180: string | undefined;

  // Smoking Status
  SmokingStatus: string | undefined;
  x001021a0: string | undefined;

  // Pregnancy Status
  PregnancyStatus: number | undefined;
  x001021c0: number | undefined;

  // Last Menstrual Date
  LastMenstrualDate: Date | undefined;
  x001021d0: Date | undefined;

  // Patient's Religious Preference
  PatientReligiousPreference: string | undefined;
  x001021f0: string | undefined;

  // Patient Species Description
  PatientSpeciesDescription: string | undefined;
  x00102201: string | undefined;

  // Patient Species Code Sequence
  PatientSpeciesCodeSequence: Array<Dataset> | undefined;
  x00102202: Array<Dataset> | undefined;

  // Patient's Sex Neutered
  PatientSexNeutered: string | undefined;
  x00102203: string | undefined;

  // Anatomical Orientation Type
  AnatomicalOrientationType: string | undefined;
  x00102210: string | undefined;

  // Patient Breed Description
  PatientBreedDescription: string | undefined;
  x00102292: string | undefined;

  // Patient Breed Code Sequence
  PatientBreedCodeSequence: Array<Dataset> | undefined;
  x00102293: Array<Dataset> | undefined;

  // Breed Registration Sequence
  BreedRegistrationSequence: Array<Dataset> | undefined;
  x00102294: Array<Dataset> | undefined;

  // Breed Registration Number
  BreedRegistrationNumber: string | undefined;
  x00102295: string | undefined;

  // Breed Registry Code Sequence
  BreedRegistryCodeSequence: Array<Dataset> | undefined;
  x00102296: Array<Dataset> | undefined;

  // Responsible Person
  ResponsiblePerson: any | undefined;
  x00102297: any | undefined;

  // Responsible Person Role
  ResponsiblePersonRole: string | undefined;
  x00102298: string | undefined;

  // Responsible Organization
  ResponsibleOrganization: string | undefined;
  x00102299: string | undefined;

  // Examined Body Thickness
  ExaminedBodyThickness: number | undefined;
  x00109431: number | undefined;

  // Clinical Trial Sponsor Name
  ClinicalTrialSponsorName: string | undefined;
  x00120010: string | undefined;

  // Clinical Trial Protocol ID
  ClinicalTrialProtocolID: string | undefined;
  x00120020: string | undefined;

  // Clinical Trial Protocol Name
  ClinicalTrialProtocolName: string | undefined;
  x00120021: string | undefined;

  // Clinical Trial Site ID
  ClinicalTrialSiteID: string | undefined;
  x00120030: string | undefined;

  // Clinical Trial Site Name
  ClinicalTrialSiteName: string | undefined;
  x00120031: string | undefined;

  // Clinical Trial Subject ID
  ClinicalTrialSubjectID: string | undefined;
  x00120040: string | undefined;

  // Clinical Trial Subject Reading ID
  ClinicalTrialSubjectReadingID: string | undefined;
  x00120042: string | undefined;

  // Clinical Trial Time Point ID
  ClinicalTrialTimePointID: string | undefined;
  x00120050: string | undefined;

  // Clinical Trial Coordinating Center Name
  ClinicalTrialCoordinatingCenterName: string | undefined;
  x00120060: string | undefined;

  // Patient Identity Removed
  PatientIdentityRemoved: string | undefined;
  x00120062: string | undefined;

  // De-identification Method
  DeidentificationMethod: Array<string> | undefined;
  x00120063: Array<string> | undefined;

  // De-identification Method Code Sequence
  DeidentificationMethodCodeSequence: Array<Dataset> | undefined;
  x00120064: Array<Dataset> | undefined;

  // Clinical Trial Series ID
  ClinicalTrialSeriesID: string | undefined;
  x00120071: string | undefined;

  // Clinical Trial Series Description
  ClinicalTrialSeriesDescription: string | undefined;
  x00120072: string | undefined;

  // Clinical Trial Protocol Ethics Committee Name
  ClinicalTrialProtocolEthicsCommitteeName: string | undefined;
  x00120081: string | undefined;

  // Clinical Trial Protocol Ethics Committee Approval Number
  ClinicalTrialProtocolEthicsCommitteeApprovalNumber: string | undefined;
  x00120082: string | undefined;

  // Consent for Clinical Trial Use Sequence
  ConsentForClinicalTrialUseSequence: Array<Dataset> | undefined;
  x00120083: Array<Dataset> | undefined;

  // Distribution Type
  DistributionType: string | undefined;
  x00120084: string | undefined;

  // Consent for Distribution Flag
  ConsentForDistributionFlag: string | undefined;
  x00120085: string | undefined;

  // Material Thickness
  MaterialThickness: Array<number> | undefined;
  x00140030: Array<number> | undefined;

  // Material Pipe Diameter
  MaterialPipeDiameter: Array<number> | undefined;
  x00140032: Array<number> | undefined;

  // Material Isolation Diameter
  MaterialIsolationDiameter: Array<number> | undefined;
  x00140034: Array<number> | undefined;

  // Component Shape
  ComponentShape: string | undefined;
  x00140050: string | undefined;

  // Curvature Type
  CurvatureType: string | undefined;
  x00140052: string | undefined;

  // Outer Diameter
  OuterDiameter: number | undefined;
  x00140054: number | undefined;

  // Inner Diameter
  InnerDiameter: number | undefined;
  x00140056: number | undefined;

  // Expiry Date
  ExpiryDate: Date | undefined;
  x00141020: Date | undefined;

  // Evaluator Sequence
  EvaluatorSequence: Array<Dataset> | undefined;
  x00142002: Array<Dataset> | undefined;

  // Evaluator Number
  EvaluatorNumber: number | undefined;
  x00142004: number | undefined;

  // Evaluator Name
  EvaluatorName: any | undefined;
  x00142006: any | undefined;

  // Evaluation Attempt
  EvaluationAttempt: number | undefined;
  x00142008: number | undefined;

  // Indication Sequence
  IndicationSequence: Array<Dataset> | undefined;
  x00142012: Array<Dataset> | undefined;

  // Indication Number
  IndicationNumber: number | undefined;
  x00142014: number | undefined;

  // Indication Label
  IndicationLabel: string | undefined;
  x00142016: string | undefined;

  // Indication Type
  IndicationType: Array<string> | undefined;
  x0014201a: Array<string> | undefined;

  // Indication Disposition
  IndicationDisposition: string | undefined;
  x0014201c: string | undefined;

  // Indication ROI Sequence
  IndicationROISequence: Array<Dataset> | undefined;
  x0014201e: Array<Dataset> | undefined;

  // Indication Physical Property Sequence
  IndicationPhysicalPropertySequence: Array<Dataset> | undefined;
  x00142030: Array<Dataset> | undefined;

  // Property Label
  PropertyLabel: string | undefined;
  x00142032: string | undefined;

  // Coordinate System Number of Axes
  CoordinateSystemNumberOfAxes: number | undefined;
  x00142202: number | undefined;

  // Coordinate System Axes Sequence
  CoordinateSystemAxesSequence: Array<Dataset> | undefined;
  x00142204: Array<Dataset> | undefined;

  // Coordinate System Data Set Mapping
  CoordinateSystemDataSetMapping: string | undefined;
  x00142208: string | undefined;

  // Coordinate System Axis Number
  CoordinateSystemAxisNumber: number | undefined;
  x0014220a: number | undefined;

  // Coordinate System Axis Type
  CoordinateSystemAxisType: string | undefined;
  x0014220c: string | undefined;

  // Coordinate System Axis Units
  CoordinateSystemAxisUnits: string | undefined;
  x0014220e: string | undefined;

  // Coordinate System Transform Sequence
  CoordinateSystemTransformSequence: Array<Dataset> | undefined;
  x00142220: Array<Dataset> | undefined;

  // Transform Number of Axes
  TransformNumberOfAxes: number | undefined;
  x00142224: number | undefined;

  // Transform Order of Axes
  TransformOrderOfAxes: Array<number> | undefined;
  x00142226: Array<number> | undefined;

  // Transformed Axis Units
  TransformedAxisUnits: string | undefined;
  x00142228: string | undefined;

  // Coordinate System Transform Rotation and Scale Matrix
  CoordinateSystemTransformRotationAndScaleMatrix: Array<number> | undefined;
  x0014222a: Array<number> | undefined;

  // Coordinate System Transform Translation Matrix
  CoordinateSystemTransformTranslationMatrix: Array<number> | undefined;
  x0014222c: Array<number> | undefined;

  // Internal Detector Frame Time
  InternalDetectorFrameTime: number | undefined;
  x00143011: number | undefined;

  // Number of Frames Integrated
  NumberOfFramesIntegrated: number | undefined;
  x00143012: number | undefined;

  // Detector Temperature Sequence
  DetectorTemperatureSequence: Array<Dataset> | undefined;
  x00143020: Array<Dataset> | undefined;

  // Horizontal Offset of Sensor
  HorizontalOffsetOfSensor: number | undefined;
  x00143024: number | undefined;

  // Vertical Offset of Sensor
  VerticalOffsetOfSensor: number | undefined;
  x00143026: number | undefined;

  // Sensor Temperature
  SensorTemperature: number | undefined;
  x00143028: number | undefined;

  // Dark Current Sequence
  DarkCurrentSequence: Array<Dataset> | undefined;
  x00143040: Array<Dataset> | undefined;

  // Gain Correction Reference Sequence
  GainCorrectionReferenceSequence: Array<Dataset> | undefined;
  x00143060: Array<Dataset> | undefined;

  // KV Used in Gain Calibration
  KVUsedInGainCalibration: number | undefined;
  x00143071: number | undefined;

  // MA Used in Gain Calibration
  MAUsedInGainCalibration: number | undefined;
  x00143072: number | undefined;

  // Number of Frames Used for Integration
  NumberOfFramesUsedForIntegration: number | undefined;
  x00143073: number | undefined;

  // Filter Material Used in Gain Calibration
  FilterMaterialUsedInGainCalibration: string | undefined;
  x00143074: string | undefined;

  // Filter Thickness Used in Gain Calibration
  FilterThicknessUsedInGainCalibration: number | undefined;
  x00143075: number | undefined;

  // Date of Gain Calibration
  DateOfGainCalibration: Date | undefined;
  x00143076: Date | undefined;

  // Time of Gain Calibration
  TimeOfGainCalibration: string | undefined;
  x00143077: string | undefined;

  // Pulser Equipment Sequence
  PulserEquipmentSequence: Array<Dataset> | undefined;
  x00144002: Array<Dataset> | undefined;

  // Pulser Type
  PulserType: string | undefined;
  x00144004: string | undefined;

  // Receiver Equipment Sequence
  ReceiverEquipmentSequence: Array<Dataset> | undefined;
  x00144008: Array<Dataset> | undefined;

  // Amplifier Type
  AmplifierType: string | undefined;
  x0014400a: string | undefined;

  // Pre-Amplifier Equipment Sequence
  PreAmplifierEquipmentSequence: Array<Dataset> | undefined;
  x0014400e: Array<Dataset> | undefined;

  // Transmit Transducer Sequence
  TransmitTransducerSequence: Array<Dataset> | undefined;
  x00144010: Array<Dataset> | undefined;

  // Receive Transducer Sequence
  ReceiveTransducerSequence: Array<Dataset> | undefined;
  x00144011: Array<Dataset> | undefined;

  // Number of Elements
  NumberOfElements: number | undefined;
  x00144012: number | undefined;

  // Element Shape
  ElementShape: string | undefined;
  x00144013: string | undefined;

  // Element Dimension A
  ElementDimensionA: number | undefined;
  x00144014: number | undefined;

  // Element Dimension B
  ElementDimensionB: number | undefined;
  x00144015: number | undefined;

  // Element Pitch A
  ElementPitchA: number | undefined;
  x00144016: number | undefined;

  // Measured Beam Dimension A
  MeasuredBeamDimensionA: number | undefined;
  x00144017: number | undefined;

  // Measured Beam Dimension B
  MeasuredBeamDimensionB: number | undefined;
  x00144018: number | undefined;

  // Location of Measured Beam Diameter
  LocationOfMeasuredBeamDiameter: number | undefined;
  x00144019: number | undefined;

  // Nominal Frequency
  NominalFrequency: number | undefined;
  x0014401a: number | undefined;

  // Measured Center Frequency
  MeasuredCenterFrequency: number | undefined;
  x0014401b: number | undefined;

  // Measured Bandwidth
  MeasuredBandwidth: number | undefined;
  x0014401c: number | undefined;

  // Element Pitch B
  ElementPitchB: number | undefined;
  x0014401d: number | undefined;

  // Pulser Settings Sequence
  PulserSettingsSequence: Array<Dataset> | undefined;
  x00144020: Array<Dataset> | undefined;

  // Pulse Width
  PulseWidth: number | undefined;
  x00144022: number | undefined;

  // Excitation Frequency
  ExcitationFrequency: number | undefined;
  x00144024: number | undefined;

  // Modulation Type
  ModulationType: string | undefined;
  x00144026: string | undefined;

  // Damping
  Damping: number | undefined;
  x00144028: number | undefined;

  // Receiver Settings Sequence
  ReceiverSettingsSequence: Array<Dataset> | undefined;
  x00144030: Array<Dataset> | undefined;

  // Acquired Soundpath Length
  AcquiredSoundpathLength: number | undefined;
  x00144031: number | undefined;

  // Acquisition Compression Type
  AcquisitionCompressionType: string | undefined;
  x00144032: string | undefined;

  // Acquisition Sample Size
  AcquisitionSampleSize: number | undefined;
  x00144033: number | undefined;

  // Rectifier Smoothing
  RectifierSmoothing: number | undefined;
  x00144034: number | undefined;

  // DAC Sequence
  DACSequence: Array<Dataset> | undefined;
  x00144035: Array<Dataset> | undefined;

  // DAC Type
  DACType: string | undefined;
  x00144036: string | undefined;

  // DAC Gain Points
  DACGainPoints: Array<number> | undefined;
  x00144038: Array<number> | undefined;

  // DAC Time Points
  DACTimePoints: Array<number> | undefined;
  x0014403a: Array<number> | undefined;

  // DAC Amplitude
  DACAmplitude: Array<number> | undefined;
  x0014403c: Array<number> | undefined;

  // Pre-Amplifier Settings Sequence
  PreAmplifierSettingsSequence: Array<Dataset> | undefined;
  x00144040: Array<Dataset> | undefined;

  // Transmit Transducer Settings Sequence
  TransmitTransducerSettingsSequence: Array<Dataset> | undefined;
  x00144050: Array<Dataset> | undefined;

  // Receive Transducer Settings Sequence
  ReceiveTransducerSettingsSequence: Array<Dataset> | undefined;
  x00144051: Array<Dataset> | undefined;

  // Incident Angle
  IncidentAngle: number | undefined;
  x00144052: number | undefined;

  // Coupling Velocity
  CouplingVelocity: number | undefined;
  x00144057: number | undefined;

  // Probe Center Location X
  ProbeCenterLocationX: number | undefined;
  x00144058: number | undefined;

  // Probe Center Location Z
  ProbeCenterLocationZ: number | undefined;
  x00144059: number | undefined;

  // Sound Path Length
  SoundPathLength: number | undefined;
  x0014405a: number | undefined;

  // Gate Settings Sequence
  GateSettingsSequence: Array<Dataset> | undefined;
  x00144060: Array<Dataset> | undefined;

  // Gate Threshold
  GateThreshold: number | undefined;
  x00144062: number | undefined;

  // Velocity of Sound
  VelocityOfSound: number | undefined;
  x00144064: number | undefined;

  // Calibration Settings Sequence
  CalibrationSettingsSequence: Array<Dataset> | undefined;
  x00144070: Array<Dataset> | undefined;

  // Procedure Version
  ProcedureVersion: string | undefined;
  x00144074: string | undefined;

  // Procedure Creation Date
  ProcedureCreationDate: Date | undefined;
  x00144076: Date | undefined;

  // Procedure Expiration Date
  ProcedureExpirationDate: Date | undefined;
  x00144078: Date | undefined;

  // Procedure Last Modified Date
  ProcedureLastModifiedDate: Date | undefined;
  x0014407a: Date | undefined;

  // Calibration Time
  CalibrationTime: Array<string> | undefined;
  x0014407c: Array<string> | undefined;

  // Calibration Date
  CalibrationDate: Array<Date> | undefined;
  x0014407e: Array<Date> | undefined;

  // Probe Drive Equipment Sequence
  ProbeDriveEquipmentSequence: Array<Dataset> | undefined;
  x00144080: Array<Dataset> | undefined;

  // Drive Type
  DriveType: string | undefined;
  x00144081: string | undefined;

  // Drive Probe Sequence
  DriveProbeSequence: Array<Dataset> | undefined;
  x00144083: Array<Dataset> | undefined;

  // Probe Inductance
  ProbeInductance: number | undefined;
  x00144084: number | undefined;

  // Probe Resistance
  ProbeResistance: number | undefined;
  x00144085: number | undefined;

  // Receive Probe Sequence
  ReceiveProbeSequence: Array<Dataset> | undefined;
  x00144086: Array<Dataset> | undefined;

  // Probe Drive Settings Sequence
  ProbeDriveSettingsSequence: Array<Dataset> | undefined;
  x00144087: Array<Dataset> | undefined;

  // Bridge Resistors
  BridgeResistors: number | undefined;
  x00144088: number | undefined;

  // Probe Orientation Angle
  ProbeOrientationAngle: number | undefined;
  x00144089: number | undefined;

  // User Selected Gain Y
  UserSelectedGainY: number | undefined;
  x0014408b: number | undefined;

  // User Selected Phase
  UserSelectedPhase: number | undefined;
  x0014408c: number | undefined;

  // User Selected Offset X
  UserSelectedOffsetX: number | undefined;
  x0014408d: number | undefined;

  // User Selected Offset Y
  UserSelectedOffsetY: number | undefined;
  x0014408e: number | undefined;

  // Channel Settings Sequence
  ChannelSettingsSequence: Array<Dataset> | undefined;
  x00144091: Array<Dataset> | undefined;

  // Channel Threshold
  ChannelThreshold: number | undefined;
  x00144092: number | undefined;

  // Scanner Settings Sequence
  ScannerSettingsSequence: Array<Dataset> | undefined;
  x0014409a: Array<Dataset> | undefined;

  // Translation Rate X
  TranslationRateX: number | undefined;
  x0014409c: number | undefined;

  // Translation Rate Y
  TranslationRateY: number | undefined;
  x0014409d: number | undefined;

  // Channel Overlap
  ChannelOverlap: number | undefined;
  x0014409f: number | undefined;

  // Image Quality Indicator Type
  ImageQualityIndicatorType: string | undefined;
  x001440a0: string | undefined;

  // Image Quality Indicator Material
  ImageQualityIndicatorMaterial: string | undefined;
  x001440a1: string | undefined;

  // Image Quality Indicator Size
  ImageQualityIndicatorSize: string | undefined;
  x001440a2: string | undefined;

  // LINAC Energy
  LINACEnergy: number | undefined;
  x00145002: number | undefined;

  // LINAC Output
  LINACOutput: number | undefined;
  x00145004: number | undefined;

  // Contrast/Bolus Agent
  ContrastBolusAgent: string | undefined;
  x00180010: string | undefined;

  // Contrast/Bolus Agent Sequence
  ContrastBolusAgentSequence: Array<Dataset> | undefined;
  x00180012: Array<Dataset> | undefined;

  // Contrast/Bolus T1 Relaxivity
  ContrastBolusT1Relaxivity: number | undefined;
  x00180013: number | undefined;

  // Contrast/Bolus Administration Route Sequence
  ContrastBolusAdministrationRouteSequence: Array<Dataset> | undefined;
  x00180014: Array<Dataset> | undefined;

  // Body Part Examined
  BodyPartExamined: string | undefined;
  x00180015: string | undefined;

  // Scanning Sequence
  ScanningSequence: Array<string> | undefined;
  x00180020: Array<string> | undefined;

  // Sequence Variant
  SequenceVariant: Array<string> | undefined;
  x00180021: Array<string> | undefined;

  // Scan Options
  ScanOptions: Array<string> | undefined;
  x00180022: Array<string> | undefined;

  // MR Acquisition Type
  MRAcquisitionType: string | undefined;
  x00180023: string | undefined;

  // Sequence Name
  SequenceName: string | undefined;
  x00180024: string | undefined;

  // Angio Flag
  AngioFlag: string | undefined;
  x00180025: string | undefined;

  // Intervention Drug Information Sequence
  InterventionDrugInformationSequence: Array<Dataset> | undefined;
  x00180026: Array<Dataset> | undefined;

  // Intervention Drug Stop Time
  InterventionDrugStopTime: string | undefined;
  x00180027: string | undefined;

  // Intervention Drug Dose
  InterventionDrugDose: number | undefined;
  x00180028: number | undefined;

  // Intervention Drug Code Sequence
  InterventionDrugCodeSequence: Array<Dataset> | undefined;
  x00180029: Array<Dataset> | undefined;

  // Additional Drug Sequence
  AdditionalDrugSequence: Array<Dataset> | undefined;
  x0018002a: Array<Dataset> | undefined;

  // Radionuclide
  Radionuclide: Array<string> | undefined;
  x00180030: Array<string> | undefined;

  // Radiopharmaceutical
  Radiopharmaceutical: string | undefined;
  x00180031: string | undefined;

  // Energy Window Centerline
  EnergyWindowCenterline: number | undefined;
  x00180032: number | undefined;

  // Energy Window Total Width
  EnergyWindowTotalWidth: Array<number> | undefined;
  x00180033: Array<number> | undefined;

  // Intervention Drug Name
  InterventionDrugName: string | undefined;
  x00180034: string | undefined;

  // Intervention Drug Start Time
  InterventionDrugStartTime: string | undefined;
  x00180035: string | undefined;

  // Intervention Sequence
  InterventionSequence: Array<Dataset> | undefined;
  x00180036: Array<Dataset> | undefined;

  // Therapy Type
  TherapyType: string | undefined;
  x00180037: string | undefined;

  // Intervention Status
  InterventionStatus: string | undefined;
  x00180038: string | undefined;

  // Therapy Description
  TherapyDescription: string | undefined;
  x00180039: string | undefined;

  // Cine Rate
  CineRate: number | undefined;
  x00180040: number | undefined;

  // Initial Cine Run State
  InitialCineRunState: string | undefined;
  x00180042: string | undefined;

  // Slice Thickness
  SliceThickness: number | undefined;
  x00180050: number | undefined;

  // KVP
  KVP: number | undefined;
  x00180060: number | undefined;

  // Counts Accumulated
  CountsAccumulated: number | undefined;
  x00180070: number | undefined;

  // Acquisition Termination Condition
  AcquisitionTerminationCondition: string | undefined;
  x00180071: string | undefined;

  // Effective Duration
  EffectiveDuration: number | undefined;
  x00180072: number | undefined;

  // Acquisition Start Condition
  AcquisitionStartCondition: string | undefined;
  x00180073: string | undefined;

  // Acquisition Start Condition Data
  AcquisitionStartConditionData: number | undefined;
  x00180074: number | undefined;

  // Acquisition Termination Condition Data
  AcquisitionTerminationConditionData: number | undefined;
  x00180075: number | undefined;

  // Repetition Time
  RepetitionTime: number | undefined;
  x00180080: number | undefined;

  // Echo Time
  EchoTime: number | undefined;
  x00180081: number | undefined;

  // Inversion Time
  InversionTime: number | undefined;
  x00180082: number | undefined;

  // Number of Averages
  NumberOfAverages: number | undefined;
  x00180083: number | undefined;

  // Imaging Frequency
  ImagingFrequency: number | undefined;
  x00180084: number | undefined;

  // Imaged Nucleus
  ImagedNucleus: string | undefined;
  x00180085: string | undefined;

  // Echo Number(s)
  EchoNumbers: Array<number> | undefined;
  x00180086: Array<number> | undefined;

  // Magnetic Field Strength
  MagneticFieldStrength: number | undefined;
  x00180087: number | undefined;

  // Spacing Between Slices
  SpacingBetweenSlices: number | undefined;
  x00180088: number | undefined;

  // Number of Phase Encoding Steps
  NumberOfPhaseEncodingSteps: number | undefined;
  x00180089: number | undefined;

  // Data Collection Diameter
  DataCollectionDiameter: number | undefined;
  x00180090: number | undefined;

  // Echo Train Length
  EchoTrainLength: number | undefined;
  x00180091: number | undefined;

  // Percent Sampling
  PercentSampling: number | undefined;
  x00180093: number | undefined;

  // Percent Phase Field of View
  PercentPhaseFieldOfView: number | undefined;
  x00180094: number | undefined;

  // Pixel Bandwidth
  PixelBandwidth: number | undefined;
  x00180095: number | undefined;

  // Device Serial Number
  DeviceSerialNumber: string | undefined;
  x00181000: string | undefined;

  // Device UID
  DeviceUID: string | undefined;
  x00181002: string | undefined;

  // Device ID
  DeviceID: string | undefined;
  x00181003: string | undefined;

  // Plate ID
  PlateID: string | undefined;
  x00181004: string | undefined;

  // Generator ID
  GeneratorID: string | undefined;
  x00181005: string | undefined;

  // Grid ID
  GridID: string | undefined;
  x00181006: string | undefined;

  // Cassette ID
  CassetteID: string | undefined;
  x00181007: string | undefined;

  // Gantry ID
  GantryID: string | undefined;
  x00181008: string | undefined;

  // Secondary Capture Device ID
  SecondaryCaptureDeviceID: string | undefined;
  x00181010: string | undefined;

  // Hardcopy Creation Device ID
  HardcopyCreationDeviceID: string | undefined;
  x00181011: string | undefined;

  // Date of Secondary Capture
  DateOfSecondaryCapture: Date | undefined;
  x00181012: Date | undefined;

  // Time of Secondary Capture
  TimeOfSecondaryCapture: string | undefined;
  x00181014: string | undefined;

  // Secondary Capture Device Manufacturer
  SecondaryCaptureDeviceManufacturer: string | undefined;
  x00181016: string | undefined;

  // Hardcopy Device Manufacturer
  HardcopyDeviceManufacturer: string | undefined;
  x00181017: string | undefined;

  // Secondary Capture Device Manufacturer's Model Name
  SecondaryCaptureDeviceManufacturerModelName: string | undefined;
  x00181018: string | undefined;

  // Secondary Capture Device Software Versions
  SecondaryCaptureDeviceSoftwareVersions: Array<string> | undefined;
  x00181019: Array<string> | undefined;

  // Hardcopy Device Software Version
  HardcopyDeviceSoftwareVersion: Array<string> | undefined;
  x0018101a: Array<string> | undefined;

  // Hardcopy Device Manufacturer's Model Name
  HardcopyDeviceManufacturerModelName: string | undefined;
  x0018101b: string | undefined;

  // Software Version(s)
  SoftwareVersions: Array<string> | undefined;
  x00181020: Array<string> | undefined;

  // Video Image Format Acquired
  VideoImageFormatAcquired: string | undefined;
  x00181022: string | undefined;

  // Digital Image Format Acquired
  DigitalImageFormatAcquired: string | undefined;
  x00181023: string | undefined;

  // Protocol Name
  ProtocolName: string | undefined;
  x00181030: string | undefined;

  // Contrast/Bolus Route
  ContrastBolusRoute: string | undefined;
  x00181040: string | undefined;

  // Contrast/Bolus Volume
  ContrastBolusVolume: number | undefined;
  x00181041: number | undefined;

  // Contrast/Bolus Start Time
  ContrastBolusStartTime: string | undefined;
  x00181042: string | undefined;

  // Contrast/Bolus Stop Time
  ContrastBolusStopTime: string | undefined;
  x00181043: string | undefined;

  // Contrast/Bolus Total Dose
  ContrastBolusTotalDose: number | undefined;
  x00181044: number | undefined;

  // Syringe Counts
  SyringeCounts: number | undefined;
  x00181045: number | undefined;

  // Contrast Flow Rate
  ContrastFlowRate: Array<number> | undefined;
  x00181046: Array<number> | undefined;

  // Contrast Flow Duration
  ContrastFlowDuration: Array<number> | undefined;
  x00181047: Array<number> | undefined;

  // Contrast/Bolus Ingredient
  ContrastBolusIngredient: string | undefined;
  x00181048: string | undefined;

  // Contrast/Bolus Ingredient Concentration
  ContrastBolusIngredientConcentration: number | undefined;
  x00181049: number | undefined;

  // Spatial Resolution
  SpatialResolution: number | undefined;
  x00181050: number | undefined;

  // Trigger Time
  TriggerTime: number | undefined;
  x00181060: number | undefined;

  // Trigger Source or Type
  TriggerSourceOrType: string | undefined;
  x00181061: string | undefined;

  // Nominal Interval
  NominalInterval: number | undefined;
  x00181062: number | undefined;

  // Frame Time
  FrameTime: number | undefined;
  x00181063: number | undefined;

  // Cardiac Framing Type
  CardiacFramingType: string | undefined;
  x00181064: string | undefined;

  // Frame Time Vector
  FrameTimeVector: Array<number> | undefined;
  x00181065: Array<number> | undefined;

  // Frame Delay
  FrameDelay: number | undefined;
  x00181066: number | undefined;

  // Image Trigger Delay
  ImageTriggerDelay: number | undefined;
  x00181067: number | undefined;

  // Multiplex Group Time Offset
  MultiplexGroupTimeOffset: number | undefined;
  x00181068: number | undefined;

  // Trigger Time Offset
  TriggerTimeOffset: number | undefined;
  x00181069: number | undefined;

  // Synchronization Trigger
  SynchronizationTrigger: string | undefined;
  x0018106a: string | undefined;

  // Synchronization Channel
  SynchronizationChannel: Array<number> | undefined;
  x0018106c: Array<number> | undefined;

  // Trigger Sample Position
  TriggerSamplePosition: number | undefined;
  x0018106e: number | undefined;

  // Radiopharmaceutical Route
  RadiopharmaceuticalRoute: string | undefined;
  x00181070: string | undefined;

  // Radiopharmaceutical Volume
  RadiopharmaceuticalVolume: number | undefined;
  x00181071: number | undefined;

  // Radiopharmaceutical Start Time
  RadiopharmaceuticalStartTime: string | undefined;
  x00181072: string | undefined;

  // Radiopharmaceutical Stop Time
  RadiopharmaceuticalStopTime: string | undefined;
  x00181073: string | undefined;

  // Radionuclide Total Dose
  RadionuclideTotalDose: number | undefined;
  x00181074: number | undefined;

  // Radionuclide Half Life
  RadionuclideHalfLife: number | undefined;
  x00181075: number | undefined;

  // Radionuclide Positron Fraction
  RadionuclidePositronFraction: number | undefined;
  x00181076: number | undefined;

  // Radiopharmaceutical Specific Activity
  RadiopharmaceuticalSpecificActivity: number | undefined;
  x00181077: number | undefined;

  // Radiopharmaceutical Start DateTime
  RadiopharmaceuticalStartDateTime: string | undefined;
  x00181078: string | undefined;

  // Radiopharmaceutical Stop DateTime
  RadiopharmaceuticalStopDateTime: string | undefined;
  x00181079: string | undefined;

  // Beat Rejection Flag
  BeatRejectionFlag: string | undefined;
  x00181080: string | undefined;

  // Low R-R Value
  LowRRValue: number | undefined;
  x00181081: number | undefined;

  // High R-R Value
  HighRRValue: number | undefined;
  x00181082: number | undefined;

  // Intervals Acquired
  IntervalsAcquired: number | undefined;
  x00181083: number | undefined;

  // Intervals Rejected
  IntervalsRejected: number | undefined;
  x00181084: number | undefined;

  // PVC Rejection
  PVCRejection: string | undefined;
  x00181085: string | undefined;

  // Skip Beats
  SkipBeats: number | undefined;
  x00181086: number | undefined;

  // Heart Rate
  HeartRate: number | undefined;
  x00181088: number | undefined;

  // Cardiac Number of Images
  CardiacNumberOfImages: number | undefined;
  x00181090: number | undefined;

  // Trigger Window
  TriggerWindow: number | undefined;
  x00181094: number | undefined;

  // Reconstruction Diameter
  ReconstructionDiameter: number | undefined;
  x00181100: number | undefined;

  // Distance Source to Detector
  DistanceSourceToDetector: number | undefined;
  x00181110: number | undefined;

  // Distance Source to Patient
  DistanceSourceToPatient: number | undefined;
  x00181111: number | undefined;

  // Estimated Radiographic Magnification Factor
  EstimatedRadiographicMagnificationFactor: number | undefined;
  x00181114: number | undefined;

  // Gantry/Detector Tilt
  GantryDetectorTilt: number | undefined;
  x00181120: number | undefined;

  // Gantry/Detector Slew
  GantryDetectorSlew: number | undefined;
  x00181121: number | undefined;

  // Table Height
  TableHeight: number | undefined;
  x00181130: number | undefined;

  // Table Traverse
  TableTraverse: number | undefined;
  x00181131: number | undefined;

  // Table Motion
  TableMotion: string | undefined;
  x00181134: string | undefined;

  // Table Vertical Increment
  TableVerticalIncrement: Array<number> | undefined;
  x00181135: Array<number> | undefined;

  // Table Lateral Increment
  TableLateralIncrement: Array<number> | undefined;
  x00181136: Array<number> | undefined;

  // Table Longitudinal Increment
  TableLongitudinalIncrement: Array<number> | undefined;
  x00181137: Array<number> | undefined;

  // Table Angle
  TableAngle: number | undefined;
  x00181138: number | undefined;

  // Table Type
  TableType: string | undefined;
  x0018113a: string | undefined;

  // Rotation Direction
  RotationDirection: string | undefined;
  x00181140: string | undefined;

  // Angular Position
  AngularPosition: number | undefined;
  x00181141: number | undefined;

  // Radial Position
  RadialPosition: Array<number> | undefined;
  x00181142: Array<number> | undefined;

  // Scan Arc
  ScanArc: number | undefined;
  x00181143: number | undefined;

  // Angular Step
  AngularStep: number | undefined;
  x00181144: number | undefined;

  // Center of Rotation Offset
  CenterOfRotationOffset: number | undefined;
  x00181145: number | undefined;

  // Rotation Offset
  RotationOffset: Array<number> | undefined;
  x00181146: Array<number> | undefined;

  // Field of View Shape
  FieldOfViewShape: string | undefined;
  x00181147: string | undefined;

  // Field of View Dimension(s)
  FieldOfViewDimensions: Array<number> | undefined;
  x00181149: Array<number> | undefined;

  // Exposure Time
  ExposureTime: number | undefined;
  x00181150: number | undefined;

  // X-Ray Tube Current
  XRayTubeCurrent: number | undefined;
  x00181151: number | undefined;

  // Exposure
  Exposure: number | undefined;
  x00181152: number | undefined;

  // Exposure in µAs
  ExposureInuAs: number | undefined;
  x00181153: number | undefined;

  // Average Pulse Width
  AveragePulseWidth: number | undefined;
  x00181154: number | undefined;

  // Radiation Setting
  RadiationSetting: string | undefined;
  x00181155: string | undefined;

  // Rectification Type
  RectificationType: string | undefined;
  x00181156: string | undefined;

  // Radiation Mode
  RadiationMode: string | undefined;
  x0018115a: string | undefined;

  // Image and Fluoroscopy Area Dose Product
  ImageAndFluoroscopyAreaDoseProduct: number | undefined;
  x0018115e: number | undefined;

  // Filter Type
  FilterType: string | undefined;
  x00181160: string | undefined;

  // Type of Filters
  TypeOfFilters: Array<string> | undefined;
  x00181161: Array<string> | undefined;

  // Intensifier Size
  IntensifierSize: number | undefined;
  x00181162: number | undefined;

  // Imager Pixel Spacing
  ImagerPixelSpacing: Array<number> | undefined;
  x00181164: Array<number> | undefined;

  // Grid
  Grid: Array<string> | undefined;
  x00181166: Array<string> | undefined;

  // Generator Power
  GeneratorPower: number | undefined;
  x00181170: number | undefined;

  // Collimator/grid Name
  CollimatorGridName: string | undefined;
  x00181180: string | undefined;

  // Collimator Type
  CollimatorType: string | undefined;
  x00181181: string | undefined;

  // Focal Distance
  FocalDistance: Array<number> | undefined;
  x00181182: Array<number> | undefined;

  // X Focus Center
  XFocusCenter: Array<number> | undefined;
  x00181183: Array<number> | undefined;

  // Y Focus Center
  YFocusCenter: Array<number> | undefined;
  x00181184: Array<number> | undefined;

  // Focal Spot(s)
  FocalSpots: Array<number> | undefined;
  x00181190: Array<number> | undefined;

  // Anode Target Material
  AnodeTargetMaterial: string | undefined;
  x00181191: string | undefined;

  // Body Part Thickness
  BodyPartThickness: number | undefined;
  x001811a0: number | undefined;

  // Compression Force
  CompressionForce: number | undefined;
  x001811a2: number | undefined;

  // Paddle Description
  PaddleDescription: string | undefined;
  x001811a4: string | undefined;

  // Date of Last Calibration
  DateOfLastCalibration: Array<Date> | undefined;
  x00181200: Array<Date> | undefined;

  // Time of Last Calibration
  TimeOfLastCalibration: Array<string> | undefined;
  x00181201: Array<string> | undefined;

  // DateTime of Last Calibration
  DateTimeOfLastCalibration: string | undefined;
  x00181202: string | undefined;

  // Convolution Kernel
  ConvolutionKernel: Array<string> | undefined;
  x00181210: Array<string> | undefined;

  // Upper/Lower Pixel Values
  UpperLowerPixelValues: Array<number> | undefined;
  x00181240: Array<number> | undefined;

  // Actual Frame Duration
  ActualFrameDuration: number | undefined;
  x00181242: number | undefined;

  // Count Rate
  CountRate: number | undefined;
  x00181243: number | undefined;

  // Preferred Playback Sequencing
  PreferredPlaybackSequencing: number | undefined;
  x00181244: number | undefined;

  // Receive Coil Name
  ReceiveCoilName: string | undefined;
  x00181250: string | undefined;

  // Transmit Coil Name
  TransmitCoilName: string | undefined;
  x00181251: string | undefined;

  // Plate Type
  PlateType: string | undefined;
  x00181260: string | undefined;

  // Phosphor Type
  PhosphorType: string | undefined;
  x00181261: string | undefined;

  // Scan Velocity
  ScanVelocity: number | undefined;
  x00181300: number | undefined;

  // Whole Body Technique
  WholeBodyTechnique: Array<string> | undefined;
  x00181301: Array<string> | undefined;

  // Scan Length
  ScanLength: number | undefined;
  x00181302: number | undefined;

  // Acquisition Matrix
  AcquisitionMatrix: Array<number> | undefined;
  x00181310: Array<number> | undefined;

  // In-plane Phase Encoding Direction
  InPlanePhaseEncodingDirection: string | undefined;
  x00181312: string | undefined;

  // Flip Angle
  FlipAngle: number | undefined;
  x00181314: number | undefined;

  // Variable Flip Angle Flag
  VariableFlipAngleFlag: string | undefined;
  x00181315: string | undefined;

  // SAR
  SAR: number | undefined;
  x00181316: number | undefined;

  // dB/dt
  dBdt: number | undefined;
  x00181318: number | undefined;

  // Acquisition Device Processing Description
  AcquisitionDeviceProcessingDescription: string | undefined;
  x00181400: string | undefined;

  // Acquisition Device Processing Code
  AcquisitionDeviceProcessingCode: string | undefined;
  x00181401: string | undefined;

  // Cassette Orientation
  CassetteOrientation: string | undefined;
  x00181402: string | undefined;

  // Cassette Size
  CassetteSize: string | undefined;
  x00181403: string | undefined;

  // Exposures on Plate
  ExposuresOnPlate: number | undefined;
  x00181404: number | undefined;

  // Relative X-Ray Exposure
  RelativeXRayExposure: number | undefined;
  x00181405: number | undefined;

  // Exposure Index
  ExposureIndex: number | undefined;
  x00181411: number | undefined;

  // Target Exposure Index
  TargetExposureIndex: number | undefined;
  x00181412: number | undefined;

  // Deviation Index
  DeviationIndex: number | undefined;
  x00181413: number | undefined;

  // Column Angulation
  ColumnAngulation: number | undefined;
  x00181450: number | undefined;

  // Tomo Layer Height
  TomoLayerHeight: number | undefined;
  x00181460: number | undefined;

  // Tomo Angle
  TomoAngle: number | undefined;
  x00181470: number | undefined;

  // Tomo Time
  TomoTime: number | undefined;
  x00181480: number | undefined;

  // Tomo Type
  TomoType: string | undefined;
  x00181490: string | undefined;

  // Tomo Class
  TomoClass: string | undefined;
  x00181491: string | undefined;

  // Number of Tomosynthesis Source Images
  NumberOfTomosynthesisSourceImages: number | undefined;
  x00181495: number | undefined;

  // Positioner Motion
  PositionerMotion: string | undefined;
  x00181500: string | undefined;

  // Positioner Type
  PositionerType: string | undefined;
  x00181508: string | undefined;

  // Positioner Primary Angle
  PositionerPrimaryAngle: number | undefined;
  x00181510: number | undefined;

  // Positioner Secondary Angle
  PositionerSecondaryAngle: number | undefined;
  x00181511: number | undefined;

  // Positioner Primary Angle Increment
  PositionerPrimaryAngleIncrement: Array<number> | undefined;
  x00181520: Array<number> | undefined;

  // Positioner Secondary Angle Increment
  PositionerSecondaryAngleIncrement: Array<number> | undefined;
  x00181521: Array<number> | undefined;

  // Detector Primary Angle
  DetectorPrimaryAngle: number | undefined;
  x00181530: number | undefined;

  // Detector Secondary Angle
  DetectorSecondaryAngle: number | undefined;
  x00181531: number | undefined;

  // Shutter Shape
  ShutterShape: Array<string> | undefined;
  x00181600: Array<string> | undefined;

  // Shutter Left Vertical Edge
  ShutterLeftVerticalEdge: number | undefined;
  x00181602: number | undefined;

  // Shutter Right Vertical Edge
  ShutterRightVerticalEdge: number | undefined;
  x00181604: number | undefined;

  // Shutter Upper Horizontal Edge
  ShutterUpperHorizontalEdge: number | undefined;
  x00181606: number | undefined;

  // Shutter Lower Horizontal Edge
  ShutterLowerHorizontalEdge: number | undefined;
  x00181608: number | undefined;

  // Center of Circular Shutter
  CenterOfCircularShutter: Array<number> | undefined;
  x00181610: Array<number> | undefined;

  // Radius of Circular Shutter
  RadiusOfCircularShutter: number | undefined;
  x00181612: number | undefined;

  // Vertices of the Polygonal Shutter
  VerticesOfThePolygonalShutter: Array<number> | undefined;
  x00181620: Array<number> | undefined;

  // Shutter Presentation Value
  ShutterPresentationValue: number | undefined;
  x00181622: number | undefined;

  // Shutter Overlay Group
  ShutterOverlayGroup: number | undefined;
  x00181623: number | undefined;

  // Shutter Presentation Color CIELab Value
  ShutterPresentationColorCIELabValue: Array<number> | undefined;
  x00181624: Array<number> | undefined;

  // Collimator Shape
  CollimatorShape: Array<string> | undefined;
  x00181700: Array<string> | undefined;

  // Collimator Left Vertical Edge
  CollimatorLeftVerticalEdge: number | undefined;
  x00181702: number | undefined;

  // Collimator Right Vertical Edge
  CollimatorRightVerticalEdge: number | undefined;
  x00181704: number | undefined;

  // Collimator Upper Horizontal Edge
  CollimatorUpperHorizontalEdge: number | undefined;
  x00181706: number | undefined;

  // Collimator Lower Horizontal Edge
  CollimatorLowerHorizontalEdge: number | undefined;
  x00181708: number | undefined;

  // Center of Circular Collimator
  CenterOfCircularCollimator: Array<number> | undefined;
  x00181710: Array<number> | undefined;

  // Radius of Circular Collimator
  RadiusOfCircularCollimator: number | undefined;
  x00181712: number | undefined;

  // Vertices of the Polygonal Collimator
  VerticesOfThePolygonalCollimator: Array<number> | undefined;
  x00181720: Array<number> | undefined;

  // Acquisition Time Synchronized
  AcquisitionTimeSynchronized: string | undefined;
  x00181800: string | undefined;

  // Time Source
  TimeSource: string | undefined;
  x00181801: string | undefined;

  // Time Distribution Protocol
  TimeDistributionProtocol: string | undefined;
  x00181802: string | undefined;

  // NTP Source Address
  NTPSourceAddress: string | undefined;
  x00181803: string | undefined;

  // Page Number Vector
  PageNumberVector: Array<number> | undefined;
  x00182001: Array<number> | undefined;

  // Frame Label Vector
  FrameLabelVector: Array<string> | undefined;
  x00182002: Array<string> | undefined;

  // Frame Primary Angle Vector
  FramePrimaryAngleVector: Array<number> | undefined;
  x00182003: Array<number> | undefined;

  // Frame Secondary Angle Vector
  FrameSecondaryAngleVector: Array<number> | undefined;
  x00182004: Array<number> | undefined;

  // Slice Location Vector
  SliceLocationVector: Array<number> | undefined;
  x00182005: Array<number> | undefined;

  // Display Window Label Vector
  DisplayWindowLabelVector: Array<string> | undefined;
  x00182006: Array<string> | undefined;

  // Nominal Scanned Pixel Spacing
  NominalScannedPixelSpacing: Array<number> | undefined;
  x00182010: Array<number> | undefined;

  // Digitizing Device Transport Direction
  DigitizingDeviceTransportDirection: string | undefined;
  x00182020: string | undefined;

  // Rotation of Scanned Film
  RotationOfScannedFilm: number | undefined;
  x00182030: number | undefined;

  // Biopsy Target Sequence
  BiopsyTargetSequence: Array<Dataset> | undefined;
  x00182041: Array<Dataset> | undefined;

  // Target UID
  TargetUID: string | undefined;
  x00182042: string | undefined;

  // Localizing Cursor Position
  LocalizingCursorPosition: Array<number> | undefined;
  x00182043: Array<number> | undefined;

  // Calculated Target Position
  CalculatedTargetPosition: Array<number> | undefined;
  x00182044: Array<number> | undefined;

  // Target Label
  TargetLabel: string | undefined;
  x00182045: string | undefined;

  // Displayed Z Value
  DisplayedZValue: number | undefined;
  x00182046: number | undefined;

  // IVUS Acquisition
  IVUSAcquisition: string | undefined;
  x00183100: string | undefined;

  // IVUS Pullback Rate
  IVUSPullbackRate: number | undefined;
  x00183101: number | undefined;

  // IVUS Gated Rate
  IVUSGatedRate: number | undefined;
  x00183102: number | undefined;

  // IVUS Pullback Start Frame Number
  IVUSPullbackStartFrameNumber: number | undefined;
  x00183103: number | undefined;

  // IVUS Pullback Stop Frame Number
  IVUSPullbackStopFrameNumber: number | undefined;
  x00183104: number | undefined;

  // Lesion Number
  LesionNumber: Array<number> | undefined;
  x00183105: Array<number> | undefined;

  // Output Power
  OutputPower: Array<string> | undefined;
  x00185000: Array<string> | undefined;

  // Transducer Data
  TransducerData: Array<string> | undefined;
  x00185010: Array<string> | undefined;

  // Focus Depth
  FocusDepth: number | undefined;
  x00185012: number | undefined;

  // Processing Function
  ProcessingFunction: string | undefined;
  x00185020: string | undefined;

  // Postprocessing Function
  PostprocessingFunction: string | undefined;
  x00185021: string | undefined;

  // Mechanical Index
  MechanicalIndex: number | undefined;
  x00185022: number | undefined;

  // Bone Thermal Index
  BoneThermalIndex: number | undefined;
  x00185024: number | undefined;

  // Cranial Thermal Index
  CranialThermalIndex: number | undefined;
  x00185026: number | undefined;

  // Soft Tissue Thermal Index
  SoftTissueThermalIndex: number | undefined;
  x00185027: number | undefined;

  // Soft Tissue-focus Thermal Index
  SoftTissueFocusThermalIndex: number | undefined;
  x00185028: number | undefined;

  // Soft Tissue-surface Thermal Index
  SoftTissueSurfaceThermalIndex: number | undefined;
  x00185029: number | undefined;

  // Dynamic Range
  DynamicRange: number | undefined;
  x00185030: number | undefined;

  // Total Gain
  TotalGain: number | undefined;
  x00185040: number | undefined;

  // Depth of Scan Field
  DepthOfScanField: number | undefined;
  x00185050: number | undefined;

  // Patient Position
  PatientPosition: string | undefined;
  x00185100: string | undefined;

  // View Position
  ViewPosition: string | undefined;
  x00185101: string | undefined;

  // Projection Eponymous Name Code Sequence
  ProjectionEponymousNameCodeSequence: Array<Dataset> | undefined;
  x00185104: Array<Dataset> | undefined;

  // Image Transformation Matrix
  ImageTransformationMatrix: Array<number> | undefined;
  x00185210: Array<number> | undefined;

  // Image Translation Vector
  ImageTranslationVector: Array<number> | undefined;
  x00185212: Array<number> | undefined;

  // Sensitivity
  Sensitivity: number | undefined;
  x00186000: number | undefined;

  // Sequence of Ultrasound Regions
  SequenceOfUltrasoundRegions: Array<Dataset> | undefined;
  x00186011: Array<Dataset> | undefined;

  // Region Spatial Format
  RegionSpatialFormat: number | undefined;
  x00186012: number | undefined;

  // Region Data Type
  RegionDataType: number | undefined;
  x00186014: number | undefined;

  // Region Flags
  RegionFlags: number | undefined;
  x00186016: number | undefined;

  // Region Location Min X0
  RegionLocationMinX0: number | undefined;
  x00186018: number | undefined;

  // Region Location Min Y0
  RegionLocationMinY0: number | undefined;
  x0018601a: number | undefined;

  // Region Location Max X1
  RegionLocationMaxX1: number | undefined;
  x0018601c: number | undefined;

  // Region Location Max Y1
  RegionLocationMaxY1: number | undefined;
  x0018601e: number | undefined;

  // Reference Pixel X0
  ReferencePixelX0: number | undefined;
  x00186020: number | undefined;

  // Reference Pixel Y0
  ReferencePixelY0: number | undefined;
  x00186022: number | undefined;

  // Physical Units X Direction
  PhysicalUnitsXDirection: number | undefined;
  x00186024: number | undefined;

  // Physical Units Y Direction
  PhysicalUnitsYDirection: number | undefined;
  x00186026: number | undefined;

  // Reference Pixel Physical Value X
  ReferencePixelPhysicalValueX: number | undefined;
  x00186028: number | undefined;

  // Reference Pixel Physical Value Y
  ReferencePixelPhysicalValueY: number | undefined;
  x0018602a: number | undefined;

  // Physical Delta X
  PhysicalDeltaX: number | undefined;
  x0018602c: number | undefined;

  // Physical Delta Y
  PhysicalDeltaY: number | undefined;
  x0018602e: number | undefined;

  // Transducer Frequency
  TransducerFrequency: number | undefined;
  x00186030: number | undefined;

  // Transducer Type
  TransducerType: string | undefined;
  x00186031: string | undefined;

  // Pulse Repetition Frequency
  PulseRepetitionFrequency: number | undefined;
  x00186032: number | undefined;

  // Doppler Correction Angle
  DopplerCorrectionAngle: number | undefined;
  x00186034: number | undefined;

  // Steering Angle
  SteeringAngle: number | undefined;
  x00186036: number | undefined;

  // Doppler Sample Volume X Position (Retired)
  DopplerSampleVolumeXPositionRetired: number | undefined;
  x00186038: number | undefined;

  // Doppler Sample Volume X Position
  DopplerSampleVolumeXPosition: number | undefined;
  x00186039: number | undefined;

  // Doppler Sample Volume Y Position (Retired)
  DopplerSampleVolumeYPositionRetired: number | undefined;
  x0018603a: number | undefined;

  // Doppler Sample Volume Y Position
  DopplerSampleVolumeYPosition: number | undefined;
  x0018603b: number | undefined;

  // TM-Line Position X0 (Retired)
  TMLinePositionX0Retired: number | undefined;
  x0018603c: number | undefined;

  // TM-Line Position X0
  TMLinePositionX0: number | undefined;
  x0018603d: number | undefined;

  // TM-Line Position Y0 (Retired)
  TMLinePositionY0Retired: number | undefined;
  x0018603e: number | undefined;

  // TM-Line Position Y0
  TMLinePositionY0: number | undefined;
  x0018603f: number | undefined;

  // TM-Line Position X1 (Retired)
  TMLinePositionX1Retired: number | undefined;
  x00186040: number | undefined;

  // TM-Line Position X1
  TMLinePositionX1: number | undefined;
  x00186041: number | undefined;

  // TM-Line Position Y1 (Retired)
  TMLinePositionY1Retired: number | undefined;
  x00186042: number | undefined;

  // TM-Line Position Y1
  TMLinePositionY1: number | undefined;
  x00186043: number | undefined;

  // Pixel Component Organization
  PixelComponentOrganization: number | undefined;
  x00186044: number | undefined;

  // Pixel Component Mask
  PixelComponentMask: number | undefined;
  x00186046: number | undefined;

  // Pixel Component Range Start
  PixelComponentRangeStart: number | undefined;
  x00186048: number | undefined;

  // Pixel Component Range Stop
  PixelComponentRangeStop: number | undefined;
  x0018604a: number | undefined;

  // Pixel Component Physical Units
  PixelComponentPhysicalUnits: number | undefined;
  x0018604c: number | undefined;

  // Pixel Component Data Type
  PixelComponentDataType: number | undefined;
  x0018604e: number | undefined;

  // Number of Table Break Points
  NumberOfTableBreakPoints: number | undefined;
  x00186050: number | undefined;

  // Table of X Break Points
  TableOfXBreakPoints: Array<number> | undefined;
  x00186052: Array<number> | undefined;

  // Table of Y Break Points
  TableOfYBreakPoints: Array<number> | undefined;
  x00186054: Array<number> | undefined;

  // Number of Table Entries
  NumberOfTableEntries: number | undefined;
  x00186056: number | undefined;

  // Table of Pixel Values
  TableOfPixelValues: Array<number> | undefined;
  x00186058: Array<number> | undefined;

  // Table of Parameter Values
  TableOfParameterValues: Array<number> | undefined;
  x0018605a: Array<number> | undefined;

  // R Wave Time Vector
  RWaveTimeVector: Array<number> | undefined;
  x00186060: Array<number> | undefined;

  // Detector Conditions Nominal Flag
  DetectorConditionsNominalFlag: string | undefined;
  x00187000: string | undefined;

  // Detector Temperature
  DetectorTemperature: number | undefined;
  x00187001: number | undefined;

  // Detector Type
  DetectorType: string | undefined;
  x00187004: string | undefined;

  // Detector Configuration
  DetectorConfiguration: string | undefined;
  x00187005: string | undefined;

  // Detector ID
  DetectorID: string | undefined;
  x0018700a: string | undefined;

  // Date of Last Detector Calibration
  DateOfLastDetectorCalibration: Date | undefined;
  x0018700c: Date | undefined;

  // Time of Last Detector Calibration
  TimeOfLastDetectorCalibration: string | undefined;
  x0018700e: string | undefined;

  // Exposures on Detector Since Last Calibration
  ExposuresOnDetectorSinceLastCalibration: number | undefined;
  x00187010: number | undefined;

  // Exposures on Detector Since Manufactured
  ExposuresOnDetectorSinceManufactured: number | undefined;
  x00187011: number | undefined;

  // Detector Time Since Last Exposure
  DetectorTimeSinceLastExposure: number | undefined;
  x00187012: number | undefined;

  // Detector Active Time
  DetectorActiveTime: number | undefined;
  x00187014: number | undefined;

  // Detector Activation Offset From Exposure
  DetectorActivationOffsetFromExposure: number | undefined;
  x00187016: number | undefined;

  // Detector Binning
  DetectorBinning: Array<number> | undefined;
  x0018701a: Array<number> | undefined;

  // Detector Element Physical Size
  DetectorElementPhysicalSize: Array<number> | undefined;
  x00187020: Array<number> | undefined;

  // Detector Element Spacing
  DetectorElementSpacing: Array<number> | undefined;
  x00187022: Array<number> | undefined;

  // Detector Active Shape
  DetectorActiveShape: string | undefined;
  x00187024: string | undefined;

  // Detector Active Dimension(s)
  DetectorActiveDimensions: Array<number> | undefined;
  x00187026: Array<number> | undefined;

  // Detector Active Origin
  DetectorActiveOrigin: Array<number> | undefined;
  x00187028: Array<number> | undefined;

  // Detector Manufacturer Name
  DetectorManufacturerName: string | undefined;
  x0018702a: string | undefined;

  // Detector Manufacturer's Model Name
  DetectorManufacturerModelName: string | undefined;
  x0018702b: string | undefined;

  // Field of View Origin
  FieldOfViewOrigin: Array<number> | undefined;
  x00187030: Array<number> | undefined;

  // Field of View Rotation
  FieldOfViewRotation: number | undefined;
  x00187032: number | undefined;

  // Field of View Horizontal Flip
  FieldOfViewHorizontalFlip: string | undefined;
  x00187034: string | undefined;

  // Pixel Data Area Origin Relative To FOV
  PixelDataAreaOriginRelativeToFOV: Array<number> | undefined;
  x00187036: Array<number> | undefined;

  // Pixel Data Area Rotation Angle Relative To FOV
  PixelDataAreaRotationAngleRelativeToFOV: number | undefined;
  x00187038: number | undefined;

  // Grid Thickness
  GridThickness: number | undefined;
  x00187042: number | undefined;

  // Grid Pitch
  GridPitch: number | undefined;
  x00187044: number | undefined;

  // Grid Aspect Ratio
  GridAspectRatio: Array<number> | undefined;
  x00187046: Array<number> | undefined;

  // Grid Period
  GridPeriod: number | undefined;
  x00187048: number | undefined;

  // Grid Focal Distance
  GridFocalDistance: number | undefined;
  x0018704c: number | undefined;

  // Filter Material
  FilterMaterial: Array<string> | undefined;
  x00187050: Array<string> | undefined;

  // Filter Thickness Minimum
  FilterThicknessMinimum: Array<number> | undefined;
  x00187052: Array<number> | undefined;

  // Filter Thickness Maximum
  FilterThicknessMaximum: Array<number> | undefined;
  x00187054: Array<number> | undefined;

  // Filter Beam Path Length Minimum
  FilterBeamPathLengthMinimum: Array<number> | undefined;
  x00187056: Array<number> | undefined;

  // Filter Beam Path Length Maximum
  FilterBeamPathLengthMaximum: Array<number> | undefined;
  x00187058: Array<number> | undefined;

  // Exposure Control Mode
  ExposureControlMode: string | undefined;
  x00187060: string | undefined;

  // Exposure Status
  ExposureStatus: string | undefined;
  x00187064: string | undefined;

  // Phototimer Setting
  PhototimerSetting: number | undefined;
  x00187065: number | undefined;

  // Exposure Time in µS
  ExposureTimeInuS: number | undefined;
  x00188150: number | undefined;

  // X-Ray Tube Current in µA
  XRayTubeCurrentInuA: number | undefined;
  x00188151: number | undefined;

  // Content Qualification
  ContentQualification: string | undefined;
  x00189004: string | undefined;

  // Pulse Sequence Name
  PulseSequenceName: string | undefined;
  x00189005: string | undefined;

  // MR Imaging Modifier Sequence
  MRImagingModifierSequence: Array<Dataset> | undefined;
  x00189006: Array<Dataset> | undefined;

  // Echo Pulse Sequence
  EchoPulseSequence: string | undefined;
  x00189008: string | undefined;

  // Inversion Recovery
  InversionRecovery: string | undefined;
  x00189009: string | undefined;

  // Flow Compensation
  FlowCompensation: string | undefined;
  x00189010: string | undefined;

  // Multiple Spin Echo
  MultipleSpinEcho: string | undefined;
  x00189011: string | undefined;

  // Multi-planar Excitation
  MultiPlanarExcitation: string | undefined;
  x00189012: string | undefined;

  // Phase Contrast
  PhaseContrast: string | undefined;
  x00189014: string | undefined;

  // Time of Flight Contrast
  TimeOfFlightContrast: string | undefined;
  x00189015: string | undefined;

  // Spoiling
  Spoiling: string | undefined;
  x00189016: string | undefined;

  // Steady State Pulse Sequence
  SteadyStatePulseSequence: string | undefined;
  x00189017: string | undefined;

  // Echo Planar Pulse Sequence
  EchoPlanarPulseSequence: string | undefined;
  x00189018: string | undefined;

  // Tag Angle First Axis
  TagAngleFirstAxis: number | undefined;
  x00189019: number | undefined;

  // Magnetization Transfer
  MagnetizationTransfer: string | undefined;
  x00189020: string | undefined;

  // T2 Preparation
  T2Preparation: string | undefined;
  x00189021: string | undefined;

  // Blood Signal Nulling
  BloodSignalNulling: string | undefined;
  x00189022: string | undefined;

  // Saturation Recovery
  SaturationRecovery: string | undefined;
  x00189024: string | undefined;

  // Spectrally Selected Suppression
  SpectrallySelectedSuppression: string | undefined;
  x00189025: string | undefined;

  // Spectrally Selected Excitation
  SpectrallySelectedExcitation: string | undefined;
  x00189026: string | undefined;

  // Spatial Pre-saturation
  SpatialPresaturation: string | undefined;
  x00189027: string | undefined;

  // Tagging
  Tagging: string | undefined;
  x00189028: string | undefined;

  // Oversampling Phase
  OversamplingPhase: string | undefined;
  x00189029: string | undefined;

  // Tag Spacing First Dimension
  TagSpacingFirstDimension: number | undefined;
  x00189030: number | undefined;

  // Geometry of k-Space Traversal
  GeometryOfKSpaceTraversal: string | undefined;
  x00189032: string | undefined;

  // Segmented k-Space Traversal
  SegmentedKSpaceTraversal: string | undefined;
  x00189033: string | undefined;

  // Rectilinear Phase Encode Reordering
  RectilinearPhaseEncodeReordering: string | undefined;
  x00189034: string | undefined;

  // Tag Thickness
  TagThickness: number | undefined;
  x00189035: number | undefined;

  // Partial Fourier Direction
  PartialFourierDirection: string | undefined;
  x00189036: string | undefined;

  // Cardiac Synchronization Technique
  CardiacSynchronizationTechnique: string | undefined;
  x00189037: string | undefined;

  // Receive Coil Manufacturer Name
  ReceiveCoilManufacturerName: string | undefined;
  x00189041: string | undefined;

  // MR Receive Coil Sequence
  MRReceiveCoilSequence: Array<Dataset> | undefined;
  x00189042: Array<Dataset> | undefined;

  // Receive Coil Type
  ReceiveCoilType: string | undefined;
  x00189043: string | undefined;

  // Quadrature Receive Coil
  QuadratureReceiveCoil: string | undefined;
  x00189044: string | undefined;

  // Multi-Coil Definition Sequence
  MultiCoilDefinitionSequence: Array<Dataset> | undefined;
  x00189045: Array<Dataset> | undefined;

  // Multi-Coil Configuration
  MultiCoilConfiguration: string | undefined;
  x00189046: string | undefined;

  // Multi-Coil Element Name
  MultiCoilElementName: string | undefined;
  x00189047: string | undefined;

  // Multi-Coil Element Used
  MultiCoilElementUsed: string | undefined;
  x00189048: string | undefined;

  // MR Transmit Coil Sequence
  MRTransmitCoilSequence: Array<Dataset> | undefined;
  x00189049: Array<Dataset> | undefined;

  // Transmit Coil Manufacturer Name
  TransmitCoilManufacturerName: string | undefined;
  x00189050: string | undefined;

  // Transmit Coil Type
  TransmitCoilType: string | undefined;
  x00189051: string | undefined;

  // Spectral Width
  SpectralWidth: Array<number> | undefined;
  x00189052: Array<number> | undefined;

  // Chemical Shift Reference
  ChemicalShiftReference: Array<number> | undefined;
  x00189053: Array<number> | undefined;

  // Volume Localization Technique
  VolumeLocalizationTechnique: string | undefined;
  x00189054: string | undefined;

  // MR Acquisition Frequency Encoding Steps
  MRAcquisitionFrequencyEncodingSteps: number | undefined;
  x00189058: number | undefined;

  // De-coupling
  Decoupling: string | undefined;
  x00189059: string | undefined;

  // De-coupled Nucleus
  DecoupledNucleus: Array<string> | undefined;
  x00189060: Array<string> | undefined;

  // De-coupling Frequency
  DecouplingFrequency: Array<number> | undefined;
  x00189061: Array<number> | undefined;

  // De-coupling Method
  DecouplingMethod: string | undefined;
  x00189062: string | undefined;

  // De-coupling Chemical Shift Reference
  DecouplingChemicalShiftReference: Array<number> | undefined;
  x00189063: Array<number> | undefined;

  // k-space Filtering
  KSpaceFiltering: string | undefined;
  x00189064: string | undefined;

  // Time Domain Filtering
  TimeDomainFiltering: Array<string> | undefined;
  x00189065: Array<string> | undefined;

  // Number of Zero Fills
  NumberOfZeroFills: Array<number> | undefined;
  x00189066: Array<number> | undefined;

  // Baseline Correction
  BaselineCorrection: string | undefined;
  x00189067: string | undefined;

  // Parallel Reduction Factor In-plane
  ParallelReductionFactorInPlane: number | undefined;
  x00189069: number | undefined;

  // Cardiac R-R Interval Specified
  CardiacRRIntervalSpecified: number | undefined;
  x00189070: number | undefined;

  // Acquisition Duration
  AcquisitionDuration: number | undefined;
  x00189073: number | undefined;

  // Frame Acquisition DateTime
  FrameAcquisitionDateTime: string | undefined;
  x00189074: string | undefined;

  // Diffusion Directionality
  DiffusionDirectionality: string | undefined;
  x00189075: string | undefined;

  // Diffusion Gradient Direction Sequence
  DiffusionGradientDirectionSequence: Array<Dataset> | undefined;
  x00189076: Array<Dataset> | undefined;

  // Parallel Acquisition
  ParallelAcquisition: string | undefined;
  x00189077: string | undefined;

  // Parallel Acquisition Technique
  ParallelAcquisitionTechnique: string | undefined;
  x00189078: string | undefined;

  // Inversion Times
  InversionTimes: Array<number> | undefined;
  x00189079: Array<number> | undefined;

  // Partial Fourier
  PartialFourier: string | undefined;
  x00189081: string | undefined;

  // Effective Echo Time
  EffectiveEchoTime: number | undefined;
  x00189082: number | undefined;

  // Metabolite Map Code Sequence
  MetaboliteMapCodeSequence: Array<Dataset> | undefined;
  x00189083: Array<Dataset> | undefined;

  // Chemical Shift Sequence
  ChemicalShiftSequence: Array<Dataset> | undefined;
  x00189084: Array<Dataset> | undefined;

  // Cardiac Signal Source
  CardiacSignalSource: string | undefined;
  x00189085: string | undefined;

  // Diffusion b-value
  DiffusionBValue: number | undefined;
  x00189087: number | undefined;

  // Diffusion Gradient Orientation
  DiffusionGradientOrientation: Array<number> | undefined;
  x00189089: Array<number> | undefined;

  // Velocity Encoding Direction
  VelocityEncodingDirection: Array<number> | undefined;
  x00189090: Array<number> | undefined;

  // Velocity Encoding Minimum Value
  VelocityEncodingMinimumValue: number | undefined;
  x00189091: number | undefined;

  // Velocity Encoding Acquisition Sequence
  VelocityEncodingAcquisitionSequence: Array<Dataset> | undefined;
  x00189092: Array<Dataset> | undefined;

  // Number of k-Space Trajectories
  NumberOfKSpaceTrajectories: number | undefined;
  x00189093: number | undefined;

  // Coverage of k-Space
  CoverageOfKSpace: string | undefined;
  x00189094: string | undefined;

  // Spectroscopy Acquisition Phase Rows
  SpectroscopyAcquisitionPhaseRows: number | undefined;
  x00189095: number | undefined;

  // Parallel Reduction Factor In-plane (Retired)
  ParallelReductionFactorInPlaneRetired: number | undefined;
  x00189096: number | undefined;

  // Transmitter Frequency
  TransmitterFrequency: Array<number> | undefined;
  x00189098: Array<number> | undefined;

  // Resonant Nucleus
  ResonantNucleus: Array<string> | undefined;
  x00189100: Array<string> | undefined;

  // Frequency Correction
  FrequencyCorrection: string | undefined;
  x00189101: string | undefined;

  // MR Spectroscopy FOV/Geometry Sequence
  MRSpectroscopyFOVGeometrySequence: Array<Dataset> | undefined;
  x00189103: Array<Dataset> | undefined;

  // Slab Thickness
  SlabThickness: number | undefined;
  x00189104: number | undefined;

  // Slab Orientation
  SlabOrientation: Array<number> | undefined;
  x00189105: Array<number> | undefined;

  // Mid Slab Position
  MidSlabPosition: Array<number> | undefined;
  x00189106: Array<number> | undefined;

  // MR Spatial Saturation Sequence
  MRSpatialSaturationSequence: Array<Dataset> | undefined;
  x00189107: Array<Dataset> | undefined;

  // MR Timing and Related Parameters Sequence
  MRTimingAndRelatedParametersSequence: Array<Dataset> | undefined;
  x00189112: Array<Dataset> | undefined;

  // MR Echo Sequence
  MREchoSequence: Array<Dataset> | undefined;
  x00189114: Array<Dataset> | undefined;

  // MR Modifier Sequence
  MRModifierSequence: Array<Dataset> | undefined;
  x00189115: Array<Dataset> | undefined;

  // MR Diffusion Sequence
  MRDiffusionSequence: Array<Dataset> | undefined;
  x00189117: Array<Dataset> | undefined;

  // Cardiac Synchronization Sequence
  CardiacSynchronizationSequence: Array<Dataset> | undefined;
  x00189118: Array<Dataset> | undefined;

  // MR Averages Sequence
  MRAveragesSequence: Array<Dataset> | undefined;
  x00189119: Array<Dataset> | undefined;

  // MR FOV/Geometry Sequence
  MRFOVGeometrySequence: Array<Dataset> | undefined;
  x00189125: Array<Dataset> | undefined;

  // Volume Localization Sequence
  VolumeLocalizationSequence: Array<Dataset> | undefined;
  x00189126: Array<Dataset> | undefined;

  // Spectroscopy Acquisition Data Columns
  SpectroscopyAcquisitionDataColumns: number | undefined;
  x00189127: number | undefined;

  // Diffusion Anisotropy Type
  DiffusionAnisotropyType: string | undefined;
  x00189147: string | undefined;

  // Frame Reference DateTime
  FrameReferenceDateTime: string | undefined;
  x00189151: string | undefined;

  // MR Metabolite Map Sequence
  MRMetaboliteMapSequence: Array<Dataset> | undefined;
  x00189152: Array<Dataset> | undefined;

  // Parallel Reduction Factor out-of-plane
  ParallelReductionFactorOutOfPlane: number | undefined;
  x00189155: number | undefined;

  // Spectroscopy Acquisition Out-of-plane Phase Steps
  SpectroscopyAcquisitionOutOfPlanePhaseSteps: number | undefined;
  x00189159: number | undefined;

  // Bulk Motion Status
  BulkMotionStatus: string | undefined;
  x00189166: string | undefined;

  // Parallel Reduction Factor Second In-plane
  ParallelReductionFactorSecondInPlane: number | undefined;
  x00189168: number | undefined;

  // Cardiac Beat Rejection Technique
  CardiacBeatRejectionTechnique: string | undefined;
  x00189169: string | undefined;

  // Respiratory Motion Compensation Technique
  RespiratoryMotionCompensationTechnique: string | undefined;
  x00189170: string | undefined;

  // Respiratory Signal Source
  RespiratorySignalSource: string | undefined;
  x00189171: string | undefined;

  // Bulk Motion Compensation Technique
  BulkMotionCompensationTechnique: string | undefined;
  x00189172: string | undefined;

  // Bulk Motion Signal Source
  BulkMotionSignalSource: string | undefined;
  x00189173: string | undefined;

  // Applicable Safety Standard Agency
  ApplicableSafetyStandardAgency: string | undefined;
  x00189174: string | undefined;

  // Applicable Safety Standard Description
  ApplicableSafetyStandardDescription: string | undefined;
  x00189175: string | undefined;

  // Operating Mode Sequence
  OperatingModeSequence: Array<Dataset> | undefined;
  x00189176: Array<Dataset> | undefined;

  // Operating Mode Type
  OperatingModeType: string | undefined;
  x00189177: string | undefined;

  // Operating Mode
  OperatingMode: string | undefined;
  x00189178: string | undefined;

  // Specific Absorption Rate Definition
  SpecificAbsorptionRateDefinition: string | undefined;
  x00189179: string | undefined;

  // Gradient Output Type
  GradientOutputType: string | undefined;
  x00189180: string | undefined;

  // Specific Absorption Rate Value
  SpecificAbsorptionRateValue: number | undefined;
  x00189181: number | undefined;

  // Gradient Output
  GradientOutput: number | undefined;
  x00189182: number | undefined;

  // Flow Compensation Direction
  FlowCompensationDirection: string | undefined;
  x00189183: string | undefined;

  // Tagging Delay
  TaggingDelay: number | undefined;
  x00189184: number | undefined;

  // Respiratory Signal Source ID
  RespiratorySignalSourceID: string | undefined;
  x00189186: string | undefined;

  // Chemical Shift Minimum Integration Limit in Hz
  ChemicalShiftMinimumIntegrationLimitInHz: number | undefined;
  x00189195: number | undefined;

  // Chemical Shift Maximum Integration Limit in Hz
  ChemicalShiftMaximumIntegrationLimitInHz: number | undefined;
  x00189196: number | undefined;

  // MR Velocity Encoding Sequence
  MRVelocityEncodingSequence: Array<Dataset> | undefined;
  x00189197: Array<Dataset> | undefined;

  // First Order Phase Correction
  FirstOrderPhaseCorrection: string | undefined;
  x00189198: string | undefined;

  // Water Referenced Phase Correction
  WaterReferencedPhaseCorrection: string | undefined;
  x00189199: string | undefined;

  // MR Spectroscopy Acquisition Type
  MRSpectroscopyAcquisitionType: string | undefined;
  x00189200: string | undefined;

  // Respiratory Cycle Position
  RespiratoryCyclePosition: string | undefined;
  x00189214: string | undefined;

  // Velocity Encoding Maximum Value
  VelocityEncodingMaximumValue: number | undefined;
  x00189217: number | undefined;

  // Tag Spacing Second Dimension
  TagSpacingSecondDimension: number | undefined;
  x00189218: number | undefined;

  // Tag Angle Second Axis
  TagAngleSecondAxis: Uint8Array | undefined;
  x00189219: Uint8Array | undefined;

  // Frame Acquisition Duration
  FrameAcquisitionDuration: number | undefined;
  x00189220: number | undefined;

  // MR Image Frame Type Sequence
  MRImageFrameTypeSequence: Array<Dataset> | undefined;
  x00189226: Array<Dataset> | undefined;

  // MR Spectroscopy Frame Type Sequence
  MRSpectroscopyFrameTypeSequence: Array<Dataset> | undefined;
  x00189227: Array<Dataset> | undefined;

  // MR Acquisition Phase Encoding Steps in-plane
  MRAcquisitionPhaseEncodingStepsInPlane: number | undefined;
  x00189231: number | undefined;

  // MR Acquisition Phase Encoding Steps out-of-plane
  MRAcquisitionPhaseEncodingStepsOutOfPlane: number | undefined;
  x00189232: number | undefined;

  // Spectroscopy Acquisition Phase Columns
  SpectroscopyAcquisitionPhaseColumns: number | undefined;
  x00189234: number | undefined;

  // Cardiac Cycle Position
  CardiacCyclePosition: string | undefined;
  x00189236: string | undefined;

  // Specific Absorption Rate Sequence
  SpecificAbsorptionRateSequence: Array<Dataset> | undefined;
  x00189239: Array<Dataset> | undefined;

  // RF Echo Train Length
  RFEchoTrainLength: number | undefined;
  x00189240: number | undefined;

  // Gradient Echo Train Length
  GradientEchoTrainLength: number | undefined;
  x00189241: number | undefined;

  // Arterial Spin Labeling Contrast
  ArterialSpinLabelingContrast: string | undefined;
  x00189250: string | undefined;

  // MR Arterial Spin Labeling Sequence
  MRArterialSpinLabelingSequence: Array<Dataset> | undefined;
  x00189251: Array<Dataset> | undefined;

  // ASL Technique Description
  ASLTechniqueDescription: string | undefined;
  x00189252: string | undefined;

  // ASL Slab Number
  ASLSlabNumber: number | undefined;
  x00189253: number | undefined;

  // ASL Slab Thickness
  ASLSlabThickness: number | undefined;
  x00189254: number | undefined;

  // ASL Slab Orientation
  ASLSlabOrientation: Array<number> | undefined;
  x00189255: Array<number> | undefined;

  // ASL Mid Slab Position
  ASLMidSlabPosition: Array<number> | undefined;
  x00189256: Array<number> | undefined;

  // ASL Context
  ASLContext: string | undefined;
  x00189257: string | undefined;

  // ASL Pulse Train Duration
  ASLPulseTrainDuration: number | undefined;
  x00189258: number | undefined;

  // ASL Crusher Flag
  ASLCrusherFlag: string | undefined;
  x00189259: string | undefined;

  // ASL Crusher Flow Limit
  ASLCrusherFlowLimit: number | undefined;
  x0018925a: number | undefined;

  // ASL Crusher Description
  ASLCrusherDescription: string | undefined;
  x0018925b: string | undefined;

  // ASL Bolus Cut-off Flag
  ASLBolusCutoffFlag: string | undefined;
  x0018925c: string | undefined;

  // ASL Bolus Cut-off Timing Sequence
  ASLBolusCutoffTimingSequence: Array<Dataset> | undefined;
  x0018925d: Array<Dataset> | undefined;

  // ASL Bolus Cut-off Technique
  ASLBolusCutoffTechnique: string | undefined;
  x0018925e: string | undefined;

  // ASL Bolus Cut-off Delay Time
  ASLBolusCutoffDelayTime: number | undefined;
  x0018925f: number | undefined;

  // ASL Slab Sequence
  ASLSlabSequence: Array<Dataset> | undefined;
  x00189260: Array<Dataset> | undefined;

  // Chemical Shift Minimum Integration Limit in ppm
  ChemicalShiftMinimumIntegrationLimitInppm: number | undefined;
  x00189295: number | undefined;

  // Chemical Shift Maximum Integration Limit in ppm
  ChemicalShiftMaximumIntegrationLimitInppm: number | undefined;
  x00189296: number | undefined;

  // Water Reference Acquisition
  WaterReferenceAcquisition: string | undefined;
  x00189297: string | undefined;

  // Echo Peak Position
  EchoPeakPosition: number | undefined;
  x00189298: number | undefined;

  // CT Acquisition Type Sequence
  CTAcquisitionTypeSequence: Array<Dataset> | undefined;
  x00189301: Array<Dataset> | undefined;

  // Acquisition Type
  AcquisitionType: string | undefined;
  x00189302: string | undefined;

  // Tube Angle
  TubeAngle: number | undefined;
  x00189303: number | undefined;

  // CT Acquisition Details Sequence
  CTAcquisitionDetailsSequence: Array<Dataset> | undefined;
  x00189304: Array<Dataset> | undefined;

  // Revolution Time
  RevolutionTime: number | undefined;
  x00189305: number | undefined;

  // Single Collimation Width
  SingleCollimationWidth: number | undefined;
  x00189306: number | undefined;

  // Total Collimation Width
  TotalCollimationWidth: number | undefined;
  x00189307: number | undefined;

  // CT Table Dynamics Sequence
  CTTableDynamicsSequence: Array<Dataset> | undefined;
  x00189308: Array<Dataset> | undefined;

  // Table Speed
  TableSpeed: number | undefined;
  x00189309: number | undefined;

  // Table Feed per Rotation
  TableFeedPerRotation: number | undefined;
  x00189310: number | undefined;

  // Spiral Pitch Factor
  SpiralPitchFactor: number | undefined;
  x00189311: number | undefined;

  // CT Geometry Sequence
  CTGeometrySequence: Array<Dataset> | undefined;
  x00189312: Array<Dataset> | undefined;

  // Data Collection Center (Patient)
  DataCollectionCenterPatient: Array<number> | undefined;
  x00189313: Array<number> | undefined;

  // CT Reconstruction Sequence
  CTReconstructionSequence: Array<Dataset> | undefined;
  x00189314: Array<Dataset> | undefined;

  // Reconstruction Algorithm
  ReconstructionAlgorithm: string | undefined;
  x00189315: string | undefined;

  // Convolution Kernel Group
  ConvolutionKernelGroup: string | undefined;
  x00189316: string | undefined;

  // Reconstruction Field of View
  ReconstructionFieldOfView: Array<number> | undefined;
  x00189317: Array<number> | undefined;

  // Reconstruction Target Center (Patient)
  ReconstructionTargetCenterPatient: Array<number> | undefined;
  x00189318: Array<number> | undefined;

  // Reconstruction Angle
  ReconstructionAngle: number | undefined;
  x00189319: number | undefined;

  // Image Filter
  ImageFilter: string | undefined;
  x00189320: string | undefined;

  // CT Exposure Sequence
  CTExposureSequence: Array<Dataset> | undefined;
  x00189321: Array<Dataset> | undefined;

  // Reconstruction Pixel Spacing
  ReconstructionPixelSpacing: Array<number> | undefined;
  x00189322: Array<number> | undefined;

  // Exposure Modulation Type
  ExposureModulationType: string | undefined;
  x00189323: string | undefined;

  // Estimated Dose Saving
  EstimatedDoseSaving: number | undefined;
  x00189324: number | undefined;

  // CT X-Ray Details Sequence
  CTXRayDetailsSequence: Array<Dataset> | undefined;
  x00189325: Array<Dataset> | undefined;

  // CT Position Sequence
  CTPositionSequence: Array<Dataset> | undefined;
  x00189326: Array<Dataset> | undefined;

  // Table Position
  TablePosition: number | undefined;
  x00189327: number | undefined;

  // Exposure Time in ms
  ExposureTimeInms: number | undefined;
  x00189328: number | undefined;

  // CT Image Frame Type Sequence
  CTImageFrameTypeSequence: Array<Dataset> | undefined;
  x00189329: Array<Dataset> | undefined;

  // X-Ray Tube Current in mA
  XRayTubeCurrentInmA: number | undefined;
  x00189330: number | undefined;

  // Exposure in mAs
  ExposureInmAs: number | undefined;
  x00189332: number | undefined;

  // Constant Volume Flag
  ConstantVolumeFlag: string | undefined;
  x00189333: string | undefined;

  // Fluoroscopy Flag
  FluoroscopyFlag: string | undefined;
  x00189334: string | undefined;

  // Distance Source to Data Collection Center
  DistanceSourceToDataCollectionCenter: number | undefined;
  x00189335: number | undefined;

  // Contrast/Bolus Agent Number
  ContrastBolusAgentNumber: number | undefined;
  x00189337: number | undefined;

  // Contrast/Bolus Ingredient Code Sequence
  ContrastBolusIngredientCodeSequence: Array<Dataset> | undefined;
  x00189338: Array<Dataset> | undefined;

  // Contrast Administration Profile Sequence
  ContrastAdministrationProfileSequence: Array<Dataset> | undefined;
  x00189340: Array<Dataset> | undefined;

  // Contrast/Bolus Usage Sequence
  ContrastBolusUsageSequence: Array<Dataset> | undefined;
  x00189341: Array<Dataset> | undefined;

  // Contrast/Bolus Agent Administered
  ContrastBolusAgentAdministered: string | undefined;
  x00189342: string | undefined;

  // Contrast/Bolus Agent Detected
  ContrastBolusAgentDetected: string | undefined;
  x00189343: string | undefined;

  // Contrast/Bolus Agent Phase
  ContrastBolusAgentPhase: string | undefined;
  x00189344: string | undefined;

  // CTDIvol
  CTDIvol: number | undefined;
  x00189345: number | undefined;

  // CTDI Phantom Type Code Sequence
  CTDIPhantomTypeCodeSequence: Array<Dataset> | undefined;
  x00189346: Array<Dataset> | undefined;

  // Calcium Scoring Mass Factor Patient
  CalciumScoringMassFactorPatient: number | undefined;
  x00189351: number | undefined;

  // Calcium Scoring Mass Factor Device
  CalciumScoringMassFactorDevice: Array<number> | undefined;
  x00189352: Array<number> | undefined;

  // Energy Weighting Factor
  EnergyWeightingFactor: number | undefined;
  x00189353: number | undefined;

  // CT Additional X-Ray Source Sequence
  CTAdditionalXRaySourceSequence: Array<Dataset> | undefined;
  x00189360: Array<Dataset> | undefined;

  // Projection Pixel Calibration Sequence
  ProjectionPixelCalibrationSequence: Array<Dataset> | undefined;
  x00189401: Array<Dataset> | undefined;

  // Distance Source to Isocenter
  DistanceSourceToIsocenter: number | undefined;
  x00189402: number | undefined;

  // Distance Object to Table Top
  DistanceObjectToTableTop: number | undefined;
  x00189403: number | undefined;

  // Object Pixel Spacing in Center of Beam
  ObjectPixelSpacingInCenterOfBeam: Array<number> | undefined;
  x00189404: Array<number> | undefined;

  // Positioner Position Sequence
  PositionerPositionSequence: Array<Dataset> | undefined;
  x00189405: Array<Dataset> | undefined;

  // Table Position Sequence
  TablePositionSequence: Array<Dataset> | undefined;
  x00189406: Array<Dataset> | undefined;

  // Collimator Shape Sequence
  CollimatorShapeSequence: Array<Dataset> | undefined;
  x00189407: Array<Dataset> | undefined;

  // Planes in Acquisition
  PlanesInAcquisition: string | undefined;
  x00189410: string | undefined;

  // XA/XRF Frame Characteristics Sequence
  XAXRFFrameCharacteristicsSequence: Array<Dataset> | undefined;
  x00189412: Array<Dataset> | undefined;

  // Frame Acquisition Sequence
  FrameAcquisitionSequence: Array<Dataset> | undefined;
  x00189417: Array<Dataset> | undefined;

  // X-Ray Receptor Type
  XRayReceptorType: string | undefined;
  x00189420: string | undefined;

  // Acquisition Protocol Name
  AcquisitionProtocolName: string | undefined;
  x00189423: string | undefined;

  // Contrast/Bolus Ingredient Opaque
  ContrastBolusIngredientOpaque: string | undefined;
  x00189425: string | undefined;

  // Distance Receptor Plane to Detector Housing
  DistanceReceptorPlaneToDetectorHousing: number | undefined;
  x00189426: number | undefined;

  // Intensifier Active Shape
  IntensifierActiveShape: string | undefined;
  x00189427: string | undefined;

  // Intensifier Active Dimension(s)
  IntensifierActiveDimensions: Array<number> | undefined;
  x00189428: Array<number> | undefined;

  // Physical Detector Size
  PhysicalDetectorSize: Array<number> | undefined;
  x00189429: Array<number> | undefined;

  // Position of Isocenter Projection
  PositionOfIsocenterProjection: Array<number> | undefined;
  x00189430: Array<number> | undefined;

  // Field of View Sequence
  FieldOfViewSequence: Array<Dataset> | undefined;
  x00189432: Array<Dataset> | undefined;

  // Field of View Description
  FieldOfViewDescription: string | undefined;
  x00189433: string | undefined;

  // Exposure Control Sensing Regions Sequence
  ExposureControlSensingRegionsSequence: Array<Dataset> | undefined;
  x00189434: Array<Dataset> | undefined;

  // Exposure Control Sensing Region Shape
  ExposureControlSensingRegionShape: string | undefined;
  x00189435: string | undefined;

  // Exposure Control Sensing Region Left Vertical Edge
  ExposureControlSensingRegionLeftVerticalEdge: Uint8Array | undefined;
  x00189436: Uint8Array | undefined;

  // Exposure Control Sensing Region Right Vertical Edge
  ExposureControlSensingRegionRightVerticalEdge: Uint8Array | undefined;
  x00189437: Uint8Array | undefined;

  // Exposure Control Sensing Region Upper Horizontal Edge
  ExposureControlSensingRegionUpperHorizontalEdge: Uint8Array | undefined;
  x00189438: Uint8Array | undefined;

  // Exposure Control Sensing Region Lower Horizontal Edge
  ExposureControlSensingRegionLowerHorizontalEdge: Uint8Array | undefined;
  x00189439: Uint8Array | undefined;

  // Center of Circular Exposure Control Sensing Region
  CenterOfCircularExposureControlSensingRegion: Array<Uint8Array> | undefined;
  x00189440: Array<Uint8Array> | undefined;

  // Radius of Circular Exposure Control Sensing Region
  RadiusOfCircularExposureControlSensingRegion: number | undefined;
  x00189441: number | undefined;

  // Vertices of the Polygonal Exposure Control Sensing Region
  VerticesOfThePolygonalExposureControlSensingRegion: Array<Uint8Array> | undefined;
  x00189442: Array<Uint8Array> | undefined;

  // Column Angulation (Patient)
  ColumnAngulationPatient: number | undefined;
  x00189447: number | undefined;

  // Beam Angle
  BeamAngle: number | undefined;
  x00189449: number | undefined;

  // Frame Detector Parameters Sequence
  FrameDetectorParametersSequence: Array<Dataset> | undefined;
  x00189451: Array<Dataset> | undefined;

  // Calculated Anatomy Thickness
  CalculatedAnatomyThickness: number | undefined;
  x00189452: number | undefined;

  // Calibration Sequence
  CalibrationSequence: Array<Dataset> | undefined;
  x00189455: Array<Dataset> | undefined;

  // Object Thickness Sequence
  ObjectThicknessSequence: Array<Dataset> | undefined;
  x00189456: Array<Dataset> | undefined;

  // Plane Identification
  PlaneIdentification: string | undefined;
  x00189457: string | undefined;

  // Field of View Dimension(s) in Float
  FieldOfViewDimensionsInFloat: Array<number> | undefined;
  x00189461: Array<number> | undefined;

  // Isocenter Reference System Sequence
  IsocenterReferenceSystemSequence: Array<Dataset> | undefined;
  x00189462: Array<Dataset> | undefined;

  // Positioner Isocenter Primary Angle
  PositionerIsocenterPrimaryAngle: number | undefined;
  x00189463: number | undefined;

  // Positioner Isocenter Secondary Angle
  PositionerIsocenterSecondaryAngle: number | undefined;
  x00189464: number | undefined;

  // Positioner Isocenter Detector Rotation Angle
  PositionerIsocenterDetectorRotationAngle: number | undefined;
  x00189465: number | undefined;

  // Table X Position to Isocenter
  TableXPositionToIsocenter: number | undefined;
  x00189466: number | undefined;

  // Table Y Position to Isocenter
  TableYPositionToIsocenter: number | undefined;
  x00189467: number | undefined;

  // Table Z Position to Isocenter
  TableZPositionToIsocenter: number | undefined;
  x00189468: number | undefined;

  // Table Horizontal Rotation Angle
  TableHorizontalRotationAngle: number | undefined;
  x00189469: number | undefined;

  // Table Head Tilt Angle
  TableHeadTiltAngle: number | undefined;
  x00189470: number | undefined;

  // Table Cradle Tilt Angle
  TableCradleTiltAngle: number | undefined;
  x00189471: number | undefined;

  // Frame Display Shutter Sequence
  FrameDisplayShutterSequence: Array<Dataset> | undefined;
  x00189472: Array<Dataset> | undefined;

  // Acquired Image Area Dose Product
  AcquiredImageAreaDoseProduct: number | undefined;
  x00189473: number | undefined;

  // C-arm Positioner Tabletop Relationship
  CArmPositionerTabletopRelationship: string | undefined;
  x00189474: string | undefined;

  // X-Ray Geometry Sequence
  XRayGeometrySequence: Array<Dataset> | undefined;
  x00189476: Array<Dataset> | undefined;

  // Irradiation Event Identification Sequence
  IrradiationEventIdentificationSequence: Array<Dataset> | undefined;
  x00189477: Array<Dataset> | undefined;

  // X-Ray 3D Frame Type Sequence
  XRay3DFrameTypeSequence: Array<Dataset> | undefined;
  x00189504: Array<Dataset> | undefined;

  // Contributing Sources Sequence
  ContributingSourcesSequence: Array<Dataset> | undefined;
  x00189506: Array<Dataset> | undefined;

  // X-Ray 3D Acquisition Sequence
  XRay3DAcquisitionSequence: Array<Dataset> | undefined;
  x00189507: Array<Dataset> | undefined;

  // Primary Positioner Scan Arc
  PrimaryPositionerScanArc: number | undefined;
  x00189508: number | undefined;

  // Secondary Positioner Scan Arc
  SecondaryPositionerScanArc: number | undefined;
  x00189509: number | undefined;

  // Primary Positioner Scan Start Angle
  PrimaryPositionerScanStartAngle: number | undefined;
  x00189510: number | undefined;

  // Secondary Positioner Scan Start Angle
  SecondaryPositionerScanStartAngle: number | undefined;
  x00189511: number | undefined;

  // Primary Positioner Increment
  PrimaryPositionerIncrement: number | undefined;
  x00189514: number | undefined;

  // Secondary Positioner Increment
  SecondaryPositionerIncrement: number | undefined;
  x00189515: number | undefined;

  // Start Acquisition DateTime
  StartAcquisitionDateTime: string | undefined;
  x00189516: string | undefined;

  // End Acquisition DateTime
  EndAcquisitionDateTime: string | undefined;
  x00189517: string | undefined;

  // Primary Positioner Increment Sign
  PrimaryPositionerIncrementSign: Uint8Array | undefined;
  x00189518: Uint8Array | undefined;

  // Secondary Positioner Increment Sign
  SecondaryPositionerIncrementSign: Uint8Array | undefined;
  x00189519: Uint8Array | undefined;

  // Application Name
  ApplicationName: string | undefined;
  x00189524: string | undefined;

  // Application Version
  ApplicationVersion: string | undefined;
  x00189525: string | undefined;

  // Application Manufacturer
  ApplicationManufacturer: string | undefined;
  x00189526: string | undefined;

  // Algorithm Type
  AlgorithmType: string | undefined;
  x00189527: string | undefined;

  // Algorithm Description
  AlgorithmDescription: string | undefined;
  x00189528: string | undefined;

  // X-Ray 3D Reconstruction Sequence
  XRay3DReconstructionSequence: Array<Dataset> | undefined;
  x00189530: Array<Dataset> | undefined;

  // Reconstruction Description
  ReconstructionDescription: string | undefined;
  x00189531: string | undefined;

  // Per Projection Acquisition Sequence
  PerProjectionAcquisitionSequence: Array<Dataset> | undefined;
  x00189538: Array<Dataset> | undefined;

  // Detector Position Sequence
  DetectorPositionSequence: Array<Dataset> | undefined;
  x00189541: Array<Dataset> | undefined;

  // X-Ray Acquisition Dose Sequence
  XRayAcquisitionDoseSequence: Array<Dataset> | undefined;
  x00189542: Array<Dataset> | undefined;

  // X-Ray Source Isocenter Primary Angle
  XRaySourceIsocenterPrimaryAngle: number | undefined;
  x00189543: number | undefined;

  // X-Ray Source Isocenter Secondary Angle
  XRaySourceIsocenterSecondaryAngle: number | undefined;
  x00189544: number | undefined;

  // Breast Support Isocenter Primary Angle
  BreastSupportIsocenterPrimaryAngle: number | undefined;
  x00189545: number | undefined;

  // Breast Support Isocenter Secondary Angle
  BreastSupportIsocenterSecondaryAngle: number | undefined;
  x00189546: number | undefined;

  // Breast Support X Position to Isocenter
  BreastSupportXPositionToIsocenter: number | undefined;
  x00189547: number | undefined;

  // Breast Support Y Position to Isocenter
  BreastSupportYPositionToIsocenter: number | undefined;
  x00189548: number | undefined;

  // Breast Support Z Position to Isocenter
  BreastSupportZPositionToIsocenter: number | undefined;
  x00189549: number | undefined;

  // Detector Isocenter Primary Angle
  DetectorIsocenterPrimaryAngle: number | undefined;
  x00189550: number | undefined;

  // Detector Isocenter Secondary Angle
  DetectorIsocenterSecondaryAngle: number | undefined;
  x00189551: number | undefined;

  // Detector X Position to Isocenter
  DetectorXPositionToIsocenter: number | undefined;
  x00189552: number | undefined;

  // Detector Y Position to Isocenter
  DetectorYPositionToIsocenter: number | undefined;
  x00189553: number | undefined;

  // Detector Z Position to Isocenter
  DetectorZPositionToIsocenter: number | undefined;
  x00189554: number | undefined;

  // X-Ray Grid Sequence
  XRayGridSequence: Array<Dataset> | undefined;
  x00189555: Array<Dataset> | undefined;

  // X-Ray Filter Sequence
  XRayFilterSequence: Array<Dataset> | undefined;
  x00189556: Array<Dataset> | undefined;

  // Detector Active Area TLHC Position
  DetectorActiveAreaTLHCPosition: Array<number> | undefined;
  x00189557: Array<number> | undefined;

  // Detector Active Area Orientation
  DetectorActiveAreaOrientation: Array<number> | undefined;
  x00189558: Array<number> | undefined;

  // Positioner Primary Angle Direction
  PositionerPrimaryAngleDirection: string | undefined;
  x00189559: string | undefined;

  // Diffusion b-matrix Sequence
  DiffusionBMatrixSequence: Array<Dataset> | undefined;
  x00189601: Array<Dataset> | undefined;

  // Diffusion b-value XX
  DiffusionBValueXX: number | undefined;
  x00189602: number | undefined;

  // Diffusion b-value XY
  DiffusionBValueXY: number | undefined;
  x00189603: number | undefined;

  // Diffusion b-value XZ
  DiffusionBValueXZ: number | undefined;
  x00189604: number | undefined;

  // Diffusion b-value YY
  DiffusionBValueYY: number | undefined;
  x00189605: number | undefined;

  // Diffusion b-value YZ
  DiffusionBValueYZ: number | undefined;
  x00189606: number | undefined;

  // Diffusion b-value ZZ
  DiffusionBValueZZ: number | undefined;
  x00189607: number | undefined;

  // Decay Correction DateTime
  DecayCorrectionDateTime: string | undefined;
  x00189701: string | undefined;

  // Start Density Threshold
  StartDensityThreshold: number | undefined;
  x00189715: number | undefined;

  // Start Relative Density Difference Threshold
  StartRelativeDensityDifferenceThreshold: number | undefined;
  x00189716: number | undefined;

  // Start Cardiac Trigger Count Threshold
  StartCardiacTriggerCountThreshold: number | undefined;
  x00189717: number | undefined;

  // Start Respiratory Trigger Count Threshold
  StartRespiratoryTriggerCountThreshold: number | undefined;
  x00189718: number | undefined;

  // Termination Counts Threshold
  TerminationCountsThreshold: number | undefined;
  x00189719: number | undefined;

  // Termination Density Threshold
  TerminationDensityThreshold: number | undefined;
  x00189720: number | undefined;

  // Termination Relative Density Threshold
  TerminationRelativeDensityThreshold: number | undefined;
  x00189721: number | undefined;

  // Termination Time Threshold
  TerminationTimeThreshold: number | undefined;
  x00189722: number | undefined;

  // Termination Cardiac Trigger Count Threshold
  TerminationCardiacTriggerCountThreshold: number | undefined;
  x00189723: number | undefined;

  // Termination Respiratory Trigger Count Threshold
  TerminationRespiratoryTriggerCountThreshold: number | undefined;
  x00189724: number | undefined;

  // Detector Geometry
  DetectorGeometry: string | undefined;
  x00189725: string | undefined;

  // Transverse Detector Separation
  TransverseDetectorSeparation: number | undefined;
  x00189726: number | undefined;

  // Axial Detector Dimension
  AxialDetectorDimension: number | undefined;
  x00189727: number | undefined;

  // Radiopharmaceutical Agent Number
  RadiopharmaceuticalAgentNumber: number | undefined;
  x00189729: number | undefined;

  // PET Frame Acquisition Sequence
  PETFrameAcquisitionSequence: Array<Dataset> | undefined;
  x00189732: Array<Dataset> | undefined;

  // PET Detector Motion Details Sequence
  PETDetectorMotionDetailsSequence: Array<Dataset> | undefined;
  x00189733: Array<Dataset> | undefined;

  // PET Table Dynamics Sequence
  PETTableDynamicsSequence: Array<Dataset> | undefined;
  x00189734: Array<Dataset> | undefined;

  // PET Position Sequence
  PETPositionSequence: Array<Dataset> | undefined;
  x00189735: Array<Dataset> | undefined;

  // PET Frame Correction Factors Sequence
  PETFrameCorrectionFactorsSequence: Array<Dataset> | undefined;
  x00189736: Array<Dataset> | undefined;

  // Radiopharmaceutical Usage Sequence
  RadiopharmaceuticalUsageSequence: Array<Dataset> | undefined;
  x00189737: Array<Dataset> | undefined;

  // Attenuation Correction Source
  AttenuationCorrectionSource: string | undefined;
  x00189738: string | undefined;

  // Number of Iterations
  NumberOfIterations: number | undefined;
  x00189739: number | undefined;

  // Number of Subsets
  NumberOfSubsets: number | undefined;
  x00189740: number | undefined;

  // PET Reconstruction Sequence
  PETReconstructionSequence: Array<Dataset> | undefined;
  x00189749: Array<Dataset> | undefined;

  // PET Frame Type Sequence
  PETFrameTypeSequence: Array<Dataset> | undefined;
  x00189751: Array<Dataset> | undefined;

  // Time of Flight Information Used
  TimeOfFlightInformationUsed: string | undefined;
  x00189755: string | undefined;

  // Reconstruction Type
  ReconstructionType: string | undefined;
  x00189756: string | undefined;

  // Decay Corrected
  DecayCorrected: string | undefined;
  x00189758: string | undefined;

  // Attenuation Corrected
  AttenuationCorrected: string | undefined;
  x00189759: string | undefined;

  // Scatter Corrected
  ScatterCorrected: string | undefined;
  x00189760: string | undefined;

  // Dead Time Corrected
  DeadTimeCorrected: string | undefined;
  x00189761: string | undefined;

  // Gantry Motion Corrected
  GantryMotionCorrected: string | undefined;
  x00189762: string | undefined;

  // Patient Motion Corrected
  PatientMotionCorrected: string | undefined;
  x00189763: string | undefined;

  // Count Loss Normalization Corrected
  CountLossNormalizationCorrected: string | undefined;
  x00189764: string | undefined;

  // Randoms Corrected
  RandomsCorrected: string | undefined;
  x00189765: string | undefined;

  // Non-uniform Radial Sampling Corrected
  NonUniformRadialSamplingCorrected: string | undefined;
  x00189766: string | undefined;

  // Sensitivity Calibrated
  SensitivityCalibrated: string | undefined;
  x00189767: string | undefined;

  // Detector Normalization Correction
  DetectorNormalizationCorrection: string | undefined;
  x00189768: string | undefined;

  // Iterative Reconstruction Method
  IterativeReconstructionMethod: string | undefined;
  x00189769: string | undefined;

  // Attenuation Correction Temporal Relationship
  AttenuationCorrectionTemporalRelationship: string | undefined;
  x00189770: string | undefined;

  // Patient Physiological State Sequence
  PatientPhysiologicalStateSequence: Array<Dataset> | undefined;
  x00189771: Array<Dataset> | undefined;

  // Patient Physiological State Code Sequence
  PatientPhysiologicalStateCodeSequence: Array<Dataset> | undefined;
  x00189772: Array<Dataset> | undefined;

  // Depth(s) of Focus
  DepthsOfFocus: Array<number> | undefined;
  x00189801: Array<number> | undefined;

  // Excluded Intervals Sequence
  ExcludedIntervalsSequence: Array<Dataset> | undefined;
  x00189803: Array<Dataset> | undefined;

  // Exclusion Start DateTime
  ExclusionStartDateTime: string | undefined;
  x00189804: string | undefined;

  // Exclusion Duration
  ExclusionDuration: number | undefined;
  x00189805: number | undefined;

  // US Image Description Sequence
  USImageDescriptionSequence: Array<Dataset> | undefined;
  x00189806: Array<Dataset> | undefined;

  // Image Data Type Sequence
  ImageDataTypeSequence: Array<Dataset> | undefined;
  x00189807: Array<Dataset> | undefined;

  // Data Type
  DataType: string | undefined;
  x00189808: string | undefined;

  // Transducer Scan Pattern Code Sequence
  TransducerScanPatternCodeSequence: Array<Dataset> | undefined;
  x00189809: Array<Dataset> | undefined;

  // Aliased Data Type
  AliasedDataType: string | undefined;
  x0018980b: string | undefined;

  // Position Measuring Device Used
  PositionMeasuringDeviceUsed: string | undefined;
  x0018980c: string | undefined;

  // Transducer Geometry Code Sequence
  TransducerGeometryCodeSequence: Array<Dataset> | undefined;
  x0018980d: Array<Dataset> | undefined;

  // Transducer Beam Steering Code Sequence
  TransducerBeamSteeringCodeSequence: Array<Dataset> | undefined;
  x0018980e: Array<Dataset> | undefined;

  // Transducer Application Code Sequence
  TransducerApplicationCodeSequence: Array<Dataset> | undefined;
  x0018980f: Array<Dataset> | undefined;

  // Zero Velocity Pixel Value
  ZeroVelocityPixelValue: number | undefined;
  x00189810: number | undefined;

  // Contributing Equipment Sequence
  ContributingEquipmentSequence: Array<Dataset> | undefined;
  x0018a001: Array<Dataset> | undefined;

  // Contribution DateTime
  ContributionDateTime: string | undefined;
  x0018a002: string | undefined;

  // Study Instance UID
  StudyInstanceUID: string | undefined;
  x0020000d: string | undefined;

  // Series Instance UID
  SeriesInstanceUID: string | undefined;
  x0020000e: string | undefined;

  // Study ID
  StudyID: string | undefined;
  x00200010: string | undefined;

  // Series Number
  SeriesNumber: number | undefined;
  x00200011: number | undefined;

  // Acquisition Number
  AcquisitionNumber: number | undefined;
  x00200012: number | undefined;

  // Instance Number
  InstanceNumber: number | undefined;
  x00200013: number | undefined;

  // Isotope Number
  IsotopeNumber: number | undefined;
  x00200014: number | undefined;

  // Phase Number
  PhaseNumber: number | undefined;
  x00200015: number | undefined;

  // Interval Number
  IntervalNumber: number | undefined;
  x00200016: number | undefined;

  // Time Slot Number
  TimeSlotNumber: number | undefined;
  x00200017: number | undefined;

  // Angle Number
  AngleNumber: number | undefined;
  x00200018: number | undefined;

  // Item Number
  ItemNumber: number | undefined;
  x00200019: number | undefined;

  // Patient Orientation
  PatientOrientation: Array<string> | undefined;
  x00200020: Array<string> | undefined;

  // Overlay Number
  OverlayNumber: number | undefined;
  x00200022: number | undefined;

  // Curve Number
  CurveNumber: number | undefined;
  x00200024: number | undefined;

  // LUT Number
  LUTNumber: number | undefined;
  x00200026: number | undefined;

  // Image Position
  ImagePosition: Array<number> | undefined;
  x00200030: Array<number> | undefined;

  // Image Position (Patient)
  ImagePositionPatient: Array<number> | undefined;
  x00200032: Array<number> | undefined;

  // Image Orientation
  ImageOrientation: Array<number> | undefined;
  x00200035: Array<number> | undefined;

  // Image Orientation (Patient)
  ImageOrientationPatient: Array<number> | undefined;
  x00200037: Array<number> | undefined;

  // Location
  Location: number | undefined;
  x00200050: number | undefined;

  // Frame of Reference UID
  FrameOfReferenceUID: string | undefined;
  x00200052: string | undefined;

  // Laterality
  Laterality: string | undefined;
  x00200060: string | undefined;

  // Image Laterality
  ImageLaterality: string | undefined;
  x00200062: string | undefined;

  // Image Geometry Type
  ImageGeometryType: string | undefined;
  x00200070: string | undefined;

  // Masking Image
  MaskingImage: Array<string> | undefined;
  x00200080: Array<string> | undefined;

  // Report Number
  ReportNumber: number | undefined;
  x002000aa: number | undefined;

  // Temporal Position Identifier
  TemporalPositionIdentifier: number | undefined;
  x00200100: number | undefined;

  // Number of Temporal Positions
  NumberOfTemporalPositions: number | undefined;
  x00200105: number | undefined;

  // Temporal Resolution
  TemporalResolution: number | undefined;
  x00200110: number | undefined;

  // Synchronization Frame of Reference UID
  SynchronizationFrameOfReferenceUID: string | undefined;
  x00200200: string | undefined;

  // SOP Instance UID of Concatenation Source
  SOPInstanceUIDOfConcatenationSource: string | undefined;
  x00200242: string | undefined;

  // Series in Study
  SeriesInStudy: number | undefined;
  x00201000: number | undefined;

  // Acquisitions in Series
  AcquisitionsInSeries: number | undefined;
  x00201001: number | undefined;

  // Images in Acquisition
  ImagesInAcquisition: number | undefined;
  x00201002: number | undefined;

  // Images in Series
  ImagesInSeries: number | undefined;
  x00201003: number | undefined;

  // Acquisitions in Study
  AcquisitionsInStudy: number | undefined;
  x00201004: number | undefined;

  // Images in Study
  ImagesInStudy: number | undefined;
  x00201005: number | undefined;

  // Reference
  Reference: Array<string> | undefined;
  x00201020: Array<string> | undefined;

  // Position Reference Indicator
  PositionReferenceIndicator: string | undefined;
  x00201040: string | undefined;

  // Slice Location
  SliceLocation: number | undefined;
  x00201041: number | undefined;

  // Other Study Numbers
  OtherStudyNumbers: Array<number> | undefined;
  x00201070: Array<number> | undefined;

  // Number of Patient Related Studies
  NumberOfPatientRelatedStudies: number | undefined;
  x00201200: number | undefined;

  // Number of Patient Related Series
  NumberOfPatientRelatedSeries: number | undefined;
  x00201202: number | undefined;

  // Number of Patient Related Instances
  NumberOfPatientRelatedInstances: number | undefined;
  x00201204: number | undefined;

  // Number of Study Related Series
  NumberOfStudyRelatedSeries: number | undefined;
  x00201206: number | undefined;

  // Number of Study Related Instances
  NumberOfStudyRelatedInstances: number | undefined;
  x00201208: number | undefined;

  // Number of Series Related Instances
  NumberOfSeriesRelatedInstances: number | undefined;
  x00201209: number | undefined;

  // Source Image IDs
  SourceImageIDs: Array<string> | undefined;
  x002031xx: Array<string> | undefined;

  // Modifying Device ID
  ModifyingDeviceID: string | undefined;
  x00203401: string | undefined;

  // Modified Image ID
  ModifiedImageID: string | undefined;
  x00203402: string | undefined;

  // Modified Image Date
  ModifiedImageDate: Date | undefined;
  x00203403: Date | undefined;

  // Modifying Device Manufacturer
  ModifyingDeviceManufacturer: string | undefined;
  x00203404: string | undefined;

  // Modified Image Time
  ModifiedImageTime: string | undefined;
  x00203405: string | undefined;

  // Modified Image Description
  ModifiedImageDescription: string | undefined;
  x00203406: string | undefined;

  // Original Image Identification
  OriginalImageIdentification: Array<Uint16Array> | undefined;
  x00205000: Array<Uint16Array> | undefined;

  // Original Image Identification Nomenclature
  OriginalImageIdentificationNomenclature: Array<string> | undefined;
  x00205002: Array<string> | undefined;

  // Stack ID
  StackID: string | undefined;
  x00209056: string | undefined;

  // In-Stack Position Number
  InStackPositionNumber: number | undefined;
  x00209057: number | undefined;

  // Frame Anatomy Sequence
  FrameAnatomySequence: Array<Dataset> | undefined;
  x00209071: Array<Dataset> | undefined;

  // Frame Laterality
  FrameLaterality: string | undefined;
  x00209072: string | undefined;

  // Frame Content Sequence
  FrameContentSequence: Array<Dataset> | undefined;
  x00209111: Array<Dataset> | undefined;

  // Plane Position Sequence
  PlanePositionSequence: Array<Dataset> | undefined;
  x00209113: Array<Dataset> | undefined;

  // Plane Orientation Sequence
  PlaneOrientationSequence: Array<Dataset> | undefined;
  x00209116: Array<Dataset> | undefined;

  // Temporal Position Index
  TemporalPositionIndex: number | undefined;
  x00209128: number | undefined;

  // Nominal Cardiac Trigger Delay Time
  NominalCardiacTriggerDelayTime: number | undefined;
  x00209153: number | undefined;

  // Nominal Cardiac Trigger Time Prior To R-Peak
  NominalCardiacTriggerTimePriorToRPeak: number | undefined;
  x00209154: number | undefined;

  // Actual Cardiac Trigger Time Prior To R-Peak
  ActualCardiacTriggerTimePriorToRPeak: number | undefined;
  x00209155: number | undefined;

  // Frame Acquisition Number
  FrameAcquisitionNumber: number | undefined;
  x00209156: number | undefined;

  // Dimension Index Values
  DimensionIndexValues: Array<number> | undefined;
  x00209157: Array<number> | undefined;

  // Concatenation UID
  ConcatenationUID: string | undefined;
  x00209161: string | undefined;

  // In-concatenation Number
  InConcatenationNumber: number | undefined;
  x00209162: number | undefined;

  // In-concatenation Total Number
  InConcatenationTotalNumber: number | undefined;
  x00209163: number | undefined;

  // Dimension Organization UID
  DimensionOrganizationUID: string | undefined;
  x00209164: string | undefined;

  // Dimension Index Pointer
  DimensionIndexPointer: Uint16Array | undefined;
  x00209165: Uint16Array | undefined;

  // Functional Group Pointer
  FunctionalGroupPointer: Uint16Array | undefined;
  x00209167: Uint16Array | undefined;

  // Unassigned Shared Converted Attributes Sequence
  UnassignedSharedConvertedAttributesSequence: Array<Dataset> | undefined;
  x00209170: Array<Dataset> | undefined;

  // Unassigned Per-Frame Converted Attributes Sequence
  UnassignedPerFrameConvertedAttributesSequence: Array<Dataset> | undefined;
  x00209171: Array<Dataset> | undefined;

  // Conversion Source Attributes Sequence
  ConversionSourceAttributesSequence: Array<Dataset> | undefined;
  x00209172: Array<Dataset> | undefined;

  // Dimension Index Private Creator
  DimensionIndexPrivateCreator: string | undefined;
  x00209213: string | undefined;

  // Dimension Organization Sequence
  DimensionOrganizationSequence: Array<Dataset> | undefined;
  x00209221: Array<Dataset> | undefined;

  // Dimension Index Sequence
  DimensionIndexSequence: Array<Dataset> | undefined;
  x00209222: Array<Dataset> | undefined;

  // Concatenation Frame Offset Number
  ConcatenationFrameOffsetNumber: number | undefined;
  x00209228: number | undefined;

  // Functional Group Private Creator
  FunctionalGroupPrivateCreator: string | undefined;
  x00209238: string | undefined;

  // Nominal Percentage of Cardiac Phase
  NominalPercentageOfCardiacPhase: number | undefined;
  x00209241: number | undefined;

  // Nominal Percentage of Respiratory Phase
  NominalPercentageOfRespiratoryPhase: number | undefined;
  x00209245: number | undefined;

  // Starting Respiratory Amplitude
  StartingRespiratoryAmplitude: number | undefined;
  x00209246: number | undefined;

  // Starting Respiratory Phase
  StartingRespiratoryPhase: string | undefined;
  x00209247: string | undefined;

  // Ending Respiratory Amplitude
  EndingRespiratoryAmplitude: number | undefined;
  x00209248: number | undefined;

  // Ending Respiratory Phase
  EndingRespiratoryPhase: string | undefined;
  x00209249: string | undefined;

  // Respiratory Trigger Type
  RespiratoryTriggerType: string | undefined;
  x00209250: string | undefined;

  // R-R Interval Time Nominal
  RRIntervalTimeNominal: number | undefined;
  x00209251: number | undefined;

  // Actual Cardiac Trigger Delay Time
  ActualCardiacTriggerDelayTime: number | undefined;
  x00209252: number | undefined;

  // Respiratory Synchronization Sequence
  RespiratorySynchronizationSequence: Array<Dataset> | undefined;
  x00209253: Array<Dataset> | undefined;

  // Respiratory Interval Time
  RespiratoryIntervalTime: number | undefined;
  x00209254: number | undefined;

  // Nominal Respiratory Trigger Delay Time
  NominalRespiratoryTriggerDelayTime: number | undefined;
  x00209255: number | undefined;

  // Respiratory Trigger Delay Threshold
  RespiratoryTriggerDelayThreshold: number | undefined;
  x00209256: number | undefined;

  // Actual Respiratory Trigger Delay Time
  ActualRespiratoryTriggerDelayTime: number | undefined;
  x00209257: number | undefined;

  // Image Position (Volume)
  ImagePositionVolume: Array<number> | undefined;
  x00209301: Array<number> | undefined;

  // Image Orientation (Volume)
  ImageOrientationVolume: Array<number> | undefined;
  x00209302: Array<number> | undefined;

  // Ultrasound Acquisition Geometry
  UltrasoundAcquisitionGeometry: string | undefined;
  x00209307: string | undefined;

  // Apex Position
  ApexPosition: Array<number> | undefined;
  x00209308: Array<number> | undefined;

  // Volume to Transducer Mapping Matrix
  VolumeToTransducerMappingMatrix: Array<number> | undefined;
  x00209309: Array<number> | undefined;

  // Volume to Table Mapping Matrix
  VolumeToTableMappingMatrix: Array<number> | undefined;
  x0020930a: Array<number> | undefined;

  // Volume to Transducer Relationship
  VolumeToTransducerRelationship: string | undefined;
  x0020930b: string | undefined;

  // Patient Frame of Reference Source
  PatientFrameOfReferenceSource: string | undefined;
  x0020930c: string | undefined;

  // Temporal Position Time Offset
  TemporalPositionTimeOffset: number | undefined;
  x0020930d: number | undefined;

  // Plane Position (Volume) Sequence
  PlanePositionVolumeSequence: Array<Dataset> | undefined;
  x0020930e: Array<Dataset> | undefined;

  // Plane Orientation (Volume) Sequence
  PlaneOrientationVolumeSequence: Array<Dataset> | undefined;
  x0020930f: Array<Dataset> | undefined;

  // Temporal Position Sequence
  TemporalPositionSequence: Array<Dataset> | undefined;
  x00209310: Array<Dataset> | undefined;

  // Dimension Organization Type
  DimensionOrganizationType: string | undefined;
  x00209311: string | undefined;

  // Volume Frame of Reference UID
  VolumeFrameOfReferenceUID: string | undefined;
  x00209312: string | undefined;

  // Table Frame of Reference UID
  TableFrameOfReferenceUID: string | undefined;
  x00209313: string | undefined;

  // Dimension Description Label
  DimensionDescriptionLabel: string | undefined;
  x00209421: string | undefined;

  // Patient Orientation in Frame Sequence
  PatientOrientationInFrameSequence: Array<Dataset> | undefined;
  x00209450: Array<Dataset> | undefined;

  // Frame Label
  FrameLabel: string | undefined;
  x00209453: string | undefined;

  // Acquisition Index
  AcquisitionIndex: Array<number> | undefined;
  x00209518: Array<number> | undefined;

  // Contributing SOP Instances Reference Sequence
  ContributingSOPInstancesReferenceSequence: Array<Dataset> | undefined;
  x00209529: Array<Dataset> | undefined;

  // Reconstruction Index
  ReconstructionIndex: number | undefined;
  x00209536: number | undefined;

  // Light Path Filter Pass-Through Wavelength
  LightPathFilterPassThroughWavelength: number | undefined;
  x00220001: number | undefined;

  // Light Path Filter Pass Band
  LightPathFilterPassBand: Array<number> | undefined;
  x00220002: Array<number> | undefined;

  // Image Path Filter Pass-Through Wavelength
  ImagePathFilterPassThroughWavelength: number | undefined;
  x00220003: number | undefined;

  // Image Path Filter Pass Band
  ImagePathFilterPassBand: Array<number> | undefined;
  x00220004: Array<number> | undefined;

  // Patient Eye Movement Commanded
  PatientEyeMovementCommanded: string | undefined;
  x00220005: string | undefined;

  // Patient Eye Movement Command Code Sequence
  PatientEyeMovementCommandCodeSequence: Array<Dataset> | undefined;
  x00220006: Array<Dataset> | undefined;

  // Spherical Lens Power
  SphericalLensPower: number | undefined;
  x00220007: number | undefined;

  // Cylinder Lens Power
  CylinderLensPower: number | undefined;
  x00220008: number | undefined;

  // Cylinder Axis
  CylinderAxis: number | undefined;
  x00220009: number | undefined;

  // Emmetropic Magnification
  EmmetropicMagnification: number | undefined;
  x0022000a: number | undefined;

  // Intra Ocular Pressure
  IntraOcularPressure: number | undefined;
  x0022000b: number | undefined;

  // Horizontal Field of View
  HorizontalFieldOfView: number | undefined;
  x0022000c: number | undefined;

  // Pupil Dilated
  PupilDilated: string | undefined;
  x0022000d: string | undefined;

  // Degree of Dilation
  DegreeOfDilation: number | undefined;
  x0022000e: number | undefined;

  // Stereo Baseline Angle
  StereoBaselineAngle: number | undefined;
  x00220010: number | undefined;

  // Stereo Baseline Displacement
  StereoBaselineDisplacement: number | undefined;
  x00220011: number | undefined;

  // Stereo Horizontal Pixel Offset
  StereoHorizontalPixelOffset: number | undefined;
  x00220012: number | undefined;

  // Stereo Vertical Pixel Offset
  StereoVerticalPixelOffset: number | undefined;
  x00220013: number | undefined;

  // Stereo Rotation
  StereoRotation: number | undefined;
  x00220014: number | undefined;

  // Acquisition Device Type Code Sequence
  AcquisitionDeviceTypeCodeSequence: Array<Dataset> | undefined;
  x00220015: Array<Dataset> | undefined;

  // Illumination Type Code Sequence
  IlluminationTypeCodeSequence: Array<Dataset> | undefined;
  x00220016: Array<Dataset> | undefined;

  // Light Path Filter Type Stack Code Sequence
  LightPathFilterTypeStackCodeSequence: Array<Dataset> | undefined;
  x00220017: Array<Dataset> | undefined;

  // Image Path Filter Type Stack Code Sequence
  ImagePathFilterTypeStackCodeSequence: Array<Dataset> | undefined;
  x00220018: Array<Dataset> | undefined;

  // Lenses Code Sequence
  LensesCodeSequence: Array<Dataset> | undefined;
  x00220019: Array<Dataset> | undefined;

  // Channel Description Code Sequence
  ChannelDescriptionCodeSequence: Array<Dataset> | undefined;
  x0022001a: Array<Dataset> | undefined;

  // Refractive State Sequence
  RefractiveStateSequence: Array<Dataset> | undefined;
  x0022001b: Array<Dataset> | undefined;

  // Mydriatic Agent Code Sequence
  MydriaticAgentCodeSequence: Array<Dataset> | undefined;
  x0022001c: Array<Dataset> | undefined;

  // Relative Image Position Code Sequence
  RelativeImagePositionCodeSequence: Array<Dataset> | undefined;
  x0022001d: Array<Dataset> | undefined;

  // Camera Angle of View
  CameraAngleOfView: number | undefined;
  x0022001e: number | undefined;

  // Stereo Pairs Sequence
  StereoPairsSequence: Array<Dataset> | undefined;
  x00220020: Array<Dataset> | undefined;

  // Left Image Sequence
  LeftImageSequence: Array<Dataset> | undefined;
  x00220021: Array<Dataset> | undefined;

  // Right Image Sequence
  RightImageSequence: Array<Dataset> | undefined;
  x00220022: Array<Dataset> | undefined;

  // Axial Length of the Eye
  AxialLengthOfTheEye: number | undefined;
  x00220030: number | undefined;

  // Ophthalmic Frame Location Sequence
  OphthalmicFrameLocationSequence: Array<Dataset> | undefined;
  x00220031: Array<Dataset> | undefined;

  // Reference Coordinates
  ReferenceCoordinates: Array<number> | undefined;
  x00220032: Array<number> | undefined;

  // Depth Spatial Resolution
  DepthSpatialResolution: number | undefined;
  x00220035: number | undefined;

  // Maximum Depth Distortion
  MaximumDepthDistortion: number | undefined;
  x00220036: number | undefined;

  // Along-scan Spatial Resolution
  AlongScanSpatialResolution: number | undefined;
  x00220037: number | undefined;

  // Maximum Along-scan Distortion
  MaximumAlongScanDistortion: number | undefined;
  x00220038: number | undefined;

  // Ophthalmic Image Orientation
  OphthalmicImageOrientation: string | undefined;
  x00220039: string | undefined;

  // Depth of Transverse Image
  DepthOfTransverseImage: number | undefined;
  x00220041: number | undefined;

  // Mydriatic Agent Concentration Units Sequence
  MydriaticAgentConcentrationUnitsSequence: Array<Dataset> | undefined;
  x00220042: Array<Dataset> | undefined;

  // Across-scan Spatial Resolution
  AcrossScanSpatialResolution: number | undefined;
  x00220048: number | undefined;

  // Maximum Across-scan Distortion
  MaximumAcrossScanDistortion: number | undefined;
  x00220049: number | undefined;

  // Mydriatic Agent Concentration
  MydriaticAgentConcentration: number | undefined;
  x0022004e: number | undefined;

  // Illumination Wave Length
  IlluminationWaveLength: number | undefined;
  x00220055: number | undefined;

  // Illumination Power
  IlluminationPower: number | undefined;
  x00220056: number | undefined;

  // Illumination Bandwidth
  IlluminationBandwidth: number | undefined;
  x00220057: number | undefined;

  // Mydriatic Agent Sequence
  MydriaticAgentSequence: Array<Dataset> | undefined;
  x00220058: Array<Dataset> | undefined;

  // Ophthalmic Axial Measurements Right Eye Sequence
  OphthalmicAxialMeasurementsRightEyeSequence: Array<Dataset> | undefined;
  x00221007: Array<Dataset> | undefined;

  // Ophthalmic Axial Measurements Left Eye Sequence
  OphthalmicAxialMeasurementsLeftEyeSequence: Array<Dataset> | undefined;
  x00221008: Array<Dataset> | undefined;

  // Ophthalmic Axial Measurements Device Type
  OphthalmicAxialMeasurementsDeviceType: string | undefined;
  x00221009: string | undefined;

  // Ophthalmic Axial Length Measurements Type
  OphthalmicAxialLengthMeasurementsType: string | undefined;
  x00221010: string | undefined;

  // Ophthalmic Axial Length Sequence
  OphthalmicAxialLengthSequence: Array<Dataset> | undefined;
  x00221012: Array<Dataset> | undefined;

  // Ophthalmic Axial Length
  OphthalmicAxialLength: number | undefined;
  x00221019: number | undefined;

  // Lens Status Code Sequence
  LensStatusCodeSequence: Array<Dataset> | undefined;
  x00221024: Array<Dataset> | undefined;

  // Vitreous Status Code Sequence
  VitreousStatusCodeSequence: Array<Dataset> | undefined;
  x00221025: Array<Dataset> | undefined;

  // IOL Formula Code Sequence
  IOLFormulaCodeSequence: Array<Dataset> | undefined;
  x00221028: Array<Dataset> | undefined;

  // IOL Formula Detail
  IOLFormulaDetail: string | undefined;
  x00221029: string | undefined;

  // Keratometer Index
  KeratometerIndex: number | undefined;
  x00221033: number | undefined;

  // Source of Ophthalmic Axial Length Code Sequence
  SourceOfOphthalmicAxialLengthCodeSequence: Array<Dataset> | undefined;
  x00221035: Array<Dataset> | undefined;

  // Target Refraction
  TargetRefraction: number | undefined;
  x00221037: number | undefined;

  // Refractive Procedure Occurred
  RefractiveProcedureOccurred: string | undefined;
  x00221039: string | undefined;

  // Refractive Surgery Type Code Sequence
  RefractiveSurgeryTypeCodeSequence: Array<Dataset> | undefined;
  x00221040: Array<Dataset> | undefined;

  // Ophthalmic Ultrasound Method Code Sequence
  OphthalmicUltrasoundMethodCodeSequence: Array<Dataset> | undefined;
  x00221044: Array<Dataset> | undefined;

  // Ophthalmic Axial Length Measurements Sequence
  OphthalmicAxialLengthMeasurementsSequence: Array<Dataset> | undefined;
  x00221050: Array<Dataset> | undefined;

  // IOL Power
  IOLPower: number | undefined;
  x00221053: number | undefined;

  // Predicted Refractive Error
  PredictedRefractiveError: number | undefined;
  x00221054: number | undefined;

  // Ophthalmic Axial Length Velocity
  OphthalmicAxialLengthVelocity: number | undefined;
  x00221059: number | undefined;

  // Lens Status Description
  LensStatusDescription: string | undefined;
  x00221065: string | undefined;

  // Vitreous Status Description
  VitreousStatusDescription: string | undefined;
  x00221066: string | undefined;

  // IOL Power Sequence
  IOLPowerSequence: Array<Dataset> | undefined;
  x00221090: Array<Dataset> | undefined;

  // Lens Constant Sequence
  LensConstantSequence: Array<Dataset> | undefined;
  x00221092: Array<Dataset> | undefined;

  // IOL Manufacturer
  IOLManufacturer: string | undefined;
  x00221093: string | undefined;

  // Lens Constant Description
  LensConstantDescription: string | undefined;
  x00221094: string | undefined;

  // Implant Name
  ImplantName: string | undefined;
  x00221095: string | undefined;

  // Keratometry Measurement Type Code Sequence
  KeratometryMeasurementTypeCodeSequence: Array<Dataset> | undefined;
  x00221096: Array<Dataset> | undefined;

  // Implant Part Number
  ImplantPartNumber: string | undefined;
  x00221097: string | undefined;

  // Referenced Ophthalmic Axial Measurements Sequence
  ReferencedOphthalmicAxialMeasurementsSequence: Array<Dataset> | undefined;
  x00221100: Array<Dataset> | undefined;

  // Ophthalmic Axial Length Measurements Segment Name Code Sequence
  OphthalmicAxialLengthMeasurementsSegmentNameCodeSequence: Array<Dataset> | undefined;
  x00221101: Array<Dataset> | undefined;

  // Refractive Error Before Refractive Surgery Code Sequence
  RefractiveErrorBeforeRefractiveSurgeryCodeSequence: Array<Dataset> | undefined;
  x00221103: Array<Dataset> | undefined;

  // IOL Power For Exact Emmetropia
  IOLPowerForExactEmmetropia: number | undefined;
  x00221121: number | undefined;

  // IOL Power For Exact Target Refraction
  IOLPowerForExactTargetRefraction: number | undefined;
  x00221122: number | undefined;

  // Anterior Chamber Depth Definition Code Sequence
  AnteriorChamberDepthDefinitionCodeSequence: Array<Dataset> | undefined;
  x00221125: Array<Dataset> | undefined;

  // Lens Thickness Sequence
  LensThicknessSequence: Array<Dataset> | undefined;
  x00221127: Array<Dataset> | undefined;

  // Anterior Chamber Depth Sequence
  AnteriorChamberDepthSequence: Array<Dataset> | undefined;
  x00221128: Array<Dataset> | undefined;

  // Lens Thickness
  LensThickness: number | undefined;
  x00221130: number | undefined;

  // Anterior Chamber Depth
  AnteriorChamberDepth: number | undefined;
  x00221131: number | undefined;

  // Source of Lens Thickness Data Code Sequence
  SourceOfLensThicknessDataCodeSequence: Array<Dataset> | undefined;
  x00221132: Array<Dataset> | undefined;

  // Source of Anterior Chamber Depth Data Code Sequence
  SourceOfAnteriorChamberDepthDataCodeSequence: Array<Dataset> | undefined;
  x00221133: Array<Dataset> | undefined;

  // Source of Refractive Measurements Sequence
  SourceOfRefractiveMeasurementsSequence: Array<Dataset> | undefined;
  x00221134: Array<Dataset> | undefined;

  // Source of Refractive Measurements Code Sequence
  SourceOfRefractiveMeasurementsCodeSequence: Array<Dataset> | undefined;
  x00221135: Array<Dataset> | undefined;

  // Ophthalmic Axial Length Measurement Modified
  OphthalmicAxialLengthMeasurementModified: string | undefined;
  x00221140: string | undefined;

  // Ophthalmic Axial Length Data Source Code Sequence
  OphthalmicAxialLengthDataSourceCodeSequence: Array<Dataset> | undefined;
  x00221150: Array<Dataset> | undefined;

  // Ophthalmic Axial Length Acquisition Method Code Sequence
  OphthalmicAxialLengthAcquisitionMethodCodeSequence: Array<Dataset> | undefined;
  x00221153: Array<Dataset> | undefined;

  // Signal to Noise Ratio
  SignalToNoiseRatio: number | undefined;
  x00221155: number | undefined;

  // Ophthalmic Axial Length Data Source Description
  OphthalmicAxialLengthDataSourceDescription: string | undefined;
  x00221159: string | undefined;

  // Ophthalmic Axial Length Measurements Total Length Sequence
  OphthalmicAxialLengthMeasurementsTotalLengthSequence: Array<Dataset> | undefined;
  x00221210: Array<Dataset> | undefined;

  // Ophthalmic Axial Length Measurements Segmental Length Sequence
  OphthalmicAxialLengthMeasurementsSegmentalLengthSequence: Array<Dataset> | undefined;
  x00221211: Array<Dataset> | undefined;

  // Ophthalmic Axial Length Measurements Length Summation Sequence
  OphthalmicAxialLengthMeasurementsLengthSummationSequence: Array<Dataset> | undefined;
  x00221212: Array<Dataset> | undefined;

  // Ultrasound Ophthalmic Axial Length Measurements Sequence
  UltrasoundOphthalmicAxialLengthMeasurementsSequence: Array<Dataset> | undefined;
  x00221220: Array<Dataset> | undefined;

  // Optical Ophthalmic Axial Length Measurements Sequence
  OpticalOphthalmicAxialLengthMeasurementsSequence: Array<Dataset> | undefined;
  x00221225: Array<Dataset> | undefined;

  // Ultrasound Selected Ophthalmic Axial Length Sequence
  UltrasoundSelectedOphthalmicAxialLengthSequence: Array<Dataset> | undefined;
  x00221230: Array<Dataset> | undefined;

  // Ophthalmic Axial Length Selection Method Code Sequence
  OphthalmicAxialLengthSelectionMethodCodeSequence: Array<Dataset> | undefined;
  x00221250: Array<Dataset> | undefined;

  // Optical Selected Ophthalmic Axial Length Sequence
  OpticalSelectedOphthalmicAxialLengthSequence: Array<Dataset> | undefined;
  x00221255: Array<Dataset> | undefined;

  // Selected Segmental Ophthalmic Axial Length Sequence
  SelectedSegmentalOphthalmicAxialLengthSequence: Array<Dataset> | undefined;
  x00221257: Array<Dataset> | undefined;

  // Selected Total Ophthalmic Axial Length Sequence
  SelectedTotalOphthalmicAxialLengthSequence: Array<Dataset> | undefined;
  x00221260: Array<Dataset> | undefined;

  // Ophthalmic Axial Length Quality Metric Sequence
  OphthalmicAxialLengthQualityMetricSequence: Array<Dataset> | undefined;
  x00221262: Array<Dataset> | undefined;

  // Ophthalmic Axial Length Quality Metric Type Code Sequence
  OphthalmicAxialLengthQualityMetricTypeCodeSequence: Array<Dataset> | undefined;
  x00221265: Array<Dataset> | undefined;

  // Ophthalmic Axial Length Quality Metric Type Description
  OphthalmicAxialLengthQualityMetricTypeDescription: string | undefined;
  x00221273: string | undefined;

  // Intraocular Lens Calculations Right Eye Sequence
  IntraocularLensCalculationsRightEyeSequence: Array<Dataset> | undefined;
  x00221300: Array<Dataset> | undefined;

  // Intraocular Lens Calculations Left Eye Sequence
  IntraocularLensCalculationsLeftEyeSequence: Array<Dataset> | undefined;
  x00221310: Array<Dataset> | undefined;

  // Referenced Ophthalmic Axial Length Measurement QC Image Sequence
  ReferencedOphthalmicAxialLengthMeasurementQCImageSequence: Array<Dataset> | undefined;
  x00221330: Array<Dataset> | undefined;

  // Ophthalmic Mapping Device Type
  OphthalmicMappingDeviceType: string | undefined;
  x00221415: string | undefined;

  // Acquisition Method Code Sequence
  AcquisitionMethodCodeSequence: Array<Dataset> | undefined;
  x00221420: Array<Dataset> | undefined;

  // Acquisition Method Algorithm Sequence
  AcquisitionMethodAlgorithmSequence: Array<Dataset> | undefined;
  x00221423: Array<Dataset> | undefined;

  // Ophthalmic Thickness Map Type Code Sequence
  OphthalmicThicknessMapTypeCodeSequence: Array<Dataset> | undefined;
  x00221436: Array<Dataset> | undefined;

  // Ophthalmic Thickness Mapping Normals Sequence
  OphthalmicThicknessMappingNormalsSequence: Array<Dataset> | undefined;
  x00221443: Array<Dataset> | undefined;

  // Retinal Thickness Definition Code Sequence
  RetinalThicknessDefinitionCodeSequence: Array<Dataset> | undefined;
  x00221445: Array<Dataset> | undefined;

  // Pixel Value Mapping to Coded Concept Sequence
  PixelValueMappingToCodedConceptSequence: Array<Dataset> | undefined;
  x00221450: Array<Dataset> | undefined;

  // Mapped Pixel Value
  MappedPixelValue: number | undefined;
  x00221452: number | undefined;

  // Pixel Value Mapping Explanation
  PixelValueMappingExplanation: string | undefined;
  x00221454: string | undefined;

  // Ophthalmic Thickness Map Quality Threshold Sequence
  OphthalmicThicknessMapQualityThresholdSequence: Array<Dataset> | undefined;
  x00221458: Array<Dataset> | undefined;

  // Ophthalmic Thickness Map Threshold Quality Rating
  OphthalmicThicknessMapThresholdQualityRating: number | undefined;
  x00221460: number | undefined;

  // Anatomic Structure Reference Point
  AnatomicStructureReferencePoint: Array<number> | undefined;
  x00221463: Array<number> | undefined;

  // Registration to Localizer Sequence
  RegistrationToLocalizerSequence: Array<Dataset> | undefined;
  x00221465: Array<Dataset> | undefined;

  // Registered Localizer Units
  RegisteredLocalizerUnits: string | undefined;
  x00221466: string | undefined;

  // Registered Localizer Top Left Hand Corner
  RegisteredLocalizerTopLeftHandCorner: Array<number> | undefined;
  x00221467: Array<number> | undefined;

  // Registered Localizer Bottom Right Hand Corner
  RegisteredLocalizerBottomRightHandCorner: Array<number> | undefined;
  x00221468: Array<number> | undefined;

  // Ophthalmic Thickness Map Quality Rating Sequence
  OphthalmicThicknessMapQualityRatingSequence: Array<Dataset> | undefined;
  x00221470: Array<Dataset> | undefined;

  // Relevant OPT Attributes Sequence
  RelevantOPTAttributesSequence: Array<Dataset> | undefined;
  x00221472: Array<Dataset> | undefined;

  // Visual Field Horizontal Extent
  VisualFieldHorizontalExtent: number | undefined;
  x00240010: number | undefined;

  // Visual Field Vertical Extent
  VisualFieldVerticalExtent: number | undefined;
  x00240011: number | undefined;

  // Visual Field Shape
  VisualFieldShape: string | undefined;
  x00240012: string | undefined;

  // Screening Test Mode Code Sequence
  ScreeningTestModeCodeSequence: Array<Dataset> | undefined;
  x00240016: Array<Dataset> | undefined;

  // Maximum Stimulus Luminance
  MaximumStimulusLuminance: number | undefined;
  x00240018: number | undefined;

  // Background Luminance
  BackgroundLuminance: number | undefined;
  x00240020: number | undefined;

  // Stimulus Color Code Sequence
  StimulusColorCodeSequence: Array<Dataset> | undefined;
  x00240021: Array<Dataset> | undefined;

  // Background Illumination Color Code Sequence
  BackgroundIlluminationColorCodeSequence: Array<Dataset> | undefined;
  x00240024: Array<Dataset> | undefined;

  // Stimulus Area
  StimulusArea: number | undefined;
  x00240025: number | undefined;

  // Stimulus Presentation Time
  StimulusPresentationTime: number | undefined;
  x00240028: number | undefined;

  // Fixation Sequence
  FixationSequence: Array<Dataset> | undefined;
  x00240032: Array<Dataset> | undefined;

  // Fixation Monitoring Code Sequence
  FixationMonitoringCodeSequence: Array<Dataset> | undefined;
  x00240033: Array<Dataset> | undefined;

  // Visual Field Catch Trial Sequence
  VisualFieldCatchTrialSequence: Array<Dataset> | undefined;
  x00240034: Array<Dataset> | undefined;

  // Fixation Checked Quantity
  FixationCheckedQuantity: number | undefined;
  x00240035: number | undefined;

  // Patient Not Properly Fixated Quantity
  PatientNotProperlyFixatedQuantity: number | undefined;
  x00240036: number | undefined;

  // Presented Visual Stimuli Data Flag
  PresentedVisualStimuliDataFlag: string | undefined;
  x00240037: string | undefined;

  // Number of Visual Stimuli
  NumberOfVisualStimuli: number | undefined;
  x00240038: number | undefined;

  // Excessive Fixation Losses Data Flag
  ExcessiveFixationLossesDataFlag: string | undefined;
  x00240039: string | undefined;

  // Excessive Fixation Losses
  ExcessiveFixationLosses: string | undefined;
  x00240040: string | undefined;

  // Stimuli Retesting Quantity
  StimuliRetestingQuantity: number | undefined;
  x00240042: number | undefined;

  // False Negatives Estimate Flag
  FalseNegativesEstimateFlag: string | undefined;
  x00240045: string | undefined;

  // False Negatives Estimate
  FalseNegativesEstimate: number | undefined;
  x00240046: number | undefined;

  // Negative Catch Trials Quantity
  NegativeCatchTrialsQuantity: number | undefined;
  x00240048: number | undefined;

  // False Negatives Quantity
  FalseNegativesQuantity: number | undefined;
  x00240050: number | undefined;

  // Excessive False Negatives Data Flag
  ExcessiveFalseNegativesDataFlag: string | undefined;
  x00240051: string | undefined;

  // Excessive False Negatives
  ExcessiveFalseNegatives: string | undefined;
  x00240052: string | undefined;

  // False Positives Estimate Flag
  FalsePositivesEstimateFlag: string | undefined;
  x00240053: string | undefined;

  // False Positives Estimate
  FalsePositivesEstimate: number | undefined;
  x00240054: number | undefined;

  // Catch Trials Data Flag
  CatchTrialsDataFlag: string | undefined;
  x00240055: string | undefined;

  // Positive Catch Trials Quantity
  PositiveCatchTrialsQuantity: number | undefined;
  x00240056: number | undefined;

  // Test Point Normals Data Flag
  TestPointNormalsDataFlag: string | undefined;
  x00240057: string | undefined;

  // Test Point Normals Sequence
  TestPointNormalsSequence: Array<Dataset> | undefined;
  x00240058: Array<Dataset> | undefined;

  // Global Deviation Probability Normals Flag
  GlobalDeviationProbabilityNormalsFlag: string | undefined;
  x00240059: string | undefined;

  // False Positives Quantity
  FalsePositivesQuantity: number | undefined;
  x00240060: number | undefined;

  // Excessive False Positives Data Flag
  ExcessiveFalsePositivesDataFlag: string | undefined;
  x00240061: string | undefined;

  // Excessive False Positives
  ExcessiveFalsePositives: string | undefined;
  x00240062: string | undefined;

  // Visual Field Test Normals Flag
  VisualFieldTestNormalsFlag: string | undefined;
  x00240063: string | undefined;

  // Results Normals Sequence
  ResultsNormalsSequence: Array<Dataset> | undefined;
  x00240064: Array<Dataset> | undefined;

  // Age Corrected Sensitivity Deviation Algorithm Sequence
  AgeCorrectedSensitivityDeviationAlgorithmSequence: Array<Dataset> | undefined;
  x00240065: Array<Dataset> | undefined;

  // Global Deviation From Normal
  GlobalDeviationFromNormal: number | undefined;
  x00240066: number | undefined;

  // Generalized Defect Sensitivity Deviation Algorithm Sequence
  GeneralizedDefectSensitivityDeviationAlgorithmSequence: Array<Dataset> | undefined;
  x00240067: Array<Dataset> | undefined;

  // Localized Deviation From Normal
  LocalizedDeviationFromNormal: number | undefined;
  x00240068: number | undefined;

  // Patient Reliability Indicator
  PatientReliabilityIndicator: string | undefined;
  x00240069: string | undefined;

  // Visual Field Mean Sensitivity
  VisualFieldMeanSensitivity: number | undefined;
  x00240070: number | undefined;

  // Global Deviation Probability
  GlobalDeviationProbability: number | undefined;
  x00240071: number | undefined;

  // Local Deviation Probability Normals Flag
  LocalDeviationProbabilityNormalsFlag: string | undefined;
  x00240072: string | undefined;

  // Localized Deviation Probability
  LocalizedDeviationProbability: number | undefined;
  x00240073: number | undefined;

  // Short Term Fluctuation Calculated
  ShortTermFluctuationCalculated: string | undefined;
  x00240074: string | undefined;

  // Short Term Fluctuation
  ShortTermFluctuation: number | undefined;
  x00240075: number | undefined;

  // Short Term Fluctuation Probability Calculated
  ShortTermFluctuationProbabilityCalculated: string | undefined;
  x00240076: string | undefined;

  // Short Term Fluctuation Probability
  ShortTermFluctuationProbability: number | undefined;
  x00240077: number | undefined;

  // Corrected Localized Deviation From Normal Calculated
  CorrectedLocalizedDeviationFromNormalCalculated: string | undefined;
  x00240078: string | undefined;

  // Corrected Localized Deviation From Normal
  CorrectedLocalizedDeviationFromNormal: number | undefined;
  x00240079: number | undefined;

  // Corrected Localized Deviation From Normal Probability Calculated
  CorrectedLocalizedDeviationFromNormalProbabilityCalculated: string | undefined;
  x00240080: string | undefined;

  // Corrected Localized Deviation From Normal Probability
  CorrectedLocalizedDeviationFromNormalProbability: number | undefined;
  x00240081: number | undefined;

  // Global Deviation Probability Sequence
  GlobalDeviationProbabilitySequence: Array<Dataset> | undefined;
  x00240083: Array<Dataset> | undefined;

  // Localized Deviation Probability Sequence
  LocalizedDeviationProbabilitySequence: Array<Dataset> | undefined;
  x00240085: Array<Dataset> | undefined;

  // Foveal Sensitivity Measured
  FovealSensitivityMeasured: string | undefined;
  x00240086: string | undefined;

  // Foveal Sensitivity
  FovealSensitivity: number | undefined;
  x00240087: number | undefined;

  // Visual Field Test Duration
  VisualFieldTestDuration: number | undefined;
  x00240088: number | undefined;

  // Visual Field Test Point Sequence
  VisualFieldTestPointSequence: Array<Dataset> | undefined;
  x00240089: Array<Dataset> | undefined;

  // Visual Field Test Point X-Coordinate
  VisualFieldTestPointXCoordinate: number | undefined;
  x00240090: number | undefined;

  // Visual Field Test Point Y-Coordinate
  VisualFieldTestPointYCoordinate: number | undefined;
  x00240091: number | undefined;

  // Age Corrected Sensitivity Deviation Value
  AgeCorrectedSensitivityDeviationValue: number | undefined;
  x00240092: number | undefined;

  // Stimulus Results
  StimulusResults: string | undefined;
  x00240093: string | undefined;

  // Sensitivity Value
  SensitivityValue: number | undefined;
  x00240094: number | undefined;

  // Retest Stimulus Seen
  RetestStimulusSeen: string | undefined;
  x00240095: string | undefined;

  // Retest Sensitivity Value
  RetestSensitivityValue: number | undefined;
  x00240096: number | undefined;

  // Visual Field Test Point Normals Sequence
  VisualFieldTestPointNormalsSequence: Array<Dataset> | undefined;
  x00240097: Array<Dataset> | undefined;

  // Quantified Defect
  QuantifiedDefect: number | undefined;
  x00240098: number | undefined;

  // Age Corrected Sensitivity Deviation Probability Value
  AgeCorrectedSensitivityDeviationProbabilityValue: number | undefined;
  x00240100: number | undefined;

  // Generalized Defect Corrected Sensitivity Deviation Flag
  GeneralizedDefectCorrectedSensitivityDeviationFlag: string | undefined;
  x00240102: string | undefined;

  // Generalized Defect Corrected Sensitivity Deviation Value
  GeneralizedDefectCorrectedSensitivityDeviationValue: number | undefined;
  x00240103: number | undefined;

  // Generalized Defect Corrected Sensitivity Deviation Probability Value
  GeneralizedDefectCorrectedSensitivityDeviationProbabilityValue: number | undefined;
  x00240104: number | undefined;

  // Minimum Sensitivity Value
  MinimumSensitivityValue: number | undefined;
  x00240105: number | undefined;

  // Blind Spot Localized
  BlindSpotLocalized: string | undefined;
  x00240106: string | undefined;

  // Blind Spot X-Coordinate
  BlindSpotXCoordinate: number | undefined;
  x00240107: number | undefined;

  // Blind Spot Y-Coordinate
  BlindSpotYCoordinate: number | undefined;
  x00240108: number | undefined;

  // Visual Acuity Measurement Sequence
  VisualAcuityMeasurementSequence: Array<Dataset> | undefined;
  x00240110: Array<Dataset> | undefined;

  // Refractive Parameters Used on Patient Sequence
  RefractiveParametersUsedOnPatientSequence: Array<Dataset> | undefined;
  x00240112: Array<Dataset> | undefined;

  // Measurement Laterality
  MeasurementLaterality: string | undefined;
  x00240113: string | undefined;

  // Ophthalmic Patient Clinical Information Left Eye Sequence
  OphthalmicPatientClinicalInformationLeftEyeSequence: Array<Dataset> | undefined;
  x00240114: Array<Dataset> | undefined;

  // Ophthalmic Patient Clinical Information Right Eye Sequence
  OphthalmicPatientClinicalInformationRightEyeSequence: Array<Dataset> | undefined;
  x00240115: Array<Dataset> | undefined;

  // Foveal Point Normative Data Flag
  FovealPointNormativeDataFlag: string | undefined;
  x00240117: string | undefined;

  // Foveal Point Probability Value
  FovealPointProbabilityValue: number | undefined;
  x00240118: number | undefined;

  // Screening Baseline Measured
  ScreeningBaselineMeasured: string | undefined;
  x00240120: string | undefined;

  // Screening Baseline Measured Sequence
  ScreeningBaselineMeasuredSequence: Array<Dataset> | undefined;
  x00240122: Array<Dataset> | undefined;

  // Screening Baseline Type
  ScreeningBaselineType: string | undefined;
  x00240124: string | undefined;

  // Screening Baseline Value
  ScreeningBaselineValue: number | undefined;
  x00240126: number | undefined;

  // Algorithm Source
  AlgorithmSource: string | undefined;
  x00240202: string | undefined;

  // Data Set Name
  DataSetName: string | undefined;
  x00240306: string | undefined;

  // Data Set Version
  DataSetVersion: string | undefined;
  x00240307: string | undefined;

  // Data Set Source
  DataSetSource: string | undefined;
  x00240308: string | undefined;

  // Data Set Description
  DataSetDescription: string | undefined;
  x00240309: string | undefined;

  // Visual Field Test Reliability Global Index Sequence
  VisualFieldTestReliabilityGlobalIndexSequence: Array<Dataset> | undefined;
  x00240317: Array<Dataset> | undefined;

  // Visual Field Global Results Index Sequence
  VisualFieldGlobalResultsIndexSequence: Array<Dataset> | undefined;
  x00240320: Array<Dataset> | undefined;

  // Data Observation Sequence
  DataObservationSequence: Array<Dataset> | undefined;
  x00240325: Array<Dataset> | undefined;

  // Index Normals Flag
  IndexNormalsFlag: string | undefined;
  x00240338: string | undefined;

  // Index Probability
  IndexProbability: number | undefined;
  x00240341: number | undefined;

  // Index Probability Sequence
  IndexProbabilitySequence: Array<Dataset> | undefined;
  x00240344: Array<Dataset> | undefined;

  // Samples per Pixel
  SamplesPerPixel: number | undefined;
  x00280002: number | undefined;

  // Samples per Pixel Used
  SamplesPerPixelUsed: number | undefined;
  x00280003: number | undefined;

  // Photometric Interpretation
  PhotometricInterpretation: string | undefined;
  x00280004: string | undefined;

  // Image Dimensions
  ImageDimensions: number | undefined;
  x00280005: number | undefined;

  // Planar Configuration
  PlanarConfiguration: number | undefined;
  x00280006: number | undefined;

  // Number of Frames
  NumberOfFrames: number | undefined;
  x00280008: number | undefined;

  // Frame Increment Pointer
  FrameIncrementPointer: Array<Uint16Array> | undefined;
  x00280009: Array<Uint16Array> | undefined;

  // Frame Dimension Pointer
  FrameDimensionPointer: Array<Uint16Array> | undefined;
  x0028000a: Array<Uint16Array> | undefined;

  // Rows
  Rows: number | undefined;
  x00280010: number | undefined;

  // Columns
  Columns: number | undefined;
  x00280011: number | undefined;

  // Planes
  Planes: number | undefined;
  x00280012: number | undefined;

  // Ultrasound Color Data Present
  UltrasoundColorDataPresent: number | undefined;
  x00280014: number | undefined;

  // Pixel Spacing
  PixelSpacing: Array<number> | undefined;
  x00280030: Array<number> | undefined;

  // Zoom Factor
  ZoomFactor: Array<number> | undefined;
  x00280031: Array<number> | undefined;

  // Zoom Center
  ZoomCenter: Array<number> | undefined;
  x00280032: Array<number> | undefined;

  // Pixel Aspect Ratio
  PixelAspectRatio: Array<number> | undefined;
  x00280034: Array<number> | undefined;

  // Image Format
  ImageFormat: string | undefined;
  x00280040: string | undefined;

  // Manipulated Image
  ManipulatedImage: Array<string> | undefined;
  x00280050: Array<string> | undefined;

  // Corrected Image
  CorrectedImage: Array<string> | undefined;
  x00280051: Array<string> | undefined;

  // Compression Recognition Code
  CompressionRecognitionCode: string | undefined;
  x0028005f: string | undefined;

  // Compression Code
  CompressionCode: string | undefined;
  x00280060: string | undefined;

  // Compression Originator
  CompressionOriginator: string | undefined;
  x00280061: string | undefined;

  // Compression Label
  CompressionLabel: string | undefined;
  x00280062: string | undefined;

  // Compression Description
  CompressionDescription: string | undefined;
  x00280063: string | undefined;

  // Compression Sequence
  CompressionSequence: Array<string> | undefined;
  x00280065: Array<string> | undefined;

  // Compression Step Pointers
  CompressionStepPointers: Array<Uint16Array> | undefined;
  x00280066: Array<Uint16Array> | undefined;

  // Repeat Interval
  RepeatInterval: number | undefined;
  x00280068: number | undefined;

  // Bits Grouped
  BitsGrouped: number | undefined;
  x00280069: number | undefined;

  // Perimeter Table
  PerimeterTable: Array<number> | undefined;
  x00280070: Array<number> | undefined;

  // Perimeter Value
  PerimeterValue: number | undefined;
  x00280071: number | undefined;

  // Predictor Rows
  PredictorRows: number | undefined;
  x00280080: number | undefined;

  // Predictor Columns
  PredictorColumns: number | undefined;
  x00280081: number | undefined;

  // Predictor Constants
  PredictorConstants: Array<number> | undefined;
  x00280082: Array<number> | undefined;

  // Blocked Pixels
  BlockedPixels: string | undefined;
  x00280090: string | undefined;

  // Block Rows
  BlockRows: number | undefined;
  x00280091: number | undefined;

  // Block Columns
  BlockColumns: number | undefined;
  x00280092: number | undefined;

  // Row Overlap
  RowOverlap: number | undefined;
  x00280093: number | undefined;

  // Column Overlap
  ColumnOverlap: number | undefined;
  x00280094: number | undefined;

  // Bits Allocated
  BitsAllocated: number | undefined;
  x00280100: number | undefined;

  // Bits Stored
  BitsStored: number | undefined;
  x00280101: number | undefined;

  // High Bit
  HighBit: number | undefined;
  x00280102: number | undefined;

  // Pixel Representation
  PixelRepresentation: number | undefined;
  x00280103: number | undefined;

  // Smallest Valid Pixel Value
  SmallestValidPixelValue: number | undefined;
  x00280104: number | undefined;

  // Largest Valid Pixel Value
  LargestValidPixelValue: number | undefined;
  x00280105: number | undefined;

  // Smallest Image Pixel Value
  SmallestImagePixelValue: number | undefined;
  x00280106: number | undefined;

  // Largest Image Pixel Value
  LargestImagePixelValue: number | undefined;
  x00280107: number | undefined;

  // Smallest Pixel Value in Series
  SmallestPixelValueInSeries: number | undefined;
  x00280108: number | undefined;

  // Largest Pixel Value in Series
  LargestPixelValueInSeries: number | undefined;
  x00280109: number | undefined;

  // Smallest Image Pixel Value in Plane
  SmallestImagePixelValueInPlane: number | undefined;
  x00280110: number | undefined;

  // Largest Image Pixel Value in Plane
  LargestImagePixelValueInPlane: number | undefined;
  x00280111: number | undefined;

  // Pixel Padding Value
  PixelPaddingValue: number | undefined;
  x00280120: number | undefined;

  // Pixel Padding Range Limit
  PixelPaddingRangeLimit: number | undefined;
  x00280121: number | undefined;

  // Image Location
  ImageLocation: number | undefined;
  x00280200: number | undefined;

  // Quality Control Image
  QualityControlImage: string | undefined;
  x00280300: string | undefined;

  // Burned In Annotation
  BurnedInAnnotation: string | undefined;
  x00280301: string | undefined;

  // Recognizable Visual Features
  RecognizableVisualFeatures: string | undefined;
  x00280302: string | undefined;

  // Longitudinal Temporal Information Modified
  LongitudinalTemporalInformationModified: string | undefined;
  x00280303: string | undefined;

  // Referenced Color Palette Instance UID
  ReferencedColorPaletteInstanceUID: string | undefined;
  x00280304: string | undefined;

  // Transform Label
  TransformLabel: string | undefined;
  x00280400: string | undefined;

  // Transform Version Number
  TransformVersionNumber: string | undefined;
  x00280401: string | undefined;

  // Number of Transform Steps
  NumberOfTransformSteps: number | undefined;
  x00280402: number | undefined;

  // Sequence of Compressed Data
  SequenceOfCompressedData: Array<string> | undefined;
  x00280403: Array<string> | undefined;

  // Details of Coefficients
  DetailsOfCoefficients: Array<Uint16Array> | undefined;
  x00280404: Array<Uint16Array> | undefined;

  // Rows For Nth Order Coefficients
  RowsForNthOrderCoefficients: number | undefined;
  x002804x0: number | undefined;

  // Columns For Nth Order Coefficients
  ColumnsForNthOrderCoefficients: number | undefined;
  x002804x1: number | undefined;

  // Coefficient Coding
  CoefficientCoding: Array<string> | undefined;
  x002804x2: Array<string> | undefined;

  // Coefficient Coding Pointers
  CoefficientCodingPointers: Array<Uint16Array> | undefined;
  x002804x3: Array<Uint16Array> | undefined;

  // DCT Label
  DCTLabel: string | undefined;
  x00280700: string | undefined;

  // Data Block Description
  DataBlockDescription: Array<string> | undefined;
  x00280701: Array<string> | undefined;

  // Data Block
  DataBlock: Array<Uint16Array> | undefined;
  x00280702: Array<Uint16Array> | undefined;

  // Normalization Factor Format
  NormalizationFactorFormat: number | undefined;
  x00280710: number | undefined;

  // Zonal Map Number Format
  ZonalMapNumberFormat: number | undefined;
  x00280720: number | undefined;

  // Zonal Map Location
  ZonalMapLocation: Array<Uint16Array> | undefined;
  x00280721: Array<Uint16Array> | undefined;

  // Zonal Map Format
  ZonalMapFormat: number | undefined;
  x00280722: number | undefined;

  // Adaptive Map Format
  AdaptiveMapFormat: number | undefined;
  x00280730: number | undefined;

  // Code Number Format
  CodeNumberFormat: number | undefined;
  x00280740: number | undefined;

  // Code Label
  CodeLabel: Array<string> | undefined;
  x002808x0: Array<string> | undefined;

  // Number of Tables
  NumberOfTables: number | undefined;
  x002808x2: number | undefined;

  // Code Table Location
  CodeTableLocation: Array<Uint16Array> | undefined;
  x002808x3: Array<Uint16Array> | undefined;

  // Bits For Code Word
  BitsForCodeWord: number | undefined;
  x002808x4: number | undefined;

  // Image Data Location
  ImageDataLocation: Array<Uint16Array> | undefined;
  x002808x8: Array<Uint16Array> | undefined;

  // Pixel Spacing Calibration Type
  PixelSpacingCalibrationType: string | undefined;
  x00280a02: string | undefined;

  // Pixel Spacing Calibration Description
  PixelSpacingCalibrationDescription: string | undefined;
  x00280a04: string | undefined;

  // Pixel Intensity Relationship
  PixelIntensityRelationship: string | undefined;
  x00281040: string | undefined;

  // Pixel Intensity Relationship Sign
  PixelIntensityRelationshipSign: Uint8Array | undefined;
  x00281041: Uint8Array | undefined;

  // Window Center
  WindowCenter: Array<number> | undefined;
  x00281050: Array<number> | undefined;

  // Window Width
  WindowWidth: Array<number> | undefined;
  x00281051: Array<number> | undefined;

  // Rescale Intercept
  RescaleIntercept: number | undefined;
  x00281052: number | undefined;

  // Rescale Slope
  RescaleSlope: number | undefined;
  x00281053: number | undefined;

  // Rescale Type
  RescaleType: string | undefined;
  x00281054: string | undefined;

  // Window Center & Width Explanation
  WindowCenterWidthExplanation: Array<string> | undefined;
  x00281055: Array<string> | undefined;

  // VOI LUT Function
  VOILUTFunction: string | undefined;
  x00281056: string | undefined;

  // Gray Scale
  GrayScale: string | undefined;
  x00281080: string | undefined;

  // Recommended Viewing Mode
  RecommendedViewingMode: string | undefined;
  x00281090: string | undefined;

  // Gray Lookup Table Descriptor
  GrayLookupTableDescriptor: Array<number> | undefined;
  x00281100: Array<number> | undefined;

  // Red Palette Color Lookup Table Descriptor
  RedPaletteColorLookupTableDescriptor: Array<number> | undefined;
  x00281101: Array<number> | undefined;

  // Green Palette Color Lookup Table Descriptor
  GreenPaletteColorLookupTableDescriptor: Array<number> | undefined;
  x00281102: Array<number> | undefined;

  // Blue Palette Color Lookup Table Descriptor
  BluePaletteColorLookupTableDescriptor: Array<number> | undefined;
  x00281103: Array<number> | undefined;

  // Alpha Palette Color Lookup Table Descriptor
  AlphaPaletteColorLookupTableDescriptor: Array<number> | undefined;
  x00281104: Array<number> | undefined;

  // Large Red Palette Color Lookup Table Descriptor
  LargeRedPaletteColorLookupTableDescriptor: Array<number> | undefined;
  x00281111: Array<number> | undefined;

  // Large Green Palette Color Lookup Table Descriptor
  LargeGreenPaletteColorLookupTableDescriptor: Array<number> | undefined;
  x00281112: Array<number> | undefined;

  // Large Blue Palette Color Lookup Table Descriptor
  LargeBluePaletteColorLookupTableDescriptor: Array<number> | undefined;
  x00281113: Array<number> | undefined;

  // Palette Color Lookup Table UID
  PaletteColorLookupTableUID: string | undefined;
  x00281199: string | undefined;

  // Large Palette Color Lookup Table UID
  LargePaletteColorLookupTableUID: string | undefined;
  x00281214: string | undefined;

  // Breast Implant Present
  BreastImplantPresent: string | undefined;
  x00281300: string | undefined;

  // Partial View
  PartialView: string | undefined;
  x00281350: string | undefined;

  // Partial View Code Sequence
  PartialViewCodeSequence: Array<Dataset> | undefined;
  x00281352: Array<Dataset> | undefined;

  // Spatial Locations Preserved
  SpatialLocationsPreserved: string | undefined;
  x0028135a: string | undefined;

  // Data Frame Assignment Sequence
  DataFrameAssignmentSequence: Array<Dataset> | undefined;
  x00281401: Array<Dataset> | undefined;

  // Data Path Assignment
  DataPathAssignment: string | undefined;
  x00281402: string | undefined;

  // Bits Mapped to Color Lookup Table
  BitsMappedToColorLookupTable: number | undefined;
  x00281403: number | undefined;

  // Blending LUT 1 Sequence
  BlendingLUT1Sequence: Array<Dataset> | undefined;
  x00281404: Array<Dataset> | undefined;

  // Blending LUT 1 Transfer Function
  BlendingLUT1TransferFunction: string | undefined;
  x00281405: string | undefined;

  // Blending Weight Constant
  BlendingWeightConstant: number | undefined;
  x00281406: number | undefined;

  // Blending Lookup Table Descriptor
  BlendingLookupTableDescriptor: Array<number> | undefined;
  x00281407: Array<number> | undefined;

  // Enhanced Palette Color Lookup Table Sequence
  EnhancedPaletteColorLookupTableSequence: Array<Dataset> | undefined;
  x0028140b: Array<Dataset> | undefined;

  // Blending LUT 2 Sequence
  BlendingLUT2Sequence: Array<Dataset> | undefined;
  x0028140c: Array<Dataset> | undefined;

  // Blending LUT 2 Transfer Function
  BlendingLUT2TransferFunction: string | undefined;
  x0028140d: string | undefined;

  // Data Path ID
  DataPathID: string | undefined;
  x0028140e: string | undefined;

  // RGB LUT Transfer Function
  RGBLUTTransferFunction: string | undefined;
  x0028140f: string | undefined;

  // Alpha LUT Transfer Function
  AlphaLUTTransferFunction: string | undefined;
  x00281410: string | undefined;

  // Lossy Image Compression
  LossyImageCompression: string | undefined;
  x00282110: string | undefined;

  // Lossy Image Compression Ratio
  LossyImageCompressionRatio: Array<number> | undefined;
  x00282112: Array<number> | undefined;

  // Lossy Image Compression Method
  LossyImageCompressionMethod: Array<string> | undefined;
  x00282114: Array<string> | undefined;

  // Modality LUT Sequence
  ModalityLUTSequence: Array<Dataset> | undefined;
  x00283000: Array<Dataset> | undefined;

  // LUT Descriptor
  LUTDescriptor: Array<number> | undefined;
  x00283002: Array<number> | undefined;

  // LUT Explanation
  LUTExplanation: string | undefined;
  x00283003: string | undefined;

  // Modality LUT Type
  ModalityLUTType: string | undefined;
  x00283004: string | undefined;

  // VOI LUT Sequence
  VOILUTSequence: Array<Dataset> | undefined;
  x00283010: Array<Dataset> | undefined;

  // Softcopy VOI LUT Sequence
  SoftcopyVOILUTSequence: Array<Dataset> | undefined;
  x00283110: Array<Dataset> | undefined;

  // Bi-Plane Acquisition Sequence
  BiPlaneAcquisitionSequence: Array<Dataset> | undefined;
  x00285000: Array<Dataset> | undefined;

  // Representative Frame Number
  RepresentativeFrameNumber: number | undefined;
  x00286010: number | undefined;

  // Frame Numbers of Interest (FOI)
  FrameNumbersOfInterest: Array<number> | undefined;
  x00286020: Array<number> | undefined;

  // Frame of Interest Description
  FrameOfInterestDescription: Array<string> | undefined;
  x00286022: Array<string> | undefined;

  // Frame of Interest Type
  FrameOfInterestType: Array<string> | undefined;
  x00286023: Array<string> | undefined;

  // Mask Pointer(s)
  MaskPointers: Array<number> | undefined;
  x00286030: Array<number> | undefined;

  // R Wave Pointer
  RWavePointer: Array<number> | undefined;
  x00286040: Array<number> | undefined;

  // Mask Subtraction Sequence
  MaskSubtractionSequence: Array<Dataset> | undefined;
  x00286100: Array<Dataset> | undefined;

  // Mask Operation
  MaskOperation: string | undefined;
  x00286101: string | undefined;

  // Applicable Frame Range
  ApplicableFrameRange: Array<number> | undefined;
  x00286102: Array<number> | undefined;

  // Mask Frame Numbers
  MaskFrameNumbers: Array<number> | undefined;
  x00286110: Array<number> | undefined;

  // Contrast Frame Averaging
  ContrastFrameAveraging: number | undefined;
  x00286112: number | undefined;

  // Mask Sub-pixel Shift
  MaskSubPixelShift: Array<number> | undefined;
  x00286114: Array<number> | undefined;

  // TID Offset
  TIDOffset: Uint8Array | undefined;
  x00286120: Uint8Array | undefined;

  // Equipment Administrator Sequence
  EquipmentAdministratorSequence: Array<Dataset> | undefined;
  x00287000: Array<Dataset> | undefined;

  // Number of Display Subsystems
  NumberOfDisplaySubsystems: number | undefined;
  x00287001: number | undefined;

  // Current Configuration ID
  CurrentConfigurationID: number | undefined;
  x00287002: number | undefined;

  // Display Subsystem ID
  DisplaySubsystemID: number | undefined;
  x00287003: number | undefined;

  // Display Subsystem Name
  DisplaySubsystemName: string | undefined;
  x00287004: string | undefined;

  // Display Subsystem Description
  DisplaySubsystemDescription: string | undefined;
  x00287005: string | undefined;

  // System Status
  SystemStatus: string | undefined;
  x00287006: string | undefined;

  // System Status Comment
  SystemStatusComment: string | undefined;
  x00287007: string | undefined;

  // Target Luminance Characteristics Sequence
  TargetLuminanceCharacteristicsSequence: Array<Dataset> | undefined;
  x00287008: Array<Dataset> | undefined;

  // Luminance Characteristics ID
  LuminanceCharacteristicsID: number | undefined;
  x00287009: number | undefined;

  // Display Subsystem Configuration Sequence
  DisplaySubsystemConfigurationSequence: Array<Dataset> | undefined;
  x0028700a: Array<Dataset> | undefined;

  // Configuration ID
  ConfigurationID: number | undefined;
  x0028700b: number | undefined;

  // Configuration Name
  ConfigurationName: string | undefined;
  x0028700c: string | undefined;

  // Configuration Description
  ConfigurationDescription: string | undefined;
  x0028700d: string | undefined;

  // Referenced Target Luminance Characteristics ID
  ReferencedTargetLuminanceCharacteristicsID: number | undefined;
  x0028700e: number | undefined;

  // QA Results Sequence
  QAResultsSequence: Array<Dataset> | undefined;
  x0028700f: Array<Dataset> | undefined;

  // Display Subsystem QA Results Sequence
  DisplaySubsystemQAResultsSequence: Array<Dataset> | undefined;
  x00287010: Array<Dataset> | undefined;

  // Configuration QA Results Sequence
  ConfigurationQAResultsSequence: Array<Dataset> | undefined;
  x00287011: Array<Dataset> | undefined;

  // Measurement Equipment Sequence
  MeasurementEquipmentSequence: Array<Dataset> | undefined;
  x00287012: Array<Dataset> | undefined;

  // Measurement Functions
  MeasurementFunctions: Array<string> | undefined;
  x00287013: Array<string> | undefined;

  // Measurement Equipment Type
  MeasurementEquipmentType: string | undefined;
  x00287014: string | undefined;

  // Visual Evaluation Result Sequence
  VisualEvaluationResultSequence: Array<Dataset> | undefined;
  x00287015: Array<Dataset> | undefined;

  // Display Calibration Result Sequence
  DisplayCalibrationResultSequence: Array<Dataset> | undefined;
  x00287016: Array<Dataset> | undefined;

  // DDL Value
  DDLValue: number | undefined;
  x00287017: number | undefined;

  // CIExy White Point
  CIExyWhitePoint: Array<number> | undefined;
  x00287018: Array<number> | undefined;

  // Display Function Type
  DisplayFunctionType: string | undefined;
  x00287019: string | undefined;

  // Gamma Value
  GammaValue: number | undefined;
  x0028701a: number | undefined;

  // Number of Luminance Points
  NumberOfLuminancePoints: number | undefined;
  x0028701b: number | undefined;

  // Luminance Response Sequence
  LuminanceResponseSequence: Array<Dataset> | undefined;
  x0028701c: Array<Dataset> | undefined;

  // Target Minimum Luminance
  TargetMinimumLuminance: number | undefined;
  x0028701d: number | undefined;

  // Target Maximum Luminance
  TargetMaximumLuminance: number | undefined;
  x0028701e: number | undefined;

  // Luminance Value
  LuminanceValue: number | undefined;
  x0028701f: number | undefined;

  // Luminance Response Description
  LuminanceResponseDescription: string | undefined;
  x00287020: string | undefined;

  // White Point Flag
  WhitePointFlag: string | undefined;
  x00287021: string | undefined;

  // Display Device Type Code Sequence
  DisplayDeviceTypeCodeSequence: Array<Dataset> | undefined;
  x00287022: Array<Dataset> | undefined;

  // Display Subsystem Sequence
  DisplaySubsystemSequence: Array<Dataset> | undefined;
  x00287023: Array<Dataset> | undefined;

  // Luminance Result Sequence
  LuminanceResultSequence: Array<Dataset> | undefined;
  x00287024: Array<Dataset> | undefined;

  // Ambient Light Value Source
  AmbientLightValueSource: string | undefined;
  x00287025: string | undefined;

  // Measured Characteristics
  MeasuredCharacteristics: Array<string> | undefined;
  x00287026: Array<string> | undefined;

  // Luminance Uniformity Result Sequence
  LuminanceUniformityResultSequence: Array<Dataset> | undefined;
  x00287027: Array<Dataset> | undefined;

  // Visual Evaluation Test Sequence
  VisualEvaluationTestSequence: Array<Dataset> | undefined;
  x00287028: Array<Dataset> | undefined;

  // Test Result
  TestResult: string | undefined;
  x00287029: string | undefined;

  // Test Result Comment
  TestResultComment: string | undefined;
  x0028702a: string | undefined;

  // Test Image Validation
  TestImageValidation: string | undefined;
  x0028702b: string | undefined;

  // Test Pattern Code Sequence
  TestPatternCodeSequence: Array<Dataset> | undefined;
  x0028702c: Array<Dataset> | undefined;

  // Measurement Pattern Code Sequence
  MeasurementPatternCodeSequence: Array<Dataset> | undefined;
  x0028702d: Array<Dataset> | undefined;

  // Visual Evaluation Method Code Sequence
  VisualEvaluationMethodCodeSequence: Array<Dataset> | undefined;
  x0028702e: Array<Dataset> | undefined;

  // Data Point Rows
  DataPointRows: number | undefined;
  x00289001: number | undefined;

  // Data Point Columns
  DataPointColumns: number | undefined;
  x00289002: number | undefined;

  // Signal Domain Columns
  SignalDomainColumns: string | undefined;
  x00289003: string | undefined;

  // Largest Monochrome Pixel Value
  LargestMonochromePixelValue: number | undefined;
  x00289099: number | undefined;

  // Data Representation
  DataRepresentation: string | undefined;
  x00289108: string | undefined;

  // Pixel Measures Sequence
  PixelMeasuresSequence: Array<Dataset> | undefined;
  x00289110: Array<Dataset> | undefined;

  // Frame VOI LUT Sequence
  FrameVOILUTSequence: Array<Dataset> | undefined;
  x00289132: Array<Dataset> | undefined;

  // Pixel Value Transformation Sequence
  PixelValueTransformationSequence: Array<Dataset> | undefined;
  x00289145: Array<Dataset> | undefined;

  // Signal Domain Rows
  SignalDomainRows: string | undefined;
  x00289235: string | undefined;

  // Display Filter Percentage
  DisplayFilterPercentage: number | undefined;
  x00289411: number | undefined;

  // Frame Pixel Shift Sequence
  FramePixelShiftSequence: Array<Dataset> | undefined;
  x00289415: Array<Dataset> | undefined;

  // Subtraction Item ID
  SubtractionItemID: number | undefined;
  x00289416: number | undefined;

  // Pixel Intensity Relationship LUT Sequence
  PixelIntensityRelationshipLUTSequence: Array<Dataset> | undefined;
  x00289422: Array<Dataset> | undefined;

  // Frame Pixel Data Properties Sequence
  FramePixelDataPropertiesSequence: Array<Dataset> | undefined;
  x00289443: Array<Dataset> | undefined;

  // Geometrical Properties
  GeometricalProperties: string | undefined;
  x00289444: string | undefined;

  // Geometric Maximum Distortion
  GeometricMaximumDistortion: number | undefined;
  x00289445: number | undefined;

  // Image Processing Applied
  ImageProcessingApplied: Array<string> | undefined;
  x00289446: Array<string> | undefined;

  // Mask Selection Mode
  MaskSelectionMode: string | undefined;
  x00289454: string | undefined;

  // LUT Function
  LUTFunction: string | undefined;
  x00289474: string | undefined;

  // Mask Visibility Percentage
  MaskVisibilityPercentage: number | undefined;
  x00289478: number | undefined;

  // Pixel Shift Sequence
  PixelShiftSequence: Array<Dataset> | undefined;
  x00289501: Array<Dataset> | undefined;

  // Region Pixel Shift Sequence
  RegionPixelShiftSequence: Array<Dataset> | undefined;
  x00289502: Array<Dataset> | undefined;

  // Vertices of the Region
  VerticesOfTheRegion: Array<Uint8Array> | undefined;
  x00289503: Array<Uint8Array> | undefined;

  // Multi-frame Presentation Sequence
  MultiFramePresentationSequence: Array<Dataset> | undefined;
  x00289505: Array<Dataset> | undefined;

  // Pixel Shift Frame Range
  PixelShiftFrameRange: Array<number> | undefined;
  x00289506: Array<number> | undefined;

  // LUT Frame Range
  LUTFrameRange: Array<number> | undefined;
  x00289507: Array<number> | undefined;

  // Image to Equipment Mapping Matrix
  ImageToEquipmentMappingMatrix: Array<number> | undefined;
  x00289520: Array<number> | undefined;

  // Equipment Coordinate System Identification
  EquipmentCoordinateSystemIdentification: string | undefined;
  x00289537: string | undefined;

  // Study Status ID
  StudyStatusID: string | undefined;
  x0032000a: string | undefined;

  // Study Priority ID
  StudyPriorityID: string | undefined;
  x0032000c: string | undefined;

  // Study ID Issuer
  StudyIDIssuer: string | undefined;
  x00320012: string | undefined;

  // Study Verified Date
  StudyVerifiedDate: Date | undefined;
  x00320032: Date | undefined;

  // Study Verified Time
  StudyVerifiedTime: string | undefined;
  x00320033: string | undefined;

  // Study Read Date
  StudyReadDate: Date | undefined;
  x00320034: Date | undefined;

  // Study Read Time
  StudyReadTime: string | undefined;
  x00320035: string | undefined;

  // Scheduled Study Start Date
  ScheduledStudyStartDate: Date | undefined;
  x00321000: Date | undefined;

  // Scheduled Study Start Time
  ScheduledStudyStartTime: string | undefined;
  x00321001: string | undefined;

  // Scheduled Study Stop Date
  ScheduledStudyStopDate: Date | undefined;
  x00321010: Date | undefined;

  // Scheduled Study Stop Time
  ScheduledStudyStopTime: string | undefined;
  x00321011: string | undefined;

  // Scheduled Study Location
  ScheduledStudyLocation: string | undefined;
  x00321020: string | undefined;

  // Scheduled Study Location AE Title
  ScheduledStudyLocationAETitle: Array<string> | undefined;
  x00321021: Array<string> | undefined;

  // Reason for Study
  ReasonForStudy: string | undefined;
  x00321030: string | undefined;

  // Requesting Physician Identification Sequence
  RequestingPhysicianIdentificationSequence: Array<Dataset> | undefined;
  x00321031: Array<Dataset> | undefined;

  // Requesting Physician
  RequestingPhysician: any | undefined;
  x00321032: any | undefined;

  // Requesting Service
  RequestingService: string | undefined;
  x00321033: string | undefined;

  // Requesting Service Code Sequence
  RequestingServiceCodeSequence: Array<Dataset> | undefined;
  x00321034: Array<Dataset> | undefined;

  // Study Arrival Date
  StudyArrivalDate: Date | undefined;
  x00321040: Date | undefined;

  // Study Arrival Time
  StudyArrivalTime: string | undefined;
  x00321041: string | undefined;

  // Study Completion Date
  StudyCompletionDate: Date | undefined;
  x00321050: Date | undefined;

  // Study Completion Time
  StudyCompletionTime: string | undefined;
  x00321051: string | undefined;

  // Study Component Status ID
  StudyComponentStatusID: string | undefined;
  x00321055: string | undefined;

  // Requested Procedure Description
  RequestedProcedureDescription: string | undefined;
  x00321060: string | undefined;

  // Requested Procedure Code Sequence
  RequestedProcedureCodeSequence: Array<Dataset> | undefined;
  x00321064: Array<Dataset> | undefined;

  // Requested Contrast Agent
  RequestedContrastAgent: string | undefined;
  x00321070: string | undefined;

  // Referenced Patient Alias Sequence
  ReferencedPatientAliasSequence: Array<Dataset> | undefined;
  x00380004: Array<Dataset> | undefined;

  // Visit Status ID
  VisitStatusID: string | undefined;
  x00380008: string | undefined;

  // Admission ID
  AdmissionID: string | undefined;
  x00380010: string | undefined;

  // Issuer of Admission ID
  IssuerOfAdmissionID: string | undefined;
  x00380011: string | undefined;

  // Issuer of Admission ID Sequence
  IssuerOfAdmissionIDSequence: Array<Dataset> | undefined;
  x00380014: Array<Dataset> | undefined;

  // Route of Admissions
  RouteOfAdmissions: string | undefined;
  x00380016: string | undefined;

  // Scheduled Admission Date
  ScheduledAdmissionDate: Date | undefined;
  x0038001a: Date | undefined;

  // Scheduled Admission Time
  ScheduledAdmissionTime: string | undefined;
  x0038001b: string | undefined;

  // Scheduled Discharge Date
  ScheduledDischargeDate: Date | undefined;
  x0038001c: Date | undefined;

  // Scheduled Discharge Time
  ScheduledDischargeTime: string | undefined;
  x0038001d: string | undefined;

  // Scheduled Patient Institution Residence
  ScheduledPatientInstitutionResidence: string | undefined;
  x0038001e: string | undefined;

  // Admitting Date
  AdmittingDate: Date | undefined;
  x00380020: Date | undefined;

  // Admitting Time
  AdmittingTime: string | undefined;
  x00380021: string | undefined;

  // Discharge Date
  DischargeDate: Date | undefined;
  x00380030: Date | undefined;

  // Discharge Time
  DischargeTime: string | undefined;
  x00380032: string | undefined;

  // Discharge Diagnosis Description
  DischargeDiagnosisDescription: string | undefined;
  x00380040: string | undefined;

  // Discharge Diagnosis Code Sequence
  DischargeDiagnosisCodeSequence: Array<Dataset> | undefined;
  x00380044: Array<Dataset> | undefined;

  // Special Needs
  SpecialNeeds: string | undefined;
  x00380050: string | undefined;

  // Service Episode ID
  ServiceEpisodeID: string | undefined;
  x00380060: string | undefined;

  // Issuer of Service Episode ID
  IssuerOfServiceEpisodeID: string | undefined;
  x00380061: string | undefined;

  // Service Episode Description
  ServiceEpisodeDescription: string | undefined;
  x00380062: string | undefined;

  // Issuer of Service Episode ID Sequence
  IssuerOfServiceEpisodeIDSequence: Array<Dataset> | undefined;
  x00380064: Array<Dataset> | undefined;

  // Pertinent Documents Sequence
  PertinentDocumentsSequence: Array<Dataset> | undefined;
  x00380100: Array<Dataset> | undefined;

  // Current Patient Location
  CurrentPatientLocation: string | undefined;
  x00380300: string | undefined;

  // Patient's Institution Residence
  PatientInstitutionResidence: string | undefined;
  x00380400: string | undefined;

  // Patient State
  PatientState: string | undefined;
  x00380500: string | undefined;

  // Patient Clinical Trial Participation Sequence
  PatientClinicalTrialParticipationSequence: Array<Dataset> | undefined;
  x00380502: Array<Dataset> | undefined;

  // Waveform Originality
  WaveformOriginality: string | undefined;
  x003a0004: string | undefined;

  // Number of Waveform Channels
  NumberOfWaveformChannels: number | undefined;
  x003a0005: number | undefined;

  // Number of Waveform Samples
  NumberOfWaveformSamples: number | undefined;
  x003a0010: number | undefined;

  // Sampling Frequency
  SamplingFrequency: number | undefined;
  x003a001a: number | undefined;

  // Multiplex Group Label
  MultiplexGroupLabel: string | undefined;
  x003a0020: string | undefined;

  // Channel Definition Sequence
  ChannelDefinitionSequence: Array<Dataset> | undefined;
  x003a0200: Array<Dataset> | undefined;

  // Waveform Channel Number
  WaveformChannelNumber: number | undefined;
  x003a0202: number | undefined;

  // Channel Label
  ChannelLabel: string | undefined;
  x003a0203: string | undefined;

  // Channel Status
  ChannelStatus: Array<string> | undefined;
  x003a0205: Array<string> | undefined;

  // Channel Source Sequence
  ChannelSourceSequence: Array<Dataset> | undefined;
  x003a0208: Array<Dataset> | undefined;

  // Channel Source Modifiers Sequence
  ChannelSourceModifiersSequence: Array<Dataset> | undefined;
  x003a0209: Array<Dataset> | undefined;

  // Source Waveform Sequence
  SourceWaveformSequence: Array<Dataset> | undefined;
  x003a020a: Array<Dataset> | undefined;

  // Channel Derivation Description
  ChannelDerivationDescription: string | undefined;
  x003a020c: string | undefined;

  // Channel Sensitivity
  ChannelSensitivity: number | undefined;
  x003a0210: number | undefined;

  // Channel Sensitivity Units Sequence
  ChannelSensitivityUnitsSequence: Array<Dataset> | undefined;
  x003a0211: Array<Dataset> | undefined;

  // Channel Sensitivity Correction Factor
  ChannelSensitivityCorrectionFactor: number | undefined;
  x003a0212: number | undefined;

  // Channel Baseline
  ChannelBaseline: number | undefined;
  x003a0213: number | undefined;

  // Channel Time Skew
  ChannelTimeSkew: number | undefined;
  x003a0214: number | undefined;

  // Channel Sample Skew
  ChannelSampleSkew: number | undefined;
  x003a0215: number | undefined;

  // Channel Offset
  ChannelOffset: number | undefined;
  x003a0218: number | undefined;

  // Waveform Bits Stored
  WaveformBitsStored: number | undefined;
  x003a021a: number | undefined;

  // Filter Low Frequency
  FilterLowFrequency: number | undefined;
  x003a0220: number | undefined;

  // Filter High Frequency
  FilterHighFrequency: number | undefined;
  x003a0221: number | undefined;

  // Notch Filter Frequency
  NotchFilterFrequency: number | undefined;
  x003a0222: number | undefined;

  // Notch Filter Bandwidth
  NotchFilterBandwidth: number | undefined;
  x003a0223: number | undefined;

  // Waveform Data Display Scale
  WaveformDataDisplayScale: number | undefined;
  x003a0230: number | undefined;

  // Waveform Display Background CIELab Value
  WaveformDisplayBackgroundCIELabValue: Array<number> | undefined;
  x003a0231: Array<number> | undefined;

  // Waveform Presentation Group Sequence
  WaveformPresentationGroupSequence: Array<Dataset> | undefined;
  x003a0240: Array<Dataset> | undefined;

  // Presentation Group Number
  PresentationGroupNumber: number | undefined;
  x003a0241: number | undefined;

  // Channel Display Sequence
  ChannelDisplaySequence: Array<Dataset> | undefined;
  x003a0242: Array<Dataset> | undefined;

  // Channel Recommended Display CIELab Value
  ChannelRecommendedDisplayCIELabValue: Array<number> | undefined;
  x003a0244: Array<number> | undefined;

  // Channel Position
  ChannelPosition: number | undefined;
  x003a0245: number | undefined;

  // Display Shading Flag
  DisplayShadingFlag: string | undefined;
  x003a0246: string | undefined;

  // Fractional Channel Display Scale
  FractionalChannelDisplayScale: number | undefined;
  x003a0247: number | undefined;

  // Absolute Channel Display Scale
  AbsoluteChannelDisplayScale: number | undefined;
  x003a0248: number | undefined;

  // Multiplexed Audio Channels Description Code Sequence
  MultiplexedAudioChannelsDescriptionCodeSequence: Array<Dataset> | undefined;
  x003a0300: Array<Dataset> | undefined;

  // Channel Identification Code
  ChannelIdentificationCode: number | undefined;
  x003a0301: number | undefined;

  // Channel Mode
  ChannelMode: string | undefined;
  x003a0302: string | undefined;

  // Scheduled Station AE Title
  ScheduledStationAETitle: Array<string> | undefined;
  x00400001: Array<string> | undefined;

  // Scheduled Procedure Step Start Date
  ScheduledProcedureStepStartDate: Date | undefined;
  x00400002: Date | undefined;

  // Scheduled Procedure Step Start Time
  ScheduledProcedureStepStartTime: string | undefined;
  x00400003: string | undefined;

  // Scheduled Procedure Step End Date
  ScheduledProcedureStepEndDate: Date | undefined;
  x00400004: Date | undefined;

  // Scheduled Procedure Step End Time
  ScheduledProcedureStepEndTime: string | undefined;
  x00400005: string | undefined;

  // Scheduled Performing Physician's Name
  ScheduledPerformingPhysicianName: any | undefined;
  x00400006: any | undefined;

  // Scheduled Procedure Step Description
  ScheduledProcedureStepDescription: string | undefined;
  x00400007: string | undefined;

  // Scheduled Protocol Code Sequence
  ScheduledProtocolCodeSequence: Array<Dataset> | undefined;
  x00400008: Array<Dataset> | undefined;

  // Scheduled Procedure Step ID
  ScheduledProcedureStepID: string | undefined;
  x00400009: string | undefined;

  // Stage Code Sequence
  StageCodeSequence: Array<Dataset> | undefined;
  x0040000a: Array<Dataset> | undefined;

  // Scheduled Performing Physician Identification Sequence
  ScheduledPerformingPhysicianIdentificationSequence: Array<Dataset> | undefined;
  x0040000b: Array<Dataset> | undefined;

  // Scheduled Station Name
  ScheduledStationName: Array<string> | undefined;
  x00400010: Array<string> | undefined;

  // Scheduled Procedure Step Location
  ScheduledProcedureStepLocation: string | undefined;
  x00400011: string | undefined;

  // Pre-Medication
  PreMedication: string | undefined;
  x00400012: string | undefined;

  // Scheduled Procedure Step Status
  ScheduledProcedureStepStatus: string | undefined;
  x00400020: string | undefined;

  // Order Placer Identifier Sequence
  OrderPlacerIdentifierSequence: Array<Dataset> | undefined;
  x00400026: Array<Dataset> | undefined;

  // Order Filler Identifier Sequence
  OrderFillerIdentifierSequence: Array<Dataset> | undefined;
  x00400027: Array<Dataset> | undefined;

  // Universal Entity ID Type
  UniversalEntityIDType: string | undefined;
  x00400033: string | undefined;

  // Identifier Type Code
  IdentifierTypeCode: string | undefined;
  x00400035: string | undefined;

  // Assigning Facility Sequence
  AssigningFacilitySequence: Array<Dataset> | undefined;
  x00400036: Array<Dataset> | undefined;

  // Assigning Jurisdiction Code Sequence
  AssigningJurisdictionCodeSequence: Array<Dataset> | undefined;
  x00400039: Array<Dataset> | undefined;

  // Assigning Agency or Department Code Sequence
  AssigningAgencyOrDepartmentCodeSequence: Array<Dataset> | undefined;
  x0040003a: Array<Dataset> | undefined;

  // Scheduled Procedure Step Sequence
  ScheduledProcedureStepSequence: Array<Dataset> | undefined;
  x00400100: Array<Dataset> | undefined;

  // Referenced Non-Image Composite SOP Instance Sequence
  ReferencedNonImageCompositeSOPInstanceSequence: Array<Dataset> | undefined;
  x00400220: Array<Dataset> | undefined;

  // Performed Station AE Title
  PerformedStationAETitle: string | undefined;
  x00400241: string | undefined;

  // Performed Station Name
  PerformedStationName: string | undefined;
  x00400242: string | undefined;

  // Performed Location
  PerformedLocation: string | undefined;
  x00400243: string | undefined;

  // Performed Procedure Step Start Date
  PerformedProcedureStepStartDate: Date | undefined;
  x00400244: Date | undefined;

  // Performed Procedure Step Start Time
  PerformedProcedureStepStartTime: string | undefined;
  x00400245: string | undefined;

  // Performed Procedure Step End Date
  PerformedProcedureStepEndDate: Date | undefined;
  x00400250: Date | undefined;

  // Performed Procedure Step End Time
  PerformedProcedureStepEndTime: string | undefined;
  x00400251: string | undefined;

  // Performed Procedure Step Status
  PerformedProcedureStepStatus: string | undefined;
  x00400252: string | undefined;

  // Performed Procedure Step ID
  PerformedProcedureStepID: string | undefined;
  x00400253: string | undefined;

  // Performed Procedure Step Description
  PerformedProcedureStepDescription: string | undefined;
  x00400254: string | undefined;

  // Performed Procedure Type Description
  PerformedProcedureTypeDescription: string | undefined;
  x00400255: string | undefined;

  // Performed Protocol Code Sequence
  PerformedProtocolCodeSequence: Array<Dataset> | undefined;
  x00400260: Array<Dataset> | undefined;

  // Performed Protocol Type
  PerformedProtocolType: string | undefined;
  x00400261: string | undefined;

  // Scheduled Step Attributes Sequence
  ScheduledStepAttributesSequence: Array<Dataset> | undefined;
  x00400270: Array<Dataset> | undefined;

  // Request Attributes Sequence
  RequestAttributesSequence: Array<Dataset> | undefined;
  x00400275: Array<Dataset> | undefined;

  // Performed Procedure Step Discontinuation Reason Code Sequence
  PerformedProcedureStepDiscontinuationReasonCodeSequence: Array<Dataset> | undefined;
  x00400281: Array<Dataset> | undefined;

  // Quantity Sequence
  QuantitySequence: Array<Dataset> | undefined;
  x00400293: Array<Dataset> | undefined;

  // Quantity
  Quantity: number | undefined;
  x00400294: number | undefined;

  // Measuring Units Sequence
  MeasuringUnitsSequence: Array<Dataset> | undefined;
  x00400295: Array<Dataset> | undefined;

  // Billing Item Sequence
  BillingItemSequence: Array<Dataset> | undefined;
  x00400296: Array<Dataset> | undefined;

  // Total Time of Fluoroscopy
  TotalTimeOfFluoroscopy: number | undefined;
  x00400300: number | undefined;

  // Total Number of Exposures
  TotalNumberOfExposures: number | undefined;
  x00400301: number | undefined;

  // Entrance Dose
  EntranceDose: number | undefined;
  x00400302: number | undefined;

  // Exposed Area
  ExposedArea: Array<number> | undefined;
  x00400303: Array<number> | undefined;

  // Distance Source to Entrance
  DistanceSourceToEntrance: number | undefined;
  x00400306: number | undefined;

  // Distance Source to Support
  DistanceSourceToSupport: number | undefined;
  x00400307: number | undefined;

  // Exposure Dose Sequence
  ExposureDoseSequence: Array<Dataset> | undefined;
  x0040030e: Array<Dataset> | undefined;

  // X-Ray Output
  XRayOutput: number | undefined;
  x00400312: number | undefined;

  // Half Value Layer
  HalfValueLayer: number | undefined;
  x00400314: number | undefined;

  // Organ Dose
  OrganDose: number | undefined;
  x00400316: number | undefined;

  // Organ Exposed
  OrganExposed: string | undefined;
  x00400318: string | undefined;

  // Billing Procedure Step Sequence
  BillingProcedureStepSequence: Array<Dataset> | undefined;
  x00400320: Array<Dataset> | undefined;

  // Film Consumption Sequence
  FilmConsumptionSequence: Array<Dataset> | undefined;
  x00400321: Array<Dataset> | undefined;

  // Billing Supplies and Devices Sequence
  BillingSuppliesAndDevicesSequence: Array<Dataset> | undefined;
  x00400324: Array<Dataset> | undefined;

  // Referenced Procedure Step Sequence
  ReferencedProcedureStepSequence: Array<Dataset> | undefined;
  x00400330: Array<Dataset> | undefined;

  // Performed Series Sequence
  PerformedSeriesSequence: Array<Dataset> | undefined;
  x00400340: Array<Dataset> | undefined;

  // Protocol Context Sequence
  ProtocolContextSequence: Array<Dataset> | undefined;
  x00400440: Array<Dataset> | undefined;

  // Content Item Modifier Sequence
  ContentItemModifierSequence: Array<Dataset> | undefined;
  x00400441: Array<Dataset> | undefined;

  // Scheduled Specimen Sequence
  ScheduledSpecimenSequence: Array<Dataset> | undefined;
  x00400500: Array<Dataset> | undefined;

  // Specimen Accession Number
  SpecimenAccessionNumber: string | undefined;
  x0040050a: string | undefined;

  // Container Identifier
  ContainerIdentifier: string | undefined;
  x00400512: string | undefined;

  // Issuer of the Container Identifier Sequence
  IssuerOfTheContainerIdentifierSequence: Array<Dataset> | undefined;
  x00400513: Array<Dataset> | undefined;

  // Alternate Container Identifier Sequence
  AlternateContainerIdentifierSequence: Array<Dataset> | undefined;
  x00400515: Array<Dataset> | undefined;

  // Container Type Code Sequence
  ContainerTypeCodeSequence: Array<Dataset> | undefined;
  x00400518: Array<Dataset> | undefined;

  // Container Description
  ContainerDescription: string | undefined;
  x0040051a: string | undefined;

  // Container Component Sequence
  ContainerComponentSequence: Array<Dataset> | undefined;
  x00400520: Array<Dataset> | undefined;

  // Specimen Sequence
  SpecimenSequence: Array<Dataset> | undefined;
  x00400550: Array<Dataset> | undefined;

  // Specimen Identifier
  SpecimenIdentifier: string | undefined;
  x00400551: string | undefined;

  // Specimen Description Sequence (Trial)
  SpecimenDescriptionSequenceTrial: Array<Dataset> | undefined;
  x00400552: Array<Dataset> | undefined;

  // Specimen UID
  SpecimenUID: string | undefined;
  x00400554: string | undefined;

  // Acquisition Context Sequence
  AcquisitionContextSequence: Array<Dataset> | undefined;
  x00400555: Array<Dataset> | undefined;

  // Specimen Type Code Sequence
  SpecimenTypeCodeSequence: Array<Dataset> | undefined;
  x0040059a: Array<Dataset> | undefined;

  // Specimen Description Sequence
  SpecimenDescriptionSequence: Array<Dataset> | undefined;
  x00400560: Array<Dataset> | undefined;

  // Issuer of the Specimen Identifier Sequence
  IssuerOfTheSpecimenIdentifierSequence: Array<Dataset> | undefined;
  x00400562: Array<Dataset> | undefined;

  // Specimen Short Description
  SpecimenShortDescription: string | undefined;
  x00400600: string | undefined;

  // Specimen Preparation Sequence
  SpecimenPreparationSequence: Array<Dataset> | undefined;
  x00400610: Array<Dataset> | undefined;

  // Specimen Preparation Step Content Item Sequence
  SpecimenPreparationStepContentItemSequence: Array<Dataset> | undefined;
  x00400612: Array<Dataset> | undefined;

  // Specimen Localization Content Item Sequence
  SpecimenLocalizationContentItemSequence: Array<Dataset> | undefined;
  x00400620: Array<Dataset> | undefined;

  // Slide Identifier
  SlideIdentifier: string | undefined;
  x004006fa: string | undefined;

  // Image Center Point Coordinates Sequence
  ImageCenterPointCoordinatesSequence: Array<Dataset> | undefined;
  x0040071a: Array<Dataset> | undefined;

  // X Offset in Slide Coordinate System
  XOffsetInSlideCoordinateSystem: number | undefined;
  x0040072a: number | undefined;

  // Y Offset in Slide Coordinate System
  YOffsetInSlideCoordinateSystem: number | undefined;
  x0040073a: number | undefined;

  // Z Offset in Slide Coordinate System
  ZOffsetInSlideCoordinateSystem: number | undefined;
  x0040074a: number | undefined;

  // Pixel Spacing Sequence
  PixelSpacingSequence: Array<Dataset> | undefined;
  x004008d8: Array<Dataset> | undefined;

  // Coordinate System Axis Code Sequence
  CoordinateSystemAxisCodeSequence: Array<Dataset> | undefined;
  x004008da: Array<Dataset> | undefined;

  // Measurement Units Code Sequence
  MeasurementUnitsCodeSequence: Array<Dataset> | undefined;
  x004008ea: Array<Dataset> | undefined;

  // Vital Stain Code Sequence (Trial)
  VitalStainCodeSequenceTrial: Array<Dataset> | undefined;
  x004009f8: Array<Dataset> | undefined;

  // Requested Procedure ID
  RequestedProcedureID: string | undefined;
  x00401001: string | undefined;

  // Reason for the Requested Procedure
  ReasonForTheRequestedProcedure: string | undefined;
  x00401002: string | undefined;

  // Requested Procedure Priority
  RequestedProcedurePriority: string | undefined;
  x00401003: string | undefined;

  // Patient Transport Arrangements
  PatientTransportArrangements: string | undefined;
  x00401004: string | undefined;

  // Requested Procedure Location
  RequestedProcedureLocation: string | undefined;
  x00401005: string | undefined;

  // Placer Order Number / Procedure
  PlacerOrderNumberProcedure: string | undefined;
  x00401006: string | undefined;

  // Filler Order Number / Procedure
  FillerOrderNumberProcedure: string | undefined;
  x00401007: string | undefined;

  // Confidentiality Code
  ConfidentialityCode: string | undefined;
  x00401008: string | undefined;

  // Reporting Priority
  ReportingPriority: string | undefined;
  x00401009: string | undefined;

  // Reason for Requested Procedure Code Sequence
  ReasonForRequestedProcedureCodeSequence: Array<Dataset> | undefined;
  x0040100a: Array<Dataset> | undefined;

  // Names of Intended Recipients of Results
  NamesOfIntendedRecipientsOfResults: Array<any> | undefined;
  x00401010: Array<any> | undefined;

  // Intended Recipients of Results Identification Sequence
  IntendedRecipientsOfResultsIdentificationSequence: Array<Dataset> | undefined;
  x00401011: Array<Dataset> | undefined;

  // Reason For Performed Procedure Code Sequence
  ReasonForPerformedProcedureCodeSequence: Array<Dataset> | undefined;
  x00401012: Array<Dataset> | undefined;

  // Requested Procedure Description (Trial)
  RequestedProcedureDescriptionTrial: string | undefined;
  x00401060: string | undefined;

  // Person Identification Code Sequence
  PersonIdentificationCodeSequence: Array<Dataset> | undefined;
  x00401101: Array<Dataset> | undefined;

  // Person's Telephone Numbers
  PersonTelephoneNumbers: Array<string> | undefined;
  x00401103: Array<string> | undefined;

  // Reason for the Imaging Service Request
  ReasonForTheImagingServiceRequest: string | undefined;
  x00402001: string | undefined;

  // Issue Date of Imaging Service Request
  IssueDateOfImagingServiceRequest: Date | undefined;
  x00402004: Date | undefined;

  // Issue Time of Imaging Service Request
  IssueTimeOfImagingServiceRequest: string | undefined;
  x00402005: string | undefined;

  // Placer Order Number / Imaging Service Request (Retired)
  PlacerOrderNumberImagingServiceRequestRetired: string | undefined;
  x00402006: string | undefined;

  // Filler Order Number / Imaging Service Request (Retired)
  FillerOrderNumberImagingServiceRequestRetired: string | undefined;
  x00402007: string | undefined;

  // Order Entered By
  OrderEnteredBy: any | undefined;
  x00402008: any | undefined;

  // Order Enterer's Location
  OrderEntererLocation: string | undefined;
  x00402009: string | undefined;

  // Order Callback Phone Number
  OrderCallbackPhoneNumber: string | undefined;
  x00402010: string | undefined;

  // Placer Order Number / Imaging Service Request
  PlacerOrderNumberImagingServiceRequest: string | undefined;
  x00402016: string | undefined;

  // Filler Order Number / Imaging Service Request
  FillerOrderNumberImagingServiceRequest: string | undefined;
  x00402017: string | undefined;

  // Confidentiality Constraint on Patient Data Description
  ConfidentialityConstraintOnPatientDataDescription: string | undefined;
  x00403001: string | undefined;

  // General Purpose Scheduled Procedure Step Status
  GeneralPurposeScheduledProcedureStepStatus: string | undefined;
  x00404001: string | undefined;

  // General Purpose Performed Procedure Step Status
  GeneralPurposePerformedProcedureStepStatus: string | undefined;
  x00404002: string | undefined;

  // General Purpose Scheduled Procedure Step Priority
  GeneralPurposeScheduledProcedureStepPriority: string | undefined;
  x00404003: string | undefined;

  // Scheduled Processing Applications Code Sequence
  ScheduledProcessingApplicationsCodeSequence: Array<Dataset> | undefined;
  x00404004: Array<Dataset> | undefined;

  // Scheduled Procedure Step Start DateTime
  ScheduledProcedureStepStartDateTime: string | undefined;
  x00404005: string | undefined;

  // Multiple Copies Flag
  MultipleCopiesFlag: string | undefined;
  x00404006: string | undefined;

  // Performed Processing Applications Code Sequence
  PerformedProcessingApplicationsCodeSequence: Array<Dataset> | undefined;
  x00404007: Array<Dataset> | undefined;

  // Human Performer Code Sequence
  HumanPerformerCodeSequence: Array<Dataset> | undefined;
  x00404009: Array<Dataset> | undefined;

  // Scheduled Procedure Step Modification DateTime
  ScheduledProcedureStepModificationDateTime: string | undefined;
  x00404010: string | undefined;

  // Expected Completion DateTime
  ExpectedCompletionDateTime: string | undefined;
  x00404011: string | undefined;

  // Resulting General Purpose Performed Procedure Steps Sequence
  ResultingGeneralPurposePerformedProcedureStepsSequence: Array<Dataset> | undefined;
  x00404015: Array<Dataset> | undefined;

  // Referenced General Purpose Scheduled Procedure Step Sequence
  ReferencedGeneralPurposeScheduledProcedureStepSequence: Array<Dataset> | undefined;
  x00404016: Array<Dataset> | undefined;

  // Scheduled Workitem Code Sequence
  ScheduledWorkitemCodeSequence: Array<Dataset> | undefined;
  x00404018: Array<Dataset> | undefined;

  // Performed Workitem Code Sequence
  PerformedWorkitemCodeSequence: Array<Dataset> | undefined;
  x00404019: Array<Dataset> | undefined;

  // Input Availability Flag
  InputAvailabilityFlag: string | undefined;
  x00404020: string | undefined;

  // Input Information Sequence
  InputInformationSequence: Array<Dataset> | undefined;
  x00404021: Array<Dataset> | undefined;

  // Relevant Information Sequence
  RelevantInformationSequence: Array<Dataset> | undefined;
  x00404022: Array<Dataset> | undefined;

  // Referenced General Purpose Scheduled Procedure Step Transaction UID
  ReferencedGeneralPurposeScheduledProcedureStepTransactionUID: string | undefined;
  x00404023: string | undefined;

  // Scheduled Station Name Code Sequence
  ScheduledStationNameCodeSequence: Array<Dataset> | undefined;
  x00404025: Array<Dataset> | undefined;

  // Scheduled Station Class Code Sequence
  ScheduledStationClassCodeSequence: Array<Dataset> | undefined;
  x00404026: Array<Dataset> | undefined;

  // Scheduled Station Geographic Location Code Sequence
  ScheduledStationGeographicLocationCodeSequence: Array<Dataset> | undefined;
  x00404027: Array<Dataset> | undefined;

  // Performed Station Name Code Sequence
  PerformedStationNameCodeSequence: Array<Dataset> | undefined;
  x00404028: Array<Dataset> | undefined;

  // Performed Station Class Code Sequence
  PerformedStationClassCodeSequence: Array<Dataset> | undefined;
  x00404029: Array<Dataset> | undefined;

  // Performed Station Geographic Location Code Sequence
  PerformedStationGeographicLocationCodeSequence: Array<Dataset> | undefined;
  x00404030: Array<Dataset> | undefined;

  // Requested Subsequent Workitem Code Sequence
  RequestedSubsequentWorkitemCodeSequence: Array<Dataset> | undefined;
  x00404031: Array<Dataset> | undefined;

  // Non-DICOM Output Code Sequence
  NonDICOMOutputCodeSequence: Array<Dataset> | undefined;
  x00404032: Array<Dataset> | undefined;

  // Output Information Sequence
  OutputInformationSequence: Array<Dataset> | undefined;
  x00404033: Array<Dataset> | undefined;

  // Scheduled Human Performers Sequence
  ScheduledHumanPerformersSequence: Array<Dataset> | undefined;
  x00404034: Array<Dataset> | undefined;

  // Actual Human Performers Sequence
  ActualHumanPerformersSequence: Array<Dataset> | undefined;
  x00404035: Array<Dataset> | undefined;

  // Human Performer's Organization
  HumanPerformerOrganization: string | undefined;
  x00404036: string | undefined;

  // Human Performer's Name
  HumanPerformerName: any | undefined;
  x00404037: any | undefined;

  // Raw Data Handling
  RawDataHandling: string | undefined;
  x00404040: string | undefined;

  // Input Readiness State
  InputReadinessState: string | undefined;
  x00404041: string | undefined;

  // Performed Procedure Step Start DateTime
  PerformedProcedureStepStartDateTime: string | undefined;
  x00404050: string | undefined;

  // Performed Procedure Step End DateTime
  PerformedProcedureStepEndDateTime: string | undefined;
  x00404051: string | undefined;

  // Procedure Step Cancellation DateTime
  ProcedureStepCancellationDateTime: string | undefined;
  x00404052: string | undefined;

  // Entrance Dose in mGy
  EntranceDoseInmGy: number | undefined;
  x00408302: number | undefined;

  // Referenced Image Real World Value Mapping Sequence
  ReferencedImageRealWorldValueMappingSequence: Array<Dataset> | undefined;
  x00409094: Array<Dataset> | undefined;

  // Real World Value Mapping Sequence
  RealWorldValueMappingSequence: Array<Dataset> | undefined;
  x00409096: Array<Dataset> | undefined;

  // Pixel Value Mapping Code Sequence
  PixelValueMappingCodeSequence: Array<Dataset> | undefined;
  x00409098: Array<Dataset> | undefined;

  // LUT Label
  LUTLabel: string | undefined;
  x00409210: string | undefined;

  // Real World Value Last Value Mapped
  RealWorldValueLastValueMapped: number | undefined;
  x00409211: number | undefined;

  // Real World Value LUT Data
  RealWorldValueLUTData: Array<number> | undefined;
  x00409212: Array<number> | undefined;

  // Real World Value First Value Mapped
  RealWorldValueFirstValueMapped: number | undefined;
  x00409216: number | undefined;

  // Real World Value Intercept
  RealWorldValueIntercept: number | undefined;
  x00409224: number | undefined;

  // Real World Value Slope
  RealWorldValueSlope: number | undefined;
  x00409225: number | undefined;

  // Findings Flag (Trial)
  FindingsFlagTrial: string | undefined;
  x0040a007: string | undefined;

  // Relationship Type
  RelationshipType: string | undefined;
  x0040a010: string | undefined;

  // Findings Sequence (Trial)
  FindingsSequenceTrial: Array<Dataset> | undefined;
  x0040a020: Array<Dataset> | undefined;

  // Findings Group UID (Trial)
  FindingsGroupUIDTrial: string | undefined;
  x0040a021: string | undefined;

  // Referenced Findings Group UID (Trial)
  ReferencedFindingsGroupUIDTrial: string | undefined;
  x0040a022: string | undefined;

  // Findings Group Recording Date (Trial)
  FindingsGroupRecordingDateTrial: Date | undefined;
  x0040a023: Date | undefined;

  // Findings Group Recording Time (Trial)
  FindingsGroupRecordingTimeTrial: string | undefined;
  x0040a024: string | undefined;

  // Findings Source Category Code Sequence (Trial)
  FindingsSourceCategoryCodeSequenceTrial: Array<Dataset> | undefined;
  x0040a026: Array<Dataset> | undefined;

  // Verifying Organization
  VerifyingOrganization: string | undefined;
  x0040a027: string | undefined;

  // Documenting Organization Identifier Code Sequence (Trial)
  DocumentingOrganizationIdentifierCodeSequenceTrial: Array<Dataset> | undefined;
  x0040a028: Array<Dataset> | undefined;

  // Verification DateTime
  VerificationDateTime: string | undefined;
  x0040a030: string | undefined;

  // Observation DateTime
  ObservationDateTime: string | undefined;
  x0040a032: string | undefined;

  // Value Type
  ValueType: string | undefined;
  x0040a040: string | undefined;

  // Concept Name Code Sequence
  ConceptNameCodeSequence: Array<Dataset> | undefined;
  x0040a043: Array<Dataset> | undefined;

  // Measurement Precision Description (Trial)
  MeasurementPrecisionDescriptionTrial: string | undefined;
  x0040a047: string | undefined;

  // Continuity Of Content
  ContinuityOfContent: string | undefined;
  x0040a050: string | undefined;

  // Urgency or Priority Alerts (Trial)
  UrgencyOrPriorityAlertsTrial: Array<string> | undefined;
  x0040a057: Array<string> | undefined;

  // Sequencing Indicator (Trial)
  SequencingIndicatorTrial: string | undefined;
  x0040a060: string | undefined;

  // Document Identifier Code Sequence (Trial)
  DocumentIdentifierCodeSequenceTrial: Array<Dataset> | undefined;
  x0040a066: Array<Dataset> | undefined;

  // Document Author (Trial)
  DocumentAuthorTrial: any | undefined;
  x0040a067: any | undefined;

  // Document Author Identifier Code Sequence (Trial)
  DocumentAuthorIdentifierCodeSequenceTrial: Array<Dataset> | undefined;
  x0040a068: Array<Dataset> | undefined;

  // Identifier Code Sequence (Trial)
  IdentifierCodeSequenceTrial: Array<Dataset> | undefined;
  x0040a070: Array<Dataset> | undefined;

  // Verifying Observer Sequence
  VerifyingObserverSequence: Array<Dataset> | undefined;
  x0040a073: Array<Dataset> | undefined;

  // Verifying Observer Name
  VerifyingObserverName: any | undefined;
  x0040a075: any | undefined;

  // Documenting Observer Identifier Code Sequence (Trial)
  DocumentingObserverIdentifierCodeSequenceTrial: Array<Dataset> | undefined;
  x0040a076: Array<Dataset> | undefined;

  // Author Observer Sequence
  AuthorObserverSequence: Array<Dataset> | undefined;
  x0040a078: Array<Dataset> | undefined;

  // Participant Sequence
  ParticipantSequence: Array<Dataset> | undefined;
  x0040a07a: Array<Dataset> | undefined;

  // Custodial Organization Sequence
  CustodialOrganizationSequence: Array<Dataset> | undefined;
  x0040a07c: Array<Dataset> | undefined;

  // Participation Type
  ParticipationType: string | undefined;
  x0040a080: string | undefined;

  // Participation DateTime
  ParticipationDateTime: string | undefined;
  x0040a082: string | undefined;

  // Observer Type
  ObserverType: string | undefined;
  x0040a084: string | undefined;

  // Procedure Identifier Code Sequence (Trial)
  ProcedureIdentifierCodeSequenceTrial: Array<Dataset> | undefined;
  x0040a085: Array<Dataset> | undefined;

  // Verifying Observer Identification Code Sequence
  VerifyingObserverIdentificationCodeSequence: Array<Dataset> | undefined;
  x0040a088: Array<Dataset> | undefined;

  // Equivalent CDA Document Sequence
  EquivalentCDADocumentSequence: Array<Dataset> | undefined;
  x0040a090: Array<Dataset> | undefined;

  // Referenced Waveform Channels
  ReferencedWaveformChannels: Array<number> | undefined;
  x0040a0b0: Array<number> | undefined;

  // Date of Document or Verbal Transaction (Trial)
  DateOfDocumentOrVerbalTransactionTrial: Date | undefined;
  x0040a110: Date | undefined;

  // Time of Document Creation or Verbal Transaction (Trial)
  TimeOfDocumentCreationOrVerbalTransactionTrial: string | undefined;
  x0040a112: string | undefined;

  // DateTime
  DateTime: string | undefined;
  x0040a120: string | undefined;

  // Date
  Date: Date | undefined;
  x0040a121: Date | undefined;

  // Time
  Time: string | undefined;
  x0040a122: string | undefined;

  // Person Name
  PersonName: any | undefined;
  x0040a123: any | undefined;

  // UID
  UID: string | undefined;
  x0040a124: string | undefined;

  // Report Status ID (Trial)
  ReportStatusIDTrial: Array<string> | undefined;
  x0040a125: Array<string> | undefined;

  // Temporal Range Type
  TemporalRangeType: string | undefined;
  x0040a130: string | undefined;

  // Referenced Sample Positions
  ReferencedSamplePositions: Array<number> | undefined;
  x0040a132: Array<number> | undefined;

  // Referenced Frame Numbers
  ReferencedFrameNumbers: Array<number> | undefined;
  x0040a136: Array<number> | undefined;

  // Referenced Time Offsets
  ReferencedTimeOffsets: Array<number> | undefined;
  x0040a138: Array<number> | undefined;

  // Referenced DateTime
  ReferencedDateTime: Array<string> | undefined;
  x0040a13a: Array<string> | undefined;

  // Floating Point Value
  FloatingPointValue: Array<number> | undefined;
  x0040a161: Array<number> | undefined;

  // Rational Numerator Value
  RationalNumeratorValue: Array<number> | undefined;
  x0040a162: Array<number> | undefined;

  // Rational Denominator Value
  RationalDenominatorValue: Array<number> | undefined;
  x0040a163: Array<number> | undefined;

  // Observation Category Code Sequence (Trial)
  ObservationCategoryCodeSequenceTrial: Array<Dataset> | undefined;
  x0040a167: Array<Dataset> | undefined;

  // Concept Code Sequence
  ConceptCodeSequence: Array<Dataset> | undefined;
  x0040a168: Array<Dataset> | undefined;

  // Purpose of Reference Code Sequence
  PurposeOfReferenceCodeSequence: Array<Dataset> | undefined;
  x0040a170: Array<Dataset> | undefined;

  // Observation UID
  ObservationUID: string | undefined;
  x0040a171: string | undefined;

  // Referenced Observation UID (Trial)
  ReferencedObservationUIDTrial: string | undefined;
  x0040a172: string | undefined;

  // Referenced Observation Class (Trial)
  ReferencedObservationClassTrial: string | undefined;
  x0040a173: string | undefined;

  // Referenced Object Observation Class (Trial)
  ReferencedObjectObservationClassTrial: string | undefined;
  x0040a174: string | undefined;

  // Annotation Group Number
  AnnotationGroupNumber: number | undefined;
  x0040a180: number | undefined;

  // Observation Date (Trial)
  ObservationDateTrial: Date | undefined;
  x0040a192: Date | undefined;

  // Observation Time (Trial)
  ObservationTimeTrial: string | undefined;
  x0040a193: string | undefined;

  // Measurement Automation (Trial)
  MeasurementAutomationTrial: string | undefined;
  x0040a194: string | undefined;

  // Modifier Code Sequence
  ModifierCodeSequence: Array<Dataset> | undefined;
  x0040a195: Array<Dataset> | undefined;

  // Coordinates Set Geometric Type (Trial)
  CoordinatesSetGeometricTypeTrial: string | undefined;
  x0040a290: string | undefined;

  // Algorithm Code Sequence (Trial)
  AlgorithmCodeSequenceTrial: Array<Dataset> | undefined;
  x0040a296: Array<Dataset> | undefined;

  // Pixel Coordinates Set (Trial)
  PixelCoordinatesSetTrial: Array<number> | undefined;
  x0040a29a: Array<number> | undefined;

  // Measured Value Sequence
  MeasuredValueSequence: Array<Dataset> | undefined;
  x0040a300: Array<Dataset> | undefined;

  // Numeric Value Qualifier Code Sequence
  NumericValueQualifierCodeSequence: Array<Dataset> | undefined;
  x0040a301: Array<Dataset> | undefined;

  // Current Observer (Trial)
  CurrentObserverTrial: any | undefined;
  x0040a307: any | undefined;

  // Numeric Value
  NumericValue: Array<number> | undefined;
  x0040a30a: Array<number> | undefined;

  // Referenced Accession Sequence (Trial)
  ReferencedAccessionSequenceTrial: Array<Dataset> | undefined;
  x0040a313: Array<Dataset> | undefined;

  // Procedure Context Sequence (Trial)
  ProcedureContextSequenceTrial: Array<Dataset> | undefined;
  x0040a340: Array<Dataset> | undefined;

  // Verbal Source (Trial)
  VerbalSourceTrial: any | undefined;
  x0040a352: any | undefined;

  // Telephone Number (Trial)
  TelephoneNumberTrial: string | undefined;
  x0040a354: string | undefined;

  // Verbal Source Identifier Code Sequence (Trial)
  VerbalSourceIdentifierCodeSequenceTrial: Array<Dataset> | undefined;
  x0040a358: Array<Dataset> | undefined;

  // Predecessor Documents Sequence
  PredecessorDocumentsSequence: Array<Dataset> | undefined;
  x0040a360: Array<Dataset> | undefined;

  // Referenced Request Sequence
  ReferencedRequestSequence: Array<Dataset> | undefined;
  x0040a370: Array<Dataset> | undefined;

  // Performed Procedure Code Sequence
  PerformedProcedureCodeSequence: Array<Dataset> | undefined;
  x0040a372: Array<Dataset> | undefined;

  // Current Requested Procedure Evidence Sequence
  CurrentRequestedProcedureEvidenceSequence: Array<Dataset> | undefined;
  x0040a375: Array<Dataset> | undefined;

  // Report Detail Sequence (Trial)
  ReportDetailSequenceTrial: Array<Dataset> | undefined;
  x0040a380: Array<Dataset> | undefined;

  // Pertinent Other Evidence Sequence
  PertinentOtherEvidenceSequence: Array<Dataset> | undefined;
  x0040a385: Array<Dataset> | undefined;

  // HL7 Structured Document Reference Sequence
  HL7StructuredDocumentReferenceSequence: Array<Dataset> | undefined;
  x0040a390: Array<Dataset> | undefined;

  // Observation Subject UID (Trial)
  ObservationSubjectUIDTrial: string | undefined;
  x0040a402: string | undefined;

  // Observation Subject Class (Trial)
  ObservationSubjectClassTrial: string | undefined;
  x0040a403: string | undefined;

  // Observation Subject Type Code Sequence (Trial)
  ObservationSubjectTypeCodeSequenceTrial: Array<Dataset> | undefined;
  x0040a404: Array<Dataset> | undefined;

  // Completion Flag
  CompletionFlag: string | undefined;
  x0040a491: string | undefined;

  // Completion Flag Description
  CompletionFlagDescription: string | undefined;
  x0040a492: string | undefined;

  // Verification Flag
  VerificationFlag: string | undefined;
  x0040a493: string | undefined;

  // Archive Requested
  ArchiveRequested: string | undefined;
  x0040a494: string | undefined;

  // Preliminary Flag
  PreliminaryFlag: string | undefined;
  x0040a496: string | undefined;

  // Content Template Sequence
  ContentTemplateSequence: Array<Dataset> | undefined;
  x0040a504: Array<Dataset> | undefined;

  // Identical Documents Sequence
  IdenticalDocumentsSequence: Array<Dataset> | undefined;
  x0040a525: Array<Dataset> | undefined;

  // Observation Subject Context Flag (Trial)
  ObservationSubjectContextFlagTrial: string | undefined;
  x0040a600: string | undefined;

  // Observer Context Flag (Trial)
  ObserverContextFlagTrial: string | undefined;
  x0040a601: string | undefined;

  // Procedure Context Flag (Trial)
  ProcedureContextFlagTrial: string | undefined;
  x0040a603: string | undefined;

  // Content Sequence
  ContentSequence: Array<Dataset> | undefined;
  x0040a730: Array<Dataset> | undefined;

  // Relationship Sequence (Trial)
  RelationshipSequenceTrial: Array<Dataset> | undefined;
  x0040a731: Array<Dataset> | undefined;

  // Relationship Type Code Sequence (Trial)
  RelationshipTypeCodeSequenceTrial: Array<Dataset> | undefined;
  x0040a732: Array<Dataset> | undefined;

  // Language Code Sequence (Trial)
  LanguageCodeSequenceTrial: Array<Dataset> | undefined;
  x0040a744: Array<Dataset> | undefined;

  // Waveform Annotation Sequence
  WaveformAnnotationSequence: Array<Dataset> | undefined;
  x0040b020: Array<Dataset> | undefined;

  // Template Identifier
  TemplateIdentifier: string | undefined;
  x0040db00: string | undefined;

  // Template Version
  TemplateVersion: string | undefined;
  x0040db06: string | undefined;

  // Template Local Version
  TemplateLocalVersion: string | undefined;
  x0040db07: string | undefined;

  // Template Extension Flag
  TemplateExtensionFlag: string | undefined;
  x0040db0b: string | undefined;

  // Template Extension Organization UID
  TemplateExtensionOrganizationUID: string | undefined;
  x0040db0c: string | undefined;

  // Template Extension Creator UID
  TemplateExtensionCreatorUID: string | undefined;
  x0040db0d: string | undefined;

  // Referenced Content Item Identifier
  ReferencedContentItemIdentifier: Array<number> | undefined;
  x0040db73: Array<number> | undefined;

  // HL7 Document Effective Time
  HL7DocumentEffectiveTime: string | undefined;
  x0040e004: string | undefined;

  // HL7 Document Type Code Sequence
  HL7DocumentTypeCodeSequence: Array<Dataset> | undefined;
  x0040e006: Array<Dataset> | undefined;

  // Document Class Code Sequence
  DocumentClassCodeSequence: Array<Dataset> | undefined;
  x0040e008: Array<Dataset> | undefined;

  // Retrieve Location UID
  RetrieveLocationUID: string | undefined;
  x0040e011: string | undefined;

  // Type of Instances
  TypeOfInstances: string | undefined;
  x0040e020: string | undefined;

  // DICOM Retrieval Sequence
  DICOMRetrievalSequence: Array<Dataset> | undefined;
  x0040e021: Array<Dataset> | undefined;

  // DICOM Media Retrieval Sequence
  DICOMMediaRetrievalSequence: Array<Dataset> | undefined;
  x0040e022: Array<Dataset> | undefined;

  // WADO Retrieval Sequence
  WADORetrievalSequence: Array<Dataset> | undefined;
  x0040e023: Array<Dataset> | undefined;

  // XDS Retrieval Sequence
  XDSRetrievalSequence: Array<Dataset> | undefined;
  x0040e024: Array<Dataset> | undefined;

  // Repository Unique ID
  RepositoryUniqueID: string | undefined;
  x0040e030: string | undefined;

  // Home Community ID
  HomeCommunityID: string | undefined;
  x0040e031: string | undefined;

  // MIME Type of Encapsulated Document
  MIMETypeOfEncapsulatedDocument: string | undefined;
  x00420012: string | undefined;

  // Source Instance Sequence
  SourceInstanceSequence: Array<Dataset> | undefined;
  x00420013: Array<Dataset> | undefined;

  // List of MIME Types
  ListOfMIMETypes: Array<string> | undefined;
  x00420014: Array<string> | undefined;

  // Substance Administration Approval
  SubstanceAdministrationApproval: string | undefined;
  x00440002: string | undefined;

  // Approval Status DateTime
  ApprovalStatusDateTime: string | undefined;
  x00440004: string | undefined;

  // Product Type Code Sequence
  ProductTypeCodeSequence: Array<Dataset> | undefined;
  x00440007: Array<Dataset> | undefined;

  // Product Name
  ProductName: Array<string> | undefined;
  x00440008: Array<string> | undefined;

  // Product Lot Identifier
  ProductLotIdentifier: string | undefined;
  x0044000a: string | undefined;

  // Product Expiration DateTime
  ProductExpirationDateTime: string | undefined;
  x0044000b: string | undefined;

  // Substance Administration DateTime
  SubstanceAdministrationDateTime: string | undefined;
  x00440010: string | undefined;

  // Substance Administration Notes
  SubstanceAdministrationNotes: string | undefined;
  x00440011: string | undefined;

  // Substance Administration Device ID
  SubstanceAdministrationDeviceID: string | undefined;
  x00440012: string | undefined;

  // Product Parameter Sequence
  ProductParameterSequence: Array<Dataset> | undefined;
  x00440013: Array<Dataset> | undefined;

  // Substance Administration Parameter Sequence
  SubstanceAdministrationParameterSequence: Array<Dataset> | undefined;
  x00440019: Array<Dataset> | undefined;

  // Lens Description
  LensDescription: string | undefined;
  x00460012: string | undefined;

  // Right Lens Sequence
  RightLensSequence: Array<Dataset> | undefined;
  x00460014: Array<Dataset> | undefined;

  // Left Lens Sequence
  LeftLensSequence: Array<Dataset> | undefined;
  x00460015: Array<Dataset> | undefined;

  // Unspecified Laterality Lens Sequence
  UnspecifiedLateralityLensSequence: Array<Dataset> | undefined;
  x00460016: Array<Dataset> | undefined;

  // Cylinder Sequence
  CylinderSequence: Array<Dataset> | undefined;
  x00460018: Array<Dataset> | undefined;

  // Prism Sequence
  PrismSequence: Array<Dataset> | undefined;
  x00460028: Array<Dataset> | undefined;

  // Horizontal Prism Power
  HorizontalPrismPower: number | undefined;
  x00460030: number | undefined;

  // Horizontal Prism Base
  HorizontalPrismBase: string | undefined;
  x00460032: string | undefined;

  // Vertical Prism Power
  VerticalPrismPower: number | undefined;
  x00460034: number | undefined;

  // Vertical Prism Base
  VerticalPrismBase: string | undefined;
  x00460036: string | undefined;

  // Lens Segment Type
  LensSegmentType: string | undefined;
  x00460038: string | undefined;

  // Optical Transmittance
  OpticalTransmittance: number | undefined;
  x00460040: number | undefined;

  // Channel Width
  ChannelWidth: number | undefined;
  x00460042: number | undefined;

  // Pupil Size
  PupilSize: number | undefined;
  x00460044: number | undefined;

  // Corneal Size
  CornealSize: number | undefined;
  x00460046: number | undefined;

  // Autorefraction Right Eye Sequence
  AutorefractionRightEyeSequence: Array<Dataset> | undefined;
  x00460050: Array<Dataset> | undefined;

  // Autorefraction Left Eye Sequence
  AutorefractionLeftEyeSequence: Array<Dataset> | undefined;
  x00460052: Array<Dataset> | undefined;

  // Distance Pupillary Distance
  DistancePupillaryDistance: number | undefined;
  x00460060: number | undefined;

  // Near Pupillary Distance
  NearPupillaryDistance: number | undefined;
  x00460062: number | undefined;

  // Intermediate Pupillary Distance
  IntermediatePupillaryDistance: number | undefined;
  x00460063: number | undefined;

  // Other Pupillary Distance
  OtherPupillaryDistance: number | undefined;
  x00460064: number | undefined;

  // Keratometry Right Eye Sequence
  KeratometryRightEyeSequence: Array<Dataset> | undefined;
  x00460070: Array<Dataset> | undefined;

  // Keratometry Left Eye Sequence
  KeratometryLeftEyeSequence: Array<Dataset> | undefined;
  x00460071: Array<Dataset> | undefined;

  // Steep Keratometric Axis Sequence
  SteepKeratometricAxisSequence: Array<Dataset> | undefined;
  x00460074: Array<Dataset> | undefined;

  // Radius of Curvature
  RadiusOfCurvature: number | undefined;
  x00460075: number | undefined;

  // Keratometric Power
  KeratometricPower: number | undefined;
  x00460076: number | undefined;

  // Keratometric Axis
  KeratometricAxis: number | undefined;
  x00460077: number | undefined;

  // Flat Keratometric Axis Sequence
  FlatKeratometricAxisSequence: Array<Dataset> | undefined;
  x00460080: Array<Dataset> | undefined;

  // Background Color
  BackgroundColor: string | undefined;
  x00460092: string | undefined;

  // Optotype
  Optotype: string | undefined;
  x00460094: string | undefined;

  // Optotype Presentation
  OptotypePresentation: string | undefined;
  x00460095: string | undefined;

  // Subjective Refraction Right Eye Sequence
  SubjectiveRefractionRightEyeSequence: Array<Dataset> | undefined;
  x00460097: Array<Dataset> | undefined;

  // Subjective Refraction Left Eye Sequence
  SubjectiveRefractionLeftEyeSequence: Array<Dataset> | undefined;
  x00460098: Array<Dataset> | undefined;

  // Add Near Sequence
  AddNearSequence: Array<Dataset> | undefined;
  x00460100: Array<Dataset> | undefined;

  // Add Intermediate Sequence
  AddIntermediateSequence: Array<Dataset> | undefined;
  x00460101: Array<Dataset> | undefined;

  // Add Other Sequence
  AddOtherSequence: Array<Dataset> | undefined;
  x00460102: Array<Dataset> | undefined;

  // Add Power
  AddPower: number | undefined;
  x00460104: number | undefined;

  // Viewing Distance
  ViewingDistance: number | undefined;
  x00460106: number | undefined;

  // Visual Acuity Type Code Sequence
  VisualAcuityTypeCodeSequence: Array<Dataset> | undefined;
  x00460121: Array<Dataset> | undefined;

  // Visual Acuity Right Eye Sequence
  VisualAcuityRightEyeSequence: Array<Dataset> | undefined;
  x00460122: Array<Dataset> | undefined;

  // Visual Acuity Left Eye Sequence
  VisualAcuityLeftEyeSequence: Array<Dataset> | undefined;
  x00460123: Array<Dataset> | undefined;

  // Visual Acuity Both Eyes Open Sequence
  VisualAcuityBothEyesOpenSequence: Array<Dataset> | undefined;
  x00460124: Array<Dataset> | undefined;

  // Viewing Distance Type
  ViewingDistanceType: string | undefined;
  x00460125: string | undefined;

  // Visual Acuity Modifiers
  VisualAcuityModifiers: Array<Uint8Array> | undefined;
  x00460135: Array<Uint8Array> | undefined;

  // Decimal Visual Acuity
  DecimalVisualAcuity: number | undefined;
  x00460137: number | undefined;

  // Optotype Detailed Definition
  OptotypeDetailedDefinition: string | undefined;
  x00460139: string | undefined;

  // Referenced Refractive Measurements Sequence
  ReferencedRefractiveMeasurementsSequence: Array<Dataset> | undefined;
  x00460145: Array<Dataset> | undefined;

  // Sphere Power
  SpherePower: number | undefined;
  x00460146: number | undefined;

  // Cylinder Power
  CylinderPower: number | undefined;
  x00460147: number | undefined;

  // Corneal Topography Surface
  CornealTopographySurface: string | undefined;
  x00460201: string | undefined;

  // Corneal Vertex Location
  CornealVertexLocation: Array<number> | undefined;
  x00460202: Array<number> | undefined;

  // Pupil Centroid X-Coordinate
  PupilCentroidXCoordinate: number | undefined;
  x00460203: number | undefined;

  // Pupil Centroid Y-Coordinate
  PupilCentroidYCoordinate: number | undefined;
  x00460204: number | undefined;

  // Equivalent Pupil Radius
  EquivalentPupilRadius: number | undefined;
  x00460205: number | undefined;

  // Corneal Topography Map Type Code Sequence
  CornealTopographyMapTypeCodeSequence: Array<Dataset> | undefined;
  x00460207: Array<Dataset> | undefined;

  // Vertices of the Outline of Pupil
  VerticesOfTheOutlineOfPupil: Array<number> | undefined;
  x00460208: Array<number> | undefined;

  // Corneal Topography Mapping Normals Sequence
  CornealTopographyMappingNormalsSequence: Array<Dataset> | undefined;
  x00460210: Array<Dataset> | undefined;

  // Maximum Corneal Curvature Sequence
  MaximumCornealCurvatureSequence: Array<Dataset> | undefined;
  x00460211: Array<Dataset> | undefined;

  // Maximum Corneal Curvature
  MaximumCornealCurvature: number | undefined;
  x00460212: number | undefined;

  // Maximum Corneal Curvature Location
  MaximumCornealCurvatureLocation: Array<number> | undefined;
  x00460213: Array<number> | undefined;

  // Minimum Keratometric Sequence
  MinimumKeratometricSequence: Array<Dataset> | undefined;
  x00460215: Array<Dataset> | undefined;

  // Simulated Keratometric Cylinder Sequence
  SimulatedKeratometricCylinderSequence: Array<Dataset> | undefined;
  x00460218: Array<Dataset> | undefined;

  // Average Corneal Power
  AverageCornealPower: number | undefined;
  x00460220: number | undefined;

  // Corneal I-S Value
  CornealISValue: number | undefined;
  x00460224: number | undefined;

  // Analyzed Area
  AnalyzedArea: number | undefined;
  x00460227: number | undefined;

  // Surface Regularity Index
  SurfaceRegularityIndex: number | undefined;
  x00460230: number | undefined;

  // Surface Asymmetry Index
  SurfaceAsymmetryIndex: number | undefined;
  x00460232: number | undefined;

  // Corneal Eccentricity Index
  CornealEccentricityIndex: number | undefined;
  x00460234: number | undefined;

  // Keratoconus Prediction Index
  KeratoconusPredictionIndex: number | undefined;
  x00460236: number | undefined;

  // Decimal Potential Visual Acuity
  DecimalPotentialVisualAcuity: number | undefined;
  x00460238: number | undefined;

  // Corneal Topography Map Quality Evaluation
  CornealTopographyMapQualityEvaluation: string | undefined;
  x00460242: string | undefined;

  // Source Image Corneal Processed Data Sequence
  SourceImageCornealProcessedDataSequence: Array<Dataset> | undefined;
  x00460244: Array<Dataset> | undefined;

  // Corneal Point Location
  CornealPointLocation: Array<number> | undefined;
  x00460247: Array<number> | undefined;

  // Corneal Point Estimated
  CornealPointEstimated: string | undefined;
  x00460248: string | undefined;

  // Axial Power
  AxialPower: number | undefined;
  x00460249: number | undefined;

  // Tangential Power
  TangentialPower: number | undefined;
  x00460250: number | undefined;

  // Refractive Power
  RefractivePower: number | undefined;
  x00460251: number | undefined;

  // Relative Elevation
  RelativeElevation: number | undefined;
  x00460252: number | undefined;

  // Corneal Wavefront
  CornealWavefront: number | undefined;
  x00460253: number | undefined;

  // Imaged Volume Width
  ImagedVolumeWidth: number | undefined;
  x00480001: number | undefined;

  // Imaged Volume Height
  ImagedVolumeHeight: number | undefined;
  x00480002: number | undefined;

  // Imaged Volume Depth
  ImagedVolumeDepth: number | undefined;
  x00480003: number | undefined;

  // Total Pixel Matrix Columns
  TotalPixelMatrixColumns: number | undefined;
  x00480006: number | undefined;

  // Total Pixel Matrix Rows
  TotalPixelMatrixRows: number | undefined;
  x00480007: number | undefined;

  // Total Pixel Matrix Origin Sequence
  TotalPixelMatrixOriginSequence: Array<Dataset> | undefined;
  x00480008: Array<Dataset> | undefined;

  // Specimen Label in Image
  SpecimenLabelInImage: string | undefined;
  x00480010: string | undefined;

  // Focus Method
  FocusMethod: string | undefined;
  x00480011: string | undefined;

  // Extended Depth of Field
  ExtendedDepthOfField: string | undefined;
  x00480012: string | undefined;

  // Number of Focal Planes
  NumberOfFocalPlanes: number | undefined;
  x00480013: number | undefined;

  // Distance Between Focal Planes
  DistanceBetweenFocalPlanes: number | undefined;
  x00480014: number | undefined;

  // Recommended Absent Pixel CIELab Value
  RecommendedAbsentPixelCIELabValue: Array<number> | undefined;
  x00480015: Array<number> | undefined;

  // Illuminator Type Code Sequence
  IlluminatorTypeCodeSequence: Array<Dataset> | undefined;
  x00480100: Array<Dataset> | undefined;

  // Image Orientation (Slide)
  ImageOrientationSlide: Array<number> | undefined;
  x00480102: Array<number> | undefined;

  // Optical Path Sequence
  OpticalPathSequence: Array<Dataset> | undefined;
  x00480105: Array<Dataset> | undefined;

  // Optical Path Identifier
  OpticalPathIdentifier: string | undefined;
  x00480106: string | undefined;

  // Illumination Color Code Sequence
  IlluminationColorCodeSequence: Array<Dataset> | undefined;
  x00480108: Array<Dataset> | undefined;

  // Specimen Reference Sequence
  SpecimenReferenceSequence: Array<Dataset> | undefined;
  x00480110: Array<Dataset> | undefined;

  // Condenser Lens Power
  CondenserLensPower: number | undefined;
  x00480111: number | undefined;

  // Objective Lens Power
  ObjectiveLensPower: number | undefined;
  x00480112: number | undefined;

  // Objective Lens Numerical Aperture
  ObjectiveLensNumericalAperture: number | undefined;
  x00480113: number | undefined;

  // Palette Color Lookup Table Sequence
  PaletteColorLookupTableSequence: Array<Dataset> | undefined;
  x00480120: Array<Dataset> | undefined;

  // Referenced Image Navigation Sequence
  ReferencedImageNavigationSequence: Array<Dataset> | undefined;
  x00480200: Array<Dataset> | undefined;

  // Top Left Hand Corner of Localizer Area
  TopLeftHandCornerOfLocalizerArea: Array<number> | undefined;
  x00480201: Array<number> | undefined;

  // Bottom Right Hand Corner of Localizer Area
  BottomRightHandCornerOfLocalizerArea: Array<number> | undefined;
  x00480202: Array<number> | undefined;

  // Optical Path Identification Sequence
  OpticalPathIdentificationSequence: Array<Dataset> | undefined;
  x00480207: Array<Dataset> | undefined;

  // Plane Position (Slide) Sequence
  PlanePositionSlideSequence: Array<Dataset> | undefined;
  x0048021a: Array<Dataset> | undefined;

  // Column Position In Total Image Pixel Matrix
  ColumnPositionInTotalImagePixelMatrix: number | undefined;
  x0048021e: number | undefined;

  // Row Position In Total Image Pixel Matrix
  RowPositionInTotalImagePixelMatrix: number | undefined;
  x0048021f: number | undefined;

  // Pixel Origin Interpretation
  PixelOriginInterpretation: string | undefined;
  x00480301: string | undefined;

  // Calibration Image
  CalibrationImage: string | undefined;
  x00500004: string | undefined;

  // Device Sequence
  DeviceSequence: Array<Dataset> | undefined;
  x00500010: Array<Dataset> | undefined;

  // Container Component Type Code Sequence
  ContainerComponentTypeCodeSequence: Array<Dataset> | undefined;
  x00500012: Array<Dataset> | undefined;

  // Container Component Thickness
  ContainerComponentThickness: number | undefined;
  x00500013: number | undefined;

  // Device Length
  DeviceLength: number | undefined;
  x00500014: number | undefined;

  // Container Component Width
  ContainerComponentWidth: number | undefined;
  x00500015: number | undefined;

  // Device Diameter
  DeviceDiameter: number | undefined;
  x00500016: number | undefined;

  // Device Diameter Units
  DeviceDiameterUnits: string | undefined;
  x00500017: string | undefined;

  // Device Volume
  DeviceVolume: number | undefined;
  x00500018: number | undefined;

  // Inter-Marker Distance
  InterMarkerDistance: number | undefined;
  x00500019: number | undefined;

  // Container Component Material
  ContainerComponentMaterial: string | undefined;
  x0050001a: string | undefined;

  // Container Component ID
  ContainerComponentID: string | undefined;
  x0050001b: string | undefined;

  // Container Component Length
  ContainerComponentLength: number | undefined;
  x0050001c: number | undefined;

  // Container Component Diameter
  ContainerComponentDiameter: number | undefined;
  x0050001d: number | undefined;

  // Container Component Description
  ContainerComponentDescription: string | undefined;
  x0050001e: string | undefined;

  // Device Description
  DeviceDescription: string | undefined;
  x00500020: string | undefined;

  // Contrast/Bolus Ingredient Percent by Volume
  ContrastBolusIngredientPercentByVolume: number | undefined;
  x00520001: number | undefined;

  // OCT Focal Distance
  OCTFocalDistance: number | undefined;
  x00520002: number | undefined;

  // Beam Spot Size
  BeamSpotSize: number | undefined;
  x00520003: number | undefined;

  // Effective Refractive Index
  EffectiveRefractiveIndex: number | undefined;
  x00520004: number | undefined;

  // OCT Acquisition Domain
  OCTAcquisitionDomain: string | undefined;
  x00520006: string | undefined;

  // OCT Optical Center Wavelength
  OCTOpticalCenterWavelength: number | undefined;
  x00520007: number | undefined;

  // Axial Resolution
  AxialResolution: number | undefined;
  x00520008: number | undefined;

  // Ranging Depth
  RangingDepth: number | undefined;
  x00520009: number | undefined;

  // A-line Rate
  ALineRate: number | undefined;
  x00520011: number | undefined;

  // A-lines Per Frame
  ALinesPerFrame: number | undefined;
  x00520012: number | undefined;

  // Catheter Rotational Rate
  CatheterRotationalRate: number | undefined;
  x00520013: number | undefined;

  // A-line Pixel Spacing
  ALinePixelSpacing: number | undefined;
  x00520014: number | undefined;

  // Mode of Percutaneous Access Sequence
  ModeOfPercutaneousAccessSequence: Array<Dataset> | undefined;
  x00520016: Array<Dataset> | undefined;

  // Intravascular OCT Frame Type Sequence
  IntravascularOCTFrameTypeSequence: Array<Dataset> | undefined;
  x00520025: Array<Dataset> | undefined;

  // OCT Z Offset Applied
  OCTZOffsetApplied: string | undefined;
  x00520026: string | undefined;

  // Intravascular Frame Content Sequence
  IntravascularFrameContentSequence: Array<Dataset> | undefined;
  x00520027: Array<Dataset> | undefined;

  // Intravascular Longitudinal Distance
  IntravascularLongitudinalDistance: number | undefined;
  x00520028: number | undefined;

  // Intravascular OCT Frame Content Sequence
  IntravascularOCTFrameContentSequence: Array<Dataset> | undefined;
  x00520029: Array<Dataset> | undefined;

  // OCT Z Offset Correction
  OCTZOffsetCorrection: Uint8Array | undefined;
  x00520030: Uint8Array | undefined;

  // Catheter Direction of Rotation
  CatheterDirectionOfRotation: string | undefined;
  x00520031: string | undefined;

  // Seam Line Location
  SeamLineLocation: number | undefined;
  x00520033: number | undefined;

  // First A-line Location
  FirstALineLocation: number | undefined;
  x00520034: number | undefined;

  // Seam Line Index
  SeamLineIndex: number | undefined;
  x00520036: number | undefined;

  // Number of Padded A-lines
  NumberOfPaddedALines: number | undefined;
  x00520038: number | undefined;

  // Interpolation Type
  InterpolationType: string | undefined;
  x00520039: string | undefined;

  // Refractive Index Applied
  RefractiveIndexApplied: string | undefined;
  x0052003a: string | undefined;

  // Energy Window Vector
  EnergyWindowVector: Array<number> | undefined;
  x00540010: Array<number> | undefined;

  // Number of Energy Windows
  NumberOfEnergyWindows: number | undefined;
  x00540011: number | undefined;

  // Energy Window Information Sequence
  EnergyWindowInformationSequence: Array<Dataset> | undefined;
  x00540012: Array<Dataset> | undefined;

  // Energy Window Range Sequence
  EnergyWindowRangeSequence: Array<Dataset> | undefined;
  x00540013: Array<Dataset> | undefined;

  // Energy Window Lower Limit
  EnergyWindowLowerLimit: number | undefined;
  x00540014: number | undefined;

  // Energy Window Upper Limit
  EnergyWindowUpperLimit: number | undefined;
  x00540015: number | undefined;

  // Radiopharmaceutical Information Sequence
  RadiopharmaceuticalInformationSequence: Array<Dataset> | undefined;
  x00540016: Array<Dataset> | undefined;

  // Residual Syringe Counts
  ResidualSyringeCounts: number | undefined;
  x00540017: number | undefined;

  // Energy Window Name
  EnergyWindowName: string | undefined;
  x00540018: string | undefined;

  // Detector Vector
  DetectorVector: Array<number> | undefined;
  x00540020: Array<number> | undefined;

  // Number of Detectors
  NumberOfDetectors: number | undefined;
  x00540021: number | undefined;

  // Detector Information Sequence
  DetectorInformationSequence: Array<Dataset> | undefined;
  x00540022: Array<Dataset> | undefined;

  // Phase Vector
  PhaseVector: Array<number> | undefined;
  x00540030: Array<number> | undefined;

  // Number of Phases
  NumberOfPhases: number | undefined;
  x00540031: number | undefined;

  // Phase Information Sequence
  PhaseInformationSequence: Array<Dataset> | undefined;
  x00540032: Array<Dataset> | undefined;

  // Number of Frames in Phase
  NumberOfFramesInPhase: number | undefined;
  x00540033: number | undefined;

  // Phase Delay
  PhaseDelay: number | undefined;
  x00540036: number | undefined;

  // Pause Between Frames
  PauseBetweenFrames: number | undefined;
  x00540038: number | undefined;

  // Phase Description
  PhaseDescription: string | undefined;
  x00540039: string | undefined;

  // Rotation Vector
  RotationVector: Array<number> | undefined;
  x00540050: Array<number> | undefined;

  // Number of Rotations
  NumberOfRotations: number | undefined;
  x00540051: number | undefined;

  // Rotation Information Sequence
  RotationInformationSequence: Array<Dataset> | undefined;
  x00540052: Array<Dataset> | undefined;

  // Number of Frames in Rotation
  NumberOfFramesInRotation: number | undefined;
  x00540053: number | undefined;

  // R-R Interval Vector
  RRIntervalVector: Array<number> | undefined;
  x00540060: Array<number> | undefined;

  // Number of R-R Intervals
  NumberOfRRIntervals: number | undefined;
  x00540061: number | undefined;

  // Gated Information Sequence
  GatedInformationSequence: Array<Dataset> | undefined;
  x00540062: Array<Dataset> | undefined;

  // Data Information Sequence
  DataInformationSequence: Array<Dataset> | undefined;
  x00540063: Array<Dataset> | undefined;

  // Time Slot Vector
  TimeSlotVector: Array<number> | undefined;
  x00540070: Array<number> | undefined;

  // Number of Time Slots
  NumberOfTimeSlots: number | undefined;
  x00540071: number | undefined;

  // Time Slot Information Sequence
  TimeSlotInformationSequence: Array<Dataset> | undefined;
  x00540072: Array<Dataset> | undefined;

  // Time Slot Time
  TimeSlotTime: number | undefined;
  x00540073: number | undefined;

  // Slice Vector
  SliceVector: Array<number> | undefined;
  x00540080: Array<number> | undefined;

  // Number of Slices
  NumberOfSlices: number | undefined;
  x00540081: number | undefined;

  // Angular View Vector
  AngularViewVector: Array<number> | undefined;
  x00540090: Array<number> | undefined;

  // Time Slice Vector
  TimeSliceVector: Array<number> | undefined;
  x00540100: Array<number> | undefined;

  // Number of Time Slices
  NumberOfTimeSlices: number | undefined;
  x00540101: number | undefined;

  // Start Angle
  StartAngle: number | undefined;
  x00540200: number | undefined;

  // Type of Detector Motion
  TypeOfDetectorMotion: string | undefined;
  x00540202: string | undefined;

  // Trigger Vector
  TriggerVector: Array<number> | undefined;
  x00540210: Array<number> | undefined;

  // Number of Triggers in Phase
  NumberOfTriggersInPhase: number | undefined;
  x00540211: number | undefined;

  // View Code Sequence
  ViewCodeSequence: Array<Dataset> | undefined;
  x00540220: Array<Dataset> | undefined;

  // View Modifier Code Sequence
  ViewModifierCodeSequence: Array<Dataset> | undefined;
  x00540222: Array<Dataset> | undefined;

  // Radionuclide Code Sequence
  RadionuclideCodeSequence: Array<Dataset> | undefined;
  x00540300: Array<Dataset> | undefined;

  // Administration Route Code Sequence
  AdministrationRouteCodeSequence: Array<Dataset> | undefined;
  x00540302: Array<Dataset> | undefined;

  // Radiopharmaceutical Code Sequence
  RadiopharmaceuticalCodeSequence: Array<Dataset> | undefined;
  x00540304: Array<Dataset> | undefined;

  // Calibration Data Sequence
  CalibrationDataSequence: Array<Dataset> | undefined;
  x00540306: Array<Dataset> | undefined;

  // Energy Window Number
  EnergyWindowNumber: number | undefined;
  x00540308: number | undefined;

  // Image ID
  ImageID: string | undefined;
  x00540400: string | undefined;

  // Patient Orientation Code Sequence
  PatientOrientationCodeSequence: Array<Dataset> | undefined;
  x00540410: Array<Dataset> | undefined;

  // Patient Orientation Modifier Code Sequence
  PatientOrientationModifierCodeSequence: Array<Dataset> | undefined;
  x00540412: Array<Dataset> | undefined;

  // Patient Gantry Relationship Code Sequence
  PatientGantryRelationshipCodeSequence: Array<Dataset> | undefined;
  x00540414: Array<Dataset> | undefined;

  // Slice Progression Direction
  SliceProgressionDirection: string | undefined;
  x00540500: string | undefined;

  // Scan Progression Direction
  ScanProgressionDirection: string | undefined;
  x00540501: string | undefined;

  // Series Type
  SeriesType: Array<string> | undefined;
  x00541000: Array<string> | undefined;

  // Units
  Units: string | undefined;
  x00541001: string | undefined;

  // Counts Source
  CountsSource: string | undefined;
  x00541002: string | undefined;

  // Reprojection Method
  ReprojectionMethod: string | undefined;
  x00541004: string | undefined;

  // SUV Type
  SUVType: string | undefined;
  x00541006: string | undefined;

  // Randoms Correction Method
  RandomsCorrectionMethod: string | undefined;
  x00541100: string | undefined;

  // Attenuation Correction Method
  AttenuationCorrectionMethod: string | undefined;
  x00541101: string | undefined;

  // Decay Correction
  DecayCorrection: string | undefined;
  x00541102: string | undefined;

  // Reconstruction Method
  ReconstructionMethod: string | undefined;
  x00541103: string | undefined;

  // Detector Lines of Response Used
  DetectorLinesOfResponseUsed: string | undefined;
  x00541104: string | undefined;

  // Scatter Correction Method
  ScatterCorrectionMethod: string | undefined;
  x00541105: string | undefined;

  // Axial Acceptance
  AxialAcceptance: number | undefined;
  x00541200: number | undefined;

  // Axial Mash
  AxialMash: Array<number> | undefined;
  x00541201: Array<number> | undefined;

  // Transverse Mash
  TransverseMash: number | undefined;
  x00541202: number | undefined;

  // Detector Element Size
  DetectorElementSize: Array<number> | undefined;
  x00541203: Array<number> | undefined;

  // Coincidence Window Width
  CoincidenceWindowWidth: number | undefined;
  x00541210: number | undefined;

  // Secondary Counts Type
  SecondaryCountsType: Array<string> | undefined;
  x00541220: Array<string> | undefined;

  // Frame Reference Time
  FrameReferenceTime: number | undefined;
  x00541300: number | undefined;

  // Primary (Prompts) Counts Accumulated
  PrimaryPromptsCountsAccumulated: number | undefined;
  x00541310: number | undefined;

  // Secondary Counts Accumulated
  SecondaryCountsAccumulated: Array<number> | undefined;
  x00541311: Array<number> | undefined;

  // Slice Sensitivity Factor
  SliceSensitivityFactor: number | undefined;
  x00541320: number | undefined;

  // Decay Factor
  DecayFactor: number | undefined;
  x00541321: number | undefined;

  // Dose Calibration Factor
  DoseCalibrationFactor: number | undefined;
  x00541322: number | undefined;

  // Scatter Fraction Factor
  ScatterFractionFactor: number | undefined;
  x00541323: number | undefined;

  // Dead Time Factor
  DeadTimeFactor: number | undefined;
  x00541324: number | undefined;

  // Image Index
  ImageIndex: number | undefined;
  x00541330: number | undefined;

  // Counts Included
  CountsIncluded: Array<string> | undefined;
  x00541400: Array<string> | undefined;

  // Dead Time Correction Flag
  DeadTimeCorrectionFlag: string | undefined;
  x00541401: string | undefined;

  // Histogram Sequence
  HistogramSequence: Array<Dataset> | undefined;
  x00603000: Array<Dataset> | undefined;

  // Histogram Number of Bins
  HistogramNumberOfBins: number | undefined;
  x00603002: number | undefined;

  // Histogram First Bin Value
  HistogramFirstBinValue: number | undefined;
  x00603004: number | undefined;

  // Histogram Last Bin Value
  HistogramLastBinValue: number | undefined;
  x00603006: number | undefined;

  // Histogram Bin Width
  HistogramBinWidth: number | undefined;
  x00603008: number | undefined;

  // Histogram Explanation
  HistogramExplanation: string | undefined;
  x00603010: string | undefined;

  // Histogram Data
  HistogramData: Array<number> | undefined;
  x00603020: Array<number> | undefined;

  // Segmentation Type
  SegmentationType: string | undefined;
  x00620001: string | undefined;

  // Segment Sequence
  SegmentSequence: Array<Dataset> | undefined;
  x00620002: Array<Dataset> | undefined;

  // Segmented Property Category Code Sequence
  SegmentedPropertyCategoryCodeSequence: Array<Dataset> | undefined;
  x00620003: Array<Dataset> | undefined;

  // Segment Number
  SegmentNumber: number | undefined;
  x00620004: number | undefined;

  // Segment Label
  SegmentLabel: string | undefined;
  x00620005: string | undefined;

  // Segment Algorithm Type
  SegmentAlgorithmType: string | undefined;
  x00620008: string | undefined;

  // Segment Algorithm Name
  SegmentAlgorithmName: string | undefined;
  x00620009: string | undefined;

  // Segment Identification Sequence
  SegmentIdentificationSequence: Array<Dataset> | undefined;
  x0062000a: Array<Dataset> | undefined;

  // Referenced Segment Number
  ReferencedSegmentNumber: Array<number> | undefined;
  x0062000b: Array<number> | undefined;

  // Recommended Display Grayscale Value
  RecommendedDisplayGrayscaleValue: number | undefined;
  x0062000c: number | undefined;

  // Recommended Display CIELab Value
  RecommendedDisplayCIELabValue: Array<number> | undefined;
  x0062000d: Array<number> | undefined;

  // Maximum Fractional Value
  MaximumFractionalValue: number | undefined;
  x0062000e: number | undefined;

  // Segmented Property Type Code Sequence
  SegmentedPropertyTypeCodeSequence: Array<Dataset> | undefined;
  x0062000f: Array<Dataset> | undefined;

  // Segmentation Fractional Type
  SegmentationFractionalType: string | undefined;
  x00620010: string | undefined;

  // Segmented Property Type Modifier Code Sequence
  SegmentedPropertyTypeModifierCodeSequence: Array<Dataset> | undefined;
  x00620011: Array<Dataset> | undefined;

  // Used Segments Sequence
  UsedSegmentsSequence: Array<Dataset> | undefined;
  x00620012: Array<Dataset> | undefined;

  // Deformable Registration Sequence
  DeformableRegistrationSequence: Array<Dataset> | undefined;
  x00640002: Array<Dataset> | undefined;

  // Source Frame of Reference UID
  SourceFrameOfReferenceUID: string | undefined;
  x00640003: string | undefined;

  // Deformable Registration Grid Sequence
  DeformableRegistrationGridSequence: Array<Dataset> | undefined;
  x00640005: Array<Dataset> | undefined;

  // Grid Dimensions
  GridDimensions: Array<number> | undefined;
  x00640007: Array<number> | undefined;

  // Grid Resolution
  GridResolution: Array<number> | undefined;
  x00640008: Array<number> | undefined;

  // Pre Deformation Matrix Registration Sequence
  PreDeformationMatrixRegistrationSequence: Array<Dataset> | undefined;
  x0064000f: Array<Dataset> | undefined;

  // Post Deformation Matrix Registration Sequence
  PostDeformationMatrixRegistrationSequence: Array<Dataset> | undefined;
  x00640010: Array<Dataset> | undefined;

  // Number of Surfaces
  NumberOfSurfaces: number | undefined;
  x00660001: number | undefined;

  // Surface Sequence
  SurfaceSequence: Array<Dataset> | undefined;
  x00660002: Array<Dataset> | undefined;

  // Surface Number
  SurfaceNumber: number | undefined;
  x00660003: number | undefined;

  // Surface Processing
  SurfaceProcessing: string | undefined;
  x00660009: string | undefined;

  // Surface Processing Ratio
  SurfaceProcessingRatio: number | undefined;
  x0066000a: number | undefined;

  // Surface Processing Description
  SurfaceProcessingDescription: string | undefined;
  x0066000b: string | undefined;

  // Recommended Presentation Opacity
  RecommendedPresentationOpacity: number | undefined;
  x0066000c: number | undefined;

  // Recommended Presentation Type
  RecommendedPresentationType: string | undefined;
  x0066000d: string | undefined;

  // Finite Volume
  FiniteVolume: string | undefined;
  x0066000e: string | undefined;

  // Manifold
  Manifold: string | undefined;
  x00660010: string | undefined;

  // Surface Points Sequence
  SurfacePointsSequence: Array<Dataset> | undefined;
  x00660011: Array<Dataset> | undefined;

  // Surface Points Normals Sequence
  SurfacePointsNormalsSequence: Array<Dataset> | undefined;
  x00660012: Array<Dataset> | undefined;

  // Surface Mesh Primitives Sequence
  SurfaceMeshPrimitivesSequence: Array<Dataset> | undefined;
  x00660013: Array<Dataset> | undefined;

  // Number of Surface Points
  NumberOfSurfacePoints: number | undefined;
  x00660015: number | undefined;

  // Point Position Accuracy
  PointPositionAccuracy: Array<number> | undefined;
  x00660017: Array<number> | undefined;

  // Mean Point Distance
  MeanPointDistance: number | undefined;
  x00660018: number | undefined;

  // Maximum Point Distance
  MaximumPointDistance: number | undefined;
  x00660019: number | undefined;

  // Points Bounding Box Coordinates
  PointsBoundingBoxCoordinates: Array<number> | undefined;
  x0066001a: Array<number> | undefined;

  // Axis of Rotation
  AxisOfRotation: Array<number> | undefined;
  x0066001b: Array<number> | undefined;

  // Center of Rotation
  CenterOfRotation: Array<number> | undefined;
  x0066001c: Array<number> | undefined;

  // Number of Vectors
  NumberOfVectors: number | undefined;
  x0066001e: number | undefined;

  // Vector Dimensionality
  VectorDimensionality: number | undefined;
  x0066001f: number | undefined;

  // Vector Accuracy
  VectorAccuracy: Array<number> | undefined;
  x00660020: Array<number> | undefined;

  // Triangle Strip Sequence
  TriangleStripSequence: Array<Dataset> | undefined;
  x00660026: Array<Dataset> | undefined;

  // Triangle Fan Sequence
  TriangleFanSequence: Array<Dataset> | undefined;
  x00660027: Array<Dataset> | undefined;

  // Line Sequence
  LineSequence: Array<Dataset> | undefined;
  x00660028: Array<Dataset> | undefined;

  // Surface Count
  SurfaceCount: number | undefined;
  x0066002a: number | undefined;

  // Referenced Surface Sequence
  ReferencedSurfaceSequence: Array<Dataset> | undefined;
  x0066002b: Array<Dataset> | undefined;

  // Referenced Surface Number
  ReferencedSurfaceNumber: number | undefined;
  x0066002c: number | undefined;

  // Segment Surface Generation Algorithm Identification Sequence
  SegmentSurfaceGenerationAlgorithmIdentificationSequence: Array<Dataset> | undefined;
  x0066002d: Array<Dataset> | undefined;

  // Segment Surface Source Instance Sequence
  SegmentSurfaceSourceInstanceSequence: Array<Dataset> | undefined;
  x0066002e: Array<Dataset> | undefined;

  // Algorithm Family Code Sequence
  AlgorithmFamilyCodeSequence: Array<Dataset> | undefined;
  x0066002f: Array<Dataset> | undefined;

  // Algorithm Name Code Sequence
  AlgorithmNameCodeSequence: Array<Dataset> | undefined;
  x00660030: Array<Dataset> | undefined;

  // Algorithm Version
  AlgorithmVersion: string | undefined;
  x00660031: string | undefined;

  // Facet Sequence
  FacetSequence: Array<Dataset> | undefined;
  x00660034: Array<Dataset> | undefined;

  // Surface Processing Algorithm Identification Sequence
  SurfaceProcessingAlgorithmIdentificationSequence: Array<Dataset> | undefined;
  x00660035: Array<Dataset> | undefined;

  // Algorithm Name
  AlgorithmName: string | undefined;
  x00660036: string | undefined;

  // Recommended Point Radius
  RecommendedPointRadius: number | undefined;
  x00660037: number | undefined;

  // Recommended Line Thickness
  RecommendedLineThickness: number | undefined;
  x00660038: number | undefined;

  // Implant Size
  ImplantSize: string | undefined;
  x00686210: string | undefined;

  // Implant Template Version
  ImplantTemplateVersion: string | undefined;
  x00686221: string | undefined;

  // Replaced Implant Template Sequence
  ReplacedImplantTemplateSequence: Array<Dataset> | undefined;
  x00686222: Array<Dataset> | undefined;

  // Implant Type
  ImplantType: string | undefined;
  x00686223: string | undefined;

  // Derivation Implant Template Sequence
  DerivationImplantTemplateSequence: Array<Dataset> | undefined;
  x00686224: Array<Dataset> | undefined;

  // Original Implant Template Sequence
  OriginalImplantTemplateSequence: Array<Dataset> | undefined;
  x00686225: Array<Dataset> | undefined;

  // Effective DateTime
  EffectiveDateTime: string | undefined;
  x00686226: string | undefined;

  // Implant Target Anatomy Sequence
  ImplantTargetAnatomySequence: Array<Dataset> | undefined;
  x00686230: Array<Dataset> | undefined;

  // Information From Manufacturer Sequence
  InformationFromManufacturerSequence: Array<Dataset> | undefined;
  x00686260: Array<Dataset> | undefined;

  // Notification From Manufacturer Sequence
  NotificationFromManufacturerSequence: Array<Dataset> | undefined;
  x00686265: Array<Dataset> | undefined;

  // Information Issue DateTime
  InformationIssueDateTime: string | undefined;
  x00686270: string | undefined;

  // Implant Regulatory Disapproval Code Sequence
  ImplantRegulatoryDisapprovalCodeSequence: Array<Dataset> | undefined;
  x006862a0: Array<Dataset> | undefined;

  // Overall Template Spatial Tolerance
  OverallTemplateSpatialTolerance: number | undefined;
  x006862a5: number | undefined;

  // HPGL Document Sequence
  HPGLDocumentSequence: Array<Dataset> | undefined;
  x006862c0: Array<Dataset> | undefined;

  // HPGL Document ID
  HPGLDocumentID: number | undefined;
  x006862d0: number | undefined;

  // HPGL Document Label
  HPGLDocumentLabel: string | undefined;
  x006862d5: string | undefined;

  // View Orientation Code Sequence
  ViewOrientationCodeSequence: Array<Dataset> | undefined;
  x006862e0: Array<Dataset> | undefined;

  // View Orientation Modifier
  ViewOrientationModifier: Array<number> | undefined;
  x006862f0: Array<number> | undefined;

  // HPGL Document Scaling
  HPGLDocumentScaling: number | undefined;
  x006862f2: number | undefined;

  // HPGL Contour Pen Number
  HPGLContourPenNumber: number | undefined;
  x00686310: number | undefined;

  // HPGL Pen Sequence
  HPGLPenSequence: Array<Dataset> | undefined;
  x00686320: Array<Dataset> | undefined;

  // HPGL Pen Number
  HPGLPenNumber: number | undefined;
  x00686330: number | undefined;

  // HPGL Pen Label
  HPGLPenLabel: string | undefined;
  x00686340: string | undefined;

  // Recommended Rotation Point
  RecommendedRotationPoint: Array<number> | undefined;
  x00686346: Array<number> | undefined;

  // Bounding Rectangle
  BoundingRectangle: Array<number> | undefined;
  x00686347: Array<number> | undefined;

  // Implant Template 3D Model Surface Number
  ImplantTemplate3DModelSurfaceNumber: Array<number> | undefined;
  x00686350: Array<number> | undefined;

  // Surface Model Description Sequence
  SurfaceModelDescriptionSequence: Array<Dataset> | undefined;
  x00686360: Array<Dataset> | undefined;

  // Surface Model Label
  SurfaceModelLabel: string | undefined;
  x00686380: string | undefined;

  // Surface Model Scaling Factor
  SurfaceModelScalingFactor: number | undefined;
  x00686390: number | undefined;

  // Materials Code Sequence
  MaterialsCodeSequence: Array<Dataset> | undefined;
  x006863a0: Array<Dataset> | undefined;

  // Coating Materials Code Sequence
  CoatingMaterialsCodeSequence: Array<Dataset> | undefined;
  x006863a4: Array<Dataset> | undefined;

  // Implant Type Code Sequence
  ImplantTypeCodeSequence: Array<Dataset> | undefined;
  x006863a8: Array<Dataset> | undefined;

  // Fixation Method Code Sequence
  FixationMethodCodeSequence: Array<Dataset> | undefined;
  x006863ac: Array<Dataset> | undefined;

  // Mating Feature Sets Sequence
  MatingFeatureSetsSequence: Array<Dataset> | undefined;
  x006863b0: Array<Dataset> | undefined;

  // Mating Feature Set ID
  MatingFeatureSetID: number | undefined;
  x006863c0: number | undefined;

  // Mating Feature Set Label
  MatingFeatureSetLabel: string | undefined;
  x006863d0: string | undefined;

  // Mating Feature Sequence
  MatingFeatureSequence: Array<Dataset> | undefined;
  x006863e0: Array<Dataset> | undefined;

  // Mating Feature ID
  MatingFeatureID: number | undefined;
  x006863f0: number | undefined;

  // Mating Feature Degree of Freedom Sequence
  MatingFeatureDegreeOfFreedomSequence: Array<Dataset> | undefined;
  x00686400: Array<Dataset> | undefined;

  // Degree of Freedom ID
  DegreeOfFreedomID: number | undefined;
  x00686410: number | undefined;

  // Degree of Freedom Type
  DegreeOfFreedomType: string | undefined;
  x00686420: string | undefined;

  // 2D Mating Feature Coordinates Sequence
  TwoDMatingFeatureCoordinatesSequence: Array<Dataset> | undefined;
  x00686430: Array<Dataset> | undefined;

  // Referenced HPGL Document ID
  ReferencedHPGLDocumentID: number | undefined;
  x00686440: number | undefined;

  // 2D Mating Point
  TwoDMatingPoint: Array<number> | undefined;
  x00686450: Array<number> | undefined;

  // 2D Mating Axes
  TwoDMatingAxes: Array<number> | undefined;
  x00686460: Array<number> | undefined;

  // 2D Degree of Freedom Sequence
  TwoDDegreeOfFreedomSequence: Array<Dataset> | undefined;
  x00686470: Array<Dataset> | undefined;

  // 3D Degree of Freedom Axis
  ThreeDDegreeOfFreedomAxis: Array<number> | undefined;
  x00686490: Array<number> | undefined;

  // Range of Freedom
  RangeOfFreedom: Array<number> | undefined;
  x006864a0: Array<number> | undefined;

  // 3D Mating Point
  ThreeDMatingPoint: Array<number> | undefined;
  x006864c0: Array<number> | undefined;

  // 3D Mating Axes
  ThreeDMatingAxes: Array<number> | undefined;
  x006864d0: Array<number> | undefined;

  // 2D Degree of Freedom Axis
  TwoDDegreeOfFreedomAxis: Array<number> | undefined;
  x006864f0: Array<number> | undefined;

  // Planning Landmark Point Sequence
  PlanningLandmarkPointSequence: Array<Dataset> | undefined;
  x00686500: Array<Dataset> | undefined;

  // Planning Landmark Line Sequence
  PlanningLandmarkLineSequence: Array<Dataset> | undefined;
  x00686510: Array<Dataset> | undefined;

  // Planning Landmark Plane Sequence
  PlanningLandmarkPlaneSequence: Array<Dataset> | undefined;
  x00686520: Array<Dataset> | undefined;

  // Planning Landmark ID
  PlanningLandmarkID: number | undefined;
  x00686530: number | undefined;

  // Planning Landmark Description
  PlanningLandmarkDescription: string | undefined;
  x00686540: string | undefined;

  // Planning Landmark Identification Code Sequence
  PlanningLandmarkIdentificationCodeSequence: Array<Dataset> | undefined;
  x00686545: Array<Dataset> | undefined;

  // 2D Point Coordinates Sequence
  TwoDPointCoordinatesSequence: Array<Dataset> | undefined;
  x00686550: Array<Dataset> | undefined;

  // 2D Point Coordinates
  TwoDPointCoordinates: Array<number> | undefined;
  x00686560: Array<number> | undefined;

  // 3D Point Coordinates
  ThreeDPointCoordinates: Array<number> | undefined;
  x00686590: Array<number> | undefined;

  // 2D Line Coordinates Sequence
  TwoDLineCoordinatesSequence: Array<Dataset> | undefined;
  x006865a0: Array<Dataset> | undefined;

  // 2D Line Coordinates
  TwoDLineCoordinates: Array<number> | undefined;
  x006865b0: Array<number> | undefined;

  // 3D Line Coordinates
  ThreeDLineCoordinates: Array<number> | undefined;
  x006865d0: Array<number> | undefined;

  // 2D Plane Coordinates Sequence
  TwoDPlaneCoordinatesSequence: Array<Dataset> | undefined;
  x006865e0: Array<Dataset> | undefined;

  // 2D Plane Intersection
  TwoDPlaneIntersection: Array<number> | undefined;
  x006865f0: Array<number> | undefined;

  // 3D Plane Origin
  ThreeDPlaneOrigin: Array<number> | undefined;
  x00686610: Array<number> | undefined;

  // 3D Plane Normal
  ThreeDPlaneNormal: Array<number> | undefined;
  x00686620: Array<number> | undefined;

  // Graphic Annotation Sequence
  GraphicAnnotationSequence: Array<Dataset> | undefined;
  x00700001: Array<Dataset> | undefined;

  // Graphic Layer
  GraphicLayer: string | undefined;
  x00700002: string | undefined;

  // Bounding Box Annotation Units
  BoundingBoxAnnotationUnits: string | undefined;
  x00700003: string | undefined;

  // Anchor Point Annotation Units
  AnchorPointAnnotationUnits: string | undefined;
  x00700004: string | undefined;

  // Graphic Annotation Units
  GraphicAnnotationUnits: string | undefined;
  x00700005: string | undefined;

  // Text Object Sequence
  TextObjectSequence: Array<Dataset> | undefined;
  x00700008: Array<Dataset> | undefined;

  // Graphic Object Sequence
  GraphicObjectSequence: Array<Dataset> | undefined;
  x00700009: Array<Dataset> | undefined;

  // Bounding Box Top Left Hand Corner
  BoundingBoxTopLeftHandCorner: Array<number> | undefined;
  x00700010: Array<number> | undefined;

  // Bounding Box Bottom Right Hand Corner
  BoundingBoxBottomRightHandCorner: Array<number> | undefined;
  x00700011: Array<number> | undefined;

  // Bounding Box Text Horizontal Justification
  BoundingBoxTextHorizontalJustification: string | undefined;
  x00700012: string | undefined;

  // Anchor Point
  AnchorPoint: Array<number> | undefined;
  x00700014: Array<number> | undefined;

  // Anchor Point Visibility
  AnchorPointVisibility: string | undefined;
  x00700015: string | undefined;

  // Graphic Dimensions
  GraphicDimensions: number | undefined;
  x00700020: number | undefined;

  // Number of Graphic Points
  NumberOfGraphicPoints: number | undefined;
  x00700021: number | undefined;

  // Graphic Data
  GraphicData: Array<number> | undefined;
  x00700022: Array<number> | undefined;

  // Graphic Type
  GraphicType: string | undefined;
  x00700023: string | undefined;

  // Graphic Filled
  GraphicFilled: string | undefined;
  x00700024: string | undefined;

  // Image Rotation (Retired)
  ImageRotationRetired: number | undefined;
  x00700040: number | undefined;

  // Image Horizontal Flip
  ImageHorizontalFlip: string | undefined;
  x00700041: string | undefined;

  // Image Rotation
  ImageRotation: number | undefined;
  x00700042: number | undefined;

  // Displayed Area Top Left Hand Corner (Trial)
  DisplayedAreaTopLeftHandCornerTrial: Array<number> | undefined;
  x00700050: Array<number> | undefined;

  // Displayed Area Bottom Right Hand Corner (Trial)
  DisplayedAreaBottomRightHandCornerTrial: Array<number> | undefined;
  x00700051: Array<number> | undefined;

  // Displayed Area Top Left Hand Corner
  DisplayedAreaTopLeftHandCorner: Array<number> | undefined;
  x00700052: Array<number> | undefined;

  // Displayed Area Bottom Right Hand Corner
  DisplayedAreaBottomRightHandCorner: Array<number> | undefined;
  x00700053: Array<number> | undefined;

  // Displayed Area Selection Sequence
  DisplayedAreaSelectionSequence: Array<Dataset> | undefined;
  x0070005a: Array<Dataset> | undefined;

  // Graphic Layer Sequence
  GraphicLayerSequence: Array<Dataset> | undefined;
  x00700060: Array<Dataset> | undefined;

  // Graphic Layer Order
  GraphicLayerOrder: number | undefined;
  x00700062: number | undefined;

  // Graphic Layer Recommended Display Grayscale Value
  GraphicLayerRecommendedDisplayGrayscaleValue: number | undefined;
  x00700066: number | undefined;

  // Graphic Layer Recommended Display RGB Value
  GraphicLayerRecommendedDisplayRGBValue: Array<number> | undefined;
  x00700067: Array<number> | undefined;

  // Graphic Layer Description
  GraphicLayerDescription: string | undefined;
  x00700068: string | undefined;

  // Content Label
  ContentLabel: string | undefined;
  x00700080: string | undefined;

  // Content Description
  ContentDescription: string | undefined;
  x00700081: string | undefined;

  // Presentation Creation Date
  PresentationCreationDate: Date | undefined;
  x00700082: Date | undefined;

  // Presentation Creation Time
  PresentationCreationTime: string | undefined;
  x00700083: string | undefined;

  // Content Creator's Name
  ContentCreatorName: any | undefined;
  x00700084: any | undefined;

  // Content Creator's Identification Code Sequence
  ContentCreatorIdentificationCodeSequence: Array<Dataset> | undefined;
  x00700086: Array<Dataset> | undefined;

  // Alternate Content Description Sequence
  AlternateContentDescriptionSequence: Array<Dataset> | undefined;
  x00700087: Array<Dataset> | undefined;

  // Presentation Size Mode
  PresentationSizeMode: string | undefined;
  x00700100: string | undefined;

  // Presentation Pixel Spacing
  PresentationPixelSpacing: Array<number> | undefined;
  x00700101: Array<number> | undefined;

  // Presentation Pixel Aspect Ratio
  PresentationPixelAspectRatio: Array<number> | undefined;
  x00700102: Array<number> | undefined;

  // Presentation Pixel Magnification Ratio
  PresentationPixelMagnificationRatio: number | undefined;
  x00700103: number | undefined;

  // Graphic Group Label
  GraphicGroupLabel: string | undefined;
  x00700207: string | undefined;

  // Compound Graphic Sequence
  CompoundGraphicSequence: Array<Dataset> | undefined;
  x00700209: Array<Dataset> | undefined;

  // Compound Graphic Instance ID
  CompoundGraphicInstanceID: number | undefined;
  x00700226: number | undefined;

  // Font Name
  FontName: string | undefined;
  x00700227: string | undefined;

  // Font Name Type
  FontNameType: string | undefined;
  x00700228: string | undefined;

  // CSS Font Name
  CSSFontName: string | undefined;
  x00700229: string | undefined;

  // Rotation Angle
  RotationAngle: number | undefined;
  x00700230: number | undefined;

  // Text Style Sequence
  TextStyleSequence: Array<Dataset> | undefined;
  x00700231: Array<Dataset> | undefined;

  // Line Style Sequence
  LineStyleSequence: Array<Dataset> | undefined;
  x00700232: Array<Dataset> | undefined;

  // Fill Style Sequence
  FillStyleSequence: Array<Dataset> | undefined;
  x00700233: Array<Dataset> | undefined;

  // Graphic Group Sequence
  GraphicGroupSequence: Array<Dataset> | undefined;
  x00700234: Array<Dataset> | undefined;

  // Text Color CIELab Value
  TextColorCIELabValue: Array<number> | undefined;
  x00700241: Array<number> | undefined;

  // Horizontal Alignment
  HorizontalAlignment: string | undefined;
  x00700242: string | undefined;

  // Vertical Alignment
  VerticalAlignment: string | undefined;
  x00700243: string | undefined;

  // Shadow Style
  ShadowStyle: string | undefined;
  x00700244: string | undefined;

  // Shadow Offset X
  ShadowOffsetX: number | undefined;
  x00700245: number | undefined;

  // Shadow Offset Y
  ShadowOffsetY: number | undefined;
  x00700246: number | undefined;

  // Shadow Color CIELab Value
  ShadowColorCIELabValue: Array<number> | undefined;
  x00700247: Array<number> | undefined;

  // Underlined
  Underlined: string | undefined;
  x00700248: string | undefined;

  // Bold
  Bold: string | undefined;
  x00700249: string | undefined;

  // Italic
  Italic: string | undefined;
  x00700250: string | undefined;

  // Pattern On Color CIELab Value
  PatternOnColorCIELabValue: Array<number> | undefined;
  x00700251: Array<number> | undefined;

  // Pattern Off Color CIELab Value
  PatternOffColorCIELabValue: Array<number> | undefined;
  x00700252: Array<number> | undefined;

  // Line Thickness
  LineThickness: number | undefined;
  x00700253: number | undefined;

  // Line Dashing Style
  LineDashingStyle: string | undefined;
  x00700254: string | undefined;

  // Line Pattern
  LinePattern: number | undefined;
  x00700255: number | undefined;

  // Fill Mode
  FillMode: string | undefined;
  x00700257: string | undefined;

  // Shadow Opacity
  ShadowOpacity: number | undefined;
  x00700258: number | undefined;

  // Gap Length
  GapLength: number | undefined;
  x00700261: number | undefined;

  // Diameter of Visibility
  DiameterOfVisibility: number | undefined;
  x00700262: number | undefined;

  // Rotation Point
  RotationPoint: Array<number> | undefined;
  x00700273: Array<number> | undefined;

  // Tick Alignment
  TickAlignment: string | undefined;
  x00700274: string | undefined;

  // Show Tick Label
  ShowTickLabel: string | undefined;
  x00700278: string | undefined;

  // Tick Label Alignment
  TickLabelAlignment: string | undefined;
  x00700279: string | undefined;

  // Compound Graphic Units
  CompoundGraphicUnits: string | undefined;
  x00700282: string | undefined;

  // Pattern On Opacity
  PatternOnOpacity: number | undefined;
  x00700284: number | undefined;

  // Pattern Off Opacity
  PatternOffOpacity: number | undefined;
  x00700285: number | undefined;

  // Major Ticks Sequence
  MajorTicksSequence: Array<Dataset> | undefined;
  x00700287: Array<Dataset> | undefined;

  // Tick Position
  TickPosition: number | undefined;
  x00700288: number | undefined;

  // Tick Label
  TickLabel: string | undefined;
  x00700289: string | undefined;

  // Compound Graphic Type
  CompoundGraphicType: string | undefined;
  x00700294: string | undefined;

  // Graphic Group ID
  GraphicGroupID: number | undefined;
  x00700295: number | undefined;

  // Shape Type
  ShapeType: string | undefined;
  x00700306: string | undefined;

  // Registration Sequence
  RegistrationSequence: Array<Dataset> | undefined;
  x00700308: Array<Dataset> | undefined;

  // Matrix Registration Sequence
  MatrixRegistrationSequence: Array<Dataset> | undefined;
  x00700309: Array<Dataset> | undefined;

  // Matrix Sequence
  MatrixSequence: Array<Dataset> | undefined;
  x0070030a: Array<Dataset> | undefined;

  // Frame of Reference Transformation Matrix Type
  FrameOfReferenceTransformationMatrixType: string | undefined;
  x0070030c: string | undefined;

  // Registration Type Code Sequence
  RegistrationTypeCodeSequence: Array<Dataset> | undefined;
  x0070030d: Array<Dataset> | undefined;

  // Fiducial Identifier
  FiducialIdentifier: string | undefined;
  x00700310: string | undefined;

  // Fiducial Identifier Code Sequence
  FiducialIdentifierCodeSequence: Array<Dataset> | undefined;
  x00700311: Array<Dataset> | undefined;

  // Contour Uncertainty Radius
  ContourUncertaintyRadius: number | undefined;
  x00700312: number | undefined;

  // Used Fiducials Sequence
  UsedFiducialsSequence: Array<Dataset> | undefined;
  x00700314: Array<Dataset> | undefined;

  // Graphic Coordinates Data Sequence
  GraphicCoordinatesDataSequence: Array<Dataset> | undefined;
  x00700318: Array<Dataset> | undefined;

  // Fiducial UID
  FiducialUID: string | undefined;
  x0070031a: string | undefined;

  // Fiducial Set Sequence
  FiducialSetSequence: Array<Dataset> | undefined;
  x0070031c: Array<Dataset> | undefined;

  // Fiducial Sequence
  FiducialSequence: Array<Dataset> | undefined;
  x0070031e: Array<Dataset> | undefined;

  // Graphic Layer Recommended Display CIELab Value
  GraphicLayerRecommendedDisplayCIELabValue: Array<number> | undefined;
  x00700401: Array<number> | undefined;

  // Blending Sequence
  BlendingSequence: Array<Dataset> | undefined;
  x00700402: Array<Dataset> | undefined;

  // Relative Opacity
  RelativeOpacity: number | undefined;
  x00700403: number | undefined;

  // Referenced Spatial Registration Sequence
  ReferencedSpatialRegistrationSequence: Array<Dataset> | undefined;
  x00700404: Array<Dataset> | undefined;

  // Blending Position
  BlendingPosition: string | undefined;
  x00700405: string | undefined;

  // Hanging Protocol Name
  HangingProtocolName: string | undefined;
  x00720002: string | undefined;

  // Hanging Protocol Description
  HangingProtocolDescription: string | undefined;
  x00720004: string | undefined;

  // Hanging Protocol Level
  HangingProtocolLevel: string | undefined;
  x00720006: string | undefined;

  // Hanging Protocol Creator
  HangingProtocolCreator: string | undefined;
  x00720008: string | undefined;

  // Hanging Protocol Creation DateTime
  HangingProtocolCreationDateTime: string | undefined;
  x0072000a: string | undefined;

  // Hanging Protocol Definition Sequence
  HangingProtocolDefinitionSequence: Array<Dataset> | undefined;
  x0072000c: Array<Dataset> | undefined;

  // Hanging Protocol User Identification Code Sequence
  HangingProtocolUserIdentificationCodeSequence: Array<Dataset> | undefined;
  x0072000e: Array<Dataset> | undefined;

  // Hanging Protocol User Group Name
  HangingProtocolUserGroupName: string | undefined;
  x00720010: string | undefined;

  // Source Hanging Protocol Sequence
  SourceHangingProtocolSequence: Array<Dataset> | undefined;
  x00720012: Array<Dataset> | undefined;

  // Number of Priors Referenced
  NumberOfPriorsReferenced: number | undefined;
  x00720014: number | undefined;

  // Image Sets Sequence
  ImageSetsSequence: Array<Dataset> | undefined;
  x00720020: Array<Dataset> | undefined;

  // Image Set Selector Sequence
  ImageSetSelectorSequence: Array<Dataset> | undefined;
  x00720022: Array<Dataset> | undefined;

  // Image Set Selector Usage Flag
  ImageSetSelectorUsageFlag: string | undefined;
  x00720024: string | undefined;

  // Selector Attribute
  SelectorAttribute: Uint16Array | undefined;
  x00720026: Uint16Array | undefined;

  // Selector Value Number
  SelectorValueNumber: number | undefined;
  x00720028: number | undefined;

  // Time Based Image Sets Sequence
  TimeBasedImageSetsSequence: Array<Dataset> | undefined;
  x00720030: Array<Dataset> | undefined;

  // Image Set Number
  ImageSetNumber: number | undefined;
  x00720032: number | undefined;

  // Image Set Selector Category
  ImageSetSelectorCategory: string | undefined;
  x00720034: string | undefined;

  // Relative Time
  RelativeTime: Array<number> | undefined;
  x00720038: Array<number> | undefined;

  // Relative Time Units
  RelativeTimeUnits: string | undefined;
  x0072003a: string | undefined;

  // Abstract Prior Value
  AbstractPriorValue: Array<Uint8Array> | undefined;
  x0072003c: Array<Uint8Array> | undefined;

  // Abstract Prior Code Sequence
  AbstractPriorCodeSequence: Array<Dataset> | undefined;
  x0072003e: Array<Dataset> | undefined;

  // Image Set Label
  ImageSetLabel: string | undefined;
  x00720040: string | undefined;

  // Selector Attribute VR
  SelectorAttributeVR: string | undefined;
  x00720050: string | undefined;

  // Selector Sequence Pointer
  SelectorSequencePointer: Array<Uint16Array> | undefined;
  x00720052: Array<Uint16Array> | undefined;

  // Selector Sequence Pointer Private Creator
  SelectorSequencePointerPrivateCreator: Array<string> | undefined;
  x00720054: Array<string> | undefined;

  // Selector Attribute Private Creator
  SelectorAttributePrivateCreator: string | undefined;
  x00720056: string | undefined;

  // Selector AT Value
  SelectorATValue: Array<Uint16Array> | undefined;
  x00720060: Array<Uint16Array> | undefined;

  // Selector CS Value
  SelectorCSValue: Array<string> | undefined;
  x00720062: Array<string> | undefined;

  // Selector IS Value
  SelectorISValue: Array<number> | undefined;
  x00720064: Array<number> | undefined;

  // Selector LO Value
  SelectorLOValue: Array<string> | undefined;
  x00720066: Array<string> | undefined;

  // Selector PN Value
  SelectorPNValue: Array<any> | undefined;
  x0072006a: Array<any> | undefined;

  // Selector SH Value
  SelectorSHValue: Array<string> | undefined;
  x0072006c: Array<string> | undefined;

  // Selector DS Value
  SelectorDSValue: Array<number> | undefined;
  x00720072: Array<number> | undefined;

  // Selector FD Value
  SelectorFDValue: Array<number> | undefined;
  x00720074: Array<number> | undefined;

  // Selector FL Value
  SelectorFLValue: Array<number> | undefined;
  x00720076: Array<number> | undefined;

  // Selector UL Value
  SelectorULValue: Array<number> | undefined;
  x00720078: Array<number> | undefined;

  // Selector US Value
  SelectorUSValue: Array<number> | undefined;
  x0072007a: Array<number> | undefined;

  // Selector SL Value
  SelectorSLValue: Array<number> | undefined;
  x0072007c: Array<number> | undefined;

  // Selector SS Value
  SelectorSSValue: Array<Uint8Array> | undefined;
  x0072007e: Array<Uint8Array> | undefined;

  // Selector Code Sequence Value
  SelectorCodeSequenceValue: Array<Dataset> | undefined;
  x00720080: Array<Dataset> | undefined;

  // Number of Screens
  NumberOfScreens: number | undefined;
  x00720100: number | undefined;

  // Nominal Screen Definition Sequence
  NominalScreenDefinitionSequence: Array<Dataset> | undefined;
  x00720102: Array<Dataset> | undefined;

  // Number of Vertical Pixels
  NumberOfVerticalPixels: number | undefined;
  x00720104: number | undefined;

  // Number of Horizontal Pixels
  NumberOfHorizontalPixels: number | undefined;
  x00720106: number | undefined;

  // Display Environment Spatial Position
  DisplayEnvironmentSpatialPosition: Array<number> | undefined;
  x00720108: Array<number> | undefined;

  // Screen Minimum Grayscale Bit Depth
  ScreenMinimumGrayscaleBitDepth: number | undefined;
  x0072010a: number | undefined;

  // Screen Minimum Color Bit Depth
  ScreenMinimumColorBitDepth: number | undefined;
  x0072010c: number | undefined;

  // Application Maximum Repaint Time
  ApplicationMaximumRepaintTime: number | undefined;
  x0072010e: number | undefined;

  // Display Sets Sequence
  DisplaySetsSequence: Array<Dataset> | undefined;
  x00720200: Array<Dataset> | undefined;

  // Display Set Number
  DisplaySetNumber: number | undefined;
  x00720202: number | undefined;

  // Display Set Label
  DisplaySetLabel: string | undefined;
  x00720203: string | undefined;

  // Display Set Presentation Group
  DisplaySetPresentationGroup: number | undefined;
  x00720204: number | undefined;

  // Display Set Presentation Group Description
  DisplaySetPresentationGroupDescription: string | undefined;
  x00720206: string | undefined;

  // Partial Data Display Handling
  PartialDataDisplayHandling: string | undefined;
  x00720208: string | undefined;

  // Synchronized Scrolling Sequence
  SynchronizedScrollingSequence: Array<Dataset> | undefined;
  x00720210: Array<Dataset> | undefined;

  // Display Set Scrolling Group
  DisplaySetScrollingGroup: Array<number> | undefined;
  x00720212: Array<number> | undefined;

  // Navigation Indicator Sequence
  NavigationIndicatorSequence: Array<Dataset> | undefined;
  x00720214: Array<Dataset> | undefined;

  // Navigation Display Set
  NavigationDisplaySet: number | undefined;
  x00720216: number | undefined;

  // Reference Display Sets
  ReferenceDisplaySets: Array<number> | undefined;
  x00720218: Array<number> | undefined;

  // Image Boxes Sequence
  ImageBoxesSequence: Array<Dataset> | undefined;
  x00720300: Array<Dataset> | undefined;

  // Image Box Number
  ImageBoxNumber: number | undefined;
  x00720302: number | undefined;

  // Image Box Layout Type
  ImageBoxLayoutType: string | undefined;
  x00720304: string | undefined;

  // Image Box Tile Horizontal Dimension
  ImageBoxTileHorizontalDimension: number | undefined;
  x00720306: number | undefined;

  // Image Box Tile Vertical Dimension
  ImageBoxTileVerticalDimension: number | undefined;
  x00720308: number | undefined;

  // Image Box Scroll Direction
  ImageBoxScrollDirection: string | undefined;
  x00720310: string | undefined;

  // Image Box Small Scroll Type
  ImageBoxSmallScrollType: string | undefined;
  x00720312: string | undefined;

  // Image Box Small Scroll Amount
  ImageBoxSmallScrollAmount: number | undefined;
  x00720314: number | undefined;

  // Image Box Large Scroll Type
  ImageBoxLargeScrollType: string | undefined;
  x00720316: string | undefined;

  // Image Box Large Scroll Amount
  ImageBoxLargeScrollAmount: number | undefined;
  x00720318: number | undefined;

  // Image Box Overlap Priority
  ImageBoxOverlapPriority: number | undefined;
  x00720320: number | undefined;

  // Cine Relative to Real-Time
  CineRelativeToRealTime: number | undefined;
  x00720330: number | undefined;

  // Filter Operations Sequence
  FilterOperationsSequence: Array<Dataset> | undefined;
  x00720400: Array<Dataset> | undefined;

  // Filter-by Category
  FilterByCategory: string | undefined;
  x00720402: string | undefined;

  // Filter-by Attribute Presence
  FilterByAttributePresence: string | undefined;
  x00720404: string | undefined;

  // Filter-by Operator
  FilterByOperator: string | undefined;
  x00720406: string | undefined;

  // Structured Display Background CIELab Value
  StructuredDisplayBackgroundCIELabValue: Array<number> | undefined;
  x00720420: Array<number> | undefined;

  // Empty Image Box CIELab Value
  EmptyImageBoxCIELabValue: Array<number> | undefined;
  x00720421: Array<number> | undefined;

  // Structured Display Image Box Sequence
  StructuredDisplayImageBoxSequence: Array<Dataset> | undefined;
  x00720422: Array<Dataset> | undefined;

  // Structured Display Text Box Sequence
  StructuredDisplayTextBoxSequence: Array<Dataset> | undefined;
  x00720424: Array<Dataset> | undefined;

  // Referenced First Frame Sequence
  ReferencedFirstFrameSequence: Array<Dataset> | undefined;
  x00720427: Array<Dataset> | undefined;

  // Image Box Synchronization Sequence
  ImageBoxSynchronizationSequence: Array<Dataset> | undefined;
  x00720430: Array<Dataset> | undefined;

  // Synchronized Image Box List
  SynchronizedImageBoxList: Array<number> | undefined;
  x00720432: Array<number> | undefined;

  // Type of Synchronization
  TypeOfSynchronization: string | undefined;
  x00720434: string | undefined;

  // Blending Operation Type
  BlendingOperationType: string | undefined;
  x00720500: string | undefined;

  // Reformatting Operation Type
  ReformattingOperationType: string | undefined;
  x00720510: string | undefined;

  // Reformatting Thickness
  ReformattingThickness: number | undefined;
  x00720512: number | undefined;

  // Reformatting Interval
  ReformattingInterval: number | undefined;
  x00720514: number | undefined;

  // Reformatting Operation Initial View Direction
  ReformattingOperationInitialViewDirection: string | undefined;
  x00720516: string | undefined;

  // 3D Rendering Type
  ThreeDRenderingType: Array<string> | undefined;
  x00720520: Array<string> | undefined;

  // Sorting Operations Sequence
  SortingOperationsSequence: Array<Dataset> | undefined;
  x00720600: Array<Dataset> | undefined;

  // Sort-by Category
  SortByCategory: string | undefined;
  x00720602: string | undefined;

  // Sorting Direction
  SortingDirection: string | undefined;
  x00720604: string | undefined;

  // Display Set Patient Orientation
  DisplaySetPatientOrientation: Array<string> | undefined;
  x00720700: Array<string> | undefined;

  // VOI Type
  VOIType: string | undefined;
  x00720702: string | undefined;

  // Pseudo-Color Type
  PseudoColorType: string | undefined;
  x00720704: string | undefined;

  // Pseudo-Color Palette Instance Reference Sequence
  PseudoColorPaletteInstanceReferenceSequence: Array<Dataset> | undefined;
  x00720705: Array<Dataset> | undefined;

  // Show Grayscale Inverted
  ShowGrayscaleInverted: string | undefined;
  x00720706: string | undefined;

  // Show Image True Size Flag
  ShowImageTrueSizeFlag: string | undefined;
  x00720710: string | undefined;

  // Show Graphic Annotation Flag
  ShowGraphicAnnotationFlag: string | undefined;
  x00720712: string | undefined;

  // Show Patient Demographics Flag
  ShowPatientDemographicsFlag: string | undefined;
  x00720714: string | undefined;

  // Show Acquisition Techniques Flag
  ShowAcquisitionTechniquesFlag: string | undefined;
  x00720716: string | undefined;

  // Display Set Horizontal Justification
  DisplaySetHorizontalJustification: string | undefined;
  x00720717: string | undefined;

  // Display Set Vertical Justification
  DisplaySetVerticalJustification: string | undefined;
  x00720718: string | undefined;

  // Continuation Start Meterset
  ContinuationStartMeterset: number | undefined;
  x00740120: number | undefined;

  // Continuation End Meterset
  ContinuationEndMeterset: number | undefined;
  x00740121: number | undefined;

  // Procedure Step State
  ProcedureStepState: string | undefined;
  x00741000: string | undefined;

  // Procedure Step Progress Information Sequence
  ProcedureStepProgressInformationSequence: Array<Dataset> | undefined;
  x00741002: Array<Dataset> | undefined;

  // Procedure Step Progress
  ProcedureStepProgress: number | undefined;
  x00741004: number | undefined;

  // Procedure Step Communications URI Sequence
  ProcedureStepCommunicationsURISequence: Array<Dataset> | undefined;
  x00741008: Array<Dataset> | undefined;

  // Contact Display Name
  ContactDisplayName: string | undefined;
  x0074100c: string | undefined;

  // Procedure Step Discontinuation Reason Code Sequence
  ProcedureStepDiscontinuationReasonCodeSequence: Array<Dataset> | undefined;
  x0074100e: Array<Dataset> | undefined;

  // Beam Task Sequence
  BeamTaskSequence: Array<Dataset> | undefined;
  x00741020: Array<Dataset> | undefined;

  // Beam Task Type
  BeamTaskType: string | undefined;
  x00741022: string | undefined;

  // Beam Order Index (Trial)
  BeamOrderIndexTrial: number | undefined;
  x00741024: number | undefined;

  // Autosequence Flag
  AutosequenceFlag: string | undefined;
  x00741025: string | undefined;

  // Table Top Vertical Adjusted Position
  TableTopVerticalAdjustedPosition: number | undefined;
  x00741026: number | undefined;

  // Table Top Longitudinal Adjusted Position
  TableTopLongitudinalAdjustedPosition: number | undefined;
  x00741027: number | undefined;

  // Table Top Lateral Adjusted Position
  TableTopLateralAdjustedPosition: number | undefined;
  x00741028: number | undefined;

  // Patient Support Adjusted Angle
  PatientSupportAdjustedAngle: number | undefined;
  x0074102a: number | undefined;

  // Table Top Eccentric Adjusted Angle
  TableTopEccentricAdjustedAngle: number | undefined;
  x0074102b: number | undefined;

  // Table Top Pitch Adjusted Angle
  TableTopPitchAdjustedAngle: number | undefined;
  x0074102c: number | undefined;

  // Table Top Roll Adjusted Angle
  TableTopRollAdjustedAngle: number | undefined;
  x0074102d: number | undefined;

  // Delivery Verification Image Sequence
  DeliveryVerificationImageSequence: Array<Dataset> | undefined;
  x00741030: Array<Dataset> | undefined;

  // Verification Image Timing
  VerificationImageTiming: string | undefined;
  x00741032: string | undefined;

  // Double Exposure Flag
  DoubleExposureFlag: string | undefined;
  x00741034: string | undefined;

  // Double Exposure Ordering
  DoubleExposureOrdering: string | undefined;
  x00741036: string | undefined;

  // Double Exposure Meterset (Trial)
  DoubleExposureMetersetTrial: number | undefined;
  x00741038: number | undefined;

  // Double Exposure Field Delta (Trial)
  DoubleExposureFieldDeltaTrial: Array<number> | undefined;
  x0074103a: Array<number> | undefined;

  // Related Reference RT Image Sequence
  RelatedReferenceRTImageSequence: Array<Dataset> | undefined;
  x00741040: Array<Dataset> | undefined;

  // General Machine Verification Sequence
  GeneralMachineVerificationSequence: Array<Dataset> | undefined;
  x00741042: Array<Dataset> | undefined;

  // Conventional Machine Verification Sequence
  ConventionalMachineVerificationSequence: Array<Dataset> | undefined;
  x00741044: Array<Dataset> | undefined;

  // Ion Machine Verification Sequence
  IonMachineVerificationSequence: Array<Dataset> | undefined;
  x00741046: Array<Dataset> | undefined;

  // Failed Attributes Sequence
  FailedAttributesSequence: Array<Dataset> | undefined;
  x00741048: Array<Dataset> | undefined;

  // Overridden Attributes Sequence
  OverriddenAttributesSequence: Array<Dataset> | undefined;
  x0074104a: Array<Dataset> | undefined;

  // Conventional Control Point Verification Sequence
  ConventionalControlPointVerificationSequence: Array<Dataset> | undefined;
  x0074104c: Array<Dataset> | undefined;

  // Ion Control Point Verification Sequence
  IonControlPointVerificationSequence: Array<Dataset> | undefined;
  x0074104e: Array<Dataset> | undefined;

  // Attribute Occurrence Sequence
  AttributeOccurrenceSequence: Array<Dataset> | undefined;
  x00741050: Array<Dataset> | undefined;

  // Attribute Occurrence Pointer
  AttributeOccurrencePointer: Uint16Array | undefined;
  x00741052: Uint16Array | undefined;

  // Attribute Item Selector
  AttributeItemSelector: number | undefined;
  x00741054: number | undefined;

  // Attribute Occurrence Private Creator
  AttributeOccurrencePrivateCreator: string | undefined;
  x00741056: string | undefined;

  // Selector Sequence Pointer Items
  SelectorSequencePointerItems: Array<number> | undefined;
  x00741057: Array<number> | undefined;

  // Scheduled Procedure Step Priority
  ScheduledProcedureStepPriority: string | undefined;
  x00741200: string | undefined;

  // Worklist Label
  WorklistLabel: string | undefined;
  x00741202: string | undefined;

  // Procedure Step Label
  ProcedureStepLabel: string | undefined;
  x00741204: string | undefined;

  // Scheduled Processing Parameters Sequence
  ScheduledProcessingParametersSequence: Array<Dataset> | undefined;
  x00741210: Array<Dataset> | undefined;

  // Performed Processing Parameters Sequence
  PerformedProcessingParametersSequence: Array<Dataset> | undefined;
  x00741212: Array<Dataset> | undefined;

  // Unified Procedure Step Performed Procedure Sequence
  UnifiedProcedureStepPerformedProcedureSequence: Array<Dataset> | undefined;
  x00741216: Array<Dataset> | undefined;

  // Related Procedure Step Sequence
  RelatedProcedureStepSequence: Array<Dataset> | undefined;
  x00741220: Array<Dataset> | undefined;

  // Procedure Step Relationship Type
  ProcedureStepRelationshipType: string | undefined;
  x00741222: string | undefined;

  // Replaced Procedure Step Sequence
  ReplacedProcedureStepSequence: Array<Dataset> | undefined;
  x00741224: Array<Dataset> | undefined;

  // Deletion Lock
  DeletionLock: string | undefined;
  x00741230: string | undefined;

  // Receiving AE
  ReceivingAE: string | undefined;
  x00741234: string | undefined;

  // Requesting AE
  RequestingAE: string | undefined;
  x00741236: string | undefined;

  // SCP Status
  SCPStatus: string | undefined;
  x00741242: string | undefined;

  // Subscription List Status
  SubscriptionListStatus: string | undefined;
  x00741244: string | undefined;

  // Unified Procedure Step List Status
  UnifiedProcedureStepListStatus: string | undefined;
  x00741246: string | undefined;

  // Beam Order Index
  BeamOrderIndex: number | undefined;
  x00741324: number | undefined;

  // Double Exposure Meterset
  DoubleExposureMeterset: number | undefined;
  x00741338: number | undefined;

  // Double Exposure Field Delta
  DoubleExposureFieldDelta: Array<number> | undefined;
  x0074133a: Array<number> | undefined;

  // Implant Assembly Template Name
  ImplantAssemblyTemplateName: string | undefined;
  x00760001: string | undefined;

  // Implant Assembly Template Issuer
  ImplantAssemblyTemplateIssuer: string | undefined;
  x00760003: string | undefined;

  // Implant Assembly Template Version
  ImplantAssemblyTemplateVersion: string | undefined;
  x00760006: string | undefined;

  // Replaced Implant Assembly Template Sequence
  ReplacedImplantAssemblyTemplateSequence: Array<Dataset> | undefined;
  x00760008: Array<Dataset> | undefined;

  // Implant Assembly Template Type
  ImplantAssemblyTemplateType: string | undefined;
  x0076000a: string | undefined;

  // Original Implant Assembly Template Sequence
  OriginalImplantAssemblyTemplateSequence: Array<Dataset> | undefined;
  x0076000c: Array<Dataset> | undefined;

  // Derivation Implant Assembly Template Sequence
  DerivationImplantAssemblyTemplateSequence: Array<Dataset> | undefined;
  x0076000e: Array<Dataset> | undefined;

  // Implant Assembly Template Target Anatomy Sequence
  ImplantAssemblyTemplateTargetAnatomySequence: Array<Dataset> | undefined;
  x00760010: Array<Dataset> | undefined;

  // Procedure Type Code Sequence
  ProcedureTypeCodeSequence: Array<Dataset> | undefined;
  x00760020: Array<Dataset> | undefined;

  // Surgical Technique
  SurgicalTechnique: string | undefined;
  x00760030: string | undefined;

  // Component Types Sequence
  ComponentTypesSequence: Array<Dataset> | undefined;
  x00760032: Array<Dataset> | undefined;

  // Component Type Code Sequence
  ComponentTypeCodeSequence: string | undefined;
  x00760034: string | undefined;

  // Exclusive Component Type
  ExclusiveComponentType: string | undefined;
  x00760036: string | undefined;

  // Mandatory Component Type
  MandatoryComponentType: string | undefined;
  x00760038: string | undefined;

  // Component Sequence
  ComponentSequence: Array<Dataset> | undefined;
  x00760040: Array<Dataset> | undefined;

  // Component ID
  ComponentID: number | undefined;
  x00760055: number | undefined;

  // Component Assembly Sequence
  ComponentAssemblySequence: Array<Dataset> | undefined;
  x00760060: Array<Dataset> | undefined;

  // Component 1 Referenced ID
  Component1ReferencedID: number | undefined;
  x00760070: number | undefined;

  // Component 1 Referenced Mating Feature Set ID
  Component1ReferencedMatingFeatureSetID: number | undefined;
  x00760080: number | undefined;

  // Component 1 Referenced Mating Feature ID
  Component1ReferencedMatingFeatureID: number | undefined;
  x00760090: number | undefined;

  // Component 2 Referenced ID
  Component2ReferencedID: number | undefined;
  x007600a0: number | undefined;

  // Component 2 Referenced Mating Feature Set ID
  Component2ReferencedMatingFeatureSetID: number | undefined;
  x007600b0: number | undefined;

  // Component 2 Referenced Mating Feature ID
  Component2ReferencedMatingFeatureID: number | undefined;
  x007600c0: number | undefined;

  // Implant Template Group Name
  ImplantTemplateGroupName: string | undefined;
  x00780001: string | undefined;

  // Implant Template Group Issuer
  ImplantTemplateGroupIssuer: string | undefined;
  x00780020: string | undefined;

  // Implant Template Group Version
  ImplantTemplateGroupVersion: string | undefined;
  x00780024: string | undefined;

  // Replaced Implant Template Group Sequence
  ReplacedImplantTemplateGroupSequence: Array<Dataset> | undefined;
  x00780026: Array<Dataset> | undefined;

  // Implant Template Group Target Anatomy Sequence
  ImplantTemplateGroupTargetAnatomySequence: Array<Dataset> | undefined;
  x00780028: Array<Dataset> | undefined;

  // Implant Template Group Members Sequence
  ImplantTemplateGroupMembersSequence: Array<Dataset> | undefined;
  x0078002a: Array<Dataset> | undefined;

  // Implant Template Group Member ID
  ImplantTemplateGroupMemberID: number | undefined;
  x0078002e: number | undefined;

  // 3D Implant Template Group Member Matching Point
  ThreeDImplantTemplateGroupMemberMatchingPoint: Array<number> | undefined;
  x00780050: Array<number> | undefined;

  // 3D Implant Template Group Member Matching Axes
  ThreeDImplantTemplateGroupMemberMatchingAxes: Array<number> | undefined;
  x00780060: Array<number> | undefined;

  // Implant Template Group Member Matching 2D Coordinates Sequence
  ImplantTemplateGroupMemberMatching2DCoordinatesSequence: Array<Dataset> | undefined;
  x00780070: Array<Dataset> | undefined;

  // 2D Implant Template Group Member Matching Point
  TwoDImplantTemplateGroupMemberMatchingPoint: Array<number> | undefined;
  x00780090: Array<number> | undefined;

  // 2D Implant Template Group Member Matching Axes
  TwoDImplantTemplateGroupMemberMatchingAxes: Array<number> | undefined;
  x007800a0: Array<number> | undefined;

  // Implant Template Group Variation Dimension Sequence
  ImplantTemplateGroupVariationDimensionSequence: Array<Dataset> | undefined;
  x007800b0: Array<Dataset> | undefined;

  // Implant Template Group Variation Dimension Name
  ImplantTemplateGroupVariationDimensionName: string | undefined;
  x007800b2: string | undefined;

  // Implant Template Group Variation Dimension Rank Sequence
  ImplantTemplateGroupVariationDimensionRankSequence: Array<Dataset> | undefined;
  x007800b4: Array<Dataset> | undefined;

  // Referenced Implant Template Group Member ID
  ReferencedImplantTemplateGroupMemberID: number | undefined;
  x007800b6: number | undefined;

  // Implant Template Group Variation Dimension Rank
  ImplantTemplateGroupVariationDimensionRank: number | undefined;
  x007800b8: number | undefined;

  // Surface Scan Acquisition Type Code Sequence
  SurfaceScanAcquisitionTypeCodeSequence: Array<Dataset> | undefined;
  x00800001: Array<Dataset> | undefined;

  // Surface Scan Mode Code Sequence
  SurfaceScanModeCodeSequence: Array<Dataset> | undefined;
  x00800002: Array<Dataset> | undefined;

  // Registration Method Code Sequence
  RegistrationMethodCodeSequence: Array<Dataset> | undefined;
  x00800003: Array<Dataset> | undefined;

  // Shot Duration Time
  ShotDurationTime: number | undefined;
  x00800004: number | undefined;

  // Shot Offset Time
  ShotOffsetTime: number | undefined;
  x00800005: number | undefined;

  // Surface Point Presentation Value Data
  SurfacePointPresentationValueData: Array<number> | undefined;
  x00800006: Array<number> | undefined;

  // Surface Point Color CIELab Value Data
  SurfacePointColorCIELabValueData: Array<number> | undefined;
  x00800007: Array<number> | undefined;

  // UV Mapping Sequence
  UVMappingSequence: Array<Dataset> | undefined;
  x00800008: Array<Dataset> | undefined;

  // Texture Label
  TextureLabel: string | undefined;
  x00800009: string | undefined;

  // Referenced Texture Sequence
  ReferencedTextureSequence: Array<Dataset> | undefined;
  x00800012: Array<Dataset> | undefined;

  // Referenced Surface Data Sequence
  ReferencedSurfaceDataSequence: Array<Dataset> | undefined;
  x00800013: Array<Dataset> | undefined;

  // Storage Media File-set ID
  StorageMediaFileSetID: string | undefined;
  x00880130: string | undefined;

  // Storage Media File-set UID
  StorageMediaFileSetUID: string | undefined;
  x00880140: string | undefined;

  // Icon Image Sequence
  IconImageSequence: Array<Dataset> | undefined;
  x00880200: Array<Dataset> | undefined;

  // Topic Title
  TopicTitle: string | undefined;
  x00880904: string | undefined;

  // Topic Author
  TopicAuthor: string | undefined;
  x00880910: string | undefined;

  // Topic Keywords
  TopicKeywords: Array<string> | undefined;
  x00880912: Array<string> | undefined;

  // SOP Instance Status
  SOPInstanceStatus: string | undefined;
  x01000410: string | undefined;

  // SOP Authorization DateTime
  SOPAuthorizationDateTime: string | undefined;
  x01000420: string | undefined;

  // Authorization Equipment Certification Number
  AuthorizationEquipmentCertificationNumber: string | undefined;
  x01000426: string | undefined;

  // MAC ID Number
  MACIDNumber: number | undefined;
  x04000005: number | undefined;

  // MAC Calculation Transfer Syntax UID
  MACCalculationTransferSyntaxUID: string | undefined;
  x04000010: string | undefined;

  // MAC Algorithm
  MACAlgorithm: string | undefined;
  x04000015: string | undefined;

  // Data Elements Signed
  DataElementsSigned: Array<Uint16Array> | undefined;
  x04000020: Array<Uint16Array> | undefined;

  // Digital Signature UID
  DigitalSignatureUID: string | undefined;
  x04000100: string | undefined;

  // Digital Signature DateTime
  DigitalSignatureDateTime: string | undefined;
  x04000105: string | undefined;

  // Certificate Type
  CertificateType: string | undefined;
  x04000110: string | undefined;

  // Certified Timestamp Type
  CertifiedTimestampType: string | undefined;
  x04000305: string | undefined;

  // Digital Signature Purpose Code Sequence
  DigitalSignaturePurposeCodeSequence: Array<Dataset> | undefined;
  x04000401: Array<Dataset> | undefined;

  // Referenced Digital Signature Sequence
  ReferencedDigitalSignatureSequence: Array<Dataset> | undefined;
  x04000402: Array<Dataset> | undefined;

  // Referenced SOP Instance MAC Sequence
  ReferencedSOPInstanceMACSequence: Array<Dataset> | undefined;
  x04000403: Array<Dataset> | undefined;

  // Encrypted Attributes Sequence
  EncryptedAttributesSequence: Array<Dataset> | undefined;
  x04000500: Array<Dataset> | undefined;

  // Encrypted Content Transfer Syntax UID
  EncryptedContentTransferSyntaxUID: string | undefined;
  x04000510: string | undefined;

  // Modified Attributes Sequence
  ModifiedAttributesSequence: Array<Dataset> | undefined;
  x04000550: Array<Dataset> | undefined;

  // Original Attributes Sequence
  OriginalAttributesSequence: Array<Dataset> | undefined;
  x04000561: Array<Dataset> | undefined;

  // Attribute Modification DateTime
  AttributeModificationDateTime: string | undefined;
  x04000562: string | undefined;

  // Modifying System
  ModifyingSystem: string | undefined;
  x04000563: string | undefined;

  // Source of Previous Values
  SourceOfPreviousValues: string | undefined;
  x04000564: string | undefined;

  // Reason for the Attribute Modification
  ReasonForTheAttributeModification: string | undefined;
  x04000565: string | undefined;

  // Escape Triplet
  EscapeTriplet: Array<number> | undefined;
  x1000xxx0: Array<number> | undefined;

  // Run Length Triplet
  RunLengthTriplet: Array<number> | undefined;
  x1000xxx1: Array<number> | undefined;

  // Huffman Table Size
  HuffmanTableSize: number | undefined;
  x1000xxx2: number | undefined;

  // Huffman Table Triplet
  HuffmanTableTriplet: Array<number> | undefined;
  x1000xxx3: Array<number> | undefined;

  // Shift Table Size
  ShiftTableSize: number | undefined;
  x1000xxx4: number | undefined;

  // Shift Table Triplet
  ShiftTableTriplet: Array<number> | undefined;
  x1000xxx5: Array<number> | undefined;

  // Zonal Map
  ZonalMap: Array<number> | undefined;
  x1010xxxx: Array<number> | undefined;

  // Number of Copies
  NumberOfCopies: number | undefined;
  x20000010: number | undefined;

  // Printer Configuration Sequence
  PrinterConfigurationSequence: Array<Dataset> | undefined;
  x2000001e: Array<Dataset> | undefined;

  // Print Priority
  PrintPriority: string | undefined;
  x20000020: string | undefined;

  // Medium Type
  MediumType: string | undefined;
  x20000030: string | undefined;

  // Film Destination
  FilmDestination: string | undefined;
  x20000040: string | undefined;

  // Film Session Label
  FilmSessionLabel: string | undefined;
  x20000050: string | undefined;

  // Memory Allocation
  MemoryAllocation: number | undefined;
  x20000060: number | undefined;

  // Maximum Memory Allocation
  MaximumMemoryAllocation: number | undefined;
  x20000061: number | undefined;

  // Color Image Printing Flag
  ColorImagePrintingFlag: string | undefined;
  x20000062: string | undefined;

  // Collation Flag
  CollationFlag: string | undefined;
  x20000063: string | undefined;

  // Annotation Flag
  AnnotationFlag: string | undefined;
  x20000065: string | undefined;

  // Image Overlay Flag
  ImageOverlayFlag: string | undefined;
  x20000067: string | undefined;

  // Presentation LUT Flag
  PresentationLUTFlag: string | undefined;
  x20000069: string | undefined;

  // Image Box Presentation LUT Flag
  ImageBoxPresentationLUTFlag: string | undefined;
  x2000006a: string | undefined;

  // Memory Bit Depth
  MemoryBitDepth: number | undefined;
  x200000a0: number | undefined;

  // Printing Bit Depth
  PrintingBitDepth: number | undefined;
  x200000a1: number | undefined;

  // Media Installed Sequence
  MediaInstalledSequence: Array<Dataset> | undefined;
  x200000a2: Array<Dataset> | undefined;

  // Other Media Available Sequence
  OtherMediaAvailableSequence: Array<Dataset> | undefined;
  x200000a4: Array<Dataset> | undefined;

  // Supported Image Display Formats Sequence
  SupportedImageDisplayFormatsSequence: Array<Dataset> | undefined;
  x200000a8: Array<Dataset> | undefined;

  // Referenced Film Box Sequence
  ReferencedFilmBoxSequence: Array<Dataset> | undefined;
  x20000500: Array<Dataset> | undefined;

  // Referenced Stored Print Sequence
  ReferencedStoredPrintSequence: Array<Dataset> | undefined;
  x20000510: Array<Dataset> | undefined;

  // Annotation Display Format ID
  AnnotationDisplayFormatID: string | undefined;
  x20100030: string | undefined;

  // Film Orientation
  FilmOrientation: string | undefined;
  x20100040: string | undefined;

  // Film Size ID
  FilmSizeID: string | undefined;
  x20100050: string | undefined;

  // Printer Resolution ID
  PrinterResolutionID: string | undefined;
  x20100052: string | undefined;

  // Default Printer Resolution ID
  DefaultPrinterResolutionID: string | undefined;
  x20100054: string | undefined;

  // Magnification Type
  MagnificationType: string | undefined;
  x20100060: string | undefined;

  // Smoothing Type
  SmoothingType: string | undefined;
  x20100080: string | undefined;

  // Default Magnification Type
  DefaultMagnificationType: string | undefined;
  x201000a6: string | undefined;

  // Other Magnification Types Available
  OtherMagnificationTypesAvailable: Array<string> | undefined;
  x201000a7: Array<string> | undefined;

  // Default Smoothing Type
  DefaultSmoothingType: string | undefined;
  x201000a8: string | undefined;

  // Other Smoothing Types Available
  OtherSmoothingTypesAvailable: Array<string> | undefined;
  x201000a9: Array<string> | undefined;

  // Border Density
  BorderDensity: string | undefined;
  x20100100: string | undefined;

  // Empty Image Density
  EmptyImageDensity: string | undefined;
  x20100110: string | undefined;

  // Min Density
  MinDensity: number | undefined;
  x20100120: number | undefined;

  // Max Density
  MaxDensity: number | undefined;
  x20100130: number | undefined;

  // Trim
  Trim: string | undefined;
  x20100140: string | undefined;

  // Maximum Collated Films
  MaximumCollatedFilms: number | undefined;
  x20100154: number | undefined;

  // Illumination
  Illumination: number | undefined;
  x2010015e: number | undefined;

  // Reflected Ambient Light
  ReflectedAmbientLight: number | undefined;
  x20100160: number | undefined;

  // Printer Pixel Spacing
  PrinterPixelSpacing: Array<number> | undefined;
  x20100376: Array<number> | undefined;

  // Referenced Film Session Sequence
  ReferencedFilmSessionSequence: Array<Dataset> | undefined;
  x20100500: Array<Dataset> | undefined;

  // Referenced Image Box Sequence
  ReferencedImageBoxSequence: Array<Dataset> | undefined;
  x20100510: Array<Dataset> | undefined;

  // Referenced Basic Annotation Box Sequence
  ReferencedBasicAnnotationBoxSequence: Array<Dataset> | undefined;
  x20100520: Array<Dataset> | undefined;

  // Image Box Position
  ImageBoxPosition: number | undefined;
  x20200010: number | undefined;

  // Polarity
  Polarity: string | undefined;
  x20200020: string | undefined;

  // Requested Image Size
  RequestedImageSize: number | undefined;
  x20200030: number | undefined;

  // Requested Decimate/Crop Behavior
  RequestedDecimateCropBehavior: string | undefined;
  x20200040: string | undefined;

  // Requested Resolution ID
  RequestedResolutionID: string | undefined;
  x20200050: string | undefined;

  // Requested Image Size Flag
  RequestedImageSizeFlag: string | undefined;
  x202000a0: string | undefined;

  // Decimate/Crop Result
  DecimateCropResult: string | undefined;
  x202000a2: string | undefined;

  // Basic Grayscale Image Sequence
  BasicGrayscaleImageSequence: Array<Dataset> | undefined;
  x20200110: Array<Dataset> | undefined;

  // Basic Color Image Sequence
  BasicColorImageSequence: Array<Dataset> | undefined;
  x20200111: Array<Dataset> | undefined;

  // Referenced Image Overlay Box Sequence
  ReferencedImageOverlayBoxSequence: Array<Dataset> | undefined;
  x20200130: Array<Dataset> | undefined;

  // Referenced VOI LUT Box Sequence
  ReferencedVOILUTBoxSequence: Array<Dataset> | undefined;
  x20200140: Array<Dataset> | undefined;

  // Annotation Position
  AnnotationPosition: number | undefined;
  x20300010: number | undefined;

  // Text String
  TextString: string | undefined;
  x20300020: string | undefined;

  // Referenced Overlay Plane Sequence
  ReferencedOverlayPlaneSequence: Array<Dataset> | undefined;
  x20400010: Array<Dataset> | undefined;

  // Referenced Overlay Plane Groups
  ReferencedOverlayPlaneGroups: Array<number> | undefined;
  x20400011: Array<number> | undefined;

  // Overlay Pixel Data Sequence
  OverlayPixelDataSequence: Array<Dataset> | undefined;
  x20400020: Array<Dataset> | undefined;

  // Overlay Magnification Type
  OverlayMagnificationType: string | undefined;
  x20400060: string | undefined;

  // Overlay Smoothing Type
  OverlaySmoothingType: string | undefined;
  x20400070: string | undefined;

  // Overlay or Image Magnification
  OverlayOrImageMagnification: string | undefined;
  x20400072: string | undefined;

  // Magnify to Number of Columns
  MagnifyToNumberOfColumns: number | undefined;
  x20400074: number | undefined;

  // Overlay Foreground Density
  OverlayForegroundDensity: string | undefined;
  x20400080: string | undefined;

  // Overlay Background Density
  OverlayBackgroundDensity: string | undefined;
  x20400082: string | undefined;

  // Overlay Mode
  OverlayMode: string | undefined;
  x20400090: string | undefined;

  // Threshold Density
  ThresholdDensity: string | undefined;
  x20400100: string | undefined;

  // Referenced Image Box Sequence (Retired)
  ReferencedImageBoxSequenceRetired: Array<Dataset> | undefined;
  x20400500: Array<Dataset> | undefined;

  // Presentation LUT Sequence
  PresentationLUTSequence: Array<Dataset> | undefined;
  x20500010: Array<Dataset> | undefined;

  // Presentation LUT Shape
  PresentationLUTShape: string | undefined;
  x20500020: string | undefined;

  // Referenced Presentation LUT Sequence
  ReferencedPresentationLUTSequence: Array<Dataset> | undefined;
  x20500500: Array<Dataset> | undefined;

  // Print Job ID
  PrintJobID: string | undefined;
  x21000010: string | undefined;

  // Execution Status
  ExecutionStatus: string | undefined;
  x21000020: string | undefined;

  // Execution Status Info
  ExecutionStatusInfo: string | undefined;
  x21000030: string | undefined;

  // Creation Date
  CreationDate: Date | undefined;
  x21000040: Date | undefined;

  // Creation Time
  CreationTime: string | undefined;
  x21000050: string | undefined;

  // Originator
  Originator: string | undefined;
  x21000070: string | undefined;

  // Destination AE
  DestinationAE: string | undefined;
  x21000140: string | undefined;

  // Owner ID
  OwnerID: string | undefined;
  x21000160: string | undefined;

  // Number of Films
  NumberOfFilms: number | undefined;
  x21000170: number | undefined;

  // Referenced Print Job Sequence (Pull Stored Print)
  ReferencedPrintJobSequencePullStoredPrint: Array<Dataset> | undefined;
  x21000500: Array<Dataset> | undefined;

  // Printer Status
  PrinterStatus: string | undefined;
  x21100010: string | undefined;

  // Printer Status Info
  PrinterStatusInfo: string | undefined;
  x21100020: string | undefined;

  // Printer Name
  PrinterName: string | undefined;
  x21100030: string | undefined;

  // Print Queue ID
  PrintQueueID: string | undefined;
  x21100099: string | undefined;

  // Queue Status
  QueueStatus: string | undefined;
  x21200010: string | undefined;

  // Print Job Description Sequence
  PrintJobDescriptionSequence: Array<Dataset> | undefined;
  x21200050: Array<Dataset> | undefined;

  // Referenced Print Job Sequence
  ReferencedPrintJobSequence: Array<Dataset> | undefined;
  x21200070: Array<Dataset> | undefined;

  // Print Management Capabilities Sequence
  PrintManagementCapabilitiesSequence: Array<Dataset> | undefined;
  x21300010: Array<Dataset> | undefined;

  // Printer Characteristics Sequence
  PrinterCharacteristicsSequence: Array<Dataset> | undefined;
  x21300015: Array<Dataset> | undefined;

  // Film Box Content Sequence
  FilmBoxContentSequence: Array<Dataset> | undefined;
  x21300030: Array<Dataset> | undefined;

  // Image Box Content Sequence
  ImageBoxContentSequence: Array<Dataset> | undefined;
  x21300040: Array<Dataset> | undefined;

  // Annotation Content Sequence
  AnnotationContentSequence: Array<Dataset> | undefined;
  x21300050: Array<Dataset> | undefined;

  // Image Overlay Box Content Sequence
  ImageOverlayBoxContentSequence: Array<Dataset> | undefined;
  x21300060: Array<Dataset> | undefined;

  // Presentation LUT Content Sequence
  PresentationLUTContentSequence: Array<Dataset> | undefined;
  x21300080: Array<Dataset> | undefined;

  // Proposed Study Sequence
  ProposedStudySequence: Array<Dataset> | undefined;
  x213000a0: Array<Dataset> | undefined;

  // Original Image Sequence
  OriginalImageSequence: Array<Dataset> | undefined;
  x213000c0: Array<Dataset> | undefined;

  // Label Using Information Extracted From Instances
  LabelUsingInformationExtractedFromInstances: string | undefined;
  x22000001: string | undefined;

  // Label Style Selection
  LabelStyleSelection: string | undefined;
  x22000003: string | undefined;

  // Barcode Symbology
  BarcodeSymbology: string | undefined;
  x22000006: string | undefined;

  // Allow Media Splitting
  AllowMediaSplitting: string | undefined;
  x22000007: string | undefined;

  // Include Non-DICOM Objects
  IncludeNonDICOMObjects: string | undefined;
  x22000008: string | undefined;

  // Include Display Application
  IncludeDisplayApplication: string | undefined;
  x22000009: string | undefined;

  // Preserve Composite Instances After Media Creation
  PreserveCompositeInstancesAfterMediaCreation: string | undefined;
  x2200000a: string | undefined;

  // Total Number of Pieces of Media Created
  TotalNumberOfPiecesOfMediaCreated: number | undefined;
  x2200000b: number | undefined;

  // Requested Media Application Profile
  RequestedMediaApplicationProfile: string | undefined;
  x2200000c: string | undefined;

  // Referenced Storage Media Sequence
  ReferencedStorageMediaSequence: Array<Dataset> | undefined;
  x2200000d: Array<Dataset> | undefined;

  // Failure Attributes
  FailureAttributes: Array<Uint16Array> | undefined;
  x2200000e: Array<Uint16Array> | undefined;

  // Allow Lossy Compression
  AllowLossyCompression: string | undefined;
  x2200000f: string | undefined;

  // Request Priority
  RequestPriority: string | undefined;
  x22000020: string | undefined;

  // RT Image Label
  RTImageLabel: string | undefined;
  x30020002: string | undefined;

  // RT Image Name
  RTImageName: string | undefined;
  x30020003: string | undefined;

  // Reported Values Origin
  ReportedValuesOrigin: string | undefined;
  x3002000a: string | undefined;

  // RT Image Plane
  RTImagePlane: string | undefined;
  x3002000c: string | undefined;

  // X-Ray Image Receptor Translation
  XRayImageReceptorTranslation: Array<number> | undefined;
  x3002000d: Array<number> | undefined;

  // X-Ray Image Receptor Angle
  XRayImageReceptorAngle: number | undefined;
  x3002000e: number | undefined;

  // RT Image Orientation
  RTImageOrientation: Array<number> | undefined;
  x30020010: Array<number> | undefined;

  // Image Plane Pixel Spacing
  ImagePlanePixelSpacing: Array<number> | undefined;
  x30020011: Array<number> | undefined;

  // RT Image Position
  RTImagePosition: Array<number> | undefined;
  x30020012: Array<number> | undefined;

  // Radiation Machine Name
  RadiationMachineName: string | undefined;
  x30020020: string | undefined;

  // Radiation Machine SAD
  RadiationMachineSAD: number | undefined;
  x30020022: number | undefined;

  // Radiation Machine SSD
  RadiationMachineSSD: number | undefined;
  x30020024: number | undefined;

  // RT Image SID
  RTImageSID: number | undefined;
  x30020026: number | undefined;

  // Source to Reference Object Distance
  SourceToReferenceObjectDistance: number | undefined;
  x30020028: number | undefined;

  // Fraction Number
  FractionNumber: number | undefined;
  x30020029: number | undefined;

  // Exposure Sequence
  ExposureSequence: Array<Dataset> | undefined;
  x30020030: Array<Dataset> | undefined;

  // Meterset Exposure
  MetersetExposure: number | undefined;
  x30020032: number | undefined;

  // Diaphragm Position
  DiaphragmPosition: Array<number> | undefined;
  x30020034: Array<number> | undefined;

  // Fluence Map Sequence
  FluenceMapSequence: Array<Dataset> | undefined;
  x30020040: Array<Dataset> | undefined;

  // Fluence Data Source
  FluenceDataSource: string | undefined;
  x30020041: string | undefined;

  // Fluence Data Scale
  FluenceDataScale: number | undefined;
  x30020042: number | undefined;

  // Primary Fluence Mode Sequence
  PrimaryFluenceModeSequence: Array<Dataset> | undefined;
  x30020050: Array<Dataset> | undefined;

  // Fluence Mode
  FluenceMode: string | undefined;
  x30020051: string | undefined;

  // Fluence Mode ID
  FluenceModeID: string | undefined;
  x30020052: string | undefined;

  // DVH Type
  DVHType: string | undefined;
  x30040001: string | undefined;

  // Dose Units
  DoseUnits: string | undefined;
  x30040002: string | undefined;

  // Dose Type
  DoseType: string | undefined;
  x30040004: string | undefined;

  // Spatial Transform of Dose
  SpatialTransformOfDose: string | undefined;
  x30040005: string | undefined;

  // Dose Comment
  DoseComment: string | undefined;
  x30040006: string | undefined;

  // Normalization Point
  NormalizationPoint: Array<number> | undefined;
  x30040008: Array<number> | undefined;

  // Dose Summation Type
  DoseSummationType: string | undefined;
  x3004000a: string | undefined;

  // Grid Frame Offset Vector
  GridFrameOffsetVector: Array<number> | undefined;
  x3004000c: Array<number> | undefined;

  // Dose Grid Scaling
  DoseGridScaling: number | undefined;
  x3004000e: number | undefined;

  // RT Dose ROI Sequence
  RTDoseROISequence: Array<Dataset> | undefined;
  x30040010: Array<Dataset> | undefined;

  // Dose Value
  DoseValue: number | undefined;
  x30040012: number | undefined;

  // Tissue Heterogeneity Correction
  TissueHeterogeneityCorrection: Array<string> | undefined;
  x30040014: Array<string> | undefined;

  // DVH Normalization Point
  DVHNormalizationPoint: Array<number> | undefined;
  x30040040: Array<number> | undefined;

  // DVH Normalization Dose Value
  DVHNormalizationDoseValue: number | undefined;
  x30040042: number | undefined;

  // DVH Sequence
  DVHSequence: Array<Dataset> | undefined;
  x30040050: Array<Dataset> | undefined;

  // DVH Dose Scaling
  DVHDoseScaling: number | undefined;
  x30040052: number | undefined;

  // DVH Volume Units
  DVHVolumeUnits: string | undefined;
  x30040054: string | undefined;

  // DVH Number of Bins
  DVHNumberOfBins: number | undefined;
  x30040056: number | undefined;

  // DVH Data
  DVHData: Array<number> | undefined;
  x30040058: Array<number> | undefined;

  // DVH Referenced ROI Sequence
  DVHReferencedROISequence: Array<Dataset> | undefined;
  x30040060: Array<Dataset> | undefined;

  // DVH ROI Contribution Type
  DVHROIContributionType: string | undefined;
  x30040062: string | undefined;

  // DVH Minimum Dose
  DVHMinimumDose: number | undefined;
  x30040070: number | undefined;

  // DVH Maximum Dose
  DVHMaximumDose: number | undefined;
  x30040072: number | undefined;

  // DVH Mean Dose
  DVHMeanDose: number | undefined;
  x30040074: number | undefined;

  // Structure Set Label
  StructureSetLabel: string | undefined;
  x30060002: string | undefined;

  // Structure Set Name
  StructureSetName: string | undefined;
  x30060004: string | undefined;

  // Structure Set Date
  StructureSetDate: Date | undefined;
  x30060008: Date | undefined;

  // Structure Set Time
  StructureSetTime: string | undefined;
  x30060009: string | undefined;

  // Referenced Frame of Reference Sequence
  ReferencedFrameOfReferenceSequence: Array<Dataset> | undefined;
  x30060010: Array<Dataset> | undefined;

  // RT Referenced Study Sequence
  RTReferencedStudySequence: Array<Dataset> | undefined;
  x30060012: Array<Dataset> | undefined;

  // RT Referenced Series Sequence
  RTReferencedSeriesSequence: Array<Dataset> | undefined;
  x30060014: Array<Dataset> | undefined;

  // Contour Image Sequence
  ContourImageSequence: Array<Dataset> | undefined;
  x30060016: Array<Dataset> | undefined;

  // Predecessor Structure Set Sequence
  PredecessorStructureSetSequence: Array<Dataset> | undefined;
  x30060018: Array<Dataset> | undefined;

  // Structure Set ROI Sequence
  StructureSetROISequence: Array<Dataset> | undefined;
  x30060020: Array<Dataset> | undefined;

  // ROI Number
  ROINumber: number | undefined;
  x30060022: number | undefined;

  // Referenced Frame of Reference UID
  ReferencedFrameOfReferenceUID: string | undefined;
  x30060024: string | undefined;

  // ROI Name
  ROIName: string | undefined;
  x30060026: string | undefined;

  // ROI Display Color
  ROIDisplayColor: Array<number> | undefined;
  x3006002a: Array<number> | undefined;

  // ROI Volume
  ROIVolume: number | undefined;
  x3006002c: number | undefined;

  // RT Related ROI Sequence
  RTRelatedROISequence: Array<Dataset> | undefined;
  x30060030: Array<Dataset> | undefined;

  // RT ROI Relationship
  RTROIRelationship: string | undefined;
  x30060033: string | undefined;

  // ROI Generation Algorithm
  ROIGenerationAlgorithm: string | undefined;
  x30060036: string | undefined;

  // ROI Generation Description
  ROIGenerationDescription: string | undefined;
  x30060038: string | undefined;

  // ROI Contour Sequence
  ROIContourSequence: Array<Dataset> | undefined;
  x30060039: Array<Dataset> | undefined;

  // Contour Sequence
  ContourSequence: Array<Dataset> | undefined;
  x30060040: Array<Dataset> | undefined;

  // Contour Geometric Type
  ContourGeometricType: string | undefined;
  x30060042: string | undefined;

  // Contour Slab Thickness
  ContourSlabThickness: number | undefined;
  x30060044: number | undefined;

  // Contour Offset Vector
  ContourOffsetVector: Array<number> | undefined;
  x30060045: Array<number> | undefined;

  // Number of Contour Points
  NumberOfContourPoints: number | undefined;
  x30060046: number | undefined;

  // Contour Number
  ContourNumber: number | undefined;
  x30060048: number | undefined;

  // Attached Contours
  AttachedContours: Array<number> | undefined;
  x30060049: Array<number> | undefined;

  // Contour Data
  ContourData: Array<number> | undefined;
  x30060050: Array<number> | undefined;

  // RT ROI Observations Sequence
  RTROIObservationsSequence: Array<Dataset> | undefined;
  x30060080: Array<Dataset> | undefined;

  // Observation Number
  ObservationNumber: number | undefined;
  x30060082: number | undefined;

  // Referenced ROI Number
  ReferencedROINumber: number | undefined;
  x30060084: number | undefined;

  // ROI Observation Label
  ROIObservationLabel: string | undefined;
  x30060085: string | undefined;

  // RT ROI Identification Code Sequence
  RTROIIdentificationCodeSequence: Array<Dataset> | undefined;
  x30060086: Array<Dataset> | undefined;

  // Related RT ROI Observations Sequence
  RelatedRTROIObservationsSequence: Array<Dataset> | undefined;
  x300600a0: Array<Dataset> | undefined;

  // RT ROI Interpreted Type
  RTROIInterpretedType: string | undefined;
  x300600a4: string | undefined;

  // ROI Interpreter
  ROIInterpreter: any | undefined;
  x300600a6: any | undefined;

  // ROI Physical Properties Sequence
  ROIPhysicalPropertiesSequence: Array<Dataset> | undefined;
  x300600b0: Array<Dataset> | undefined;

  // ROI Physical Property
  ROIPhysicalProperty: string | undefined;
  x300600b2: string | undefined;

  // ROI Physical Property Value
  ROIPhysicalPropertyValue: number | undefined;
  x300600b4: number | undefined;

  // ROI Elemental Composition Sequence
  ROIElementalCompositionSequence: Array<Dataset> | undefined;
  x300600b6: Array<Dataset> | undefined;

  // ROI Elemental Composition Atomic Number
  ROIElementalCompositionAtomicNumber: number | undefined;
  x300600b7: number | undefined;

  // ROI Elemental Composition Atomic Mass Fraction
  ROIElementalCompositionAtomicMassFraction: number | undefined;
  x300600b8: number | undefined;

  // Additional RT ROI Identification Code Sequence
  AdditionalRTROIIdentificationCodeSequence: Array<Dataset> | undefined;
  x300600b9: Array<Dataset> | undefined;

  // Frame of Reference Relationship Sequence
  FrameOfReferenceRelationshipSequence: Array<Dataset> | undefined;
  x300600c0: Array<Dataset> | undefined;

  // Related Frame of Reference UID
  RelatedFrameOfReferenceUID: string | undefined;
  x300600c2: string | undefined;

  // Frame of Reference Transformation Type
  FrameOfReferenceTransformationType: string | undefined;
  x300600c4: string | undefined;

  // Frame of Reference Transformation Matrix
  FrameOfReferenceTransformationMatrix: Array<number> | undefined;
  x300600c6: Array<number> | undefined;

  // Frame of Reference Transformation Comment
  FrameOfReferenceTransformationComment: string | undefined;
  x300600c8: string | undefined;

  // Measured Dose Reference Sequence
  MeasuredDoseReferenceSequence: Array<Dataset> | undefined;
  x30080010: Array<Dataset> | undefined;

  // Measured Dose Type
  MeasuredDoseType: string | undefined;
  x30080014: string | undefined;

  // Measured Dose Value
  MeasuredDoseValue: number | undefined;
  x30080016: number | undefined;

  // Treatment Session Beam Sequence
  TreatmentSessionBeamSequence: Array<Dataset> | undefined;
  x30080020: Array<Dataset> | undefined;

  // Treatment Session Ion Beam Sequence
  TreatmentSessionIonBeamSequence: Array<Dataset> | undefined;
  x30080021: Array<Dataset> | undefined;

  // Current Fraction Number
  CurrentFractionNumber: number | undefined;
  x30080022: number | undefined;

  // Treatment Control Point Date
  TreatmentControlPointDate: Date | undefined;
  x30080024: Date | undefined;

  // Treatment Control Point Time
  TreatmentControlPointTime: string | undefined;
  x30080025: string | undefined;

  // Treatment Termination Status
  TreatmentTerminationStatus: string | undefined;
  x3008002a: string | undefined;

  // Treatment Termination Code
  TreatmentTerminationCode: string | undefined;
  x3008002b: string | undefined;

  // Treatment Verification Status
  TreatmentVerificationStatus: string | undefined;
  x3008002c: string | undefined;

  // Referenced Treatment Record Sequence
  ReferencedTreatmentRecordSequence: Array<Dataset> | undefined;
  x30080030: Array<Dataset> | undefined;

  // Specified Primary Meterset
  SpecifiedPrimaryMeterset: number | undefined;
  x30080032: number | undefined;

  // Specified Secondary Meterset
  SpecifiedSecondaryMeterset: number | undefined;
  x30080033: number | undefined;

  // Delivered Primary Meterset
  DeliveredPrimaryMeterset: number | undefined;
  x30080036: number | undefined;

  // Delivered Secondary Meterset
  DeliveredSecondaryMeterset: number | undefined;
  x30080037: number | undefined;

  // Specified Treatment Time
  SpecifiedTreatmentTime: number | undefined;
  x3008003a: number | undefined;

  // Delivered Treatment Time
  DeliveredTreatmentTime: number | undefined;
  x3008003b: number | undefined;

  // Control Point Delivery Sequence
  ControlPointDeliverySequence: Array<Dataset> | undefined;
  x30080040: Array<Dataset> | undefined;

  // Ion Control Point Delivery Sequence
  IonControlPointDeliverySequence: Array<Dataset> | undefined;
  x30080041: Array<Dataset> | undefined;

  // Specified Meterset
  SpecifiedMeterset: number | undefined;
  x30080042: number | undefined;

  // Delivered Meterset
  DeliveredMeterset: number | undefined;
  x30080044: number | undefined;

  // Meterset Rate Set
  MetersetRateSet: number | undefined;
  x30080045: number | undefined;

  // Meterset Rate Delivered
  MetersetRateDelivered: number | undefined;
  x30080046: number | undefined;

  // Scan Spot Metersets Delivered
  ScanSpotMetersetsDelivered: Array<number> | undefined;
  x30080047: Array<number> | undefined;

  // Dose Rate Delivered
  DoseRateDelivered: number | undefined;
  x30080048: number | undefined;

  // Treatment Summary Calculated Dose Reference Sequence
  TreatmentSummaryCalculatedDoseReferenceSequence: Array<Dataset> | undefined;
  x30080050: Array<Dataset> | undefined;

  // Cumulative Dose to Dose Reference
  CumulativeDoseToDoseReference: number | undefined;
  x30080052: number | undefined;

  // First Treatment Date
  FirstTreatmentDate: Date | undefined;
  x30080054: Date | undefined;

  // Most Recent Treatment Date
  MostRecentTreatmentDate: Date | undefined;
  x30080056: Date | undefined;

  // Number of Fractions Delivered
  NumberOfFractionsDelivered: number | undefined;
  x3008005a: number | undefined;

  // Override Sequence
  OverrideSequence: Array<Dataset> | undefined;
  x30080060: Array<Dataset> | undefined;

  // Parameter Sequence Pointer
  ParameterSequencePointer: Uint16Array | undefined;
  x30080061: Uint16Array | undefined;

  // Override Parameter Pointer
  OverrideParameterPointer: Uint16Array | undefined;
  x30080062: Uint16Array | undefined;

  // Parameter Item Index
  ParameterItemIndex: number | undefined;
  x30080063: number | undefined;

  // Measured Dose Reference Number
  MeasuredDoseReferenceNumber: number | undefined;
  x30080064: number | undefined;

  // Parameter Pointer
  ParameterPointer: Uint16Array | undefined;
  x30080065: Uint16Array | undefined;

  // Corrected Parameter Sequence
  CorrectedParameterSequence: Array<Dataset> | undefined;
  x30080068: Array<Dataset> | undefined;

  // Correction Value
  CorrectionValue: number | undefined;
  x3008006a: number | undefined;

  // Calculated Dose Reference Sequence
  CalculatedDoseReferenceSequence: Array<Dataset> | undefined;
  x30080070: Array<Dataset> | undefined;

  // Calculated Dose Reference Number
  CalculatedDoseReferenceNumber: number | undefined;
  x30080072: number | undefined;

  // Calculated Dose Reference Dose Value
  CalculatedDoseReferenceDoseValue: number | undefined;
  x30080076: number | undefined;

  // Start Meterset
  StartMeterset: number | undefined;
  x30080078: number | undefined;

  // End Meterset
  EndMeterset: number | undefined;
  x3008007a: number | undefined;

  // Referenced Measured Dose Reference Sequence
  ReferencedMeasuredDoseReferenceSequence: Array<Dataset> | undefined;
  x30080080: Array<Dataset> | undefined;

  // Referenced Measured Dose Reference Number
  ReferencedMeasuredDoseReferenceNumber: number | undefined;
  x30080082: number | undefined;

  // Referenced Calculated Dose Reference Sequence
  ReferencedCalculatedDoseReferenceSequence: Array<Dataset> | undefined;
  x30080090: Array<Dataset> | undefined;

  // Referenced Calculated Dose Reference Number
  ReferencedCalculatedDoseReferenceNumber: number | undefined;
  x30080092: number | undefined;

  // Beam Limiting Device Leaf Pairs Sequence
  BeamLimitingDeviceLeafPairsSequence: Array<Dataset> | undefined;
  x300800a0: Array<Dataset> | undefined;

  // Recorded Wedge Sequence
  RecordedWedgeSequence: Array<Dataset> | undefined;
  x300800b0: Array<Dataset> | undefined;

  // Recorded Compensator Sequence
  RecordedCompensatorSequence: Array<Dataset> | undefined;
  x300800c0: Array<Dataset> | undefined;

  // Recorded Block Sequence
  RecordedBlockSequence: Array<Dataset> | undefined;
  x300800d0: Array<Dataset> | undefined;

  // Treatment Summary Measured Dose Reference Sequence
  TreatmentSummaryMeasuredDoseReferenceSequence: Array<Dataset> | undefined;
  x300800e0: Array<Dataset> | undefined;

  // Recorded Snout Sequence
  RecordedSnoutSequence: Array<Dataset> | undefined;
  x300800f0: Array<Dataset> | undefined;

  // Recorded Range Shifter Sequence
  RecordedRangeShifterSequence: Array<Dataset> | undefined;
  x300800f2: Array<Dataset> | undefined;

  // Recorded Lateral Spreading Device Sequence
  RecordedLateralSpreadingDeviceSequence: Array<Dataset> | undefined;
  x300800f4: Array<Dataset> | undefined;

  // Recorded Range Modulator Sequence
  RecordedRangeModulatorSequence: Array<Dataset> | undefined;
  x300800f6: Array<Dataset> | undefined;

  // Recorded Source Sequence
  RecordedSourceSequence: Array<Dataset> | undefined;
  x30080100: Array<Dataset> | undefined;

  // Source Serial Number
  SourceSerialNumber: string | undefined;
  x30080105: string | undefined;

  // Treatment Session Application Setup Sequence
  TreatmentSessionApplicationSetupSequence: Array<Dataset> | undefined;
  x30080110: Array<Dataset> | undefined;

  // Application Setup Check
  ApplicationSetupCheck: string | undefined;
  x30080116: string | undefined;

  // Recorded Brachy Accessory Device Sequence
  RecordedBrachyAccessoryDeviceSequence: Array<Dataset> | undefined;
  x30080120: Array<Dataset> | undefined;

  // Referenced Brachy Accessory Device Number
  ReferencedBrachyAccessoryDeviceNumber: number | undefined;
  x30080122: number | undefined;

  // Recorded Channel Sequence
  RecordedChannelSequence: Array<Dataset> | undefined;
  x30080130: Array<Dataset> | undefined;

  // Specified Channel Total Time
  SpecifiedChannelTotalTime: number | undefined;
  x30080132: number | undefined;

  // Delivered Channel Total Time
  DeliveredChannelTotalTime: number | undefined;
  x30080134: number | undefined;

  // Specified Number of Pulses
  SpecifiedNumberOfPulses: number | undefined;
  x30080136: number | undefined;

  // Delivered Number of Pulses
  DeliveredNumberOfPulses: number | undefined;
  x30080138: number | undefined;

  // Specified Pulse Repetition Interval
  SpecifiedPulseRepetitionInterval: number | undefined;
  x3008013a: number | undefined;

  // Delivered Pulse Repetition Interval
  DeliveredPulseRepetitionInterval: number | undefined;
  x3008013c: number | undefined;

  // Recorded Source Applicator Sequence
  RecordedSourceApplicatorSequence: Array<Dataset> | undefined;
  x30080140: Array<Dataset> | undefined;

  // Referenced Source Applicator Number
  ReferencedSourceApplicatorNumber: number | undefined;
  x30080142: number | undefined;

  // Recorded Channel Shield Sequence
  RecordedChannelShieldSequence: Array<Dataset> | undefined;
  x30080150: Array<Dataset> | undefined;

  // Referenced Channel Shield Number
  ReferencedChannelShieldNumber: number | undefined;
  x30080152: number | undefined;

  // Brachy Control Point Delivered Sequence
  BrachyControlPointDeliveredSequence: Array<Dataset> | undefined;
  x30080160: Array<Dataset> | undefined;

  // Safe Position Exit Date
  SafePositionExitDate: Date | undefined;
  x30080162: Date | undefined;

  // Safe Position Exit Time
  SafePositionExitTime: string | undefined;
  x30080164: string | undefined;

  // Safe Position Return Date
  SafePositionReturnDate: Date | undefined;
  x30080166: Date | undefined;

  // Safe Position Return Time
  SafePositionReturnTime: string | undefined;
  x30080168: string | undefined;

  // Pulse Specific Brachy Control Point Delivered Sequence
  PulseSpecificBrachyControlPointDeliveredSequence: Array<Dataset> | undefined;
  x30080171: Array<Dataset> | undefined;

  // Pulse Number
  PulseNumber: number | undefined;
  x30080172: number | undefined;

  // Brachy Pulse Control Point Delivered Sequence
  BrachyPulseControlPointDeliveredSequence: Array<Dataset> | undefined;
  x30080173: Array<Dataset> | undefined;

  // Current Treatment Status
  CurrentTreatmentStatus: string | undefined;
  x30080200: string | undefined;

  // Fraction Group Summary Sequence
  FractionGroupSummarySequence: Array<Dataset> | undefined;
  x30080220: Array<Dataset> | undefined;

  // Referenced Fraction Number
  ReferencedFractionNumber: number | undefined;
  x30080223: number | undefined;

  // Fraction Group Type
  FractionGroupType: string | undefined;
  x30080224: string | undefined;

  // Beam Stopper Position
  BeamStopperPosition: string | undefined;
  x30080230: string | undefined;

  // Fraction Status Summary Sequence
  FractionStatusSummarySequence: Array<Dataset> | undefined;
  x30080240: Array<Dataset> | undefined;

  // Treatment Date
  TreatmentDate: Date | undefined;
  x30080250: Date | undefined;

  // Treatment Time
  TreatmentTime: string | undefined;
  x30080251: string | undefined;

  // RT Plan Label
  RTPlanLabel: string | undefined;
  x300a0002: string | undefined;

  // RT Plan Name
  RTPlanName: string | undefined;
  x300a0003: string | undefined;

  // RT Plan Date
  RTPlanDate: Date | undefined;
  x300a0006: Date | undefined;

  // RT Plan Time
  RTPlanTime: string | undefined;
  x300a0007: string | undefined;

  // Treatment Protocols
  TreatmentProtocols: Array<string> | undefined;
  x300a0009: Array<string> | undefined;

  // Plan Intent
  PlanIntent: string | undefined;
  x300a000a: string | undefined;

  // Treatment Sites
  TreatmentSites: Array<string> | undefined;
  x300a000b: Array<string> | undefined;

  // RT Plan Geometry
  RTPlanGeometry: string | undefined;
  x300a000c: string | undefined;

  // Dose Reference Sequence
  DoseReferenceSequence: Array<Dataset> | undefined;
  x300a0010: Array<Dataset> | undefined;

  // Dose Reference Number
  DoseReferenceNumber: number | undefined;
  x300a0012: number | undefined;

  // Dose Reference UID
  DoseReferenceUID: string | undefined;
  x300a0013: string | undefined;

  // Dose Reference Structure Type
  DoseReferenceStructureType: string | undefined;
  x300a0014: string | undefined;

  // Nominal Beam Energy Unit
  NominalBeamEnergyUnit: string | undefined;
  x300a0015: string | undefined;

  // Dose Reference Description
  DoseReferenceDescription: string | undefined;
  x300a0016: string | undefined;

  // Dose Reference Point Coordinates
  DoseReferencePointCoordinates: Array<number> | undefined;
  x300a0018: Array<number> | undefined;

  // Nominal Prior Dose
  NominalPriorDose: number | undefined;
  x300a001a: number | undefined;

  // Dose Reference Type
  DoseReferenceType: string | undefined;
  x300a0020: string | undefined;

  // Constraint Weight
  ConstraintWeight: number | undefined;
  x300a0021: number | undefined;

  // Delivery Warning Dose
  DeliveryWarningDose: number | undefined;
  x300a0022: number | undefined;

  // Delivery Maximum Dose
  DeliveryMaximumDose: number | undefined;
  x300a0023: number | undefined;

  // Target Minimum Dose
  TargetMinimumDose: number | undefined;
  x300a0025: number | undefined;

  // Target Prescription Dose
  TargetPrescriptionDose: number | undefined;
  x300a0026: number | undefined;

  // Target Maximum Dose
  TargetMaximumDose: number | undefined;
  x300a0027: number | undefined;

  // Target Underdose Volume Fraction
  TargetUnderdoseVolumeFraction: number | undefined;
  x300a0028: number | undefined;

  // Organ at Risk Full-volume Dose
  OrganAtRiskFullVolumeDose: number | undefined;
  x300a002a: number | undefined;

  // Organ at Risk Limit Dose
  OrganAtRiskLimitDose: number | undefined;
  x300a002b: number | undefined;

  // Organ at Risk Maximum Dose
  OrganAtRiskMaximumDose: number | undefined;
  x300a002c: number | undefined;

  // Organ at Risk Overdose Volume Fraction
  OrganAtRiskOverdoseVolumeFraction: number | undefined;
  x300a002d: number | undefined;

  // Tolerance Table Sequence
  ToleranceTableSequence: Array<Dataset> | undefined;
  x300a0040: Array<Dataset> | undefined;

  // Tolerance Table Number
  ToleranceTableNumber: number | undefined;
  x300a0042: number | undefined;

  // Tolerance Table Label
  ToleranceTableLabel: string | undefined;
  x300a0043: string | undefined;

  // Gantry Angle Tolerance
  GantryAngleTolerance: number | undefined;
  x300a0044: number | undefined;

  // Beam Limiting Device Angle Tolerance
  BeamLimitingDeviceAngleTolerance: number | undefined;
  x300a0046: number | undefined;

  // Beam Limiting Device Tolerance Sequence
  BeamLimitingDeviceToleranceSequence: Array<Dataset> | undefined;
  x300a0048: Array<Dataset> | undefined;

  // Beam Limiting Device Position Tolerance
  BeamLimitingDevicePositionTolerance: number | undefined;
  x300a004a: number | undefined;

  // Snout Position Tolerance
  SnoutPositionTolerance: number | undefined;
  x300a004b: number | undefined;

  // Patient Support Angle Tolerance
  PatientSupportAngleTolerance: number | undefined;
  x300a004c: number | undefined;

  // Table Top Eccentric Angle Tolerance
  TableTopEccentricAngleTolerance: number | undefined;
  x300a004e: number | undefined;

  // Table Top Pitch Angle Tolerance
  TableTopPitchAngleTolerance: number | undefined;
  x300a004f: number | undefined;

  // Table Top Roll Angle Tolerance
  TableTopRollAngleTolerance: number | undefined;
  x300a0050: number | undefined;

  // Table Top Vertical Position Tolerance
  TableTopVerticalPositionTolerance: number | undefined;
  x300a0051: number | undefined;

  // Table Top Longitudinal Position Tolerance
  TableTopLongitudinalPositionTolerance: number | undefined;
  x300a0052: number | undefined;

  // Table Top Lateral Position Tolerance
  TableTopLateralPositionTolerance: number | undefined;
  x300a0053: number | undefined;

  // RT Plan Relationship
  RTPlanRelationship: string | undefined;
  x300a0055: string | undefined;

  // Fraction Group Sequence
  FractionGroupSequence: Array<Dataset> | undefined;
  x300a0070: Array<Dataset> | undefined;

  // Fraction Group Number
  FractionGroupNumber: number | undefined;
  x300a0071: number | undefined;

  // Fraction Group Description
  FractionGroupDescription: string | undefined;
  x300a0072: string | undefined;

  // Number of Fractions Planned
  NumberOfFractionsPlanned: number | undefined;
  x300a0078: number | undefined;

  // Number of Fraction Pattern Digits Per Day
  NumberOfFractionPatternDigitsPerDay: number | undefined;
  x300a0079: number | undefined;

  // Repeat Fraction Cycle Length
  RepeatFractionCycleLength: number | undefined;
  x300a007a: number | undefined;

  // Number of Beams
  NumberOfBeams: number | undefined;
  x300a0080: number | undefined;

  // Beam Dose Specification Point
  BeamDoseSpecificationPoint: Array<number> | undefined;
  x300a0082: Array<number> | undefined;

  // Beam Dose
  BeamDose: number | undefined;
  x300a0084: number | undefined;

  // Beam Meterset
  BeamMeterset: number | undefined;
  x300a0086: number | undefined;

  // Beam Dose Point Depth
  BeamDosePointDepth: number | undefined;
  x300a0088: number | undefined;

  // Beam Dose Point Equivalent Depth
  BeamDosePointEquivalentDepth: number | undefined;
  x300a0089: number | undefined;

  // Beam Dose Point SSD
  BeamDosePointSSD: number | undefined;
  x300a008a: number | undefined;

  // Beam Dose Meaning
  BeamDoseMeaning: string | undefined;
  x300a008b: string | undefined;

  // Beam Dose Verification Control Point Sequence
  BeamDoseVerificationControlPointSequence: Array<Dataset> | undefined;
  x300a008c: Array<Dataset> | undefined;

  // Average Beam Dose Point Depth
  AverageBeamDosePointDepth: number | undefined;
  x300a008d: number | undefined;

  // Average Beam Dose Point Equivalent Depth
  AverageBeamDosePointEquivalentDepth: number | undefined;
  x300a008e: number | undefined;

  // Average Beam Dose Point SSD
  AverageBeamDosePointSSD: number | undefined;
  x300a008f: number | undefined;

  // Number of Brachy Application Setups
  NumberOfBrachyApplicationSetups: number | undefined;
  x300a00a0: number | undefined;

  // Brachy Application Setup Dose Specification Point
  BrachyApplicationSetupDoseSpecificationPoint: Array<number> | undefined;
  x300a00a2: Array<number> | undefined;

  // Brachy Application Setup Dose
  BrachyApplicationSetupDose: number | undefined;
  x300a00a4: number | undefined;

  // Beam Sequence
  BeamSequence: Array<Dataset> | undefined;
  x300a00b0: Array<Dataset> | undefined;

  // Treatment Machine Name
  TreatmentMachineName: string | undefined;
  x300a00b2: string | undefined;

  // Primary Dosimeter Unit
  PrimaryDosimeterUnit: string | undefined;
  x300a00b3: string | undefined;

  // Source-Axis Distance
  SourceAxisDistance: number | undefined;
  x300a00b4: number | undefined;

  // Beam Limiting Device Sequence
  BeamLimitingDeviceSequence: Array<Dataset> | undefined;
  x300a00b6: Array<Dataset> | undefined;

  // RT Beam Limiting Device Type
  RTBeamLimitingDeviceType: string | undefined;
  x300a00b8: string | undefined;

  // Source to Beam Limiting Device Distance
  SourceToBeamLimitingDeviceDistance: number | undefined;
  x300a00ba: number | undefined;

  // Isocenter to Beam Limiting Device Distance
  IsocenterToBeamLimitingDeviceDistance: number | undefined;
  x300a00bb: number | undefined;

  // Number of Leaf/Jaw Pairs
  NumberOfLeafJawPairs: number | undefined;
  x300a00bc: number | undefined;

  // Leaf Position Boundaries
  LeafPositionBoundaries: Array<number> | undefined;
  x300a00be: Array<number> | undefined;

  // Beam Number
  BeamNumber: number | undefined;
  x300a00c0: number | undefined;

  // Beam Name
  BeamName: string | undefined;
  x300a00c2: string | undefined;

  // Beam Type
  BeamType: string | undefined;
  x300a00c4: string | undefined;

  // Beam Delivery Duration Limit
  BeamDeliveryDurationLimit: number | undefined;
  x300a00c5: number | undefined;

  // Radiation Type
  RadiationType: string | undefined;
  x300a00c6: string | undefined;

  // High-Dose Technique Type
  HighDoseTechniqueType: string | undefined;
  x300a00c7: string | undefined;

  // Reference Image Number
  ReferenceImageNumber: number | undefined;
  x300a00c8: number | undefined;

  // Planned Verification Image Sequence
  PlannedVerificationImageSequence: Array<Dataset> | undefined;
  x300a00ca: Array<Dataset> | undefined;

  // Imaging Device-Specific Acquisition Parameters
  ImagingDeviceSpecificAcquisitionParameters: Array<string> | undefined;
  x300a00cc: Array<string> | undefined;

  // Treatment Delivery Type
  TreatmentDeliveryType: string | undefined;
  x300a00ce: string | undefined;

  // Number of Wedges
  NumberOfWedges: number | undefined;
  x300a00d0: number | undefined;

  // Wedge Sequence
  WedgeSequence: Array<Dataset> | undefined;
  x300a00d1: Array<Dataset> | undefined;

  // Wedge Number
  WedgeNumber: number | undefined;
  x300a00d2: number | undefined;

  // Wedge Type
  WedgeType: string | undefined;
  x300a00d3: string | undefined;

  // Wedge ID
  WedgeID: string | undefined;
  x300a00d4: string | undefined;

  // Wedge Angle
  WedgeAngle: number | undefined;
  x300a00d5: number | undefined;

  // Wedge Factor
  WedgeFactor: number | undefined;
  x300a00d6: number | undefined;

  // Total Wedge Tray Water-Equivalent Thickness
  TotalWedgeTrayWaterEquivalentThickness: number | undefined;
  x300a00d7: number | undefined;

  // Wedge Orientation
  WedgeOrientation: number | undefined;
  x300a00d8: number | undefined;

  // Isocenter to Wedge Tray Distance
  IsocenterToWedgeTrayDistance: number | undefined;
  x300a00d9: number | undefined;

  // Source to Wedge Tray Distance
  SourceToWedgeTrayDistance: number | undefined;
  x300a00da: number | undefined;

  // Wedge Thin Edge Position
  WedgeThinEdgePosition: number | undefined;
  x300a00db: number | undefined;

  // Bolus ID
  BolusID: string | undefined;
  x300a00dc: string | undefined;

  // Number of Compensators
  NumberOfCompensators: number | undefined;
  x300a00e0: number | undefined;

  // Material ID
  MaterialID: string | undefined;
  x300a00e1: string | undefined;

  // Total Compensator Tray Factor
  TotalCompensatorTrayFactor: number | undefined;
  x300a00e2: number | undefined;

  // Compensator Sequence
  CompensatorSequence: Array<Dataset> | undefined;
  x300a00e3: Array<Dataset> | undefined;

  // Compensator Number
  CompensatorNumber: number | undefined;
  x300a00e4: number | undefined;

  // Compensator ID
  CompensatorID: string | undefined;
  x300a00e5: string | undefined;

  // Source to Compensator Tray Distance
  SourceToCompensatorTrayDistance: number | undefined;
  x300a00e6: number | undefined;

  // Compensator Rows
  CompensatorRows: number | undefined;
  x300a00e7: number | undefined;

  // Compensator Columns
  CompensatorColumns: number | undefined;
  x300a00e8: number | undefined;

  // Compensator Pixel Spacing
  CompensatorPixelSpacing: Array<number> | undefined;
  x300a00e9: Array<number> | undefined;

  // Compensator Position
  CompensatorPosition: Array<number> | undefined;
  x300a00ea: Array<number> | undefined;

  // Compensator Transmission Data
  CompensatorTransmissionData: Array<number> | undefined;
  x300a00eb: Array<number> | undefined;

  // Compensator Thickness Data
  CompensatorThicknessData: Array<number> | undefined;
  x300a00ec: Array<number> | undefined;

  // Number of Boli
  NumberOfBoli: number | undefined;
  x300a00ed: number | undefined;

  // Compensator Type
  CompensatorType: string | undefined;
  x300a00ee: string | undefined;

  // Compensator Tray ID
  CompensatorTrayID: string | undefined;
  x300a00ef: string | undefined;

  // Number of Blocks
  NumberOfBlocks: number | undefined;
  x300a00f0: number | undefined;

  // Total Block Tray Factor
  TotalBlockTrayFactor: number | undefined;
  x300a00f2: number | undefined;

  // Total Block Tray Water-Equivalent Thickness
  TotalBlockTrayWaterEquivalentThickness: number | undefined;
  x300a00f3: number | undefined;

  // Block Sequence
  BlockSequence: Array<Dataset> | undefined;
  x300a00f4: Array<Dataset> | undefined;

  // Block Tray ID
  BlockTrayID: string | undefined;
  x300a00f5: string | undefined;

  // Source to Block Tray Distance
  SourceToBlockTrayDistance: number | undefined;
  x300a00f6: number | undefined;

  // Isocenter to Block Tray Distance
  IsocenterToBlockTrayDistance: number | undefined;
  x300a00f7: number | undefined;

  // Block Type
  BlockType: string | undefined;
  x300a00f8: string | undefined;

  // Accessory Code
  AccessoryCode: string | undefined;
  x300a00f9: string | undefined;

  // Block Divergence
  BlockDivergence: string | undefined;
  x300a00fa: string | undefined;

  // Block Mounting Position
  BlockMountingPosition: string | undefined;
  x300a00fb: string | undefined;

  // Block Number
  BlockNumber: number | undefined;
  x300a00fc: number | undefined;

  // Block Name
  BlockName: string | undefined;
  x300a00fe: string | undefined;

  // Block Thickness
  BlockThickness: number | undefined;
  x300a0100: number | undefined;

  // Block Transmission
  BlockTransmission: number | undefined;
  x300a0102: number | undefined;

  // Block Number of Points
  BlockNumberOfPoints: number | undefined;
  x300a0104: number | undefined;

  // Block Data
  BlockData: Array<number> | undefined;
  x300a0106: Array<number> | undefined;

  // Applicator Sequence
  ApplicatorSequence: Array<Dataset> | undefined;
  x300a0107: Array<Dataset> | undefined;

  // Applicator ID
  ApplicatorID: string | undefined;
  x300a0108: string | undefined;

  // Applicator Type
  ApplicatorType: string | undefined;
  x300a0109: string | undefined;

  // Applicator Description
  ApplicatorDescription: string | undefined;
  x300a010a: string | undefined;

  // Cumulative Dose Reference Coefficient
  CumulativeDoseReferenceCoefficient: number | undefined;
  x300a010c: number | undefined;

  // Final Cumulative Meterset Weight
  FinalCumulativeMetersetWeight: number | undefined;
  x300a010e: number | undefined;

  // Number of Control Points
  NumberOfControlPoints: number | undefined;
  x300a0110: number | undefined;

  // Control Point Sequence
  ControlPointSequence: Array<Dataset> | undefined;
  x300a0111: Array<Dataset> | undefined;

  // Control Point Index
  ControlPointIndex: number | undefined;
  x300a0112: number | undefined;

  // Nominal Beam Energy
  NominalBeamEnergy: number | undefined;
  x300a0114: number | undefined;

  // Dose Rate Set
  DoseRateSet: number | undefined;
  x300a0115: number | undefined;

  // Wedge Position Sequence
  WedgePositionSequence: Array<Dataset> | undefined;
  x300a0116: Array<Dataset> | undefined;

  // Wedge Position
  WedgePosition: string | undefined;
  x300a0118: string | undefined;

  // Beam Limiting Device Position Sequence
  BeamLimitingDevicePositionSequence: Array<Dataset> | undefined;
  x300a011a: Array<Dataset> | undefined;

  // Leaf/Jaw Positions
  LeafJawPositions: Array<number> | undefined;
  x300a011c: Array<number> | undefined;

  // Gantry Angle
  GantryAngle: number | undefined;
  x300a011e: number | undefined;

  // Gantry Rotation Direction
  GantryRotationDirection: string | undefined;
  x300a011f: string | undefined;

  // Beam Limiting Device Angle
  BeamLimitingDeviceAngle: number | undefined;
  x300a0120: number | undefined;

  // Beam Limiting Device Rotation Direction
  BeamLimitingDeviceRotationDirection: string | undefined;
  x300a0121: string | undefined;

  // Patient Support Angle
  PatientSupportAngle: number | undefined;
  x300a0122: number | undefined;

  // Patient Support Rotation Direction
  PatientSupportRotationDirection: string | undefined;
  x300a0123: string | undefined;

  // Table Top Eccentric Axis Distance
  TableTopEccentricAxisDistance: number | undefined;
  x300a0124: number | undefined;

  // Table Top Eccentric Angle
  TableTopEccentricAngle: number | undefined;
  x300a0125: number | undefined;

  // Table Top Eccentric Rotation Direction
  TableTopEccentricRotationDirection: string | undefined;
  x300a0126: string | undefined;

  // Table Top Vertical Position
  TableTopVerticalPosition: number | undefined;
  x300a0128: number | undefined;

  // Table Top Longitudinal Position
  TableTopLongitudinalPosition: number | undefined;
  x300a0129: number | undefined;

  // Table Top Lateral Position
  TableTopLateralPosition: number | undefined;
  x300a012a: number | undefined;

  // Isocenter Position
  IsocenterPosition: Array<number> | undefined;
  x300a012c: Array<number> | undefined;

  // Surface Entry Point
  SurfaceEntryPoint: Array<number> | undefined;
  x300a012e: Array<number> | undefined;

  // Source to Surface Distance
  SourceToSurfaceDistance: number | undefined;
  x300a0130: number | undefined;

  // Cumulative Meterset Weight
  CumulativeMetersetWeight: number | undefined;
  x300a0134: number | undefined;

  // Table Top Pitch Angle
  TableTopPitchAngle: number | undefined;
  x300a0140: number | undefined;

  // Table Top Pitch Rotation Direction
  TableTopPitchRotationDirection: string | undefined;
  x300a0142: string | undefined;

  // Table Top Roll Angle
  TableTopRollAngle: number | undefined;
  x300a0144: number | undefined;

  // Table Top Roll Rotation Direction
  TableTopRollRotationDirection: string | undefined;
  x300a0146: string | undefined;

  // Head Fixation Angle
  HeadFixationAngle: number | undefined;
  x300a0148: number | undefined;

  // Gantry Pitch Angle
  GantryPitchAngle: number | undefined;
  x300a014a: number | undefined;

  // Gantry Pitch Rotation Direction
  GantryPitchRotationDirection: string | undefined;
  x300a014c: string | undefined;

  // Gantry Pitch Angle Tolerance
  GantryPitchAngleTolerance: number | undefined;
  x300a014e: number | undefined;

  // Patient Setup Sequence
  PatientSetupSequence: Array<Dataset> | undefined;
  x300a0180: Array<Dataset> | undefined;

  // Patient Setup Number
  PatientSetupNumber: number | undefined;
  x300a0182: number | undefined;

  // Patient Setup Label
  PatientSetupLabel: string | undefined;
  x300a0183: string | undefined;

  // Patient Additional Position
  PatientAdditionalPosition: string | undefined;
  x300a0184: string | undefined;

  // Fixation Device Sequence
  FixationDeviceSequence: Array<Dataset> | undefined;
  x300a0190: Array<Dataset> | undefined;

  // Fixation Device Type
  FixationDeviceType: string | undefined;
  x300a0192: string | undefined;

  // Fixation Device Label
  FixationDeviceLabel: string | undefined;
  x300a0194: string | undefined;

  // Fixation Device Position
  FixationDevicePosition: string | undefined;
  x300a0198: string | undefined;

  // Fixation Device Pitch Angle
  FixationDevicePitchAngle: number | undefined;
  x300a0199: number | undefined;

  // Fixation Device Roll Angle
  FixationDeviceRollAngle: number | undefined;
  x300a019a: number | undefined;

  // Shielding Device Sequence
  ShieldingDeviceSequence: Array<Dataset> | undefined;
  x300a01a0: Array<Dataset> | undefined;

  // Shielding Device Type
  ShieldingDeviceType: string | undefined;
  x300a01a2: string | undefined;

  // Shielding Device Label
  ShieldingDeviceLabel: string | undefined;
  x300a01a4: string | undefined;

  // Shielding Device Position
  ShieldingDevicePosition: string | undefined;
  x300a01a8: string | undefined;

  // Setup Technique
  SetupTechnique: string | undefined;
  x300a01b0: string | undefined;

  // Setup Device Sequence
  SetupDeviceSequence: Array<Dataset> | undefined;
  x300a01b4: Array<Dataset> | undefined;

  // Setup Device Type
  SetupDeviceType: string | undefined;
  x300a01b6: string | undefined;

  // Setup Device Label
  SetupDeviceLabel: string | undefined;
  x300a01b8: string | undefined;

  // Setup Device Parameter
  SetupDeviceParameter: number | undefined;
  x300a01bc: number | undefined;

  // Table Top Vertical Setup Displacement
  TableTopVerticalSetupDisplacement: number | undefined;
  x300a01d2: number | undefined;

  // Table Top Longitudinal Setup Displacement
  TableTopLongitudinalSetupDisplacement: number | undefined;
  x300a01d4: number | undefined;

  // Table Top Lateral Setup Displacement
  TableTopLateralSetupDisplacement: number | undefined;
  x300a01d6: number | undefined;

  // Brachy Treatment Technique
  BrachyTreatmentTechnique: string | undefined;
  x300a0200: string | undefined;

  // Brachy Treatment Type
  BrachyTreatmentType: string | undefined;
  x300a0202: string | undefined;

  // Treatment Machine Sequence
  TreatmentMachineSequence: Array<Dataset> | undefined;
  x300a0206: Array<Dataset> | undefined;

  // Source Sequence
  SourceSequence: Array<Dataset> | undefined;
  x300a0210: Array<Dataset> | undefined;

  // Source Number
  SourceNumber: number | undefined;
  x300a0212: number | undefined;

  // Source Type
  SourceType: string | undefined;
  x300a0214: string | undefined;

  // Source Manufacturer
  SourceManufacturer: string | undefined;
  x300a0216: string | undefined;

  // Active Source Diameter
  ActiveSourceDiameter: number | undefined;
  x300a0218: number | undefined;

  // Active Source Length
  ActiveSourceLength: number | undefined;
  x300a021a: number | undefined;

  // Source Model ID
  SourceModelID: string | undefined;
  x300a021b: string | undefined;

  // Source Description
  SourceDescription: string | undefined;
  x300a021c: string | undefined;

  // Source Encapsulation Nominal Thickness
  SourceEncapsulationNominalThickness: number | undefined;
  x300a0222: number | undefined;

  // Source Encapsulation Nominal Transmission
  SourceEncapsulationNominalTransmission: number | undefined;
  x300a0224: number | undefined;

  // Source Isotope Name
  SourceIsotopeName: string | undefined;
  x300a0226: string | undefined;

  // Source Isotope Half Life
  SourceIsotopeHalfLife: number | undefined;
  x300a0228: number | undefined;

  // Source Strength Units
  SourceStrengthUnits: string | undefined;
  x300a0229: string | undefined;

  // Reference Air Kerma Rate
  ReferenceAirKermaRate: number | undefined;
  x300a022a: number | undefined;

  // Source Strength
  SourceStrength: number | undefined;
  x300a022b: number | undefined;

  // Source Strength Reference Date
  SourceStrengthReferenceDate: Date | undefined;
  x300a022c: Date | undefined;

  // Source Strength Reference Time
  SourceStrengthReferenceTime: string | undefined;
  x300a022e: string | undefined;

  // Application Setup Sequence
  ApplicationSetupSequence: Array<Dataset> | undefined;
  x300a0230: Array<Dataset> | undefined;

  // Application Setup Type
  ApplicationSetupType: string | undefined;
  x300a0232: string | undefined;

  // Application Setup Number
  ApplicationSetupNumber: number | undefined;
  x300a0234: number | undefined;

  // Application Setup Name
  ApplicationSetupName: string | undefined;
  x300a0236: string | undefined;

  // Application Setup Manufacturer
  ApplicationSetupManufacturer: string | undefined;
  x300a0238: string | undefined;

  // Template Number
  TemplateNumber: number | undefined;
  x300a0240: number | undefined;

  // Template Type
  TemplateType: string | undefined;
  x300a0242: string | undefined;

  // Template Name
  TemplateName: string | undefined;
  x300a0244: string | undefined;

  // Total Reference Air Kerma
  TotalReferenceAirKerma: number | undefined;
  x300a0250: number | undefined;

  // Brachy Accessory Device Sequence
  BrachyAccessoryDeviceSequence: Array<Dataset> | undefined;
  x300a0260: Array<Dataset> | undefined;

  // Brachy Accessory Device Number
  BrachyAccessoryDeviceNumber: number | undefined;
  x300a0262: number | undefined;

  // Brachy Accessory Device ID
  BrachyAccessoryDeviceID: string | undefined;
  x300a0263: string | undefined;

  // Brachy Accessory Device Type
  BrachyAccessoryDeviceType: string | undefined;
  x300a0264: string | undefined;

  // Brachy Accessory Device Name
  BrachyAccessoryDeviceName: string | undefined;
  x300a0266: string | undefined;

  // Brachy Accessory Device Nominal Thickness
  BrachyAccessoryDeviceNominalThickness: number | undefined;
  x300a026a: number | undefined;

  // Brachy Accessory Device Nominal Transmission
  BrachyAccessoryDeviceNominalTransmission: number | undefined;
  x300a026c: number | undefined;

  // Channel Sequence
  ChannelSequence: Array<Dataset> | undefined;
  x300a0280: Array<Dataset> | undefined;

  // Channel Number
  ChannelNumber: number | undefined;
  x300a0282: number | undefined;

  // Channel Length
  ChannelLength: number | undefined;
  x300a0284: number | undefined;

  // Channel Total Time
  ChannelTotalTime: number | undefined;
  x300a0286: number | undefined;

  // Source Movement Type
  SourceMovementType: string | undefined;
  x300a0288: string | undefined;

  // Number of Pulses
  NumberOfPulses: number | undefined;
  x300a028a: number | undefined;

  // Pulse Repetition Interval
  PulseRepetitionInterval: number | undefined;
  x300a028c: number | undefined;

  // Source Applicator Number
  SourceApplicatorNumber: number | undefined;
  x300a0290: number | undefined;

  // Source Applicator ID
  SourceApplicatorID: string | undefined;
  x300a0291: string | undefined;

  // Source Applicator Type
  SourceApplicatorType: string | undefined;
  x300a0292: string | undefined;

  // Source Applicator Name
  SourceApplicatorName: string | undefined;
  x300a0294: string | undefined;

  // Source Applicator Length
  SourceApplicatorLength: number | undefined;
  x300a0296: number | undefined;

  // Source Applicator Manufacturer
  SourceApplicatorManufacturer: string | undefined;
  x300a0298: string | undefined;

  // Source Applicator Wall Nominal Thickness
  SourceApplicatorWallNominalThickness: number | undefined;
  x300a029c: number | undefined;

  // Source Applicator Wall Nominal Transmission
  SourceApplicatorWallNominalTransmission: number | undefined;
  x300a029e: number | undefined;

  // Source Applicator Step Size
  SourceApplicatorStepSize: number | undefined;
  x300a02a0: number | undefined;

  // Transfer Tube Number
  TransferTubeNumber: number | undefined;
  x300a02a2: number | undefined;

  // Transfer Tube Length
  TransferTubeLength: number | undefined;
  x300a02a4: number | undefined;

  // Channel Shield Sequence
  ChannelShieldSequence: Array<Dataset> | undefined;
  x300a02b0: Array<Dataset> | undefined;

  // Channel Shield Number
  ChannelShieldNumber: number | undefined;
  x300a02b2: number | undefined;

  // Channel Shield ID
  ChannelShieldID: string | undefined;
  x300a02b3: string | undefined;

  // Channel Shield Name
  ChannelShieldName: string | undefined;
  x300a02b4: string | undefined;

  // Channel Shield Nominal Thickness
  ChannelShieldNominalThickness: number | undefined;
  x300a02b8: number | undefined;

  // Channel Shield Nominal Transmission
  ChannelShieldNominalTransmission: number | undefined;
  x300a02ba: number | undefined;

  // Final Cumulative Time Weight
  FinalCumulativeTimeWeight: number | undefined;
  x300a02c8: number | undefined;

  // Brachy Control Point Sequence
  BrachyControlPointSequence: Array<Dataset> | undefined;
  x300a02d0: Array<Dataset> | undefined;

  // Control Point Relative Position
  ControlPointRelativePosition: number | undefined;
  x300a02d2: number | undefined;

  // Control Point 3D Position
  ControlPoint3DPosition: Array<number> | undefined;
  x300a02d4: Array<number> | undefined;

  // Cumulative Time Weight
  CumulativeTimeWeight: number | undefined;
  x300a02d6: number | undefined;

  // Compensator Divergence
  CompensatorDivergence: string | undefined;
  x300a02e0: string | undefined;

  // Compensator Mounting Position
  CompensatorMountingPosition: string | undefined;
  x300a02e1: string | undefined;

  // Source to Compensator Distance
  SourceToCompensatorDistance: Array<number> | undefined;
  x300a02e2: Array<number> | undefined;

  // Total Compensator Tray Water-Equivalent Thickness
  TotalCompensatorTrayWaterEquivalentThickness: number | undefined;
  x300a02e3: number | undefined;

  // Isocenter to Compensator Tray Distance
  IsocenterToCompensatorTrayDistance: number | undefined;
  x300a02e4: number | undefined;

  // Compensator Column Offset
  CompensatorColumnOffset: number | undefined;
  x300a02e5: number | undefined;

  // Isocenter to Compensator Distances
  IsocenterToCompensatorDistances: Array<number> | undefined;
  x300a02e6: Array<number> | undefined;

  // Compensator Relative Stopping Power Ratio
  CompensatorRelativeStoppingPowerRatio: number | undefined;
  x300a02e7: number | undefined;

  // Compensator Milling Tool Diameter
  CompensatorMillingToolDiameter: number | undefined;
  x300a02e8: number | undefined;

  // Ion Range Compensator Sequence
  IonRangeCompensatorSequence: Array<Dataset> | undefined;
  x300a02ea: Array<Dataset> | undefined;

  // Radiation Mass Number
  RadiationMassNumber: number | undefined;
  x300a0302: number | undefined;

  // Radiation Atomic Number
  RadiationAtomicNumber: number | undefined;
  x300a0304: number | undefined;

  // Radiation Charge State
  RadiationChargeState: Uint8Array | undefined;
  x300a0306: Uint8Array | undefined;

  // Scan Mode
  ScanMode: string | undefined;
  x300a0308: string | undefined;

  // Virtual Source-Axis Distances
  VirtualSourceAxisDistances: Array<number> | undefined;
  x300a030a: Array<number> | undefined;

  // Snout Sequence
  SnoutSequence: Array<Dataset> | undefined;
  x300a030c: Array<Dataset> | undefined;

  // Snout Position
  SnoutPosition: number | undefined;
  x300a030d: number | undefined;

  // Snout ID
  SnoutID: string | undefined;
  x300a030f: string | undefined;

  // Number of Range Shifters
  NumberOfRangeShifters: number | undefined;
  x300a0312: number | undefined;

  // Range Shifter Sequence
  RangeShifterSequence: Array<Dataset> | undefined;
  x300a0314: Array<Dataset> | undefined;

  // Range Shifter Number
  RangeShifterNumber: number | undefined;
  x300a0316: number | undefined;

  // Range Shifter ID
  RangeShifterID: string | undefined;
  x300a0318: string | undefined;

  // Range Shifter Type
  RangeShifterType: string | undefined;
  x300a0320: string | undefined;

  // Range Shifter Description
  RangeShifterDescription: string | undefined;
  x300a0322: string | undefined;

  // Number of Lateral Spreading Devices
  NumberOfLateralSpreadingDevices: number | undefined;
  x300a0330: number | undefined;

  // Lateral Spreading Device Sequence
  LateralSpreadingDeviceSequence: Array<Dataset> | undefined;
  x300a0332: Array<Dataset> | undefined;

  // Lateral Spreading Device Number
  LateralSpreadingDeviceNumber: number | undefined;
  x300a0334: number | undefined;

  // Lateral Spreading Device ID
  LateralSpreadingDeviceID: string | undefined;
  x300a0336: string | undefined;

  // Lateral Spreading Device Type
  LateralSpreadingDeviceType: string | undefined;
  x300a0338: string | undefined;

  // Lateral Spreading Device Description
  LateralSpreadingDeviceDescription: string | undefined;
  x300a033a: string | undefined;

  // Lateral Spreading Device Water Equivalent Thickness
  LateralSpreadingDeviceWaterEquivalentThickness: number | undefined;
  x300a033c: number | undefined;

  // Number of Range Modulators
  NumberOfRangeModulators: number | undefined;
  x300a0340: number | undefined;

  // Range Modulator Sequence
  RangeModulatorSequence: Array<Dataset> | undefined;
  x300a0342: Array<Dataset> | undefined;

  // Range Modulator Number
  RangeModulatorNumber: number | undefined;
  x300a0344: number | undefined;

  // Range Modulator ID
  RangeModulatorID: string | undefined;
  x300a0346: string | undefined;

  // Range Modulator Type
  RangeModulatorType: string | undefined;
  x300a0348: string | undefined;

  // Range Modulator Description
  RangeModulatorDescription: string | undefined;
  x300a034a: string | undefined;

  // Beam Current Modulation ID
  BeamCurrentModulationID: string | undefined;
  x300a034c: string | undefined;

  // Patient Support Type
  PatientSupportType: string | undefined;
  x300a0350: string | undefined;

  // Patient Support ID
  PatientSupportID: string | undefined;
  x300a0352: string | undefined;

  // Patient Support Accessory Code
  PatientSupportAccessoryCode: string | undefined;
  x300a0354: string | undefined;

  // Fixation Light Azimuthal Angle
  FixationLightAzimuthalAngle: number | undefined;
  x300a0356: number | undefined;

  // Fixation Light Polar Angle
  FixationLightPolarAngle: number | undefined;
  x300a0358: number | undefined;

  // Meterset Rate
  MetersetRate: number | undefined;
  x300a035a: number | undefined;

  // Range Shifter Settings Sequence
  RangeShifterSettingsSequence: Array<Dataset> | undefined;
  x300a0360: Array<Dataset> | undefined;

  // Range Shifter Setting
  RangeShifterSetting: string | undefined;
  x300a0362: string | undefined;

  // Isocenter to Range Shifter Distance
  IsocenterToRangeShifterDistance: number | undefined;
  x300a0364: number | undefined;

  // Range Shifter Water Equivalent Thickness
  RangeShifterWaterEquivalentThickness: number | undefined;
  x300a0366: number | undefined;

  // Lateral Spreading Device Settings Sequence
  LateralSpreadingDeviceSettingsSequence: Array<Dataset> | undefined;
  x300a0370: Array<Dataset> | undefined;

  // Lateral Spreading Device Setting
  LateralSpreadingDeviceSetting: string | undefined;
  x300a0372: string | undefined;

  // Isocenter to Lateral Spreading Device Distance
  IsocenterToLateralSpreadingDeviceDistance: number | undefined;
  x300a0374: number | undefined;

  // Range Modulator Settings Sequence
  RangeModulatorSettingsSequence: Array<Dataset> | undefined;
  x300a0380: Array<Dataset> | undefined;

  // Range Modulator Gating Start Value
  RangeModulatorGatingStartValue: number | undefined;
  x300a0382: number | undefined;

  // Range Modulator Gating Stop Value
  RangeModulatorGatingStopValue: number | undefined;
  x300a0384: number | undefined;

  // Range Modulator Gating Start Water Equivalent Thickness
  RangeModulatorGatingStartWaterEquivalentThickness: number | undefined;
  x300a0386: number | undefined;

  // Range Modulator Gating Stop Water Equivalent Thickness
  RangeModulatorGatingStopWaterEquivalentThickness: number | undefined;
  x300a0388: number | undefined;

  // Isocenter to Range Modulator Distance
  IsocenterToRangeModulatorDistance: number | undefined;
  x300a038a: number | undefined;

  // Scan Spot Tune ID
  ScanSpotTuneID: string | undefined;
  x300a0390: string | undefined;

  // Number of Scan Spot Positions
  NumberOfScanSpotPositions: number | undefined;
  x300a0392: number | undefined;

  // Scan Spot Position Map
  ScanSpotPositionMap: Array<number> | undefined;
  x300a0394: Array<number> | undefined;

  // Scan Spot Meterset Weights
  ScanSpotMetersetWeights: Array<number> | undefined;
  x300a0396: Array<number> | undefined;

  // Scanning Spot Size
  ScanningSpotSize: Array<number> | undefined;
  x300a0398: Array<number> | undefined;

  // Number of Paintings
  NumberOfPaintings: number | undefined;
  x300a039a: number | undefined;

  // Ion Tolerance Table Sequence
  IonToleranceTableSequence: Array<Dataset> | undefined;
  x300a03a0: Array<Dataset> | undefined;

  // Ion Beam Sequence
  IonBeamSequence: Array<Dataset> | undefined;
  x300a03a2: Array<Dataset> | undefined;

  // Ion Beam Limiting Device Sequence
  IonBeamLimitingDeviceSequence: Array<Dataset> | undefined;
  x300a03a4: Array<Dataset> | undefined;

  // Ion Block Sequence
  IonBlockSequence: Array<Dataset> | undefined;
  x300a03a6: Array<Dataset> | undefined;

  // Ion Control Point Sequence
  IonControlPointSequence: Array<Dataset> | undefined;
  x300a03a8: Array<Dataset> | undefined;

  // Ion Wedge Sequence
  IonWedgeSequence: Array<Dataset> | undefined;
  x300a03aa: Array<Dataset> | undefined;

  // Ion Wedge Position Sequence
  IonWedgePositionSequence: Array<Dataset> | undefined;
  x300a03ac: Array<Dataset> | undefined;

  // Referenced Setup Image Sequence
  ReferencedSetupImageSequence: Array<Dataset> | undefined;
  x300a0401: Array<Dataset> | undefined;

  // Motion Synchronization Sequence
  MotionSynchronizationSequence: Array<Dataset> | undefined;
  x300a0410: Array<Dataset> | undefined;

  // Control Point Orientation
  ControlPointOrientation: Array<number> | undefined;
  x300a0412: Array<number> | undefined;

  // General Accessory Sequence
  GeneralAccessorySequence: Array<Dataset> | undefined;
  x300a0420: Array<Dataset> | undefined;

  // General Accessory ID
  GeneralAccessoryID: string | undefined;
  x300a0421: string | undefined;

  // General Accessory Type
  GeneralAccessoryType: string | undefined;
  x300a0423: string | undefined;

  // General Accessory Number
  GeneralAccessoryNumber: number | undefined;
  x300a0424: number | undefined;

  // Source to General Accessory Distance
  SourceToGeneralAccessoryDistance: number | undefined;
  x300a0425: number | undefined;

  // Applicator Geometry Sequence
  ApplicatorGeometrySequence: Array<Dataset> | undefined;
  x300a0431: Array<Dataset> | undefined;

  // Applicator Aperture Shape
  ApplicatorApertureShape: string | undefined;
  x300a0432: string | undefined;

  // Applicator Opening
  ApplicatorOpening: number | undefined;
  x300a0433: number | undefined;

  // Applicator Opening X
  ApplicatorOpeningX: number | undefined;
  x300a0434: number | undefined;

  // Applicator Opening Y
  ApplicatorOpeningY: number | undefined;
  x300a0435: number | undefined;

  // Source to Applicator Mounting Position Distance
  SourceToApplicatorMountingPositionDistance: number | undefined;
  x300a0436: number | undefined;

  // Referenced RT Plan Sequence
  ReferencedRTPlanSequence: Array<Dataset> | undefined;
  x300c0002: Array<Dataset> | undefined;

  // Referenced Beam Sequence
  ReferencedBeamSequence: Array<Dataset> | undefined;
  x300c0004: Array<Dataset> | undefined;

  // Referenced Beam Number
  ReferencedBeamNumber: number | undefined;
  x300c0006: number | undefined;

  // Referenced Reference Image Number
  ReferencedReferenceImageNumber: number | undefined;
  x300c0007: number | undefined;

  // Start Cumulative Meterset Weight
  StartCumulativeMetersetWeight: number | undefined;
  x300c0008: number | undefined;

  // End Cumulative Meterset Weight
  EndCumulativeMetersetWeight: number | undefined;
  x300c0009: number | undefined;

  // Referenced Brachy Application Setup Sequence
  ReferencedBrachyApplicationSetupSequence: Array<Dataset> | undefined;
  x300c000a: Array<Dataset> | undefined;

  // Referenced Brachy Application Setup Number
  ReferencedBrachyApplicationSetupNumber: number | undefined;
  x300c000c: number | undefined;

  // Referenced Source Number
  ReferencedSourceNumber: number | undefined;
  x300c000e: number | undefined;

  // Referenced Fraction Group Sequence
  ReferencedFractionGroupSequence: Array<Dataset> | undefined;
  x300c0020: Array<Dataset> | undefined;

  // Referenced Fraction Group Number
  ReferencedFractionGroupNumber: number | undefined;
  x300c0022: number | undefined;

  // Referenced Verification Image Sequence
  ReferencedVerificationImageSequence: Array<Dataset> | undefined;
  x300c0040: Array<Dataset> | undefined;

  // Referenced Reference Image Sequence
  ReferencedReferenceImageSequence: Array<Dataset> | undefined;
  x300c0042: Array<Dataset> | undefined;

  // Referenced Dose Reference Sequence
  ReferencedDoseReferenceSequence: Array<Dataset> | undefined;
  x300c0050: Array<Dataset> | undefined;

  // Referenced Dose Reference Number
  ReferencedDoseReferenceNumber: number | undefined;
  x300c0051: number | undefined;

  // Brachy Referenced Dose Reference Sequence
  BrachyReferencedDoseReferenceSequence: Array<Dataset> | undefined;
  x300c0055: Array<Dataset> | undefined;

  // Referenced Structure Set Sequence
  ReferencedStructureSetSequence: Array<Dataset> | undefined;
  x300c0060: Array<Dataset> | undefined;

  // Referenced Patient Setup Number
  ReferencedPatientSetupNumber: number | undefined;
  x300c006a: number | undefined;

  // Referenced Dose Sequence
  ReferencedDoseSequence: Array<Dataset> | undefined;
  x300c0080: Array<Dataset> | undefined;

  // Referenced Tolerance Table Number
  ReferencedToleranceTableNumber: number | undefined;
  x300c00a0: number | undefined;

  // Referenced Bolus Sequence
  ReferencedBolusSequence: Array<Dataset> | undefined;
  x300c00b0: Array<Dataset> | undefined;

  // Referenced Wedge Number
  ReferencedWedgeNumber: number | undefined;
  x300c00c0: number | undefined;

  // Referenced Compensator Number
  ReferencedCompensatorNumber: number | undefined;
  x300c00d0: number | undefined;

  // Referenced Block Number
  ReferencedBlockNumber: number | undefined;
  x300c00e0: number | undefined;

  // Referenced Control Point Index
  ReferencedControlPointIndex: number | undefined;
  x300c00f0: number | undefined;

  // Referenced Control Point Sequence
  ReferencedControlPointSequence: Array<Dataset> | undefined;
  x300c00f2: Array<Dataset> | undefined;

  // Referenced Start Control Point Index
  ReferencedStartControlPointIndex: number | undefined;
  x300c00f4: number | undefined;

  // Referenced Stop Control Point Index
  ReferencedStopControlPointIndex: number | undefined;
  x300c00f6: number | undefined;

  // Referenced Range Shifter Number
  ReferencedRangeShifterNumber: number | undefined;
  x300c0100: number | undefined;

  // Referenced Lateral Spreading Device Number
  ReferencedLateralSpreadingDeviceNumber: number | undefined;
  x300c0102: number | undefined;

  // Referenced Range Modulator Number
  ReferencedRangeModulatorNumber: number | undefined;
  x300c0104: number | undefined;

  // Approval Status
  ApprovalStatus: string | undefined;
  x300e0002: string | undefined;

  // Review Date
  ReviewDate: Date | undefined;
  x300e0004: Date | undefined;

  // Review Time
  ReviewTime: string | undefined;
  x300e0005: string | undefined;

  // Reviewer Name
  ReviewerName: any | undefined;
  x300e0008: any | undefined;

  // Results ID
  ResultsID: string | undefined;
  x40080040: string | undefined;

  // Results ID Issuer
  ResultsIDIssuer: string | undefined;
  x40080042: string | undefined;

  // Referenced Interpretation Sequence
  ReferencedInterpretationSequence: Array<Dataset> | undefined;
  x40080050: Array<Dataset> | undefined;

  // Report Production Status (Trial)
  ReportProductionStatusTrial: string | undefined;
  x400800ff: string | undefined;

  // Interpretation Recorded Date
  InterpretationRecordedDate: Date | undefined;
  x40080100: Date | undefined;

  // Interpretation Recorded Time
  InterpretationRecordedTime: string | undefined;
  x40080101: string | undefined;

  // Interpretation Recorder
  InterpretationRecorder: any | undefined;
  x40080102: any | undefined;

  // Reference to Recorded Sound
  ReferenceToRecordedSound: string | undefined;
  x40080103: string | undefined;

  // Interpretation Transcription Date
  InterpretationTranscriptionDate: Date | undefined;
  x40080108: Date | undefined;

  // Interpretation Transcription Time
  InterpretationTranscriptionTime: string | undefined;
  x40080109: string | undefined;

  // Interpretation Transcriber
  InterpretationTranscriber: any | undefined;
  x4008010a: any | undefined;

  // Interpretation Author
  InterpretationAuthor: any | undefined;
  x4008010c: any | undefined;

  // Interpretation Approver Sequence
  InterpretationApproverSequence: Array<Dataset> | undefined;
  x40080111: Array<Dataset> | undefined;

  // Interpretation Approval Date
  InterpretationApprovalDate: Date | undefined;
  x40080112: Date | undefined;

  // Interpretation Approval Time
  InterpretationApprovalTime: string | undefined;
  x40080113: string | undefined;

  // Physician Approving Interpretation
  PhysicianApprovingInterpretation: any | undefined;
  x40080114: any | undefined;

  // Interpretation Diagnosis Code Sequence
  InterpretationDiagnosisCodeSequence: Array<Dataset> | undefined;
  x40080117: Array<Dataset> | undefined;

  // Results Distribution List Sequence
  ResultsDistributionListSequence: Array<Dataset> | undefined;
  x40080118: Array<Dataset> | undefined;

  // Distribution Name
  DistributionName: any | undefined;
  x40080119: any | undefined;

  // Distribution Address
  DistributionAddress: string | undefined;
  x4008011a: string | undefined;

  // Interpretation ID
  InterpretationID: string | undefined;
  x40080200: string | undefined;

  // Interpretation ID Issuer
  InterpretationIDIssuer: string | undefined;
  x40080202: string | undefined;

  // Interpretation Type ID
  InterpretationTypeID: string | undefined;
  x40080210: string | undefined;

  // Interpretation Status ID
  InterpretationStatusID: string | undefined;
  x40080212: string | undefined;

  // Low Energy Detectors
  LowEnergyDetectors: string | undefined;
  x40100001: string | undefined;

  // High Energy Detectors
  HighEnergyDetectors: string | undefined;
  x40100002: string | undefined;

  // Detector Geometry Sequence
  DetectorGeometrySequence: Array<Dataset> | undefined;
  x40100004: Array<Dataset> | undefined;

  // Threat ROI Voxel Sequence
  ThreatROIVoxelSequence: Array<Dataset> | undefined;
  x40101001: Array<Dataset> | undefined;

  // Threat ROI Base
  ThreatROIBase: Array<number> | undefined;
  x40101004: Array<number> | undefined;

  // Threat ROI Extents
  ThreatROIExtents: Array<number> | undefined;
  x40101005: Array<number> | undefined;

  // Route Segment ID
  RouteSegmentID: string | undefined;
  x40101007: string | undefined;

  // Gantry Type
  GantryType: string | undefined;
  x40101008: string | undefined;

  // OOI Owner Type
  OOIOwnerType: string | undefined;
  x40101009: string | undefined;

  // Route Segment Sequence
  RouteSegmentSequence: Array<Dataset> | undefined;
  x4010100a: Array<Dataset> | undefined;

  // Potential Threat Object ID
  PotentialThreatObjectID: number | undefined;
  x40101010: number | undefined;

  // Threat Sequence
  ThreatSequence: Array<Dataset> | undefined;
  x40101011: Array<Dataset> | undefined;

  // Threat Category
  ThreatCategory: string | undefined;
  x40101012: string | undefined;

  // ATD Ability Assessment
  ATDAbilityAssessment: string | undefined;
  x40101014: string | undefined;

  // ATD Assessment Flag
  ATDAssessmentFlag: string | undefined;
  x40101015: string | undefined;

  // ATD Assessment Probability
  ATDAssessmentProbability: number | undefined;
  x40101016: number | undefined;

  // Mass
  Mass: number | undefined;
  x40101017: number | undefined;

  // Density
  Density: number | undefined;
  x40101018: number | undefined;

  // Z Effective
  ZEffective: number | undefined;
  x40101019: number | undefined;

  // Boarding Pass ID
  BoardingPassID: string | undefined;
  x4010101a: string | undefined;

  // Center of Mass
  CenterOfMass: Array<number> | undefined;
  x4010101b: Array<number> | undefined;

  // Center of PTO
  CenterOfPTO: Array<number> | undefined;
  x4010101c: Array<number> | undefined;

  // Bounding Polygon
  BoundingPolygon: Array<number> | undefined;
  x4010101d: Array<number> | undefined;

  // Route Segment Start Location ID
  RouteSegmentStartLocationID: string | undefined;
  x4010101e: string | undefined;

  // Route Segment End Location ID
  RouteSegmentEndLocationID: string | undefined;
  x4010101f: string | undefined;

  // Route Segment Location ID Type
  RouteSegmentLocationIDType: string | undefined;
  x40101020: string | undefined;

  // Abort Reason
  AbortReason: Array<string> | undefined;
  x40101021: Array<string> | undefined;

  // Volume of PTO
  VolumeOfPTO: number | undefined;
  x40101023: number | undefined;

  // Abort Flag
  AbortFlag: string | undefined;
  x40101024: string | undefined;

  // Route Segment Start Time
  RouteSegmentStartTime: string | undefined;
  x40101025: string | undefined;

  // Route Segment End Time
  RouteSegmentEndTime: string | undefined;
  x40101026: string | undefined;

  // TDR Type
  TDRType: string | undefined;
  x40101027: string | undefined;

  // International Route Segment
  InternationalRouteSegment: string | undefined;
  x40101028: string | undefined;

  // Threat Detection Algorithm and Version
  ThreatDetectionAlgorithmandVersion: Array<string> | undefined;
  x40101029: Array<string> | undefined;

  // Assigned Location
  AssignedLocation: string | undefined;
  x4010102a: string | undefined;

  // Alarm Decision Time
  AlarmDecisionTime: string | undefined;
  x4010102b: string | undefined;

  // Alarm Decision
  AlarmDecision: string | undefined;
  x40101031: string | undefined;

  // Number of Total Objects
  NumberOfTotalObjects: number | undefined;
  x40101033: number | undefined;

  // Number of Alarm Objects
  NumberOfAlarmObjects: number | undefined;
  x40101034: number | undefined;

  // PTO Representation Sequence
  PTORepresentationSequence: Array<Dataset> | undefined;
  x40101037: Array<Dataset> | undefined;

  // ATD Assessment Sequence
  ATDAssessmentSequence: Array<Dataset> | undefined;
  x40101038: Array<Dataset> | undefined;

  // TIP Type
  TIPType: string | undefined;
  x40101039: string | undefined;

  // DICOS Version
  DICOSVersion: string | undefined;
  x4010103a: string | undefined;

  // OOI Owner Creation Time
  OOIOwnerCreationTime: string | undefined;
  x40101041: string | undefined;

  // OOI Type
  OOIType: string | undefined;
  x40101042: string | undefined;

  // OOI Size
  OOISize: Array<number> | undefined;
  x40101043: Array<number> | undefined;

  // Acquisition Status
  AcquisitionStatus: string | undefined;
  x40101044: string | undefined;

  // Basis Materials Code Sequence
  BasisMaterialsCodeSequence: Array<Dataset> | undefined;
  x40101045: Array<Dataset> | undefined;

  // Phantom Type
  PhantomType: string | undefined;
  x40101046: string | undefined;

  // OOI Owner Sequence
  OOIOwnerSequence: Array<Dataset> | undefined;
  x40101047: Array<Dataset> | undefined;

  // Scan Type
  ScanType: string | undefined;
  x40101048: string | undefined;

  // Itinerary ID
  ItineraryID: string | undefined;
  x40101051: string | undefined;

  // Itinerary ID Type
  ItineraryIDType: string | undefined;
  x40101052: string | undefined;

  // Itinerary ID Assigning Authority
  ItineraryIDAssigningAuthority: string | undefined;
  x40101053: string | undefined;

  // Route ID
  RouteID: string | undefined;
  x40101054: string | undefined;

  // Route ID Assigning Authority
  RouteIDAssigningAuthority: string | undefined;
  x40101055: string | undefined;

  // Inbound Arrival Type
  InboundArrivalType: string | undefined;
  x40101056: string | undefined;

  // Carrier ID
  CarrierID: string | undefined;
  x40101058: string | undefined;

  // Carrier ID Assigning Authority
  CarrierIDAssigningAuthority: string | undefined;
  x40101059: string | undefined;

  // Source Orientation
  SourceOrientation: Array<number> | undefined;
  x40101060: Array<number> | undefined;

  // Source Position
  SourcePosition: Array<number> | undefined;
  x40101061: Array<number> | undefined;

  // Belt Height
  BeltHeight: number | undefined;
  x40101062: number | undefined;

  // Algorithm Routing Code Sequence
  AlgorithmRoutingCodeSequence: Array<Dataset> | undefined;
  x40101064: Array<Dataset> | undefined;

  // Transport Classification
  TransportClassification: string | undefined;
  x40101067: string | undefined;

  // Total Processing Time
  TotalProcessingTime: number | undefined;
  x40101069: number | undefined;

  // Additional Screening Performed
  AdditionalScreeningPerformed: string | undefined;
  x4010106d: string | undefined;

  // Additional Inspection Selection Criteria
  AdditionalInspectionSelectionCriteria: string | undefined;
  x4010106e: string | undefined;

  // Additional Inspection Method Sequence
  AdditionalInspectionMethodSequence: Array<Dataset> | undefined;
  x4010106f: Array<Dataset> | undefined;

  // AIT Device Type
  AITDeviceType: string | undefined;
  x40101070: string | undefined;

  // QR Measurements Sequence
  QRMeasurementsSequence: Array<Dataset> | undefined;
  x40101071: Array<Dataset> | undefined;

  // Target Material Sequence
  TargetMaterialSequence: Array<Dataset> | undefined;
  x40101072: Array<Dataset> | undefined;

  // SNR Threshold
  SNRThreshold: number | undefined;
  x40101073: number | undefined;

  // Image Scale Representation
  ImageScaleRepresentation: number | undefined;
  x40101075: number | undefined;

  // Referenced PTO Sequence
  ReferencedPTOSequence: Array<Dataset> | undefined;
  x40101076: Array<Dataset> | undefined;

  // Referenced TDR Instance Sequence
  ReferencedTDRInstanceSequence: Array<Dataset> | undefined;
  x40101077: Array<Dataset> | undefined;

  // Anomaly Locator Indicator Sequence
  AnomalyLocatorIndicatorSequence: Array<Dataset> | undefined;
  x40101079: Array<Dataset> | undefined;

  // Anomaly Locator Indicator
  AnomalyLocatorIndicator: Array<number> | undefined;
  x4010107a: Array<number> | undefined;

  // PTO Region Sequence
  PTORegionSequence: Array<Dataset> | undefined;
  x4010107b: Array<Dataset> | undefined;

  // Inspection Selection Criteria
  InspectionSelectionCriteria: string | undefined;
  x4010107c: string | undefined;

  // Secondary Inspection Method Sequence
  SecondaryInspectionMethodSequence: Array<Dataset> | undefined;
  x4010107d: Array<Dataset> | undefined;

  // PRCS to RCS Orientation
  PRCSToRCSOrientation: Array<number> | undefined;
  x4010107e: Array<number> | undefined;

  // MAC Parameters Sequence
  MACParametersSequence: Array<Dataset> | undefined;
  x4ffe0001: Array<Dataset> | undefined;

  // Curve Dimensions
  CurveDimensions: number | undefined;
  x50xx0005: number | undefined;

  // Number of Points
  NumberOfPoints: number | undefined;
  x50xx0010: number | undefined;

  // Type of Data
  TypeOfData: string | undefined;
  x50xx0020: string | undefined;

  // Curve Description
  CurveDescription: string | undefined;
  x50xx0022: string | undefined;

  // Axis Units
  AxisUnits: Array<string> | undefined;
  x50xx0030: Array<string> | undefined;

  // Axis Labels
  AxisLabels: Array<string> | undefined;
  x50xx0040: Array<string> | undefined;

  // Data Value Representation
  DataValueRepresentation: number | undefined;
  x50xx0103: number | undefined;

  // Minimum Coordinate Value
  MinimumCoordinateValue: Array<number> | undefined;
  x50xx0104: Array<number> | undefined;

  // Maximum Coordinate Value
  MaximumCoordinateValue: Array<number> | undefined;
  x50xx0105: Array<number> | undefined;

  // Curve Range
  CurveRange: Array<string> | undefined;
  x50xx0106: Array<string> | undefined;

  // Curve Data Descriptor
  CurveDataDescriptor: Array<number> | undefined;
  x50xx0110: Array<number> | undefined;

  // Coordinate Start Value
  CoordinateStartValue: Array<number> | undefined;
  x50xx0112: Array<number> | undefined;

  // Coordinate Step Value
  CoordinateStepValue: Array<number> | undefined;
  x50xx0114: Array<number> | undefined;

  // Curve Activation Layer
  CurveActivationLayer: string | undefined;
  x50xx1001: string | undefined;

  // Audio Type
  AudioType: number | undefined;
  x50xx2000: number | undefined;

  // Audio Sample Format
  AudioSampleFormat: number | undefined;
  x50xx2002: number | undefined;

  // Number of Channels
  NumberOfChannels: number | undefined;
  x50xx2004: number | undefined;

  // Number of Samples
  NumberOfSamples: number | undefined;
  x50xx2006: number | undefined;

  // Sample Rate
  SampleRate: number | undefined;
  x50xx2008: number | undefined;

  // Total Time
  TotalTime: number | undefined;
  x50xx200a: number | undefined;

  // Curve Label
  CurveLabel: string | undefined;
  x50xx2500: string | undefined;

  // Curve Referenced Overlay Sequence
  CurveReferencedOverlaySequence: Array<Dataset> | undefined;
  x50xx2600: Array<Dataset> | undefined;

  // Curve Referenced Overlay Group
  CurveReferencedOverlayGroup: number | undefined;
  x50xx2610: number | undefined;

  // Shared Functional Groups Sequence
  SharedFunctionalGroupsSequence: Array<Dataset> | undefined;
  x52009229: Array<Dataset> | undefined;

  // Per-frame Functional Groups Sequence
  PerFrameFunctionalGroupsSequence: Array<Dataset> | undefined;
  x52009230: Array<Dataset> | undefined;

  // Waveform Sequence
  WaveformSequence: Array<Dataset> | undefined;
  x54000100: Array<Dataset> | undefined;

  // Waveform Bits Allocated
  WaveformBitsAllocated: number | undefined;
  x54001004: number | undefined;

  // Waveform Sample Interpretation
  WaveformSampleInterpretation: string | undefined;
  x54001006: string | undefined;

  // Overlay Rows
  OverlayRows: number | undefined;
  x60xx0010: number | undefined;

  // Overlay Columns
  OverlayColumns: number | undefined;
  x60xx0011: number | undefined;

  // Overlay Planes
  OverlayPlanes: number | undefined;
  x60xx0012: number | undefined;

  // Number of Frames in Overlay
  NumberOfFramesInOverlay: number | undefined;
  x60xx0015: number | undefined;

  // Overlay Description
  OverlayDescription: string | undefined;
  x60xx0022: string | undefined;

  // Overlay Type
  OverlayType: string | undefined;
  x60xx0040: string | undefined;

  // Overlay Subtype
  OverlaySubtype: string | undefined;
  x60xx0045: string | undefined;

  // Overlay Origin
  OverlayOrigin: Array<Uint8Array> | undefined;
  x60xx0050: Array<Uint8Array> | undefined;

  // Image Frame Origin
  ImageFrameOrigin: number | undefined;
  x60xx0051: number | undefined;

  // Overlay Plane Origin
  OverlayPlaneOrigin: number | undefined;
  x60xx0052: number | undefined;

  // Overlay Compression Code
  OverlayCompressionCode: string | undefined;
  x60xx0060: string | undefined;

  // Overlay Compression Originator
  OverlayCompressionOriginator: string | undefined;
  x60xx0061: string | undefined;

  // Overlay Compression Label
  OverlayCompressionLabel: string | undefined;
  x60xx0062: string | undefined;

  // Overlay Compression Description
  OverlayCompressionDescription: string | undefined;
  x60xx0063: string | undefined;

  // Overlay Compression Step Pointers
  OverlayCompressionStepPointers: Array<Uint16Array> | undefined;
  x60xx0066: Array<Uint16Array> | undefined;

  // Overlay Repeat Interval
  OverlayRepeatInterval: number | undefined;
  x60xx0068: number | undefined;

  // Overlay Bits Grouped
  OverlayBitsGrouped: number | undefined;
  x60xx0069: number | undefined;

  // Overlay Bits Allocated
  OverlayBitsAllocated: number | undefined;
  x60xx0100: number | undefined;

  // Overlay Bit Position
  OverlayBitPosition: number | undefined;
  x60xx0102: number | undefined;

  // Overlay Format
  OverlayFormat: string | undefined;
  x60xx0110: string | undefined;

  // Overlay Location
  OverlayLocation: number | undefined;
  x60xx0200: number | undefined;

  // Overlay Code Label
  OverlayCodeLabel: Array<string> | undefined;
  x60xx0800: Array<string> | undefined;

  // Overlay Number of Tables
  OverlayNumberOfTables: number | undefined;
  x60xx0802: number | undefined;

  // Overlay Code Table Location
  OverlayCodeTableLocation: Array<Uint16Array> | undefined;
  x60xx0803: Array<Uint16Array> | undefined;

  // Overlay Bits For Code Word
  OverlayBitsForCodeWord: number | undefined;
  x60xx0804: number | undefined;

  // Overlay Activation Layer
  OverlayActivationLayer: string | undefined;
  x60xx1001: string | undefined;

  // Overlay Descriptor - Gray
  OverlayDescriptorGray: number | undefined;
  x60xx1100: number | undefined;

  // Overlay Descriptor - Red
  OverlayDescriptorRed: number | undefined;
  x60xx1101: number | undefined;

  // Overlay Descriptor - Green
  OverlayDescriptorGreen: number | undefined;
  x60xx1102: number | undefined;

  // Overlay Descriptor - Blue
  OverlayDescriptorBlue: number | undefined;
  x60xx1103: number | undefined;

  // Overlays - Gray
  OverlaysGray: Array<number> | undefined;
  x60xx1200: Array<number> | undefined;

  // Overlays - Red
  OverlaysRed: Array<number> | undefined;
  x60xx1201: Array<number> | undefined;

  // Overlays - Green
  OverlaysGreen: Array<number> | undefined;
  x60xx1202: Array<number> | undefined;

  // Overlays - Blue
  OverlaysBlue: Array<number> | undefined;
  x60xx1203: Array<number> | undefined;

  // ROI Area
  ROIArea: number | undefined;
  x60xx1301: number | undefined;

  // ROI Mean
  ROIMean: number | undefined;
  x60xx1302: number | undefined;

  // ROI Standard Deviation
  ROIStandardDeviation: number | undefined;
  x60xx1303: number | undefined;

  // Overlay Label
  OverlayLabel: string | undefined;
  x60xx1500: string | undefined;

  // Variable Next Data Group
  VariableNextDataGroup: number | undefined;
  x7fxx0011: number | undefined;

  // Digital Signatures Sequence
  DigitalSignaturesSequence: Array<Dataset> | undefined;
  xfffafffa: Array<Dataset> | undefined;

}
