import { Routes, Route } from "react-router-dom";

import ListingDetailPage from "./ListingDetailPage";
import ListingsPage from "./ListingsPage";
import LoginPage from "./LoginPage";
import AddListingPage from "./AddListingPage";

/** RoutesList Component
 *
 * Props:
 * -register(),login()
 *
 * State:
 * -none
 */

function RoutesList({ login, register }) {
  return (
    <div className="RoutesList">
      <Routes>
        <Route path="/listings/:listingId" element={<ListingDetailPage />} />
        <Route path="/" element={<ListingsPage />} />
        <Route path="/login" element={<LoginPage login={login} />} />
        <Route path="/listing/new" element={<AddListingPage />} />
      </Routes>
    </div>);
}

export default RoutesList;