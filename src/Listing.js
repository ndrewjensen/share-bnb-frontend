import { Card, CardBody, CardTitle, CardText, NavLink, CardImg } from "reactstrap";

/** Listing Component
 *
 * Props: listing {id, userId, photo, price, details}
 * State: None
 */

function Listing({ listing }) {
  return (
    <Card
      className="col-md-3 m-3 d-flex justify-content-center"
      style={{width: "32em"}}
      >
      <NavLink href={`listings/${listing.id}`}>
        <CardBody className="p-0">
          <div className="Listing">
          <CardImg
            top
            src={listing.photo}
            alt={listing.name}
            style={{height: "24em", objectFit: "cover"}}
            />
            <CardTitle tag="h5" className="m-2">{listing.name}</CardTitle>
            <CardText tag="h6" className="m-2">Price: ${listing.price}/night</CardText>
          </div>
        </CardBody>
      </NavLink>
    </Card>
  );
}

export default Listing;
