import { bindable, bindingMode } from 'aurelia-framework';
import { EmitType } from '@syncfusion/ej2-base';
import { FloatLabelType } from '@syncfusion/ej2-inputs';
import {  MultiSelectModel, FilterType, FilteringEventArgs, FieldSettingsModel, visualMode, 
          MultiSelectChangeEventArgs, RemoveEventArgs, ISelectAllEventArgs, 
          TaggingEventArgs, CustomValueEventArgs, PopupEventArgs } from '@syncfusion/ej2-dropdowns';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { SortOrder } from '@syncfusion/ej2-lists';


export class EJMultiSelectModel implements MultiSelectModel {
  
    /**
     * Specifies a Boolean value that indicates the whether the grouped list items are 
     * allowed to check by checking the group header in checkbox mode.
     * By default, there is no checkbox provided for group headers.
     * This property allows you to render checkbox for group headers and to select 
     * all the grouped items at once
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    enableGroupCheckBox?: boolean;

    /**
     * Sets the CSS classes to root element of this component which helps to customize the
     * complete styles.
     * @default null
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    cssClass?: string;

    /**
     * Gets or sets the width of the component. By default, it sizes based on its parent.
     * container dimension.
     * @default '100%'
     * @aspType string
     * @blazorType string
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    width?: string | number;

    /**
     * Gets or sets the height of the popup list. By default it renders based on its list item.
     * > For more details about the popup configuration refer to 
     * [`Popup Configuration`](../../multi-select/getting-started/#configure-the-popup-list) documentation.
     * 
     * @default '300px'
     * @aspType string
     * @blazorType string
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    popupHeight?: string | number;

    /**
     * Gets or sets the width of the popup list and percentage values has calculated based on input width.
     * > For more details about the popup configuration refer to 
     * [`Popup Configuration`](../../multi-select/getting-started/#configure-the-popup-list) documentation.
     * 
     * @default '100%'
     * @aspType string
     * @blazorType string
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    popupWidth?: string | number;

    /**
     * Gets or sets the placeholder in the component to display the given information
     * in input when no item selected. 
     * @default null
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    placeholder?: string;

    /**
     * Accepts the value to be displayed as a watermark text on the filter bar. 
     * @default null
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    filterBarPlaceholder?: string;

    /**
     * Gets or sets the additional attribute to `HtmlAttributes` property in MultiSelect,
     * which helps to add attribute like title, name etc, input should be key value pair.
     * 
     * {% codeBlock src="multiselect/html-attributes-api/index.ts" %}{% endcodeBlock %}
     * 
     * {% codeBlock src="multiselect/html-attributes-api/index.html" %}{% endcodeBlock %}
     * @default {}
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    htmlAttributes?: { [key: string]: string; };

    /**
     * Accepts the template design and assigns it to the selected list item in the input element of the component.
     * For more details about the available template options refer to 
     * [`Template`](../../multi-select/templates) documentation.
     * 
     * We have built-in `template engine`
     * which provides options to compile template string into a executable function. 
     * For EX: We have expression evolution as like ES6 expression string literals.
     * @default null
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    valueTemplate?: string;

    /**
     * Accepts the template design and assigns it to the header container of the popup list.
     * > For more details about the available template options refer to [`Template`](../../multi-select/templates) documentation.
     * 
     * @default null
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    headerTemplate?: string;

    /**
     * Accepts the template design and assigns it to the footer container of the popup list.
     * > For more details about the available template options refer to [`Template`](../../multi-select/templates) documentation.
     * 
     * @default null
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    footerTemplate?: string;

    /**
     * To enable the filtering option in this component. 
     * Filter action performs when type in search box and collect the matched item through `filtering` event.
     * If searching character does not match, `noRecordsTemplate` property value will be shown.
     * 
     * {% codeBlock src="multiselect/allow-filtering-api/index.ts" %}{% endcodeBlock %}
     * 
     * {% codeBlock src="multiselect/allow-filtering-api/index.html" %}{% endcodeBlock %}
     * 
     * @default null
     * @isBlazorNullableType true
     * @blazorDefaultValue 
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    allowFiltering?: boolean;

    /**
     * By default, the multiselect component fires the change event while focus out the component.
     * If you want to fires the change event on every value selection and remove, then disable the changeOnBlur property. 
     * 
     * @default true
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    changeOnBlur?: boolean;

    /**
     * Allows user to add a 
     * [`custom value`](../../multi-select/custom-value), the value which is not present in the suggestion list.
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    allowCustomValue?: boolean;

    /**
     * Enables close icon with the each selected item.
     * @default true
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    showClearButton?: boolean;

    /**
     * Sets limitation to the value selection.
     * based on the limitation, list selection will be prevented.
     * @default 1000
     * @blazorType int
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    maximumSelectionLength?: number;

    /**
     * Gets or sets the `readonly` to input or not. Once enabled, just you can copy or highlight 
     * the text however tab key action will perform.
     * 
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    readonly?: boolean;

    /**
     * Selects the list item which maps the data `text` field in the component.
     * @default null
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    text?: string;

    /**
     * Selects the list item which maps the data `value` field in the component.
     * @default null
     * @isGenericType true
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    value?: number[] | string[] | boolean[];

    /**
     * Hides the selected item from the list item.
     * @default true
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    hideSelectedItem?: boolean;

    /**
     * Based on the property, when item get select popup visibility state will changed.
     * @default true
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    closePopupOnSelect?: boolean;

    /**
     * configures visibility mode for component interaction.
     * 
     *   - `Box` - selected items will be visualized in chip.
     * 
     *   - `Delimiter` - selected items will be visualized in text content.
     * 
     *   - `Default` - on `focus in` component will act in `box` mode.
     *    on `blur` component will act in `delimiter` mode.
     * 
     *   - `CheckBox` - The 'checkbox' will be visualized in list item.
     * 
     * {% codeBlock src="multiselect/visual-mode-api/index.ts" %}{% endcodeBlock %}
     * 
     * {% codeBlock src="multiselect/visual-mode-api/index.html" %}{% endcodeBlock %}
     * 
     * @default Default
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    mode?: visualMode;

    /**
     * Sets the delimiter character for 'default' and 'delimiter' visibility modes.
     * @default ','
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    delimiterChar?: string;

    /**
     * Allows you to either show or hide the DropDown button on the component
     * 
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    showDropDownIcon?: boolean;

    /**
     * Specifies whether to display the floating label above the input element.
     * Possible values are:
     * * Never: The label will never float in the input when the placeholder is available.
     * * Always: The floating label will always float above the input.
     * * Auto: The floating label will float above the input after focusing or entering a value in the input.
     * 
     * @default Syncfusion.EJ2.Inputs.FloatLabelType.Never
     * @aspType Syncfusion.EJ2.Inputs.FloatLabelType
     * @isEnumeration true
     * @blazorType Syncfusion.EJ2.Inputs.FloatLabelType
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    floatLabelType?: FloatLabelType;

    /**
     * Allows you to either show or hide the selectAll option on the component.
     * 
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    showSelectAll?: boolean;

    /**
     * Specifies the selectAllText to be displayed on the component.
     * 
     * @default 'select All'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    selectAllText?: string;

    /**
     * Specifies the UnSelectAllText to be displayed on the component.
     * 
     * @default 'select All'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    unSelectAllText?: string;

    /**
     * Reorder the selected items in popup visibility state.
     * 
     * @default true
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    enableSelectionOrder?: boolean;

    /**
     * Whether to automatically open the popup when the control is clicked.
     * @default true
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    openOnClick?: boolean;

    /**
     * Fires each time when selection changes happened in list items after model and input value get affected.
     * @event
     * @blazorProperty 'ValueChange'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    change?: EmitType<MultiSelectChangeEventArgs>;

    /**
     * Fires before the selected item removed from the widget.
     * @event
     * @blazorProperty 'OnValueRemove'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    removing?: EmitType<RemoveEventArgs>;

    /**
     * Fires after the selected item removed from the widget.
     * @event
     * @blazorProperty 'ValueRemoved'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    removed?: EmitType<RemoveEventArgs>;

    /**
     * Fires after select all process completion.
     * @event
     * @blazorProperty 'SelectedAll'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    selectedAll?: EmitType<ISelectAllEventArgs>;

    /**
     * Fires when popup opens before animation.
     * @event
     * @blazorProperty 'OnOpen'
     * @blazorType BeforeOpenEventArgs
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    beforeOpen?: EmitType<Object>;

    /**
     * Fires when popup opens after animation completion.
     * @event
     * @blazorProperty 'Opened'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    open?: EmitType<PopupEventArgs>;

    /**
     * Fires when popup close after animation completion.
     * @event
     * @blazorProperty 'OnClose'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    close?: EmitType<PopupEventArgs>;

    /**
     * Event triggers when the input get focus-out.
     * @event
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    blur?: EmitType<Object>;

    /**
     * Event triggers when the input get focused.
     * @event
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    focus?: EmitType<Object>;

    /**
     * Event triggers when the chip selection.
     * @event
     * @blazorProperty 'ChipSelected'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    chipSelection?: EmitType<Object>;

    /**
     * Triggers event,when user types a text in search box.
     * > For more details about filtering, refer to [`Filtering`](../../multi-select/filtering) documentation.
     * 
     * @event
     * @blazorProperty 'Filtering'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    filtering?: EmitType<FilteringEventArgs>;

    /**
     * Fires before set the selected item as chip in the component.
     * > For more details about chip customization refer [`Chip Customization`](../../multi-select/chip-customization)
     * 
     * @event
     * @blazorProperty 'OnChipTag'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    tagging?: EmitType<TaggingEventArgs>;

    /**
     * Triggers when the [`customValue`](../../multi-select/custom-value) is selected.
     * @event
     * @blazorProperty 'CustomValueSpecifier'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    customValueSelection?: EmitType<CustomValueEventArgs>;
}
