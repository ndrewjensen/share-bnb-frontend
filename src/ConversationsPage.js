import { Navigate } from "react-router-dom";
import { useContext } from "react";

import Conversations from "./Conversations";
import userContext from "./UserContext";

/** LoginPage Component
 *
 * Props: none
 * State: none
 */

function ConversationsPage() {
  const { currentUser } = useContext(userContext);
  return (
    <div className="ConversationsPage">
      {!currentUser.username && <Navigate to="/login" />}
      <h4>Conversations</h4>
      <Conversations />
    </div>
  );
}

export default ConversationsPage;
