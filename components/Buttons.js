import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

const NumberButton = ({ label, displayNum }) => {
  return (
    <TouchableOpacity
      style={label !== "0" ? styles.numberButton : styles.zeroButton}
      onPress={() => displayNum(label)}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const AddButton = ({ addNum, active }) => (
  <TouchableOpacity
    style={!active ? styles.operatorButton : styles.operatorButtonActive}
    onPress={() => addNum()}
  >
    <Text style={!active ? styles.buttonText : styles.buttonTextActive}>+</Text>
  </TouchableOpacity>
);

const SubtractButton = ({ subtractNum, active }) => (
  <TouchableOpacity
    style={!active ? styles.operatorButton : styles.operatorButtonActive}
    onPress={() => subtractNum()}
  >
    <Text style={!active ? styles.buttonText : styles.buttonTextActive}>-</Text>
  </TouchableOpacity>
);

const MultButton = ({ multNum, active }) => (
  <TouchableOpacity
    style={!active ? styles.operatorButton : styles.operatorButtonActive}
    onPress={() => multNum()}
  >
    <Text style={!active ? styles.buttonText : styles.buttonTextActive}>×</Text>
  </TouchableOpacity>
);

const DivButton = ({ divNum, active }) => {console.log(active);return(
  <TouchableOpacity
    style={!active ? styles.operatorButton : styles.operatorButtonActive}
    onPress={() => divNum()}
  >
    <Text style={!active ? styles.buttonText : styles.buttonTextActive}>÷</Text>
  </TouchableOpacity>
)};

const ACButton = ({ clearNum }) => (
  <TouchableOpacity style={styles.acButton} onPress={() => clearNum()}>
    <Text style={styles.functionText}>AC</Text>
  </TouchableOpacity>
);

const PercentageButton = ({ percentNum }) => (
  <TouchableOpacity style={styles.functionButton} onPress={() => percentNum()}>
    <Text style={styles.functionText}>%</Text>
  </TouchableOpacity>
);

const EqualButton = ({ resultNum }) => (
  <TouchableOpacity style={styles.operatorButton} onPress={() => resultNum()}>
    <Text style={styles.buttonText}>=</Text>
  </TouchableOpacity>
);

const DotButton = () => (
  <TouchableOpacity
    style={styles.numberButton}
    onPress={() => console.log(".")}
  >
    <Text style={styles.buttonText}>.</Text>
  </TouchableOpacity>
);

const ButtonLayout = ({
  displayNum,
  clearNum,
  addNum,
  divNum,
  multNum,
  subtractNum,
  operation,
  resultNum,
  percentNum,
}) => {

  return (
    <View style={styles.mainContainer}>
      <View style={styles.buttonContainer}>
        <ACButton clearNum={clearNum} />
        <PercentageButton percentNum={percentNum} />
        <DivButton active={operation === "division"} divNum={divNum} />
      </View>
      <View style={styles.buttonContainer}>
        <NumberButton label="7" displayNum={displayNum} />
        <NumberButton label="8" displayNum={displayNum} />
        <NumberButton label="9" displayNum={displayNum} />
        <MultButton active={operation === "multiply"} multNum={multNum} />
      </View>
      <View style={styles.buttonContainer}>
        <NumberButton label="4" displayNum={displayNum} />
        <NumberButton label="5" displayNum={displayNum} />
        <NumberButton label="6" displayNum={displayNum} />
        <SubtractButton
          active={operation === "subtract"}
          subtractNum={subtractNum}
        />
      </View>
      <View style={styles.buttonContainer}>
        <NumberButton label="1" displayNum={displayNum} />
        <NumberButton label="2" displayNum={displayNum} />
        <NumberButton label="3" displayNum={displayNum} />
        <AddButton active={operation === "add"} addNum={addNum} />
      </View>
      <View style={styles.buttonContainer}>
        <NumberButton label="0" displayNum={displayNum} />
        <DotButton />
        <EqualButton resultNum={resultNum} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 0.8,
    justifyContent: "space-evenly",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    columnGap: 10,
  },
  numberButton: {
    width: 90,
    height: 90,
    backgroundColor: "#505050",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
  },
  buttonText: {
    color: "white",
    fontSize: 24,
  },
  buttonTextActive: {
    color: "#ff9500",
    fontSize: 24,
  },
  operatorButton: {
    width: 90,
    height: 90,
    backgroundColor: "#ff9500",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
  },
  operatorButtonActive: {
    width: 90,
    height: 90,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
  },
  zeroButton: {
    width: 200,
    backgroundColor: "#505050",
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 40,
  },
  functionButton: {
    backgroundColor: "#b7b7b7",
    width: 90,
    height: 90,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  functionText: {
    color: "#121212",
    fontSize: 24,
  },
  acButton: {
    backgroundColor: "#b7b7b7",
    width: 200,
    height: 90,
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 40,
  },
});

export default ButtonLayout;
