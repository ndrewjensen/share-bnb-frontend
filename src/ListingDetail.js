import {useState, useEffect} from "react"
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
    async function getListingDetail(listingId) {
      // const resp = await ShareBnbApi.
    }
  })

  return (
  <div className="ListingDetail">
    ListingDetail
    <BookingForm/>
    <MessageForm/>
    </div>);
}

export default ListingDetail;