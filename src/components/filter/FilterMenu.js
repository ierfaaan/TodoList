import "./FilterMenu.css"
function FilterMenu({ changeVal, filterVal }) {
    return (
        <main className='main' style={{ height: "500px", zIndex: "6000" }}>
            <ul className='filter-menu'>
                <li>
                    <label htmlFor='All'>All</label>
                    <input
                        type='radio'
                        name='filter'
                        onChange={changeVal}
                        value='all'
                        checked={filterVal === "all" ? true : false}
                        id='All'
                    />
                </li>
                <li>
                    <label htmlFor='Done'>Done</label>
                    <input
                        type='radio'
                        name='filter'
                        onChange={changeVal}
                        value='done'
                        checked={filterVal === "done" ? true : false}
                        id='Done'
                    />
                </li>
                <li>
                    <label htmlFor='Todo'>Todo</label>
                    <input
                        type='radio'
                        name='filter'
                        onChange={changeVal}
                        value='todo'
                        checked={filterVal === "todo" ? true : false}
                        id='Todo'
                    />
                </li>
                <li>
                    <label htmlFor='Red'>Red category</label>
                    <input
                        type='radio'
                        name='filter'
                        onChange={changeVal}
                        value='red'
                        checked={filterVal === "red" ? true : false}
                        id='Red'
                    />
                </li>
                <li>
                    <label htmlFor='Green'>Green category</label>
                    <input
                        type='radio'
                        name='filter'
                        onChange={changeVal}
                        value='green'
                        checked={filterVal === "green" ? true : false}
                        id='Green'
                    />
                </li>
                <li>
                    <label htmlFor='Blue'>Blue category</label>
                    <input
                        type='radio'
                        name='filter'
                        onChange={changeVal}
                        value='blue'
                        checked={filterVal === "blue" ? true : false}
                        id='Blue'
                    />
                </li>
            </ul>
        </main>
    )
}
export default FilterMenu
