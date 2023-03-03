// import { Item } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from "redux/operations";
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
     padding: theme.spacing(2),
     display: 'flex',
     justifyContent: 'space-between',
     alignItems: 'center',
     textAlign: 'center',
     color: theme.palette.text.secondary,
     fontWeight:'600'
}));

export const ContactListItem = ({ id, name, number }) => {
     const dispatch = useDispatch()
     const handleDelete = () => dispatch(deleteContact(id));
     return (  
            <Grid item xs={12}>
               <Item>
                    <p>{name} : {number}</p>
                    <Button variant="contained"  type='button' onClick={handleDelete} >Delete</Button>
               </Item>
         </Grid>

     )  
}

