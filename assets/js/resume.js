      $(document).ready(function(){
          $('#more').click(function(){
            $('.visible-mobile').toggleClass('visible-xs');
            $(this).toggleClass('glyphicon glyphicon-chevron-right');
            $(this).toggleClass('glyphicon glyphicon-chevron-left');
          });
      });