import React, { PureComponent } from "react";
import { Navigation } from "react-native-navigation";
import Container from "./components/Container";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { Title } from "./components";

const charts = ["LineChart"];

class HomeScreen extends PureComponent {
  render() {
    return (
      <ScrollView>
        <Container>
          {charts.map(chart => (
            <TouchableOpacity
              onPress={() => {
                Navigation.push(this.props.componentId, {
                  component: {
                    name: `navigation.${chart}Screen`,
                    options: {
                      topBar: {
                        title: {
                          text: chart
                        }
                      }
                    }
                  }
                });
              }}
              key={chart}
            >
              <Title title={chart} />
            </TouchableOpacity>
          ))}
        </Container>
      </ScrollView>
    );
  }
}

export default HomeScreen;
