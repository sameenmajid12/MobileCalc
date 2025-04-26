import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ButtonLayout from "./components/Buttons";
import { useState } from "react";
import Display from "./components/Display";

export default function App() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(null);
  const [operation, setOperation] = useState("");
  const displayNum = (num) => {
    if (operation.length === 0) {
      setNumber((prev) =>
        number !== 0 ? parseInt(prev.toString() + num) : parseInt(num)
      );
    } else {
      setNumber2((prev) => (!number2 ? parseInt(num) : parseInt(prev.toString() + num)));
    }
  };
  const clearNum = () => {
    if(number2){
      setNumber2(null);
    }
    else{
      setNumber(0);
    }
    setOperation('');
  };
  const addNum = () => {
    if(number>0){
      setOperation("add");
    }
  };
  const subtractNum=()=>{
    if(number>0){
      setOperation("subtract");
    }
  }
  const multNum=()=>{
    if(number>0){ 
      setOperation("multiply");
    }
  }
  const divNum=()=>{
    if(number>0){
      setOperation("division");
    }
  };
  const percentNum=()=>{
    setNumber(prev=>prev/100);
  }
  const resultNum = () => {
    if(!number2){
      return;
    }
    switch (operation) {
      case "add":
        setNumber(number + number2);
        break;
      case "subtract":
        setNumber(number-number2);
        break;
      case "multiply":
        setNumber(number*number2);
        break;
      case "division":
        setNumber(number/number2)
        break;
      default:
        break
    }
    setOperation('');
    setNumber2(null);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#121212" }}>
      <View style={styles.container}>
        <Display number={number} number2={number2} displayNum={displayNum}/>
        <ButtonLayout operation={operation} displayNum={displayNum} clearNum={clearNum} resultNum={resultNum} divNum={divNum} multNum={multNum} addNum={addNum} subtractNum={subtractNum} percentNum={percentNum}/>
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
