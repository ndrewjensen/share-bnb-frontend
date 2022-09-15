import { useState, useEffect } from "react";
import BookingForm from "./BookingForm";
import MessageForm from "./MessageForm";
import ShareBnbApi from "./api";

/** ListingDetail Component
 *
 * Props:
 * -listingId as integer
 *
 * State:
 * -none
 */

function ListingDetail({ listingId }) {
  const [listing, setListing] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    async function getListingDetail() {
      const resp = await ShareBnbApi.getListing(listingId);
      setListing(resp)
      setIsLoading(false)
    }
    getListingDetail();
  },[]);

  return (
    <div className="ListingDetail">
      <h1>{listing.name}</h1>
      <h6>Price: ${listing.price}/night</h6>
      <p>{listing.details}</p>
      <img src={listing.photo} alt={listing.name} width="400"/>

      <BookingForm listingId={listingId}/>
      <MessageForm listingId={listingId}/>
    </div>
  );
}

export default ListingDetail;
