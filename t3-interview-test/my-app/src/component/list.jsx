import React, { useState, useRef, useEffect } from 'react';
import ListItem from './listItem1'
import PageBut from './pageBut'
import Axios from "axios";
const Form = () => {
    const d = new Date()
    const elementRef = useRef();
    const [list, addList] = useState([])
    const [pages, setPages] = useState([undefined, undefined])
    const pageIndexRef = useRef(0);
    const [text, setText] = useState()

    useEffect(async () => {
        Axios.get(`http://localhost:9000/page/${pageIndexRef.current}`).then(res => {
            const results = res.data;
            const List = results.map((item) => {
                return { value: item.task, checked: item.finished, dueDate: item.dueDate }
            })
            addList([...List])
        });
    }, [])

    const delet = (i) => {
        const copyList = [...list]
        copyList.splice(i, 1)
        addList([...copyList])
        Axios.get(`http://localhost:9000/tasks/delete/${pageIndexRef.current}/${i}`).then(res => {
            const results = res.data;
            const List = results.map((item) => {
                return { value: item.task, checked: item.finished, dueDate: item.dueDate }
            })
            addList([...List])
        });
    }
    const handleChecked = () => {
        Axios.get(`http://localhost:9000/page/${pageIndexRef.current}`).then(res => {
            const results = res.data;
            const List = results.map((item) => {
                return { value: item.task, checked: item.finished, dueDate: item.dueDate }
            })
            addList([...List])
        });
    }

    const listItems = list.map((list_, i) =>
        <ListItem key={i} listContent={list_}
            deleteFunction={() => { delet(i) }}
            listContent={list_.value}
            checked={list_.checked}
            dueDate={list_.dueDate}
            index={i}
            page={pageIndexRef.current}
            handleChecked={handleChecked}
        />
    );

    const changePage = (i) => {
        pageIndexRef.current = i
        Axios.get(`http://localhost:9000/page/${pageIndexRef.current}`).then(res => {
            const results = res.data;
            console.log(results)
            const List = results.map((item) => {
                return { value: item.task, checked: item.finished , dueDate: item.dueDate}
            })
            addList([...List])
        });
    }

    const listButton = pages.map((page, i) =>
        <PageBut page={i} changePage={() => { changePage(i) }} />
    )

    const addOne = (e) => {
        const copyList = [...list]
        addList([...copyList, { value: elementRef.current.value, checked: false }])
        elementRef.current.value = ''
        handleSubmit(e)
    }

    const AddPage = () => {
        setPages([...pages, undefined])
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { 'task': text, 'SetUpDate': d.getTime(), 'dueDate': null, 'finished': false };
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        };
        fetch(`http://localhost:9000/tasks/${pageIndexRef.current}`, requestOptions)
            .then(response => response.json())
            .then(res => console.log(res));
    };
    return (
        <div style={{ display: 'flex', height: '700px', flexDirection: 'column', justifyContent: "space-between"}}>
            <div>
                <input type="text" className='to-input' ref={elementRef} defaultValue={text} onChange={(e) => setText(e.target.value)} /><button onClick={addOne}>+</button>
                <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    {listItems}
                </div>
            </div>
            <div>
                {listButton}
                <button onClick={AddPage}>+</button>
            </div>
        </div>
    )
}
export default Form;