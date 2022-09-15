import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import ShareBnbApi from './api';

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
  const { register, handleSubmit } = useForm();

  /** Handle form submit:
   *
   * Calls login func prop and, if not successful, sets errors.
   */

  // async function onSubmit(data) {
  //   // data.preventDefault();
  //   try {
  //     formData.append("file", data.file[0]);
  //     console.log("form Data ", formData)
  //     debugger
  //     const resp = await ShareBnbApi.addListing(formData);
  //     console.log("response is ", resp)
  //     navigate(`/listings/${resp.id}`); //navigate to detail
  //   } catch (err) {
  //     setFormErrors(err);
  //   }
  // }
  const onSubmit = async (data) => {
    let multiFormData = new FormData();
    multiFormData.append("name", formData.name);
    multiFormData.append("price", formData.price);
    multiFormData.append("details", formData.details);
    multiFormData.append("photo", data.file[0]);
    // multiFormData.photo = data.file[0];
    for (var key of multiFormData.entries()) {
      console.log(key[0] + ', ' + key[1]);
    }
    debugger
    const res = await ShareBnbApi.addListing(multiFormData);

    // alert(JSON.stringify(`${res.message}, status: ${res.status}`));
};
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
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
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
                  name="file"
                  type="file" {...register("file")}
                  // className="form-control"
                  // value={formData.photo}

                  required
                />
              </div>
              <input type="submit" />
              {formErrors.length
                ? <Alert type="danger" messages={formErrors} />
                : null}

              <div className="d-grid">
                {/* <button className="btn btn-primary" onClick={handleSubmit(onSubmit)}>
                  Submit
                </button> */}
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddListingForm;