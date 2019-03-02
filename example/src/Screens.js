import LineChartScreen from "./line-chart/LineChartScreen";
import PieChartScreen from "./pie-chart/PieChartScreen";

export const charts = ["LineChart", "PieChart"];

export const ScreenIds = charts.reduce(
  (screenIdMap, chart) => ({
    ...screenIdMap,
    [chart]: `navigation.${chart}Screen`
  }),
  {}
);

export const ScreenComponents = {
  LineChart: LineChartScreen,
  PieChart: PieChartScreen
};
