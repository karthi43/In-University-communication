import React, { Component } from 'react';
import { SectionList, Text, StyleSheet } from 'react-native';

const sections = [
  {
    id: 0,
    title: 'Username starts with A',
    data: [
      {id: 0, text: 'Amit'},
      {id: 1, text: 'Anand'},
      {id: 2, text: 'Abhishek'},
    ]
  },
  {
    id: 1,
    title: 'Username starts with B',
    data: [
      {id: 0, text: 'Bikash'},
      {id: 1, text: 'Bingo'},
      {id: 2, text: 'Baby'},
    ]
  },
  {
    id: 2,
    title: 'Username starts with C',
    data: [
      {id: 0, text: 'Cat'},
      {id: 1, text: 'Cathy'},
      {id: 2, text: 'Charan'},
    ]
  },
  {
    id: 3,
    title: 'Username starts with D',
    data: [
      {id: 0, text: 'Deepak'},
      {id: 1, text: 'Deepti'},
      {id: 2, text: 'Dhananjay'},
    ]
  },
  {
    id: 4,
    title: 'Username starts with F',
    data: [
      {id: 0, text: 'Fatay'},
      {id: 1, text: 'Fanny'},
    ]
  },
]

const extractKey = ({id}) => id

export default class App extends Component {

  renderItem = ({item}) => {
    return (
      <Text style={styles.row}>
        {item.text}
      </Text>
    )
  }

  renderSectionHeader = ({section}) => {
    return (
      <Text style={styles.header}>
        {section.title}
      </Text>
    )
  }

  render() {
    return (
      <SectionList
        style={styles.container}
        sections={sections}
        renderItem={this.renderItem}
        renderSectionHeader={this.renderSectionHeader}
        keyExtractor={extractKey}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 15,
    backgroundColor: '#ECEFF1',
  },
  header: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: '#29B6F6',
    color: 'white',
    fontSize:20
  },
})