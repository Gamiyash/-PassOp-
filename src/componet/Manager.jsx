
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEdit } from "react-icons/fa";
import { useRef, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const ref = useRef(null);
    const [form, setform] = useState({ site: "", username: "", password: "" });
    const [passwordsArry, setpasswordsArrya] = useState([]);
    const [isVisible, setIsVisible] = useState(true);

    const showpass = () => {
        setIsVisible((prevState) => !prevState);
    };

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setpasswordsArrya(JSON.parse(passwords));
        }
    }, []);

    const Savepass = () => {

        if (!form.site || !form.username || !form.password) {
            toast.error('All fields are required', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        const newPassword = { ...form, id: uuidv4() };
        const updatedPasswordsArray = [...passwordsArry, newPassword];
        setpasswordsArrya(updatedPasswordsArray);
        localStorage.setItem("passwords", JSON.stringify(updatedPasswordsArray));
        

        toast('Your Pricious data  securly saved', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        
        // Reset form to initial state
        setform({ site: "", username: "", password: "" });
    };

    const editpass = (id) => {
        setform(passwordsArry.filter(i => i.id === id)[0]);
        setpasswordsArrya(passwordsArry.filter(item => item.id !== id))
    };

    const deletepass = (id) => {
       let conform = confirm("Are you want to delete this Precious data")
       if(conform){
        const updatedPasswordsArray = passwordsArry.filter(item => item.id !== id);
        setpasswordsArrya(updatedPasswordsArray);
        localStorage.setItem("passwords", JSON.stringify(updatedPasswordsArray));
       }
    };

    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    };

    const copytext = (text) => {
        toast('Copied to clipboard', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        navigator.clipboard.writeText(text);
    };

    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce" />
            <ToastContainer />

           
            <div className=" p-2 md:p-0 md:mycontainer min-h-[85.2vh]">
                <h1 className='text-4xl font-bold text-center'>
                    <span className='text-green-500 '>&lt;</span>
                    <span>Pass</span>
                    <span className='text-green-500 '>OP/ &gt;</span>
                </h1>
                <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>

                <div className="flex flex-col p-4 text-black gap-8 items-center">
                    <input value={form.site} onChange={handlechange} className='rounded-full border border-green-500 w-full px-4 py-1' name='site' placeholder='Enter website URL' type="text" />
                    <div className="flex flex-col md:flex-row w-full gap-8 justify-between">
                        <input value={form.username} onChange={handlechange} className='rounded-full border border-green-500 w-full px-4 py-1' name='username' placeholder='Enter Username' type="text" />
                        <div className="relative">
                            <input value={form.password} onChange={handlechange} className='rounded-full border border-green-500 w-full px-4 py-1' name='password' placeholder='Enter Password' type={isVisible ? "text" : "password"} />
                            <span className='absolute right-3 top-1 cursor-pointer' onClick={showpass}>
                                <img ref={ref} src={isVisible ? './visible.svg' : './invisible.svg'} alt="visible" />
                            </span>
                        </div>
                    </div>
                    <button onClick={Savepass} className='flex justify-center items-center bg-green-500 hover:bg-green-400 gap-2 rounded-full px-8 py-2 w-fit border border-green-900'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover"
                        >
                        </lord-icon>
                        Save Password
                    </button>
                </div>
                <div className="passwords">
                    <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
                    {passwordsArry.length === 0 && <div>NO Passwords to show</div>}
                    {passwordsArry.length !== 0 &&
                        <table className="table-auto w-full overflow-hidden rounded-md mb-3">
                            <thead className='bg-green-800 text-white'>
                                <tr>
                                    <th className='py-2'>Site</th>
                                    <th className='py-2'>Username</th>
                                    <th className='py-2'>Passwords</th>
                                    <th className='py-2'>Actions</th>
                                </tr>
                            </thead>
                            <tbody className='bg-green-100'>
                                {passwordsArry.map((item, index) => (
                                    <tr key={index}>
                                        <td className='py-2 border border-white text-center min-w-32'>
                                            <a href={item.site} target='_blank' rel='noopener noreferrer'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <span>{item.site}</span>
                                                    <div className='cursor-pointer' onClick={() => copytext(item.site)}>
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/depeqmsz.json"
                                                            trigger="hover"
                                                            style={{ width: "20px", height: "20px", paddingTop: "2px" }}>
                                                        </lord-icon>
                                                    </div>
                                                </div>
                                            </a>
                                        </td>
                                        <td className='py-2 border border-white text-center min-w-32'>
                                            <div className='flex justify-center items-center gap-2'>
                                                <span>{item.username}</span>
                                                <div className='cursor-pointer' onClick={() => copytext(item.username)}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/depeqmsz.json"
                                                        trigger="hover"
                                                        style={{ width: "20px", height: "20px", paddingTop: "2px" }}>
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='py-2 border border-white text-center min-w-32'>
                                            <div className='flex justify-center items-center gap-2'>
                                                <span>{item.password}</span>
                                                <div className='cursor-pointer' onClick={() => copytext(item.password)}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/depeqmsz.json"
                                                        trigger="hover"
                                                        style={{ width: "20px", height: "20px", paddingTop: "2px" }}>
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='py-2 border border-white text-center min-w-32'>
                                            <div className='flex justify-center items-center gap-3 cursor-pointer'>
                                                <span onClick={() => editpass(item.id)}><FaEdit /></span>
                                                <span onClick={() => deletepass(item.id)}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/skkahier.json"
                                                        trigger="hover"
                                                        style={{ width: "20px", height: "20px" }}>
                                                    </lord-icon>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>}
                </div>
            </div>
        </div>
    );
};

export default Manager;

