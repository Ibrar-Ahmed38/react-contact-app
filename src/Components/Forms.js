import React from "react";

class Form extends React.Component {
  state ={
      name : "",
      email : "",
  }
  render() {
     const HandleSubmit=(e)=>{
        e.preventDefault()
        if (this.state.name === "" && this.state.email === "") {
            alert("Please fill all your fields")
            return
        }
      }

    return <>
        <div>
        <div>
                <form onSubmit={HandleSubmit}>
                <div className='pt-10'>
                        <label>Name</label>
                        <input type="text" name="name" className='w-1/4 ml-4 h-8 rounded-lg outline-none bg-gray-100' id="" />
                    </div>

                    <div className='pt-5'>
                        <label>Email</label>
                        <input type="text" name="email" className='w-1/4 ml-4 h-8 outline-none rounded-lg bg-gray-100' id="" />
                    </div>
                    <div className='pt-10 '>
                        <button className='bg-blue-700 text-white h-8 rounded-lg w-1/6'>Add</button>

                    </div>
                </form>
            </div>
        </div>
    </>;
  }
}

export default Form