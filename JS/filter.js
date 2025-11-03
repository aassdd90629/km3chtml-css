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
          // 避免重複點擊同一個按鈕
          if (btn.classList.contains('active')) return;
          
          // const activeItem = document.querySelector('.items .item.active');
          // if (activeItem) {
          //   activeItem.classList.remove('active');
          // } 
          // 可選鏈運算符 (Optional Chaining) 如果前面的值存在(不是 null 或 undefined),就繼續執行後面的操作
          document.querySelector('.items .item.active')?.classList.remove('active');  
          // 如果前面的值是 null 或 undefined,就停止執行,整個表達式返回 undefined
          btn.classList.add('active');
          
          const target = btn.dataset.name.toLowerCase();
          
          cards.forEach(card => {
            const type = card.dataset.name?.toLowerCase() || '';
            const match = target === 'all' || type === target;
            
            if (match) {
              card.classList.remove('hide');
              // 強制重排以重啟動畫
              void card.offsetWidth;
              // const _ = card.offsetWidth; 上面那行類似這個寫法 用來表示不需要的變數 與CSS動畫有關
              card.classList.add('show');
            } else {
              card.classList.remove('show');
              card.classList.add('hide');
            }
          });
        });
      });
    });