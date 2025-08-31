import './styles/App.css'
import Request from './components/Request'
import MetaData from './components/MetaData'
import Response from './components/Response'

function App() {
 

  return (
    <>
    <h1>Test Your APIs</h1>
    <p>on a simpler UI and a nice summarized stats and performance of your APIs</p>
    <Request />
    <MetaData />
    <Response />
    </>
  )
}

export default App
