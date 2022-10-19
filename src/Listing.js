import { Card, CardBody, CardTitle, CardText, NavLink, CardImg } from "reactstrap";

/** Listing Component
 *
 * Props: listing {id, userId, photo, price, details}
 * State: None
 */

function Listing({ listing }) {
  return (
    <Card className="col-md-3 m-2 d-flex justify-content-center" color="light">
      <NavLink href={`listings/${listing.id}`}>
        <CardBody className="p-0">
          <div className="Listing">
            <CardTitle tag="h4" className="m-2">{listing.name}</CardTitle>
            <CardText tag="h5" className="m-2">Price: ${listing.price}/day</CardText>
          </div>
          <CardImg bottom src={listing.photo} alt={listing.name} />
        </CardBody>
      </NavLink>
    </Card>
  );
}

export default Listing;
