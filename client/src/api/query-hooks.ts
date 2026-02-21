import {
    useQuery,
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";
import {
    fetchUsers,
    createUser,
    updateUser,
    deleteUser,
    fetchUserById,
} from "../api/users";
import type {
    User,
} from "../api/users";

/* ------------------------ */
/* GET ALL USERS */
/* ------------------------ */
export const useUsersQuery = () => {
    return useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
    });
};

/* ------------------------ */
/* GET USER BY ID */
/* ------------------------ */
export const useUserByIdQuery = (id: string) => {
    return useQuery({
        queryKey: ["user", id],
        queryFn: () => fetchUserById(id),
        enabled: !!id,
    });
};

/* ------------------------ */
/* CREATE USER */
/* ------------------------ */
export const useCreateUserMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createUser,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["users"]});
        },
    });
};

/* ------------------------ */
/* UPDATE USER */
/* ------------------------ */
export const useUpdateUserMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({id, user,}: {
            id: string;
            user: Omit<User, "_id">;
        }) => updateUser(id, user),

        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["users"]});
        },
    });
};

/* ------------------------ */
/* DELETE USER */
/* ------------------------ */
export const useDeleteUserMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => deleteUser(id),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["users"]});
        },
    });
};