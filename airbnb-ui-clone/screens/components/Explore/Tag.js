import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import StarRating from 'react-native-star-rating';
class Tag extends React.Component {
  render() {
    return (
        <View style={{ minHeight: 20, minWidth: 40, padding: 5, backgroundColor: 'white', borderColor: '#dddddd', borderWidth: 1, borderRadius: 2, marginRight: 5}}>
        <Text style={{ fontWeight: '700', fontSize: 10}}>{this.props.name}</Text>
      </View>
    );
  }
}

export default Tag;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
