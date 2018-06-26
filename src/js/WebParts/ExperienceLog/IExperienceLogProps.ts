import RESOURCE_MANAGER from "../../Resources";
import { SelectionMode, ConstrainMode, DetailsListLayoutMode } from "office-ui-fabric-react/lib/DetailsList";
import { IBaseWebPartProps } from "../@BaseWebPart";
import IGroupByOption from "../IGroupByOption";
import IExcelExportConfig from "../IExcelExportConfig";

export default interface IExperienceLogProps extends IBaseWebPartProps {
    dataSource?: string;
    constrainMode?: ConstrainMode;
    layoutMode?: DetailsListLayoutMode;
    selectionMode?: SelectionMode;
    groupByOptions?: IGroupByOption[];
    showSearchBox?: boolean;
    showCommandBar?: boolean;
    searchProperty?: string;
    modalHeaderClassName?: string;
    projectInfoFilterField?: string;
    columns?: any[];
    excelExportEnabled?: boolean;
    excelExportConfig?: IExcelExportConfig;
}

export const ExperienceLogDefaultProps: Partial<IExperienceLogProps> = {
    dataSource: RESOURCE_MANAGER.getResource("DataSourceName_ExperienceLog"),
    showSearchBox: false,
    groupByOptions: [],
    constrainMode: ConstrainMode.horizontalConstrained,
    projectInfoFilterField: "GtPcPortfolioPage",
    modalHeaderClassName: "ms-font-xxl",
    layoutMode: DetailsListLayoutMode.fixedColumns,
    selectionMode: SelectionMode.none,
    columns: [{
        key: "Title",
        fieldName: "Title",
        name: RESOURCE_MANAGER.getResource("SiteFields_Title_DisplayName"),
        minWidth: 220,
    },
    {
        key: "SiteTitle",
        fieldName: "SiteTitle",
        name: RESOURCE_MANAGER.getResource("String_Project"),
    },
    {
        key: "GtProjectLogDescriptionOWSMTXT",
        fieldName: "Description",
        name: RESOURCE_MANAGER.getResource("SiteFields_GtProjectLogDescription_DisplayName"),
    },
    {
        key: "GtProjectLogResponsibleOWSCHCS",
        fieldName: "Responsible",
        name: RESOURCE_MANAGER.getResource("SiteFields_GtProjectLogResponsible_DisplayName"),
    },
    {
        key: "GtProjectLogConsequenceOWSMTXT",
        fieldName: "Consequence",
        name: RESOURCE_MANAGER.getResource("SiteFields_GtProjectLogConsequence_DisplayName"),
    },
    {
        key: "GtProjectLogRecommendationOWSMTXT",
        fieldName: "Recommendation",
        name: RESOURCE_MANAGER.getResource("SiteFields_GtProjectLogRecommendation_DisplayName"),
    },
    {
        key: "GtProjectLogActorsOWSCHCM",
        fieldName: "Actors",
        name: RESOURCE_MANAGER.getResource("SiteFields_GtProjectLogActors_DisplayName"),
    }].map(col => ({
        ...col,
        isResizable: true,
    })),
    excelExportEnabled: true,
    excelExportConfig: {
        fileName: RESOURCE_MANAGER.getResource("DynamicPortfolio_ExcelExportFileName"),
        sheetName: "Sheet A",
        buttonLabel: RESOURCE_MANAGER.getResource("DynamicPortfolio_ExcelExportButtonLabel"),
        buttonIcon: "ExcelDocument",
    },
};
