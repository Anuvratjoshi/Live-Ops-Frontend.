import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import NavBar from "./NavBar"

function Signin() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    
    const postData = () => {
        fetch("http://localhost:8080/signin", {
            method: "POST",
            headers: {
                "Authorization":localStorage.getItem("token"),
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })

        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                }
                else {
                    alert(data.message)
                    console.log(data.message)
                    localStorage.setItem("token", data.token)
                    setUsername("")
                    setPassword("")
                    navigate("/offer")
                }
            })
    }
    return <>
        <NavBar />
        <div id="signin-container">
            <div className="card" style={{ padding: "10px", height: "fit-content", maxWidth: "500px", margin: "60px auto", textAlign: "center" }}>
                <h2 className="waves-light">Live Ops signin</h2>
                <input placeholder="Name" type="text" onChange={e => {
                    setUsername(e.target.value)
                }} value={username} />
                <input placeholder="password" type="password" onChange={e => {
                    setPassword(e.target.value)
                }} value={password} />
                <button className="btn waves-effect waves-light blue" onClick={() => {
                    console.log(username, password)
                    postData()
                }}>Submit</button>
                <Link to="/signup"><h6 className="footer" >Don't have an account?</h6 ></Link>
            </div>
        </div>
    </>
}
export default Signin