export interface ApexChartsMarkerOption {
  size: number | number[];
  colors: string | string[];
  strokeColors: string | string[];
  strokeWidth: number | number[];
  strokeOpacity: number | number[];
  strokeDashArray: number | number[];
  fillOpacity: number | number[];
  discrete: Discrete[];
  shape: "circle" | "square";
  radius: number;
  offsetX: number;
  offsetY: number;
  onClick: (...args: any[]) => unknown;
  onDblClick: (...args: any[]) => unknown;
  showNullDataPoints: boolean;
  hover: Hover;
}

interface Hover {
  size: number;
  sizeOffset: number;
}

interface Discrete {
  seriesIndex: number;
  dataPointIndex: number;
  fillColor: string;
  strokeColor: string;
  size: number;
  shape: "circle" | "square" | "rect";
}
