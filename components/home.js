'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'
import Navbar from './navbar'
import SecondNavbar from './secondnavbar'
import toast from 'react-hot-toast'
import Image from 'next/Image'
import Hero from './Hero'
import SearchComponent from './SearchComponent'
import Footer from './footer'
import LocationCards from './LocationCards'

const HomeComponent = () => {
    const router = useRouter();
    const [data, setData] = React.useState("nothing");

    const logout = async () => {
        try {
            await axios.get('/api/users/logout');
            toast.success('Logout Successful');
            router.push('/login');
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div className="w-full overflow-hidden min-h-screen">
            <Navbar topic='login' />
            <SecondNavbar />
            <Hero />
            <div className="sm:mx-20 mx-12 my-2">
                <SearchComponent />
            </div>
            <div classname="text-black">
                <LocationCards />
            </div>
            <Footer />
        </div>
    )
}

export default HomeComponent;