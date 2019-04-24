import React, { Component } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col
} from "reactstrap";
class dashboard extends Component {
    render() {
        return (
            <div className="content">
                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <CardTitle>Welocme to the Dashboard</CardTitle>
                                <p className="card-category">Learning Reacts Js and gonna implement with Node js</p>
                            </CardHeader>
                            <CardBody>

                            </CardBody>
                            <CardFooter>
                                <hr />

                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default dashboard;