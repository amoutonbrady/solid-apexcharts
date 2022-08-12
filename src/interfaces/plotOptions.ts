export interface ApexChartsPlotOptionsOption {
  area: { fillTo: "origin" };
  bar: Bar;
  bubble: {
    minBubbleRadius: number;
    maxBubbleRadius: number;
  };
  candlestick: Candlestick;
  boxPlot: BoxPlot;
  heatmap: Heatmap;
  treemap: Treemap;
  pie: Pie;
  polarArea: PolarArea;
  radar: Radar;
  radialBar: RadialBar;
}

interface Bar {
  horizontal: boolean;
  /**
   * @deprecated
   */
  startingShape: string;
  /**
   * @deprecated
   */
  endingShape: string;
  borderRadius: number;
  columnWidth: string;
  barHeight: string;
  distributed: boolean;
  rangeBarOverlap: boolean;
  rangeBarGroupRows: boolean;
  colors: Colors;
  dataLabels: DataLabels;
}

interface DataLabels {
  position: "top" | "bottom" | "center";
  maxItems: number;
  hideOverflowingLabels: boolean;
  orientation: "horizontal" | "vertical";
}

interface Colors {
  ranges: ColorsRange[];
  backgroundBarColors: string[];
  backgroundBarOpacity: number;
  backgroundBarRadius: number;
}

interface ColorsRange {
  from: number;
  to: number;
  color: string;
}

interface Candlestick {
  colors: CandlestickColors;
  wick: Wick;
}

interface Wick {
  useFillColor: boolean;
}

interface CandlestickColors {
  upward: string;
  downward: string;
}

interface BoxPlot {
  colors: BoxPlotColors;
}

interface BoxPlotColors {
  upper: string;
  lower: string;
}

interface Heatmap {
  radius: number;
  enableShades: boolean;
  shadeIntensity: number;
  reverseNegativeShade: boolean;
  distributed: boolean;
  useFillColorAsStroke: boolean;
  colorScale: ColorScale;
}

interface ColorScale {
  ranges: ColorScaleRange[];
  inverse: boolean;
  min: number;
  max: number;
}

interface ColorScaleRange {
  from: number;
  to: number;
  color: string;
  foreColor: string;
  name: string;
}

interface Treemap {
  enableShades: boolean;
  shadeIntensity: number;
  reverseNegativeShade: boolean;
  distributed: boolean;
  useFillColorAsStroke: boolean;
  colorScale: TreemapColorScale;
}

interface TreemapColorScale {
  ranges: TreemapColorScaleRange[];
  inverse: boolean;
  min: number;
  max: number;
}

interface TreemapColorScaleRange {
  from: number;
  to: number;
  color: string;
  foreColor: string;
  name: string;
}

interface Pie {
  /**
   * @deprecated
   */
  size: number;
  startAngle: number;
  endAngle: number;
  expandOnClick: boolean;
  offsetX: number;
  offsetY: number;
  customScale: number;
  dataLabels: PieDataLabels;
  donut: Donut;
}

interface Donut {
  size: string;
  background: string;
  labels: DonutLabels;
}

interface DonutLabels {
  show: boolean;
  name: DonutLabelName;
  value: DonutLabelName;
  total: DonutTotal;
}

interface DonutTotal {
  show: boolean;
  showAlways: boolean;
  label: string;
  fontSize: string;
  fontFamily: string;
  fontWeight: number;
  color: string;
  formatter: (...args: []) => void;
}

interface DonutLabelName {
  show: boolean;
  fontSize: string;
  fontFamily: string;
  fontWeight: number;
  color: string;
  offsetY: number;
  formatter: (...args: []) => void;
}

interface PieDataLabels {
  offset: number;
  minAngleToShowLabel: number;
}

interface PolarArea {
  rings: Rings;
  spokes: Spokes;
}

interface Spokes {
  strokeWidth: number;
  connectorColors: string;
}

interface Rings {
  strokeWidth: number;
  strokeColor: string;
}

interface Radar {
  size: number;
  offsetX: number;
  offsetY: number;
  polygons: RadarPolygons;
}

interface RadarPolygons {
  strokeColors: string;
  strokeWidth: number;
  connectorColors: string;
  fill: RadarPolygonFill;
}

interface RadarPolygonFill {
  colors: string;
}

interface RadialBar {
  inverseOrder: boolean;
  startAngle: number;
  endAngle: number;
  offsetX: number;
  offsetY: number;
  hollow: Hollow;
  track: Track;
  dataLabels: RadialBarDataLabels;
}

interface RadialBarDataLabels {
  show: boolean;
  name: RadialBarDataLabelsName;
  value: RadialBarDataLabelsValue;
  total: RadialBarDataLabelsTotal;
}

interface RadialBarDataLabelsTotal {
  show: boolean;
  label: string;
  color: string;
  fontSize: string;
  fontFamily: string;
  fontWeight: number | string;
  formatter: (...args: any[]) => void;
}

interface RadialBarDataLabelsValue {
  show: boolean;
  fontSize: string;
  fontFamily: string;
  fontWeight: number | string;
  color: string;
  offsetY: number;
  formatter: (...args: any[]) => void;
}

interface RadialBarDataLabelsName {
  show: boolean;
  fontSize: string;
  fontFamily: string;
  fontWeight: number | string;
  color: string;
  offsetY: number;
}

interface Track {
  show: boolean;
  startAngle: number;
  endAngle: number;
  background: string;
  strokeWidth: string;
  opacity: number;
  margin: number;
  dropShadow: DropShadow;
}

interface Hollow {
  margin: number;
  size: string;
  background: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageOffsetX: number;
  imageOffsetY: number;
  imageClipped: boolean;
  position: string;
  dropShadow: DropShadow;
}

interface DropShadow {
  enabled: boolean;
  top: number;
  left: number;
  blur: number;
  opacity: number;
}
