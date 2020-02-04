import { IInput, FloatLabelType } from '@syncfusion/ej2-inputs';
export declare abstract class EjInputBase implements IInput {
    placeholder: string;
    cssClass: string;
    enabled?: boolean;
    readonly: boolean;
    enableRtl: boolean;
    showClearButton?: boolean;
    floatLabelType?: FloatLabelType | string;
    abstract change: Function;
}
