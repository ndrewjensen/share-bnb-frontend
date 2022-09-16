// import { NavLink } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, NavLink } from "reactstrap";
import { useContext } from "react";
import userContext from "./UserContext";


/** MessageCard Component
 *
 * Props:
 * -Message {id, userId, photo, price, details}
 *
 * State: None
 */

function MessageCard({ message, withUsername }) {
  const { currentUser } = useContext(userContext);

  return (
    <>
    <h6 className="text-start my-1">
    {currentUser.id === message.fromUserId && "You:"}
    {currentUser.id !== message.fromUserId && `${withUsername}:`}
    </h6>
    <Card className="text-start">
      <CardBody className="p-1">
        <CardText className="text-start">
          {message.text}
        </CardText>
        <CardText className="text-end"><small>{message.timestamp}</small></CardText>
      </CardBody>
    </Card>
    </>
  );
}

export default MessageCard;