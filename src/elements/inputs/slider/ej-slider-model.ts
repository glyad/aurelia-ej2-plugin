import { EmitType } from '@syncfusion/ej2-base';
import {
  SliderType,
  SliderOrientation,
  SliderChangeEventArgs,
  SliderTickEventArgs,
  SliderTickRenderedEventArgs,
  SliderTooltipEventArgs,
  ColorRangeDataModel,
  TicksDataModel,
  TooltipDataModel,
  LimitDataModel,
} from '@syncfusion/ej2-inputs';

import { ComponentModel } from '@syncfusion/ej2-base';

/**
 * Interface for a class Slider
 */
export interface SliderModel extends ComponentModel {
  /**
   * It is used to denote the current value of the Slider.
   * The value should be specified in array of number when render Slider type as range.
   *
   * {% codeBlock src="slider/value-api/index.ts" %}{% endcodeBlock %}
   * @default null
   * @isGenericType true
   */
  value?: number | number[];

  /**
   * It is used to denote own array of slider values.
   * The value should be specified in array of number or string.The min,max and step value is not considered
   * @default null
   */
  customValues?: string[] | number[];

  /**
   * It is used to denote the step value of Slider component which is the amount of Slider value change
   *  when increase / decrease button is clicked or press arrow keys or drag the thumb.
   *  Refer the documentation [here](../../slider/ticks#step)
   *  to know more about this property with demo.
   *
   * {% codeBlock src="slider/step-api/index.ts" %}{% endcodeBlock %}
   * @default 1
   */
  step?: number;

  /**
   * It sets the minimum value of Slider Component
   *
   * {% codeBlock src="slider/min-max-api/index.ts" %}{% endcodeBlock %}
   * @default 0
   */
  min?: number;

  /**
   * It sets the maximum value of Slider Component
   *
   * {% codeBlock src="slider/min-max-api/index.ts" %}{% endcodeBlock %}
   * @default 100
   */
  max?: number;

  /**
   * It is used to render the Slider component in read-only mode.
   * The slider rendered with user defined values and can’t be interacted with user actions.
   * @default false
   */
  readonly?: boolean;

  /**
   * It is used to denote the type of the Slider. The available options are:
   *  * default - Used to select a single value in the Slider.
   *  * minRange - Used to select a single value in the Slider. It displays shadow from the start value to the current value.
   *  * range - Used to select a range of values in the Slider. It displays shadow in-between the selection range.
   */
  type?: SliderType;

  /**
   * It is used to render the color to the slider based on the given  value
   */
  colorRange?: ColorRangeDataModel[];

  /**
   * It is used to render the slider ticks options such as placement and step values.
   * Refer the documentation [here](../../slider/ticks)
   *  to know more about this property with demo.
   *
   * {% codeBlock src="slider/ticks-api/index.ts" %}{% endcodeBlock %}
   * @default { placement: 'before' }
   */
  ticks?: TicksDataModel;

  /**
   * It is used to limit the slider movement within certain limits.
   * Refer the documentation [here](../../slider/limits)
   *  to know more about this property with demo
   *
   * {% codeBlock src="slider/limits-api/index.ts" %}{% endcodeBlock %}
   * @default { enabled: false }
   */
  limits?: LimitDataModel;

  /**
   * It is used to enable or disable the slider.
   * @default true
   */
  enabled?: boolean;

  /**
   * It is used to denote the slider tooltip and it's position.
   *
   * {% codeBlock src="slider/tooltip-api/index.ts" %}{% endcodeBlock %}
   * @default { placement: 'Before', isVisible: false, showOn: 'Focus', format: null }
   */
  tooltip?: TooltipDataModel;

  /**
   * It is used to show or hide the increase and decrease button of Slider Component,
   *  which is used to change the slider value.
   * Refer the documentation [here](../../slider/getting-started#buttons)
   *  to know more about this property with demo.
   *
   * {% codeBlock src="slider/showButtons-api/index.ts" %}{% endcodeBlock %}
   * @default false
   */
  showButtons?: boolean;

  /**
   * It is used to enable or disable the Slider handle moving animation.
   * @default true
   */
  enableAnimation?: boolean;

  /**
   * It is used to render Slider in either horizontal or vertical orientation.
   *  Refer the documentation [here](../../slider/getting-started#orientation)
   *  to know more about this property with demo.
   * @default 'Horizontal'
   */
  orientation?: SliderOrientation;

  /**
   * This property sets the CSS classes to root element of the Slider
   *  which helps to customize the UI styles.
   * @default ''
   */
  cssClass?: string;

  /**
   * Defines whether to allow the cross-scripting site or not.
   * @default false
   */
  enableHtmlSanitizer?: boolean;

  /**
   * We can trigger created event when the Slider is created.
   * @event
   * @blazorProperty 'Created'
   */
  created?: EmitType<Object>;

  /**
   * We can trigger change event whenever Slider value is changed.
   *  In other term, this event will be triggered while drag the slider thumb.
   * @event
   * @blazorProperty 'OnChange'
   */
  change?: EmitType<SliderChangeEventArgs>;

  /**
   * We can trigger changed event when Slider component action is completed while we change the Slider value.
   *  In other term, this event will be triggered, while drag the slider thumb completed.
   * @event
   * @blazorProperty 'ValueChange'
   */
  changed?: EmitType<SliderChangeEventArgs>;

  /**
   * We can trigger renderingTicks event when the ticks rendered on Slider,
   *  which is used to customize the ticks labels dynamically.
   * @event
   * @blazorProperty 'TicksRendering'
   */
  renderingTicks?: EmitType<SliderTickEventArgs>;

  /**
   * We can trigger renderedTicks event when the ticks are rendered on the Slider.
   * @event
   * @blazorProperty 'TicksRendered'
   */
  renderedTicks?: EmitType<SliderTickRenderedEventArgs>;

  /**
   * We can trigger tooltipChange event when we change the Sider tooltip value.
   * @deprecated
   * @event
   * @blazorProperty 'OnTooltipChange'
   */
  tooltipChange?: EmitType<SliderTooltipEventArgs>;
}
