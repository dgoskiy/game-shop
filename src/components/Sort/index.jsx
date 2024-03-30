import React from 'react'
import s from './index.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { sortByAmount } from '../../redux/store/sortSlice'

export const Sort = ({ onClickSort }) => {
    const { id, sortProperty } = useSelector((state) => state.sort)
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false)
    const [select, setSelect] = React.useState(0)
    const list = [
        { name: "Содержание" },
        { name: "По алфавиту", sortProperty: "name", order: "asc" },
        { name: "Цена ↑", sortProperty: "cost", order: "asc" },
        { name: "Цена ↓", sortProperty: "cost", order: "desc" },
    ]
    // console.log(list[i])
    // dispatch(sortByAmount(2,3))
    // console.log(id, sortProperty)

    return (
        <div className={`${s.sort} sticky-top`}>
            <button onClick={() => {
                dispatch(sortByAmount([2, 2]))
                // console.log(id, sortProperty)
                // console.log(sortByAmount(12,123,123,123))
            }}>123</button>
            <div className='d-flex'>
                <button className={s.btn} onClick={() => { setOpen(!open) }}>{list[select].name} </button>
            </div>
            {open && (<div className="container_sort">
                {list.map((item, i) => i !== 0 && (
                    <li key={i} onClick={() => {
                        setSelect(i);
                        setOpen(!open);
                        dispatch(sortByAmount({ id: i, order: item.order, sortProperty: item.sortProperty }))
                    }} className={`${s.item} dropdown-item`}>{item.name}</li>
                ))}
            </div>)
            }
        </div >
    )
}
export default Sort