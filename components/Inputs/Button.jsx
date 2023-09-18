import React from 'react'

const Button = ({ Type, Onclick, Value, Disabled }) => {
    return (
        <button
            type={Type ? Type : "button"}
            onClick={Onclick}
            disabled={Disabled ? Disabled : false}
            className={`${Disabled ? "bg-green-200" : "bg-green-600 hover:bg-green-700"} font-bold text-white py-2 px-8 w-fit rounded-md`}
        >{Value}</button>
    )
}

export default Button;