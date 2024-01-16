import { useState } from 'react';
import eyeOffLogo from '../icons/eye-off.svg';
import eyeOnLogo from '../icons/eye.svg';
import '../Css/Login.css';
import {useSelector} from 'react-redux';

const SignUp = () => {

    const [emailOfUser,setEmailOfUser] = useState('');
    const [passOfUser,setPassOfUser] = useState('');

    const [login,setLogin] = useState(false);
    const [status,setStatus] = useState(false);

    const userData = useSelector(state => state.users);

    const [icon, setIcon] = useState(false);

    // button clicked work
    const clickEye = () => {
        setIcon((prev) => !prev);

        const password = document.getElementById("password");

        if (password.type === "password") {
            password.type = "text";
        } else {
            password.type = "password";
        }
    }

    // submit work
    const onSubmitForm = (e) =>{
        e.preventDefault();

        const userPresent = userData.some((user) => (user.userEmail === emailOfUser));
        const userPasswordMatch = userData.some((user) => (user.userPassword === passOfUser));
        
        if(userPresent,userPasswordMatch){
            setLogin(prev => !prev);
            setStatus(prev => !prev);
        }else{

            if(!status){
                setStatus(prev => !prev);
            }
            
        }

        setEmailOfUser('');
        setPassOfUser('');
    }


    return (
        <form className='h-max flex justify-center items-center flex-col p-8'
        onSubmit={onSubmitForm}
        >
            <div className="wrapper bg-[#9aded0c2] w-96 h-max p-6 flex justify-center items-center flex-col rounded-2xl">

                <input type="email" placeholder="Enter user email..." className='inputPass w-full flex justify-between border-x-2 border-y-2 border-black items-center h-14 px-2 rounded-2xl m-4 outline-none'
                required
                value={emailOfUser}
                onChange={e => setEmailOfUser(e.target.value)}
                />

                <div className="password  w-full bg-white flex justify-between border-x-2 border-y-2 border-black items-center h-14 px-2 rounded-2xl m-4">

                    <input type="password" placeholder="Enter password..." className='h-full w-full  outline-none border-none rounded-2xl ' id='password'
                        value={passOfUser}
                        onChange={e => setPassOfUser(e.target.value)}
                    />

                    <img src={icon ? eyeOnLogo : eyeOffLogo} alt="" className="w-8 icon bg-white " onClick={clickEye} />

                </div>

                <button className='border-x-2 border-y-2 border-black
                p-3 rounded-2xl bg-white submit'>
                SignUp
                </button>

                {
                    status ?
                    <h2 className='text-xl mt-2 text-green-700 font-semibold'>

                    {login ? "user login" : "invalid data"}
                    </h2>:<div></div>
                }
                
            </div>

        </form>
    );
}

export default SignUp;