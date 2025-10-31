      console.log('dropdown.js loaded!');

      // 左側 下拉選單
      $(function () {
        $('.fixlistone').click(function(){
                $(this).nextAll().slideToggle(500)
            }).nextAll().hide()
      });
      
      $(function(){
        // 設定第一張小圖為預設大圖
        let firstImg = $('.img-small').first()
        firstImg.addClass('active').fadeTo(0, 1);

        $('#imgbig').attr('src', firstImg.attr('src'));

        // 小圖換大圖
        $('.img-small').mouseover(function(){
          let picSrc = $(this).attr('src');
          $('#imgbig')
            .stop(true, true)         
            .css('opacity', 0)        
            .attr('src', picSrc)
            .animate({ opacity: 1 }, 400);
          $(this)
           .addClass('active')
           .fadeTo(200, 1)
           .siblings()
           .removeClass('active')
           .fadeTo(200, 0.7);
        });

        // 滑鼠移入時的效果
        $('.img-small').mouseenter(function(){
          $(this).stop(true).fadeTo(300, 1);
          });
        
        $('.img-small').mouseout(function(){
          if(!$(this).hasClass('active')){
            $(this).stop(true).fadeTo(300, 0.5);
            };
        });

      });


