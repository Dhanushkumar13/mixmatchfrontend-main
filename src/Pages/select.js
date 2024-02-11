import React, { useState, useEffect } from "react";
import Box from "../Cards/card";
import Text from '../Transitions/text'; 

function Select() {
    const [select, setSelect] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/day')
            .then((response) => response.json())
            .then((res) => {
                if (res.result) {
                    setSelect(res.result);
                }
            })
            .catch((err) => console.log("Error", err));
    }, []);

    return (
        <section>
            <h1 style={{ fontFamily: "Poppins", color: "black" }}>
                <Text />
            </h1>
            <div className="categories-listing-section">
                {select.map((categories, index) =>
                    <Box key={`Box-${index}`} background="#FEF1E0" data={categories} />
                )}
            </div>
        </section>
    );
}

export default Select;
