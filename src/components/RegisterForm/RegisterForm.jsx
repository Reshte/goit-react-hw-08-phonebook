import { useDispatch } from "react-redux";
import { register } from 'redux/auth/operation';

// export const RegisterForm = () => {
//     const dispatch = useDispatch()

//     const handelSubmit= e=> {
//         e.preventDefault();
//         const form = e.currentTarget;
//         dispatch(register({ name: form.elements.name.value, email: form.elements.email.value, password: form.elements.password.value }))
//         form.reset();
// }

//     return (
//         <form onSubmit={handelSubmit}>
//             <label>
//                 Name
//             <input type="text" name="name" />
//             </label>
//             <label>
//                Email
//             <input type="email" name="email" />
//             </label>
//              <label>
//               Password
//              <input type="password" name="password" />
//             </label>
//             <button type="submit">Sing in</button>
//         </form>
//     )
// }



import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

export const RegisterForm = (props) => {
     const dispatch = useDispatch()

    const handelSubmit= e=> {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(register({ name: form.elements.name.value, email: form.elements.email.value, password: form.elements.password.value }))
        form.reset();
}

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1 }}>
            <AccessibilityNewIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={ handelSubmit } sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  required
                  fullWidth
                  id="Name"
                  type="text"
                  name="name" 
                  label="Name"
                  autoFocus
                />
              </Grid>
             <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                   type="email" name="email" 
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                   label="Password"
                  type="password" name="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/goit-react-hw-08-phonebook/login" variant="body2">
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
       </Container>
    </ThemeProvider>
  );
}