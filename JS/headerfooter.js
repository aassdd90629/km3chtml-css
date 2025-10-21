    // fetch('Login.html')
    //   .then(res => res.text())
    //   .then(data => {
    //     document.querySelector('person').innerHTML = data;
    //   });

    fetch('header.html')
      .then(res => res.text())
      .then(data => {
        document.querySelector('header').innerHTML = data;

        // ⚡ 把登入視窗從 header 移到 body
        const loginModal = document.querySelector('#LoginModal');
        if (loginModal) {
          document.body.appendChild(loginModal);
        }
      });


    fetch('footer.html')
      .then(res => res.text())
      .then(data => {
      document.querySelector('footer').innerHTML = data;
      });


    document.addEventListener('click', (e) => {
      const LoginModal = document.querySelector('#LoginModal');
      if (!LoginModal) return;


      if (e.target.closest('#openLoginModal')) {
        LoginModal.style.display = 'flex';
      }

      if (e.target.closest('#closeLoginModal, #confirmLoginModal')) {
        closeModal();
      }

      // 點外面關閉
      if (e.target === LoginModal) {
        closeModal();
      }

      function closeModal() {
        LoginModal.style.display = 'none';
      }
    });  