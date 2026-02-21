import { UserComponent } from "./UserComponent.tsx";
import { useUsersQuery } from "../api/query-hooks.ts";
import { FormDialog } from "./form/FormDialog.tsx";
import { useState } from "react";
import { LoadingComponent } from "./helpers/Loading.tsx";

export const UsersTable = ({}) => {
  const {
    data: users,
    isLoading,
    isError,
    error,
    isFetching,
  } = useUsersQuery();

  const [editUserId, setEditUserId] = useState<string>("");

  const closeHandler = () => {
    setEditUserId("");
  };

  if (isError) {
    return (
      <div className="flex items-center text-red-500">
        Something Went Wrong: {JSON.stringify(error)}
      </div>
    );
  }

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <>
      {isFetching && <LoadingComponent line />}

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
          {users?.map((user, index) => {
            return (
              <UserComponent
                key={user._id}
                user={user}
                index={index}
                setEditUserId={setEditUserId}
              />
            );
          })}
        </tbody>
      </table>

      {!!editUserId && (
        <FormDialog onClose={closeHandler} userId={editUserId} />
      )}
    </>
  );
};
