/**
 * Describes the metadata of DICOM dataset with fields based on:
 * - the DICOM tag presented as an hexadecimal 8 characters string (ex.: 00100010) and
 * - the short DICOM name (ex.: PatientName).
 * All the fields are optional.
 */
export interface Bulkdata {

  // File Meta Information Version
  FileMetaInformationVersion: Uint8Array | string | undefined;
  x00020001: Uint8Array | string | undefined;
  getFileMetaInformationVersion(): Promise<Uint8Array>;

  // Private Information
  PrivateInformation: Uint8Array | string | undefined;
  x00020102: Uint8Array | string | undefined;
  getPrivateInformation(): Promise<Uint8Array>;

  // Institution Address
  InstitutionAddress: string | string | undefined;
  x00080081: string | string | undefined;
  getInstitutionAddress(): Promise<string>;

  // Referring Physician's Address
  ReferringPhysicianAddress: string | string | undefined;
  x00080092: string | string | undefined;
  getReferringPhysicianAddress(): Promise<string>;

  // Extended Code Meaning
  ExtendedCodeMeaning: string | string | undefined;
  x00080108: string | string | undefined;
  getExtendedCodeMeaning(): Promise<string>;

  // Coding Scheme External ID
  CodingSchemeExternalID: string | string | undefined;
  x00080114: string | string | undefined;
  getCodingSchemeExternalID(): Promise<string>;

  // Coding Scheme Name
  CodingSchemeName: string | string | undefined;
  x00080115: string | string | undefined;
  getCodingSchemeName(): Promise<string>;

  // Coding Scheme Responsible Organization
  CodingSchemeResponsibleOrganization: string | string | undefined;
  x00080116: string | string | undefined;
  getCodingSchemeResponsibleOrganization(): Promise<string>;

  // Retrieve URL
  RetrieveURL: string | string | undefined;
  x00081190: string | string | undefined;
  getRetrieveURL(): Promise<string>;

  // Derivation Description
  DerivationDescription: string | string | undefined;
  x00082111: string | string | undefined;
  getDerivationDescription(): Promise<string>;

  // Anatomic Perspective Description (Trial)
  AnatomicPerspectiveDescriptionTrial: string | string | undefined;
  x00082256: string | string | undefined;
  getAnatomicPerspectiveDescriptionTrial(): Promise<string>;

  // Anatomic Location Of Examining Instrument Description (Trial)
  AnatomicLocationOfExaminingInstrumentDescriptionTrial: string | string | undefined;
  x00082258: string | string | undefined;
  getAnatomicLocationOfExaminingInstrumentDescriptionTrial(): Promise<string>;

  // Identifying Comments
  IdentifyingComments: string | string | undefined;
  x00084000: string | string | undefined;
  getIdentifyingComments(): Promise<string>;

  // Additional Patient History
  AdditionalPatientHistory: string | string | undefined;
  x001021b0: string | string | undefined;
  getAdditionalPatientHistory(): Promise<string>;

  // Patient Comments
  PatientComments: string | string | undefined;
  x00104000: string | string | undefined;
  getPatientComments(): Promise<string>;

  // Clinical Trial Time Point Description
  ClinicalTrialTimePointDescription: string | string | undefined;
  x00120051: string | string | undefined;
  getClinicalTrialTimePointDescription(): Promise<string>;

  // CAD File Format
  CADFileFormat: Array<string> | string | undefined;
  x00140023: Array<string> | string | undefined;
  getCADFileFormat(): Promise<Array<string>>;

  // Component Reference System
  ComponentReferenceSystem: Array<string> | string | undefined;
  x00140024: Array<string> | string | undefined;
  getComponentReferenceSystem(): Promise<Array<string>>;

  // Component Manufacturing Procedure
  ComponentManufacturingProcedure: Array<string> | string | undefined;
  x00140025: Array<string> | string | undefined;
  getComponentManufacturingProcedure(): Promise<Array<string>>;

  // Component Manufacturer
  ComponentManufacturer: Array<string> | string | undefined;
  x00140028: Array<string> | string | undefined;
  getComponentManufacturer(): Promise<Array<string>>;

  // Material Grade
  MaterialGrade: Array<string> | string | undefined;
  x00140042: Array<string> | string | undefined;
  getMaterialGrade(): Promise<Array<string>>;

  // Material Properties Description
  MaterialPropertiesDescription: Array<string> | string | undefined;
  x00140044: Array<string> | string | undefined;
  getMaterialPropertiesDescription(): Promise<Array<string>>;

