import { ComponentModel, Component } from '@syncfusion/ej2-base';
export declare abstract class EjComponentModel implements ComponentModel {
    protected _wrapped: Component<HTMLElement>;
    enablePersistence?: boolean;
    private enablePersistenceChanged;
    enableRtl?: boolean;
    private enableRtlChanged;
    locale?: string;
    localeChanged(newValue: any): void;
}
