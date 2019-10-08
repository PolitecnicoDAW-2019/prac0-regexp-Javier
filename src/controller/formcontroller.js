define(["../const/constants"],function(constants){

    
    const FormStatus = {
        NAME:false,
        SURNAME:false,
        ADDRESS:false,
        POSTALCODE:false,
        TELEPHONE:false,
        MOBILE:false,
        EMAIL:false,
        BORNDATE:true
    }


    const setStatusWrong = id => {
        view.setStatus(id,constants.FONTAWESOME.WRONG);
    }

    const setStatusOk = id => {
        view.setStatus(id,constants.FONTAWESOME.CORRECT);
    }

    const checkName = () => {
        let name = view.getNameFieldValue();

        if(!service.validateName(name)){
            FormStatus.NAME=false;
           return  setStatusWrong("NameStatus");
        }
        FormStatus.NAME=true;
       return setStatusOk("NameStatus");

    }

    const checkSurname = () => {
        let surname = view.getSurnameFieldValue();

        if(!service.validateSurname(surname)){
            FormStatus.SURNAME=false;
            return  setStatusWrong("SurnameStatus");
         }
         FormStatus.SURNAME=true;
        return setStatusOk("SurnameStatus");
 
     }

     const checkAdress = () => {
         let address = view.getAddressFieldValue();

         if(!service.validateAddress(address)){
             FormStatus.ADDRESS=false;
             return setStatusWrong("AdressStatus");
         }
         FormStatus.ADDRESS=true;
         return setStatusOk("AdressStatus");
     }

     const checkPostalCode = () => {
         let postalcode = view.getPostalCodeFieldValue();

         if(!service.validateCP(view.isSpainChecked(),postalcode)){
             FormStatus.POSTALCODE=false;
            return setStatusWrong("postalCodeStatus");
         }
         FormStatus.POSTALCODE=true;
         return setStatusOk("postalCodeStatus");

        }

        const checkTelephoneNumber = () => {
            let telephone = view.getTelephoneNumberFieldValue();

            if(!service.validateTelephoneNumber(view.isSpainChecked(),telephone)){
                FormStatus.TELEPHONE=false;
                return setStatusWrong("telephoneNumberStatus")
            }
            FormStatus.TELEPHONE=true;
            return setStatusOk("telephoneNumberStatus")
        }

        const checkMobilePhoneNumber = () => {
            let number = view.getMobilePhoneNumberFieldValue();

            if(!service.validateMobilePhoneNumber(view.isSpainChecked(),number)){
                FormStatus.MOBILE=false;
                return setStatusWrong("MobilePhoneNumberStatus")
            }
            FormStatus.MOBILE=true;
            return setStatusOk("MobilePhoneNumberStatus")
        }

        const checkEmail = () => {
            let email = view.getEmailFieldValue();

            if(!service.validateEmail(email)){
                FormStatus.EMAIL=false;
                return setStatusWrong("EmailStatus")
            }
            FormStatus.EMAIL=true;
           return setStatusOk("EmailStatus")
        }

        const checkBornDate = () => {
            let borndate = view.getBornDateFieldValue();

            if(!service.validateBornDate(view.isSpainChecked(),borndate)){
                FormStatus.BORNDATE=false;
                return setStatusWrong("BornDateStatus")
            }
            FormStatus.BORNDATE=true;
            return setStatusOk("BornDateStatus")
        }
    
    
    const init = (service,view) => {
        this.service = service;
        this.view = view;
        view.executeFunction("name",checkName);
        view.executeFunction("surname",checkSurname);
        view.executeFunction("address",checkAdress);
        view.executeFunction("postalcode",checkPostalCode)
        view.executeFunction("telephonenum",checkTelephoneNumber);
        view.executeFunction("mobilephonenum",checkMobilePhoneNumber);
        view.executeFunction("email",checkEmail);
        view.executeFunction("borndate",checkBornDate);
    }

   

    return {
        init
    }
})