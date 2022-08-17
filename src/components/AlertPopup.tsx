/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Snackbar from '@mui/material/Snackbar';

interface IProps{
  success:boolean
  usersCount:number
}


export const AlertPopup = ({success,usersCount}:IProps) => {

  return (
    <div 
    css={css`
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
  `}
    >
    <Snackbar
      open={success}
      message={usersCount>1?`Приглашение отрправлено ${usersCount}м пользователям `:`Приглашение отрправлено одному пользователю`}
    />
  </div>
  )
}
