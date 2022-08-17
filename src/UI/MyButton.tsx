/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ClearIcon from '@mui/icons-material/Clear';

interface Props{
  setValue:(strin:string)=> void
}

export const MyButton = ({setValue}:Props) => {
  return (
    <button
    onClick={()=> setValue("")}
    css={css`
    background-color:transparent;
  `}
    ><ClearIcon/></button> 
  )
}
