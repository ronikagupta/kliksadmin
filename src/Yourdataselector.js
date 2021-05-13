import React from 'react'

function Yourdataselector() {
  return (
    <div>
      <table style={{ fontFamily: "arial sans-serif",
  borderCollapse: "collapse",
  width: "95%",height:"200px",marginTop:"2%",backgroundColor:"#EEEFF1"}}>
 
  <tr>
    <td style={{  border: "1px solid #dddddd",
  textAlign: "left",
  padding:" 8px",fontSize:"15px"}}><img style={{height:"30px",width:"30px",marginLeft:"1%",marginRight:"2%"}} src="https://dev.kliks.io/images/icons/trip-pins.svg"/>Trips you've recorded or added <div style={{marginLeft:"90%",marginTop:"-3%"}}><input style={{width:"50px",height:"15px"}}  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input></div> </td>
  
  </tr>
  <tr>
    <td style={{  border: "1px solid #dddddd",
  textAlign: "left",
  padding:" 8px",fontSize:"15px"}}><img style={{height:"30px",width:"50px",marginLeft:"-1%",marginRight:"2%"}} src="https://dev.kliks.io/images/icons/receipt-dollar.svg"/>
  Trip receipts you've submitted for reimbursement  <div style={{marginLeft:"90%",marginTop:"-3%"}}><input style={{width:"50px",height:"15px"}}  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input></div></td>
  
  </tr>
  <tr>
    <td style={{  border: "1px solid #dddddd",
  textAlign: "left",
  padding:" 8px",fontSize:"15px"}}><img style={{height:"30px",width:"30px",marginLeft:"1%",marginRight:"2%"}} src="https://dev.kliks.io/images/icons/calendar-cash-1.svg"/>Trip reimbursements paid to you   <div style={{marginLeft:"90%",marginTop:"-3%"}}><input style={{width:"50px",height:"15px"}}  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input></div></td>
    
  </tr>
  <tr>
    <td style={{  border: "1px solid #dddddd",
  textAlign: "left",
  padding:" 8px",fontSize:"15px"}}><img style={{height:"30px",width:"30px",marginLeft:"1%",marginRight:"2%"}} src="https://dev.kliks.io/images/icons/single-neutral.svg"/>Your contact information and addresses  <div style={{marginLeft:"90%",marginTop:"-3%"}}><input style={{width:"50px",height:"15px"}}  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input></div></td>
    
  </tr>
 
</table>
    </div>
  )
}

export default Yourdataselector
