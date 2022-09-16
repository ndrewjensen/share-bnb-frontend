// import { NavLink } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, NavLink } from "reactstrap";


/** MessageCard Component
 *
 * Props:
 * -Message {id, userId, photo, price, details}
 *
 * State: None
 */

function MessageCard({ message }) {

  return (
    <Card className="text-start">
      <CardBody className="p-1">
        <CardText className="text-start">
          {message.text}
        </CardText>
        <CardText className="text-end"><small>{message.timestamp}</small></CardText>
      </CardBody>
    </Card>
  );
}

export default MessageCard;