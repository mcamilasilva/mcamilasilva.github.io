import { FixedLabelsAndTooltipsEnum } from "../models/enums/fixed-labels-and-tooltips.enum";
import { SystemLanguageEnum } from "../models/enums/system-language.enum";

const english = <{ [id: string]: string }> {
    [FixedLabelsAndTooltipsEnum.BACK_TO_TOP_BTN_TOOLTIP]: 'Back to Top',
    [FixedLabelsAndTooltipsEnum.CURRENT_LABEL]: 'Current'
};

const portuguese = <{ [id: string]: string }> {
    [FixedLabelsAndTooltipsEnum.BACK_TO_TOP_BTN_TOOLTIP]: 'Voltar ao Início',
    [FixedLabelsAndTooltipsEnum.CURRENT_LABEL]: 'Atual'
};

export const FixedLabelsAndTooltipsDictionary = <{ [id: string]: { [id: string]: string } }>{
    [SystemLanguageEnum.EN_US]: english,
    [SystemLanguageEnum.PT_BR]: portuguese
};