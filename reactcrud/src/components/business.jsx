import React, { Component } from 'react';
import axios from 'axios';
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Table,
    Row,
    Col
} from "reactstrap";

class Business extends Component {

    constructor() {
        super();
        this.state = {
            businessDetails: []
        }
        this.deleteBusiness = this.deleteBusiness.bind(this);
    }

    componentDidMount() {
        this.getBusiness();
    }

    getBusiness() {
        axios.get('http://localhost:4000/business',
            { 'headers': { 'Authorization': localStorage.getItem('access_token') } }
        ).then(res => {
            this.setState({ businessDetails: res.data.message })
        }).catch(err => {
            console.log(err);
        });
    }

    editBusiness(id) {
        this.props.history.push(`create-business/${id}`)
    }

    deleteBusiness(id) {
        axios.get('http://localhost:4000/business/delete/' + id,
            { 'headers': { 'Authorization': localStorage.getItem('access_token') } }
        ).then(res => {
            console.log(res);
            this.getBusiness();
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className="content">
                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Business Details</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <thead className="text-primary">
                                        <tr>
                                            {thead.map((prop, key) => {
                                                if (key === thead.length - 1)
                                                    return (
                                                        <th key={key} className="text-centre">
                                                            {prop}
                                                        </th>
                                                    );
                                                return <th key={key}>{prop}</th>;
                                            })}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.businessDetails.map((prop, key) => {
                                            return (
                                                <tr key={key}>
                                                    <td className="text-centre">{key + 1}</td>
                                                    <td className="text-centre">{prop.person_name}</td>
                                                    <td className="text-centre">{prop.business_name}</td>
                                                    <td className="text-centre">{prop.business_gst_number}</td>
                                                    <td className="text-centre">{prop.address ? prop.address.state : '--'}</td>
                                                    <td className="text-centre">{prop.address ? prop.address.district : '--'}</td>
                                                    <td className="text-cantre">
                                                        <a href="#" onClick={() => this.editBusiness(prop._id)}>Edit</a>
                                                        &nbsp;
                                                        &nbsp;
                                                       <a href="#" onClick={() => this.deleteBusiness(prop._id)}>Delete</a>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Business;



const thead = ["SL.No:-", "Person Name", "Business Name", "GST Number", 'State', 'District', 'Actions'];