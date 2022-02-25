import React, {useState} from 'react'
import Layout from 'containers/Layout'
import { memberLotto } from 'api';

export default function lotto(){
    const[inputs,setInputs] = useState({})
    const[result, setResult] = useState('')
    const {nums} = inputs;

    const handleChange =(e) => {
        e.preventDefault()
        const{value, name} = e.target;
        setInputs({...inputs,[name] : value})
    }
    const handleClick = (e) =>{
        e.preventDefault()
        memberLotto({nums})
        .then(res => setResult(res.data)).catch(err => console.log(`에러발생 : ${err}`))
    }

    return (<Layout><h1>Lotto폼</h1>
      <form>
      <div>
      <label htmlFor= ""><b>로또 생성개수</b></label>
      <input type = "text" name = "nums" onChange={handleChange} /><br/>
    
      <button onClick={handleClick}>생성</button>
      </div>
      </form>
      <div>로또 번호<br /> {result}</div>
    </Layout>
    )
}