import {UserComponent} from "./UserComponent.tsx";
import {useUsersQuery} from "../api/query-hooks.ts";
import {FormDialog} from "./FormDialog.tsx";
import {useState} from "react";
import {LoadingComponent} from "./helpers/Loading.tsx";

interface UsersTableProps {
}

export const UsersTable = ({}: UsersTableProps) => {
    const {
        data: users,
        isLoading,
        isError,
        error,
        isFetching,
    } = useUsersQuery();


    const [editUserId, setEditUserId] = useState<string>('');

    const closeHandler = () => {
        setEditUserId('')
    }


    if (isError) {
        return <div className='flex items-center text-red-500'>Something Went Wrong: {JSON.stringify(error)}</div>;
    }

    if (isLoading || isFetching) {
        return (
            <LoadingComponent/>
        );
    }

    return (
        <>

            <table className="w-full border-collapse">
                <thead>
                <tr className="bg-teal-700 text-white text-left">
                    <th className="px-4 py-3">S.No.</th>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Address</th>
                    <th className="px-4 py-3">Actions</th>
                </tr>
                </thead>

                <tbody>
                {users?.map(user => {
                    return <UserComponent key={user._id} user={user} setEditUserId={setEditUserId}/>
                })}
                </tbody>
            </table>

            {!!editUserId && (
                <FormDialog onClose={closeHandler} userId={editUserId}/>
            )}
        </>

    )
}
