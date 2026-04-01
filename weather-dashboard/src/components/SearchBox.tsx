import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";

interface SearchBoxProps {
    prop_1: string,
}

const SearchBox: React.FC<SearchBoxProps> = ({ prop_1 }) => {

    return (
        <form className="mx-auto px-4 sm:px-6 lg:px-8 min-w-4xl py-2">
            <label className="block py-2 text-2xl leading-6 font-bold text-white">Search a place:</label>
            <div className="flex items-center rounded-md pl-1 outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500 bg-gray-800">
                <MagnifyingGlassCircleIcon className="size-8 text-white h-full" />
                <input type="text" name="search-box" id="search-box" className="block min-w-0 grow bg-gray-800 py-1.5 pr-3 pl-3 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-base/8" />
                <button className="ml-2 px-2 py-2 text-white bg-indigo-400 rounded-md">
                    Search
                </button>
            </div>
        </form>
    );
}

export default SearchBox;