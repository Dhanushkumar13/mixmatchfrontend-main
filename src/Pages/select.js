import React,{useState, useEffect} from "react";
import Card from '../Cards/cards';

function Select(){

    const [select,setSelect] = useState([]);

    useEffect(()=>{
        fetch('https://mix-match.onrender.com/api/color')
        .then((response)=>response.json())
        .then((res)=>{
            if(res.result){
                console.log(res.result)
                setSelect(res.result)
            }
        })
        .catch((err)=>console.log("Error",err))

    },[]);

    return (
        <section style={{backgroundImage: ""}}>
                <h1 style={{fontFamily:"Poppins", color:"black"}}>Select the right match for you💃</h1>
                <p style={{fontFamily:"Poppins" ,color:"black"}}>for each and everyday!</p>
                <div className="categories-listing-section">
                {
                    select.map((categories,index)=>
                    <Card key={`Card-${index}`}background="#FEF1E0" data={categories}/>
                    )
                }
                </div>
        </section>
    )
    }

export default Select;