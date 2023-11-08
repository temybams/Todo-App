"use Client";

import { getAllTodos } from "@/api";
import Image from "next/image";
import AddTask from './component/AppTask'
import TodoList from "./component/TodoList";

export default  async function Home() {
  const tasks = await getAllTodos();
  // console.log(tasks);
  return (
    <main className="max-w-4xl m-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Todo List App</h1>
        <AddTask/>
      </div>
      <TodoList  tasks={tasks}/>
    </main>
  );
}
