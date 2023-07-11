<div className='md:px-20 px-4'>
      <div className="flex w-full h-auto my-2 py-5 md:py-2 px-5 justify-around items-center bg-slate-100 rounded text-center text-gray-500 md:flex-row flex-col">
        <p className="font-bold text-3xl">Name: John Doe </p>
        <div className=''>
          <p className="py-1 font-medium text-lg">User ID: 1688794455811:26test</p>
          <p className="py-1 font-medium text-lg">Created at: Sat Jul 08 2023</p>
        </div>
      </div>
      <div className="flex w-10/12 h-auto py-2 justify-start text-lg font-normal">
        Contact Information
      </div>
      <div className="flex w-full h-auto my-2 px-4 py-5 justify-around items-center bg-slate-100 rounded text-center text-gray-500">
        <a className="px-3 font-medium  md:text-xl text-lg" href="mailto:John Doe@gmail.com">Email: John Doe@gmail.com</a>
        <a className="px-3 font-medium  md:text-xl text-lg" href="tel:15236453625" >Phone Number: 15236453625</a>
      </div>
      <div className="flex w-10/12 h-auto py-2 justify-start text-lg font-normal">
        Table
      </div>
      <div className="overflow-auto">
        <table className="w-full text-left table-auto font-normal " id="table-items">
          <thead>
            <tr className="bg-slate-100  text-gray-500  font-normal">
              <th className="px-2 py-1"></th>
              <th className="px-2 py-1 text-right"></th>
              <th className="px-2 py-1 text-right"></th>
              <th className="px-2 py-1 text-right"></th>
            </tr>
          </thead><tr className="odd:bg-slate-100 even:bg-slate-200" />
          <tbody>
            <tr className="odd:bg-white even:bg-slate-200">
              <td className="px-4 py-1 border"></td>
              <td className="px-4 py-1 text-right border"></td>
              <td className="px-4 py-1 text-right border"></td>
              <td className="px-4 py-1 text-right border"></td>
            </tr>

          </tbody>
        </table>
      </div>
      <div className="flex w-10/12 h-auto py-2 justify-start text-lg font-normal">
        Order Table
      </div>
      <div className="overflow-auto">

        <table className="w-full text-left table-auto font-normal " id="table-items">
          <thead>
            <tr className="bg-slate-100  text-gray-500  font-normal">
              <th className="px-2 py-1"></th>
              <th className="px-2 py-1 text-right"></th>
              <th className="px-2 py-1 text-right"></th>
              <th className="px-2 py-1 text-right"></th>
            </tr>
          </thead><tr className="odd:bg-slate-100 even:bg-slate-200" />
          <tbody>
            <tr className="odd:bg-white even:bg-slate-200">
              <td className="px-4 py-1 border"></td>
              <td className="px-4 py-1 text-right border"></td>
              <td className="px-4 py-1 text-right border"></td>
              <td className="px-4 py-1 text-right border"></td>
            </tr>

          </tbody>
        </table>
      </div>
      <div className='relative flex justify-center items-center my-5'>
        <div className="stats stats-vertical md:stats-vertical lg:stats-horizontal drop-shadow-2xl text-lg px-7">
          <div className="stat">
            <div className="stat-title text-secondary">Total Speant</div>
            <div className="stat-value text-secondary">3005$</div>
          </div>

          <div className="stat">
            <div className="stat-title">Average Spend</div>
            <div className="stat-value">200$</div>
          </div>

          <div className="stat">
            <div className="stat-title text-secondary">Total Completed Order</div>
            <div className="stat-value text-secondary">100</div>
          </div>
          <div className="stat">
            <div className="stat-title">Total Canceled Order</div>
            <div className="stat-value">100</div>
          </div>
        </div>
      </div>
    </div>
