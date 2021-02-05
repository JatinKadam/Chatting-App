
import {ChatEngine} from "react-chat-engine";
import ChatFeed from "./components/ChatFeed"
import "./App.css";
import LoginForm from "./components/LoginForm";

const App=()=>{
    if(!localStorage.getItem('username')) return <LoginForm />
    return(
        <ChatEngine
        height="100vh"
        projectID="dfed87fc-bfa1-422e-9690-2fc41ed3b490"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
        />

        
    )
}

export default App;