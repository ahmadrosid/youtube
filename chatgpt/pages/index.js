import { MessageSquare, Plus, Send } from 'lucide-react'
import Head from 'next/head'
import Input from '../components/input'
import MessageItem from '../components/message'
import useChat from '../hooks/chat'

export default function Home() {

  const {
    message,
    inputRef,
    isSubmitting,
    histories,
    setMessage,
    submitMessage,
    handleKeyPress,
    createNewMessage
  }  = useChat();

  return (
    <>
      <Head>
        <title>ChatGPT Next.js!</title>
        <link rel="icon" href="/bot.svg" />
      </Head>
      <div className='h-screen w-screen bg-gpt-700'>
        <div className='flex'>
          <div className='w-[250px] bg-gpt-800 h-screen hidden md:block'>
            <div className='p-3'>
              <button onClick={createNewMessage} className='text-gpt-100 text-sm inline-flex gap-2 p-2 border border-gpt-400 rounded-md w-full hover:bg-gpt-400'>
                <span><Plus width={18} height={18} /></span>
                <span>New Message</span>
              </button>
              {histories.map(item => (
                <button 
                  key={item.id} onClick={() => setMessage(item)} 
                  className='text-gpt-100 text-sm inline-flex mt-2 gap-2 p-2 border border-transparent rounded-md w-full bg-gpt-400 hover:bg-gpt-500'>
                  <span><MessageSquare width={18} height={18} /></span>
                  <span className='truncate'>{item.title}</span>
              </button>
              ))}
            </div>
          </div>
          <div className='flex-grow'>
            <div className='w-full h-[90vh] scrollbar-thin scrollbar-track-gpt-500 scrollbar-thumb-gpt-400 scrollbar-thumb-rounded'>
              {message.contents.map(item => (
                <MessageItem key={item.id} source={item.source} text={item.text} />
              ))}
              {isSubmitting && <div className="max-w-3xl mx-auto px-2 py-4">
                <button type="button" className="inline-flex items-center px-4 py-2 leading-6 text-sm text-gpt-100 transition ease-in-out duration-150" disabled="">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loading...
                </button>
              </div>}
            </div>

            <div className='p-2 px-4 w-full bg-gpt-700' onKeyDown={handleKeyPress}>
              <div className='flex gap-2 items-end max-w-3xl mx-auto shadow-md p-2 rounded-md bg-gpt-500'>
                <Input ref={inputRef} placeholder="Type youe message here" className="bg-transparent p-2 text-sm w-full focus:outline-none text-gpt-100 resize-none" />
                <button onClick={() => submitMessage()} className='text-gpt-100 p-3 hover:bg-gpt-700/50 rounded-md'>
                  <Send width={18} height={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
