const cart = Array.from(document.querySelectorAll('.my-2'));
const arr = cart.map((item, index) => ({
    id: index+40,
    gameCompany: "PlayStation",
    name: item.querySelector('.card-body > div > p:nth-child(2)') ? item.querySelector('.card-body > div > p:nth-child(2)').textContent.trim() : "",
    forplay: item.querySelector('.card-body > div > p:nth-child(1)') ? item.querySelector('.card-body > div > p:nth-child(1)').textContent.trim() : "",
    img: item.querySelector('img') ? item.querySelector('img').src : "",
    cost: item.querySelector('.card-footer > p') ? Number(item.querySelector('.card-footer > p').textContent.trim().replace(' ₽', '').replace(' ', '')) : "",
    gameSub: item.querySelector('div > div > a > div > div > div:nth-child(1) > div > p') ? item.querySelector('div > div > a > div > div > div:nth-child(1) > div > p').textContent.trim() : "",
    gameConsole: [
        item.querySelector('.mt-1 > div:nth-child(1) > p') ? item.querySelector('.mt-1 > div:nth-child(1) > p').textContent.trim() : "",
        item.querySelector('.mt-1 > div:nth-child(2) > p') ? item.querySelector('.mt-1 > div:nth-child(2) > p').textContent.trim() : "",
        item.querySelector('.mt-1 > div:nth-child(3) > p') ? item.querySelector('.mt-1 > div:nth-child(3) > p').textContent.trim() : "",
    ].filter(el => (el !== ""))
}))

JSON.stringify(arr).replaceAll(`\\"`, `'`)