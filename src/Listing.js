// import { NavLink } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, NavLink } from "reactstrap";

/** Listing Component
 *
 * Props:
 * -listing {id, userId, photo, price, details}
 *
 * State: None
 */

function Listing({ listing }) {
  return (
    <Card className="col-md-4 offset-md-4 my-2" color="light">
      <CardBody className="p-1">
      <NavLink href={`listings/${listing.id}`}>
        <div className="Listing">
          <CardTitle>{listing.name}</CardTitle>
          <CardText>Price: ${listing.price}/day</CardText>
          <img src={listing.photo} alt={listing.name} width="200px" />
        </div>
      </NavLink>
      </CardBody>
    </Card>
  );
}

export default Listing;