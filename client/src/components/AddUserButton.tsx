import {FormDialog} from "./FormDialog.tsx";
import {useState} from "react";

interface AddUserButtonProps {
}

export const AddUserButton = ({}: AddUserButtonProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleHandler = () => {
        setIsOpen(o => !o);
    }

    return (
        <>

            <div className="mb-6">
                <button
                    onClick={toggleHandler}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md flex items-center gap-2 transition">
                    <span className="text-lg">+</span>
                    Add User
                </button>
            </div>

            {isOpen && (
                <FormDialog onClose={toggleHandler}/>
            )}
        </>
    )
}
