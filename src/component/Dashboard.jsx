import React from 'react'
// import{useState} from 'react'
import Slots from './Slots'
// import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';

function Dashboard(user, setuser) {
    let slot=[
        { isProgress: false,
          title:"Earnings (Monthly)",
          price:"40,000",
          color:"primary",
          icon:"fas fa-calendar fa-2x text-gray-300"
        },
        {isProgress:false ,
          title:"Earnings (Annual)",
          price:"215,000",
          color:"success",
          icon:"fas fa-dollar-sign fa-2x text-gray-300"
       },
        {isProgress:true ,
          title:"Tasks",
          price:"50",
          color:"info",
          icon:"fas fa-clipboard-list fa-2x text-gray-300"
      },
      {isProgress: false,
        title:" Pending Requests",
        price:"18",
        color:"warning",
        icon:"fas fa-comments fa-2x text-gray-300"
      }        
    ]
    let handledelet = (i)=>{
    let newArray=[...user]
    newArray.splice(i,1)
    setuser(newArray)
    }
  return <>
  
           {/* Page Heading */}
           <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800"><i><b>Dashboard</b></i></h1>
        </div>
                  {/* Slot */}
        <div className="row"> 
            {
                slot.map((e,i)=>{
                    return <Slots slot={e} key={i} />
                })
            }
        </div>
        <hr className="sidebar-divider"/>
        <hr className="sidebar-divider"/>
                {/* User List */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800"><i>User List</i></h1>
        </div>  
                  {/* User Table  */}
        {/* <div className="row">
            <div className="container-fluid">
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>DoB</th>
                    <th>id</th>
                    <th>eMail</th>
                    <th>Mobile</th>                      
                </tr>
                </thead>
                <tbody>
                {
                    user.map((e,i)=>{
                    return <tr key={i}>
                        <td>{i+1}</td>
                        <td>{e.Name}</td>
                        <td>{e.DoB}</td>
                        <td>{e.id}</td>
                        <td>{e.eMail}</td>
                        <td>{e.Mobile}</td>
                        <td>
                        <Button variant="light"> EDIT </Button>
                        &nbsp;
                        &nbsp; 
                        <Button variant="danger" onClick={()=>{
                            handledelet(i)
                        }}> DELET </Button>

                        </td>

                    </tr>
                    })
                }
                </tbody>
            </Table> 
            </div>
        </div> */}
  </>
}

export default Dashboard