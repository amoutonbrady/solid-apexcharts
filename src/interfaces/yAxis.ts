export interface ApexChartsYAxisOption {
  show: boolean;
  showAlways: boolean;
  showForNullSeries: boolean;
  seriesName: string;
  opposite: boolean;
  reversed: boolean;
  logarithmic: boolean;
  logBase: number;
  tickAmount: number;
  min: number | ((value: number) => number);
  max: number | ((value: number) => number);
  range: number;
  forceNiceScale: boolean;
  floating: boolean;
  decimalsInFloat: number;
  labels: Labels;
  axisBorder: AxisBorder;
  axisTicks: AxisTicks;
  title: Title;
  crosshairs: Crosshairs;
  tooltip: Tooltip;
}

interface Tooltip {
  enabled: boolean;
  offsetX: number;
}

interface Crosshairs {
  show: boolean;
  position: "back" | "front";
  stroke: Stroke;
}

interface Stroke {
  color: string;
  width: number;
  dashArray: number;
}

interface Title {
  text: string;
  rotate: number;
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
  width: number;
  offsetX: number;
  offsetY: number;
}

interface AxisBorder {
  show: boolean;
  color: string;
  offsetX: number;
  offsetY: number;
}

interface Labels {
  show: boolean;
  align: "left" | "center" | "right";
  minWidth: number;
  maxWidth: number;
  style: Style;
  offsetX: number;
  offsetY: number;
  rotate: number;
  formatter: (val: unknown, index: number) => string;
}

interface Style {
  colors: string | string[];
  fontSize: string;
  fontFamily: string;
  fontWeight: number | string;
  cssClass: string;
}
