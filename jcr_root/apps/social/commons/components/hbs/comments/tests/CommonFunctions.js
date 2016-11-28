/*
 *
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2014 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */
var findComment = function(text) {
    var found = false;
    hobs.window.$(".scf-js-comment-msg").each(function(i, item) {
        if ($(item).text().indexOf(text) != -1) {
            found = true;
            return;
        }
    });
    return found;
};

var configureComponent = function(componentPath, configuration) {
    console.debug('Trying to configure the component @ %s', componentPath);
    var configData;
    hobs.window.$.ajax(componentPath + ".json", {
        async: false
    }).done(function(data) {
        configData = data;
    });
    console.debug('Overlaying: %o \\n with requested config: %o', configData, configuration);
    console.debug('Got Base Config Data: %o', configData);
    for (var prop in configuration) {
        configData[prop] = configuration[prop];
    }
    console.debug('Setting component\'s configuration to: %o', configData);

    hobs.window.$.ajax(commentSystemPath + ".json", {
        async: false,
        data: configData,
        type: "POST"
    });
};
