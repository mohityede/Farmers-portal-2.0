import React, { useState } from 'react';
import { IoMdEyeOff, IoMdEye } from 'react-icons/io';
import { MdOutlineAddAPhoto } from 'react-icons/md';
import { Link } from 'react-router-dom';
import axios from 'axios';

import styles from '../../styles/styles';
import { usersUrl } from '../../server.js';
import '../../App.css';

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const [avatar, setAvatar] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("password", password);
            formData.append("image", avatar);

            const config = { Headers: { "Content-Type": "multipart/form-data" } };
            const res = await axios.post(`${usersUrl}/register`, formData, config);

            const user = res.data.user;
            console.log(user);
        } catch (err) {
            console.log(err);
        }
    }
    const handleUpload = (e) => {
        const file = e.target.files[0];
        setAvatar(file);
    }
    return (
        <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
                    Register Please!
                </h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={ handleSubmit }>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Full Name
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="name"
                                    autoComplete="name"
                                    required
                                    value={ name }
                                    onChange={ (e) => setName(e.target.value) }
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    required
                                    value={ email }
                                    onChange={ (e) => setEmail(e.target.value) }
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    type={ visible ? "text" : "password" }
                                    name="password"
                                    autoComplete="current-password"
                                    required
                                    value={ password }
                                    onChange={ (e) => setPassword(e.target.value) }
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                                { visible ? (
                                    <IoMdEye
                                        className="absolute right-2 top-2 cursor-pointer"
                                        size={ 25 }
                                        onClick={ () => setVisible(false) }
                                    />
                                ) : (
                                    <IoMdEyeOff
                                        className="absolute right-2 top-2 cursor-pointer"
                                        size={ 25 }
                                        onClick={ () => setVisible(true) }
                                    />
                                ) }
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="avatar"
                                className="block text-sm font-medium text-gray-700"
                            ></label>
                            <div className="mt-2 flex items-center">
                                <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                                    { avatar ? (
                                        <img
                                            src={ URL.createObjectURL(avatar) }
                                            alt="avatar"
                                            className="h-full w-full object-cover rounded-full"
                                        />
                                    ) : (
                                        <MdOutlineAddAPhoto className="h-8 w-8" />
                                    ) }
                                </span>
                                <label
                                    htmlFor="file-input"
                                    className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                                >
                                    <span>Upload a file</span>
                                    <input
                                        type="file"
                                        name="avatar"
                                        id="file-input"
                                        accept=".jpg,.jpeg,.png"
                                        onChange={ handleUpload }
                                        className="sr-only"
                                    />
                                </label>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-darkGreen hover:bg-lightGreen"
                            >
                                Submit
                            </button>
                        </div>
                        <div className={ `${styles.noramlFlex} w-full` }>
                            <h4>Not have any account?</h4>
                            <Link to="/login" className="text-blue-600 pl-2">
                                Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            <div className='mt-8'>

            </div>
        </div>
    )
}

export default Signup;