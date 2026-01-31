export type ValentineQuestionModel = {
    yesScale: number;
    shouldDodge: boolean;
    acceptOnlyChoice: boolean;
    handleNoClick: () => void;
    handleYesClick: () => void;
};