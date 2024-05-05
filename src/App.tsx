import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Chat from './app/chat'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/chat" element={<Chat />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
