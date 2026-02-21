import type { User } from "../../api/users.ts";
import { useUserByIdQuery } from "../../api/query-hooks.ts";
import { type ChangeEvent, useEffect, useState } from "react";
import { LoadingComponent } from "./../helpers/Loading.tsx";
import { SubmitAction } from "./SubmitAction.tsx";

interface FormDialogProps {
  userId?: string;
  onClose: () => void;
}

export const FormDialog = ({ userId, onClose }: FormDialogProps) => {
  const [userData, setUserData] = useState<User>({
    _id: "",
    address: "",
    email: "",
    name: "",
  });

  const { data: user, isLoading } = useUserByIdQuery(userId || "");

  useEffect(() => {
    if (user) {
      setUserData(user);
    }
  }, [user]);

  const getChangeHandler =
    (key: keyof User) => (event: ChangeEvent<HTMLInputElement>) => {
      setUserData((user) => ({ ...user, [key]: event?.target.value }));
    };

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between  mb-6">
          <h2 className="text-2xl font-bold text-teal-700 text-center">
            {userId ? "EDIT USER" : "ADD NEW USER"}
          </h2>

          <button onClick={onClose} className="cursor-pointer">
            ❌
          </button>
        </div>

        {isLoading ? (
          <LoadingComponent />
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Name:</label>
              <input
                type="text"
                value={userData.name}
                placeholder="John Doe"
                onChange={getChangeHandler("name")}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">E-mail:</label>
              <input
                type="text"
                value={userData.email}
                placeholder="john@gmail.com"
                onChange={getChangeHandler("email")}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Address:</label>
              <input
                type="text"
                value={userData.address}
                placeholder="Enter your Address"
                onChange={getChangeHandler("address")}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <SubmitAction user={userData} onClose={onClose} />
          </div>
        )}
      </div>
    </div>
  );
};
