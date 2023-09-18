'use client'
import React, { useEffect, useState } from 'react'

const Input = ({ Label, Onchange, Name, Value, Type, error }) => {
    const [valied, setValied] = useState(false);

    useEffect(() => {
        if (!Value) {
            setValied(true);
        }
        else {
            setValied(false);
        }
    }, [Value]);

    return (
        <div className='block'>
            <p className='pb-2 text-slate-600'>{Label}</p>
            <input
                onChange={Onchange}
                value={Value}
                name={Name}
                className="border border-slate-300 px-3 py-2 w-full"
                type={Type ? Type : 'text'}
            />
            {valied && <p className='text-red-600'>{error}</p>} <br />
        </div>
    )
}

export default Input;