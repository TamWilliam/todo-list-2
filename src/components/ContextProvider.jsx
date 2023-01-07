import {
  createContext,
  useCallback,
  useContext as useNativeContext,
  useState,
} from "react"

const initialTodos = [
  {
    id: 1,
    description: "JavaScript DOM"
  },
  {
    id: 2,
    description: "Rust 101"
  },
  {
    id: 3,
    description: "HTML/CSS templating"
  },
]

export const Context = createContext()

export const useContext = () => useNativeContext(Context)

const ContextProvider = (props) => {
  const [nextId, setNextId] = useState(2)
  const [todos, setTodos] = useState(initialTodos)
  const getNextId = useCallback(() => {
    setNextId(nextId + 1)

    return nextId
  }, [nextId])
  const createTodo = useCallback(
    (todo) => {
      setTodos((todos) => [
        ...todos,
        {
          id: getNextId(),
          ...todo,
        },
      ])
    },
    [getNextId]
  )
  const deleteTodo = useCallback(
    (todoId) => setTodos((todos) => todos.filter(({ id }) => id !== todoId)),
    []
  )
  const updateTodo = useCallback((updatedTodo) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    )
  }, [])

  return (
    <Context.Provider
      {...props}
      value={{
        todos,
        createTodo,
        deleteTodo,
        updateTodo,
      }}
    />
  )
}

export default ContextProvider
