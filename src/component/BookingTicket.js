import React, { Component } from "react";
import "../static/BookingTicket.css";
import data from "../data/data.json";
import SeatRow from "./SeatRow";
import BookingInfo from "./BookingInfo";

export default class BookingTicket extends Component {
  renderBookingSeats = () => {
    return data.map((seatRow, index) => {
      return (
        <div key={index}>
          <SeatRow seatRow={seatRow} rowNumber={index} />
        </div>
      );
    });
  };

  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('bgmovie.jpg')",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            heigh: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className="display-4 text-warning">
                  BOOK YOUR CINEMA SEATS
                </div>
                <div className="mt-3 text-light" style={{ fontSize: 25 }}>
                  Screen
                </div>
                <div
                  className="mt-2"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div className="screen"></div>
                </div>
                {this.renderBookingSeats()}
              </div>

              <div className="col-4">
                <div style={{ fontSize: "35px" }} className="text-light mt-2">
                  LIST OF AVAILABLE SEATS
                </div>
                <BookingInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
