import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ShareBnbApi from "./api";
import {Input, Button} from "reactstrap";

import Alert from "./common/Alert";

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
  const [formData, setFormData] = useState({name: '', price: '', details: ''});
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
    debugger
    multiFormData.append("photo", data.file[0]);

    for (let key of multiFormData.entries()) {
      console.log(key[0] + ", " + key[1]);
    }
    try {
      const resp = await ShareBnbApi.addListing(multiFormData);
      console.log(resp);
      navigate(`/listings/${resp.id}`); //navigate to detail
    } catch (err) {
      setFormErrors(["Please fill out fields correctly."]);
    }
  };

  /** Update form data field */

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((l) => ({ ...l, [name]: value }));
  }

  return (
    <div className="AddListingForm">
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h3 className="mb-3">Add a New Listing!</h3>

        <div className="card">
          <div className="card-body">
            <form
              onSubmit={handleSubmit(onSubmit)}
              encType="multipart/form-data"
            >
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
                <label className="form-label">Price per Day</label>
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
                <label className="form-label">Photo</label>
                <input name="file" type="file" {...register("file")}
                className="form-control" />
              </div>
              <Button>Submit</Button>
              {formErrors.length ? (
                <Alert type="danger" messages={formErrors} />
              ) : null}

              <div className="d-grid"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddListingForm;
