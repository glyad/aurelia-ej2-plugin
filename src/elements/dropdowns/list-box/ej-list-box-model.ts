import { bindable, bindingMode } from 'aurelia-framework';
import { EmitType } from '@syncfusion/ej2-base';
import { Query, DataManager } from '@syncfusion/ej2-data';
import { SortOrder } from '@syncfusion/ej2-lists';
import { EjDropDownBaseModel } from './../drop-down-base/ej-drop-down-base-model';
import { SelectionSettingsModel, ToolbarSettingsModel, ListBoxModel, FieldSettingsModel, FilterType, FilteringEventArgs, SelectEventArgs, BeforeItemRenderEventArgs, ListBoxChangeEventArgs, DropEventArgs, DragEventArgs } from '@syncfusion/ej2-dropdowns';

export class EjListBoxModel extends EjDropDownBaseModel implements ListBoxModel {
  
    /**
     * Sets the CSS classes to root element of this component, which helps to customize the
     * complete styles.
     * @default ''
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    cssClass?: string;

    /**
     * Sets the specified item to the selected state or gets the selected item in the ListBox.
     * @default []
     * @aspType object
     * @isGenericType true
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    value?: string[] | number[] | boolean[];

    /**
     * Sets the height of the ListBox component.
     * @default ''
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    height?: number | string;

    /**
     * If 'allowDragAndDrop' is set to true, then you can perform drag and drop of the list item.
     * ListBox contains same 'scope' property enables drag and drop between multiple ListBox.
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    allowDragAndDrop?: boolean;

    /**
     * Sets limitation to the value selection.
     * based on the limitation, list selection will be prevented.
     * @default 1000
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    maximumSelectionLength?: number;

    /**
     * To enable the filtering option in this component. 
     * Filter action performs when type in search box and collect the matched item through `filtering` event.
     * If searching character does not match, `noRecordsTemplate` property value will be shown.
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    allowFiltering?: boolean;

    /**
     * Defines the scope value to group sets of draggable and droppable ListBox.
     * A draggable with the same scope value will be accepted by the droppable.
     * @default ''
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    scope?: string;

    /**
     * Triggers while rendering each list item.
     * @event
     * @blazorProperty 'OnItemRender'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    beforeItemRender?: EmitType<BeforeItemRenderEventArgs>;

    /**
     * Triggers on typing a character in the component.
     * @event
     * @blazorProperty 'ItemSelected'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    filtering?: EmitType<FilteringEventArgs>;

    /**
     * Triggers while select / unselect the list item.
     * @event
     * @blazorProperty 'ValueChange'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    change?: EmitType<ListBoxChangeEventArgs>;

    /**
     * Triggers before dropping the list item on another list item.
     * @event
     * @blazorProperty 'OnDrop'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    beforeDrop?: EmitType<DropEventArgs>;

    /**
     * Triggers after dragging the list item.
     * @event
     * @blazorProperty 'DragStart'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    dragStart?: EmitType<DragEventArgs>;

    /**
     * Triggers while dragging the list item.
     * @event
     * @blazorProperty 'Dragging'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    drag?: EmitType<DragEventArgs>;

    /**
     * Triggers before dropping the list item on another list item.
     * @event
     * @blazorProperty 'Dropped'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    drop?: EmitType<DragEventArgs>;

    /**
     * Specifies the toolbar items and its position.
     * @default { items: [], position: 'Right' }
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    toolbarSettings?: ToolbarSettingsModel;

    /**
     * Specifies the selection mode and its type.
     * @default { mode: 'Multiple', type: 'Default' }
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    selectionSettings?: SelectionSettingsModel;
}
