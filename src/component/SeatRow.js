import React, { Component } from "react";
import { connect } from "react-redux";
// import { reserveSeat } from "../redux/actions/BookingActions";
import { RESERVE_SEAT } from "../redux/types/BookingTypes";

class SeatRow extends Component {
  renderSeat = () => {
    return this.props.seatRow.seatList.map((seat, index) => {
      let cssBookedSeat = "";
      let disabled = false;
      if (seat.isBooked) {
        cssBookedSeat = "bookedSeat";
        disabled = true;
      }
      let cssBookingSeat = "";
      let bookingIndex = this.props.bookingList.findIndex(
        (bookingSeat) => bookingSeat.seat === seat.seat
      );
      if (bookingIndex !== -1) {
        cssBookingSeat = "bookingSeat";
      }
      return (
        <button
          disabled={disabled}
          className={`seat ${cssBookedSeat} ${cssBookingSeat}`}
          key={index}
          onClick={() => {
            this.props.reserveSeat(seat);
          }}
        >
          {seat.seat}
        </button>
      );
    });
  };

  renderRowNumber = () => {
    return this.props.seatRow.seatList.map((row, index) => {
      return (
        <button className="rowNumber" key={index}>
          {row.seat}
        </button>
      );
    });
  };

  renderSeatRow = () => {
    if (this.props.rowNumber === 0) {
      return (
        <div className="ml-4">
          {this.props.seatRow.seat} {this.renderRowNumber()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.seatRow.row} {this.renderSeat()}
        </div>
      );
    }
  };
  render() {
    return (
      <div className="text-light text-left ml-5 mt-3" style={{ fontSize: 30 }}>
        {this.renderSeatRow()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bookingList: state.BookingReducer.bookingList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reserveSeat: (seat) => {
      dispatch({
        type: RESERVE_SEAT,
        seat,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeatRow);
