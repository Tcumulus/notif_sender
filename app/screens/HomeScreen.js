// cd Documents\Projects\React-Native\notif_sender

import React from 'react';
import {View, StyleSheet, Text, Pressable, StatusBar, Image} from "react-native";
import BlockElements from './BlockElements';

export default function HomeScreen(props) {
  const [state, onChangeState] = React.useState({
    blocks: []
  });
  const [lastTitleParam, onChangeLastTitleParam] = React.useState("")
  const [lastTimeParam, onChangeLastTimeParam] = React.useState("")

  let deleteTitleCheck = props.navigation.getParam("titleToDelete")
  if (deleteTitleCheck != undefined && deleteTitleCheck != lastTitleParam) {
    onChangeLastTitleParam(deleteTitleCheck)
    const blocks = state.blocks.filter(c => c.title !== deleteTitleCheck);
    onChangeState({blocks});
  }

  let addTitleCheck = props.navigation.getParam("title")
  if (addTitleCheck != undefined && addTitleCheck != lastTimeParam) {
    onChangeLastTimeParam(addTitleCheck)
    let newState = [...state.blocks]
    newState.push({title: addTitleCheck, time: props.navigation.getParam("time"), color: props.navigation.getParam("color")})
    onChangeState({blocks: newState})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Announcements</Text>
      <BlockElements
        blocks = {state.blocks} 
        navigateTo = {props.navigation}
      />
      <Pressable style={styles.plusButton} onPress={() => props.navigation.navigate("NewBlock")}>
         <Image style={styles.plusLogo} source={require("../assets/plus.png")}></Image>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dbdbdb",
    alignItems: "center",
  },

  title: {
    fontSize: 25,
    paddingTop: StatusBar.currentHeight + 20,
    marginBottom: 15,
  },

  plusLogo: {
    width: 60,
    height: 60,
  },

  plusButton: {
    justifyContent: "flex-end",
    marginBottom: 10,
  },
})