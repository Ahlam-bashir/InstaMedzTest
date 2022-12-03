import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../constants/colors';
import {getSongs, postShifts} from '../store/actions';
import Button from './Button';

const AvailableList = props => {
  const dispatch = useDispatch();
  const [songData, setSongData] = useState([]);
  const [loading, setLoading] = useState(false);
  const songs = useSelector(state => state.data.data);
  useEffect(() => {
    console.log(songs, 'songa');
    dispatch(getSongs());
    if (songs) {
      setSongData(songs);

      const helsinkiCount = songs.filter(
        shift => shift.area === 'Helsinki',
      ).length;
      const TampereCount = songs.filter(
        shift => shift.area === 'Tampere',
      ).length;
      const TurkuCount = songs.filter(shift => shift.area === 'Turku').length;
      console.log('number of the found elements: ' + TurkuCount);
    }
    console.log('from  list', songs);
  }, [dispatch]);

  const bookShift = shift => {
    const overlappingShiftExists = !!songs
      .filter(s => s.booked)
      .find(s => s.startTime < shift.endTime && s.endTime > shift.startTime);

    if (overlappingShiftExists) {
      alert('Cannot book an overlapping shift');
      return;
    }
    setLoading(true);
    dispatch(postShifts(shift));
    setLoading(false);
  };

  const renderItem = ({item}) => {
    const overlappingShiftExists = !!songs
      .filter(s => s.booked)
      .find(s => s.startTime < item.endTime && s.endTime > item.startTime);

    return (
      <View>
        <View key={item.artistId} style={styles.listContainer}>
          <View style={{flexDirection: 'column', margin: 2}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.body}>
                {moment(item.startTime).format('h:mm a')}
              </Text>
              <Text style={styles.body}>
                {moment(item.endTime).format('h:mm a')}
              </Text>
              <Text style={styles.body}>
                {item.booked
                  ? 'Booked'
                  : overlappingShiftExists
                  ? 'Overlapping'
                  : ''}
              </Text>
            </View>
          </View>
          <View style={{alignItems: 'flex-end', flex: 1}}>
            <Button
              loader={loading}
              styles={
                item.booked || overlappingShiftExists
                  ? {borderColor: colors.GRAY}
                  : {borderColor: colors.GREEN}
              }
              title={'Book'}
              textStyle={
                item.booked || overlappingShiftExists
                  ? {color: colors.GRAY}
                  : {color: colors.GREEN}
              }
              onPress={() =>
                Date.now() > item.startTime
                  ? alert('shift has already been started')
                  : bookShift(item)
              }
            />
          </View>
        </View>
      </View>
    );
  };
  const divider = () => {
    return <View style={styles.divider} />;
  };

  return (
    <FlatList
      initialNumToRender={10}
      data={songs}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      ItemSeparatorComponent={divider}
    />
  );
};
export default AvailableList;
const styles = StyleSheet.create({
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#C8C8C8',
  },
  listContainer: {
    width: '100%',
    padding: 8,
    flexDirection: 'row',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    width: '80%',
    padding: 2,
    color: colors.DARK_BLUE,
  },
  body: {
    fontSize: 14,
    fontWeight: '500',
    padding: 6,
    color: colors.DARK_BLUE,
  },
});
