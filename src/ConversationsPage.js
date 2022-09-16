import Conversations from "./Conversations";
import {Navigate} from "react-router-dom"
import { useContext } from "react";
import userContext from "./UserContext";

/** LoginPage Component
 *
 * Props:
 * -login()
 *
 * State:
 * -none
 */

 function ConversationsPage() {
  const { currentUser } = useContext(userContext);

  return (
  <div className="ConversationsPage">
    { !currentUser.username && <Navigate to="/login"/>}
    <h4>Conversations</h4>
    <Conversations />
    </div>);
}

export default ConversationsPage;