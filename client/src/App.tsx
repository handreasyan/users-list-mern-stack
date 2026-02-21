import { UsersTable } from "./components/UsersTable.tsx";
import { AddUserButton } from "./components/AddUserButton.tsx";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <div className="bg-white shadow-md rounded-lg p-6">
        <AddUserButton />

        <div className="overflow-x-auto relative">
          <UsersTable />
        </div>
      </div>
    </div>
  );
}

export default App;
