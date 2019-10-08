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
        return constants.REGEXP.ESCP.test(code);
    }

    const validateTelephoneNumber = (isSpainSelected,number) => {
        if(!isSpainSelected){
            return constants.REGEXP.USATEL.test(number);
        }
        return constants.REGEXP.ESTEL.test(number)
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

    const validateBornDate = (isSpainSelected,borndate) => {
        if(!isSpainSelected){
            return constants.REGEXP.USABORNDATE.test(borndate)
        }
        return constants.REGEXP.ESBORNDATE.test(borndate)
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