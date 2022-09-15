/** Listing Component
 *
 * Props:
 * -listing {id, userId, photo, price, details}
 *
 * State: None
 */

function Listing ({listing}) {
  return (
    <div className="Listing">
      <h3>{listing.name}</h3>
      <h6>Price: ${listing.price}/night</h6>
      <p>{listing.description}</p>
      <img src={listing.photo} alt={listing.name}/>
    </div>
  )
}

export default Listing