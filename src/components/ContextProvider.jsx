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

const initialTabs = [
  {
    id: 1,
    description: "Homework"
  },
  {
    id: 2,
    description: "Chores"
  },
  {
    id: 3,
    description: "FATALITY"
  },
]

export const Context = createContext()

export const useContext = () => useNativeContext(Context)

const ContextProvider = (props) => {
  const [nextId, setNextId] = useState(2)
  const [todos, setTodos] = useState(initialTodos)
  const [tabs, setTabs] = useState(initialTabs)
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

  const createTab = useCallback(
    (tab) => {
      setTabs((tabs) => [
        ...tabs,
        {
          id: getNextId(),
          ...tab,
        },
      ])
    },
    [getNextId]
  )
  const deleteTab = useCallback(
    (tabId) => setTabs((tabs) => tabs.filter(({ id }) => id !== tabId)),
    []
  )
  const updateTab = useCallback((updatedTab) => {
    setTabs((tabs) =>
      tabs.map((tab) => (tab.id === updatedTab.id ? updatedTab : tab))
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
        tabs,
        createTab,
        deleteTab,
        updateTab,
      }}
    />
  )
}

export default ContextProvider
