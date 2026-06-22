export type ValentineQuestionModel = {
    yesScale: number;
    shouldDodge: boolean;
    acceptOnlyChoice: boolean;
    rejectMsg: string;
    handleNoClick: () => void;
    handleYesClick: () => void;
};