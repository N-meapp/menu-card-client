import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginContext from "../loginContext";
import Swal from 'sweetalert2'

function AdminLogin() {


  const {user,setUser} = useContext(LoginContext)
    const navigate = useNavigate()

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')


    const loginClicked=async ()=>{
        if(username && password ){

          const formData = {
            username:username,
            password:password
          }

        await axios.post('http://127.0.0.1:8000/api/LoginView/',formData).then(response => {
            // setItemsUpdated(true)
            console.log(response.data,'sdfsfsfsd response....'); 
            // if(response.data.message=='Login successful'){

              setUser({token:response.data.token})
              navigate('/admin')
            // }else{

            // }
            // Handle successful upload response
          })
          .catch(error => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.response.data.message,
              // timer:1500,
              customClass: {
                popup: 'custom-popup',
                title: 'custom-title',
                icon: 'custom-icon',
                confirmButton: 'custom-confirm-button'
              },
            });
            console.error(error); // Handle upload errors
          });
          

        } 

    }

  return (
    <>
      <div className="fixed rounded-br-full bg-[#dde2df] admin-background-shape">
      </div>

        <section className="dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a
              href="#"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <h1>Login</h1>
            </a>
            <div className="w-full bg-[#ffffff9e] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <form className="space-y-4 md:space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Username
                    </label>
                    <input onChange={(e)=>{
                        setUsername(e.target.value)
                    }}
                      type="name"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="type here"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                      type="password"
                      name="password"
                      id="password"
                      placeholder="type here"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start"></div>
                  </div>
                  <div onClick={()=>{
                    loginClicked()
                  }}
                    className="w-full text-[#062a21] cursor-pointer bg-[#E8F5E9] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign in
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}


export default AdminLogin;
