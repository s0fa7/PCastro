import { navigate } from "astro:transitions/client";

export default function Form() {
  return (
    <select onChange={(e) => navigate(e.target.value)}>
      <option value="/main">Гланая</option>
      <option value="/catalog">Каталог</option>
      <option value="/card">Карточка товара</option>
      <option value="/cartV1">Корзина</option>
      <option value="/cart">Пустая корзина</option>
      <option value="/wishlist">Избранное</option>
      <option value="/wishlist-none">Пусттое избранное</option>
      <option value="/CustomPC">Конфигуратор</option>
      <option value="/aboutUs">О нас</option>
      <option value="/contacts">Контакты</option>
      <option value="/news">Новости</option>
      <option value="/detalnews">Детальные новости</option>
      <option value="/promo">Акции</option>
      <option value="/detalpromo">Детальные акции</option>
      <option value="/delivery-payment">Доставка и оплата</option>
      <option value="/warranty-returns">Гарантия и возврат</option>
      <option value="/404">404</option>
    </select>
  );
}