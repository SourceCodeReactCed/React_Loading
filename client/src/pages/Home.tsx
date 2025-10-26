import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function Home () {
    const navigate = useNavigate();

    return(
        <>
        <h1>Hello World!</h1>
        </>
    );
}

export default Home;