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

      $(function () {
        $('.img-small').mouseenter(function(){
          $(this).stop(true).fadeTo(300, 1)
          $('.img-smal').not(this).fadeTo(300, 0.5)
          });
        $('.img-small').mouseout(function(){
          $(this).fadeTo(300, 0.5)
        });
        
      });
