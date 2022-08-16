import axios from "axios";
import {useForm} from "react-hook-form";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
function Login()
{
    const navigate = useNavigate();
    const Form = styled.div`   
    display:flex;
    justify-content:center;
        
    input{
        // height:3vh;
        // width:15vw;
        border:none;
        background-color:lightgrey;
    }
    
    button{
        border-radius:8px;
        border:none;
    }`
// Hook Form Validation
        const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    //   end

    //   function onSubmit(){

    //     console.log("Success")
    //     navigate("/logout")
    //   }

    const onSubmit = async (data) => {
        try{
            const res = await axios.post(
                "https://sql-dev-india.thewitslab.com:3003/auth/login",
                data
            );
            if(res.status === 200){
            navigate("/logout"); 
            localStorage.setItem("user",JSON.stringify(res));
            }
            // else{
            //     navigate("/"); 
            //     alert("not registered");
            // }

        }catch(err){
                console.log("err", err)
                navigate("/"); 
                alert("not registered");
        }
          
    }
    return( 
        // console.log("hello")
        

    <div className="container">
            <h1>User Login</h1>

        <Form>
            <form onSubmit={handleSubmit(onSubmit)} >
            <input {...register('email', {required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})} placeholder="email"/>
            {errors.email && <p>Please enter valid email </p> }

            <br />

            <input {...register('password', {required: true, minLength:5, maxLength:10})} placeholder="password" type="password"/>
            {errors.password && <p>Please enter valid password </p> }
            <br />
            <button type="submit">Submit</button>
        </form>
        </Form>
    </div>
    );
}

export default Login;
