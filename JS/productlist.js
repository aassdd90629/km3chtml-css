      console.log('dropdown.js loaded!');
      // const opendrown = document.querySelector("#drownlistone");
      // const uldrownlist = opendrown.querySelector("#listone");

      // opendrown.addEventListener('click', () => {
      //   if (uldrownlist.style.display === "block") {
      //     uldrownlist.style.display = "none";
      //   } else {
      //     uldrownlist.style.display = "block";
      //   }
      // });

      // const opendrowntwo = document.querySelector("#drownlisttwo");
      // const uldrownlisttwo = opendrowntwo.querySelector("#listtwo" );

      // opendrowntwo.addEventListener('click', () => {
      //   if (uldrownlisttwo.style.display === "block") {
      //     uldrownlisttwo.style.display = "none";
      //   } else {
      //     uldrownlisttwo.style.display = "block";
      //   }
      // });

      // const opendrownthree = document.querySelector("#drownlistthree");
      // const uldrownlistthree = opendrownthree.querySelector("#listthree");

      // opendrownthree.addEventListener('click', () => {
      //   if (uldrownlistthree.style.display === "block") {
      //     uldrownlistthree.style.display = "none";
      //   } else {
      //     uldrownlistthree.style.display = "block";
      //   }
      // });
      // 用 $(this).next('ul').slideToggle(800) 會更精準
      // 左側 下拉選單
      $(function () {
        $('.fixlistone').click(function(){
                $(this).nextAll().slideToggle(500)
            }).nextAll().hide()

      });
      // $(function(){
      //   // 這邊應該要直接綁在img-small上 老師的範例是有用figure包起來然後去選擇 children
      //     $('.img-small').click(function(){
      //     let picSrc = $(this).attr('src')
      //       $('#imgbig').attr('src', picSrc);
      //     });      
      // });


      // $(function () {
      //   $('.img-small').mouseenter(function(){
      //     $(this).stop(true).fadeTo(300, 1)
      //     $('.img-small').not(this).fadeTo(300, 0.5)
      //     });
      //   $('.img-small').mouseout(function(){
      //     $(this).fadeTo(300, 0.5)
      //   });
        
      // });
      $(function(){
        // 設定第一張小圖為預設大圖
        let firstImg = $('.img-small').first()
        // 先把第一張圖加上 active
        firstImg.addClass('active').fadeTo(0, 1);
        // 設定第一張圖為大圖
        $('#imgbig').attr('src', firstImg.attr('src'));

        // 小圖換大圖
        // 用 mouseover 會比較好 手機板似乎會直接轉成click
        $('.img-small').mouseover(function(){
          let picSrc = $(this).attr('src');
          $('#imgbig')
            .stop(true, true)         
            .css('opacity', 0)        
            .attr('src', picSrc)
            // jQ 的第14個html animate   
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
