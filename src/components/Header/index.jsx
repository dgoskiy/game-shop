import { Link, useLocation } from 'react-router-dom'
import React from 'react'
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux'
import s from './index.module.css'
import { useSelector } from 'react-redux'
import { setSearch } from '../../redux/store/slices/filterSlice'

const Header = () => {
    const { pathname } = useLocation()
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const testDebounce = debounce((event) => {
        dispatch(setSearch(event.target.value))
    }, 1000)
    return (
        <div className={s.header}>
            <input className={s.search} placeholder={`Искать игры`} onChange={testDebounce} type="text" />
            <div className={s.parent_cart}>
                {pathname !== '/cart' && <Link to="/cart" className={s.cart}>
                    {/* <svg className={s.cart_child} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M0 1h4.764l.545 2h18.078l-3.666 11H7.78l-.5 2H22v2H4.72l1.246-4.989L3.236 3H0zm7.764 11h10.515l2.334-7H5.855zM4 21a2 2 0 1 1 4 0a2 2 0 0 1-4 0m14 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></path></svg> */}
                    {/* <svg className={s.cart_child} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M10.023 2a1.75 1.75 0 0 0 0 3.5h4a1.75 1.75 0 1 0 0-3.5zM3.887 16.205C3.029 12.773 2.6 11.058 3.5 9.904C4.4 8.75 6.17 8.75 9.708 8.75h4.63c3.538 0 5.306 0 6.207 1.154c.901 1.153.472 2.87-.386 6.301c-.546 2.183-.818 3.274-1.632 3.91c-.814.635-1.939.635-4.189.635h-4.63c-2.25 0-3.375 0-4.189-.635c-.814-.636-1.087-1.727-1.632-3.91" opacity={0.5}></path><path fill="currentColor" fillRule="evenodd" d="m4.647 9.118l2.857 4.106l3.728-4.474h1.536l3.728 4.474l2.865-4.12c.507.172.891.425 1.184.8l.045.06l-3.098 4.455l2.392 2.87c-.183.7-.347 1.252-.54 1.696l-2.74-3.29l-3.517 5.055h-2.175l-3.516-5.054l-2.71 3.252c-.19-.446-.353-1.001-.535-1.7l2.357-2.83l-3.076-4.421c.022-.032.045-.063.068-.093c.286-.366.659-.616 1.147-.786M12 19.687L8.392 14.5L12 10.17l3.607 4.33z" clipRule="evenodd"></path><path fill="currentColor" d="M15.604 4.502a1.743 1.743 0 0 0 .002-1.501c.683.005 1.216.036 1.691.222a3.25 3.25 0 0 1 1.426 1.09c.367.494.54 1.127.777 1.999l.046.17l.513 2.963c-.409-.282-.936-.45-1.618-.55l-.36-2.087c-.285-1.04-.388-1.367-.562-1.601a1.75 1.75 0 0 0-.768-.587c-.22-.086-.485-.11-1.147-.118M8.441 3.001a1.743 1.743 0 0 0 .002 1.501c-.662.007-.927.032-1.147.118a1.75 1.75 0 0 0-.768.587c-.174.234-.277.561-.561 1.6l-.361 2.089c-.682.1-1.209.267-1.618.548l.513-2.962l.046-.17c.237-.872.41-1.505.777-2A3.25 3.25 0 0 1 6.75 3.224c.475-.186 1.008-.217 1.691-.222"></path></svg> */}
                    {/* <svg className={s.cart_child} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><path fill="currentColor" d="M19.5 22a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-10 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></path><path d="M5 4h17l-2 11H7zm0 0c-.167-.667-1-2-3-2m18 13H5.23c-1.784 0-2.73.781-2.73 2s.946 2 2.73 2H19.5"></path></g></svg> */}
                    <svg className={s.cart_child} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 512 512"><path fill="currentColor" d="M160 96.039v32h304v63.345l-35.5 112.655H149.932L109.932 16H16v32h66.068l40 288.039h329.9L496 196.306V96.039zm16.984 272.305a64.073 64.073 0 0 0-64 64a64 64 0 0 0 128 0a64.072 64.072 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.038 32.038 0 0 1-32 32m224-96a64.073 64.073 0 0 0-64 64a64 64 0 0 0 128 0a64.072 64.072 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.038 32.038 0 0 1-32 32"></path></svg>
                    <div className={s.cart_child}>{cart.items.reduce((ac, obj) => ac + obj.count, 0)}</div>
                    <div className={s.cart_child}>|</div>
                    <div className={s.cart_child}>{cart.items.reduce((ac, obj) => ac + obj.cost * obj.count, 0)}</div>
                </Link>}
            </div>
        </div>
    )
}

export default Header