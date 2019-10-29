import React from 'react'

const ProductRow = (props) => {
    if(props.checked && !props.stocked) return null;

    if(!(props.name).toLowerCase().includes((props.keyword).toLowerzCase())) return null;
    // if(!(new RegExp(`/${props.name}/i`)).test(props.keyword)) return null;

    return (
        <tr style={{color: !props.stocked && 'red'}}>
            <td>{props.name}</td>
            <td>{props.price}</td>
        </tr>
    )
}

export default ProductRow
