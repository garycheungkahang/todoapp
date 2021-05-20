import React, { useState, useEffect } from 'react';
const Listitem = ({ listContent, deleteFunction, index, checked, handleChecked, page,dueDate }) => {

    const [dueTime, setDuetTime] = useState(dueDate)
    const handleSubmit = (e) => {
        e.preventDefault();

        const d = new Date()
        let nowDate = d.getDate()
        let nowHour = d.getHours() < 10 ? '0' + d.getHours() : d.getHours()
        let nowMonth = d.getMonth() + 1
        let nowMin = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()
        let nowTime = ' Date:' + nowMonth + '/' + nowDate + ' Time:' + nowHour + ':' + nowMin

        const data = { thisTime: nowTime, thisSubmit: true };
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        };
        fetch(`http://localhost:9000/tasks/${page}/${index}`, requestOptions)
            .then(response => response.json())

    };

    const returnDate = async (e) => {
        if (checked) return
        await handleSubmit(e)
        await new Promise(resolve => {
            setTimeout(resolve, 100);
        });
        await handleChecked()
        const d = new Date()
        let nowDate = d.getDate()
        let nowHour = d.getHours() < 10 ? '0' + d.getHours() : d.getHours()
        let nowMonth = d.getMonth() + 1
        let nowMin = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()
        let nowTime = ' Date:' + nowMonth + '/' + nowDate + ' Time:' + nowHour + ':' + nowMin
        setDuetTime(nowTime)
    }

    return (
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', paddingTop: '10px' }}>
            <div style={{ background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)', border: 'solid 1px grey', borderRadius: '3px', display: 'flex', width: '60%', height: '50px', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ color: 'grey', paddingLeft: '10px' }}>{listContent}</h3>
                <div style={{ paddingRight: '10px' }}>
                    {dueTime}
                    <button onClick={returnDate} style={{ backgroundColor: checked ? 'red' : 'green', color: 'white' }}>{checked ? 'checked' : 'to check'}</button>
                    <button onClick={deleteFunction} >-</button>
                </div>
            </div>
        </div>


    )
}
export default Listitem;