import React from "react";
import { Navigation } from "react-native-navigation";
import HomeScreen from "./HomeScreen";
import { charts, ScreenIds, ScreenComponents } from "./Screens";

Navigation.registerComponent(`navigation.HomeScreen`, () => HomeScreen);

charts.forEach(chart => {
  Navigation.registerComponent(ScreenIds[chart], () => ScreenComponents[chart]);
});

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
