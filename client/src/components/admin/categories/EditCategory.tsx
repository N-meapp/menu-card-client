import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

function EditCategory({item,setItem,setCategoryUpdated}) {
  

  // const [isCreateClicked,setIsCreateClicked] = useState()
    const [image,setImage] = useState(item.image)
    const [name,setName]  = useState(item.Category_name)
    const [imageUrl,setImageUrl] = useState(`http://127.0.0.1:8000${item.Category_image}`)
  //   const [category,setCategory] = useState('')
  //   const [prize,setPrize] = useState('')
  //   const [offer,setOffer] = useState<any>(null)

  setCategoryUpdated(false)
  
    const handleFileInputChange=(value: any)=>{
  
        const image = value[0]
        setImage(image)
        const url = URL.createObjectURL(image)
        setImageUrl(url)
        console.log('imageurl',imageUrl);
    }
  
  
    const   createItem = ()=>{

        setItem(null)
  
      const formData = {
          Category_name:name,
        Category_image:image
      }
  
      console.log(formData,'formdata....');
      
      axios.put(`http://127.0.0.1:8000/api/Category_update/${item.id}/`,formData,{
        headers:{
          "Content-Type":'multipart/form-data'
        }
      }).then(response => {

        Swal.fire({
          title: "Order placed!",
          icon: "success",
          timer: 1500, 
          showConfirmButton: false 
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer || result.isConfirmed) {
            setCategoryUpdated(true)
          }
        });
        console.log(response.data,'response......'); // Handle successful upload response
      })
      .catch(error => {
        console.error(error); // Handle upload errors
      });
    }
  
  
  
    return (
      <>
        <div className=" w-3/4 mx-auto mb-20 mt-5">
  
        <div className="w-full bg-[#ffffff9e] rounded-lg shadow dark:border mx-auto md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <form className="space-y-4 md:space-y-6">
                  <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        name
                      </label>
                      <input onChange={(e)=>{
                          setName(e.target.value)
                      }}
                      
                        type="name"
                        name="name"
                        id="name"
                        value={name}
                        placeholder="type here"
                        
                        className="rounded-lg shadow-lg border-[1px] border-[#e0dddd38] bg-gray-50 text-gray-900 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                  {/* <div>
                      <label
                        htmlFor="category"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        category
                      </label>
                      <input onChange={(e)=>{
                          setCategory(e.target.value)
                      }}
                        type="category"
                        name="category"
                        id="category"
                        placeholder="type here"
                        className="rounded-lg shadow-lg border-[1px] border-[#e0dddd38] bg-gray-50 text-gray-900 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div> */}
  
  
  
                    <div className="md:flex">
                      
                    
                    {/* <div>
                      <label
                        htmlFor="image"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Image
                      </label>
                      <input onChange={(e)=>{
                          // setUsername(e.target.value)
                      }}
                        type="file"
                        name="image"
                        id="image"
                        className="bg-gray-50 border h-32 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="type here"
                      />
                      
                    </div> */}
  
  
  
  
  
  
  
                    {/* <div className=" w-[20rem] justify-between pt-[2rem] mx-[4rem]"> */}
              
                
              <label
                htmlFor="dropzone-file"
                className="added-image mt-5 mx-auto w-1/2 flex flex-col items-center justify-center rounded-lg shadow-lg border-[1px] border-[#e0dddd38] cursor-pointer"
                style={{ backgroundImage: `url(${imageUrl})` }}
                >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">choose image</span>
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      name="image"
                      className="hidden"
                      onChange={(e)=>{
                        handleFileInputChange(e.target.files);
                      }}
                    />
              </label>
            {/* </div> */}
  
  
  
  
                    </div>
                   
                    <div className="flex items-center justify-between">
                      <div className="flex items-start"></div>
                    </div>
                    <div onClick={createItem} 
                    className="w-full text-[#062a21] bg-[#E8F5E9] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 hover:bg-[#bbe7be] cursor-pointer"
                    >
                     update
                    </div>
                  </form>
                </div>
              </div>
        </div>
      </>
    );
  }

export default EditCategory;