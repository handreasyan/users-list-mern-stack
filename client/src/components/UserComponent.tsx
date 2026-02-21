import type { User } from "../api/users.ts";
import { DeleteAction } from "./DeleteAction.tsx";

interface UserProps {
  user: User;
  index: number;
  setEditUserId(id: string): void;
}

export const UserComponent = ({ user, setEditUserId, index }: UserProps) => {
  const editHandler = () => {
    setEditUserId(user._id);
  };

  return (
    <tr className="border-b hover:bg-gray-100 transition">
      <td className="px-4 py-3">{index + 1}</td>
      <td className="px-4 py-3">{user.name}</td>
      <td className="px-4 py-3">{user.email}</td>
      <td className="px-4 py-3">{user.address}</td>
      <td className="px-4 py-3">
        <div className="flex gap-2">
          <button
            onClick={editHandler}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-2 rounded-md transition"
          >
            ✏️
          </button>
          <DeleteAction userId={user._id} userName={user.name} />
        </div>
      </td>
    </tr>
  );
};
