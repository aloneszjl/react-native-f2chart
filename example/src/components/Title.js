import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";

class Title extends PureComponent<{ title: string }> {
  render() {
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    height: 45,
    paddingLeft: 20,
    justifyContent: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#dddddd"
  },
  text: {
    fontSize: 18
  }
});

export default Title;
