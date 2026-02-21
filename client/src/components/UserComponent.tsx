import type {User} from "../api/users.ts";

interface UserProps {
    user: User

    setEditUserId(id: string): void
}

export const UserComponent = ({user, setEditUserId}: UserProps) => {
    const editHandler = () => {
        setEditUserId(user._id)
    }

    return (

        <tr className="border-b hover:bg-gray-100 transition">
            <td className="px-4 py-3">{user._id}</td>
            <td className="px-4 py-3">{user.name}</td>
            <td className="px-4 py-3">{user.email}</td>
            <td className="px-4 py-3">{user.address}</td>
            <td className="px-4 py-3">
                <div className="flex gap-2">
                    <button
                        onClick={editHandler}
                        className="bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-2 rounded-md transition">
                        ✏️
                    </button>
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md transition">
                        🗑️
                    </button>
                </div>
            </td>
        </tr>
    )
}
