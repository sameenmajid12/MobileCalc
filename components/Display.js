import { View, StyleSheet,TextInput } from "react-native";

const Display=({number, displayNum})=>{
  console.log(number)
  return(
  <View style={styles.displayContainer}>
    <TextInput editable={false} value={number.toString()} onChangeText={displayNum} style={styles.displayText}/>
  </View>)
}
const styles = StyleSheet.create({
  displayContainer:{
    flex:0.4,
    justifyContent:'flex-end',
    alignItems:'flex-end'
  },
  displayText:{
    fontSize:56,
    color:'white'
  }
})
export default Display;