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

 function RoutesList({ login,register }) {
  return (
  <div className="RoutesList">
    RoutesList
    <ListingDetailPage />
    <ListingsPage />
    <LoginPage />
    <AddListingPage />
    </div>);
}

export default RoutesList;