  // Material Properties File Format (Retired)
  MaterialPropertiesFileFormatRetired: Array<string> | string | undefined;
  x00140045: Array<string> | string | undefined;
  getMaterialPropertiesFileFormatRetired(): Promise<Array<string>>;

  // Material Notes
  MaterialNotes: string | string | undefined;
  x00140046: string | string | undefined;
  getMaterialNotes(): Promise<string>;

  // Actual Environmental Conditions
  ActualEnvironmentalConditions: string | string | undefined;
  x00141010: string | string | undefined;
  getActualEnvironmentalConditions(): Promise<string>;

  // Environmental Conditions
  EnvironmentalConditions: string | string | undefined;
  x00141040: string | string | undefined;
  getEnvironmentalConditions(): Promise<string>;

  // Indication Description
  IndicationDescription: string | string | undefined;
  x00142018: string | string | undefined;
  getIndicationDescription(): Promise<string>;

  // Coordinate System Axis Description
  CoordinateSystemAxisDescription: string | string | undefined;
  x00142206: string | string | undefined;
  getCoordinateSystemAxisDescription(): Promise<string>;

  // Coordinate System Axis Values
  CoordinateSystemAxisValues: Uint8Array | string | undefined;
  x00142210: Uint8Array | string | undefined;
  getCoordinateSystemAxisValues(): Promise<Uint8Array>;

  // Transform Description
  TransformDescription: string | string | undefined;
  x00142222: string | string | undefined;
  getTransformDescription(): Promise<string>;

  // Sensor Name
  SensorName: string | string | undefined;
  x00143022: string | string | undefined;
  getSensorName(): Promise<string>;

  // Dark Current Counts
  DarkCurrentCounts: Uint8Array | string | undefined;
  x00143050: Uint8Array | string | undefined;
  getDarkCurrentCounts(): Promise<Uint8Array>;

  // Air Counts
  AirCounts: Uint8Array | string | undefined;
  x00143070: Uint8Array | string | undefined;
  getAirCounts(): Promise<Uint8Array>;

  // Bad Pixel Image
  BadPixelImage: Uint8Array | string | undefined;
  x00143080: Uint8Array | string | undefined;
  getBadPixelImage(): Promise<Uint8Array>;

  // Calibration Notes
  CalibrationNotes: string | string | undefined;
  x00143099: string | string | undefined;
  getCalibrationNotes(): Promise<string>;

  // Pulser Notes
  PulserNotes: string | string | undefined;
  x00144006: string | string | undefined;
  getPulserNotes(): Promise<string>;

  // Receiver Notes
  ReceiverNotes: string | string | undefined;
  x0014400c: string | string | undefined;
  getReceiverNotes(): Promise<string>;

  // Pre-Amplifier Notes
  PreAmplifierNotes: string | string | undefined;
  x0014400f: string | string | undefined;
  getPreAmplifierNotes(): Promise<string>;

  // Coupling Technique
  CouplingTechnique: string | string | undefined;
  x00144054: string | string | undefined;
  getCouplingTechnique(): Promise<string>;

  // Coupling Medium
  CouplingMedium: string | string | undefined;
  x00144056: string | string | undefined;
  getCouplingMedium(): Promise<string>;

  // Delay Law Identifier
  DelayLawIdentifier: string | string | undefined;
  x0014405c: string | string | undefined;
  getDelayLawIdentifier(): Promise<string>;

  // Calibration Procedure
  CalibrationProcedure: string | string | undefined;
  x00144072: string | string | undefined;
  getCalibrationProcedure(): Promise<string>;

  // Probe Drive Notes
  ProbeDriveNotes: string | string | undefined;
  x00144082: string | string | undefined;
  getProbeDriveNotes(): Promise<string>;

  // Scan Procedure
  ScanProcedure: string | string | undefined;
  x0014409b: string | string | undefined;
  getScanProcedure(): Promise<string>;

  // Intervention Description
  InterventionDescription: string | string | undefined;
  x0018003a: string | string | undefined;
  getInterventionDescription(): Promise<string>;

  // Acquisition Comments
  AcquisitionComments: string | string | undefined;
  x00184000: string | string | undefined;
  getAcquisitionComments(): Promise<string>;

  // Detector Description
  DetectorDescription: string | string | undefined;
  x00187006: string | string | undefined;
  getDetectorDescription(): Promise<string>;

  // Detector Mode
  DetectorMode: string | string | undefined;
  x00187008: string | string | undefined;
  getDetectorMode(): Promise<string>;

  // Grid Absorbing Material
  GridAbsorbingMaterial: string | string | undefined;
  x00187040: string | string | undefined;
  getGridAbsorbingMaterial(): Promise<string>;

