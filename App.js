import React, {useState} from 'react';
import {View, SafeAreaView, TouchableOpacity, Text} from 'react-native';
import MyShifts from './src/MyShifts';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from './src/store/configureStore';
import {colors} from './src/constants/colors';

const store = configureStore();
const App = () => {
  const [show, setShow] = useState(true);
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <MyShifts selected={show} />
        {/* // {show ? /> : <></>} */}
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            backgroundColor: 'white',
            bottom: 20,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flex: 1,
            width: '100%',
            borderTopWidth: 1,
            borderTopColor: colors.GRAY,
          }}>
          <TouchableOpacity
            onPress={() => setShow(true)}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 12,
              paddingVertical: 12,
            }}>
            <Text
              style={
                show
                  ? {color: colors.BLUE, fontWeight: '500'}
                  : {color: colors.GRAY, fontWeight: '500'}
              }>
              My Shifts
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setShow(!show)}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 12,
              paddingVertical: 12,
            }}>
            <Text
              style={
                !show
                  ? {color: colors.BLUE, fontWeight: '500'}
                  : {color: colors.GRAY, fontWeight: '500'}
              }>
              Available Shifts
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Provider>
  );
};
export default App;
