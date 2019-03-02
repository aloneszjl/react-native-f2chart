import React, { PureComponent } from "react";
import { Text, Button, View, ScrollView } from "react-native";
import Chart from "react-native-f2chart";
import { WebView } from "react-native-webview";
import { Container, Title } from "../components";
import { basePie, labelPie } from "./scripts";

type Props = {};

class PieChartScreen extends PureComponent {
  render() {
    return (
      <ScrollView>
        <Container>
          <View>
            <Title title="基础饼图" />
            <View style={{ height: 250 }}>
              <Chart initScript={basePie} webView={WebView} />
            </View>
          </View>
          <View>
            <Title title="带文本饼图" />
            <View style={{ height: 350 }}>
              <Chart initScript={labelPie} webView={WebView} />
            </View>
          </View>
          <View style={{ height: 20 }} />
        </Container>
      </ScrollView>
    );
  }
}

export default PieChartScreen;
