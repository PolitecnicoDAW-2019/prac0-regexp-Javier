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
    return document.getElementById("telehponenum").value;
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

const enableSendButton = () => {
    document.getElementById("sendbutton").removeAttribute("disabled");
}

const executeFunction = id => {
    document.getElementById(id).addEventListener('input',(element) => {
        if(!element.target.value.length >= 3 ){
            return false;
        }
        return true;
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
    executeFunction
}
})