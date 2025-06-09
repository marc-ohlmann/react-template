import './App.css'
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
        <h2>Hello World!</h2>
        <Outlet />
    </>
  )
}

export default App
