
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


document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.items .item');
  const cards   = document.querySelectorAll('.gallery .image');

  // 點分類按鈕
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // 切換 active 樣式
      document.querySelector('.items .item.active')?.classList.remove('active');
      btn.classList.add('active');

      // 篩選目標（轉小寫避免大小寫不一致）
      const target = btn.dataset.name.toLowerCase();

      cards.forEach(card => {
        const type = card.dataset.name?.toLowerCase() || '';
        const match = target === 'all' || type === target;

        // 顯示/隱藏
        if (match) {
          card.classList.remove('hide');

          // 觸發進場動畫（先移除再加上 show 以便每次都能播放）
          card.classList.remove('show');
          // 強制回流讓動畫重置
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