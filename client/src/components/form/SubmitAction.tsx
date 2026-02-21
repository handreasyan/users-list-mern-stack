import type { User } from "../../api/users.ts";
import {
  useCreateUserMutation,
  useUpdateUserMutation,
} from "../../api/query-hooks.ts";
import { LoadingComponent } from "../helpers/Loading.tsx";

interface SubmitActionProps {
  user: User;

  onClose(): void;
}

export const SubmitAction = ({ user, onClose }: SubmitActionProps) => {
  const createMutation = useCreateUserMutation();
  const updateMutation = useUpdateUserMutation();

  const createHandler = () => {
    if (user._id) {
      updateMutation.mutate({ id: user._id, user }, { onSuccess: onClose });
    } else {
      const { _id, ...payload } = user;
      createMutation.mutate(payload, { onSuccess: onClose });
    }
  };

  if (createMutation.isPending || updateMutation.isPending) {
    return <LoadingComponent />;
  }

  return (
    <button
      onClick={createHandler}
      className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition font-semibold"
    >
      {user._id ? "Update " : "Create "}User
    </button>
  );
};
