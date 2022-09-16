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

function MessageForm({ listingId, username, refresh }) {
  const [message, setMessage] = useState("");
  const [formErrors, setFormErrors] = useState([]);

  /** Send message via API call. */
  async function handleSubmit(evt) {
    // take care of accidentally trying to search for just spaces
    evt.preventDefault();
    try {
      if (listingId) {
        await ShareBnbApi.messageOwner(message.trim(), listingId);
        setFormErrors(["Message sent!"]);
      } else {
        refresh(await ShareBnbApi.replyToConversation(username, message.trim()));
      }
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
      <h5>Send Message</h5>
      <form onSubmit={handleSubmit}>
        <div className="row justify-content-center justify-content-lg-start gx-0">
          <div className="">
            <textarea
              className="form-control form-control-lg"
              name="message"
              placeholder="Type your message here.."
              value={message}
              onChange={handleChange}
            />
          </div>
          {formErrors.length ? (
            <Alert type="danger" messages={formErrors} />
          ) : null}
        </div>
          <div className="text-end">
            <button type="submit" className="btn btn-lg btn-primary">
              Submit
            </button>
          </div>
      </form>
    </div>
  );
}

export default MessageForm;
