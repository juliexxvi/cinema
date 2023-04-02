import React, { Component } from "react";
import { connect } from "react-redux";
import { cancelSeat } from "../redux/actions/BookingActions";

class BookingInfo extends Component {
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
            <tbody className="text-warning">
              {this.props.bookingList.map((bookingSeat, index) => {
                return (
                  <tr key={index}>
                    <th>{bookingSeat.seat}</th>
                    <th>{bookingSeat.price}</th>
                    <th>
                      <button
                        onClick={() => {
                          this.props.dispatch(cancelSeat(bookingSeat.seat));
                        }}
                      >
                        Cancel
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="text-warning">
                <td></td>
                <td>Total amount</td>
                <td>
                  {this.props.bookingList
                    .reduce((totalAmount, bookingSeat, index) => {
                      return (totalAmount += bookingSeat.price);
                    }, 0)
                    .toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bookingList: state.BookingReducer.bookingList,
  };
};

export default connect(mapStateToProps)(BookingInfo);
