import './App.css';
import {useState} from 'react';

function App() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {today} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text" value={toDo} onChange={(e)=> setToDo(e.target.value)} placeholder="🖊️ Add item..." />
        <i className="fas fa-plus" onClick= {()=> setToDos([...toDos,{id: Date.now(), text: toDo, status: false}])}> </i>
      </div>

      <div className="todos">
        {
          toDos.map((value)=>{
            return( <div className="todo">
              <div className="left">
                <input type="checkbox" onChange= {(e)=>{
                  setToDos(toDos.filter(obj2 =>{
                    if(obj2.id=== value.id){
                      obj2.status= e.target.checked
                    }
                    return obj2

                  }))
                }} value={value.status} name="" id="" />
                <p>{value.text}</p>
              </div>
              <div className="right">
                <i className="fas fa-times"></i>
              </div>
            </div>)
          })
        }

        {
          toDos.map((value)=>{
             if(value.status){
              return(<h2>{value.text}</h2>)
             }
             return(null)

          })
        }
      </div>
    </div>
  );
}

export default App;
