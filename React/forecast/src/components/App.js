import React, { useState, useEffect } from 'react'
import Current from './Current';
import Forecast from './Forecast';
import Axios from 'axios';
import Spinner from './Spinner';

import './App.css';

const App = () => {
    const APPID = '7356f882a22707fa438717c1e8457b4e';
    const [current, setCurrent] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [unit, setUnit] = useState('c');


    const getLocation = () => {
        return new Promise((resolve, reject) => {
            window.navigator.geolocation.getCurrentPosition(
                resolve,
                reject
            );
        });
    };

    const getTemp = async (coords) => {
        const { latitude: lat, longitude: lon } = coords;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${APPID}&units=metric&lang=kr`;
        const res = await Axios.get(url);
        const { data } = res;
        setCurrent(data);
    };

    const getHourlyTemp = async (coords) => {
        const { latitude: lat, longitude: lon } = coords;
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${APPID}&units=metric&lang=kr`;
        const res = await Axios.get(url);
        const { data } = res;
        setForecast(data);
    };

    const getAll = async () => {
        try {
            const { coords } = await getLocation();
            await getTemp(coords);
            await getHourlyTemp(coords);
        } catch (error) {
            alert('위치 제발 동의해주세요.');
        }
    };

    useEffect(() => {
        getAll();
    }, []);




    return (
        <>
            <header className="header-padding">
                <h1>일기예보</h1>
            </header>
            <main className="container">
                {!current || !forecast ? <Spinner /> : (
                    <>
                        <Current current={current} unit={unit} setUnit={setUnit} />
                        <Forecast forecast={forecast} unit={unit} />
                    </>
                )}

            </main>
        </>
    )
}

export default App
