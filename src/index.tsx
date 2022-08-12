import ApexCharts from "apexcharts";
import { merge } from "merge-anything";
import type { PascalCase } from "type-fest";
import { on, createEffect, createSignal, onCleanup, ParentProps } from "solid-js";

import { TODO } from "./interfaces/shared";
import { Store, unwrap } from "solid-js/store";
import { ApexChartsOptions } from "./interfaces";
import { ApexChartsEvents, ApexChartType } from "./interfaces/chart";

const apexChartsEvents = [
  "animationEnd",
  "beforeMount",
  "mounted",
  "updated",
  "click",
  "mouseMove",
  "mouseLeave",
  "legendClick",
  "markerClick",
  "selection",
  "dataPointSelection",
  "dataPointMouseEnter",
  "dataPointMouseLeave",
  "beforeZoom",
  "beforeResetZoom",
  "zoomed",
  "scrolled",
  "brushScrolled",
] as const;

type EventKey = typeof apexChartsEvents[number];
type ChartEvents = Record<`on${PascalCase<EventKey>}`, (...args: TODO[]) => void>;

interface Props extends Partial<ChartEvents> {
  series: TODO[];
  width?: string;
  height?: string;
  type?: ApexChartType;
  options?: ApexChartsOptions;
}

export function useApexCharts(props: Store<Props>) {
  const [chart, setChart] = createSignal<ApexCharts>();
  const [target, setTarget] = createSignal<HTMLDivElement>();

  function initializeChart() {
    if (!target()) {
      return;
    }

    const events = apexChartsEvents.reduce<ApexChartsEvents>((events, event) => {
      const solidEvent = `on${event[0].toUpperCase()}${event.slice(1)}` as keyof ChartEvents;

      function callback(...args: TODO[]) {
        props[solidEvent]?.(...args);
      }

      return { ...events, [event]: callback };
    }, {} as ApexChartsEvents);

    const newOptions: ApexChartsOptions = {
      chart: {
        events,
        type: props.type || "line",
        width: props.width || "100%",
        height: props.height || "auto",
      },
      series: unwrap(props.series),
    };

    const config = merge(unwrap(props.options || {}), newOptions);
    const newChart = new ApexCharts(target(), config);

    setChart(newChart);
    newChart.render();
  }

  createEffect(() => {
    if (target()) {
      return initializeChart();
    }
  });

  createEffect(
    on(
      () => [...props.series].map((serie) => unwrap(serie)),
      (series) => {
        if (chart()) {
          return chart()!.updateSeries(series);
        }
      },
      { defer: true },
    ),
  );

  createEffect(
    on(
      () => unwrap(props.options),
      (options) => {
        if (chart()) {
          return chart()!.updateOptions(options);
        }
      },
      { defer: true },
    ),
  );

  createEffect(
    on(
      () => [props.type, props.height, props.width],
      () => {
        if (target()) {
          return initializeChart();
        }
      },
      { defer: true },
    ),
  );

  onCleanup(() => {
    if (chart()) {
      chart()!.destroy();
    }
  });

  return [setTarget, chart] as const;
}

export function ApexChart(props: ParentProps<Props>) {
  const [ref] = useApexCharts(props);
  return <div ref={ref} class="solid-chart"></div>;
}

export * from "./interfaces";
