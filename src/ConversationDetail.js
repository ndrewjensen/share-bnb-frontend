import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";

import ShareBnbApi from "./api";
import LoadingSpinner from "./common/LoadingSpinner";
import MessageCard from "./MessageCard";
import MessageForm from "./MessageForm";

/** Conversation Component
 *
 * Props: None
 * State: messages, isLoading
 */

function ConversationDetail() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { username } = useParams();

  useEffect(() => {
    async function getConversation() {
      const messages = await ShareBnbApi.getConversation(username);
      setMessages(messages);
      setIsLoading(false);
    }
    getConversation();
  }, [username]);

  /** update messages list */

  function refresh(newMessage) {
    setMessages([...messages, newMessage]);
  }

  if (isLoading) return <LoadingSpinner />;

  return (
    <Card className="col-md-4 offset-md-4 my-2" color="light">
      <CardBody className="p-1">
        <CardTitle>Conversation with {username}</CardTitle>
        {messages.map((m) => (
          <MessageCard withUsername={username} message={m} key={m.id} />
        ))}
        <MessageForm username={username} refresh={refresh} />
      </CardBody>
    </Card>
  );
}

export default ConversationDetail;
