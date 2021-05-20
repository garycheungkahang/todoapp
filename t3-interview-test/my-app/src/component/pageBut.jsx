import React, { useState, useEffect } from 'react';
// import {useState} 
const pageBut = ({ page, changePage }) => {
    // const d = new Date()

    return (
        <>
            <button onClick={changePage}>{page}</button>
        </>


    )
}
export default pageBut;