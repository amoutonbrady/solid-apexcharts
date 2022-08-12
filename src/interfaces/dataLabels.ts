export interface ApexChartsDataLabelsOption {
  enabled: boolean;
  enabledOnSeries?: number[];
  formatter: (value: unknown, options: Record<string, any>) => unknown;
  textAnchor: "start" | "middle" | "end";
  distributed: boolean;
  offsetX: number;
  offsetY: number;
  style: Style;
  background: Background;
  dropShadow: DropShadow;
}

interface Background {
  enabled: boolean;
  foreColor: string;
  padding: number;
  borderRadius: number;
  borderWidth: number;
  borderColor: string;
  opacity: number;
  dropShadow: DropShadow;
}

interface DropShadow {
  enabled: boolean;
  top: number;
  left: number;
  blur: number;
  color: string;
  opacity: number;
}

interface Style {
  fontSize: string;
  fontFamily: string;
  fontWeight: string | number;
  colors?: (string | ((options: Record<string, any>) => string))[];
}
