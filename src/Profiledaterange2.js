import React from 'react'
import ObdButton from "./ObdButton";
import "./css/style.css";

function Profiledaterange() {
  return (
    <div>
      <div style={{display:"inline-block",marginLeft:"4%"}}> <label for="date" style={{marginLeft:"5%"}}><span style={{color:"red",fontSize:"4px;"}}>*</span>Device Number</label><br/>
      <input type="text" style={{width:"320px",padding:"0.4rem",marginLeft:"5%",height:"50%;"}}/></div>
     
     <div style={{display:"inline-block",marginLeft:"4%"}}> <label for="date" style={{marginLeft:"5%"}} ></label><br/><ObdButton/>
    </div>
     
     <div>
     <div className="ant-col ant-col-xs-24 ant-col-lg-12" style={{paddingTop: "16px;", paddingBottom: "16px;",marginLeft:"6%",marginTop:"4%"}}><div className="ant-row ant-row-space-between style_bottomBoxRow__3UHKv"><div className="ant-col"><div className="style_text__12JcJ style_strong__ioj3g style_sm__KmxEp">Shipped On</div></div><div className="ant-col"><div className="style_text__12JcJ style_right__2-S_A style_p__1T8oW style_sm__KmxEp">??</div></div></div><div className="ant-row ant-row-space-between style_bottomBoxRow__3UHKv"><div className="ant-col"><div className="style_text__12JcJ style_strong__ioj3g style_sm__KmxEp">Shipped To</div></div><div class="ant-col"><div className="style_text__12JcJ style_right__2-S_A style_p__1T8oW style_sm__KmxEp">??</div></div></div></div>
     </div>
    </div>
  )
}

export default Profiledaterange
