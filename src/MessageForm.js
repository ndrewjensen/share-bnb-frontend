import React, { useState } from "react";
import ShareBnbApi from "./api";
import Alert from "./common/Alert";
/** MessageForm Component
 *
 * Props:
 * -listingId as integer
 *
 * State:
 * -formData
 */

function MessageForm({ listingId }) {
  const [message, setMessage] = useState("");
  const [formErrors, setFormErrors] = useState([]);

  /** Send message via API call. */
  async function handleSubmit(evt) {
    // take care of accidentally trying to search for just spaces
    evt.preventDefault();
    try {
      await ShareBnbApi.messageOwner(message.trim(), listingId);
      setFormErrors(["Message sent!"])
    } catch {
      setFormErrors(["Please fill out fields correctly."]);
    }
    setMessage('');
  }

  /** Update form fields */
  function handleChange(evt) {
    setMessage(evt.target.value);
  }

  return (
    <div className="MessageForm mb-4">
      <h3>Send a Message!</h3>
      <form onSubmit={handleSubmit}>
        <div className="row justify-content-center justify-content-lg-start gx-0">
          <div className="col-6 offset-3">
            <textarea
              className="form-control form-control-lg"
              name="message"
              placeholder="Send a message to the listing owner.."
              value={message}
              onChange={handleChange}
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-lg btn-primary">
              Submit
            </button>
          </div>
          {formErrors.length ? (
                <Alert type="danger" messages={formErrors} />
              ) : null}
        </div>
      </form>
    </div>
  );
}

export default MessageForm;
