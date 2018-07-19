$(".hint__tab").click(function(){
    $(this).closest('.hint').find(".hint__tab").removeClass('hint__tab_active');
    $(this).addClass("hint__tab_active");

    $(this).closest('.hint').find('[data-tab]').removeClass('active');
    $(this).closest('.hint').find('[data-tab=' + $(this).attr('tab') + ']').addClass('active')
})
