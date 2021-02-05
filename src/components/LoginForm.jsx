import axios from "axios"
import { useState } from "react"


 const LoginForm=()=> {

    const [username,setUsername]= useState('');
    const [password,setPassword]= useState('');
    const [error,setError]=useState('')
    const handleSubmit= async (e)=>  {
        e.preventDefault();
        const authObject = { 'Project-ID':"dfed87fc-bfa1-422e-9690-2fc41ed3b490" , 'User-Name': username, 'User-Secret': password };

        try {
          await axios.get('https://api.chatengine.io/chats', { headers: authObject });
    
          localStorage.setItem('username', username);
          localStorage.setItem('password', password);
    
          window.location.reload();
          
        } catch (error) {
            setError("oops,incorrect ")

        }

    }

    return(
        <div className="wrapper">
            <div className="from">
            <h1 className="title">Chat Application</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={((e)=>setUsername(e.target.value))} className="input" placeholder="Username" required />
            <input type="text" value={password} onChange={((e)=>setPassword(e.target.value))} className="input" placeholder="Password" required />
            <div align="center">
                  
                   <button type="submit" className="button">
                   <span>Start Chatting</span>
                   </button>
            </div>

            </form>
            <h1>{error}</h1>

            </div>
        </div>
    )

}
export default LoginForm;