import './main.css';
import {useState } from 'react';


const notes = [
  {
    id: 1,
    name: 'HTML is easy'
  }, 
  {
    id: 2,
    name: 'Browser can execute only JavaScript'
   
  },
  {
    id: 3,
    name: 'GET and POST are the most important methods of HTTP protocol'
    
  }
]

function App(props) {
  const [userdata, setUserdata]=useState(notes)
  const [inputValue, setInputValue]=useState(" ")

  const handleChange=(e)=>{
    // console.log(e.target.value)
    setInputValue(e.target.value)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    // create data object
    
    if(inputValue!==""){
      var obj={
        id: userdata.length +1,
        name: inputValue
      }
      setUserdata(userdata.concat(obj));
    }
    
      console.log(inputValue);
      
      console.log(userdata)
      setInputValue('')
  }


  
  return (
    <div className="App">
      
      <div className="form">
          <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleChange}/>
            <button >Add Name</button>
          </form>

      </div>
      <div className="display">
        {/* loop through all data */}
            {userdata.map((user)=>{
              return(
                
                  <li key={user.id}>{user.name}</li>
                
              )
            })}

      </div>
      
    </div>
  );
}



export default App
