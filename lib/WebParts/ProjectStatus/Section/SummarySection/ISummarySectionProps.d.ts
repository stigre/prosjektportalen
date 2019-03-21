/// <reference types="react" />
import SectionModel from "../SectionModel";
export interface ISummarySectionHeaderProps {
    title?: string;
    titleUrl?: string;
}
export interface ISummarySectionProjectDataProps {
    webUrl?: string;
    propertiesLabel: string;
}
export interface ISummarySectionStatusColumnsProps {
    sections: SectionModel[];
}
export default interface ISummarySectionProps extends React.HTMLAttributes<HTMLElement>, ISummarySectionHeaderProps, ISummarySectionProjectDataProps, ISummarySectionStatusColumnsProps {
}
