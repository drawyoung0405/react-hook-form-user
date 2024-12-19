
function FormList({ user, deleteUser, handleEdit }) {
    return (
        <>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Full name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email Address
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Address
                            </th>
                            <th scope="col" className="px-6 py-3">
                                City
                            </th>
                            <th scope="col" className="px-6 py-3">
                                District
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map(item => (
                            <tr key={item.id} 
                            className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" 
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.firstName.concat(" ", item.lastName)}
                                </th>

                                <td className="px-6 py-4">
                                    {item.email}
                                </td>
                                <td className="px-6 py-4">
                                    {item.location[0].address}
                                </td>
                                <td className="px-6 py-4">
                                    {item.location[0].city}
                                </td>
                                <td className="px-6 py-4">
                                    {item.location[0].district}
                                </td>
                                <td className="px-6 py-4">
                                    <button type='button' onClick={() =>  handleEdit(item._id)}
                                    href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline pr-7">Edit</button>
                                    <button type='button' onClick={() => deleteUser(item._id)} 
                                    href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
                                </td>
                            </tr>
                        )
                        )
                        }


                    </tbody>
                </table>
            </div>

        </>
    )
}

export default FormList