  // Grid Spacing Material
  GridSpacingMaterial: string | string | undefined;
  x00187041: string | string | undefined;
  getGridSpacingMaterial(): Promise<string>;

  // Exposure Control Mode Description
  ExposureControlModeDescription: string | string | undefined;
  x00187062: string | string | undefined;
  getExposureControlModeDescription(): Promise<string>;

  // Metabolite Map Description
  MetaboliteMapDescription: string | string | undefined;
  x00189080: string | string | undefined;
  getMetaboliteMapDescription(): Promise<string>;

  // Respiratory Motion Compensation Technique Description
  RespiratoryMotionCompensationTechniqueDescription: string | string | undefined;
  x00189185: string | string | undefined;
  getRespiratoryMotionCompensationTechniqueDescription(): Promise<string>;

  // Acquisition Protocol Description
  AcquisitionProtocolDescription: string | string | undefined;
  x00189424: string | string | undefined;
  getAcquisitionProtocolDescription(): Promise<string>;

  // Contribution Description
  ContributionDescription: string | string | undefined;
  x0018a003: string | string | undefined;
  getContributionDescription(): Promise<string>;

  // Image Comments
  ImageComments: string | string | undefined;
  x00204000: string | string | undefined;
  getImageComments(): Promise<string>;

  // Frame Comments
  FrameComments: string | string | undefined;
  x00209158: string | string | undefined;
  getFrameComments(): Promise<string>;

  // Comments on Patient's Performance of Visual Field
  CommentsOnPatientPerformanceOfVisualField: string | string | undefined;
  x00240044: string | string | undefined;
  getCommentsOnPatientPerformanceOfVisualField(): Promise<string>;

  // Gray Lookup Table Data
  GrayLookupTableData: Array<number> | string | undefined;
  x00281200: Array<number> | string | undefined;
  getGrayLookupTableData(): Promise<Array<number>>;

  // Red Palette Color Lookup Table Data
  RedPaletteColorLookupTableData: Uint8Array | string | undefined;
  x00281201: Uint8Array | string | undefined;
  getRedPaletteColorLookupTableData(): Promise<Uint8Array>;

  // Green Palette Color Lookup Table Data
  GreenPaletteColorLookupTableData: Uint8Array | string | undefined;
  x00281202: Uint8Array | string | undefined;
  getGreenPaletteColorLookupTableData(): Promise<Uint8Array>;

  // Blue Palette Color Lookup Table Data
  BluePaletteColorLookupTableData: Uint8Array | string | undefined;
  x00281203: Uint8Array | string | undefined;
  getBluePaletteColorLookupTableData(): Promise<Uint8Array>;

  // Alpha Palette Color Lookup Table Data
  AlphaPaletteColorLookupTableData: Uint8Array | string | undefined;
  x00281204: Uint8Array | string | undefined;
  getAlphaPaletteColorLookupTableData(): Promise<Uint8Array>;

  // Large Red Palette Color Lookup Table Data
  LargeRedPaletteColorLookupTableData: Uint8Array | string | undefined;
  x00281211: Uint8Array | string | undefined;
  getLargeRedPaletteColorLookupTableData(): Promise<Uint8Array>;

  // Large Green Palette Color Lookup Table Data
  LargeGreenPaletteColorLookupTableData: Uint8Array | string | undefined;
  x00281212: Uint8Array | string | undefined;
  getLargeGreenPaletteColorLookupTableData(): Promise<Uint8Array>;

  // Large Blue Palette Color Lookup Table Data
  LargeBluePaletteColorLookupTableData: Uint8Array | string | undefined;
  x00281213: Uint8Array | string | undefined;
  getLargeBluePaletteColorLookupTableData(): Promise<Uint8Array>;

  // Segmented Red Palette Color Lookup Table Data
  SegmentedRedPaletteColorLookupTableData: Uint8Array | string | undefined;
  x00281221: Uint8Array | string | undefined;
  getSegmentedRedPaletteColorLookupTableData(): Promise<Uint8Array>;

  // Segmented Green Palette Color Lookup Table Data
  SegmentedGreenPaletteColorLookupTableData: Uint8Array | string | undefined;
  x00281222: Uint8Array | string | undefined;
  getSegmentedGreenPaletteColorLookupTableData(): Promise<Uint8Array>;

  // Segmented Blue Palette Color Lookup Table Data
  SegmentedBluePaletteColorLookupTableData: Uint8Array | string | undefined;
  x00281223: Uint8Array | string | undefined;
  getSegmentedBluePaletteColorLookupTableData(): Promise<Uint8Array>;

  // Partial View Description
  PartialViewDescription: string | string | undefined;
  x00281351: string | string | undefined;
  getPartialViewDescription(): Promise<string>;

