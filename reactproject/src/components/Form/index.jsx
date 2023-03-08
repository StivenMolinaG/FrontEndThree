import { Fragment, useState } from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const Form = ({onSubmit}) => {
    
    const[name, setName] = useState("")
    const[lastName, setLastName] = useState("")
    const[email, setEmail] = useState("")
    const[error, setError] = useState(false)

    const handleSubmit = () =>{
        if(name === '' || lastName === '' || email === ''){
            setError(true)
            onSubmit({})
        }else{
            const data = {
                name,
                lastName,
                email
            }
            setError(false)
            onSubmit(data)
            setEmail("")
            setLastName("")
            setName("")
        }
    }

    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    }
    
    const handleChangeName = (e) => {
        setName(e.target.value); 
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value); 
    }
    return(
        <Fragment>
            <form>
                <h2 style={{color:"black"}}>Este es el texto de form</h2>
                <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={handleChangeName}/>
                <br />
                <br />
                <TextField id="outlined-basic" label="Last Name" variant="outlined" value={lastName} onChange={handleChangeLastName}/>
                <br />
                <br />
                <TextField id="outlined-basic" label="Email" variant="outlined" type={"email"} required value={email} onChange={handleChangeEmail}/>
                <br />
                <br />
                {error && <h3 style={{color:"red"}}> uno de los campos se encuentra vacio o erroneo </h3>}
                <Button variant="contained" onClick={handleSubmit}>ENVIAR</Button>
            </form>
        </Fragment>
    )
}