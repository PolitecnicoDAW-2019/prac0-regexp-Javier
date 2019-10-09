define(function(){


const getNameFieldValue = () => {
    return document.getElementById("name").value;
}

const getSurnameFieldValue = () => {
    return document.getElementById("surname").value;
}

const getAddressFieldValue = () => {
    return document.getElementById("address").value;
}

const isSpainChecked = () => {
    return document.getElementById("spainButton").checked;
}

const getPostalCodeFieldValue = () => {
    return document.getElementById("postalcode").value;
}

const getTelephoneNumberFieldValue = () => {
    return document.getElementById("telephonenum").value;
}

const getMobilePhoneNumberFieldValue = () => {
    return document.getElementById("mobilephonenum").value;
}

const getEmailFieldValue = () => {
    return document.getElementById("email").value;
}

const getBornDateFieldValue = () => {
    return document.getElementById("borndate").value;
}

const setStatus = (StatusId,icon) => {
    document.getElementById(StatusId).className = icon;
}
const FormStatus = {
    NAME:false,
    SURNAME:false,
    ADDRESS:false,
    POSTALCODE:false,
    TELEPHONE:false,
    MOBILE:false,
    EMAIL:false,
    BORNDATE:false
}
const compareStatus = object => {
    if(object.NAME 
        && object.SURNAME 
        && object.ADDRESS
        && object.POSTALCODE
        && object.TELEPHONE
        && object.MOBILE
        && object.EMAIL
        && object.BORNDATE){
            return true
        }
    return false;
}

const enableSendButton = () => {
    if(compareStatus(FormStatus)){
   return document.getElementById("sendbutton").removeAttribute("disabled");}
   return document.getElementById("sendbutton").setAttribute("disabled",true);
}


const executeFunction = (id,funct) => {
    document.getElementById(id).addEventListener('input', element => {
        if(element.target.value.length >= 3){
            enableSendButton();
            funct();
        }
    })
}

return{
    getNameFieldValue,
    getSurnameFieldValue,
    getAddressFieldValue,
    isSpainChecked,
    getPostalCodeFieldValue,
    getTelephoneNumberFieldValue,
    getMobilePhoneNumberFieldValue,
    getEmailFieldValue,
    getBornDateFieldValue,
    setStatus,
    enableSendButton,
    executeFunction,
    FormStatus
}
})