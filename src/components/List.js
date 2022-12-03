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
import {cancelShifts, getSongs} from '../store/actions';
import Button from './Button';

const List = props => {
  const dispatch = useDispatch();
  const [songData, setSongData] = useState([]);
  const songs = useSelector(state => state.data.data);
  useEffect(() => {
    console.log(songs, 'songa');
    dispatch(getSongs());
    if (songs) {
      setSongData(songs);
    }
    console.log('from  list', songs);
  }, [dispatch]);

  const data = [1, 2, 3, 4];

  const renderItem = ({item}) => {
    return (
      <View>
        {item.booked == true ? (
          <View key={item.artistId} style={styles.listContainer}>
            <View style={{flexDirection: 'column', margin: 8}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.body}>
                  {moment(item.startTime).format('h:mm a')}
                </Text>
                <Text style={styles.body}>
                  {moment(item.endTime).format('h:mm a')}
                </Text>
              </View>
              <Text style={styles.heading}>{item.area}</Text>
            </View>
            <View style={{alignItems: 'flex-end', flex: 1}}>
              <Button
                styles={Date.now() > item.startTime && {borderColor: 'grey'}}
                title="Cancel"
                textStyle={Date.now() > item.startTime && {color: 'grey'}}
                onPress={() =>
                  Date.now() > item.startTime
                    ? alert('shift has already been started')
                    : dispatch(cancelShifts(item))
                }
              />
            </View>
          </View>
        ) : (
          <></>
        )}
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
export default List;
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
    padding: 2,

    color: colors.DARK_BLUE,
  },
});
