import { useContext } from "@/components/ContextProvider.jsx"
import { TrashIcon, PlusIcon, PencilSquareIcon, checkIcon } from "@heroicons/react/24/solid"
import Checkbox from "@/components/Checkbox.jsx"
import IconButtons from "@/components/IconButtons.jsx"

const IndexPage = () => {
  const { todos, tabs } = useContext()

  return (
    <main className="flex flex-col">
      <header className="flex justify-start items-center border-b">
        {tabs.map((tab) => (
          <tr key={tab.id}>
            <td className="border px-4 py-2">
              {tab.description}
            </td>
          </tr>
        ))}
      </header>
      <section>
        <IconButtons />
        <table className="w-full">
          <thead>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td className="border px-2 py-1">
                  <Checkbox />
                  {todo.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>

  )
}

export default IndexPage
