import React, { PureComponent, createRef } from "react";
import { StyleSheet, Platform } from "react-native";
import { WebView as RNWebView } from 'react-native-webview';

const changeData = data => `chart.changeData(${JSON.stringify(data)});`;

const source = Platform.select({
  ios: require("./f2chart.html"),
  android: { uri: "file:///android_asset/f2chart.html" }
});

type Props = {
  initScript: string,
  data?: Array<Object>,
  onChange?: Function,
  webView?: any
};

export default class Chart extends PureComponent<Props> {
  static defaultProps = {
    onChange: () => {},
    initScript: "",
    data: [],
    webView: RNWebView
  };

  constructor(props) {
    super(props);
    this.chart = createRef();
  }

  componentWillReceiveProps(nextProps) {
    const { data } = this.props;
    if (data !== nextProps.data) {
      this.update(nextProps.data);
    }
  }

  update = data => {
    this.chart.current.injectJavaScript(changeData(data));
  };

  repaint = script => this.chart.current.injectJavaScript(script);

  onMessage = event => {
    const {
      nativeEvent: { data }
    } = event;
    const { onChange } = this.props;
    const tooltip = JSON.parse(data);
    onChange(tooltip);
  };

  render() {
    const {
      webView: WebView,
      data,
      onChange,
      initScript,
      ...props
    } = this.props;
    return (
      <WebView
        javaScriptEnabled
        ref={this.chart}
        scrollEnabled={false}
        style={styles.webView}
        injectedJavaScript={initScript}
        source={source}
        originWhitelist={["*"]}
        onMessage={this.onMessage}
        {...props}
      />
    );
  }
}

const styles = StyleSheet.create({
  webView: {
    flex: 1,
    backgroundColor: "transparent"
  }
});
