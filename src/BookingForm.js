import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import { Form, FormGroup } from "reactstrap";
import "react-calendar/dist/Calendar.css";

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
  const navigate = useNavigate();
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
        navigate("/");
      } catch (err) {
        setFormErrors(err);
      }
    }
  }

  return (
    <div className="BookingForm">
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h3 className="mb-3">Book this!</h3>

        <div className="card">
          <div className="card-body">
            <Form onSubmit={handleSubmit}>
              <FormGroup inline>
                <label className="form-label">Check-In</label>
                <Calendar
                  name="checkIn"
                  value={checkIn}
                  onChange={setCheckIn}
                  required
                />
                <label className="form-label">Check-Out</label>
                <Calendar
                  name="checkOut"
                  value={checkOut}
                  onChange={setCheckOut}
                  required
                />

                {formErrors.length ? (
                  <Alert type="danger" messages={formErrors} />
                ) : null}

                <div className="d-grid">
                  <button className="btn btn-primary" onClick={handleSubmit}>
                    Submit
                  </button>
                </div>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
