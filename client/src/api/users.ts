const API_BASE = "http://localhost:8000/api";

export interface User {
    _id: string;
    name: string;
    email: string;
    address: string;
}

/* ------------------------ */
/* GET ALL USERS */
/* ------------------------ */
export const fetchUsers = async (): Promise<User[]> => {
    const res = await fetch(`${API_BASE}/users`);
    if (!res.ok) throw new Error("Failed to fetch users");
    return res.json();
};

/* ------------------------ */
/* GET USER BY ID */
/* ------------------------ */
export const fetchUserById = async (id: string): Promise<User> => {
    const res = await fetch(`${API_BASE}/user/${id}`);
    if (!res.ok) throw new Error("Failed to fetch user");
    return res.json();
};

/* ------------------------ */
/* CREATE USER */
/* ------------------------ */
export const createUser = async (
    user: Omit<User, "_id">
): Promise<User> => {
    const res = await fetch(`${API_BASE}/user`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user),
    });

    if (!res.ok) throw new Error("Failed to create user");
    return res.json();
};

/* ------------------------ */
/* UPDATE USER */
/* ------------------------ */
export const updateUser = async (
    id: string,
    user: Omit<User, "_id">
): Promise<User> => {
    const res = await fetch(`${API_BASE}/update/user/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user),
    });

    if (!res.ok) throw new Error("Failed to update user");
    return res.json();
};

/* ------------------------ */
/* DELETE USER */
/* ------------------------ */
export const deleteUser = async (id: string): Promise<{ message: string }> => {
    const res = await fetch(`${API_BASE}/delete/user/${id}`, {
        method: "DELETE",
    });

    if (!res.ok) throw new Error("Failed to delete user");
    return res.json();
};