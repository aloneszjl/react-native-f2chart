import React from "react";
import { Navigation } from "react-native-navigation";
import LineChartScreen from "./line-chart/LineChartScreen";
import HomeScreen from "./HomeScreen";

Navigation.registerComponent(`navigation.HomeScreen`, () => HomeScreen);
Navigation.registerComponent(
  `navigation.LineChartScreen`,
  () => LineChartScreen
);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              options: {
                topBar: {
                  title: {
                    text: "Chart"
                  }
                }
              },
              name: "navigation.HomeScreen"
            }
          }
        ]
      }
    }
  });
});
