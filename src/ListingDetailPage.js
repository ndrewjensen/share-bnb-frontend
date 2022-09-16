import { useParams } from "react-router-dom";

import ListingDetail from "./ListingDetail";

/** ListingDetailPage Component
 *
 * Props: none
 * Params: listingId
 * State: none
 */

function ListingDetailPage() {
  const params = useParams();
  return (
    <div className="ListingDetailPage">
      <ListingDetail listingId={params.listingId} />
    </div>
  );
}

export default ListingDetailPage;
