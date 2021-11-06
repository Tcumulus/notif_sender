import React from 'react';
import { StyleSheet } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import BlockElement from './BlockElement';
import readFirestore from '../firebase/readFirestore'

function BlockElements(props) {
  const blocks = readFirestore("blocks")

  return (
    <ScrollView style={[styles.container]}>
        {blocks && blocks.map(block => 
          <BlockElement
            key = {block.id}
            block = {block}
            navigateTo = {props.navigateTo}
          />
        )}
      </ScrollView>
  );
}

export default BlockElements;

const styles = StyleSheet.create({
  container: {
    width: "90%",
  },
})