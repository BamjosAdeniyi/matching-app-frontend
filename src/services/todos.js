import axios from 'axios'

const fetchTodos = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
   return res.data
}

const fetchTodo = async (todoId) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
  return res.data
}

export { fetchTodos, fetchTodo }