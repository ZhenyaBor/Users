/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ClearIcon from '@mui/icons-material/Clear';

export const MyButton = ({setValue}:any) => {
  return (
    <button
    onClick={()=> setValue("")}
    css={css`
    background-color:transparent;
  `}
    ><ClearIcon/></button> 
  )
}
