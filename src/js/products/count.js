export function updateBasketCounter() {
  // Получаем текущий список товаров из localStorage
  const basketItems = JSON.parse(localStorage.getItem('basketItems')) || []
  // Обновляем счетчик
  const basketCount = document.querySelector('.basket-count__info')
  if (basketCount) {
    basketCount.textContent = basketItems.length.toString()
  }
}
