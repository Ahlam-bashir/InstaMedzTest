import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import AvailableList from './components/availableList';
import Header from './components/Header';
import List from './components/List';
const Myshifts = props => {
  const {selected} = props;

  console.log(selected);
  return (
    <View style={styles.main}>
      <Header selected={selected} />
      {selected ? (
        <>
          <List />
        </>
      ) : (
        <AvailableList />
      )}
    </View>
  );
};
export default Myshifts;
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
