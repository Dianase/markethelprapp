import {Form, Input, Button} from 'antd'
import { initializeApp } from "firebase/app";
import {getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA4ksHTLLLKIbUXBfq3Y6e4gqfBdhTZxoE",
  authDomain: "markethelpr.firebaseapp.com",
  projectId: "markethelpr",
  storageBucket: "markethelpr.appspot.com",
  messagingSenderId: "262955159868",
  appId: "1:262955159868:web:282859636de7499f9d0e39"
};

export default function Login({setUser}){
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const handleLogin =(values) =>{
    const {email, password} = values
    signInWithEmailAndPassword(auth, email, password)
  }
  const loginWithGoogle = (event)=>{
    event.preventDefault()
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
    .then(response => {
      setUser(response.user)
    })
  }
  return (
    
    <Form onFinish={handleLogin} labelCol={{span: 8}} wrapperCol={{span:16}}>
      <Form.Item label="Email" name="Email" 
      rules={[{required: true, message: "Please include your email"}]}>
        <Input/>
    </Form.Item>
      <Form.Item label="Password" name="Password" 
      rules={[{required: true, message: "Please enter your password"}]}>
        <Input/>
    </Form.Item>
    <Form.Item labelCol={{span: 8}} wrapperCol={{span:16}}>
      <Button type="primary" htmlType="submit">Login</Button>
      <Button type="default" onClick={loginWithGoogle}>Login with Google</Button>
    </Form.Item>
    </Form>
    
  )
}