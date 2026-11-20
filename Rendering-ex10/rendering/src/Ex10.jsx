import React from 'react'

const Ex0 = () => {
    const usersList =[
        {id:1,name:'nuur',email:'nuur5@gmail.com'},
        {id:2,name:'farax',email:'m5@gmail.com'},
        {id:3,name:'ahmed',email:'z5@gmail.com'},
        {id:4,name:'geedi',email:'ur5@gmail.com'},
        {id:5,name:'rooble',email:'nuur5@gmail.com'},
        {id:6,name:'nuur',email:'nuur5@gmail.com'},
    ]
  return (
    <div>
    {usersList.map(userList=>(
        <div key={userList.id}>
            <h2>{userList.id}</h2>
            <p>{userList.name}</p>
            <p>
        {userList.email}
            </p>

        </div>
    ))}
      
    </div>
  )
}

export default Ex0
