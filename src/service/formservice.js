define(["../const/constants"],function(constants){

    const validateName = name => {
        return constants.REGEXP.NAME.test(name);
    }

    const validateSurname = surname => {
        return constants.REGEXP.SURNAME.test(surname);
    }

    const validateAddress = address => {
        return constants.REGEXP.ADDRESS.test(address);
    }

    const isSpainChecked = radiobutton => {
        return radiobutton.checked;
    }

    const validateCP = (radiobutton,code) => {
        if(!isSpainChecked(radiobutton)){
            return constants.REGEXP.USACP.test(code);
        }
        return constanst.REGEXP.ESCP.test(code);
    }

    const validateTelephoneNumber = (radiobutton,number) => {
        if(!isSpainChecked(radiobutton)){
            return constanst.REGEXP.USTEL.test(number);
        }
        return constanst.REGEXP.ESTEL.test(number)
    }

    const validateMobilePhoneNumber = (radiobutton,number) => {
        if(!isSpainChecked(radiobutton)){
            return constants.REGEXP.USAMOBILENUM.test(number);
        }
        return constants.REGEXP.ESMOBILENUM.test(number);
    }

    const validateEmail = email =>{
        return constants.REGEXP.EMAIL.test(email)
    }
    return{
        validateName,
        validateSurname,
        validateAddress,
        validateCP,
        validateTelephoneNumber,
        validateMobilePhoneNumber,
        validateEmail
    }
})