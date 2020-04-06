import React from 'react'

export const select = (props) => (
    <select className={'ui select dropdown'} >
        {
            data.map(x => (
                <option key={x} value={x.name}> x.name </option>
            ))
        }
    </select>
)
