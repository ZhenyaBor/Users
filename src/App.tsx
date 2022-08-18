import {useState,useEffect, ChangeEvent} from 'react';
import axios from "axios";
import { User, Users, AlertPopup } from './components';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {MyButton} from './UI/MyButton';

interface IUsers{
  id:never
  email:string
  first_name:string
  last_name:string
  avatar:string
}

function App() {
  const [users , setUsers]= useState<IUsers[]>([])  
  const [isLoading , setIsLoading]= useState(true)  
  const [value , setValue]= useState('')  
  const [invites , setInvites]= useState([])
  const [success , setSuccess]= useState(false)  

  useEffect(()=>{
    axios.get("https://reqres.in/api/users")
    .then((response) =>{setUsers(response.data.data)})
    .catch((error)=>{console.warn(error)
      alert("Ощибка при получении данных")}
   );
    setIsLoading(false)
  },[])
  
  const onChangeSerchValue = (e:ChangeEvent<HTMLInputElement>)=>{
    setValue(e.target.value)
  }

  const onClickInvite = (id:never)=> {
   if(invites.includes(id)){
    setInvites(prev => prev.filter(itemId => itemId !== id))
   }else{
    setInvites(prev => [...prev,id])
   }
  }

  return (

        <Users setSuccess={setSuccess} >
        <TextField fullWidth label="Найти пользователя"
        value={value}
        margin="dense"
        onChange={onChangeSerchValue}
        InputProps={{endAdornment:value?  <MyButton  setValue={setValue}/> : <SearchIcon/>}}
        /> 
        {success ?invites.length>0 && <AlertPopup success={success} usersCount={invites.length}/>:''}
        <User users={users} isLoading={isLoading} value={value} onClickInvite ={onClickInvite} isInvited={invites}/>
      </Users>
  
  );
}

export default App;
