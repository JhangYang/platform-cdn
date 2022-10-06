"use strict";
$(document).ready(function () {
    var t = $('#datatables').DataTable({
        "searching": true,
        "paging": true,
        "ordering": true,
        "sPaginationType": "full_numbers",
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        "pageLength": 10,
        "processing": true,
        "serverSide": false,
        "stateSave": true,
        "destroy": true,
        "info": true,
        "autoWidth": true,
        "scrollCollapse": false,
        // "scrollY": "200px",
        // "scrollX": "200px",
        dom: 'Bflrtip',
        // "data": [],
        // "columns": [],
        language: {
            search: "Search in table:",
            // url: "https://cdn.datatables.net/plug-ins/1.12.1/i18n/zh-HANT.json"
        },
        // columnDefs: [],
        // rowCallback: [],
        
        // // order: ['0', 'asc'],
        // dom: 'Bfrtip',
        // buttons: [
        //     'csvHtml5',
        //     'excelHtml5',
        //     'pdfHtml5',
        // ],
    });

    t.on('order.dt search.dt', function () {
        let i = 1;

        t.cells(null, 0, { search: 'applied', order: 'applied' }).every(function (cell) {
            this.data(i++);
        });
    }).draw();
});