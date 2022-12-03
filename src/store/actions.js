import {BASE_URL} from '../constants/constants';
export const GETSHIFTS = 'GET_SHIFTS';
export const POSTSHIFTS = 'POSTSHIFTS';
export const CANCEL_SHIFTS = 'CANCELSHIFTS';
export const getSongs = () => {
  return async dispatch => {
    fetch(BASE_URL + '/shifts', {
      method: 'GET',
    })
      .then(response => response.json())

      .then(async responseJson => {
        console.log(responseJson);
        dispatch({
          type: GETSHIFTS,
          payload: responseJson,
        });

        //Success
      })
      .catch(error => {
        //Error

        console.error(error);
      });
  };
};
export const postShifts = item => {
  console.log('postShoft', item);
  return async dispatch => {
    dispatch({
      type: POSTSHIFTS,
      payload: item,
    });
    // fetch(`${BASE_URL}/shifts/${item.id}/book`, {
    //   method: 'POST',
    // })
    //   .then(response => response.json())

    //   .then(async responseJson => {
    //     console.log(responseJson);

    //     //Success
    //   })
    //   .catch(error => {
    //     //Error

    //     console.error(error);
    //   });
  };
};
export const cancelShifts = item => {
  console.log('postShoft', item);
  return async dispatch => {
    dispatch({
      type: CANCEL_SHIFTS,
      payload: item,
    });
    // fetch(`${BASE_URL}/shifts/${item.id}/book`, {
    //   method: 'POST',
    // })
    //   .then(response => response.json())

    //   .then(async responseJson => {
    //     console.log(responseJson);

    //     //Success
    //   })
    //   .catch(error => {
    //     //Error

    //     console.error(error);
    //   });
  };
};
