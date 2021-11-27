import React from 'react'
import { StyleSheet, Text, View } from "react-native"
import { ScrollView } from 'react-native-gesture-handler'
import BlockElement from './BlockElement'
import readFirestore from '../firebase/readFirestore'
import deleteOutdatedFirestore from '../firebase/deleteOutdatedFirestore'

function BlockElements(props) {
  const blocks = readFirestore("blocks")
  deleteOutdatedFirestore()

  return (
    <View style={styles.container}>
      <ScrollView>
          {blocks.length > 0 ? blocks.map((block, id) =>
            <BlockElement
              key = {id}
              block = {block}
              navigateTo = {props.navigateTo}
            />
          ):
            <Text style={styles.text}>No Announcements</Text>
          }
      </ScrollView>
    </View>
  )
}

export default BlockElements;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
  },

  text: {
    flex: 1,
    marginTop: 20,
    marginLeft: "33%",
    color: "#949494",
  },
})