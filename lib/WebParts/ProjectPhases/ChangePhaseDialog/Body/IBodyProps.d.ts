import { View } from "../Views";
import ChangePhaseDialogResult from "../ChangePhaseDialogResult";
import { PhaseModel } from "../../ProjectPhasesData";
import IChecklistItem from "../../ProjectPhasesData/IChecklistItem";
export default interface IBodyProps {
    newPhase: PhaseModel;
    activePhase: PhaseModel;
    nextPhase: PhaseModel;
    openCheckListItems: IChecklistItem[];
    currentIdx: number;
    nextCheckPointAction: any;
    currentView: View;
    isLoading: boolean;
    onChangePhaseDialogReturnCallback: (result: ChangePhaseDialogResult) => Promise<void>;
    onCloseDialog: (e: any, reload?: boolean) => void;
}
