import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {colors} from '../constants/colors';

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    backgroundColor: colors.WHITE,
    borderRadius: 20,
    alignItems: 'center',
    //    width:'90%',

    marginTop: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    paddingVertical: 2,
    paddingHorizontal: 21,
  },
  btnText: {
    color: colors.PRIMARY,
    fontSize: 18,
    fontWeight: '700',
    // paddingVertical: 14,
  },
  loaderBtn: {
    justifyContent: 'center',
    backgroundColor: colors.PRIMARY,
    borderRadius: 14.56,
    alignItems: 'center',
    //    width:'90%',
    marginHorizontal: 14,
    marginTop: 30,
    flexDirection: 'row',
    // paddingVertical: 14,
  },
});

const Button = ({label, style, ...props}) => {
  const [onEdit, setOnEdit] = useState(false);
  const [color, setColor] = useState(false);
  const {loader, setLoader} = props;
  return (
    <TouchableOpacity
      disabled={props.disabled ? true : false}
      style={[
        loader ? [styles.loaderBtn, , props.styles] : styles.btn,
        props.styles,
      ]}
      onPress={() => props.onPress()}>
      {props.icon ? props.icon : null}
      {loader ? (
        <ActivityIndicator size="small" color="#FFFFFF" />
      ) : (
        <Text style={[styles.btnText, , props.textStyle]}>{props.title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
