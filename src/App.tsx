import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapComponent from './components/BootstrapComponent'
// import MyFunctionalComponent from './components/MyFunctionalComponent'
// import MyClassComponent from './components/MyClassComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <MyClassComponent subTitle="React-0122" value={false} /> */}
        {/* <MyClassComponent subTitle="React-0122" /> */}
        {/* <MyFunctionalComponent subTitle="React-0122" value={true} /> */}
        <BootstrapComponent />
      </header>
    </div>
  )
}

export default App
