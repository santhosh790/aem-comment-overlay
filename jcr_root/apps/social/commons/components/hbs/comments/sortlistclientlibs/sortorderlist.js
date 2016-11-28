/*
 *
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2016 Adobe Systems Incorporated
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
(function($CQ, _, Backbone, SCF) {
    "use strict";
    $CQ(document).ready(function() {
        SCF.getSortOrder = function() {
            var sortOrderList = [];

            sortOrderList.push({
                "text": CQ.I18n.get("Newest"),
                "value": "newest"
            });

            sortOrderList.push({
                "text": CQ.I18n.get("Oldest"),
                "value": "added"
            });

            sortOrderList.push({
                "text": CQ.I18n.get("Last Updated"),
                "value": "latestActivityDate_dt"
            });

            sortOrderList.push({
                "text": CQ.I18n.get("Most Viewed"),
                "value": "mostViewed"
            });

            sortOrderList.push({
                "text": CQ.I18n.get("Most Active"),
                "value": "mostActive"
            });

            sortOrderList.push({
                "text": CQ.I18n.get("Most Followed"),
                "value": "mostFollowed"
            });

            sortOrderList.push({
                "text": CQ.I18n.get("Most Liked"),
                "value": "mostLiked"
            });
            return sortOrderList;
        };
    });
})($CQ, _, Backbone, SCF);
