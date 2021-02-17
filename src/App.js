import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/chatFeed'
import LoginForm from './components/loginForm'
import './App.css'

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine
      height="100vh"
      projectID="b9bcac7c-05ac-4a11-ad5e-63741c37d979"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={chatAppProps => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App
