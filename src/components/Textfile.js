import React from "react";
export const TextField =({Name_label, value, setValue, required})=>{
    return (
    <>
    <div>
        <label>
        {Name_label}:<span className="req">{required ? '*' : ''}</span>
        <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required={required}
        />
        </label>
    </div>
    </>
    )
};