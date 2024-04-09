import React from 'react';
import s from './index.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../redux/store/cartSlice'


const CartItem = () => {
  const dispatch = useDispatch()
  const { items } = useSelector(state => state.cart)

  return (
    <div>
      <a href="/">Главная</a>

      {JSON.stringify(items)}

      <div className={s.cartItem}>
        <div className={s.itemDetails}>
          <p>name</p>
          <p>subtext</p>
        </div>
        <div className={s.quantityControls}>
          <button className={s.quantityButton}>-</button>
          <span>quantity</span>
          <button className={s.quantityButton}>+</button>
        </div>
        <p className={s.totalPrice}>Total: $quantity * price</p>
        <button className={s.deleteButton}>Delete</button>
      </div>
    </div>
  );
};

export default CartItem;