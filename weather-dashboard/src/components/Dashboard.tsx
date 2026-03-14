import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline"



interface DashboardProps {
    title: string
}


const Dashboard: React.FC<DashboardProps> = ({ title }) => {
    return (
        <>
            <header className="relative bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-white">{title}</h1>
                </div>
            </header>
            <main>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    {/* Cambiado text-sm/6 por text-sm y leading-6 para mayor compatibilidad */}
                    <label className="block text-2xl leading-6 font-bold text-white">Search a place:</label>
                    <div className="mt-2">
                        <div className="flex items-center rounded-md pl-0 outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
                            <input type="text" name="search-box" id="search-box" className="block min-w-0 grow bg-gray-800 py-1.5 pr-3 pl-3 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-base/8" />
                            <div className="grid shrink-0 grid-cols-1 focus-within:relative  bg-auto pr-1 pl-1">
                                <MagnifyingGlassCircleIcon className="size-8 text-white h-full " />
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}

export default Dashboard;