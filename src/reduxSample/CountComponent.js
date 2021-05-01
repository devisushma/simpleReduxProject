import React from 'react';
import { number, func } from "prop-types";
import "./style.css";

const CountComponent = ({ count,  handleIncrement,  handleDecrement }) => (
	<>
		<p>{`See the count value here :  ${count}`}</p>
		<button onClick={handleIncrement} data-testid="increment-button">Increment </button>
		<button onClick={handleDecrement} className={"decrement-button"} data-testid="decrement-button"> Decrement </button>
    </>
);
    
CountComponent.propTypes = {
    count:number,
    handleDecrement:func,
    handleIncrement:func
}

CountComponent.defaultPropTypes = {
    count:0,
    handleDecrement: () => {},
    handleIncrement: () => {}
}

export default CountComponent;