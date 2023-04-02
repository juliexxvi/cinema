import { RESERVE_SEAT, CANCEL_SEAT } from "../types/BookingTypes";

export const reserveSeat = (seat) => {
  return {
    type: RESERVE_SEAT,
    seat,
  };
};

export const cancelSeat = (seat) => {
  return {
    type: CANCEL_SEAT,
    seat,
  };
};
