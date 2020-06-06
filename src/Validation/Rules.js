export default class Validations {
    static isFieldEmpty = (value) => {
        return value.trim().length === 0 ? true : false
    };

    static matchMobileOrEmail = (value) => {
        let regex = new RegExp('^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$')
        return regex.test(value);
    }

    static matchName = (value) => {
        let regx = /^[a-z\u0590-\u05fe]+$/i;
        return regx.test(value);
    }

    static matchTextWithSpace = (value) => {
        let regx = /^[a-z\u0590-\u05fe ]+$/i;
        return regx.test(value);
    }

    static matchAlphaNumeric = (value) => {
        let regx = /^[0-9a-z\u0590-\u05fe ]+$/i;
        return regx.test(value);
    }

    static matchMobile = (value) => {
        let regx = new RegExp('((^[6-9]{1}[0-9]{9}$)|(^0[6-9]{1}[0-9]{8}$))');
        return regx.test(value);
    }

    static matchEmail = (value) => {
        let regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regx.test(value);
    }
    static matchPasswordLength = (value) => {
        return value.trim().length >= 8 ? true : false

    }
    static matchPassword = (value) => {
        let regx = /^[a-zA-Z0-9]{8,}$/;
        return regx.test(value);
    }

    static comparePassowrd = (cPassword, state) => {
        return cPassword === state.password;
    }

}