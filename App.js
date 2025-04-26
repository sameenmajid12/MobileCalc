import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ButtonLayout from "./components/Buttons";
import { useState } from "react";
import Display from "./components/Display";

export default function App() {
  const [number, setNumber] = useState("0");
  const [number2, setNumber2] = useState(null);
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(false);
  const formatNumber=(num)=>{
    if(num.length<=11)return num;
    if(num.includes('.')){
      let [allowedNum, allowedDec] = num.split('.');
      allowedDec = 11 - allowedNum.length - 1;
      return parseFloat(allowedNum).toFixed(Math.max(0,allowedDec)).toString();
    }
    return (parseFloat(num).toExponential(3)).toString();
  }
  const displayNum = (num) => {
    if(result && operation.length===0){
      setNumber(formatNumber(num));
      setResult(false);
    }
    else if (operation.length === 0) {
      setNumber((prev) => formatNumber(number !== '0' ? prev + num : num));
    } else {
      setNumber2((prev) => formatNumber(!number2 ? num : prev + num));
    }
  };
  const clearNum = () => {
    if (number2) {
      setNumber2(null);
    } else {
      setNumber(0);
    }
    setOperation("");
  };
  const addNum = () => {
    if (number > 0) {
      setOperation("add");
    }
  };
  const subtractNum = () => {
    if (number > 0) {
      setOperation("subtract");
    }
  };
  const multNum = () => {
    if (number > 0) {
      setOperation("multiply");
    }
  };
  const divNum = () => {
    if (number > 0) {
      setOperation("division");
    }
  };
  const percentNum = () => {
    setNumber((prev) => parseFloat(prev / 100));
  };
  const addDecimal = () => {
    if (number2 && !number2.includes(".")) {
      setNumber2((prev) => prev + ".");
    } else if (!number.includes(".")) {
      setNumber((prev) => prev + ".");
    }
  };
  const resultNum = () => {
    if (!number2) {
      return;
    }
    switch (operation) {
      case "add":
        setNumber(
          formatNumber((parseFloat(number) + parseFloat(number2)).toString())
        );
        break;
      case "subtract":
        setNumber(
          formatNumber((parseFloat(number) - parseFloat(number2)).toString())
        );
        break;
      case "multiply":
        setNumber(
          formatNumber((parseFloat(number) * parseFloat(number2)).toString())
        );
        break;
      case "division":
        if (parseFloat(number2) === 0) {
          setNumber("Error");
        } else {
          setNumber(formatNumber((parseFloat(number) / parseFloat(number2)).toString()));
        }
        break;
      default:
        break;
    }
    setOperation("");
    setNumber2(null);
    setResult(true);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#121212" }}>
      <View style={styles.container}>
        <Display number={number} number2={number2} displayNum={displayNum} />
        <ButtonLayout
          addDecimal={addDecimal}
          operation={operation}
          displayNum={displayNum}
          clearNum={clearNum}
          resultNum={resultNum}
          divNum={divNum}
          multNum={multNum}
          addNum={addNum}
          subtractNum={subtractNum}
          percentNum={percentNum}
        />
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
