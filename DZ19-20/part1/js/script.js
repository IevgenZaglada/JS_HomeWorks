(function($) {
    $(function() {
        $('.jcarousel').jcarousel();

        $('.jcarousel-pagination')
        .jcarouselPagination({
            item: function(page) {
            return '<a class = "jcarousel_page" href="#' + page + '"></a>';
            }
        })
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();


        var $allAccordions = $('.banner__block_accordion_text');
        var $allAccordionItems = $('.banner__block_accordion_menu');
          $allAccordionItems.on('click', function() {
            if($(this).hasClass('open'))
            {
              $(this).removeClass('open');
              $(this).next().slideUp("slow");
            }
            else
            {
            $allAccordions.slideUp("slow");
            $allAccordionItems.removeClass('open');
            $(this).addClass('open');
            $(this).next().slideDown("slow");
            return false;
            }
          });

        
            var sortedSkills = _.sortBy(_.uniq(_.flatten(_.map(array, 'skills'))));
            console.log('Массив скиллов всех людей без повторений в алфавитном порядке = ', sortedSkills);

            var sortedNames = _.map(_.sortBy(array, 'friends'), 'name');
            console.log('Массив людей по количеству друзей = ', sortedNames);  

           
            var sortedFriends = _.uniq(_.map(_.flatten(_.map(array, 'friends')), 'name'));
            console.log('Массив всех друзей всех пользователей = ', sortedFriends);
    });
})(jQuery);