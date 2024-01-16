import { useState } from 'react';
import eyeOffLogo from '../icons/eye-off.svg';
import eyeOnLogo from '../icons/eye.svg';
import '../Css/SignUp.css';

import { useDispatch } from 'react-redux';
import { addUser } from '../reducers/UserSlice';

const SignUp = () => {


    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [icon, setIcon] = useState(false);

    const dispatch = useDispatch();

    // what to do when we click the eye button
    const clickEye = () => {
        setIcon((prev) => !prev);

        const password = document.getElementById("password");

        if (password.type === "password") {
            password.type = "text";
        } else {
            password.type = "password";
        }
    }

    // this part handles form submition
    const submitForm = (e) => {
        e.preventDefault();

        dispatch(addUser({ userName, userEmail, userPassword }));

        setUserName('');
        setUserEmail('');
        setUserPassword('');
    }


    return (
        <form className='h-max flex justify-center items-center flex-col p-8' onSubmit={submitForm}>
            <div className="wrapper bg-[#9aded0c2] w-96 h-max p-6 flex justify-center items-center flex-col rounded-2xl">

                <input type="text" placeholder="Enter user name..." className='inputPass w-full flex justify-between border-x-2 border-y-2 border-black items-center h-14 px-2 rounded-2xl m-4 outline-none'
                    required
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                />

                <input type="email" placeholder="Enter user email..." className='inputPass w-full flex justify-between border-x-2 border-y-2 border-black items-center h-14 px-2 rounded-2xl m-4 outline-none'
                    required
                    value={userEmail}
                    onChange={e => setUserEmail(e.target.value)}
                />

                <div className="password  w-full bg-white flex justify-between border-x-2 border-y-2 border-black items-center h-14 px-2 rounded-2xl m-4">

                    <input type="password" placeholder="Enter password..." className='h-full w-full  outline-none border-none rounded-2xl ' id='password'

                        value={userPassword}
                        onChange={e => setUserPassword(e.target.value)}
                    />

                    <img src={icon ? eyeOnLogo : eyeOffLogo} alt="" className="w-8 icon bg-white " onClick={clickEye} />

                </div>

                <button className='border-x-2 border-y-2 border-black
                p-3 rounded-2xl bg-white submit'>
                    SignUp
                </button>
            </div>

        </form>
    );
}

export default SignUp;