import { basketList } from '../selectors/selectors'
import { generateProductCardHTML } from './productCard'
import { updateBasketCounter } from './count'

export function addToBasketAndUpdateLocalStorage(product) {
  const basketItems = JSON.parse(localStorage.getItem('basketItems')) || []

  // Добавляем товар в корзину
  basketItems.push(product)

  // Сохраняем обновленный список товаров в localStorage
  localStorage.setItem('basketItems', JSON.stringify(basketItems))
  // Обновляем счетчик товаров в корзине
  updateBasketCounter()
}

export function updateBasketFromLocalStorage() {
  // Получаем текущий список товаров из localStorage
  const basketItems = JSON.parse(localStorage.getItem('basketItems')) || []
  // Очищаем корзину перед обновлением
  basketList.innerHTML = ''
  // Вставляем каждый товар из localStorage в корзину
  basketItems.forEach((product) => generateProductCardHTML(product, basketList, false))
  // Обновляем счетчик товаров в корзине
  updateBasketCounter()
}
