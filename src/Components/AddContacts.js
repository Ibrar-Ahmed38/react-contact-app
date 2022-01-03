import React from 'react'

const AddContacts = () => {
    const HandleSubmit=(e)=>{
        e.preventDefault()

    }

    return (
        <div className='w-full h-12 b-2 text-center font-bold bg-gray-100 md:w-full lg:w-full'>
             <h1 className='pt-3 text-lg md:text-md lg:text-lg'>Contact Manager</h1>
        </div>
    )
}

export default AddContacts
