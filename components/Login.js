import React, {useState} from 'react'
import Layout from 'containers/Layout'

export default function Login(){
    const[inputs,setInputs] = useState({})
    const{name,pw} = inputs;

    const handleChange = (e) =>{
        e.preventDefault()
        const{value, name} = e.target;
        setInputs({ ...inputs, [name] : value})
    }
    const handleClick = (e) =>{
        e.preventDefault()
        const calcRequest = {name,pw}
        alert(` 입력한 아이디 비밀번호 : ${JSON.stringify(calcRequest)}`)
    }

    return (<Layout><h1>로그인폼</h1>
    <form>
    <div>
    <label><b>name</b></label>
    <input type="text" name = "name" onChange={handleChange} /><br />

    <label htmlFor=""><b>pw</b></label>
    <input type="text" name = "pw" onChange={handleChange} /><br />

    <button onClick={handleClick}>Longin체크</button>
    </div>
    <div>
    <button>Cancel</button><br />
    <span>비밀번호 <a>찾기</a></span>
    </div>
    </form>
    </Layout>
    )
}
