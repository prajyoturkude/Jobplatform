jQuery(function($) {

    $(document).on('click', '.cat_tab:not(.current)', function(event) {
        var me = $(this);
        $(this).addClass("current").siblings().removeClass("current");
        wa_tab_cat(me);
    });

  function wa_tab_cat(me) {
        var cat_id = me.data('id');
        var container = me.parent().next();
        var rooty = me.parent().parent();
        var thumb = rooty.data('thumb');
        var posts = rooty.data('posts');
        var column = rooty.data('column');
        var template = rooty.data('template');
        var excerpt = rooty.data('excerpt');
        container.append('<div class="load-wrap"><div class="loader"></div></div>');
        rooty.attr('data-catid',cat_id);
        //console.log(template);
        //alert(meta);
        data = {
            'action':'eq_tabcat',
            'catid':cat_id,
            'thumb':thumb,
            'column': column,
            'template': template,
            'excerpt': excerpt,
            'posts':posts,
            'posts': posts,
            'page': '1',
        }; 
        $.ajax({
            url: _tutorobject.ajaxurl, // AJAX handler
            data: data,
            type: 'POST',
            success: function(data) {
                container.removeClass('loader');              
                if (data) {
                    container.html(data);
                    var max = container.find('.xyz').data('max');
                    rooty.attr('data-max', max);
                    //misha_loadmore_params.current_page='1';
                    //console.log(misha_loadmore_params.current_page);

/*                    if ($('.post-container').hasClass('mason')) {
                        var contain = $('.post-container');
                        contain.imagesLoaded(function() {
                            contain.masonry({
                                itemSelector: '.post',
                                isAnimated: false
                            });
                        });
                        contain.masonry( 'reloadItems' );
                        contain.masonry( 'layout' );
                    }*/

                    if ('1' == max) {
                        rooty.find('.ash_loadmore').addClass('disabled');
                    } else {
                        rooty.find('.ash_loadmore').removeClass('disabled');
                    }

                }
            },


        });

    }
  
});