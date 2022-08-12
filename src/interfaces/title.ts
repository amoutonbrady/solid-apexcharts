export interface ApexChartsTitleOption {
  text: string;
  align: "left" | "center" | "right";
  margin: number;
  offsetX: number;
  offsetY: number;
  floating: boolean;
  style: Style;
}

interface Style {
  fontSize: string;
  fontWeight: string;
  fontFamily: string;
  color: string;
}
