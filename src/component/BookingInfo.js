import React, { Component } from "react";

export default class BookingInfo extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="bookedSeat"></button>
          <span className="text-light" style={{ fontSize: 30 }}>
            Booked seats
          </span>

          <br />
          <button className="bookingSeat"></button>
          <span className="text-light" style={{ fontSize: 30 }}>
            Booking seats
          </span>
          <br />
          <button className="seat" style={{ marginLeft: 0 }}></button>
          <span className="text-light" style={{ fontSize: 30 }}>
            Available seats
          </span>
        </div>
        <div classname="mt-5">
          <table className="table" border="2">
            <thead>
              <tr className="text-light" style={{ fontSize: 25 }}>
                <th>Seat Number</th>
                <th>Price</th>
                <th>Cancel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Seat</th>
                <th>Price</th>
                <th></th>
              </tr>
              <tr>
                <th>Seat</th>
                <th>Price</th>
                <th></th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
