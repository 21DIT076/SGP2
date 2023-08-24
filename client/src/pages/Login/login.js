import React,{useState} from "react";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Divider from "../../components/Divider";
import axios from "axios"


const rules = [
  {
    required: true,
    message: "required",
  },
];

function Login() {
  const onFinish = (values) => {
    console.log("Success", values);
  };

const navigate = useNavigate()
  const [email,setemail] = useState()
  const [password,setpassword] = useState()

  // async function register(e){
  //   e.preventDefault()
  //   const response = await fetch('https://localhost:1337/CheckCred',{
  //     method:'POST',
  //     headers:{
  //       'Content-Type':'application/json'
  //     },
  //     body:JSON.stringify({
  //       email,password
  //     }),

  //   })
  //   const data = await response.json()
  //   console.log(data)
  //   if(data.email){
      
  //     alert('Login Successfully')
  //   }else{
  //     alert("Wrong Cred")
  //   }
    
  // }

  const register = async(e) => {
    await axios.post('http://localhost:1337/CheckCred',{email,password})
    .then(res=>{
      console.log(res.data)
      if(res.data.status === 'ok')
      {alert("Succesfully Login")
        navigate('/home')
    }
      else{
        alert("Wrong Credentials")
      }
    
    
    })
    // .then(navigate('/login'))
  }

  return (
    <div className="h-screen bg-primary flex justify-center items-center">
      <div className="bg-white p-5 rounded w-[450px]">
        <h1 className="text-primary text-2xl">
          APPMP - <span className="text-gray-400">Login</span>
        </h1>
        <Divider />
        <Form layout="vertical" onSubmitCapture={register}>
          <Form.Item label="Email" name="email" rules={rules}>
            <Input placeholder="Email"  value={email} onChange={(e)=>setemail(e.target.value)} />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={rules}>
            <Input type="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)} />
          </Form.Item>

          <Button type="primary" htmlType="submit" block className="mt-2">
            Login
          </Button>

          <div className="mt-5 text-center">
            <span className="text-gray-500">
              Don't have an acoount?{" "}
              <Link to="/register" className="text-primary">
                Register
              </Link>
            </span>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
