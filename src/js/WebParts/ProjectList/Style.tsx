import * as React from "react";
import IProjectListProps from "./IProjectListProps";

const Style = ({ props }: { props: IProjectListProps }) => {
    return <style type="text/css">{`
                .${props.tileClassName} {
                    width: ${props.tileWidth}px;
                    margin-bottom: ${props.masonryOptions.gutter}px;
                }
                .${props.tileClassName} .ms-DocumentCardPreview-icon img {
                    max-width: 32px;    
                }
            `}
    </style>;
};

export default Style;
