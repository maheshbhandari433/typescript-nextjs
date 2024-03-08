'use client'

import axios from "axios";
import { useEffect, useState } from "react";

const CountriesAPI = () => {

    const [countries, setCountries] = useState([]); 

    const getCountriesInfo = async () => {
        const response = await axios.get("https://restcountries.com/v3.1/all?fields=name,capital");
        console.log(response.data);
        if(response.data) {
            setCountries(response.data);
        }
    }

    useEffect(() => {
        getCountriesInfo();
    }, []);

    return (
        <>
            Countries API is here
            <div>
                {countries.map((country: { name: { common: string }, capital: string }, index: number) => {
                    return (
                        <div key={index}>
                            <h2>Country: {country.name.common}</h2>
                            <p>Capital: {country.capital}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
    
}

export default CountriesAPI;