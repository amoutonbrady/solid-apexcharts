import type { PartialDeep } from "type-fest";

import { ApexChartsFillOption } from "./fill";
import type { ApexChartsGridOption } from "./grid";
import type { ApexChartsThemeOption } from "./theme";
import type { ApexChartsTitleOption } from "./title";
import type { ApexChartsXAxisOption } from "./xAxis";
import type { ApexChartsYAxisOption } from "./yAxis";
import type { ApexChartsChartOption } from "./chart";
import type { ApexChartsMarkerOption } from "./marker";
import type { ApexChartsNoDataOption } from "./noData";
import type { ApexChartsSeriesOption } from "./series";
import type { ApexChartsStatesOption } from "./states";
import type { ApexChartsStrokeOption } from "./stroke";
import type { ApexChartsLegendsOption } from "./legend";
import type { ApexChartsTooltipOption } from "./tooltip";
import type { ApexChartsAnnotationOption } from "./annotations";
import type { ApexChartsDataLabelsOption } from "./dataLabels";
import type { ApexChartsPlotOptionsOption } from "./plotOptions";
import type { ApexChartsResponsiveOption } from "./responsive";
import type { ApexChartsForecastDataPointsOption } from "./forecastDataPoints";

interface Options {
  annotations: ApexChartsAnnotationOption;
  colors: string[];
  dataLabels: ApexChartsDataLabelsOption;
  fill: ApexChartsFillOption;
  forecaseDataPoints: ApexChartsForecastDataPointsOption;
  grid: ApexChartsGridOption;
  labels: string[];
  legends: ApexChartsLegendsOption;
  makers: ApexChartsMarkerOption;
  noData: ApexChartsNoDataOption;
  responsive: ApexChartsResponsiveOption[];
  series: ApexChartsSeriesOption[];
  states: ApexChartsStatesOption;
  stroke: ApexChartsStrokeOption;
  subtitle: ApexChartsTitleOption;
  theme: ApexChartsThemeOption;
  title: ApexChartsTitleOption;
  tooltip: ApexChartsTooltipOption;
  xaxis: ApexChartsXAxisOption;
  yaxis: ApexChartsYAxisOption;
  chart: ApexChartsChartOption;
  plotOptions: ApexChartsPlotOptionsOption;
}

export type ApexChartsOptions = PartialDeep<Options>;
export { ApexChartsSeriesOption };