  // Blending Lookup Table Data
  BlendingLookupTableData: Uint8Array | string | undefined;
  x00281408: Uint8Array | string | undefined;
  getBlendingLookupTableData(): Promise<Uint8Array>;

  // ICC Profile
  ICCProfile: Uint8Array | string | undefined;
  x00282000: Uint8Array | string | undefined;
  getICCProfile(): Promise<Uint8Array>;

  // LUT Data
  LUTData: Array<number> | string | undefined;
  x00283006: Array<number> | string | undefined;
  getLUTData(): Promise<Array<number>>;

  // Image Presentation Comments
  ImagePresentationComments: string | string | undefined;
  x00284000: string | string | undefined;
  getImagePresentationComments(): Promise<string>;

  // Mask Operation Explanation
  MaskOperationExplanation: string | string | undefined;
  x00286190: string | string | undefined;
  getMaskOperationExplanation(): Promise<string>;

  // Pixel Data Provider URL
  PixelDataProviderURL: string | string | undefined;
  x00287fe0: string | string | undefined;
  getPixelDataProviderURL(): Promise<string>;

  // Study Comments
  StudyComments: string | string | undefined;
  x00324000: string | string | undefined;
  getStudyComments(): Promise<string>;

  // Visit Comments
  VisitComments: string | string | undefined;
  x00384000: string | string | undefined;
  getVisitComments(): Promise<string>;

  // Local Namespace Entity ID
  LocalNamespaceEntityID: string | string | undefined;
  x00400031: string | string | undefined;
  getLocalNamespaceEntityID(): Promise<string>;

  // Universal Entity ID
  UniversalEntityID: string | string | undefined;
  x00400032: string | string | undefined;
  getUniversalEntityID(): Promise<string>;

  // Comments on the Performed Procedure Step
  CommentsOnThePerformedProcedureStep: string | string | undefined;
  x00400280: string | string | undefined;
  getCommentsOnThePerformedProcedureStep(): Promise<string>;

  // Comments on Radiation Dose
  CommentsOnRadiationDose: string | string | undefined;
  x00400310: string | string | undefined;
  getCommentsOnRadiationDose(): Promise<string>;

  // Comments on the Scheduled Procedure Step
  CommentsOnTheScheduledProcedureStep: string | string | undefined;
  x00400400: string | string | undefined;
  getCommentsOnTheScheduledProcedureStep(): Promise<string>;

  // Specimen Description (Trial)
  SpecimenDescriptionTrial: string | string | undefined;
  x00400553: string | string | undefined;
  getSpecimenDescriptionTrial(): Promise<string>;

  // Acquisition Context Description
  AcquisitionContextDescription: string | string | undefined;
  x00400556: string | string | undefined;
  getAcquisitionContextDescription(): Promise<string>;

  // Specimen Detailed Description
  SpecimenDetailedDescription: string | string | undefined;
  x00400602: string | string | undefined;
  getSpecimenDetailedDescription(): Promise<string>;

  // Person's Address
  PersonAddress: string | string | undefined;
  x00401102: string | string | undefined;
  getPersonAddress(): Promise<string>;

  // Requested Procedure Comments
  RequestedProcedureComments: string | string | undefined;
  x00401400: string | string | undefined;
  getRequestedProcedureComments(): Promise<string>;

  // Imaging Service Request Comments
  ImagingServiceRequestComments: string | string | undefined;
  x00402400: string | string | undefined;
  getImagingServiceRequestComments(): Promise<string>;

  // Object Binary Identifier (Trial)
  ObjectBinaryIdentifierTrial: Uint8Array | string | undefined;
  x0040a074: Uint8Array | string | undefined;
  getObjectBinaryIdentifierTrial(): Promise<Uint8Array>;

  // Object Directory Binary Identifier (Trial)
  ObjectDirectoryBinaryIdentifierTrial: Uint8Array | string | undefined;
  x0040a089: Uint8Array | string | undefined;
  getObjectDirectoryBinaryIdentifierTrial(): Promise<Uint8Array>;

  // Text Value
  TextValue: string | string | undefined;
  x0040a160: string | string | undefined;
  getTextValue(): Promise<string>;

  // Bibliographic Citation (Trial)
  BibliographicCitationTrial: string | string | undefined;
  x0040a16a: string | string | undefined;
  getBibliographicCitationTrial(): Promise<string>;

  // Identification Description (Trial)
  IdentificationDescriptionTrial: string | string | undefined;
  x0040a224: string | string | undefined;
  getIdentificationDescriptionTrial(): Promise<string>;

