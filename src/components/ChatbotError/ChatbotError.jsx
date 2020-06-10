import React from "react";

import ChatbotMessage from "../ChatBotMessage/ChatBotMessage";

import "./ChatbotError.css";

const ChatbotError = ({ message }) => {
  return (
    <div className="react-chatbot-kit-error">
      <h1 className="react-chatbot-kit-error-header">
        Ooops. Something is missing.
      </h1>
      <div className="react-chatbot-kit-error-container">
        <ChatbotMessage
          message={message}
          withAvatar
          loading={false}
          id={1}
          customComponents={{}}
          messages={[]}
        />
      </div>
      <a
        href="https://fredrikoseberg.github.io/react-chatbot-kit-docs/"
        rel="noopener norefferer"
        target="_blank"
        className="react-chatbot-kit-error-docs"
      >
        View the docs
      </a>
    </div>
  );
};

export default ChatbotError;