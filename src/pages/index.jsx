import { useContext } from "@/components/ContextProvider.jsx"
import { TrashIcon, PlusIcon, PencilSquareIcon, checkIcon } from "@heroicons/react/24/solid"
import { useCallback } from "react"
import Checkbox from "@/components/Checkbox.jsx"

const IndexPage = () => {
  const { todos, deleteTodo, tabs } = useContext()
  const handleClickDelete = useCallback(
    (event) => {
      const todoId = Number.parseInt(
        event.currentTarget.getAttribute("data-todo-id"),
        10
      )

      deleteTodo(todoId)
    },
    [deleteTodo]
  )

  return (
    <main className="flex flex-col">
      <header className="flex p-4 justify-start items-center border-b">
        {tabs.map((tab) => (
          <tr key={tab.id}>
            <td className="border px-4 py-2">
              {tab.description}</td>
          </tr>
        ))}
      </header>
      <section>
        <PlusIcon class="flex flex-row w-6" />
        <PencilSquareIcon class="flex flex-row w-6" />
        <TrashIcon class="flex flex-row w-6" />
        <table className="w-full mt-8">
          <thead>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td className="border px-4 py-2">
                  <Checkbox />
                  {todo.description}</td>
              </tr>
            ))}
          </tbody>
        </table></section>
    </main>

  )
}

export default IndexPage
