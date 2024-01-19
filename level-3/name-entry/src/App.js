import React, {useState} from "react"

function App() {
  const [names, setNames] = useState("")

  const [listOfNames, setListOfNames] = useState([])

  function nameChange(event) {
    setNames([
        event.target.value
    ]
    )
  }

  function onSubmit(event) {
    event.preventDefault();
    setListOfNames(prevState => {
      return [...prevState, names.map(name1 => name1)]
    })
    names.name = "";
  }

  const namesList = listOfNames.map((name1, index) => <li key={index}> {name1} </li>)

  return (
    <main>
      <form onSubmit={onSubmit}>
        <input 
          name="name"
          onChange={nameChange}
          value={names.name}
        />
        <button>Submit</button>
      </form>
      <div className="App">
      <h1>{names}</h1>
      <br/>
      <h3>List of names</h3>
      <ul>
      {namesList}
      </ul>
    </div>
    </main>
    
  );
}

export default App;
