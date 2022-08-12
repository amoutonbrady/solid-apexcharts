export interface ApexChartsStatesOption {
  normal: Normal;
  hover: Normal;
  active: Active;
}

interface Active {
  allowMultipleDataPointsSelection: boolean;
  filter: Filter;
}

interface Normal {
  filter: Filter;
}

interface Filter {
  type: "none" | "lighten" | "darken";
  value: number;
}
