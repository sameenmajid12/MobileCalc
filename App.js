import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ButtonLayout from "./components/Buttons";
import { useState } from "react";
import Display from "./components/Display";

export default function App() {
  const [number, setNumber] = useState(0);
  const displayNum = (num) => {
    setNumber((prev) =>
      number !== 0 ? parseInt(prev.toString() + num) : parseInt(num)
    );
  };
  const clearNum = () => {
    setNumber(0);
  };
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#121212'}}>
      <View style={styles.container}>
        <Display number={number} />
        <ButtonLayout displayNum={displayNum} clearNum={clearNum} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 50,
  },
});
