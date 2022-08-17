import Snackbar from '@mui/material/Snackbar';

interface IProps{
  success:boolean
  usersCount:number
}


export const AlertPopup = ({success,usersCount}:IProps) => {

  return (
    <div>
    <Snackbar
      open={success}
      message={usersCount>1?`Приглашение отрправлено ${usersCount}м пользователям `:`Приглашение отрправлено одному пользователю`}
    />
  </div>
  )
}
