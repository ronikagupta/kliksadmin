import React from 'react'

function Profiledaterange() {
  return (
    <div>
      <div style={{display:"inline-block",marginLeft:"4%"}}> <label for="date" style={{marginLeft:"5%",fontSize:"15px"}}>From</label><br/>
      <input type="date" style={{width:"250px",padding:"0.4rem",marginLeft:"5%",borderRadius:"3px",borderColor:"gray"}}/></div>
     
     <div style={{display:"inline-block",marginLeft:"4%"}}> <label for="date" style={{marginLeft:"5%",fontSize:"15px"}} >To</label><br/>
      <input type="date" style={{width:"250px",padding:"0.4rem",marginLeft:"5%",borderRadius:"3px"}}/></div>
     
    </div>
  )
}

export default Profiledaterange
