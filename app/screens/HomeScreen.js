import React from 'react'
import {View, StyleSheet, Text, Pressable, StatusBar, Image} from "react-native"
import BlockElements from './BlockElements'

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Announcements</Text>
      <BlockElements navigateTo = {props.navigation}/>
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