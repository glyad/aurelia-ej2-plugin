import { bindable, bindingMode } from 'aurelia-framework';
import { EmitType, Component } from '@syncfusion/ej2-base';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { SortOrder } from '@syncfusion/ej2-lists';
import { DropDownBaseModel, FieldSettingsModel, FilterType, SelectEventArgs } from '@syncfusion/ej2-dropdowns';
import { EjComponentModel } from '../../base/ej-component-model';

export class EjDropDownBaseModel<T extends Component<HTMLElement>> extends EjComponentModel<T> implements DropDownBaseModel {

  /**
   * The `fields` property maps the columns of the data table and binds the data to the component.
   * * text - Maps the text column from data table for each list item.
   * * value - Maps the value column from data table for each list item.
   * * iconCss - Maps the icon class column from data table for each list item.
   * * groupBy - Group the list items with it's related items by mapping groupBy field.
   * ```html
   * <input type="text" tabindex="1" id="list"> </input>
   * ```
   * ```typescript
   *   let customers: DropDownList = new DropDownList({
   *      dataSource:new DataManager({ url:'http://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/' }),
   *      query: new Query().from('Customers').select(['ContactName', 'CustomerID']).take(5),
   *      fields: { text: 'ContactName', value: 'CustomerID' },
   *      placeholder: 'Select a customer'
   *   });
   *   customers.appendTo("#list");
   * ```
   * @default {text: null, value: null, iconCss: null, groupBy: null}
   * @deprecated
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  fields?: FieldSettingsModel | any;

  /**
   * Accepts the template design and assigns it to each list item present in the popup.
   * We have built-in `template engine`
   *
   * which provides options to compile template string into a executable function.
   * For EX: We have expression evolution as like ES6 expression string literals.
   * @default null
   * @deprecated
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  itemTemplate?: string;

  /**
   * Accepts the template design and assigns it to the group headers present in the popup list.
   * @default null
   * @deprecated
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  groupTemplate?: string;

  /**
   * Accepts the template design and assigns it to popup list of component
   * when no data is available on the component.
   * @default 'No Records Found'
   * @deprecated
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  noRecordsTemplate?: string;

  /**
   * Accepts the template and assigns it to the popup list content of the component
   * when the data fetch request from the remote server fails.
   * @default 'The Request Failed'
   * @deprecated
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  actionFailureTemplate?: string;

  /**
   * Specifies the `sortOrder` to sort the data source. The available type of sort orders are
   * * `None` - The data source is not sorting.
   * * `Ascending` - The data source is sorting with ascending order.
   * * `Descending` - The data source is sorting with descending order.
   * @default None
   * @deprecated
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  sortOrder?: SortOrder;

  /**
   * Specifies a value that indicates whether the component is enabled or not.
   * @default true
   * @deprecated
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  enabled?: boolean;

  /**
   * Accepts the list items either through local or remote service and binds it to the component.
   * It can be an array of JSON Objects or an instance of
   * `DataManager`.
   * @default []
   * @deprecated
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  dataSource?: { [key: string]: Object }[] | DataManager | string[] | number[] | boolean[];

  /**
   * Accepts the external `Query`
   * which will execute along with the data processing.
   * @default null
   * @deprecated
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  query?: Query;

  /**
   * Determines on which filter type, the component needs to be considered on search action.
   * The `FilterType` and its supported data types are
   *
   * <table>
   * <tr>
   * <td colSpan=1 rowSpan=1>
   * FilterType<br/></td><td colSpan=1 rowSpan=1>
   * Description<br/></td><td colSpan=1 rowSpan=1>
   * Supported Types<br/></td></tr>
   * <tr>
   * <td colSpan=1 rowSpan=1>
   * StartsWith<br/></td><td colSpan=1 rowSpan=1>
   * Checks whether a value begins with the specified value.<br/></td><td colSpan=1 rowSpan=1>
   * String<br/></td></tr>
   * <tr>
   * <td colSpan=1 rowSpan=1>
   * EndsWith<br/></td><td colSpan=1 rowSpan=1>
   * Checks whether a value ends with specified value.<br/><br/></td><td colSpan=1 rowSpan=1>
   * <br/>String<br/></td></tr>
   * <tr>
   * <td colSpan=1 rowSpan=1>
   * Contains<br/></td><td colSpan=1 rowSpan=1>
   * Checks whether a value contains with specified value.<br/><br/></td><td colSpan=1 rowSpan=1>
   * <br/>String<br/></td></tr>
   * </table>
   *
   * The default value set to `StartsWith`, all the suggestion items which contain typed characters to listed in the suggestion popup.
   * @default 'StartsWith'
   * @deprecated
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  filterType?: FilterType;

  /**
   * When set to ‘false’, consider the `case-sensitive` on performing the search to find suggestions.
   * By default consider the casing.
   * @default true
   * @deprecated
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  ignoreCase?: boolean;

  /**
   * specifies the z-index value of the component popup element.
   * @default 1000
   * @deprecated
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  zIndex?: number;

  /**
   * ignoreAccent set to true, then ignores the diacritic characters or accents when filtering.
   * @deprecated
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  ignoreAccent?: boolean;

  /**
   * Triggers before fetching data from the remote server.
   * @event
   * @blazorProperty 'OnActionBegin'
   * @blazorType ActionBeginEventArgs
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  actionBegin?: EmitType<Object>;

  /**
   * Triggers after data is fetched successfully from the remote server.
   * @event
   * @blazorProperty 'OnActionComplete'
   * @blazorType ActionCompleteEventArgs
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  actionComplete?: EmitType<Object>;

  /**
   * Triggers when the data fetch request from the remote server fails.
   * @event
   * @blazorProperty 'OnActionFailure'
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  actionFailure?: EmitType<Object>;

  /**
   * Triggers when an item in the popup is selected by the user either with mouse/tap or with keyboard navigation.
   * @event
   * @blazorProperty 'OnValueSelect'
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  select?: EmitType<SelectEventArgs>;

  /**
   * Triggers when data source is populated in the popup list..
   * @event
   * @blazorProperty 'DataBound'
   * @blazorType DataBoundEventArgs
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  dataBound?: EmitType<Object>;

  /**
   * Triggers when the component is destroyed.
   * @event
   * @blazorProperty 'Destroyed'
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  destroyed?: EmitType<Object>;
}
