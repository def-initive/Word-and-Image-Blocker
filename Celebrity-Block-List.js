// ==UserScript==
// @name         Celebrity-Block-List Install this to have an ever-growing list of celebrities to block
// @namespace    https://github.com/def-initive/
// @version      1.1
// @description  Load celebrities into the blockedPhrases variable.
// @author       def-initive
// @match        *://*/*
// @exclude      *://github.com/*
// @exclude      *://greasyfork.org/*
// @grant        none
// @license      MIT
// ==/UserScript==

(function () {
    'use strict';

    // Function to update blockedPhrases in local storage
    function updateBlockedPhrases(newPhrases) {
        // Load existing phrases from local storage
        var storedPhrases = localStorage.getItem('blockedPhrases');
        var existingPhrases = storedPhrases ? JSON.parse(storedPhrases) : [];

        // Merge existing and new phrases, removing duplicates
        var updatedPhrases = Array.from(new Set(existingPhrases.concat(newPhrases)));

        // Save the updated phrases to local storage
        localStorage.setItem('blockedPhrases', JSON.stringify(updatedPhrases));
    }

    // Add your list of names and phrases here
    var customPhrases = [
        'taylor swift','taylorswift','taytay','swiftie','kanye','yeezy','kardashian',
        // Add more names and phrases as needed
    ];

    // Update blockedPhrases in local storage with the custom phrases
    updateBlockedPhrases(customPhrases);
})();
