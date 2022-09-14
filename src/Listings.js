import Listing from "./Listing"

/** Listings Component
 * 
 * Props: None
 * 
 * State:
 * -listings [{id, userId, photo, price, details},...]
 */

 function Listings () {
  return (
    <div className="Listings">
      <Listing />

    </div>
  )
}

export default Listings