  // Algorithm Description (Trial)
  AlgorithmDescriptionTrial: string | string | undefined;
  x0040a297: string | string | undefined;
  getAlgorithmDescriptionTrial(): Promise<string>;

  // Report Status Comment (Trial)
  ReportStatusCommentTrial: string | string | undefined;
  x0040a33a: string | string | undefined;
  getReportStatusCommentTrial(): Promise<string>;

  // Address (Trial)
  AddressTrial: string | string | undefined;
  x0040a353: string | string | undefined;
  getAddressTrial(): Promise<string>;

  // Uniform Resource Locator (Trial)
  UniformResourceLocatorTrial: string | string | undefined;
  x0040a992: string | string | undefined;
  getUniformResourceLocatorTrial(): Promise<string>;

  // HL7 Instance Identifier
  HL7InstanceIdentifier: string | string | undefined;
  x0040e001: string | string | undefined;
  getHL7InstanceIdentifier(): Promise<string>;

  // Retrieve URI
  RetrieveURI: string | string | undefined;
  x0040e010: string | string | undefined;
  getRetrieveURI(): Promise<string>;

  // Document Title
  DocumentTitle: string | string | undefined;
  x00420010: string | string | undefined;
  getDocumentTitle(): Promise<string>;

  // Encapsulated Document
  EncapsulatedDocument: Uint8Array | string | undefined;
  x00420011: Uint8Array | string | undefined;
  getEncapsulatedDocument(): Promise<Uint8Array>;

  // Product Package Identifier
  ProductPackageIdentifier: string | string | undefined;
  x00440001: string | string | undefined;
  getProductPackageIdentifier(): Promise<string>;

  // Approval Status Further Description
  ApprovalStatusFurtherDescription: string | string | undefined;
  x00440003: string | string | undefined;
  getApprovalStatusFurtherDescription(): Promise<string>;

  // Product Description
  ProductDescription: string | string | undefined;
  x00440009: string | string | undefined;
  getProductDescription(): Promise<string>;

  // Optical Path Description
  OpticalPathDescription: string | string | undefined;
  x00480107: string | string | undefined;
  getOpticalPathDescription(): Promise<string>;

  // Segment Description
  SegmentDescription: string | string | undefined;
  x00620006: string | string | undefined;
  getSegmentDescription(): Promise<string>;

  // Vector Grid Data
  VectorGridData: Float32Array | string | undefined;
  x00640009: Float32Array | string | undefined;
  getVectorGridData(): Promise<Float32Array>;

  // Surface Comments
  SurfaceComments: string | string | undefined;
  x00660004: string | string | undefined;
  getSurfaceComments(): Promise<string>;

  // Point Coordinates Data
  PointCoordinatesData: Float32Array | string | undefined;
  x00660016: Float32Array | string | undefined;
  getPointCoordinatesData(): Promise<Float32Array>;

  // Vector Coordinate Data
  VectorCoordinateData: Float32Array | string | undefined;
  x00660021: Float32Array | string | undefined;
  getVectorCoordinateData(): Promise<Float32Array>;

  // Triangle Point Index List
  TrianglePointIndexList: Uint8Array | string | undefined;
  x00660023: Uint8Array | string | undefined;
  getTrianglePointIndexList(): Promise<Uint8Array>;

  // Edge Point Index List
  EdgePointIndexList: Uint8Array | string | undefined;
  x00660024: Uint8Array | string | undefined;
  getEdgePointIndexList(): Promise<Uint8Array>;

  // Vertex Point Index List
  VertexPointIndexList: Uint8Array | string | undefined;
  x00660025: Uint8Array | string | undefined;
  getVertexPointIndexList(): Promise<Uint8Array>;

  // Primitive Point Index List
  PrimitivePointIndexList: Uint8Array | string | undefined;
  x00660029: Uint8Array | string | undefined;
  getPrimitivePointIndexList(): Promise<Uint8Array>;

  // Algorithm Parameters
  AlgorithmParameters: string | string | undefined;
  x00660032: string | string | undefined;
  getAlgorithmParameters(): Promise<string>;

  // Information Summary
  InformationSummary: string | string | undefined;
  x00686280: string | string | undefined;
  getInformationSummary(): Promise<string>;

  // HPGL Document
  HPGLDocument: Uint8Array | string | undefined;
  x00686300: Uint8Array | string | undefined;
  getHPGLDocument(): Promise<Uint8Array>;

  // HPGL Pen Description
  HPGLPenDescription: string | string | undefined;
  x00686345: string | string | undefined;
  getHPGLPenDescription(): Promise<string>;

  // Unformatted Text Value
  UnformattedTextValue: string | string | undefined;
  x00700006: string | string | undefined;
  getUnformattedTextValue(): Promise<string>;

