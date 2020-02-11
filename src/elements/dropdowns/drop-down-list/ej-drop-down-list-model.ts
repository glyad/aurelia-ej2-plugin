import { bindable, bindingMode } from 'aurelia-framework';
import { FloatLabelType } from '@syncfusion/ej2-inputs';
import { EmitType } from '@syncfusion/ej2-base';
import { DropDownList, DropDownListModel, ChangeEventArgs, FilteringEventArgs, PopupEventArgs } from '@syncfusion/ej2-dropdowns';
import { EjDropDownBaseModel } from '../drop-down-base/ej-drop-down-base-model';

export class EjDropDownListModel<T> extends EjDropDownBaseModel<DropDownList> implements DropDownListModel {

  /**
   * Sets CSS classes to the root element of the component that allows customization of appearance.
   * @default null
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  cssClass?: string;

  /**
   * Specifies the width of the component. By default, the component width sets based on the width of
   * its parent container. You can also set the width in pixel values.
   * @default '100%'
   * @aspType string
   * @blazorType string
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  width?: string | number;

  /**
   * Specifies the height of the popup list.
   * > For more details about the popup configuration refer to
   * [`Popup Configuration`](../../drop-down-list/getting-started#configure-the-popup-list) documentation.
   * @default '300px'
   * @aspType string
   * @blazorType string
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  popupHeight?: string | number;

  /**
   * Specifies the width of the popup list. By default, the popup width sets based on the width of
   * the component.
   * > For more details about the popup configuration refer to
   * [`Popup Configuration`](../../drop-down-list/getting-started#configure-the-popup-list) documentation.
   * @default '100%'
   * @aspType string
   * @blazorType string
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  popupWidth?: string | number;

  /**
   * Specifies a short hint that describes the expected value of the DropDownList component.
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
   * Allows additional HTML attributes such as title, name, etc., and
   * accepts n number of attributes in a key-value pair format.
   *
   * {% codeBlock src="dropdownlist/html-attributes-api/index.ts" %}{% endcodeBlock %}
   *
   * {% codeBlock src="dropdownlist/html-attributes-api/index.html" %}{% endcodeBlock %}
   *
   * @default {}
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  htmlAttributes?: { [key: string]: string; };

  /**
   * Accepts the template design and assigns it to the selected list item in the input element of the component.
   * For more details about the available template options refer to
   * [`Template`](../../drop-down-list/templates) documentation.
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
   * > For more details about the available template options refer to [`Template`](../../drop-down-list/templates) documentation.
   * @default null
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  headerTemplate?: string;

  /**
   * Accepts the template design and assigns it to the footer container of the popup list.
   * > For more details about the available template options refer to [`Template`](../../drop-down-list/templates) documentation.
   * @default null
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  footerTemplate?: string;

  /**
   * When allowFiltering is set to true, show the filter bar (search box) of the component.
   * The filter action retrieves matched items through the `filtering` event based on
   * the characters typed in the search TextBox.
   *
   * If no match is found, the value of the `noRecordsTemplate` property will be displayed.
   * > For more details about the filtering refer to [`Filtering`](../../drop-down-list/filtering) documentation.
   *
   * {% codeBlock src="dropdownlist/allow-filtering-api/index.ts" %}{% endcodeBlock %}
   *
   * {% codeBlock src="dropdownlist/allow-filtering-api/index.html" %}{% endcodeBlock %}
   * @default false
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  allowFiltering?: boolean;

  /**
   * When set to true, the user interactions on the component are disabled.
   * @default false
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  readonly?: boolean;

  /**
   * Gets or sets the display text of the selected item in the component.
   * @default null
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  text?: string;

  /**
   * Gets or sets the value of the selected item in the component.
   * @default null
   * @isGenericType true
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  value?: number | string | boolean;

  /**
   * Gets or sets the index of the selected item in the component.
   *
   * {% codeBlock src="dropdownlist/index-api/index.ts" %}{% endcodeBlock %}
   *
   * {% codeBlock src="dropdownlist/index-api/index.html" %}{% endcodeBlock %}
   *
   * @default null
   * @blazorType int
   * @isBlazorNullableType true
   * @blazorDefaultValue
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  index?: number;

  /**
   * Specifies whether to display the floating label above the input element.
   * Possible values are:
   * * Never: The label will never float in the input when the placeholder is available.
   * * Always: The floating label will always float above the input.
   * * Auto: The floating label will float above the input after focusing or entering a value in the input.
   *
   * {% codeBlock src="dropdownlist/float-label-type-api/index.ts" %}{% endcodeBlock %}
   *
   * {% codeBlock src="dropdownlist/float-label-type-api/index.html" %}{% endcodeBlock %}
   *
   * @default Syncfusion.EJ2.Inputs.FloatLabelType.Never
   * @aspType Syncfusion.EJ2.Inputs.FloatLabelType
   * @isEnumeration true
   * @blazorType Syncfusion.EJ2.Inputs.FloatLabelType
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  floatLabelType?: FloatLabelType;

  /**
   * Specifies whether to show or hide the clear button.
   * When the clear button is clicked, `value`, `text`, and `index` properties are reset to null.
   * @default false
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  showClearButton?: boolean;

  /**
   * Triggers on typing a character in the filter bar when the
   * [`allowFiltering`](./#allowfiltering)
   * is enabled.
   * > For more details about the filtering refer to [`Filtering`](../../drop-down-list/filtering) documentation.
   *
   * @event
   * @blazorProperty 'Filtering'
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  filtering?: EmitType<FilteringEventArgs>;

  /**
   * Triggers when an item in a popup is selected or when the model value is changed by user.
   * Use change event to
   * [`Configure the Cascading DropDownList`](../../drop-down-list/how-to/cascading)
   * @event
   * @blazorProperty 'ValueChange'
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  change?: EmitType<ChangeEventArgs>;

  /**
   * Triggers when the popup before opens.
   * @event
   * @blazorProperty 'OnOpen'
   * @blazorType BeforeOpenEventArgs
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  beforeOpen?: EmitType<Object>;

  /**
   * Triggers when the popup opens.
   * @event
   * @blazorProperty 'Opened'
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  open?: EmitType<PopupEventArgs>;

  /**
   * Triggers when the popup is closed.
   * @event
   * @blazorProperty 'OnClose'
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  close?: EmitType<PopupEventArgs>;

  /**
   * Triggers when focus moves out from the component.
   * @event
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  blur?: EmitType<Object>;

  /**
   * Triggers when the component is focused.
   * @event
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  focus?: EmitType<Object>;

}
