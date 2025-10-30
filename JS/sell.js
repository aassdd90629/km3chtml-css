      // 運送方式
      const deliveryModal = document.querySelector("#deliveryModal");
      const openDelivery = document.querySelector("#openDeliveryModal");
      const closeDelivery = document.querySelector("#closeDeliveryModal");
      const confirmDelivery = document.querySelector("#confirmDeliveryModal");
      


      openDelivery.addEventListener("click", () => {
        deliveryModal.style.display = "block";
      });

      closeDelivery.addEventListener("click", () => {
        deliveryModal.style.display = "none";
      });

      confirmDelivery.addEventListener("click", () => {
        deliveryModal.style.display = "none";
      });

      deliveryModal.addEventListener("click", (e) => {
        if(e.target == deliveryModal){
          deliveryModal.style.display = "none";
        }
      });

      // 發票
      const invoiceModal = document.querySelector("#invoiceModal");
      const openInvoice = document.querySelector("#openInvoiceModal");
      const closeInvoice = document.querySelector("#closeInvoiceModal");
      const confirmInvoice = document.querySelector("#confirmInvoiceModal");
      

      openInvoice.addEventListener("click", () => {
        invoiceModal.style.display = "block";
      });

      closeInvoice.addEventListener("click", () => {
        invoiceModal.style.display = "none";
      });

      confirmInvoice.addEventListener("click", () => {
        invoiceModal.style.display = "none";
      });

      invoiceModal.addEventListener("click", (e) => {
          if(e.target == invoiceModal){
            invoiceModal.style.display = "none";
          }
      });


  // 這裡是關鍵

  // 從 localStorage 載入購物車
    function loadCart() {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            return JSON.parse(savedCart);
        }
        return [];
    }

    // 儲存購物車到 localStorage
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // 購物車陣列
    let cart = loadCart();

    // 更新購物車(統一呼叫點)
    function updateCart() {
        saveCart(); 
        updateCartCount(); 
        

        if (typeof renderCartPage === 'function') {
            renderCartPage();
        }
    }


    function updateSellSummary() {
      const subtotalsellAmount = document.getElementById('subtotalsellAmount');
      const totalsellAmount = document.getElementById('totalsellAmount');
      const checkoutsellsubtotal = document.getElementById('checkoutsellsubtotal');

      const total = cart.reduce(function(sum, item){
        return sum + (item.price * item.quantity);
      }, 0);

      if(subtotalsellAmount){
        subtotalsellAmount.innerText = 'NT$ ' + total.toLocaleString();
      }

      if (totalsellAmount){
        totalsellAmount.innerText = 'NT$ ' + total.toLocaleString();
      }

      if (checkoutsellsubtotal){
        checkoutsellsubtotal.innerText = 'NT$ ' + total.toLocaleString();
      }

      
    }

updateSellSummary();
console.log(cart);
