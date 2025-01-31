import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import DoughnutGraph from "./DoughnutGraph";
import LineGraph from "./LineGraph";
import API from '../../../resources/API';
import Loader from "../../../resources/loader";


class CounterInfoCard extends Component {
  
  constructor(props) {
    super(props);

  }


  state = { 
    loading : true,
    // data : {
    //   typeCountList:{},
    // }  
 }

componentDidMount() {

    var res;

    API.get("basicInfo")    
    .then(res=>{
        const basicData = res.data;
        res = res.data;
        this.setState({ 
            data:basicData ,
            loading:false
        });
        console.log(this.state);
    });
  }


  render() {

    if(this.state.data==null)
        return (<Loader></Loader>)

    console.log(this.state.data);

    return (
      <div className="flex-container-add-vehicle-column">
        <div className="flex-container-line">
          <Card border="primary">
            <Card.Header style={{ textAlign: "center", padding: "5px" }}>
              Last 7 Days Data
            </Card.Header>
            <Card.Body style={{ padding: "0px" }}>
              <LineGraph />
            </Card.Body>
          </Card>

          <Card border="primary" style={{ margin: "10px" }}>
            <Card.Header style={{ textAlign: "center", padding: "5px" }}>
              Todays Visited
            </Card.Header>
            <Card.Body style={{ padding: "0px" }}>
              <DoughnutGraph data = {this.state.data.insideTypeCountList}/>
            </Card.Body>
          </Card>

          <Card border="primary">
            <Card.Header style={{ textAlign: "center", padding: "5px" }}>
              Currently Inside
            </Card.Header>
            <Card.Body style={{ padding: "0px" }}>
            <DoughnutGraph data = {this.state.data.typeCountList}/>
            </Card.Body>
          </Card>
        </div>

        <div className="flex-container-row">
          <Card border="primary" style={{ width: "18rem", margin: "10px" }}>
            <Card.Header style={{ textAlign: "center", padding: "5px" }}>
              Last 1 Days Count
            </Card.Header>
            <Card.Body>
              <Card.Title style={{ textAlign: "center", padding: "5px" }}>
              {this.state.data.last1DayVisitor}
              </Card.Title>
            </Card.Body>
          </Card>

          <Card border="primary" style={{ width: "18rem", margin: "10px" }}>
            <Card.Header style={{ textAlign: "center", padding: "5px" }}>
            Last 7 Days visitors
            </Card.Header>
            <Card.Body>
              <Card.Title style={{ textAlign: "center", padding: "5px" }}>
              {this.state.data.last7DayVisitor}
              </Card.Title>
            </Card.Body>
          </Card>

          <Card border="primary" style={{ width: "18rem", margin: "10px" }}>
            <Card.Header style={{ textAlign: "center", padding: "5px" }}>
              Last 30 Days visitors
            </Card.Header>
            <Card.Body>
              <Card.Title style={{ textAlign: "center", padding: "5px" }}>
                {this.state.data.last30DayVisitor}
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default CounterInfoCard;
