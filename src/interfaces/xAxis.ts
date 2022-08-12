export interface ApexChartsXAxisOption {
  type: "category" | "datetime" | "numeric";
  categories: string[];
  tickAmount: number;
  tickPlacement: "between" | "on";
  min: number;
  max: number;
  range: number;
  floating: boolean;
  decimalsInFloat: number;
  overwriteCategories: string[];
  position: "bottom" | "top";
  labels: Labels;
  axisBorder: AxisBorder;
  axisTicks: AxisTicks;
  title: Title;
  crosshairs: Crosshairs;
  tooltip: Tooltip;
}

interface Tooltip {
  enabled: boolean;
  formatter: (value: unknown, options: Record<string, any>) => string;
  offsetY: number;
  style: TooltipStyle;
}

interface TooltipStyle {
  fontSize: number;
  fontFamily: number;
}

interface Crosshairs {
  show: boolean;
  width: number | "tickWidth" | "barWidth";
  position: "back" | "front";
  opacity: number;
  stroke: Stroke;
  fill: Fill;
  dropShadow: DropShadow;
}

interface DropShadow {
  enabled: boolean;
  top: number;
  left: number;
  blur: number;
  opacity: number;
}

interface Fill {
  type: "solid" | "gradient";
  color: string;
  gradient: Gradient;
}

interface Gradient {
  colorFrom: string;
  colorTo: string;
  stops: number[];
  opacityFrom: number;
  opacityTo: number;
}

interface Stroke {
  color: string;
  width: number;
  dashArray: number;
}

interface Title {
  text: string;
  offsetX: number;
  offsetY: number;
  style: TitleStyle;
}

interface TitleStyle {
  color: string;
  fontSize: string;
  fontFamily: string;
  fontWeight: number | string;
  cssClass: string;
}

interface AxisTicks {
  show: boolean;
  borderType: "solid" | "dotted";
  color: string;
  height: number;
  offsetX: number;
  offsetY: number;
}

interface AxisBorder {
  show: boolean;
  color: string;
  height: number;
  width: string;
  offsetX: number;
  offsetY: number;
}

interface Labels {
  show: boolean;
  rotate: number;
  rotateAlways: boolean;
  hideOverlappingLabels: boolean;
  showDuplicates: boolean;
  trim: boolean;
  minHeight: number;
  maxHeight: number;
  style: Style;
  offsetX: number;
  offsetY: number;
  format: string;
  formatter: (value: unknown, timestamp: number, options: Record<string, any>) => unknown;
  datetimeUTC: boolean;
  datetimeFormatter: DatetimeFormatter;
}

interface DatetimeFormatter {
  year: string;
  month: string;
  day: string;
  hour: string;
}

interface Style {
  colors: string[] | string;
  fontSize: string;
  fontFamily: string;
  fontWeight: number | string;
  cssClass: string;
}
