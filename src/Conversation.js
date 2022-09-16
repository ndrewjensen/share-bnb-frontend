// import { NavLink } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, NavLink } from "reactstrap";


/** Conversation Component
 *
 * Props:
 * -Conversation {id, userId, photo, price, details}
 *
 * State: None
 */

function Conversation({ conversation }) {

  return (
    <Card className="col-md-4 offset-md-4 my-2" color="light">
      <CardBody className="p-1">
      <NavLink href={`conversations/${conversation.username}`}>
        <div className="Conversation">
          <CardTitle>{conversation.username}</CardTitle>
        </div>
      </NavLink>
      </CardBody>
    </Card>
  );
}

export default Conversation;