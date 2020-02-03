import { bindable } from 'aurelia-framework';
import * as data from './dataSource.json';


export class GettingStarted {
  public message: string = 'from Aurelia!';

  products: string[] = ['Motherboard', 'CPU', 'Memory'];
  selectedProduct = null;

  @bindable public isPrimary = false;
  @bindable public isDisabled = false;
  @bindable public isRTL = false;
  @bindable public radioValue;
  @bindable public acData = (data as any).empList;
  @bindable public textFromAutoComplete;
  @bindable public valueFromAutoComplete = { Name: "Laura Callahan", Eimg: 2, Designation: "Product Manager", Country: "USA" };

}
