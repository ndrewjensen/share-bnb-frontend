import {useState, useEffect} from "react"
import Listing from "./Listing"
import ShareBnbApi from "./api"
import LoadingSpinner from "./common/LoadingSpinner"

/** Listings Component
 *
 * Props: None
 *
 * State:
 * -listings [{id, userId, photo, price, details},...]
 */

 function Listings () {
  const [listings, setListings] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(function loadListings () {
    async function getListings() {
      const resp = await ShareBnbApi.getListings();

      setListings(resp);
      setIsLoading(false)
    }

    getListings();
  }, [])

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="Listings">
      {listings.map(l => <Listing key={l.name} listing={l}/>)}
    </div>
  )
}

export default Listings