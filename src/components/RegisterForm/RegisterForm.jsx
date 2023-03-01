import { useDispatch } from "react-redux";
import { register } from 'redux/auth/operation';

export const RegisterForm = () => {
    const dispatch = useDispatch()

    const handelSubmit= e=> {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(register({ name: form.elements.name.value, email: form.elements.email.value, password: form.elements.password.value }))
        form.reset();
}

    return (
        <form onSubmit={handelSubmit}>
            <label>
                Name
            <input type="text" name="name" />
            </label>
            <label>
               Email
            <input type="email" name="email" />
            </label>
             <label>
              Password
             <input type="password" name="password" />
            </label>
            <button type="submit">Sing in</button>
        </form>
    )
}