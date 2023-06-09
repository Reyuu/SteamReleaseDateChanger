// ==UserScript==
// @name         Steam release date changer
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  No tears, only happy
// @author       Rey
// @match        https://store.steampowered.com/app/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/luxon/3.3.0/luxon.min.js
// @run-at document-idle
// ==/UserScript==

const INPUT_DATE_FORMAT = "d LLL, yyyy";
const OUTPUT_DATE_FORMAT = "yyyy-MM-dd";

function main(){
    var DateTime = luxon.DateTime;
    var field = document.querySelectorAll("#genresAndManufacturer")[0];
    var dateString = document.querySelector(".date").innerHTML;
    var newFormattedDate = DateTime.fromFormat(dateString, INPUT_DATE_FORMAT);
    newFormattedDate = newFormattedDate.toFormat(OUTPUT_DATE_FORMAT);

    field.innerHTML = field.innerHTML.replace(dateString, `${newFormattedDate}`);
    document.querySelector(".date").innerHTML = newFormattedDate;
}

(function() {
    'use strict';
    main();
})();