import { Card, CardBody, CardTitle, CardText, NavLink } from "reactstrap";

/** Listing Component
 *
 * Props: listing {id, userId, photo, price, details}
 * State: None
 */

function Listing({ listing }) {
  return (
    <NavLink href={`listings/${listing.id}`}>
      <Card className="col-md-4 offset-md-4 my-2" color="light">
        <CardBody className="p-1">
          <div className="Listing">
            <CardTitle>{listing.name}</CardTitle>
            <CardText>Price: ${listing.price}/day</CardText>
          </div>
        </CardBody>
        <img src={listing.photo} alt={listing.name} className="m-2" />
      </Card>
    </NavLink>
  );
}

export default Listing;
