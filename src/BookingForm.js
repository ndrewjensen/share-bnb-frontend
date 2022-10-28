import { useState } from "react";
import Calendar from "react-calendar";
import { Form, FormGroup } from "reactstrap";
import "./Calendar.css";

import ShareBnbApi from "./api";
import Alert from "./common/Alert";

/** BookingForm Component
 *
 * Props: listingId
 *
 * State:
 * -checkIn, checkOut, formErrors
 */

function BookingForm({ listingId }) {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [formErrors, setFormErrors] = useState([]);

  /** Handle form submit:
   *
   * Calls api to post booking.
   */

  async function handleSubmit(evt) {
    evt.preventDefault();
    if (checkIn > checkOut || checkIn < Date.now()) {
      setFormErrors(["Check your dates"]);
    } else {
      try {
        await ShareBnbApi.book({ listingId, checkIn, checkOut });
        setFormErrors(["Booking successful!"]);
      } catch (err) {
        setFormErrors(err);
      }
    }
  }

  return (
    <div className="BookingForm">
      <div className="container col-md-6 offset-md-3 col-lg-10 offset-lg-1">
        <h3 className="mb-3">Book this!</h3>

        <Form onSubmit={handleSubmit}>
          <FormGroup className="d-flex flex-column justify-content-center">
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <div className="card col-lg-6 col-md-12">
                <label className="form-label">Check-In</label>
                <div className="card-body">
                  <Calendar
                    name="checkIn"
                    value={checkIn}
                    onChange={setCheckIn}
                    required
                  />
                </div>
              </div>
              <div className="card col-lg-6 col-md-12">
                <label className="form-label">Check-Out</label>
                <div className="card-body ">
                  <Calendar
                    name="checkOut"
                    value={checkOut}
                    onChange={setCheckOut}
                    required
                  />
                </div>
              </div>
            </div>
            {formErrors.length ? (
              <Alert
                type={
                  formErrors[0] === "Booking successful!" ? "success" : "danger"
                }
                messages={formErrors}
              />
            ) : null}
            <div className="">
              <button
                className="btn btn-primary col-3 my-2"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}

export default BookingForm;
