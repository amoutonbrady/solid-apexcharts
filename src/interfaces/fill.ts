export interface ApexChartsFillOption {
  colors?: (string | ((options: Record<string, any>) => string))[];
  opacity: number;
  type: FillType | FillType[];
  gradient: Gradient;
  image: Image;
  pattern: Pattern;
}

interface Pattern {
  style: "verticalLines" | "horizontalLines" | "slantedLines" | "squates" | "circle";
  width: number;
  height: number;
  strokeWidth: number;
}

interface Image {
  src: string[];
  width: number;
  height: number;
}

interface Gradient {
  shade: "dark" | "light";
  type: "horizontal" | "vertical" | "diagonal1" | "diagonal2";
  shadeIntensity: 0 | 1;
  inverseColors: boolean;
  opacityFrom: number | number[];
  opacityTo: number | number[];
  stops: number[];
  colorStops: ColorStop[][];
}

type FillType = "solid" | "gradient" | "pattern" | "image";

interface ColorStop {
  offset: 0 | 1;
  color: string;
  opacity: number;
}
