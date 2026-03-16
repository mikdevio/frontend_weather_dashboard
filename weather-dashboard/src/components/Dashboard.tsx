import SearchBox from "./SearchBox";
import WeatherBox from "./WeatherBox";



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
                <SearchBox prop_1="1" />
                <WeatherBox prop_1="1" />
            </main>
        </>
    )
}

export default Dashboard;