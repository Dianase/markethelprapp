import { useEffect } from "react"
import { List } from 'antd'

let myApi = 'https://markethelpr-api.web.app'


export default function ItemList({ user, listItem, setListItem, loading, setLoading }){
  useEffect(() =>{
    setLoading(true)
    if(!user){
      setListItem([])
      setLoading(false)
    } else{
    fetch(`${myApi}/items/${user.uid}`)
    .then(res => res.json())
    .then(data => {
      setListItem(data)
      setLoading(false)
    })
    .catch(err => alert(err))}
  },[user]) 
  return (
    <List
    size="large"
    bordered
    dataSource={listItem}
    renderItem={item => <List.Item>{item.name}</List.Item>}></List>
  )
}

