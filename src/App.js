import React, { useState }  from 'react';
import './App.css';

const data =[
  {
    name:"Linkedin Scrapper",
    url:["https://www.linkedin.com/in/"]
  }
]
function App() {

  const [lists] = useState(data);

  const openTabs = (url)=>{
    for (const link of url){
      window.open(link ,"_blank");
    }

  }
  return (
    <div className="App">
     <h3 className='text' >Choose your App List</h3>
     <div className='lists'>
      {
        lists && lists.map((item)=>{
          return(
            <button className='button'onClick={()=>{openTabs(item.url)}}>{item.name}</button>
          )
        })}

     </div>
    </div>
    
  );
}

export default App;
