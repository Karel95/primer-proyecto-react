import { info } from "../hooks/test";

export const Test = () => {
    const handleClick = () => {
        console.log("Click")
    }
    return (
        <>
            <h1>{info().user}</h1>
            <h2>{info().pass}</h2>
            <button onClick={handleClick}>Click me!</button>
        </>
    )
}
