      document.addEventListener('DOMContentLoaded', () => {
        const carousel = document.getElementById('carouselExampleIndicators');
        const track = carousel.querySelector('.carousel-inner');
        const slides = carousel.querySelectorAll('.carousel-item');
        const prevBtn = carousel.querySelector('.carousel-control-prev');
        const nextBtn = carousel.querySelector('.carousel-control-next');
        const indicators = carousel.querySelectorAll('.carousel-indicators button');

        let current = 0;
        const total = slides.length;
        const interval = carousel.dataset.interval ? parseInt(carousel.dataset.interval) : 3500;
        let timer;

        // 更新畫面
        function goTo(index){
          current = (index + total) % total;
          track.style.transform = `translateX(-${current * 100}%)`;
          indicators.forEach(btn => btn.classList.remove('active'));
          indicators[current].classList.add('active');
        }

        // 自動播放
        function start(){
          stop();
          timer = setInterval(() => goTo(current + 1), interval);
        }
        function stop(){
          if(timer) clearInterval(timer);
        }
        // 下面這邊可以保留部分 上面的邏輯要改成無限輪播
        // 左右按鈕
        nextBtn.addEventListener('click', () => { goTo(current + 1); start(); });
        prevBtn.addEventListener('click', () => { goTo(current - 1); start(); });

        // 指示點點擊
        indicators.forEach((btn, i) => btn.addEventListener('click', () => {
          goTo(i);
          start();
        }));

        // 滑鼠暫停
        carousel.addEventListener('mouseenter', stop);
        carousel.addEventListener('mouseleave', start);

        // 初始化
        goTo(0);
        start();
      });

      document.addEventListener('DOMContentLoaded', () => {
        const buttons = document.querySelectorAll('.items .item');
        const cards   = document.querySelectorAll('.gallery .image');


        buttons.forEach(btn => {
          btn.addEventListener('click', () => {

            document.querySelector('.items .item.active')?.classList.remove('active');
            btn.classList.add('active');


            const target = btn.dataset.name.toLowerCase();

            cards.forEach(card => {
              const type = card.dataset.name?.toLowerCase() || '';
              const match = target === 'all' || type === target;

 
              if (match) {
                card.classList.remove('hide');


                card.classList.remove('show');

                void card.offsetWidth;
                card.classList.add('show');
              } else {
                card.classList.add('hide');
                card.classList.remove('show');
              }
            });
          });
        });
      });