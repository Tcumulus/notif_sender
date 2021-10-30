import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import BlockElement from './BlockElement';

function BlockElements(props) {
  return (
    <ScrollView style={[styles.container]}>
      {props.blocks.map((block, id) => 
        <BlockElement
          key = {id}
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