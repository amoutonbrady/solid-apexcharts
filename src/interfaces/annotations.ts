export interface ApexChartsAnnotationOption {
  position: "front" | "back";
  yaxis: Yaxi[];
  xaxis: Xaxi[];
  points: Point[];
  texts: Text[];
  images: Image[];
}

interface Text {
  x: number;
  y: number;
  text: string;
  textAnchor: "start" | "middle" | "end";
  fontSize: string;
  fontWeight: number | string;
  appendTo: string;
  backgroundColor: string;
  borderColor: string;
  borderRadius: number;
  borderWidth: number;
  paddingLeft: number;
  paddingRight: number;
  paddingTop: number;
  paddingBottom: number;
}

interface Point {
  x: number | string;
  y?: number;
  yAxisIndex: number;
  seriesIndex: number;
  mouseEnter: (event?: unknown) => void;
  mouseLeave: (event?: unknown) => void;
  marker: Marker;
  label: Label;
  image: Image;
}

interface Image {
  width: number;
  height: number;
  offsetX: number;
  offsetY: number;
}

interface Marker {
  size: number;
  fillColor: string;
  strokeColor: string;
  strokeWidth: number;
  shape: "circle" | "square";
  radius: number;
  OffsetX: number;
  OffsetY: number;
  cssClass: string;
}

interface Yaxi extends Axi {
  y: number;
  y2?: number;
}

interface Xaxi extends Axi {
  x: number;
  x2?: number;
}

interface Axi {
  strokeDashArray: number;
  borderColor: string;
  fillColor: string;
  opacity: number;
  offsetX: number;
  offsetY: number;
  width: string | number;
  yAxisIndex: number;
  label: Label;
}

interface Label {
  borderColor: string;
  borderWidth: number;
  borderRadius: number;
  textAnchor: "start" | "middle" | "end";
  position: "left" | "right";
  offsetX: number;
  offsetY: number;
  mouseEnter: (event?: unknown) => void;
  mouseLeave: (event?: unknown) => void;
  style: Style;
}

interface Style {
  background: string;
  color: string;
  fontSize: string;
  fontWeight: number | string;
  fontFamily: string;
  cssClass: string;
  padding: Padding;
}

interface Padding {
  left: number;
  right: number;
  top: number;
  bottom: number;
}
