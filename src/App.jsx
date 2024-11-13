import { useState } from 'react'
import './App.css'
import { HashRouter as Router,Routes, Route } from 'react-router-dom'
import { Home } from './Pages/home'
import { Page1 } from './Pages/page1'
import { Page2 } from './Pages/page2'
import { Page3 } from './Pages/page3'
import { Layout } from './Layout'
import { Navbar } from './Components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
<Router>

  <Routes>
    <Route element={<Layout/>}>
    <Route path="/"element={<Home/>}/>
<Route path="/Mentorship"element={<Page1/>}/>
<Route path="/page2"element={<Page2/>}/>
<Route path="/page3"element={<Page3/>}/>
    </Route>

  </Routes>
</Router>

  )
}

export default App
