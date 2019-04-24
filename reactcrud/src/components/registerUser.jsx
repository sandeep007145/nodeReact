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
class registerUser extends Component {
    registerForm = FormBuilder.group({
        name: ["", Validators.required],
        email: ["", Validators.required],
        password: ["", Validators.required],
        role: ["", Validators.required],
        number: ["", Validators.required],
    });
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default registerUser;