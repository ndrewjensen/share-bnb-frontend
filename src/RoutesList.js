import { Routes, Route } from "react-router-dom";

import ListingDetailPage from "./ListingDetailPage";
import ListingsPage from "./ListingsPage";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import AddListingPage from "./AddListingPage";
import ConversationsPage from "./ConversationsPage";
import ConversationDetail from "./ConversationDetail";
import BookingsPage from "./BookingsPage";

/** RoutesList Component
 *
 * Props: signup(), login()
 * State: none
 */

function RoutesList({ login, signup }) {
  return (
    <div className="RoutesList">
      <Routes>
        <Route path="/add-listing" element={<AddListingPage />} />
        <Route path="/listings/:listingId" element={<ListingDetailPage />} />
        <Route path="/" element={<ListingsPage />} />
        <Route path="/login" element={<LoginPage login={login} />} />
        <Route path="/signup" element={<SignupPage signup={signup} />} />
        <Route path="/conversations" element={<ConversationsPage />} />
        <Route
          path="/conversations/:username"
          element={<ConversationDetail />}
        />
        <Route path="/bookings" element={<BookingsPage />} />
      </Routes>
    </div>
  );
}

export default RoutesList;
