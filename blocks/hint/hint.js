$('[tab]').click(function(event) {

  $('[tab]').each((i, item) => {
    $(item).removeClass('hint__tab_active');
  })
  $(this).addClass('hint__tab_active');
  $('[data-tab]').each((i, item) => {

    $(item).removeClass('active');

    if($(this).attr('tab') == $(item).attr('data-tab')) {
      $(item).addClass('active');
    }
  })
})
