import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./studentDetails.scss";
import  {service}   from './studentDetails.service';

class StudentDetails extends React.Component<any, any> {
    test = new service ("");
    constructor(props:any){
    super(props);
    this.state={
    studentDetails : {
    name: '',
    age: '',
    },
    
    rowData :[]
    } }


    handlechange = (e: any) => {
    if(e?.target){
    this.setState({ studentDetails: { ...this.state.studentDetails, [e.target.name]: e.target.value } })
    }
    }


    componentDidMount() {
    this.state.studentDetails.created_by = sessionStorage.getItem('email')||'{}';
    }
    Create  () {
    this.test.Create(this.state.studentDetails).then((data:any) => {
    
    },
    (error:any) => {
    console.log('Error', error);
    });
    }

    render(){
    return(
    <>
        <h2 className="screen-align">studentDetails</h2>
        <div>
    <div id="template-inf8" className="gjs-row">
        <div id="template-im97" className="gjs-cell">
            <label id="template-ij6s">Name</label>
            <input type="text" id="template-i29g" placeholder="Enter the name"
            required="true" onChange={this.handlechange} name="name" value={this.state.studentDetails.name}className="form-control "
            />
            <div type="button" id="template-il71g" onClick={()=>this.Create()} className="btn btn-primary "></div>
        </div>
        <div id="template-i9z4" className="gjs-cell">
            <label id="template-iudk">Age</label>
            <input type="text" id="template-ine4" placeholder="enter the age"
            required="true" onChange={this.handlechange} name="age" value={this.state.studentDetails.age}className="form-control "
            />
        </div>
    </div>
</div>
    </>
    );
    };
    };

    export default StudentDetails;