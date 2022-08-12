export interface ApexChartsNoDataOption {
  text: string;
  align: "left" | "center" | "right";
  verticalAlign: "top" | "middle" | "bottom";
  offsetX: number;
  offsetY: number;
  style: Style;
}

interface Style {
  color: string;
  fontSize: string;
  fontFamily: string;
}
