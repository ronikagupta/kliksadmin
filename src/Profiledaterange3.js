import React from 'react'

function Profiledaterange() {
  return (
      <div>

        <p style={{textAlign:"center",fontSize:"20px",fontStyle:"Muli,sans-serif"}}>New trip</p>

      <div style={{marginLeft:"-5%"}}> <label for="date" style={{marginLeft:"7%",fontSize:"15px"}}><b>Address:</b></label><br/>
      <input type="text" style={{width:"250px",padding:"0.4rem",marginLeft:"7%",borderRadius:"3px",borderColor:"gray"}}/></div>
      
      <div style={{marginLeft:"-5%",marginTop:"4%"}}> <label for="date" style={{marginLeft:"7%",fontSize:"15px"}}><b>Designation Address:</b></label><br/>
      <input type="text" style={{width:"250px",padding:"0.4rem",marginLeft:"7%",borderRadius:"3px",borderColor:"gray"}}/></div>
      
    

      <div style={{marginLeft:"-1%",display:"inline-block",marginTop:"3%"}}>
      <div> <label for="date" style={{marginLeft:"7%",fontSize:"15px"}}><b>Start Date:</b></label><br/>
      <input type="date" style={{width:"250px",padding:"0.4rem",marginLeft:"7%",borderRadius:"3px",borderColor:"gray"}}/></div>
      
    
      <div style={{marginLeft:"3%",marginTop:"7%"}}> <label for="date" style={{marginLeft:"4%",fontSize:"15px"}}><b>End Date:</b></label><br/>
      <input type="date" style={{width:"250px",padding:"0.4rem",marginLeft:"4%",borderRadius:"3px"}}/></div>
      
      </div>
    
      
      <div style={{display:"inline-block",width:"300px",marginTop:"-7%"}}>
      <div style={{marginLeft:"4%",marginTop:"-7%"}}> <label for="date" style={{marginLeft:"15%",fontSize:"15px",marginTop:"-7%"}}><b>Start Time:</b></label><br/>
      <input type="time" style={{width:"250px",padding:"0.4rem",marginLeft:"15%",borderRadius:"3px",borderColor:"gray",marginRight:"5%"}}/>
      </div>
      
      <div style={{marginLeft:"4%"}}> <label for="date" style={{marginLeft:"15%",fontSize:"15px"}}><b>End Time:</b></label><br/>
      <input type="time" style={{width:"250px",padding:"0.4rem",marginLeft:"15%",borderRadius:"3px"}}/></div>
      
      
      </div>

      <div style={{marginLeft:"4%",marginTop:"3%"}}> <label for="date" style={{marginLeft:"-2%",fontSize:"15px"}}><b>Purpose</b></label><br/>
      <select type="select"style={{width:"250px",padding:"0.4rem",marginLeft:"-2%",borderRadius:"3px",borderColor:"black",border:"2px solid black"}}></select>
      </div>

      {/* <label for="exampleInputEmail1" class="form-label" style={{marginLeft:"2%"}}><b>Purpose</b></label>
        <div>
        
        <select class="form-select" aria-label="Default select example" style={{width:"250px",padding:"0.4rem",marginLeft:"1.5%",borderRadius:"3px",}}>
  <option selected>Business</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
        </div> */}
   
    </div>
  )
}

export default Profiledaterange
