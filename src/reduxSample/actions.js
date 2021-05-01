import { incrementClick, decrementClick } from "./actionTypes"

export const handleIncrement = () => ({
    type:incrementClick
})

export const handleDecrement = () => ({
    type:decrementClick
})