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
                    <label className="block text-sm leading-6 font-medium text-white">Price</label>
                    <div className="mt-2">

                        <div className="flex items-center rounded-md bg-white/5 pl-3 outline-white/10">
                            <span className="text-white">Contenido de prueba...</span>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Dashboard;