import {  Wrapper } from './FilterForm.styled'
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice'
import { TextField } from '@mui/material'


export const FilterForm = () => {
    const dispatch = useDispatch()
    
    const onChange = (e) => {
                dispatch(setFilter(e.currentTarget.value.toLowerCase().trim()))
           }
       return (
           <Wrapper>
               <TextField id="outlined-basic" type="text" label="Find contacts name" variant="outlined" onChange={onChange} margin="normal" sx={{ ml: '20px'}} />

            {/* <Label htmlFor="">Find contacts name
                <Input type="text"  onChange={onChange} />
            </Label> */}
        </Wrapper>
    )
}


