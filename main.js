$(document).ready(function() {
    $('#tarefa-form').submit(function(e) {
        e.preventDefault();
        var tarefaNome = $('#tarefa-input').val();
        if (tarefaNome.trim() !== '') {
            $('#lista-tarefa').append('<li class="tarefa-item">' + tarefaNome + '</li>');
            $('#tarefa-input').val('');
        }
    });

    $(document).on('click', '.tarefa-item', function() {
        $(this).toggleClass('completed');
    });
});
