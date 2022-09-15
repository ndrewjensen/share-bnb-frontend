import {useParams} from "react-router-dom"
import ListingDetail from "./ListingDetail";

/** ListingDetailPage Component
 *
 * Props:
 * -none
 *
 * Params: listingId
 *
 * State:
 * -formData
 */

 function ListingDetailPage() {
  const {listingId} = useParams();

  return (
  <div className="ListingDetailPage">
    <ListingDetail listingId={listingId} />
    </div>);
}

export default ListingDetailPage;