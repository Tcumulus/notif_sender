import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native'
import writeFirestore from "../firebase/writeFirestore"

const NewBlockScreen = (props) => {
  const [title, onChangeTitle] = useState("")
  const [hours, onChangeHours] = useState(0)
  const [minutes, onChangeMinutes] = useState(0)
  const [time, setTime] = useState(null)
  const [msTime, setMsTime] = useState(0)
  const [color, onChangeColor] = useState("")
  const [opacity, onOpacityChange] = useState([0.4,0.4,0.4])
  const [press, setPress] = useState(null)

  const toHome = () => {
    useEffect(() => {
      setPress(null)
    }, [setPress])
    props.navigation.navigate("Home")
  }

  const onNowButtonPress = (dtime) => {
    let time = msTime == 0 ? new Date() : new Date(msTime)
    time = dtime == 0 ? new Date() : time
    let ms = time.getTime() + 60000*dtime
    time = new Date(ms)
    onChangeHours(time.getHours())
    onChangeMinutes(time.getMinutes())
    setMsTime(ms)
  }

  const changeOpacity = (id) => {
    let l = [...opacity]
    for (let i = 0; i < l.length; i++) {
      l[i] = 0.4;
    }
    l[id] = 1
    let color = id===0?"#6d9998":id===1?"#ff794d":"#df6de3"
    onChangeColor(color)
    onOpacityChange(l)
  }

  const onSubmit = () => {
    if (title == "" || hours == 0 && minutes == 0) {// || color == "") {
      alert("info not complete")
    }
    else if (hours < 0 || minutes < 0 || hours > 23 || minutes > 59) {
      alert("invalid time")
    }
    else {
      let today = new Date()
      let time = new Date(today.getFullYear(), today.getMonth(), today.getDate(), hours, minutes, 0, 0)
      setTime(time)
      setPress(true)
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.inputText, {marginTop: "7%"}]}
        onChangeText={onChangeTitle}
        value={title}
      />

      <View style={[styles.row, {marginTop: "5%"}]}>
        <TextInput
            style={[styles.inputText, {width: "20%", marginRight: "5%"}]}
            onChangeText={onChangeHours}
            value={hours.toString()}
          />
          <TextInput
            style={[styles.inputText, {width: "20%"}]}
            onChangeText={onChangeMinutes}
            value={minutes.toString()}
          />
      </View>

      <View style={styles.row}>
        <Pressable style={styles.buttonNowView} onPress={() => onNowButtonPress(0)}>
          <Text style={styles.buttonText}>now</Text>
        </Pressable>
        <Pressable style={styles.buttonNowView} onPress={() => onNowButtonPress(5)}>
          <Text style={styles.buttonText}>+5 min</Text>
        </Pressable>
        <Pressable style={styles.buttonNowView} onPress={() => onNowButtonPress(30)}>
          <Text style={styles.buttonText}>+30 min</Text>
        </Pressable>
      </View>

      <View style={[styles.row, {marginTop: "5%"}]}>
        <Pressable
          style={[styles.buttonNowView, {width: "15%", height: 55, backgroundColor: "#6d9998", opacity: opacity[0]}]}
          onPress={() => changeOpacity(0)}
        />
        <Pressable
          style={[styles.buttonNowView, {width: "15%", height: 55, backgroundColor: "#ff794d", opacity: opacity[1]}]}
          onPress={() => changeOpacity(1)}
        />
        <Pressable
          style={[styles.buttonNowView, {width: "15%", height: 55, backgroundColor: "#df6de3", opacity: opacity[2]}]}
          onPress={() => changeOpacity(2)}
        />
      </View>
      <Pressable style={[styles.doneButton]} onPress={onSubmit}>
        <Image style={styles.doneLogo} source={require("../assets/check-mark.png")}></Image>
      </Pressable>

      {press && <Write title={title} time={time} color={color} toHome={toHome}/>}
    </View>
  );
}
export default NewBlockScreen

const Write = ({ title, time, color, toHome }) => {
  writeFirestore(title, time, color)
  toHome()
  return null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#dbdbdb",
  },

  row: {
    flexDirection: "row",
  },

  buttonNowView: {
    height: 50,
    backgroundColor: "#a69a94",
    width: "30%",
    margin: "1.5%",
    marginTop: "5%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  inputText: {
    height: 55,
    width: "90%",
    marginTop: "5%",
    padding: 10,
    color: "#949494",
    borderRadius: 10,
    borderColor: "#949494",
    borderWidth: 2,
    fontSize: 20,
  },

  buttonText: {
    fontSize: 20,
    color: "#dbdbdb",
    fontWeight: "bold",
    marginLeft: 10,
  },

  doneLogo: {
    width: 60,
    height: 60,
  },

  doneButton: {
    flex: 1,
    marginBottom: "5%",
    justifyContent: "flex-end",
  },
})