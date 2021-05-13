import React from "react";
import ReactDOM from "react-dom";
import { Doughnut } from "react-chartjs-2";
import "../src/css/Donutchart.css"

const options = {
  cutoutPercentage: 60,
  // animation: {
  //   animateScale: true
  // },
  // circumference: 1.5 * Math.PI,
  // rotation: 0.75 * Math.PI,
  tooltips: {
    // enabled: false,
    callbacks: {
      label: (tooltipItem, data) => {
        // Get the dataset label, global label or fall back to empty label
        let label =
          (data.datasets[tooltipItem.datasetIndex].labels &&
            data.datasets[tooltipItem.datasetIndex].labels[
              tooltipItem.index
            ]) ||
          data.labels[tooltipItem.index] ||
          "";
        if (label) {
          label += ": ";
        }

        // Apply the value and suffix
        label +=
          data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] +
          (data.datasets[tooltipItem.datasetIndex].labelSuffix || "");

        return label;
      }
    }
  }
};

const data = {
  datasets: [
    {
      data: [55, 45,33],
      backgroundColor: ["rgb(240, 159, 85)", "rgb(103, 117, 241)","rgb(113, 247, 153)"],
      // These labels and labelSuffix use the custom tooltips callbacks
      // They will also not trigger the legend
      labels: ["On track", "Remaining"],
      labelSuffix: "%",
      pointStyle: "circle"
    },
    // {
    //   data: [120, 245],
    //   backgroundColor: ["goldenrod", "#ccc"],
    //   // hoverBackgroundColor: ["gold", "#059"],
    //   labels: ["Time elapsed", "Time remaining"],
    //   labelSuffix: " days"
    // }
  ]
};

const data2 = {
  datasets: [
    {
      data: [35, 65],
      backgroundColor: ["rgb(84, 195, 247)", "rgb(235, 76, 208)"]
    },
    // {
    //   data: [120, 245],
    //   backgroundColor: ["goldenrod", "#ccc"]
    // }
  ]
  // Global Labels
  // labels: ["Achieved", "Remaining"]
};

function App() {
  return (
    <div className="App">
      <div className="chartContainer" style={{display:"inline-block",marginLeft:"-10%"}}>
        <Doughnut data={data} options={options} height={400} width={400} />
        </div>
        <div style={{display:"inline-block"}} >
         
         <div class="dot1" style={{backgroundcolor: "rgb(240, 159, 85)"}}></div>
         <span>ios</span>
         <div class="dot2" style={{backgroundcolor: "rgb(240, 159, 85)"}}></div>
         <span>Android</span>
         <div class="dot3" style={{backgroundcolor: "rgb(240, 159, 85)"}}></div>
         <span>Web</span>
           
        </div>
   
      <div className="chartContainer" style={{display:"inline-block",marginLeft:"%"}}>
        <Doughnut data={data2} options={options} />
      </div>
      <div style={{display:"inline-block"}} >
         
         <div class="dot4" style={{backgroundcolor: "rgb(240, 159, 85)"}}></div>
         <span>Mobile</span>
         <div class="dot5" style={{backgroundcolor: "rgb(240, 159, 85)"}}></div>
         <span>Tablet</span>
         
           
        </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App