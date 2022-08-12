export interface ApexChartsThemeOption {
  mode: "light" | "dark";
  palette: `palette${number}`;
  monochrome: Monochrome;
}

interface Monochrome {
  enabled: boolean;
  color: string;
  shadeTo: "light" | "dark";
  shadeIntensity: 0 | 1;
}