  // Graphic Group Description
  GraphicGroupDescription: string | string | undefined;
  x00700208: string | string | undefined;
  getGraphicGroupDescription(): Promise<string>;

  // Fill Pattern
  FillPattern: Uint8Array | string | undefined;
  x00700256: Uint8Array | string | undefined;
  getFillPattern(): Promise<Uint8Array>;

  // Fiducial Description
  FiducialDescription: string | string | undefined;
  x0070030f: string | string | undefined;
  getFiducialDescription(): Promise<string>;

  // Selector LT Value
  SelectorLTValue: string | string | undefined;
  x00720068: string | string | undefined;
  getSelectorLTValue(): Promise<string>;

  // Selector ST Value
  SelectorSTValue: string | string | undefined;
  x0072006e: string | string | undefined;
  getSelectorSTValue(): Promise<string>;

  // Selector UT Value
  SelectorUTValue: string | string | undefined;
  x00720070: string | string | undefined;
  getSelectorUTValue(): Promise<string>;

  // Procedure Step Progress Description
  ProcedureStepProgressDescription: string | string | undefined;
  x00741006: string | string | undefined;
  getProcedureStepProgressDescription(): Promise<string>;

  // Contact URI
  ContactURI: string | string | undefined;
  x0074100a: string | string | undefined;
  getContactURI(): Promise<string>;

  // Reason for Cancellation
  ReasonForCancellation: string | string | undefined;
  x00741238: string | string | undefined;
  getReasonForCancellation(): Promise<string>;

  // Implant Template Group Description
  ImplantTemplateGroupDescription: string | string | undefined;
  x00780010: string | string | undefined;
  getImplantTemplateGroupDescription(): Promise<string>;

  // U Value Data
  UValueData: Array<Float32Array> | string | undefined;
  x00800010: Array<Float32Array> | string | undefined;
  getUValueData(): Promise<Array<Float32Array>>;

  // V Value Data
  VValueData: Array<Float32Array> | string | undefined;
  x00800011: Array<Float32Array> | string | undefined;
  getVValueData(): Promise<Array<Float32Array>>;

  // Topic Subject
  TopicSubject: string | string | undefined;
  x00880906: string | string | undefined;
  getTopicSubject(): Promise<string>;

  // SOP Authorization Comment
  SOPAuthorizationComment: string | string | undefined;
  x01000424: string | string | undefined;
  getSOPAuthorizationComment(): Promise<string>;

  // Certificate of Signer
  CertificateOfSigner: Uint8Array | string | undefined;
  x04000115: Uint8Array | string | undefined;
  getCertificateOfSigner(): Promise<Uint8Array>;

  // Signature
  Signature: Uint8Array | string | undefined;
  x04000120: Uint8Array | string | undefined;
  getSignature(): Promise<Uint8Array>;

  // Certified Timestamp
  CertifiedTimestamp: Uint8Array | string | undefined;
  x04000310: Uint8Array | string | undefined;
  getCertifiedTimestamp(): Promise<Uint8Array>;

  // MAC
  MAC: Uint8Array | string | undefined;
  x04000404: Uint8Array | string | undefined;
  getMAC(): Promise<Uint8Array>;

  // Encrypted Content
  EncryptedContent: Uint8Array | string | undefined;
  x04000520: Uint8Array | string | undefined;
  getEncryptedContent(): Promise<Uint8Array>;

  // Image Display Format
  ImageDisplayFormat: string | string | undefined;
  x20100010: string | string | undefined;
  getImageDisplayFormat(): Promise<string>;

  // Configuration Information
  ConfigurationInformation: string | string | undefined;
  x20100150: string | string | undefined;
  getConfigurationInformation(): Promise<string>;

  // Configuration Information Description
  ConfigurationInformationDescription: string | string | undefined;
  x20100152: string | string | undefined;
  getConfigurationInformationDescription(): Promise<string>;

  // Label Text
  LabelText: string | string | undefined;
  x22000002: string | string | undefined;
  getLabelText(): Promise<string>;

  // Media Disposition
  MediaDisposition: string | string | undefined;
  x22000004: string | string | undefined;
  getMediaDisposition(): Promise<string>;

  // Barcode Value
  BarcodeValue: string | string | undefined;
  x22000005: string | string | undefined;
  getBarcodeValue(): Promise<string>;

  // RT Image Description
  RTImageDescription: string | string | undefined;
  x30020004: string | string | undefined;
  getRTImageDescription(): Promise<string>;

  // Structure Set Description
  StructureSetDescription: string | string | undefined;
  x30060006: string | string | undefined;
  getStructureSetDescription(): Promise<string>;

