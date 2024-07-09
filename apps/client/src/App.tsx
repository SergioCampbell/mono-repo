import './App.css'

function App() {

  const callApi = () => {
    fetch('/api')
      .then(response => response.json())
      .then(data => console.log(data))
  }

  return (
    <>
      <button onClick={callApi}>Click me 😊</button>
    </>
  )
}

export default App
