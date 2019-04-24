import React, { Component } from 'react';
import axios from 'axios';
import NotificationAlert from "react-notification-alert";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Row,
    Col,
    Container,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    FormText,
    Alert
} from "reactstrap";

class Login extends Component {

    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }


    submitForm = (e) => {
        const formData = new FormData(e.target)
        const user = {}
        e.preventDefault()
        for (let entry of formData.entries()) {
            user[entry[0]] = entry[1]
        }
        axios.post('http://localhost:4001/api/login', user)
            .then(res => {
                localStorage.setItem('access_token', res.data.token);
                window.location.href = './dashboard';
            }).catch(err => {
                if (err.message === 'Request failed with status code 422') {
                    return <NotificationAlert ref="notificationAlert">
                        <Alert color="info">
                            <span>This is a plain notification</span>
                        </Alert>
                        </NotificationAlert>
                }
            });
    }

    render() {
        return (
            <div className="content">
                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                {/* <CardTitle>Login</CardTitle>
                                <p className="card-category">Login with Credentials you are registered.</p> */}
                            </CardHeader>
                            <CardBody>
                                <Container className="App">
                                    <h2>Login</h2>
                                    <Form className="form" onSubmit={this.submitForm}>
                                        <Col>
                                            <FormGroup>
                                                <Label>Email</Label>
                                                <Input
                                                    type="email"
                                                    name="email"
                                                    id="exampleEmail"
                                                    placeholder="Enter Your Email"
                                                />
                                                <FormText>Your username is most likely your email.</FormText>
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <Label for="examplePassword">Password</Label>
                                                <Input
                                                    type="password"
                                                    name="password"
                                                    id="examplePassword"
                                                    placeholder="Enter Your Password"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Button type="submit" value="Submit">Submit</Button>
                                    </Form>
                                </Container>
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

export default Login;