import {CANCEL_SHIFTS, GETSHIFTS, POSTSHIFTS} from './actions';

const initialState = {
  data: [],
};
const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETSHIFTS:
      return {
        ...state,
        data: action.payload,
      };
    case POSTSHIFTS:
      console.log('reducer', action.payload);
      //  let shift = state.data.filter(s => (s.booked = true));
      // console.log(shift.booked, 'shift');

      // state.data.push(action.payload);
      return {
        ...state,
        data: state.data.map(shift =>
          shift.id === action.payload.id
            ? {
                ...shift,
                booked: true,
              }
            : shift,
        ),
      };
    case CANCEL_SHIFTS:
      console.log('reducer', action.payload);
      //  let shift = state.data.filter(s => (s.booked = true));
      // console.log(shift.booked, 'shift');

      // state.data.push(action.payload);
      return {
        ...state,
        data: state.data.filter(shift => shift.id !== action.payload.id),
      };
    default:
      return state;
  }
};
export default songReducer;
