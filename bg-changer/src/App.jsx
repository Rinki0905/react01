import {useState} from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-centre bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-centre gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          onClick={()=>setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background: "red"}}>Red</button>

          <button
          onClick={()=>setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background: "green"}}>Green</button>

          <button 
          onClick={()=>setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background: "yellow"}}>Yellow</button>

          <button 
          onClick={()=>setColor("pink")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background: "pink"}}>Pink</button>

          <button
          onClick={()=>setColor("purple")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background: "purple"}}>Purple</button>

          <button
          onClick={()=>setColor("white")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background: "white"}}>White</button>

          <button
          onClick={()=>setColor("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background: "black"}}>Black</button>

          <button
          onClick={()=>setColor("aqua")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background: "aqua"}}>Aqua</button>

          <button
          onClick={()=>setColor("orange")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background: "orange"}}>Orange</button>

          <button
          onClick={()=>setColor("brown")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background: "brown"}}>Brown</button>

          <button
          onClick={()=>setColor("grey")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background: "grey"}}>Grey</button>

          <button
          onClick={()=>setColor("magenta")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background: "magenta"}}>Magenta</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
