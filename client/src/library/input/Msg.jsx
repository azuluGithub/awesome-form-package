import { useEffect, useState } from "react";

export const Msg = ({ value, c }) => {

    const [ isValid, setIsValid ] = useState('');

    useEffect(() => {
        setIsValid(c.condition(value));
    }, [value, c]);

    const cStyle = {
        color: 'crimson',
        backgroundColor: 'white',
        padding: ' 0px 4px',
        borderRadius: '4px',
        border: '1px solid crimson',
        display: 'inline-block',
        marginBottom: '2px',
        fontSize: '13px'
    }

    return (
        <div>
            { isValid ? <></> :  <span style={cStyle}>{ c.msg } </span>}
        </div>
    )
}