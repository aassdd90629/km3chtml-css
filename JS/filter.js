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