  // ROI Description
  ROIDescription: string | string | undefined;
  x30060028: string | string | undefined;
  getROIDescription(): Promise<string>;

  // ROI Observation Description
  ROIObservationDescription: string | string | undefined;
  x30060088: string | string | undefined;
  getROIObservationDescription(): Promise<string>;

  // Measured Dose Description
  MeasuredDoseDescription: string | string | undefined;
  x30080012: string | string | undefined;
  getMeasuredDoseDescription(): Promise<string>;

  // Override Reason
  OverrideReason: string | string | undefined;
  x30080066: string | string | undefined;
  getOverrideReason(): Promise<string>;

  // Calculated Dose Reference Description
  CalculatedDoseReferenceDescription: string | string | undefined;
  x30080074: string | string | undefined;
  getCalculatedDoseReferenceDescription(): Promise<string>;

  // Treatment Status Comment
  TreatmentStatusComment: string | string | undefined;
  x30080202: string | string | undefined;
  getTreatmentStatusComment(): Promise<string>;

  // RT Plan Description
  RTPlanDescription: string | string | undefined;
  x300a0004: string | string | undefined;
  getRTPlanDescription(): Promise<string>;

  // Prescription Description
  PrescriptionDescription: string | string | undefined;
  x300a000e: string | string | undefined;
  getPrescriptionDescription(): Promise<string>;

  // Fraction Pattern
  FractionPattern: string | string | undefined;
  x300a007b: string | string | undefined;
  getFractionPattern(): Promise<string>;

  // Beam Description
  BeamDescription: string | string | undefined;
  x300a00c3: string | string | undefined;
  getBeamDescription(): Promise<string>;

  // Bolus Description
  BolusDescription: string | string | undefined;
  x300a00dd: string | string | undefined;
  getBolusDescription(): Promise<string>;

  // Fixation Device Description
  FixationDeviceDescription: string | string | undefined;
  x300a0196: string | string | undefined;
  getFixationDeviceDescription(): Promise<string>;

  // Shielding Device Description
  ShieldingDeviceDescription: string | string | undefined;
  x300a01a6: string | string | undefined;
  getShieldingDeviceDescription(): Promise<string>;

  // Setup Technique Description
  SetupTechniqueDescription: string | string | undefined;
  x300a01b2: string | string | undefined;
  getSetupTechniqueDescription(): Promise<string>;

  // Setup Device Description
  SetupDeviceDescription: string | string | undefined;
  x300a01ba: string | string | undefined;
  getSetupDeviceDescription(): Promise<string>;

  // Setup Reference Description
  SetupReferenceDescription: string | string | undefined;
  x300a01d0: string | string | undefined;
  getSetupReferenceDescription(): Promise<string>;

  // Compensator Description
  CompensatorDescription: string | string | undefined;
  x300a02eb: string | string | undefined;
  getCompensatorDescription(): Promise<string>;

  // Setup Image Comment
  SetupImageComment: string | string | undefined;
  x300a0402: string | string | undefined;
  getSetupImageComment(): Promise<string>;

  // General Accessory Description
  GeneralAccessoryDescription: string | string | undefined;
  x300a0422: string | string | undefined;
  getGeneralAccessoryDescription(): Promise<string>;

  // Arbitrary
  Arbitrary: string | string | undefined;
  x40000010: string | string | undefined;
  getArbitrary(): Promise<string>;

  // Text Comments
  TextComments: string | string | undefined;
  x40004000: string | string | undefined;
  getTextComments(): Promise<string>;

  // Interpretation Text
  InterpretationText: string | string | undefined;
  x4008010b: string | string | undefined;
  getInterpretationText(): Promise<string>;

  // Interpretation Diagnosis Description
  InterpretationDiagnosisDescription: string | string | undefined;
  x40080115: string | string | undefined;
  getInterpretationDiagnosisDescription(): Promise<string>;

  // Impressions
  Impressions: string | string | undefined;
  x40080300: string | string | undefined;
  getImpressions(): Promise<string>;

  // Results Comments
  ResultsComments: string | string | undefined;
  x40084000: string | string | undefined;
  getResultsComments(): Promise<string>;

  // Threat ROI Bitmap
  ThreatROIBitmap: Uint8Array | string | undefined;
  x40101006: Uint8Array | string | undefined;
  getThreatROIBitmap(): Promise<Uint8Array>;

  // Threat Category Description
  ThreatCategoryDescription: string | string | undefined;
  x40101013: string | string | undefined;
  getThreatCategoryDescription(): Promise<string>;

