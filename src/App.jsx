import { useState } from 'react'
import './App.css'
import { sum } from './utils'
import { CustomButton } from './components/CustomButton'
import CustomDropdown from './components/CustomDropdown'

function App() {

  const [num1,setNum1] = useState('')
  const [num2,setNum2] = useState('')
  const [sumValue,setSumValue] =useState(0)
  const options = [
    { value: 'option1', display: 'Option 1' },
    { value: 'option2', display: 'Option 2' }
];
  return (

    <>
      <h1>Sum</h1>
        <input onChange={(e)=>setNum1(e.target.value)} value={num1} placeholder='Enter number'></input>
        <span>+</span>
        <input onChange={(e)=>setNum2(e.target.value)} value={num2} placeholder='Enter number'></input>
        <span>=</span>
        <span>{sumValue}</span>
        <button onClick={()=>setSumValue(sum(num1,num2))}>Calculate</button>

      {/*<CustomButton disabled={true}>Onclick button</CustomButton>*/}
      <CustomDropdown
          dropdownOptions={options}
      />

    </>
  )
}

export default App
