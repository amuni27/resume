function User() {
    return (
        <div className="w-40 h-90 rounded-lg overflow-hidden ">
            <img src="/public/img.jpg" className="h-40 w-full object-cover" alt="Your Image" />
            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-lg p-4">
                <p className="text-lg font-semibold">Amanuel Lawro</p>
                <p className="text-sm text-gray-500">Front-end Developer</p>
                <div className="flex items-center mt-2">
                    <a href="#" className="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 hover:text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 11a3 3 0 00-3-3h-1a1 1 0 00-1 1v6a1 1 0 001 1h1a3 3 0 003-3z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 2 2-7 7-2 2zM8 17l-2 2m2-2l7-7 2 2-7 7-2 2z" />
                        </svg>
                    </a>
                    <a href="#" className="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 hover:text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                        </svg>
                    </a>
                    <a href="#" className="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 hover:text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                        </svg>
                    </a>
                    <a href="#" className="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 hover:text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                        </svg>
                    </a>
                </div>
                <button class="bg-blue-500 text-white py-2 px-4 mt-4 rounded">Download CV</button>
            </div>
            <div class="absolute top-0 left-0 right-0 h-px bg-gray-300"></div>
        </div>

    )
}

export default User;