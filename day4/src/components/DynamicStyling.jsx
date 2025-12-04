import React from 'react'

export const DynamicStyling = () => {

      const products = ["Shirts", "Shoes", "T-Shirts", "Paint", "Hoody", "Skirt", "Jeans", "Wait-Wait"]
  return (
    <div>
        {
            products.map((item , index )=>(
                <span style={{
                    marginLeft : '40px' ,
                    color : index % 2 === 0 ? 'red' : 'green'
                }}>{item}</span>
            ))
        }
    </div>
  )
}
