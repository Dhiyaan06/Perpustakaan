$('#search').on('keyup', function() {
    var value = $(this).val().toLowerCase();
    $('#book-list tr').filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
});