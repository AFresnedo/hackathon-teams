$(document).ready(function() {
  console.log('ajax reached on this page');

  var delTeam = $('.del-team').click(function(e) {
    e.preventDefault();

    var url = $(this).attr('href');
    console.log('url recieved is', url);

    $.ajax({
      method: 'DELETE',
      url: url
    }).done(function(data) {
      console.log('delete processed by ajax, data was:', data);
      window.location = '/teams';
    }).fail(function(err) {
      console.log('error processing delete was:', err);
    });

  });

  var editTeamPg = $('.edit-team-pg').click(function(e) {
    e.preventDefault();

    // get url from form
    var url = $(this).attr('action');
  });


  var editTeam = $('#edit-team').click(function(e) {
    e.preventDefault();

    var url = $(this).attr('action');
    // TODO check syntax
    var data = $(this).serialize(data);
    console.log('url is', url);
    console.log('data is', data);
  });

});
