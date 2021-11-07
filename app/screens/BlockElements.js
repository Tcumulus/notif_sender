import React from 'react'
import { StyleSheet } from "react-native"
import { ScrollView } from 'react-native-gesture-handler'
import BlockElement from './BlockElement'
import readFirestore from '../firebase/readFirestore'
import deleteOutdatedFirestore from '../firebase/deleteOutdatedFirestore'

function BlockElements(props) {
  const blocks = readFirestore("blocks")
  deleteOutdatedFirestore()

  return (
    <ScrollView style={[styles.container]}>
        {blocks && blocks.map((block, id) => 
          <BlockElement
            key = {id}
            block = {block}
            navigateTo = {props.navigateTo}
          />
        )}
      </ScrollView>
  )
}

export default BlockElements;


const styles = StyleSheet.create({
  container: {
    width: "90%",
  },
})