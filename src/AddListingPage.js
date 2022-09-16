import { Navigate } from "react-router-dom";
import { useContext } from "react";

import AddListingForm from "./AddListingForm";
import userContext from "./UserContext";

/** AddListingPage Component
 *
 * Props:
 * -none
 *
 * State:
 * -none
 */

function AddListingPage() {
  const { currentUser } = useContext(userContext);

  return (
    <div className="AddListingPage">
      {!currentUser.username && <Navigate to="/login" />}
      <AddListingForm />
    </div>
  );
}

export default AddListingPage;
