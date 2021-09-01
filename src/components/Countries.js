import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const [playOnce, setPlayOnce] = useState(true);
    const [rangeValues, setRangeValues] = useState(200);
    const [selectedRadio, setSelectedRadio] = useState('');
    const radio = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

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

            <ul>
                {radio.map((radio) => {
                    return (
                        <li key={radio}>
                            <input type='radio' value={radio} id={radio}
                            checked={radio === selectedRadio}  onChange={(e) =>
                            setSelectedRadio(e.target.value)}/>
                            <label htmlFor={radio}>{radio}</label>
                        </li>
                    )
                })}
            </ul>
        </div>
        <div className="cancel">
            {selectedRadio && <h5 onClick={() => setSelectedRadio("")}>
            Annuler la recherche</h5>}
        </div>
        <ul className="countries-list">
            {sortedData
            .filter((country) => country.region.includes(selectedRadio))

            .map((country) => (
                <Card country={country} key={country.name}/>
            ))}
        </ul>
    </div>
    );
};

export default Countries;