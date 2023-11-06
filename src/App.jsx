import * as yup from'yup';
import{useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import instance from'./axios'

function App() {
  const userSchema = yup.object().shape({
    fullname:yup.string().required("please enter full name"),
    email:yup.string().email("please enter a valid email").required("please enter email"),
    password:yup.string().min(4).max(10).required("please enter a password"),
    address:yup.string().required("please enter address")
    });


    const {handleSubmit,register,formState:{errors}} = useForm({
      resolver:yupResolver(userSchema)
    });

const formSubmit = (data)=>{
  console.log(data);
  instance.post('http://localhost:2003/api/v1/register',data)
}

  return (
    <div >

      <form  onSubmit={handleSubmit(formSubmit)}>

        <label htmlFor="fullname">Fullname:</label>
        <input type="text" id="fullname"{...register("fullname")}/> <br/>

        <span>{errors.fullname?.message}</span><br/>

          <label htmlFor="email">Email:</label>
          <input type="email"id="email"{...register("email")}/><br/>
          <span>{errors.email?.message}</span><br/>


          <label htmlFor="password">password</label>
          <input type="password"  id ="password" {...register("password")}/><br/>
          <span>{errors.password?.message}</span><br/>


          <label htmlFor="address">Address:</label>
          <input type ="text"  id="address" {...register("address")}/><br/>
          <span>{errors.password?.message}</span><br/>


<button>Submit</button>
                  

      </form>
    </div>
  );
}

export default App;
