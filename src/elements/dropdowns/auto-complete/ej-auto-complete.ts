import { EjAutoCompleteModel } from './ej-auto-complete-model';
import { customElement, bindable, inlineView, autoinject, BehaviorInstruction, TargetInstruction, TaskQueue, bindingMode, processContent, observable } from 'aurelia-framework';
import { AutoComplete, AutoCompleteModel, FieldSettingsModel, FilterType } from '@syncfusion/ej2-dropdowns';
import { FloatLabelType, IInput } from '@syncfusion/ej2-inputs';
import { SortOrder } from '@syncfusion/ej2-lists';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { EjComponentModel } from '../../base/ej-component-model';

@autoinject
@customElement('ej-autocomplete')
@inlineView('<template><input type="text" value.to-view="text" tabindex="1"></template>')
@processContent((compiler, resources, element: HTMLElement, instruction: BehaviorInstruction) => {
  
  for (let i = 0; i < element.children.length; i++) {
    let tagName = element.children[i].tagName.trim().toUpperCase();
    if (tagName === 'EJ-ITEM-TEMPLATE') {
      element.setAttribute("item-template", element.children[i].innerHTML);
    }
    if (tagName === 'EJ-HEADER-TEMPLATE') {
      element.setAttribute("header-template", element.children[i].innerHTML);
    }
  }

  return true;
})
export class EjAutoComplete extends EjAutoCompleteModel implements AutoCompleteModel {

  constructor(private element: Element, private taskQueue: TaskQueue, private ti: TargetInstruction) {
    super();
  }

  attached() { 
    this._wrapped = new AutoComplete({
      actionBegin: this.actionBegin,
      actionComplete: this.actionComplete,
      actionFailure: this.actionFailure, 
      actionFailureTemplate: this.actionFailureTemplate,
      allowCustom: this.allowCustom,
      allowFiltering: this.allowFiltering,
      autofill: this.autofill,
      beforeOpen: this.beforeOpen,
      blur: this.blur, 
      change: (e) => {
        if (this.fields.value && e.itemData && e.itemData.toString() === '[object Object]') {
          this.text = e.itemData[this.fields.value];
        } else {
          this.text = e.value?.toString();
        }
        
        this.value = e.itemData;
      },
      close: this.close,
      cssClass: this.cssClass,
      customValueSpecifier: this.customValueSpecifier,
      dataBound: this.dataBound,
      dataSource:  this.dataSource,
      destroyed: this.destroyed,
      fields: JSON.parse(this.fields.toString()),
      filterBarPlaceholder: this.filterBarPlaceholder,
      filterType: this.filterType,
      filtering: this.filtering,
      floatLabelType: this.floatLabelType,
      focus: this.focus,
      footerTemplate: this.footerTemplate,
      groupTemplate: this.groupTemplate,
      headerTemplate: (this.headerTemplate = this.element.attributes.getNamedItem('header-template').value),
      highlight: this.highlight,
      htmlAttributes: this.htmlAttributes,
      ignoreAccent: this.ignoreAccent,
      ignoreCase: this.ignoreCase,
      index: this.index,      
      itemTemplate: (this.itemTemplate = this.element.attributes.getNamedItem('item-template').value),
      locale: this.locale,
      minLength: this.minLength,
      noRecordsTemplate: this.noRecordsTemplate,
      open: this.open,
      placeholder: this.placeholder,
      popupHeight: this.popupHeight,
      popupWidth: this.popupWidth,
      readonly: this.readonly, 
      select: this.select,
      showClearButton: this.showClearButton,
      showPopupButton: this.showPopupButton,
      sortOrder: this.sortOrder,
      suggestionCount: this.suggestionCount,
      text: this.text,
      value: this.value,
      valueTemplate: this.valueTemplate,
      width: this.width,
      zIndex: this.zIndex
    }, this.element.querySelector("input"));

    if (this.value && this.value.toString() === '[object Object]') {        
      this.text = this.value[JSON.parse(this.fields).value];
    } else {
      this.text = this.value.toString();
    }
  }

  /**
   * Gets or sets the value of the selected item in the component.
   * @default null
   * @isGenericType true
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  value?: number | string | boolean | any;

}
