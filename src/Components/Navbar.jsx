import React from 'react'

export const Navbar = () => {
  return (
    <div style={{border:'1px solid black',height:'80px',width:'80%', margin:'auto' , background:'lightblue', borderRadius:'12px',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'}}>

        <div style={{border:'1px solid rd', width:'80%',height:'60px',margin:'0.5rem' , display:'flex' , gap:'100px',margin:'auto', justifyContent:'space-evenly'}}>
              <h2> <a href='#'>Log In</a> </h2>
              <h2><a href='#'>Log Out</a></h2>
              <h2><a href='#'>Cart</a></h2>
              <h2><a href='#'>Wish Lit</a></h2>
        </div>
    </div>
  )
}
