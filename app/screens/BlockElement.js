import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";

function BlockElement(props) {
  const readTime = () => {
    let rtime = new Date(props.block.time)
    return rtime.getHours()+":"+(rtime.getMinutes() < 10?'0':'')+rtime.getMinutes()
  }

  return (
    <TouchableOpacity 
      style={[styles.container, {backgroundColor: props.block.color}]} 
      onPress={() => props.navigateTo.navigate("Detail", props.block)}
    >
      <View style={styles.textBlock}>
        <Text style={[styles.text, {fontSize: 25, fontWeight: "bold"}]}>{props.block.title}</Text>
        <Text style={[styles.text, {color: "white", opacity: 0.5}]}>{readTime()}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: 100,
    borderRadius: 10,
  },

  textBlock: {
    flex: 1,
    justifyContent: "center",
  },

  text: {
    fontSize: 20,
    color: "#dbdbdb",
    paddingLeft: 25,
    paddingBottom: 5,
  }
})

export default BlockElement;