
// 讓下拉選單點擊展開/收起
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    // 阻止連結跳轉（例如「尋找商品」）
    e.preventDefault();
    e.stopPropagation();

    // 關掉其他展開中的選單
    document.querySelectorAll('.nav-btn.active').forEach(activeBtn => {
      if (activeBtn !== btn) activeBtn.classList.remove('active');
    });

    // 切換目前這一個
    btn.classList.toggle('active');
  });
});

// 點空白處收回
document.addEventListener('click', () => {
  document.querySelectorAll('.nav-btn.active').forEach(btn => {
    btn.classList.remove('active');
  });
});
