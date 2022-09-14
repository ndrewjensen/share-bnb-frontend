import Listings from "./Listings"

/** ListingsPage Component
 * 
 * Props: None
 * 
 * State:
 * -listings [{id, userId, photo, price, details},...]
 */

 function ListingsPage () {
  return (
    <div className="ListingsPage">
      <Listings />

    </div>
  )
}

export default ListingsPage