define(function(){


const getNameFieldValue = id => {
    return document.getElementById(id).value;
}

const getSurnameFieldValue = id => {
    return document.getElementById(id).value;
}

const getAddressFieldValue = id => {
    return document.getElementById(id).value;
}

const isSpainChecked = id => {
    return document.getElementById(id).checked;
}

const getPostalCodeFieldValue = id => {
    return document.getElementById(id).value;
}

const getTelephoneNumberFieldValue = id => {
    return document.getElementById(id).value;
}

const getMobilePhoneNumberFieldValue = id => {
    return document.getElementById(id).value;
}

const getEmailFieldValue = id => {
    return document.getElementById(id).value;
}

const getBornDateFieldValue = id => {
    return document.getElementById(id).value;
}

const setStatus = (StatusId,icon) => {
    document.getElementById(StatusId).className = icon;
}

const enableSendButton = () => {
    document.getElementById("sendbutton").removeAttribute("disabled");
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
    enableSendButton
}
})