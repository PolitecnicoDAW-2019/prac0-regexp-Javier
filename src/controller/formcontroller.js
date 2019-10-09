define(["../const/constants"],function(constants){

    const setStatusWrong = id => {
        view.setStatus(id,constants.FONTAWESOME.WRONG);
    }

    const setStatusOk = id => {
        view.setStatus(id,constants.FONTAWESOME.CORRECT);
    }

    const checkName = () => {
        let name = view.getNameFieldValue();

        if(!service.validateName(name)){
           view.FormStatus.NAME=false;
           return  setStatusWrong("NameStatus");
        }
        view.FormStatus.NAME=true;
       return setStatusOk("NameStatus");

    }

    const checkSurname = () => {
        let surname = view.getSurnameFieldValue();

        if(!service.validateSurname(surname)){
            view.FormStatus.SURNAME=false;
            return  setStatusWrong("SurnameStatus");
         }
         view.FormStatus.SURNAME=true;
        return setStatusOk("SurnameStatus");
 
     }

     const checkAdress = () => {
         let address = view.getAddressFieldValue();

         if(!service.validateAddress(address)){
             view.FormStatus.ADDRESS=false;
             return setStatusWrong("AdressStatus");
         }
         view.FormStatus.ADDRESS=true;
         return setStatusOk("AdressStatus");
     }

     const checkPostalCode = () => {
         let postalcode = view.getPostalCodeFieldValue();

         if(!service.validateCP(view.isSpainChecked(),postalcode)){
             view.FormStatus.POSTALCODE=false;
            return setStatusWrong("postalCodeStatus");
         }
         view.FormStatus.POSTALCODE=true;
         return setStatusOk("postalCodeStatus");

        }

        const checkTelephoneNumber = () => {
            let telephone = view.getTelephoneNumberFieldValue();

            if(!service.validateTelephoneNumber(view.isSpainChecked(),telephone)){
                view.FormStatus.TELEPHONE=false;
                return setStatusWrong("telephoneNumberStatus")
            }
            view.FormStatus.TELEPHONE=true;
            return setStatusOk("telephoneNumberStatus")
        }

        const checkMobilePhoneNumber = () => {
            let number = view.getMobilePhoneNumberFieldValue();

            if(!service.validateMobilePhoneNumber(view.isSpainChecked(),number)){
                view.FormStatus.MOBILE=false;
                return setStatusWrong("MobilePhoneNumberStatus")
            }
            view.FormStatus.MOBILE=true;
            return setStatusOk("MobilePhoneNumberStatus")
        }

        const checkEmail = () => {
            let email = view.getEmailFieldValue();

            if(!service.validateEmail(email)){
                view.FormStatus.EMAIL=false;
                return setStatusWrong("EmailStatus")
            }
            view.FormStatus.EMAIL=true;
           return setStatusOk("EmailStatus")
        }

        const checkBornDate = () => {
            let borndate = view.getBornDateFieldValue();

            if(!service.validateBornDate(view.isSpainChecked(),borndate)){
                view.FormStatus.BORNDATE=false;
                return setStatusWrong("BornDateStatus")
            }
            view.FormStatus.BORNDATE=true;
            return setStatusOk("BornDateStatus")
        }    

        const executer = () => {
            view.executeFunction("name",checkName);
            view.executeFunction("surname",checkSurname);
            view.executeFunction("address",checkAdress);
            view.executeFunction("postalcode",checkPostalCode)
            view.executeFunction("telephonenum",checkTelephoneNumber);
            view.executeFunction("mobilephonenum",checkMobilePhoneNumber);
            view.executeFunction("email",checkEmail);
            view.executeFunction("borndate",checkBornDate);
        }
    
    const init = (service,view) => {
        this.service = service;
        this.view = view;
       executer();
    }

   

    return {
        init
    }
})