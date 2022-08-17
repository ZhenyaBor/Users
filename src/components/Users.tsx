/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from '@mui/material/Button';

interface Props{
  children:any
  setSuccess:(boolean:boolean)=> void
}

export const Users = ({children,setSuccess}:Props )=> {

  const onClickButton = ()=>{
    setSuccess(true)
    setTimeout(()=>{
      setSuccess(false)
    },2000)
   
  }

  return (
    <div
    css={css`
    margin:40px auto;
    padding :20px 20px;
    width: 400px;
    border-radius: 10px;
    background-color: #c3c3c3;
  `}
    >
        {children}

      <Button onClick={()=> onClickButton()}  fullWidth sx={{mt:3}} variant="contained" color="success">
        Отправить приглашение 
      </Button>
    </div>
  )
}
