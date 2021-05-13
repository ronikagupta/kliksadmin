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
        this.headerText = [{ text: "Your Information" }, { text: "Status" }];
        
    }
    content0() {
        return <div>
            <div  style={{color:"black",fontSize:"800px",color:'#16b396',font:" 16px Muli sans-serif",marginTop:"5%",marginLeft:"2%"}}><b>All of my data</b></div>
       
            <div style={{marginTop:"3%"}}>  <Yourdataselector/></div>
           <div><p style={{font:"15px Muli, sans-serif",color:"gray"}}>If your request is approved and you have unpaid trips/receipts/reimbursements, your data will not be anonymized until those are paid.

</p></div>
            <div style={{marginLeft:"74%",marginTop:"0%"}}><ButtonComponent style={{width:"150px",height:"30px",backgroundColor:"#16b396",color:"white"}}>Submit Request</ButtonComponent></div>
        
      </div>;
    }
    content1() {
        return <div>
              <p style={{font:"14px Muli, sans-serif",color:"black",textAlign:"center",marginTop:"20%"}}>No Panding Request</p>
            
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