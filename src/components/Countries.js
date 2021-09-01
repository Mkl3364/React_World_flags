import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const [playOnce, setPlayOnce] = useState(true);

    useEffect(() => {
        if (playOnce) {
        axios
        .get(
            "http://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
        )
        .then((res) => 
            setData(res.data));
            setPlayOnce(false);
        }

        const sortedCountry = () => {
            const countryObject = Object.keys(data).map((i) => data[i]);
            const sortedArray = countryObject.sort((a,b) => {
                return b.population - a.population
            });
            sortedArray.length = 30;
            setSortedData(sortedArray);
        };
        sortedCountry();

    }, [data, playOnce]);

    return (
    <div className="countries">
        <ul className="countries-list">
            {sortedData.map((country) => (
                <Card country={country} key={country.name}/>
            ))}
        </ul>
    </div>
    );
};

export default Countries;