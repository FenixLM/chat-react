import { useState, useEffect, useRef } from "react";
import ChatFooter from "./components/footer";
import MessageComponent from "./components/message-content";
import MsgLoader from "./components/loader";
import logo from '../../assets/img/sql-image.png';


 function Chat() {
    const inputRef = useRef(null);
    const messagesEndRef = useRef(null);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [showLoader, setShowLoader] = useState(false);
    const [disabled, setDisable] = useState(false);


    const initChat = async () => {
        // const response = await fetch("/api/messages");
        // const data = await response.json();
        const result = [
          {
              "text": "Hola, ¿cómo estás?",
              "isMe": false
          },
          {
              "text": "¡Hola! Estoy bien, ¿y tú?",
              "isMe": true
          },
          {
              "text": "Estoy bien también, gracias por preguntar.",
              "isMe": false
          },
          {
              "text": "¿Qué has estado haciendo últimamente?",
              "isMe": true
          },
          {
              "text": "He estado trabajando en algunos proyectos personales. ¿Y tú?",
              "isMe": false
          },
          {
              "text": "Yo también he estado ocupado con el trabajo. Pero está bien encontrar tiempo para los proyectos personales.",
              "isMe": true
          }
      ]
        setMessages(result);
        setDisable(true);
        console.log('messages', messages);
        

    };

    useEffect(() => {
        initChat();
    }, []);

  const sendMessage = async (message: any) => {
    setShowLoader(true);
    setDisable(true);

    const prevMessages: any = [...messages, { text: message, isMe: true }]
    setMessages(prevMessages);
    scrollToBottom();
  }
   
  
  const scrollToBottom = () => {
    setTimeout(() => {
      // inputRef.current?.focus();

      const el = messagesEndRef.current;

      el.scrollIntoView({ behavior: "smooth", block: 'nearest', inline: 'start' });
    }, 0);
  }


    return (
       <>
             <div className='w-full flex justify-between items-center px-4 sm:px-5 py-4 bg-primary text-white font-bold'>
        <span className="flex align-center gap-4">
          <img className='rounded  w-24' src={logo} alt="logo-consultant" />

          <div className='flex flex-col justify-center text-left'>
            <strong className='' >Caliop</strong>
            <p className="font-normal">Consultor</p>
          </div>
        </span>
      </div >
      <div className="w-full h-full p-5 bg-n50 max-h-[600px] overflow-y-scroll ">
        {
          messages.map((message, index) =>
            <MessageComponent
              key={index}
              message={message}
            />)
        }
        {
          showLoader && <MsgLoader />
        }
        <div style={{ float: "left", clear: "both", height: '16px' }} ref={messagesEndRef} />
      </div>
      <ChatFooter
        inputRef={inputRef}
        disabled={false}
        sendMessage={sendMessage}
      />
       </>
    )

    }
    export default Chat;