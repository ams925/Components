import React from 'react'

const ManageAdmin = () => {
    return (
        <div className='bg-gray-200 h-full py-2 md:py-10'>
            <div class=" sm:mx-32 lg:mx-32 xl:mx-72 bg-white rounded-lg shadow-2xl">
                <div class="flex justify-between container mx-auto">
                    <div class="w-full">
                        <div class="mt-4 px-4">
                            <h1 class="text-3xl font-semibold py-4 px-4">Edit User</h1>

                            <form class="mx-5 my-5">
                                <label class="relative block p-3 border-2 border-black rounded" htmlFor="name">
                                    <span class="text-lg font-semibold text-zinc-900" htmlFor="name">
                                        Name
                                    </span>
                                    <input class="w-full bg-transparent p-0 text-md  text-gray-500 focus:outline-none" id="name" type="text" placeholder="John Doe" />
                                </label>
                                <div class="mt-5">
                                    <label class="input-field inline-flex items-baseline border-2 border-black rounded  p-4">
                                        <span class="flex-none select-none leading-none">User ID: 
                                        </span>
                                        <div class="flex-1 leading-none">
                                            <input id="handle" type="text" class="w-full pl-1 bg-transparent focus:outline-none" name="handle" placeholder="536265214" />
                                        </div>
                                    </label>
                                </div>

                                <div class="shrink-0 mt-5">
                                    <img class="h-50 w-50 object-cover rounded-lg" src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"/>
                                </div>
                                <label class="block pt-2">
                                    <span class="sr-only t-2">Choose profile photo</span>
                                    <input type="file" class="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg cursor-pointer file:border-0 file:text-sm file:font-semibold file:bg-blue-300 file:text-zinc-900 hover:file:bg-blue-500"/>
                                </label>



                                <label class="relative block p-3 border-2 mt-5 border-black rounded" htmlFor="name">
                                    <span class="text-lg font-semibold text-zinc-900" htmlFor="name">
                                        Email:
                                    </span>

                                    <input class="w-full   p-0 text-md border-none bg-transparent text-gray-500 focus:outline-none" id="name" type="text" placeholder="admin@admin.com" />
                                </label>

                                <label class="relative block p-3 border-2 mt-5 border-black rounded" htmlFor="name">
                                    <span class="text-lg font-semibold text-zinc-900" htmlFor="name">
                                        Phone:
                                    </span>

                                    <input class="w-full   p-0 text-md border-none bg-transparent text-gray-500 focus:outline-none" id="name" type="text" placeholder="01362624585" />
                                </label>

                                <label class="relative block p-3 border-2 mt-5 border-black rounded" htmlFor="name">
                                    <span class="text-lg font-semibold text-zinc-900" htmlFor="name">
                                        Address:
                                    </span>

                                    <input class="w-full   p-0 text-md border-none bg-transparent text-gray-500 focus:outline-none" id="name" type="text" placeholder="Bidesh" />
                                </label>


                                <h1 class="text-2xl font-semibold my-3">Role:</h1>

                                <p class="text-black text-sm font-normal relative flex flex-col md:flex-row  gap-2 pt-2">
                                    <button class="border-2 border-black rounded-md  hover:rounded-md hover:border-b-4 hover:border-l-4 font-black px-4 py-2 hover:border-red-600">Super Admin</button>
                                    <button class="border-2 border-black rounded-md  hover:rounded-md hover:border-b-4 hover:border-l-4 font-black px-4 py-2 hover:border-green-600">Admin</button>
                                    <button class="border-2 border-black rounded-md  hover:rounded-md hover:border-b-4 hover:border-l-4 font-black px-3 py-2 hover:border-orange-600">Modarator</button>
                                </p>
                                {/* <button class="mt-5 border-2 px-5 py-2 rounded-lg border-black border-b-4 font-black translate-y-2 border-l-4 hover:border-red-500">Submit</button> */}
                                <p class="relative flex flex-col md:flex-row  gap-2 mt-8 md:mt-5">
                                   <button class=" border-2 border-black rounded-md  border-b-4 border-l-4 font-black px-5 py-2 hover:border-red-500">Submit</button> 
                                </p>
                                
                            </form>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ManageAdmin