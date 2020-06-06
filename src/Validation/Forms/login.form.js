export const validationArray = [
    {
        field: 'email',
        method: 'isFieldEmpty',
        validWhen: false,
        message: 'Email is required'
    },
    {
        field: 'email',
        method: 'matchEmail',
        validWhen: true,
        message: 'Email is invalid'
    },
    {
        field: 'password',
        method: 'isFieldEmpty',
        validWhen: false,
        message: 'Password is required'
    },
    {
        field: 'password',
        method: 'matchPasswordLength',
        validWhen: true,
        message: 'Password is invalid.'
    },
    {
        field: 'firstName',
        method: 'isFieldEmpty',
        validWhen: false,
        message: 'First Name is required'
    },
    {
        field: 'firstName',
        method: 'matchTextWithSpace',
        validWhen: true,
        message: 'First Name is invalid'
    },
    {
        field: 'lastName',
        method: 'isFieldEmpty',
        validWhen: false,
        message: 'Last Name is required'
    },
    {
        field: 'lastName',
        method: 'matchTextWithSpace',
        validWhen: true,
        message: 'Last Name is invalid'
    },
    {
        field: 'key',
        method: 'isFieldEmpty',
        validWhen: false,
        message: 'Mobile Number is required'
    },
    {
        field: 'key',
        method: 'matchMobile',
        validWhen: true,
        message: 'Mobile Number is invalid'
    },
    {
        field: 'otp',
        method: 'isFieldEmpty',
        validWhen: false,
        message: 'OTP is required'
    },
    {
        field: 'cPassword',
        method: 'comparePassowrd',
        validWhen: true,
        message: 'Passwords do not Match'
    }
];

export default validationArray;