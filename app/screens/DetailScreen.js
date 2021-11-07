import React, { useState, useEffect } from 'react'
import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import deleteFirestore from '../firebase/deleteFirestore'

export default function App(props) {
  const [press, setPress] = useState(null)
  const block = props.navigation.getParam("block")
  const id = props.navigation.getParam("id")

  const timeTo = () => {
    let rtime = new Date(block.time)
    let dtime = rtime - new Date()
    let atime = Math.abs(dtime)

    let ms = atime % 1000;
    atime = (atime - ms) / 1000;
    let secs = atime % 60;
    atime = (atime - secs) / 60;
    let mins = atime % 60;
    let hrs = (atime - mins) / 60;
    return (dtime >= 0?"+":"-")+hrs+":"+(mins < 10? "0":"")+mins+":"+(secs < 10? "0":"")+secs
  }

  const readTime = () => {
    let rtime = new Date( block.time )
    return rtime.getHours()+":"+(rtime.getMinutes() < 10?'0':'')+rtime.getMinutes()
  }
  
  const toHome = () => {
    useEffect(() => {
      setPress(null)
    }, [setPress])
    props.navigation.navigate("Home")
  }

  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, { backgroundColor: block.color } ]}>
        <Text style={styles.titleText}>{ block.title} </Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={[styles.timeText, { fontWeight: "bold", fontSize: 25 }]}>{ timeTo() }</Text>
        <Text style={styles.timeText}>{readTime()}</Text> 
      </View>
      <Pressable
        onPress={() => setPress(true)}
        style={styles.trashButton}
      >
        <Image style={styles.trashLogo} source={require("../assets/trash.png")}></Image>
      </Pressable>

      {press && <Delete id={id} toHome={toHome} />}
    </View>
  )
}

const Delete = ({ id, toHome }) => {
  deleteFirestore("blocks", id)
  toHome()
  return null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dbdbdb",
    alignItems: "center",
  },

  titleContainer: {
    width: "90%",
    height: "10%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "5%",
  },

  timeContainer: {
    width: "90%",
    height: "13%",
    borderRadius: 10,
    backgroundColor: "#a69a94",
    alignItems: "center",
    justifyContent: "center",
  },

  titleText: {
    fontSize: 30,
    color: "#dbdbdb",
    fontWeight: "bold",
  },

  timeText: {
    fontSize: 20,
    color: "#dbdbdb",
  },

  trashLogo: {
    width: 60,
    height: 60,
  },

  trashButton: {
    flex: 1,
    marginBottom: "5%",
    justifyContent: "flex-end",
  },
})