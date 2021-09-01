import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const [playOnce, setPlayOnce] = useState(true);
    const [rangeValues, setRangeValues] = useState(200);

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
                return b.population - a.population;
            });
            sortedArray.length = rangeValues;
            setSortedData(sortedArray);
        };
        sortedCountry();

    }, [data, rangeValues, playOnce]);

    return (
    <div className="countries">
        <div className="sort-container">
            <input type="range" min="1" max="250" value={rangeValues} 
            onChange={(e) => setRangeValues(e.target.value)} />
        </div>
        <ul className="countries-list">
            {sortedData.map((country) => (
                <Card country={country} key={country.name}/>
            ))}
        </ul>
    </div>
    );
};

export default Countries;