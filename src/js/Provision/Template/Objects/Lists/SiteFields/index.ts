import __ from "../../../../../Resources";

export const GtCommunicationTarget = `<Field Type="LookupMulti" DisplayName="${__.getResource("SiteFields_GtCommunicationTarget_DisplayName")}" List="{listid:${__.getResource("Lists_Stakeholders_Title")}}" ShowField="Title" ID="{d685f33f-51b5-4e9f-a314-4b3d9467a7e4}" StaticName="GtCommunicationTarget" Name="GtCommunicationTarget" Mult="TRUE" />`;
export const GtProjectLogEventLookup = `<Field Type="Lookup" DisplayName="${__.getResource("SiteFields_GtProjectLogEventLookup_DisplayName")}" List="{listid:${__.getResource("Lists_MeetingCalendar_Title")}}" ShowField="GtProjectEventDateAndTitle" ID="{20731fb1-e98e-4fdc-b3d6-941b41b8fd6e}" StaticName="GtProjectLogEventLookup" Name="GtProjectLogEventLookup" />`;
export const GtProjectLogProductLookup = `<Field Type="Lookup" DisplayName="${__.getResource("SiteFields_GtProjectLogProductLookup_DisplayName")}" List="{listid:${__.getResource("Lists_ProjectDeliveries_Title")}}" ShowField="Title" ID="{022cc93f-13df-4420-bd47-55e4fdae5d18}" StaticName="GtProjectLogProductLookup" Name="GtProjectLogProductLookup" />`;
export const GtProductInteressent = `<Field Type="LookupMulti" DisplayName="${__.getResource("SiteFields_GtProductInteressent_DisplayName")}" List="{listid:${__.getResource("Lists_Stakeholders_Title")}}" ShowField="Title" ID="{6d90e0b6-73e6-48fb-aa1e-b897b214f934}" Name="GtProductInteressent" StaticName="GtProductInteressent" Name="GtProductInteressent" Mult="TRUE" />`;
export const GtProjectTaskComElement = `<Field Type="Lookup" DisplayName="${__.getResource("SiteFields_GtProjectTaskComElement_DisplayName")}" List="{listid:${__.getResource("Lists_CommunicationPlan_Title")}}" ShowField="Title" ID="{087dae25-b007-4e58-91b4-347dde464840}" StaticName="GtProjectTaskComElement" Name="GtProjectTaskComElement" />`;
export const GtProjectTaskRisk = `<Field Type="Lookup" DisplayName="${__.getResource("SiteFields_GtProjectTaskRisk_DisplayName")}" List="{listid:${__.getResource("Lists_Uncertainties_Title")}}" ShowField="Title" ID="{920b385c-756f-49eb-98e7-4c3ebf15b7f4}" StaticName="GtProjectTaskRisk" Name="GtProjectTaskRisk" />`;
export const GtProjectTaskProduct = `<Field Type="Lookup" DisplayName="${__.getResource("SiteFields_GtProjectTaskProduct_DisplayName")}" List="{listid:${__.getResource("Lists_ProjectDeliveries_Title")}}" ShowField="Title" ID="{a3ab9d99-78da-436d-a299-5854340a504f}" StaticName="GtProjectTaskProduct" Name="GtProjectTaskProduct" />`;
export const GtProjectTaskChange = `<Field Type="Lookup" DisplayName="${__.getResource("SiteFields_GtProjectTaskChange_DisplayName")}" List="{listid:${__.getResource("Lists_ChangeAnalysis_Title")}}" ShowField="Title" ID="{2b55bfc2-44c5-4b67-92a7-9b43bffbceb4}" StaticName="GtProjectTaskChange" Name="GtProjectTaskChange" />`;
export const GtProjectTaskGain = `<Field Type="Lookup" DisplayName="${__.getResource("SiteFields_GtProjectTaskGain_DisplayName")}" List="{listid:${__.getResource("Lists_BenefitsAnalysis_Title")}}" ShowField="Title" ID="{1149ce1e-bb07-4d3c-afe0-3242708b3c8e}" StaticName="GtProjectTaskGain" Name="GtProjectTaskGain" />`;
export const GtProjectEventDateAndTitle = `<Field ID="{7604dadc-d8e3-4f35-bc58-890d33d908b9}" StaticName="GtProjectEventDateAndTitle" Name="GtProjectEventDateAndTitle" DisplayName="${__.getResource("SiteFields_GtProjectEventDateAndTitle_DisplayName")}" Type="Calculated" Required="FALSE" ResultType="Text" ReadOnly="TRUE" EnforceUniqueValues="FALSE" Indexed="FALSE" Percentage="FALSE"><Formula>=TEXT(${__.getResource("SiteFields_EventDate_DisplayName")},"yyyy-mm-dd")&amp;" "&amp;${__.getResource("SiteFields_Title_DisplayName")}</Formula><FieldRefs><FieldRef Name="${__.getResource("SiteFields_Title_DisplayName")}" /><FieldRef Name="${__.getResource("SiteFields_EventDate_DisplayName")}" /></FieldRefs></Field>`;
export const GtChangeLookup = `<Field Type="LookupMulti" DisplayName="${__.getResource("SiteFields_GtChangeLookup_DisplayName")}" List="{listid:${__.getResource("Lists_ChangeAnalysis_Title")}}" ShowField="LinkTitleNoMenu" UnlimitedLengthInDocumentLibrary="FALSE" RelationshipDeleteBehavior="None" ID="{1d5752af-4d26-4aed-b20a-6229ac14ed5d}" StaticName="GtChangeLookup" Name="GtChangeLookup" Group="" Description="Foreslått endring fra endringsanalysen" Mult="TRUE" />`;
export const GtGainLookup = `<Field Type="LookupMulti" Mult="TRUE" DisplayName="${__.getResource("SiteFields_GtGainLookup_DisplayName")}" List="{listid:${__.getResource("Lists_BenefitsAnalysis_Title")}}" ShowField="Title" ID="{8d70fa93-b547-46f1-84e7-4982f8c9c675}" StaticName="GtGainLookup" Name="GtGainLookup"  />`;
export const GtGainLookup_ID = `<Field Type="LookupMulti" Mult="TRUE" DisplayName="${__.getResource("SiteFields_GtGainLookup_DisplayName")}:ID" List="{listid:${__.getResource("Lists_BenefitsAnalysis_Title")}}" ShowField="ID" FieldRef="8d70fa93-b547-46f1-84e7-4982f8c9c675" ReadOnly="TRUE" UnlimitedLengthInDocumentLibrary="FALSE" ID="{c239539c-8672-46cc-be77-fb53322f71ae}" ShowInDisplayForm="FALSE" StaticName="GtGainLookup_ID" Name="GtGainLookup_ID" />`;
export const GtMeasureIndicatorLookup = `<Field Type="Lookup" DisplayName="${__.getResource("SiteFields_GtMeasureIndicatorLookup_DisplayName")}" List="{listid:${__.getResource("Lists_MeasurementIndicators_Title")}}" ShowField="Title" UnlimitedLengthInDocumentLibrary="FALSE" ID="{26c0f80a-5c65-45a9-b362-4cd2749bd02f}" StaticName="GtMeasureIndicatorLookup" Name="GtMeasureIndicatorLookup" />`;
export const GtMeasureIndicatorLookup_ID = `<Field Type="Lookup" DisplayName="${__.getResource("SiteFields_GtMeasureIndicatorLookup_DisplayName")}:ID" List="{listid:${__.getResource("Lists_MeasurementIndicators_Title")}}" ShowField="ID" FieldRef="26c0f80a-5c65-45a9-b362-4cd2749bd02f" ReadOnly="TRUE" UnlimitedLengthInDocumentLibrary="FALSE" ID="{92fad9e3-1410-4cbb-bb61-594a5e61e988}" StaticName="GtMeasureIndicatorLookup_ID" Name="GtMeasureIndicatorLookup_ID" />`;
export const GtMeasureIndicatorLookup_GtDesiredValue = `<Field Type="Lookup" DisplayName="${__.getResource("SiteFields_GtMeasureIndicatorLookup_DisplayName")}:${__.getResource("SiteFields_GtDesiredValue_DisplayName")}" List="{listid:${__.getResource("Lists_MeasurementIndicators_Title")}}" ShowField="GtDesiredValue" FieldRef="26c0f80a-5c65-45a9-b362-4cd2749bd02f" ReadOnly="TRUE" UnlimitedLengthInDocumentLibrary="FALSE" ID="{a5b7b23e-5cfd-4168-9123-f1ce10775792}" StaticName="GtMeasureIndicatorLookup_GtDesiredValue" Name="GtMeasureIndicatorLookup_GtDesiredValue" />`;
