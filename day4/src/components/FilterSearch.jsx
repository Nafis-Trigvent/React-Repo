import React from 'react'
import { useState } from 'react'

export const FilterSearch = () => {

    const products = ["Shirts", "Shoes", "T-Shirts", "Paint", "Hoody", "Skirt", "Jeans", "Wait-Wait"]

    const [search ,setSearch] = useState('');
    // const [hide ,setHide] = useState();

    const handleChange = (e)=>{
        setSearch(e.target.value)
    }

    const filteredChange = products.filter((item)=> item.toLowerCase().includes(search.toLowerCase()))
    return (
        <div>
            <input
                type="text"
                placeholder='search'
                value={search}
                onChange={handleChange}
                style={{fontSize : '40px' , marginLeft : '20px' }}
            />

            <ul>
                {search === '' ? (<p> enter to search </p>) : 
                    filteredChange.map((item , index)=>(
                        <p key={index} > {item}</p>
                    ))
                }
            </ul>


        </div>
    )
}
