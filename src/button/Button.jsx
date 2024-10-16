

const Button = ({position, setPosition}) => {

    return (
        <>
        <button onClick = {() => previous(position, setPosition)}>Previous</button>
        <button onClick = {() => next(position, setPosition)}>Next</button>
        </>
    )
};
export default Button;

const previous = (position, setPosition) => {
    let counter;
    if(position === 0) {
        counter = 0
    } else {
        counter = 1
    }
    setPosition(position + counter)
}

const next = (position, setPosition) => {
    let counter;
    
    if(position===6) {
        counter = 0
    } else {
        counter = 1
    }
    setPosition(position - counter)
}