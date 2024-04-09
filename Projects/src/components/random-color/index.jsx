import { useEffect, useState } from "react";
export default function ColorChanger() {
    const [typeOfColor, setTypeOfColor] = useState('hex')
    const [color, setColor] = useState('#000')
    function randomColorUtility(length) {
        return Math.floor(Math.random() * length)
    }
    function handleCreateRandomHexColor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
        let hexColor = '#'
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)]
        }
        console.log(hexColor)
        setColor(hexColor)
    }

    function handleCreateRandomRgbColor() {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);
        setColor(`rgb(${r},${g},${b})`)
        console.log(color)
    }
    return (
        <div style={{ width: "100vw", height: "100vh", background: color, }}>
            <div style={{ padding: "20px 20%" }}>
                <button onClick={() => setTypeOfColor('hex')} > Create HEX Color</button>
                <button onClick={() => { setTypeOfColor('rgb') }}>Create RGB Color</button>
                <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Pick random color</button>
            </div >
            <div style={{ display: "flex",flexDirection:"column",alignItems:"center" }}> 
            <h1> type of Color = {typeOfColor}</h1>
                <h2>{color}</h2></div>

        </div>
    )

}