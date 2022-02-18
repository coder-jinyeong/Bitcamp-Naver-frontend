import React, {useState} from 'react'
import Layout from 'containers/Layout'

export default function Login(){
    const [name, setName] = useState("");
    const [pw, setPw] = useState("");
    const result = () => {
        let name = document.getElementById('name').value
        console.log('name : ' + name)
        let pw = document.getElementById('pw').value
        console.log('pw : ' + pw)
        setName(name)
        setPw(pw)
    }

    return (<Layout><h1>로그인폼</h1>
  
    <div>
    <label><b>이름</b></label>
    <input id = 'name' type="" /><br />

    <label htmlFor=""><b>비밀번호</b></label>
    <input id = 'pw' type="" /><br />

    <button onClick={() => {result()}}>Login</button><br />
    <label><input type="checkbox" />기억하기</label><br />
    <div>이름 : {name} 비밀번호 : {pw}</div>
    
    </div>
    <div>
    <button>Cancel</button><br />
    <span>비밀번호 <a>찾기</a></span>
    </div>
    </Layout>
    )
}
