export type ValentineQuestionModel = {
    noCount: number;
    yesScale: number;
    shouldDodge: boolean;
    acceptOnlyChoice: boolean;
    rejectMsg: string;
    handleNoClick: () => void;
    handleYesClick: () => void;
};