import { TrashIcon, PlusIcon, PencilSquareIcon } from "@heroicons/react/24/solid"

const IconButtons = () => {
    return (
        <>
            <button><PlusIcon class="flex flex-row w-6" /></button>
            <button><PencilSquareIcon class="flex flex-row w-6" /></button>
            <button><TrashIcon class="flex flex-row w-6" /></button>
        </>
    )
}

export default IconButtons