import React, { useEffect, useState } from "react";
import { fetchTodos } from "@/services/todos";

export default function Home() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    async function myFn() {
      const todos = await fetchTodos()
      setTodos(todos)
    }

    myFn()
  }, [])

  return (
    <div className="space-y-5">
      {todos.map((todo, index) => (
        <div key={index} className="p-4 border-4 border-blue-500 shadow-md w-fit mx-auto rounded-full">
          <p >{todo.title}</p>
        </div>
      ))}
    </div>
  );
}
