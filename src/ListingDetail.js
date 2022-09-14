import BookingForm from "./BookingForm";
import MessageForm from "./MessageForm";

/** ListingDetail Component
 *
 * Props:
 * -listingId as integer
 *
 * State:
 * -none
 */

 function ListingDetail({ listingId }) {
  return (
  <div className="ListingDetail">
    ListingDetail
    <BookingForm/>
    <MessageForm/>
    </div>);
}

export default ListingDetail;