//Prevent Implicitly Setting a Global Object In Function Calls With "use strict"
//"use strict" at the top of a JavaScript code file, it will apply this rule
//(and other strict behaviors) to all functions
function looseyGoosey() {
    return this;
}
function noInferringAllowed() {
    "use strict";
    return this;
}
looseyGoosey() === window; //=> true
noInferringAllowed() === undefined; //=> true


