function renderProducts(products, containerId) {
    const output = document.getElementById(containerId);
    if (!output) return;

    if (!products || products.length === 0) {
        output.innerHTML = '<p>No products available.</p>';
        return;
    }

    output.innerHTML = products.map((product) => `
        <div class="mini-product">
            <strong>${product.name}</strong>
            <span>${product.category}</span>
            <small>$${Number(product.price).toFixed(2)}</small>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    const fetchButton = document.getElementById('loadProducts');

    if (fetchButton) {
        fetchButton.addEventListener('click', async () => {
            try {
                const response = await fetch('api/products.php?category=all');
                const payload = await response.json();
                renderProducts(payload.products || payload, 'fetchOutput');
            } catch (error) {
                document.getElementById('fetchOutput').innerHTML = '<p>Unable to load data.</p>';
            }
        });
    }
});
