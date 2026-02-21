import { useDeleteUserMutation } from "../api/query-hooks.ts";
import { useState } from "react";

interface DeleteActionProps {
  userId: string;
  userName: string;
}

export const DeleteAction = ({ userId, userName }: DeleteActionProps) => {
  const [open, setOpen] = useState(false);
  const deleteMutation = useDeleteUserMutation();

  const handleConfirm = () => {
    deleteMutation.mutate(userId, {
      onSuccess: () => setOpen(false),
    });
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md transition"
      >
        🗑️
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900">Delete user?</h3>

            <p className="mt-2 text-gray-600">
              Are you sure you want to delete{" "}
              <span className="font-semibold">{userName}</span>? This action
              cannot be undone.
            </p>

            {deleteMutation.isError && (
              <p className="mt-3 text-sm text-red-600">
                Failed to delete. Try again.
              </p>
            )}

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setOpen(false)}
                disabled={deleteMutation.isPending}
                className="rounded-md bg-gray-200 px-4 py-2 font-semibold text-gray-800 hover:bg-gray-300 disabled:opacity-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleConfirm}
                disabled={deleteMutation.isPending}
                className="rounded-md bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700 disabled:opacity-50"
              >
                {deleteMutation.isPending ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
