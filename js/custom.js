$(document).ready(function() {
    'use strict';
    renderJqGrird();
    jQuery("#list").setGridParam({
        pgButton: true
    }).trigger("reloadGrid");
})
var renderJqGrird = function() {
    $("#list").jqGrid({
        url: "../metadata.json",
        datatype: "json",
        mtype: "GET",
        colNames: ["No.", "Inv No", "Date", "Amount", "Tax", "Total", "Notes"],
        colModel: [{
            name: "No.",
            index: "No.",
            width: 35
        }, {
            name: "invid",
            index: "invid",
            width: 55
        }, {
            name: "invdate",
            index: "invdate",
            width: 90
        }, {
            name: "amount",
            index: "amount",
            width: 80,
            align: "right"
        }, {
            name: "tax",
            index: "tax",
            width: 80,
            align: "right"
        }, {
            name: "total",
            index: "total",
            width: 80,
            align: "right"
        }, {
            name: "note",
            index: "note",
            width: 150,
            sortable: false
        }],
        pager: "#pager",
        rowNum: 5,
        rowList: [5, 10, 15],
        sortname: "invid",
        sortorder: "desc",
        viewrecords: true,
        gridview: true,
        autoencode: true,
        caption: "My first grid",
        emptyrecords: "No records to view",
        loadonce: true,
        gridComplete: sortCol()
    })
    $("#list").jqGrid('navGrid', '#pager', {
        edit: true,
        add: true,
        del: true
    });
};
var sortCol = function() {

}
