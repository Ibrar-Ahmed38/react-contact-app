import React from 'react'

const contactList = (props) => {
    console.log(props)

    const renderComponents = props.contact.map((contacts) => {
        return (<div>
            <>
                <div className='flex w-full  bg-blue-200 h-20'>
                    <div className='text-center'>
                        <div className='text-2xl'>{contacts.name}</div>
                        <div className='text-sm border-b-2'>{contacts.email}</div>
                    </div>
                    <div className='ml-10 text-center'>
                        <button className='text-2xl'><span><i class="fa fa-trash-o" aria-hidden="true"></i></span></button>
                    </div>
                </div>
            </>
        </div>)
    })
    return (
        <div>

            {renderComponents}
        </div>
    )
}

export default contactList
