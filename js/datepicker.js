"use strict";
$(document).ready(function () {
    $('.datepicker').datepicker({
        format: "yyyy-mm-dd",
        todayBtn: true,
        clearBtn: true,
        orientation: "auto right",
        calendarWeeks: true,
        autoclose: true,
        todayHighlight: true,
        toggleActive: true,
    });

    if ($('.datepicker').val() == '') {
        $('.datepicker').datepicker("setDate", new Date());
    }
});