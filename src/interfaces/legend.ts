export interface ApexChartsLegendsOption {
  show: boolean;
  showForSingleSeries: boolean;
  showForNullSeries: boolean;
  showForZeroSeries: boolean;
  position: "top" | "bottom" | "right" | "left";
  horizontalAlign: "left" | "center" | "right";
  floating: boolean;
  fontSize: string;
  fontFamily: string;
  fontWeight: number | string;
  formatter: (seriesName: string, options: Record<string, any>) => string[];
  inverseOrder: boolean;
  width: number;
  height: number;
  tooltipHoverFormatter: (seriesName: string, options: Record<string, any>) => string;
  customLegendItems: string[];
  offsetX: number;
  offsetY: number;
  labels: Labels;
  markers: Markers;
  itemMargin: ItemMargin;
  onItemClick: OnItemClick;
  onItemHover: OnItemHover;
}

interface OnItemHover {
  highlightDataSeries: boolean;
}

interface OnItemClick {
  toggleDataSeries: boolean;
}

interface ItemMargin {
  horizontal: number;
  vertical: number;
}

interface Markers {
  width: number;
  height: number;
  strokeWidth: number;
  strokeColor: string;
  fillColors: string[];
  radius: number;
  customHTML: () => string;
  onClick: (chart: any, seriesIndex: number, options: Record<string, any>) => void;
  offsetX: number;
  offsetY: number;
}

interface Labels {
  colors: string[];
  useSeriesColors: boolean;
}
