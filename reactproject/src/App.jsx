import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("Stiven");
  const [edad, setEdad] = useState(0);
  const [email, setEmail] = useState("email@gmail.com");

  const handleNameChange = (event) => {
    setName(event.target.value)
  }
  const handleEdadChange = (event) => {
    setEdad(event.target.value)
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleClick = () => {
    console.log("Datos: " );
    console.log("Name: ", name)
    console.log("Edad: ", edad)
    console.log("Email: ", email)
  }
  return (
    <div className="App">
      <div className='divHola'>
        <h1 className='title'>Esto es un formulario</h1>
        <div className='divInputs'>
        <TextField id="outlined-basic" label="Nombre" variant="outlined" onChange={handleNameChange}/>
        <TextField id="outlined-basic" label="Edad" variant="outlined" type='number' onChange={handleEdadChange}/>
        <TextField id="outlined-basic" label="Email" variant="outlined" type='email' onChange={handleEmailChange}/>
        <Button variant="contained" onClick={handleClick}>Enviar</Button>
        </div>
      </div>
    </div>
  )
}

export default App
