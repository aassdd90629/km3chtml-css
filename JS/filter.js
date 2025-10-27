      // 篩選器
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