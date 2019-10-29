import React from 'react'

const ProductRow = ({name, keyword, stocked, price, checked}) => {
    if(checked && !stocked) return null;

    if(!(name).toLowerCase().includes((keyword).toLowerCase())) return null;

    return (
        <tr style={{color: !stocked && 'red'}}>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    )
}

export default ProductRow
