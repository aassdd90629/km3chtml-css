// cart.js - 購物車頁面專用

function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        return JSON.parse(savedCart);
    }
    return [];
}


function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}


let cart = loadCart();

// 購物車頁面
function renderCartPage() {
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const emptyCart = document.getElementById('emptyCart');
    const cartSummary = document.getElementById('cartSummary');
    const cartItemsWrapper = document.getElementById('cartItemsWrapper');
    

    if (cart.length === 0) {
        if (emptyCart) emptyCart.style.display = 'block';
        if (cartItemsContainer) cartItemsContainer.style.display = 'none';
        if (cartSummary) cartSummary.style.display = 'flex';
        if (cartItemsWrapper) cartItemsWrapper.style.display = 'none';
        const btncheckout = document.querySelector('.btn-checkout');
        if (btncheckout) {
            btncheckout.addEventListener('click', function( e ){
                e.preventDefault();
                alert('未新增任何商品');
            });
        }
        updateCartSummary();
        console.log(cart.length);
        return;
    }
    
 
    if (emptyCart) emptyCart.style.display = 'none';
    if (cartItemsContainer) cartItemsContainer.style.display = 'block';
    if (cartSummary) cartSummary.style.display = 'flex';
    if (cartItemsWrapper) cartItemsWrapper.style.display = 'block';


    
    cartItemsWrapper.innerHTML = '';
 
    const template = document.getElementById('cart-item-template');
    

    cart.forEach(function(item) {

        const clone = template.content.cloneNode(true);
        

        const cartItem = clone.querySelector('.cart-item');
        cartItem.setAttribute('data-sku', item.sku);
        

        const img = clone.querySelector('img');
        img.src = item.image;
        img.alt = item.name;
        

        const itemName = clone.querySelector('.item-name');
        itemName.textContent = item.name;
        

        const priceValue = clone.querySelector('.price-value');
        const itemTotal = item.price * item.quantity;
        priceValue.textContent = 'NT$ ' + itemTotal.toLocaleString();
        

        const qtyInput = clone.querySelector('.qty-input');
        qtyInput.value = item.quantity;
        

        const qtyIncrease = clone.querySelector('.qty-increase');
        qtyIncrease.addEventListener('click', function() {
            updateQuantity(item.sku, item.quantity + 1);
        });
        

        const qtyDecrease = clone.querySelector('.qty-decrease');
        qtyDecrease.addEventListener('click', function() {
            if (item.quantity > 1) {
                updateQuantity(item.sku, item.quantity - 1);
            } else {
                if (confirm('確定要移除此商品嗎?')) {
                    removeFromCart(item.sku);
                }
            }
        });
        

        const removeBtn = clone.querySelector('.remove-btn');
        removeBtn.addEventListener('click', function() {
            if (confirm('確定要移除 ' + item.name + ' 嗎?')) {
                removeFromCart(item.sku);
            }
        });
        
        cartItemsWrapper.appendChild(clone);
    });
    

    updateCartSummary();
}

// 更新購物車總計
function updateCartSummary() {
    const subtotalElement = document.getElementById('subtotalAmount');
    const totalElement = document.getElementById('totalAmount');
    const checkoutElement = document.getElementById('checkoutsubtotal');

    const total = cart.reduce(function(sum, item) {
        return sum + (item.price * item.quantity);
    }, 0);
    

    if (subtotalElement) {
        subtotalElement.innerText = 'NT$ ' + total.toLocaleString();
    }
    if (totalElement) {
        totalElement.innerText = 'NT$ ' + total.toLocaleString();
    }
    if (checkoutElement) {
        checkoutElement.innerText = 'NT$ ' + total.toLocaleString();
    }

}

// 更新商品數量
function updateQuantity(sku, newQuantity) {
    const item = cart.find(function(item) {
        return item.sku === sku;
    });
    
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(sku);
        } else {
            item.quantity = newQuantity;
            saveCart(cart);
            renderCartPage();
            updateCartCount();
        }
    }
}

// 從購物車移除商品
function removeFromCart(sku) {
    const index = cart.findIndex(function(item) {
        return item.sku === sku;
    });
    
    if (index > -1) {
        cart.splice(index, 1);
        saveCart(cart);
        renderCartPage();
    }

}






document.addEventListener('DOMContentLoaded', function() {
    console.log('購物車頁面已載入');
    console.log('目前購物車:', cart);
    
    renderCartPage();
    updateCartSummary();

    const couponBtn = document.querySelector('.coupon-btn');
    if (couponBtn) {
        couponBtn.addEventListener('click', function() {
            alert('優惠碼功能開發中...');
        });
    }
});