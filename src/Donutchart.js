
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective } from '@syncfusion/ej2-react-charts';
const data = [
    { x: 'Jan', y: 37 }, { x: 'Feb', y: 28 },
    { x: 'Mar', y: 35 }, { x: 'Apr', y: 32 },
   
]
function App () {
    return (
     <AccumulationChartComponent className="App" id='charts' style={{width:"30%",heigth:"5%"}}>
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={data} xName='x' yName='y' innerRadius='40%'>
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
    )
}
;
// ReactDOM.render(<App />, document.getElementById("charts"));
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;