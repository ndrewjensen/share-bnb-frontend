import { Card, CardBody, CardTitle, CardText, NavLink } from "reactstrap";

/** Booking Component
 *
 * Props:
 * -Booking {id, userId, photo, price, details}
 *
 * State: None
 */

function Booking({ booking }) {
  return (
    <Card className="col-md-4 offset-md-4 my-2" color="light">
      <CardBody className="p-1">
        <NavLink href={`listings/${booking.listingId}`}>
          <div className="Booking">
            <CardTitle>{booking.name}</CardTitle>
            <CardText>Check In: {booking.checkIn.slice(0, 17)}</CardText>
            <CardText>Check Out: {booking.checkOut.slice(0, 17)}</CardText>
          </div>
        </NavLink>
      </CardBody>
    </Card>
  );
}

export default Booking;
