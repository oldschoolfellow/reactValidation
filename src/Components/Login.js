import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import FormValidator from "..//Validation/Validator";
import ValidationArray from "../Validation/Forms/login.form";
import ValidationMessage from "./Common/ValidationMessage";
const validator = new FormValidator(ValidationArray);

const Login = (props) => {
    const [validation, setValidation] = useState(validator.valid());
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = async () => {
        try {
            const validationResult = validator.validate({ email, password });
            setValidation(validationResult);
            console.log({ validationResult })
            if (validationResult.isValid) {
                //do the api call here if all fields are valid
            }
        } catch (err) {
            console.log({ err })
        }
    }
    return (
        <Form style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)', width: '50%', textAlign: "center", alignSelf: 'center'
        }}>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" onChange={event => setEmail(event.target.value)} />
                <ValidationMessage message={validation['email'].message} isInvalid={validation['email'].isInvalid} />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" onChange={event => setPassword(event.target.value)} />
                <ValidationMessage message={validation['password'].message} isInvalid={validation['password'].isInvalid} />

            </FormGroup>
            <Button color="primary" onClick={login} >Login</Button>
        </Form>
    );
}


export default Login;
