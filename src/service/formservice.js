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

    const validateCP = (isSpainSelected,code) => {
        if(!isSpainSelected){
            return constants.REGEXP.USACP.test(code);
        }
        return constanst.REGEXP.ESCP.test(code);
    }

    const validateTelephoneNumber = (isSpainSelected,number) => {
        if(!isSpainSelected){
            return constanst.REGEXP.USTEL.test(number);
        }
        return constanst.REGEXP.ESTEL.test(number)
    }

    const validateMobilePhoneNumber = (isSpainSelected,number) => {
        if(!isSpainSelected){
            return constants.REGEXP.USAMOBILENUM.test(number);
        }
        return constants.REGEXP.ESMOBILENUM.test(number);
    }

    const validateEmail = email =>{
        return constants.REGEXP.EMAIL.test(email)
    }

    const validateBornDate = borndate => {
        return constants.REGEXP.BORNDATE.test(borndate)
    }

    return{
        validateName,
        validateSurname,
        validateAddress,
        validateCP,
        validateTelephoneNumber,
        validateMobilePhoneNumber,
        validateEmail,
        validateBornDate,
    }
})