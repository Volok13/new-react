import {useForm} from "react-hook-form"
import {joiResolver} from "@hookform/resolvers/joi";
import userValidator from "../validators/user.validator.tsx";


interface IFormProps {
    username: string;
    password: string;
    age: number;
}

const FormsComponents = () => {

    const {
        handleSubmit,
        register,
        formState: { errors, isValid },
    } = useForm<IFormProps>({
        mode:'all', resolver:joiResolver(userValidator)
    });

    const coustomHandler = (formDataProps:IFormProps) => {
        console.log(formDataProps);
    }


    return (
        <div>
            <form onSubmit={handleSubmit(coustomHandler)}>
               <label>
                   <input type="text" {...register('username',
                   // {required: {value: true, message: 'name is required'},
                   //  // pattern:{
                   //  //     value:/\w+/,
                   //  //     message: 'wrong name',
                   //  // },
                   //  minLength: {value:4, message:'wrong name'}}
               )}/>
                   {errors.username && <div>{errors.username.message}</div>}

               </label>
                <label>
                    <input type="text" {...register('password',
                    // {
                    //     required:true,
                    //     minLength: {value: 3, message: 'pass too short'},
                    //     maxLength: {value:6, message:'pass too lenght'}
                    // }
                )}/>
                    {errors.password && <div>{errors.password.message}</div>}
                </label>
                <label>
                    <input type="number" {...register('age',
                    // {required: true,
                    // valueAsNumber: true,
                    // min:{value:1, message:'age too small'},
                    // max: {value: 117, message:'age too big'} }
                )}/>
                    {errors.age && <div>{errors.age.message}</div>}
                </label>
                <button disabled={!isValid}>send</button>
            </form>
        </div>
    );
};

export default FormsComponents;

