import logoImg from '../../../assets/img/db-logo.png';


const MessageComponent = ({ message }) => {
  const msgClass = `flex align-center mb-2 ${message.isMe ? "justify-end" : "justify-start"}`;
  return (
    <div className={msgClass}>
      {
        !message.isMe && <img className='w-8 h-8 rounded-full mr-5' src={logoImg} alt="logo-db" />
      }
      <div className="relative bg-white p-4 rounded text-n500 whitespace-pre-line">
        {message.text}
      </div>

    </div>
  )
}

export default MessageComponent;