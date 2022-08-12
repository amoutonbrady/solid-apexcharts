export interface ApexChartsStrokeOption {
  show: boolean;
  curve: Curve | Curve[];
  lineCap: "butt" | "square" | "round";
  colors: string[];
  width: number | number[];
  dashArray: number | number[];
}

type Curve = "smooth" | "straight" | "stepline";
