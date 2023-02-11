import React, { useState } from 'react'

const Todo = () => {
    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null)
    const addItem = () => {
        if (!inputData) {
            alert("Kindly Fill the data ");
        } else if (inputData && !toggleSubmit) {
            setItems(
                items.map((elem) => {
                    if (elem.id === isEditItem) {
                        return { ...elem, name: inputData }
                    }
                    return elem;
                })
            )
            setToggleSubmit(true);
            setInputData('')
            setIsEditItem(null);
        }
        else {
            const allInputData = { id: new Date().getTime().toString(), name: inputData }
            setItems([...items, allInputData]);
            setInputData(' ');
        }
    }
    // delete item
    const delteItem = (index) => {
        const updateItems = items.filter((elem) => {
            return index !== elem.id;
        });
        setItems(updateItems);
    }
    // romove all
    const removeAll = () => {
        setItems([]);
    }

    // edit item

    const editiItem = (id) => {
        let newEditItem = items.find((elem) => {
            return elem.id === id
        })
        setToggleSubmit(false);
        setInputData(newEditItem.name)
        setIsEditItem(id);
    }
    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <img src='Images/logo.jpg' alt=''></img>
                        <figcaption>Add Your List Here ✌</figcaption>
                    </figure>
                    <div className='addItems'>
                        <input type="text" placeholder='✍Add items....'
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
                        />
                        {
                            toggleSubmit ? <i className="fa fa-plus add-btn" title='Add Item' onClick={addItem}></i> :
                                <i className="fas fa-edit add-btn" title='Update Item' onClick={addItem}></i>
                        }

                    </div>
                    <div className='showItems'>
                        {
                            items.map((elem) => {
                                return (
                                    <div className='eachItem' key={elem.id}>
                                        <h3>{elem.name}</h3>
                                        <div className='todo-btn'>
                                            <i className="fas fa-edit add-btn" title='Edit Item' onClick={() => editiItem(elem.id)}></i>
                                            <i className="fas fa-trash-alt add-btn" title='Delete Item' onClick={() => delteItem(elem.id)}></i>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className='showItems'>
                        <button className='btn effect04' data-sm-link-text='Remove All' onClick={removeAll}><span>Check List</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo