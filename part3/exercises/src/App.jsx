import { useState } from 'react'
import './App.css'
import Introduction from './components/Introduction';
import MyProjects from './components/Projects';

function App() {

  return (
    <>
      <div className="App">
	      <h1>My Hobby: Crochet</h1>
	      <Introduction />
	      <MyProjects />
      </div>
    </>
  )
}

export default App
