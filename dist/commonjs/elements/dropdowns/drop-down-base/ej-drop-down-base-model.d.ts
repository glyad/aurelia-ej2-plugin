import { EmitType } from '@syncfusion/ej2-base';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { SortOrder } from '@syncfusion/ej2-lists';
import { DropDownBaseModel, FieldSettingsModel, FilterType, SelectEventArgs } from '@syncfusion/ej2-dropdowns';
import { EjComponentModel } from 'elements/base';
export declare class EjDropDownBaseModel extends EjComponentModel implements DropDownBaseModel {
    fields?: FieldSettingsModel | any;
    itemTemplate?: string;
    groupTemplate?: string;
    noRecordsTemplate?: string;
    actionFailureTemplate?: string;
    sortOrder?: SortOrder;
    enabled?: boolean;
    dataSource?: {
        [key: string]: Object;
    }[] | DataManager | string[] | number[] | boolean[];
    query?: Query;
    filterType?: FilterType;
    ignoreCase?: boolean;
    zIndex?: number;
    ignoreAccent?: boolean;
    actionBegin?: EmitType<Object>;
    actionComplete?: EmitType<Object>;
    actionFailure?: EmitType<Object>;
    select?: EmitType<SelectEventArgs>;
    dataBound?: EmitType<Object>;
    destroyed?: EmitType<Object>;
}
