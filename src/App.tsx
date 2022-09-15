import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapComponent from './components/BootstrapComponent'
import MyFunctionalComponent from './components/MyFunctionalComponent'
import MyClassComponent from './components/MyClassComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FetchComponent from './components/FetchComponent'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            {/* <MyClassComponent subTitle="React-0122" /> */}
            <Route
              path="/"
              element={<MyClassComponent subTitle="React-0122" value={false} />}
            />
            <Route
              path="/function"
              element={
                <MyFunctionalComponent subTitle="React-0122" value={true} />
              }
            />
            <Route path="/bootstrap" element={<BootstrapComponent />} />
            <Route path="/fetch" element={<FetchComponent />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  )
}

export default App
