export interface ApexChartsSeriesOption<T = [number, number][]> {
  name?: string;
  // data: number[] | [number, number][] | { x: number | string; y: number }[];
  data: T;
}
