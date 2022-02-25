import React, { useState } from 'react'
import Layout from 'containers/Layout';

export default function Grade(){
    const[inputs,setInputs] = useState({})
    const{username,kor,eng,math} = inputs;

    const handleChange = (e) =>{
        e.preventDefault()
        const{value, name} = e.target;
        setInputs({ ...inputs, [name] : value})
    }
    const handleClick = (e) =>{
        e.preventDefault()
        const calcRequest = {username,kor,eng,math}
        alert(` 입력한 이름, 국어, 영어, 수학 : ${JSON.stringify(calcRequest)}`)
    }
    
    return <Layout><h1>Grade폼</h1>
    <form>
    <div>
    <label><b>username</b></label>
    <input type="text" name = "username" onChange={handleChange} /><br />

    <label htmlFor=""><b>kor</b></label>
    <input type="text" name = "kor" onChange={handleChange} /><br />

    <label htmlFor=""><b>eng</b></label>
    <input type="text" name = "eng" onChange={handleChange} /><br />

    <label htmlFor=""><b>math</b></label>
    <input type="text" name = "math" onChange={handleChange} /><br />

    <button onClick={handleClick}>Grade체크</button>
    </div> 
    </form>   
    </Layout>
}
