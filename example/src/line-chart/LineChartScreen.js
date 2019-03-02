import React, { PureComponent } from "react";
import { Text, Button, View, ScrollView } from "react-native";
import Chart from "react-native-f2chart";
import data from "./data.json";
import { WebView } from "react-native-webview";
import { Container, Title } from "../components";
import { baseChart, dynamicChart } from "./scripts";

type Props = {};

class LineChartScreen extends PureComponent {
  state = {
    data
  };
  changeData = num => {
    this.setState({
      data: data.slice(num)
    });
  };

  onChange = tooltip => {
    console.log(tooltip);
  };

  render() {
    return (
      <ScrollView>
        <Container>
          <View>
            <Title title="基础折线图" />
            <View style={{ height: 350 }}>
              <Chart
                onChange={this.onChange}
                initScript={baseChart(data)}
                webView={WebView}
              />
            </View>
          </View>
          <View>
            <Title title="动态加载数据" />
            <View
              style={{
                flexDirection: "row",
                height: 50,
                alignItems: "center",
                justifyContent: "space-between",
                marginHorizontal: 20
              }}
            >
              <Button title="10条" onPress={() => this.changeData(40)} />
              <Button title="20条" onPress={() => this.changeData(30)} />
              <Button title="30条" onPress={() => this.changeData(20)} />
              <Button title="40条" onPress={() => this.changeData(10)} />
              <Button title="全部" onPress={() => this.changeData(0)} />
            </View>
            <View style={{ height: 350 }}>
              <Chart
                data={this.state.data}
                initScript={dynamicChart(data)}
                webView={WebView}
              />
            </View>
          </View>
        </Container>
      </ScrollView>
    );
  }
}

export default LineChartScreen;
