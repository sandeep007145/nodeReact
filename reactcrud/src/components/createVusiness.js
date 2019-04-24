import React, { Component } from 'react';
import axios from 'axios';
import '../publicstyle.css/error.css'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Row,
    Col,
    Container,
    FormGroup,
    Label,
    Input,
    Button,
} from "reactstrap";

import {
    FormBuilder,
    FieldGroup,
    FieldControl,
    Validators,
} from "react-reactive-form";

const TextInput = ({ handler, touched, hasError, meta }) => (
    <div>
        <Input placeholder={`Enter ` + meta.label} {...handler()} />
        <span className="error">
            {touched
                && hasError("required")
                && `${meta.label} is required`}

            {touched
                && hasError("pattern")
                && `${meta.label} is invalid`}
        </span>
    </div>
)

class CreateVusiness extends Component {
    GSTREGEX = '(^[0-9]{2})([A-Z]{5})([0-9]{4})([A-Z]{1})([0-9]{1})([Z]{1})([A-Z0-9]{1})';
    loginForm = FormBuilder.group({
        person_name: ["", Validators.required],
        business_name: ["", Validators.required],
        business_gst_number: ["", [Validators.required, Validators.pattern(this.GSTREGEX)]],
        address: FormBuilder.group({
            state: ['', [Validators.required]],
            district: ['', [Validators.required]]
        })
    });
    handleReset = () => {
        this.loginForm.reset();
    }

    componentDidMount() {
        const id = this.props.location.pathname;
        if (id) {
            const originalId = id.split('/')[2];
            if (originalId) {
                axios.get('http://localhost:4000/business/edit/' + originalId,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': localStorage.getItem('access_token')
                        }
                    }
                ).then(res => {
                    console.log(res.data);
                    this.loginForm.patchValue(res.data)
                }).catch(err => {
                    console.log(err);
                })
            }

        }

    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.loginForm.valid) {
            axios.post('http://localhost:4000/business/add', this.loginForm.value,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': localStorage.getItem('access_token')
                    }
                }
            ).then(res => {
                this.props.history.push('/business');
            }).catch(err => {
                console.log(err);
            });
        } else {
            console.log(this.loginForm)
            this.loginForm.markAsTouched();
        }
    }


    render() {
        return (
            <div className="content">
                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                            </CardHeader>
                            <CardBody>
                                <Container className="App">
                                    <h2>Create Business</h2>
                                    <FieldGroup
                                        control={this.loginForm}
                                        render={({ get, invalid }) => (
                                            <form onSubmit={this.handleSubmit}>
                                                <Label>Person Name</Label>
                                                <FormGroup>
                                                    <FieldControl
                                                        tag="Input"
                                                        name="person_name"
                                                        render={TextInput}
                                                        meta={{ label: "Name" }}
                                                    />
                                                </FormGroup>
                                                <Label>Business Name</Label>
                                                <FormGroup>

                                                    <FieldControl
                                                        name="business_name"
                                                        render={TextInput}
                                                        meta={{ label: "Business Name" }}
                                                    />
                                                </FormGroup>
                                                <Label>GST Number</Label>
                                                <FormGroup>
                                                    <FieldControl
                                                        name="business_gst_number"
                                                        render={TextInput}
                                                        meta={{ label: "Business GST Number" }}
                                                    />
                                                </FormGroup>
                                                <Label>State</Label>
                                                <FormGroup>
                                                    <FieldControl
                                                        name="address.state"
                                                        render={TextInput}
                                                        meta={{ label: "State" }}
                                                    />
                                                </FormGroup>
                                                <Label>District</Label>
                                                <FormGroup>
                                                    <FieldControl
                                                        name="address.district"
                                                        render={TextInput}
                                                        meta={{ label: "District" }}
                                                    />
                                                </FormGroup>
                                                <Button type="button" onClick={this.handleReset}>Reset</Button>
                                                <Button type="submit" value="Submit">Submit</Button>
                                            </form>
                                        )}
                                    />
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

export default CreateVusiness;