import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../constants/colors';
import {getSongs} from '../store/actions';

const Header = props => {
  const {selected} = props;
  const dispatch = useDispatch();

  const songs = useSelector(state => state.data.data);
  let helsinkiCount = songs.filter(shift => shift.area === 'Helsinki').length;
  let TampereCount = songs.filter(shift => shift.area === 'Tampere').length;
  let TurkuCount = songs.filter(shift => shift.area === 'Turku').length;
  //   useEffect(() => {
  //     console.log(songs, 'songa');
  //     dispatch(getSongs());
  //     if (songs) {
  //       helsinkiCount = songs.filter(shift => shift.area === 'Helsinki').length;
  //       TampereCount = songs.filter(shift => shift.area === 'Tampere').length;
  //       TurkuCount = songs.filter(shift => shift.area === 'Turku').length;
  //       console.log('number of the found elements: ' + TurkuCount);
  //     }
  //     console.log('from  list', helsinkiCount, TampereCount, 'jjjk');
  //   }, [dispatch]);
  return (
    <View style={styles.header}>
      {selected ? (
        <Text style={styles.headerText}>My Shifts</Text>
      ) : (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
            marginTop: 10,
          }}>
          <Text style={styles.headerText}>Helsinki ({helsinkiCount})</Text>
          <Text style={styles.headerText}>Tampere ({TampereCount})</Text>
          <Text style={styles.headerText}>Turku({TurkuCount})</Text>
        </View>
      )}
    </View>
  );
};
export default Header;
const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    marginTop: 16,
    fontWeight: '600',
  },
});
