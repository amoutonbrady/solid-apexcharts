export interface ApexChartsGridOption {
  show: boolean;
  borderColor: string;
  strokeDashArray: number;
  position: "front" | "back";
  xaxis: Axis;
  yaxis: Axis;
  row: Row;
  column: Row;
  padding: Padding;
}

interface Padding {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

interface Row {
  colors?: string[];
  opacity: 0 | 1;
}

interface Axis {
  lines: Lines;
}

interface Lines {
  show: boolean;
}