  // OOI Type Descriptor
  OOITypeDescriptor: string | string | undefined;
  x40101068: string | string | undefined;
  getOOITypeDescriptor(): Promise<string>;

  // Detector Calibration Data
  DetectorCalibrationData: Uint8Array | string | undefined;
  x4010106c: Uint8Array | string | undefined;
  getDetectorCalibrationData(): Promise<Uint8Array>;

  // PTO Location Description
  PTOLocationDescription: string | string | undefined;
  x40101078: string | string | undefined;
  getPTOLocationDescription(): Promise<string>;

  // Audio Sample Data
  AudioSampleData: Uint8Array | string | undefined;
  x50xx200c: Uint8Array | string | undefined;
  getAudioSampleData(): Promise<Uint8Array>;

  // Audio Comments
  AudioComments: string | string | undefined;
  x50xx200e: string | string | undefined;
  getAudioComments(): Promise<string>;

  // Curve Data
  CurveData: Uint8Array | string | undefined;
  x50xx3000: Uint8Array | string | undefined;
  getCurveData(): Promise<Uint8Array>;

  // Channel Minimum Value
  ChannelMinimumValue: Uint8Array | string | undefined;
  x54000110: Uint8Array | string | undefined;
  getChannelMinimumValue(): Promise<Uint8Array>;

  // Channel Maximum Value
  ChannelMaximumValue: Uint8Array | string | undefined;
  x54000112: Uint8Array | string | undefined;
  getChannelMaximumValue(): Promise<Uint8Array>;

  // Waveform Padding Value
  WaveformPaddingValue: Uint8Array | string | undefined;
  x5400100a: Uint8Array | string | undefined;
  getWaveformPaddingValue(): Promise<Uint8Array>;

  // Waveform Data
  WaveformData: Uint8Array | string | undefined;
  x54001010: Uint8Array | string | undefined;
  getWaveformData(): Promise<Uint8Array>;

  // First Order Phase Correction Angle
  FirstOrderPhaseCorrectionAngle: Float32Array | string | undefined;
  x56000010: Float32Array | string | undefined;
  getFirstOrderPhaseCorrectionAngle(): Promise<Float32Array>;

  // Spectroscopy Data
  SpectroscopyData: Float32Array | string | undefined;
  x56000020: Float32Array | string | undefined;
  getSpectroscopyData(): Promise<Float32Array>;

  // Overlay Data
  OverlayData: Uint8Array | string | undefined;
  x60xx3000: Uint8Array | string | undefined;
  getOverlayData(): Promise<Uint8Array>;

  // Overlay Comments
  OverlayComments: string | string | undefined;
  x60xx4000: string | string | undefined;
  getOverlayComments(): Promise<string>;

  // Pixel Data
  PixelData: Uint8Array | string | undefined;
  x7fe00010: Uint8Array | string | undefined;
  getPixelData(): Promise<Uint8Array>;

  // Coefficients SDVN
  CoefficientsSDVN: Uint8Array | string | undefined;
  x7fe00020: Uint8Array | string | undefined;
  getCoefficientsSDVN(): Promise<Uint8Array>;

  // Coefficients SDHN
  CoefficientsSDHN: Uint8Array | string | undefined;
  x7fe00030: Uint8Array | string | undefined;
  getCoefficientsSDHN(): Promise<Uint8Array>;

  // Coefficients SDDN
  CoefficientsSDDN: Uint8Array | string | undefined;
  x7fe00040: Uint8Array | string | undefined;
  getCoefficientsSDDN(): Promise<Uint8Array>;

  // Variable Pixel Data
  VariablePixelData: Uint8Array | string | undefined;
  x7fxx0010: Uint8Array | string | undefined;
  getVariablePixelData(): Promise<Uint8Array>;

  // Variable Coefficients SDVN
  VariableCoefficientsSDVN: Uint8Array | string | undefined;
  x7fxx0020: Uint8Array | string | undefined;
  getVariableCoefficientsSDVN(): Promise<Uint8Array>;

  // Variable Coefficients SDHN
  VariableCoefficientsSDHN: Uint8Array | string | undefined;
  x7fxx0030: Uint8Array | string | undefined;
  getVariableCoefficientsSDHN(): Promise<Uint8Array>;

  // Variable Coefficients SDDN
  VariableCoefficientsSDDN: Uint8Array | string | undefined;
  x7fxx0040: Uint8Array | string | undefined;
  getVariableCoefficientsSDDN(): Promise<Uint8Array>;

  // Data Set Trailing Padding
  DataSetTrailingPadding: Uint8Array | string | undefined;
  xfffcfffc: Uint8Array | string | undefined;
  getDataSetTrailingPadding(): Promise<Uint8Array>;

}
