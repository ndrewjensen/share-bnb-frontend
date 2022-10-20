import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "reactstrap";

import ShareBnbApi from "./api";
import Alert from "./common/Alert";

/** AddListingForm Component
 *
 * Props:
 * -none
 *
 * State: formData, formErrors
 */

function AddListingForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    details: "",
  });
  const [formErrors, setFormErrors] = useState([]);
  const { register, handleSubmit } = useForm();

  /** Handle form submit:
   *
   * update multiFormData object and call API.
   */

  const onSubmit = async (data) => {
    let multiFormData = new FormData();
    multiFormData.append("name", formData.name);
    multiFormData.append("price", formData.price);
    multiFormData.append("details", formData.details);
    multiFormData.append("photo", data.file[0]);

    try {
      const resp = await ShareBnbApi.addListing(multiFormData);
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
        <h3 className="my-3">Add a New Listing!</h3>

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
                <input
                  name="file"
                  type="file"
                  {...register("file")}
                  className="form-control"
                />
              </div>
              <Button color="primary" className="w-100">Submit</Button>
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
