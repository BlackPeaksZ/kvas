document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const products = document.querySelectorAll('.product-card');

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                products.forEach(product => {
                    if (filterValue === 'all') {
                        product.style.display = '';
                    } else {
                        const category = product.getAttribute('data-category');
                        if (category === filterValue) {
                            product.style.display = '';
                        } else {
                            product.style.display = 'none';
                        }
                    }
                });
            });
        });
    }
    const modal = document.getElementById('productModal');
    const modalClose = document.querySelector('.modal-close');
    const modalImg = document.getElementById('modalImg');
    const modalName = document.getElementById('modalName');
    const modalDesc = document.getElementById('modalDesc');
    const modalPrice = document.getElementById('modalPrice');
    const modalOrderBtn = document.getElementById('modalOrderBtn');

    const detailButtons = document.querySelectorAll('.btn-outline');
    if (detailButtons.length > 0) {
        detailButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();

                const imgSrc = button.getAttribute('data-img');
                const name = button.getAttribute('data-name');
                const desc = button.getAttribute('data-desc');
                const price = button.getAttribute('data-price');

                if (modalImg) modalImg.src = imgSrc;
                if (modalName) modalName.textContent = name;
                if (modalDesc) modalDesc.textContent = desc;
                if (modalPrice) modalPrice.textContent = price;

                if (modal) modal.style.display = 'flex';
            });
        });
    }
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            if (modal) modal.style.display = 'none';
        });
    }
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
    if (modalOrderBtn) {
        modalOrderBtn.addEventListener('click', () => {
            alert('Спасибо за заказ! Мы свяжемся с вами.');
            if (modal) modal.style.display = 'none';
        });
    }
});