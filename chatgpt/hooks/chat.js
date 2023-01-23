import { useRef, useState } from "react";
import useOpenAi from "./openai";

export default function useChat() {
  const inputRef = useRef();
  const [message, setMessage] = useState({id: crypto.randomUUID(), title: '', contents: []});
  const [histories, setHistory] = useState([]);
  const [isSubmitting, setSubmit] = useState(false);
  const { generateText, generateTitle } = useOpenAi();

  function submitMessage() {
    let input = inputRef.current.value
    if (input === "") return;
    inputRef.current.value = "";

    let messageContent = { id: crypto.randomUUID(), text: input, source: "user" };
    setMessage(prev => ({
      ...prev,
      contents: [
        ...prev.contents,
        messageContent
      ]
    }))

    setSubmit(true)
    let messageText = [...message.contents, messageContent].map(item => item.text).join("\n"); 
    generateText(messageText).then(res => {
      setSubmit(false)
      setMessage(prev => {
        let newMessage = {
          ...prev,
          contents: [
            ...prev.contents,
            { id: crypto.randomUUID(), text: res, source: "bot" }
          ]
        };
        createOrUpdateHistory(newMessage)
        return newMessage;
      })
    })
  }

  function handleKeyPress(event) {
    if (!event.shiftKey && event.key === "Enter") {
      submitMessage();
      event.preventDefault()
    }
  }

  function createOrUpdateHistory(currectMessage) {
    const historyIdx = histories.findIndex(item => currectMessage.id === item.id);
    if (historyIdx !== -1) {
      setHistory(prev=> {
        let newHistories = prev;
        newHistories[historyIdx] = currectMessage;
        return newHistories
      })
    }

    let texts = currectMessage.contents.map(item => item.text).join(" ");
    currectMessage.title = generateTitle(texts);
    setHistory([...histories, currectMessage]);
  }

  function createNewMessage() {
    if (message.contents.length > 0) {
      setMessage({id: crypto.randomUUID(), title: '', contents: []});
    }
    inputRef.current.focus();
  }

  return { message, inputRef, isSubmitting, histories, setMessage, submitMessage, handleKeyPress, createNewMessage };
}