import type {User} from "../api/users.ts";
import {useUserByIdQuery} from "../api/query-hooks.ts";
import {useEffect, useState} from "react";
import {LoadingComponent} from "./helpers/Loading.tsx";

interface FormDialogProps {
    userId?: string
    onClose: () => void,
}

export const FormDialog = ({userId, onClose}: FormDialogProps) => {
    const [userData, setUserData] = useState<User>({_id: '', address: '', email: '', name: ''});

    const {
        data: user,
        isLoading,
    } = useUserByIdQuery(userId || "");


    useEffect(() => {
        if (user) {
            setUserData(user)
        }
    }, [user]);

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={onClose}>

            <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative"
                 onClick={e => e.stopPropagation()}>


                <div className='flex items-center justify-between  mb-6'>
                    <h2 className="text-2xl font-bold text-teal-700 text-center">
                        {userId ? 'EDIT USER' : "ADD NEW USER"}
                    </h2>

                    <button onClick={onClose} className='cursor-pointer'>❌</button>
                </div>

                {isLoading ? (
                    <LoadingComponent/>
                ) : (
                    <form className="space-y-4">

                        <div>
                            <label className="block mb-1 font-medium">Name:</label>
                            <input
                                type="text"
                                value={userData.name}
                                placeholder="John Doe"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">E-mail:</label>
                            <input
                                type="email"
                                value={userData.email}
                                placeholder="john@gmail.com"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Address:</label>
                            <input
                                type="text"
                                value={userData.address}
                                placeholder="Enter your Address"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition font-semibold"
                        >
                            {userId ? 'Update ' : 'Create '}User
                        </button>

                    </form>
                )}


            </div>
        </div>
    )
}
