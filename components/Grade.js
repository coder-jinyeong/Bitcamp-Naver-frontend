import React, { useState } from 'react'
import Layout from 'containers/Layout';

export default function Grade(){
    const [username, setUsername] = useState("");
    const [kor, setKor] = useState(0);
    const [eng, setEng] = useState(0);
    const [math, setMath] = useState(0);    
    const result = () => {
        let username = document.getElementById('username').value
        console.log('username : ' + username)
        let kor = document.getElementById('kor').value
        console.log('kor : ' + kor)
        let eng = document.getElementById('eng').value
        console.log('eng : ' + eng)
        let math = document.getElementById('math').value
        console.log('math : ' + math)
        setUsername(username)
        setKor(kor)
        setEng(eng)
        setMath(math)
    }
    return <Layout><h1>Grade폼</h1>

    
    <div>
    <label><b>Username</b></label>
    <input id = "username" type="" /><br />

    <label htmlFor=""><b>국어 점수</b></label>
    <input id = "kor" type="" /><br />

    <label htmlFor=""><b>영어 점수</b></label>
    <input id = "eng" type="" /><br />

    <label htmlFor=""><b>수학 점수</b></label>
    <input id = "math" type="" /><br />
    <button onClick={() =>{result()}}>출력하기</button>
    <div>이름 : {username} , 국어 : {kor} , 영어 : {eng} , 수학 : {math}</div>
    </div>    
    </Layout>
}
