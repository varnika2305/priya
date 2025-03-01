//import React, { useState } from 'react';
//function navigate(){
  //window.location.replace("/home");
//}

//const Login = () => {
  //const [username, setUsername] = useState('');
  //const [password, setPassword] = useState('');

  //const handleSubmit = (e) => {
    //e.preventDefault();
    //console.log('Username:', username);
    //console.log('Password:', password);
    
    
  //};

  //return (
    //<div>
      //<h2>Login Page</h2>
      //<form onSubmit={handleSubmit}>
        //<label>
          //Username:
          //<input 
            //type="text" 
            //value={username} 
            //onChange={(e) => setUsername(e.target.value)} 
          ///>
        //</label>
        //<br />
        //<label>
          //Password:
          //<input 
            //type="password" 
            //value={password} 
            //onChange={(e) => setPassword(e.target.value)} 
          ///>
        //</label>
        //<br />
        //<button onClick={navigate}>Login</button>
      //</form>
    //</div>
  //);
//};
import React, { useState } from 'react';






      const Login = () => {
        
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
      
        
      
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log('Username:', username);
          console.log('Password:', password);
          
        };
        
       
            
        return (
          <div>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Username:
                <input 
                  type="text" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                />
              </label>
              <br />
              <label>
                Password:
                <input 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </label>
              <br />
            <button type="submit">Login</button>
           

      
      
            
            </form>
          </div>
        );
      };
      export default Login;

