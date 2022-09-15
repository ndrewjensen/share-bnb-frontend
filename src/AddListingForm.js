import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

import Alert from './common/Alert';

/** AddListingForm Component
 *
 * Props:
 * -none
 *
 * State:
 * -formData
 */

 function AddListingForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState([]);

  /** Handle form submit:
   *
   * Calls login func prop and, if not successful, sets errors.
   */

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      
      //call API POST
      navigate("/"); //navigate to detail
    } catch (err) {
      setFormErrors(err);
    }
  }

  //name, price, details, photo
  /** Update form data field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(l => ({ ...l, [name]: value }));
  }

  return (
    <div className="AddListingForm">
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h3 className="mb-3">Add a New Listing!</h3>

        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="mb-3">
                <label className="form-label">Listing Name</label>
                <input
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Details</label>
                <input
                  name="details"
                  className="form-control"
                  value={formData.details}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Price</label>
                <input
                  name="price"
                  type="number"
                  className="form-control"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Photo</label>
                <input
                  name="photo"
                  type="file"
                  className="form-control"
                  value={formData.photo}
                  onChange={handleChange}
                  required
                />
              </div>

              {formErrors.length
                ? <Alert type="danger" messages={formErrors} />
                : null}

              <div className="d-grid">
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Submit
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddListingForm;