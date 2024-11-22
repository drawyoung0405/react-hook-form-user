import React from 'react'
function FormInput() {
  return (
    <div >
      <div >
     <h2 className="font-semibold text-xl text-gray-600">Responsive for</h2>
      <p className="text-gray-500 mb-6">For is mobile responsive. Give it a try.</p>
      <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div className="grid gap-4 gap-y-2 text-sm sm:grid-cols-1 lg:grid-cols-3">
          <div className="text-gray-600">
            <p className="font-medium text-lg">Personal Details</p>
            <p>Please fill out all the fields.</p>
          </div>

          <form className="lg:col-span-2">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-3">
                <label className="text-left block" htmlFor="first_name" >First Name</label>
                <input type="text" 
                name="first_name" 
                id="first_name" 
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
              </div>

              <div className="md:col-span-3">
                <label className="text-left block" htmlFor="last_name">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"                  
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"/>      
              </div>
              <div className="md:col-span-3">
                <label className="text-left block" htmlFor="address">Email Address</label>
                <input
                  type="text"
                  name="email"
                  id="email"                  
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  placeholder="email@domain.com"   
                />      
              </div>

              <div className="md:col-span-5">
                <label className="text-left block" htmlFor="city">Address</label>
                <input 
                type="text" 
                name="address" 
                id="address" 
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                 />
              </div>

              <div className="md:col-span-2">
                <label className="text-left block" htmlFor="city">City</label>
                <select
                  id="city"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                >
                  <option selected>Choose City</option>
                  <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                  <option value="Hà Nội">Hà Nội</option>
                  <option value="Huế">Huế</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="text-left block" htmlFor="district">District</label>
                <select
                  id="district"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                >
                  <option selected>Choose District</option>
                  <option value="Quận 1">Quận 1</option>
                  <option value="Quận 2">Quận 2</option>
                  <option value="Quận 3">Quận 3</option>
                </select>
              </div>
      
              <div className="md:col-span-5 text-right">
                <div className="inline-flex items-end">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
     </div>
    </div>
  )
}

export default FormInput
