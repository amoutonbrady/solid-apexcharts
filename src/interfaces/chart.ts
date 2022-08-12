export interface ApexChartsChartOption {
  animations: Animations;
  background: string;
  brush: Brush;
  defaultLocale: string;
  dropShadow: DropShadow;
  fontFamily: string;
  foreColor: string;
  group: string;
  events: ApexChartsEvents;
  height: number | string;
  width: number | string;
  id: string;
  locales: Locale[];
  offsetX: number;
  offsetY: number;
  parentHeightOffset: number;
  redrawOnParentResize: boolean;
  redrawOnWindowResize: boolean;
  selection: Selection;
  sparkline: { enabled: boolean };
  stacked: boolean;
  stackType: "normal" | "100%";
  toolbar: Toolbar;
  type: ApexChartType;
  zoom: Zoom;
}

export type ApexChartType =
  | "line"
  | "area"
  | "bar"
  | "radar"
  | "histogram"
  | "pie"
  | "donut"
  | "radialBar"
  | "scatter"
  | "bubble"
  | "heatmap"
  | "candlestick";

interface Animations {
  enabled: boolean;
  easing: "linear" | "easein" | "easeout" | "easeinout";
  speed: number;
  animateGradually: AnimateGradually;
  dynamicAnimation: DynamicAnimation;
}

interface DynamicAnimation {
  enabled: boolean;
  speed: number;
}

interface AnimateGradually {
  enabled: boolean;
  delay: number;
}

interface Brush {
  enabled: boolean;
  target: string;
  autoScaleYaxis: boolean;
}

interface DropShadow {
  enabled: boolean;
  enabledOnSeries: number[];
  top: number;
  left: number;
  blur: number;
  color: string | string[];
  opacity: number;
}

export interface ApexChartsEvents {
  animationEnd: (...args: any[]) => void;
  beforeMount: (...args: any[]) => void;
  mounted: (...args: any[]) => void;
  updated: (...args: any[]) => void;
  mouseMove: (...args: any[]) => void;
  mouseLeave: (...args: any[]) => void;
  click: (...args: any[]) => void;
  legendClick: (...args: any[]) => void;
  markerClick: (...args: any[]) => void;
  selection: (...args: any[]) => void;
  dataPointSelection: (...args: any[]) => void;
  dataPointMouseEnter: (...args: any[]) => void;
  dataPointMouseLeave: (...args: any[]) => void;
  beforeZoom: (...args: any[]) => void;
  beforeResetZoom: (...args: any[]) => void;
  zoomed: (...args: any[]) => void;
  scrolled: (...args: any[]) => void;
}

interface Locale {
  name: string;
  options: LocaleOptions;
}

interface LocaleOptions {
  months: string[];
  shortMonths: string[];
  days: string[];
  shortDays: string[];
  toolbar: LocaleToolbar;
}

interface LocaleToolbar {
  download: string;
  selection: string;
  selectionZoom: string;
  zoomIn: string;
  zoomOut: string;
  pan: string;
  reset: string;
}

interface Selection {
  enabled: boolean;
  type: string;
  fill: Fill;
  stroke: Stroke;
  xaxis: Xaxis;
  yaxis: Xaxis;
}

interface Xaxis {
  min: number;
  max: number;
}

interface Stroke {
  width: number;
  dashArray: number;
  color: string;
  opacity: number;
}

interface Fill {
  color: string;
  opacity: number;
}

interface Toolbar {
  show: boolean;
  offsetX: number;
  offsetY: number;
  tools: Tools;
  export: Export;
  autoSelected: "zoom" | "selection" | "pan";
}

interface Export {
  csv: Csv;
  svg: Svg;
  png: Svg;
}

interface Svg {
  filename: string;
}

interface Csv {
  filename: string;
  columnDelimiter: string;
  headerCategory: string;
  headerValue: string;
  dateFormatter: (...args: any[]) => string;
}

interface Tools {
  download: boolean | string;
  selection: boolean | string;
  zoom: boolean | string;
  zoomin: boolean | string;
  zoomout: boolean | string;
  pan: boolean | string;
  reset: number | string;
  customIcons: CustomIcon[];
}

interface CustomIcon {
  icon: string;
  index: number;
  title: string;
  class: string;
  click: (chart: any, options: Record<string, any>, event: MouseEvent) => void;
}

interface Zoom {
  enabled: boolean;
  type: string;
  autoScaleYaxis: boolean;
  zoomedArea: ZoomedArea;
}

interface ZoomedArea {
  fill: Fill;
  stroke: Stroke;
}

interface Stroke {
  color: string;
  opacity: number;
  width: number;
}

interface Fill {
  color: string;
  opacity: number;
}
