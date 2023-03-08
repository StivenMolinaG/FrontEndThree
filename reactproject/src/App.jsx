import './App.css'
import { useState } from "react"
import { Form } from './components/Form';

function App() {
  const[data, setData] = useState({})
  const onSubmit = (data) => {
    setData(data)
  };
  console.log(data)
  return (
    <div className="App">
      <div className='divHola'>
        <Form onSubmit={onSubmit} />
        {(data.name != undefined) && <div className='result'>
          <div>
            <span style={{color: 'black', fontWeight: "bold"}}>name: </span> <span style={{color: 'black'}}>{data.name}</span>
          </div>
          <div>
            <span style={{color: 'black', fontWeight: "bold"}}>LastName: </span> <span style={{color: 'black'}}>{data.lastName}</span>
          </div>
          <div>
            <span style={{color: 'black', fontWeight: "bold"}}>Email: </span> <span style={{color: 'black'}}>{data.email}</span>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default App
