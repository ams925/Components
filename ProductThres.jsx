import React from 'react'

const ProductThres = () => {
    return (
        <div>
            <div className='w-full h-auto my-6 lg:mx-0 mx-2 py-5 md:py-2 px-5 justify-around items-center bg-slate-100 rounded text-center text-gray-500'>
            <p className="text-2xl px-2 font-bold  py-2">Product Name: Charmeuse Satin Fabric | Silky Soft Satin | 60" Wide | Continuous Yards</p>

            </div>
            <div className="flex w-full h-auto lg:mx-0 mx-2 my-2 py-5 md:py-2 px-5 justify-around items-center bg-slate-100 rounded text-center text-gray-500 md:flex-row flex-col">
                <p className="font-medium text-xl">Product ID: CHE-5 </p>
                <p className="py-1 font-medium text-xl">Last Updated at: Sat Jul 08 2023</p>
            </div>
            <div className='relative flex justify-center items-center my-5'>
                <div className="stats stats-vertical md:stats-vertical lg:stats-horizontal drop-shadow-2xl text-lg px-7">
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            #(icon)
                        </div>
                        <div className="stat-title ">Product Stock</div>
                        <div className="stat-value text-primary">30</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            #(icon)
                        </div>
                        <div className="stat-title">Product Threshold</div>
                        <div className="stat-value">2</div>
                    </div>
                </div>
            </div>
            <div className='relative flex flex-col justify-center lg:flex-row w-full '>
                <div className="my-2 mx-4 py-4 px-4 bg-white rounded-lg shadow-2xl  lg:px-12 md:px-8 w-full">
                    <h4 className="text-xl text-gray-900 font-bold">Report To:</h4>
                    <input type="email" id="email" name="email" className="py-3 my-4 px-4 block lg:w-52 md:w-96 border-2 border-gray-300 rounded-md text-base" required aria-describedby="email-error" placeholder='Email' />

                    <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Update Email</button>
                </div>
                <div className="my-2 mx-4 py-4 px-4 bg-white rounded-lg shadow-2xl  lg:px-12 md:w-92 w-full">
                    <h4 className="text-xl text-gray-900 font-bold">Update Stock:</h4>
                    <input type="text" id="text" name="email" className="py-3 my-4 px-4 block lg:w-52 md:w-96 border-2 border-gray-300 rounded-md text-base" required aria-describedby="email-error" placeholder='Stocks' />

                    <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Update Stocks</button>
                </div>
                <div className="my-2 mx-4 py-4 px-4 bg-white rounded-lg shadow-2xl  lg:px-12 md:w-92 w-full">
                    <h4 className="text-xl text-gray-900 font-bold">Update Threshold:</h4>
                    <input type="email" id="email" name="email" className="py-3 my-4 px-4 block lg:w-52 md:w-96 border-2 border-gray-300 rounded-md text-base" required aria-describedby="email-error" placeholder='Threshold' />

                    <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Update Threshold</button>
                </div>
            </div>
            <div className="mt-10 mb-5 w-full h-auto py-5 md:py-2 px-5 bg-slate-100 rounded text-black ">
                <p className="font-bold text-2xl">Update Log: </p> 
            </div>
            <div className="overflow-auto">
            <table className="w-full text-left table-auto font-normal " id="table-items">
              <thead>
                <tr className="bg-slate-100  text-gray-500  font-normal">
                  <th className="px-2 py-1">Quantity</th>
                  <th className="px-2 py-1">Updated By</th>
                  <th className="px-2 py-1">Date</th>
                </tr>
              </thead><tr className="odd:bg-slate-100 even:bg-slate-200"/>
                <tbody>
                  <tr className="odd:bg-white even:bg-slate-200">
                    <td className="px-4 py-1 text-Left border">5</td>
                    <td className="px-4 py-1 text-Left border">John Doe</td>
                    <td className="px-4 py-1 text-left border">5 june 2023</td>
                  </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default ProductThres