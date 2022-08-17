/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface IUsers{
    id:never
    email:string
    first_name:string
    last_name:string
    avatar:string
  }

interface IUser{
    users:IUsers[]
    isLoading:boolean
    value:string
    onClickInvite:any
    isInvited:never[]
}


export const User = ({users ,isLoading, value, onClickInvite, isInvited }: IUser) => {

  return (
    <>
    {!isLoading? users.filter((item)=>{return item.first_name.toLowerCase().includes(value)||
    item.email.toLowerCase().includes(value)||
    item.last_name.toLowerCase().includes(value)})
    .map((user)=>{
       return  <div
        key={user.id}
            css={css`
            display:flex;
            align-items:center;
            justify-content: space-between;
            margin-top: 20px;
          `}
            >
                <div><img
                css={css`
                width:60px;
                height:60px;
                border-radius:50% ;
              `}
                src={user.avatar} alt='Foto' />
                </div>
                <div
                   css={css`
                    width:80%;
                    display:flex;
                    justify-content:space-between;
                 `}
                >
                  <div>          
                  <h3>{user.first_name}&nbsp;{user.last_name}</h3>
                <div>{user.email}</div>
                </div>

                <button
                type="button"
                  onClick={()=> onClickInvite(user.id)}
                   css={css`
                  background-color:transparent;
                      `}
                >{isInvited.includes(user.id)?<RemoveIcon/>:<AddIcon/>}</button>
                </div>
            </div>
    }):'загрузка'}
    
    </>
  )
}
