import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const addNum=()=>{
    
}
const subtractNum=()=>{

}
const multNum=()=>{

}
const percentNum=()=>{

}
const resultNum=()=>{
  
}
const NumberButton = ({ label, displayNum }) => {
  return (
    <TouchableOpacity style={label!=='0'?styles.numberButton:styles.zeroButton} onPress={() => displayNum(label)}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const AddButton = () => (
  <TouchableOpacity style={styles.operatorButton} onPress={() => addNum()}>
    <Text style={styles.buttonText}>+</Text>
  </TouchableOpacity>
);

const SubtractButton = () => (
  <TouchableOpacity style={styles.operatorButton} onPress={() => subtractNum()}>
    <Text style={styles.buttonText}>-</Text>
  </TouchableOpacity>
);

const MultButton = () => (
  <TouchableOpacity style={styles.operatorButton} onPress={() => multNum()}>
    <Text style={styles.buttonText}>×</Text>
  </TouchableOpacity>
);

const DivButton = () => (
  <TouchableOpacity style={styles.operatorButton} onPress={() => divideNum()}>
    <Text style={styles.buttonText}>÷</Text>
  </TouchableOpacity>
);

const ACButton = ({clearNum}) => (
  <TouchableOpacity style={styles.acButton} onPress={() => clearNum()}>
    <Text style={styles.functionText}>AC</Text>
  </TouchableOpacity>
);

const PercentageButton = () => (
  <TouchableOpacity style={styles.functionButton} onPress={() => percentNum()}>
    <Text style={styles.functionText}>%</Text>
  </TouchableOpacity>
);

const EqualButton = () => (
  <TouchableOpacity style={styles.operatorButton} onPress={() => resultNum()}>
    <Text style={styles.buttonText}>=</Text>
  </TouchableOpacity>
);

const DotButton = () => (
  <TouchableOpacity style={styles.numberButton} onPress={() => console.log('.')}>
    <Text style={styles.buttonText}>.</Text>
  </TouchableOpacity>
);

const ButtonLayout = ({displayNum, clearNum}) => {
  
  return (
    <View style={styles.mainContainer}>
      <View style={styles.buttonContainer}>
        <ACButton clearNum={clearNum}/>
        <PercentageButton />
        <DivButton />
      </View>
      <View style={styles.buttonContainer}>
        <NumberButton label='7' displayNum={displayNum} />
        <NumberButton label='8' displayNum={displayNum} />
        <NumberButton label='9' displayNum={displayNum} />
        <MultButton />
      </View>
      <View style={styles.buttonContainer}>
        <NumberButton label='4' displayNum={displayNum} />
        <NumberButton label='5' displayNum={displayNum} />
        <NumberButton label='6' displayNum={displayNum} />
        <SubtractButton />
      </View>
      <View style={styles.buttonContainer}>
        <NumberButton label='1' displayNum={displayNum} />
        <NumberButton label='2' displayNum={displayNum} />
        <NumberButton label='3' displayNum={displayNum} />
        <AddButton />
      </View>
      <View style={styles.buttonContainer}>
        <NumberButton label='0' displayNum={displayNum} />
        <DotButton />
        <EqualButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 0.8,
    justifyContent: 'space-evenly',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    columnGap:10
  },
  numberButton:{
    width:90,
    height:90,
    backgroundColor:'#505050',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:'50%'
  },
  buttonText:{
    color:'white',
    fontSize:24
  },
  operatorButton:{
    width:90,
    height:90,
    backgroundColor:'#ff9500',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:'50%'
  },
  zeroButton:{
    width:200,
    backgroundColor:'#505050',
    borderRadius:100,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    paddingLeft:40,
  },
  functionButton:{
    backgroundColor:'#b7b7b7',
    width:90,
    height:90,
    borderRadius:'50%',
    justifyContent:'center',
    alignItems:'center'
  },
  functionText:{
    color:'#121212',
    fontSize:24
  },
  acButton:{
    backgroundColor:'#b7b7b7',
    width:200,
    height:90,
    borderRadius:100,
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:40
  }
});

export default ButtonLayout ;
