$('.hint').click(function(event) {
    event.stopPropagation()
    console.log($(event.target));
    if($(event.target).closest('[tab]')) {
      $(this).find('[tab]').each((i, item) => {
        $(item).removeClass('hint__tab_active');
      })

      $(event.target).closest('[tab]').addClass('hint__tab_active');

      $(this).children('[data-tab]').each((i, item) => {
        $(item).removeClass('active');

        if($(event.target).closest('[tab]').attr('tab') == $(item).attr('data-tab')) {
          $(item).addClass('active');
        }
      })
    }

})
