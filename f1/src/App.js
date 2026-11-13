import Apple from "./Apple"
import Bat from "./Bat"
import Reused from "./Reused"
const App=()=>{
  const name="lahari"
  const name2="susan"
  return(
    <div>
      <Reused/>
      <Apple/>
      <h1>AIDSC {name} {name2}</h1>
      <p>Pranav swaroop</p>
      <Reused/>
      <Bat/>
      <Reused/>
      <Reused/>
      <Reused/>
      <Reused/>
    </div>
  )
}

export default App