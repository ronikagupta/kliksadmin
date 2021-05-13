import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "../src/css/navbar.css"
import Yourdatatab2 from "./Yourdatatab2";
import Yourdatatab3 from "./Yourdatatab3";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
export default class ReactApp extends React.Component {
    constructor() {
        super(...arguments);
        this.headerText = [{ text: "Downlode Data" }, { text: "Anonymize Data" }];
        
    }
    content0() {
        return <div>
          
          <div className="boxprofile6" style={{ marginTop: "%" }}>
          <div style={{marginLeft:"4%",marginTop:"5%"}}><Yourdatatab2/></div>
          </div>
          </div>;
    }
    content1() {
        return <div>
          <div className="boxprofile6" style={{ marginTop: "%" }}>
          <div style={{marginTop:"5%",marginLeft:"3%"}}>  <Yourdatatab3/> </div>
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