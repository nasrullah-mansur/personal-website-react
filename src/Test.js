"use client";
import React, { useState } from 'react';

const One = ({setCount}) => {

    const clickHandler = () => {
        setCount(prev => {
            return prev + 1;
        })
    }

    return (
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quasi.</p>
            <h3 onClick={clickHandler}>Click to increase</h3>
        </div>
    )
}

function Test() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>This is test {count}</h1>
            <One setCount={setCount} />
        </div>
    )
}

export default Test;