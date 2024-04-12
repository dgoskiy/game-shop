import React from 'react';
import s from './index.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { addItem, delItem, minusItem } from '../../redux/store/slices/cartSlice'

const CartItem = () => {
  const dispatch = useDispatch()
  const { items } = useSelector(state => state.cart)

  return (
    <div className={s.container}>
      <div className={s.cart}>
        {items.map(obj =>
          <div key={obj.id} className={s.cartItem}>
            <div className={s.gamesImg}
              style={{ backgroundImage: `url(${obj.img})` }}>
            </div>
            <div className={s.cartDetails}>
              <div className={s.cartName}>{obj.name}</div>
              <div className={s.cartDD}>{obj.dd ? 'Цифровая версия игры' : 'Диск'}</div>
            </div>
            <div className={s.cartCost}>{obj.cost * obj.count}</div>
            <div className={s.cartCount}>
              <div onClick={() => { dispatch(minusItem(obj)) }} className={s.minus}>-</div>
              <div className={s.count}>{obj.count}</div>
              <div onClick={() => { dispatch(addItem(obj)) }} className={s.plus}>+</div>
              <div onClick={() => { dispatch(delItem(obj)) }} className={s.cartDel}>Удалить</div>
            </div>
          </div>)}
      </div>
    </div >
  );
};

export default CartItem;
