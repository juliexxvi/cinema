import { RESERVE_SEAT, CANCEL_SEAT } from "../types/BookingTypes";

const stateDefault = {
  bookingList: [],
};

const BookingReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case RESERVE_SEAT:
      {
        let updatedBookingList = [...state.bookingList];
        console.log(updatedBookingList);
        let index = updatedBookingList.findIndex(
          (bookingSeat) => bookingSeat.seat === action.seat.seat
        );
        console.log(index);
        if (index !== -1) {
          updatedBookingList.splice(index, 1);
        } else {
          updatedBookingList.push(action.seat);
        }
        state.bookingList = updatedBookingList;
        return { ...state };
      }
      break;
    case CANCEL_SEAT:
      {
        let updatedBookingList = [...state.bookingList];
        let index = updatedBookingList.findIndex(
          (bookingSeat) => (bookingSeat.seat = action.seat)
        );
        if (index !== -1) {
          updatedBookingList.splice(index, 1);
        }
        state.bookingList = updatedBookingList;
        return { ...state };
      }
      break;
    default:
      return { ...state };
  }
};

export default BookingReducer;
