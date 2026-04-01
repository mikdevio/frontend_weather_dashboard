
import NavBar from "../components/Navbar"
import Dashboard from "../components/Dashboard"
import type { User, NavigationOption, UserOption } from '../types/Types'

import user_df from '../assets/user_default.svg'
import wd_logo from '../assets/wd_logo.svg'
import { WeatherDataProvider } from "../context/WeatherContexto"


const user: User = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl: user_df
}

const navigation: NavigationOption[] = [
  { name: 'Dashboard', href: '#', current: false },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]

const userNavigation: UserOption[] = [
  { name: 'Your profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

export default function Main() {
  return (
    <WeatherDataProvider>
      <div className="min-h-full">
        <NavBar navigationOps={navigation} userOps={userNavigation} user={user} logo={wd_logo} />
        <Dashboard title="Dashboard" />
      </div>
    </WeatherDataProvider>
  )
}