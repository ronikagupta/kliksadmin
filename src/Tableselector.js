
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios';

const url = 'https://dev.kliks.io/api/trip/get-trips-mobile';

 



const columns = [
  { field: 'purpose', headerName: 'Purpose', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'group', headerName: 'Group', width: 130 },
  { field: 'date', headerName: 'Date', width: 130 },
  { field: 'time', headerName: 'Time', width: 130 },
  { field: 'miles', headerName: 'Miles', width: 130 },
  { field: 'minute', headerName: 'Minute', width: 130 },
  { field: 'from', headerName: 'From', width: 130 },
  { field: 'to ', headerName: 'To', width: 130 },
  { field: 'amount', headerName: 'Amount', width: 130 },
  { field: 'gps', headerName: 'GPS', width: 130 },
  { field: 'status', headerName: 'Status', width: 130 },
  
 
];


class TableSectionInbound extends React.Component {
 

    constructor(props) {
  
      super(props);
  
      this.state= {
  
        posts: [],
  
        isLoading:true,
  
        tableRows: [],
     rows : [
 
    {id: 1, purpose:"No", name:"Snow", group:"A", date:"04/03/2021", time:"2:30", miles:"2", minute:"30", from:"monday", to:"friday", amount:"200 cal", gps:"Na", status:"Na"},
    {id: 3, purpose:"No", name:"Adreson", group:"A", date:"04/03/2021", time:"3:00", miles:"1", minute:"30", from:"monday", to:"friday", amount:"600 cal", gps:"Na", status:"Na"},
    {id: 4, purpose:"No", name:"Orio", group:"B", date:"04/03/2021", time:"2:45", miles:"3", minute:"30", from:"monday", to:"friday", amount:"100 cal", gps:"Na", status:"Na"},
    {id: 2, purpose:"No", name:"Niayaa", group:"c", date:"04/03/2021", time:"3:30", miles:"3", minute:"30", from:"monday", to:"friday", amount:"150 cal", gps:"Na", status:"Na"},
    {id: 5, purpose:"No", name:"Condry", group:"B", date:"04/03/2021", time:"5:30", miles:"1", minute:"30", from:"monday", to:"friday", amount:"300 cal", gps:"Na", status:"Na"},
    {id: 7, purpose:"No", name:"Kristeena", group:"A", date:"04/03/2021", time:"8:00", miles:"3", minute:"30", from:"monday", to:"friday", amount:"700 cal", gps:"Na", status:"Na"},
  ]
  
      };
  
    }
  
  
  
  
    componentWillMount=async() => {
      await axios.post(url,{
        "numberOfPage": 1,
        "fromDate": "2021-05-07",
        "toDate": "2021-05-11",
        "numberOfRecord": 15
      },{headers:{Authorization: "Bearer"+" "+localStorage.token}})
  
        .then(response => response.data.data)
  
        .then(data => {
  
           console.log("..............................///////////////////////",data);
           
          //  if (err) throw err;
  
        //    this.setState({ rows: data[0].trips })
  
        })
  
        .then(async() => {
  
           this.setState({ tableRows:this.assemblePosts(), isLoading:false })
  
           console.log(this.state.tableRows);
  
        });
  
    }
  
  
  
  
    assemblePosts= () => {
  
      let posts =this.state.posts.map((post) => {
  
        return (
  
          {
  
            number: post._id,
  
            title: post.name,
  
            user: post.startDate,
  
            body: post.endDate,
  
            time: post.timeToComplete,
  
  
  
          }
  
        )
  
      });
  
      return posts;
  
    }
  
  
  
  
  
    render() {
  
      const data = {
  
        columns: [
  
          {
  
            label:'Id',
  
            field:'number',
  
          },
  
          {
  
            label:'Name',
  
            field:'title',
  
          },
  
          {
  
            label:'Start Date',
  
            field:'user',
  
          },
  
          {
  
            label:'End Date',
  
            field:'body',
  
          },
  
          {
  
            label:'Total Time',
  
            field:'time',
  
          },
  
        ],
  
        rows:this.state.tableRows,
  
      }
  
  
  
  
      return (
  
     
        <div style={{ height: 400, width: '95%' }}>
        <DataGrid rows={this.state.rows} columns={columns} pageSize={5} checkboxSelection />
      </div>
  
    
  
      )
  
    }
  
  }
  
  
  
  
  export default TableSectionInbound;


    
