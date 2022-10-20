import { useState, useEffect } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

import BookingForm from "./BookingForm";
import MessageForm from "./MessageForm";
import ShareBnbApi from "./api";
import userContext from "./UserContext";
import LoadingSpinner from "./common/LoadingSpinner";

/** ListingDetail Component
 *
 * Props: listingId as integer
 * State: listing, isLoading
 */

function ListingDetail({ listingId }) {
  const [listing, setListing] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { currentUser } = useContext(userContext);

  useEffect(() => {
    async function getListingDetail() {
      const resp = await ShareBnbApi.getListing(listingId);
      setListing(resp);
      setIsLoading(false);
    }
    getListingDetail();
  }, [listingId]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="ListingDetail my-4">
      <img src={listing.photo} alt={listing.name} className="col-4 rounded my-4" />
      <h3>{listing.name}</h3>
      <h5>Price: ${listing.price}/night</h5>
      <p>{listing.details}</p>
      {!currentUser.username && (
        <div>
          <NavLink to="/login" className="btn btn-lg btn-primary my-1">
            Log In to Book
          </NavLink>
        </div>
      )}
      {currentUser.username && currentUser.id !== listing.userId && (
        <>
          <div className="col-4 offset-4 my-4">
            <MessageForm listingId={listingId} />
          </div>
          <BookingForm listingId={listingId} />
        </>
      )}
    </div>
  );
}

export default ListingDetail;
