export interface ApexChartsTooltipOption {
  enabled: boolean;
  enabledOnSeries: any[];
  shared: boolean;
  followCursor: boolean;
  intersect: boolean;
  inverseOrder: boolean;
  custom: (options: Record<string, any>) => any | ((options: Record<string, any>) => any)[];
  fillSeriesColor: boolean;
  theme: "light" | "dark";
  style: Style;
  onDatasetHover: OnDatasetHover;
  x: X;
  y: Y;
  z: Z;
  marker: Marker;
  items: Items;
  fixed: Fixed;
}

interface Fixed {
  enabled: boolean;
  position: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
  offsetX: number;
  offsetY: number;
}

interface Items {
  display: string;
}

interface Marker {
  show: boolean;
}

interface Z {
  formatter: (value: unknown, options: Record<string, any>) => any;
  title: string;
}

interface Y {
  formatter: (value: unknown, options: Record<string, any>) => any;
  title: Title;
}

interface Title {
  formatter: (seriesName: string) => string;
}

interface X {
  show: boolean;
  format: string;
  formatter: (value: unknown, options: Record<string, any>) => any;
}

interface OnDatasetHover {
  highlightDataSeries: boolean;
}

interface Style {
  fontSize: string;
  fontFamily: undefined;
}
