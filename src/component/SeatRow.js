import React, { Component } from "react";

export default class SeatRow extends Component {
  renderSeat = () => {
    return this.props.seatRow.seatList.map((seat, index) => {
      let cssBookedSeat = "";
      let disabled = false;
      if (seat.isBooked) {
        cssBookedSeat = "bookedSeat";
        disabled = true;
      }
      return (
        <button
          disabled={disabled}
          className={`seat ${cssBookedSeat}`}
          key={index}
          onClick={() => {
            alert(1);
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
