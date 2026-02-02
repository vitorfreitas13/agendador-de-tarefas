import AddTask from "./components/AddTasks";
import Tasks from "./components/Tasks";

function App() {

  return (
    <div>
      <h1 className="text-red-500 text-3xl">Gerenciador de Tarefas</h1>
      <AddTask />
      <Tasks/>
    </div>
  );
}

export default App;
