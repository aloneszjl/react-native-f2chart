import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";

class Container extends PureComponent {
  render() {
    return <View style={styles.container} {...this.props} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});

export default Container;
