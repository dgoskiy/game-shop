import React from 'react'
import s from './index.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { sortByAmount, selectGplat } from '../../redux/store/slices/filterSlice'
export const list = [
    { name: "Содержание" },
    { name: "По алфавиту", sortBy: "name", order: "asc" },
    { name: "Цена ↑", sortBy: "cost", order: "asc" },
    { name: "Цена ↓", sortBy: "cost", order: "desc" },
]
export const Sort = () => {
    const { gcomp, id } = useSelector(state => state.filter)
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false)
    const sortRef = React.useRef()

    const listPlatform = {
        PlayStation: ["PS4", "PS5"],
        Xbox: ["Xbox One", "Xbox X | S", "PC"],
    }
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.composedPath().includes(sortRef.current)) {
                setOpen(false)
                console.log("outside")
            }
        }
        document.body.addEventListener('click', handleClickOutside)
        return () => {
            document.body.removeEventListener('click', handleClickOutside)
        }
    }, [])

    return (
        <div ref={sortRef} className={`${s.sort} sticky-top`}>
            <div className='d-flex'>
                <button className={s.btn} onClick={() => {
                    setOpen(!open)
                }}>{list[id].name} </button>
            </div>
            {open && (<div className="container_sort">
                {list.map((item, i) => i !== 0 && (
                    <li key={i} onClick={() => {
                        setOpen(!open);
                        dispatch(sortByAmount({ id: i, sortBy: item.sortBy, order: item.order }))
                    }} className={`${s.item} dropdown-item`}>{item.name}</li>
                ))}
            </div>)}


            {listPlatform[gcomp].map((item, i) => (<div key={i} className={`${s.plat_item} `} onClick={() => {
                dispatch(selectGplat(item))
            }}>{item}</div>))}
        </div >
    )
}
export default Sort