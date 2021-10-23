import {Layout, Modal} from 'antd'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ItemList from './components/ItemList'
import Copyright from './components/Copyright'
import Login from './components/Login'
import './App.css';
import { useState } from 'react'
const {Content} = Layout

function App() {
  const [listItem, setListItem] = useState()
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState()
  return (
    <Layout>
      <Navbar />
      <Content className="site-layout" style={{ marginTop: 64, padding: '0 50px' }}>
        {!user
         ? <Modal title="Login" visible={true} footer="Market Helpr"><Login setUser={setUser}/> </Modal>
         :
        <Hero uid={user.uid} setLoading={setLoading} setListItem={setListItem} />}
        <ItemList
          user={user}
          listItem={listItem}
          setListItem={setListItem}
          setLoading={setLoading}
          loading={loading} /> 
      </Content>
      <Copyright />
    </Layout>
  )
}

export default App;
