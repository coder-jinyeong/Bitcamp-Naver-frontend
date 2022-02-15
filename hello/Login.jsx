import React from "react";

const Login = () =>{
    return <>
    <h1>BMI</h1>
    <form>
        <div>
        <label><b>이름</b></label><br/>
        <input></input><br/>
        <label>키</label><br/>
        <input></input><br/>
        <label>몸무게</label><br/>
        <input></input><br/><br/>
        <button>계산하기</button><br/><br/>
        <label>결과 : </label>
        </div>
    </form>
    </>
}

export default Login;