import { EmitType } from "@syncfusion/ej2-base";
import { TabItemModel, HeaderPosition, HeightStyles, OverflowMode, TabAnimationSettingsModel, AddEventArgs, SelectingEventArgs, SelectEventArgs, TabModel, RemoveEventArgs, Tab } from "@syncfusion/ej2-navigations";

import { EjComponentModel } from "../../base/ej-component-model";

/**
 * Interface for a class Tab
 */
export abstract class EjTabModel extends EjComponentModel<Tab> implements TabModel{

  /**
   * An array of object that is used to configure the Tab component.
   * ```typescript
   *   let tabObj: Tab = new Tab( {
   *     items: [
   *       { header: { text: 'TabItem1' }, content: 'Tab Item1 Content' },
   *       { header: { text: 'TabItem2' }, content: 'Tab Item2 Content' }
   *     ]
   *   });
   *   tabObj.appendTo('#tab');
   * ```
   * @default []
   */
  items?: TabItemModel[];

  /**
   * Specifies the width of the Tab component. Default, Tab width sets based on the width of its parent.
   * @default '100%'
   */
  width?: string | number;

  /**
   * Specifies the height of the Tab component. By default, Tab height is set based on the height of its parent.
   * To use height property, heightAdjustMode must be set to 'None'.
   * @default 'auto'
   */
  height?: string | number;

  /**
   * Sets the CSS classes to root element of the Tab that helps to customize component styles.
   * @default ''
   */
  cssClass?: string;

  /**
   * Specifies the index for activating the current Tab item.
   * ```typescript
   *   let tabObj: Tab = new Tab( {
   *     selectedItem: 1,
   *     items: [
   *       { header: { text: 'TabItem1' }, content: 'Tab Item1 Content' },
   *       { header: { text: 'TabItem2' }, content: 'Tab Item2 Content' }
   *     ]
   *   });
   *   tabObj.appendTo('#tab');
   * ```
   * @default 0
   */
  selectedItem?: number;

  /**
   * Specifies the orientation of Tab header.
   * The possible values are:
   * - Top: Places the Tab header on the top.
   * - Bottom: Places the Tab header at the bottom.
   * - Left: Places the Tab header on the left.
   * - Right: Places the Tab header at the right.
   * @default 'Top'
   */
  headerPlacement?: HeaderPosition;

  /**
   * Specifies the height style for Tab content.
   * The possible values are:
   * - None: Based on the given height property, the content panel height is set.
   * - Auto: Tallest panel height of a given Tab content is set to all the other panels.
   * - Content: Based on the corresponding content height, the content panel height is set.
   * - Fill: Based on the parent height, the content panel height is set.
   * @default 'Content'
   * @deprecated
   */
  heightAdjustMode?: HeightStyles;

  /**
   * Specifies the Tab display mode when Tab content exceeds the viewing area.
   * The possible modes are:
   * - Scrollable: All the elements are displayed in a single line with horizontal scrolling enabled.
   * - Popup: Tab container holds the items that can be placed within the available space and rest of the items are moved to the popup.
   * If the popup content overflows the height of the page, the rest of the elements can be viewed by scrolling the popup.
   * @default 'Scrollable'
   */
  overflowMode?: OverflowMode;

  /**
   * Enable or disable persisting component's state between page reloads.
   * If enabled, following list of states will be persisted.
   * 1. selectedItem
   * @default false
   */
  enablePersistence?: boolean;

  /**
   * Specifies whether to show the close button for header items to remove the item from the Tab.
   * @default false
   */
  showCloseButton?: boolean;

  /**
   * Specifies the scrolling distance in scroller.
   * @default null
   */
  scrollStep?: number;

  /**
   * Specifies the animation configuration settings while showing the content of the Tab.
   * @default
   * { previous: { effect: 'SlideLeftIn', duration: 600, easing: 'ease' },
   *   next: { effect: 'SlideRightIn', duration: 600, easing: 'ease' } }
   */
  animation?: TabAnimationSettingsModel;

  /**
   * The event will be fired once the component rendering is completed.
   * @event
   * @blazorProperty 'Created'
   */
  created?: EmitType<Event>;

  /**
   * The event will be fired before adding the item to the Tab.
   * @event
   * @blazorProperty 'Adding'
   */
  adding?: EmitType<AddEventArgs>;

  /**
   * The event will be fired after adding the item to the Tab.
   * @event
   * @blazorProperty 'Added'
   */
  added?: EmitType<AddEventArgs>;

  /**
   * The event will be fired before the item gets selected.
   * @event
   * @blazorProperty 'Selecting'
   */
  selecting?: EmitType<SelectingEventArgs>;

  /**
   * The event will be fired after the item gets selected.
   * @event
   * @blazorProperty 'Selected'
   */
  selected?: EmitType<SelectEventArgs>;

  /**
   * The event will be fired before removing the item from the Tab.
   * @event
   * @blazorProperty 'Removing'
   */
  removing?: EmitType<RemoveEventArgs>;

  /**
   * The event will be fired after removing the item from the Tab.
   * @event
   * @blazorProperty 'Removed'
   */
  removed?: EmitType<RemoveEventArgs>;

  /**
   * The event will be fired when the component gets destroyed.
   * @event
   * @blazorProperty 'Destroyed'
   */
  destroyed?: EmitType<Event>;

}
