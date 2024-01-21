import React from 'react'
import { useState } from 'react'
import SideBar from './component/SideBar'
import Dashboard from './component/Dashboard'
import AddUser from './component/AddUser'
import {BrowserRouter, Routes,Route,Navigate} from 'react-router-dom'


function App() {
  let[user, setuser]=useState([
    {
      Name:"Raju",
      Id:"@001",
      eMail:"raju@gmail.com",
      Mobile:"9847372546",
      Describe:"In this course, participants will become proficient in methodologies were use. "
    },
    {
      Name:"Ragavi",
      Id:"@002",
      eMail:"ragav@gmail.com",
      Mobile:"7374936003",
      Describe:"We will examine and practice strategies found in typical employment opportunities of the digital era"
    },
    {
      Name:"Kim",
      Id:"@003",
      eMail:"kim@gmail.com",
      Mobile:"7322136003",
      Describe:"“In this course, I’ll learn key techic and application of it. "
    }
    
  ])

  return <>
    <BrowserRouter>
        <div id="wrapper">
        <SideBar/>

        <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
          <div id="content">
            <div className="container-fluid">

              <Routes>
                <Route path='/Dashboard' element={ <Dashboard user={user} setuser={setuser}/> }/>
                <Route path='/AddUser' element={ <AddUser/> } />
                <Route path='*' element={ <Navigate to='/Dashboard'/>} />
              </Routes>
                
            </div> 
          </div>
        </div>  
        {/* </Routes> */}
        

        </div>
    </BrowserRouter>
  </>
}

export default App