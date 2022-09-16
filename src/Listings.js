import { useState, useEffect } from "react";
import Listing from "./Listing";
import ShareBnbApi from "./api";
import LoadingSpinner from "./common/LoadingSpinner";
import SearchForm from "./common/SearchForm";

/** Listings Component
 *
 * Props: None
 *
 * State:
 * -listings [{id, userId, photo, price, details},...]
 */

function Listings() {
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function loadListings() {
    async function getListings() {
      const resp = await ShareBnbApi.getListings();

      setListings(resp);
      setIsLoading(false);
    }

    getListings();
  }, []);

  /** Triggered by search form submit; reloads listings. */
  async function search(name) {
    let listings = await ShareBnbApi.getListings(name);
    setListings(listings);
  }

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <SearchForm search={search}/>
      <div className="Listings">
        {listings.map(l => <Listing key={l.id} listing={l} />)}
      </div>
    </>
  );
}

export default Listings;