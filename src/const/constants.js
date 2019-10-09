define(function(){


const REGEXP = {
        NAME: new RegExp("^[A-Z][a-zA-Z]{2,128}$"),

        SURNAME: new RegExp("^[a-z A-Z]{3,128}$"),
        
        ADDRESS: new RegExp("^[A-Z]+[/]+[A-Z a-z]+[,]+([0-9]{2})$"),
        
        ESCP: new RegExp("[0-9]{5}"),
        
        USACP: new RegExp("^([0-9]{5}(?:-[0-9]{4}))?$"),
        
        ESTEL: new RegExp("(^\\+[3]{1}[4]{1}[8-9]{1})[0-9]{8}|(^[0]{2}[3]{1}[4]{1}[8-9]{1})[0-9]{8}|(^[8-9]{1})[0-9]{8}$"),
        
        USATEL: new RegExp("[(]|\d\s|\s|\d{3}|[)]|[-]\d{3}|[-]|\d"),
        
        USAMOBILENUM: new RegExp("[(]|\d\s|\s|\d{3}|[)]|[-]\d{3}|[-]|\d"),
        
        ESMOBILENUM: new RegExp("^[6-7]{1}[0-9]{8}$"),
        
        EMAIL: new RegExp("^.{2,256}@.{2,256}\..{2,256}"),
        
        ESBORNDATE:new RegExp(/^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/),
        
        USABORNDATE:new RegExp(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/)
}

const FONTAWESOME = {
    WRONG : "fas fa-times-circle",
    CORRECT :"fas fa-check-circle"
}

return{
    REGEXP,
    FONTAWESOME
}

})