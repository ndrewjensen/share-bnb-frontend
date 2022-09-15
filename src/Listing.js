import {NavLink} from "react-router-dom"

/** Listing Component
 *
 * Props:
 * -listing {id, userId, photo, price, details}
 *
 * State: None
 */

function Listing ({listing}) {
  return (
    <NavLink to={`listings/${listing.id}`}>
    <div className="Listing">
      <h3>{listing.name}</h3>
      <h6>Price: ${listing.price}/night</h6>
      <p>{listing.description}</p>
      <img src={listing.photo} alt={listing.name} width="200px"/>
    </div>
    </NavLink>
  )
}

export default Listing