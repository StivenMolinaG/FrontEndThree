import './App.css'
import TextName from './components/TextName/TextName'

function App() {

  const Padre = (props) => {
    return (
    <div style={{backgroundColor: "white", width: "300px", height: "150px"}}>
      <h1 style={{color: "black"}}> Hola </h1>
      {props.children}
    </div>
    )
  }

  return (
    <div className="App">
      <Padre>
        <TextName name='Stiven Molina' />
        <TextName name='Catalina Restrepo' />
      </Padre>
    </div>
  )
}

export default App
