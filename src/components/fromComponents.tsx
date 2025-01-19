import {FormEvent, useState} from "react";

interface IFormProps {
    username: string;
    password: string;
}

const FromComponents = () => {


    const [formState, setFormState] = useState<IFormProps>({
        username:'foobar',
        password:'1111'
    })
    const handleSubmite = (e:FormProps<HTMLFormElement>) => {
        e.preventDefault();
        let user = {
            username:formState.username,
            password:formState.password
        }
        console.log(user);


        // let formData =  FormData = {}
        // console.log(e)
        // console.log(e.target)

        // const form = e.target as HTMLFormElement;
        // console.log(form);
        // console.log(form.username);
        // console.log(form.password);
    }
    // const handleUsernameChange = (e:FormEvent<HTMLInputElement>) => {
    //     const input =  e.target as HTMLInputElement;
    //     console.log(input.value);
    //     setFormState({...formState, username:input.value});
    // }
    // const handlePasswordChange = (e:FormEvent<HTMLInputElement>) => {
    //     const input =  e.target as HTMLInputElement;
    //     console.log(input.value);
    //     setFormState({...formState, password:input.value});
    // }

    const handleInputChange = (e:FormEvent<HTMLInputElement>) => {
        const input =  e.target as HTMLInputElement;
        console.log(input.name);
        setFormState({...formState, [input.name]: input.value});
    };

    return (
        <div>
            <form onSubmit={handleSubmite}>
                <input type="text" name={'username'} value={formState.username} onChange={handleInputChange}/>
                <input type="text" name={'password'} value={formState.password} onChange={handleInputChange}/>
                <button>send</button>
            </form>
        </div>
    );





    // const handler = (e:FormEvent<HTMLInputElement>) => {
    //     console.log(e);
    // }

    // return (
    //     <div>
    //         <form>
    //             <input type="text" name={'name'} onChange={handler}/>
    //             <input type="text" name={'password'}/>
    //             <button>send</button>
    //         </form>
    //     </div>
    // );
};

export default FromComponents;