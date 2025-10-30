// 商品資料陣列
const products = [
    {
        sku: 'M3',
        name: 'ASUS TUF Gaming M3 Gen II 電競滑鼠',
        price: 2990,
        image: 'img/prouct/mouse_TUF.jpg',
        link: 'product-detail.html'
    },
    {
        sku: 'K71M',
        name: 'i-Rocks 艾芮克irocks K71M RGB背光 白色機械式鍵盤-Gateron青軸',
        price: 3900,
        image: 'img/prouct/keyboard2.jpg',
        link: 'product-detail.html'
    },
    {
        sku: 'K104H',
        name: 'K104H RGB 有線 磁軸 機械鍵盤-鈦晶藍',
        price: 4900,
        image: 'img/prouct/keyboard4.jpg',
        link: 'product-detail.html'
    },
];

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

// 更新購物車數量顯示
function updateCartCount() {
    const cartCountElement = document.getElementById('cartCount');
    if (cartCountElement) {

        const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountElement.textContent = totalQuantity;
        

        if (totalQuantity > 0) {
            cartCountElement.classList.add('has-items');
        } else {
            cartCountElement.classList.remove('has-items');
        }
    }
}


function initialCart() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(function(card) {
        const sku = card.getAttribute('data-sku');
        const cartButton = card.querySelector('.icon-cart button');
        
        if (cartButton) {
            cartButton.addEventListener('click', function(e) {
                e.preventDefault();
                addToCart(sku);
            });
        }
    });
}

// 加入購物車
function addToCart(sku) {

    const product = products.find(function(p) {
        return p.sku === sku;
    });
    
    if (!product) {
        console.error('找不到商品: ' + sku);
        return;
    }
    

    const existingItem = cart.find(function(item) {
        return item.sku === sku;
    });
    
    if (existingItem) {

        existingItem.quantity++;
    } else {

        cart.push({
            sku: product.sku,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    

    updateCart();
    
    showNotification(product.name + ' 已加入購物車！');
    
    console.log('目前購物車:', cart);
}

// 顯示加入購物車通知
function showNotification(message) {

    let notification = document.getElementById('cartNotification');
    // 可以利用動態新增 就不用在html上寫了 跟登入頁面不同 並非要一直顯示在畫面上
    // 就不用特別寫html裡了然後用秒數去讓它消失
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'cartNotification';
        notification.className = 'cart-notification';
        document.body.appendChild(notification);
    }
    
    notification.textContent = message;
    notification.classList.add('show');
    

    setTimeout(function() {
        notification.classList.remove('show');
    }, 2000);
}

// 移除購物車商品
function removeFromCart(sku) {
    const index = cart.findIndex(item => item.sku === sku);
    if (index > -1) {
        const removedItem = cart[index];
        cart.splice(index, 1);
        updateCart();
        showNotification(removedItem.name + ' 已從購物車移除');
    }
}

// 更新商品數量
function updateQuantity(sku, newQuantity) {
    const item = cart.find(item => item.sku === sku);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(sku);
        } else {
            item.quantity = newQuantity;
            updateCart();
        }
    }
}

// 清空購物車
function clearCart() {
    if (confirm('確定要清空購物車嗎?')) {
        cart = [];
        updateCart();
        showNotification('購物車已清空');
    }
}


function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// 頁面載入時初始化
document.addEventListener('DOMContentLoaded', function() {

    initialCart();
    
    updateCartCount();
    
    console.log('購物車系統已初始化');
    console.log('目前購物車:', cart);
});