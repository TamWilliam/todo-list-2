import { TrashIcon, PlusIcon, PencilSquareIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

const IconButtons = () => {
    return (
        <>
            <Link href="/createTodo"><button><PlusIcon class="flex flex-row w-6" /></button></Link>
            <button><PencilSquareIcon class="flex flex-row w-6" /></button>
            <button><TrashIcon class="flex flex-row w-6" /></button>
        </>
    )
}

export default IconButtons