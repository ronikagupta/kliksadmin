import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import { DatePicker } from 'carbon-components-react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Yourdataselector from "./Yourdataselector";
import ActivityDatepicker from "./ActivityDatepicker";
import { enableRipple } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import "../src/css/navbar.css"


export default class ReactApp extends React.Component {
    constructor() {
        super(...arguments);
        this.headerText = [{ text: "Your Information" }, { text: "Available Files" }];
        
    }
    content0() {
        return <div>
            <div  style={{color:"black",fontSize:"800px",color:'#16b396',font:" 16px Muli sans-serif",marginTop:"5%",marginLeft:"2%"}}><b>All of my data</b></div>
       
            <div style={{marginTop:"5%"}}>  <Yourdataselector/></div>
            <div style={{marginTop:"5%",marginLeft:"-58%"}}>
                <ActivityDatepicker/>
            </div>
            <div style={{marginLeft:"78%",marginTop:"-5%"}}><ButtonComponent style={{width:"120px",height:"30px",backgroundColor:"#16b396",color:"white"}}>Create File</ButtonComponent></div>
        
      </div>;
    }
    content1() {
        return <div>
            <div style={{width:"670px", height:"100px",border:"2px solid gray", marginTop:"5%"}}><img  style={{width:"30px",heigth:"30px",marginTop:"5%",marginLeft:"5%"}}src="https://dev.kliks.io/images/icons/file-csv.svg"/>
            <div style={{marginTop:"-10%",marginLeft:"9%"}}>  <p> <strong style={{font:"16px Muli, sans-serif",color:"Black", marginLeft:"3%",marginTop:"-30%"}}>Downlode My Data</strong></p>
              <p> <strong style={{font:"14px Muli, sans-serif",color:"Black", marginLeft:"3%",marginTop:"-30%"}}>Trips, Receipts, Reimbursements, Profile</strong></p>
              <p> <strong style={{font:"14px Muli, sans-serif",color:"gray", marginLeft:"3%",marginTop:"-30%"}}>Requested on April 26, 2021 at 01:05 PM</strong></p>
             <div style={{marginTop:"-10%"}}> <button type="button" style={{ padding:"0.6em 2em",
  borderRadius:" 8px",
  color:"#fff",
  backgroundColor:"#E6F7FF",
  fontSize:"1.1em",
  border:"0",
  cursor:"pointer",
  color:"#1890FF",
  margin:"1em",marginTop:"-30%",marginLeft:"70%"}}>Generating File</button></div>
           </div>
            
           </div>
        
            
             </div>;
       
    }
    content2() {
        return <div>
  WhatsApp Messenger is a proprietary cross-platform instant messaging client for smartphones that operates under a subscription business model. It uses the Internet to send text messages, images, video, user location and audio media messages to other users using standard cellular mobile numbers. As of February 2016, WhatsApp had a user base of up to one billion,[10] making it the most globally popular messaging application. WhatsApp Inc., based in Mountain View, California, was acquired by Facebook Inc. on February 19, 2014, for approximately US* 9.3 billion.
  </div>;
    }
    render() {
        return (<TabComponent heightAdjustMode='Auto'>
    <TabItemsDirective  >
      <TabItemDirective header={this.headerText[0]} content={this.content0}/>
      <TabItemDirective header={this.headerText[1]} content={this.content1}/>
      <TabItemDirective header={this.headerText[2]} content={this.content2}/>
    </TabItemsDirective>
  </TabComponent>);
    }
}
ReactDOM.render(<ReactApp />, document.getElementById('root'));