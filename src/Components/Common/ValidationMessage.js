
import React from 'react';
import { Label } from 'reactstrap';

export const ValidationMessage = (props) => {
    const { message, isInvalid } = props

    return (
        isInvalid && <Label style={{ color: "red" }}>{message}</Label>
    );
}

export default ValidationMessage

