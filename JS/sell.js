      // 測試 
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
      })

      deliveryModal.addEventListener("click", (e) => {
        if(e.target == deliveryModal){
          deliveryModal.style.display = "none";
        }
      })

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
      })

      invoiceModal.addEventListener("click", (e) => {
          if(e.target == invoiceModal){
            invoiceModal.style.display = "none";
          }
      })