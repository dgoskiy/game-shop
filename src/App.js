import React from 'react'
import Games from './components/Games'
import Sidebar from './components/Sidebar'
import Sort from './components/Sort'
import s from './css/App.module.css'
import axios from 'axios'
function App() {
  const [items, setItems] = React.useState([]);
  // const [sort, setSort] = React.useState({})
  // const [platform, setPlatform] = React.useState("")
  // const [comp, setComp] = React.useState('')
  // const comp = 'PlayStation'
  // const comp = 'Xbox'

  React.useEffect(() => {
    // axios.get(`https://65eb6f1043ce16418933d917.mockapi.io/api/game_shop/game?sortBy=${sort !== '' ? sort.title : ""}&order=${sort !== '' ? sort.order : ""}${comp !== "" ? "&gameCompany=" + comp : ""}`)
    axios.get(`https://65eb6f1043ce16418933d917.mockapi.io/api/game_shop/game?`)
      .then(res => {
        setItems(res.data);
      })
  }, [/* sort, platform */])
  return (
    <div className='d-flex'>
      {/* <Sidebar data={items} setPlatform={setPlatform} /> */}
      <div className={`${s.content_container} custom_scroll d-flex`}>
        {/* <Games data={items} /> */}
        <Sort />
        {/* <Sort onClickSort={(name, order) => setSort(name, order)} /> */}
      </div>
    </div>
  );
}

export default App;
