import React from 'react'
import './App.css'
import MyFunctionalComponent from './components/MyFunctionalComponent'
// import MyClassComponent from './components/MyClassComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <MyClassComponent subTitle="React-0122" value={false} /> */}
        {/* <MyClassComponent subTitle="React-0122" /> */}
        <MyFunctionalComponent subTitle="React-0122" value={true} />
      </header>
    </div>
  )
}

export default App
