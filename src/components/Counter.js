import { Component } from "react";
import { Button, Text, View, StyleSheet, TextInput } from "react-native";

export default class Counter extends Component {
  state = {
    count: 0,
    step: 1,
  };
  encrementar() {
            this.setState({
                count: this.state.count + this.state.step,
            });
     }
  alteraStep(text) {
    this.setState ({step: parseInt(text)});
  }
  render() {
    return (
      <View style={styles.contador}>
        <Text style={{color: 'white'}}>Likes {this.state.count} </Text>
        <Button style={styles.bostao} onPress={() => this.encrementar()} title="Likear" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contador: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 30,
  }
});