import { useState, useEffect } from "react";

import ShareBnbApi from "./api";
import LoadingSpinner from "./common/LoadingSpinner";
import Conversation from "./Conversation";

/** Conversations Component
 *
 * Props: none
 * State: conversations, isLoading
 */

function Conversations() {
  const [conversations, setConversations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getConversations() {
      const conversations = await ShareBnbApi.getConversations();
      setConversations(conversations);
      setIsLoading(false);
    }

    getConversations();
  }, []);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="Conversations">
      {conversations.length === 0 && (
        <p>You haven't started any conversations.</p>
      )}
      {conversations.map((c) => (
        <Conversation conversation={c} key={c.id} />
      ))}
    </div>
  );
}

export default Conversations;
