<div>
      <style>{/*
        dialog[open] {{
          animation: 'appear' ,
          animationDuratioin:"500ms"
      }}

         dialog::backdrop {{
          background: 'linear-gradient("45deg", rgba(0, 0, 0, 0.5), rgba(127, 127, 127, 0.5))',
          backdropFilter: 'blur("3px")'
      }}


         @keyframes appear {{y
          from {{
          opacity: 0,
        transform: translateX("-3rem")
        }},

        to {{
          opacity: 1,
        transform: translateX(0)
        }}
      }}  */}
      </style>

      {/* <section className=" flex h-screen w-screen p-10 justify-center items-start">
        <svg onClick="document.getElementById('myModal').showModal()" id="btn" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z">
          </path>
        </svg>
      </section> */}

      <dialog id="myModal" className="h-auto w-11/12 md:w-1/2 p-5  bg-white rounded-md "open>

        <div className="flex flex-col w-full h-auto ">

          <div className="flex w-full h-auto justify-center items-center">
            <div className="flex w-10/12 h-auto py-3 justify-center items-center text-2xl font-bold">
              Brief Details
            </div>
            <div onClick="document.getElementById('myModal').close();"
              className="flex w-1/12 h-auto justify-center cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>

          </div>

          <div className="flex w-10/12 h-auto py-3 justify-start text-lg font-normal">
            Order Details
          </div>

          <div className="flex w-full h-auto my-2 py-5 px-5 justify-between items-center bg-slate-100 rounded text-center text-gray-500 ">
            <p className="px-3 font-medium">Order ID:1688794455811:26test</p>
            <p className="px-3 font-medium">Status: Order Placed</p>
            <p className="px-3 font-medium">Date: Sat Jul 08 2023</p>
          </div>


          <div className="flex w-10/12 h-auto py-3 justify-start text-lg font-normal">
            Product Details
          </div>
          <div className="overflow-auto">
            <table className="w-full text-left table-auto font-normal " id="table-items">
              <thead>
                <tr className="bg-slate-100  text-gray-500  font-normal">
                  <th className="px-2 py-1">Item Name</th>
                  <th className="px-2 py-1 text-right">Qty</th>
                  <th className="px-2 py-1 text-right">Unit Price</th>
                  <th className="px-2 py-1 text-right">Subtotal</th>
                  <th className="px-2 py-1 text-right">Action</th>
                </tr>
              </thead><tr className="odd:bg-slate-100 even:bg-slate-200"/>
                <tbody>
                  <tr className="odd:bg-white even:bg-slate-200">
                    <td className="px-4 py-1 border">Charmeuse Satin Fabric | Silky Soft Satin | 60" Wide | Continuous Yards</td>
                    <td className="px-4 py-1 text-right border">5</td>
                    <td className="px-4 py-1 text-right border">2.8</td>
                    <td className="px-4 py-1 text-right border">14</td>
                    <td><button href="#" className="bg-blue-500 p-1 text-white hover:shadow-lg rounded text-xs">View Product</button></td>
                  </tr>
                  <tr className="odd:bg-white even:bg-slate-200">
                    <td className="px-4 py-1 border">Charmeuse Satin Fabric | Silky Soft Satin | 60" Wide | Continuous Yards</td>
                    <td className="px-4 py-1 text-right border">5</td>
                    <td className="px-4 py-1 text-right border">2.8</td>
                    <td className="px-4 py-1 text-right border">14</td>
                    <td><button href="#" className="bg-blue-500 p-1 text-white hover:shadow-lg rounded text-xs">View Product</button></td>
                  </tr>
                  <tr className="odd:bg-white even:bg-slate-200">
                    <td className="px-4 py-1 border">Charmeuse Satin Fabric | Silky Soft Satin | 60" Wide | Continuous Yards</td>
                    <td className="px-4 py-1 text-right border">5</td>
                    <td className="px-4 py-1 text-right border">2.8</td>
                    <td className="px-4 py-1 text-right border">14</td>
                    <td><button href="#" className="bg-blue-500 p-1 text-white hover:shadow-lg rounded text-xs">View Product</button></td>
                  </tr>
                  <tr className="odd:bg-white even:bg-slate-200">
                    <td className="px-4 py-1 border">Charmeuse Satin Fabric | Silky Soft Satin | 60" Wide | Continuous Yards</td>
                    <td className="px-4 py-1 text-right border">5</td>
                    <td className="px-4 py-1 text-right border">2.8</td>
                    <td className="px-4 py-1 text-right border">14</td>
                    <td><button href="#" className="bg-blue-500 p-1 text-white hover:shadow-lg rounded text-xs">View Product</button></td>
                  </tr>
                  <tr className="odd:bg-white even:bg-slate-200">
                    <td className="px-4 py-1 border">Charmeuse Satin Fabric | Silky Soft Satin | 60" Wide | Continuous Yards</td>
                    <td className="px-4 py-1 text-right border">5</td>
                    <td className="px-4 py-1 text-right border">2.8</td>
                    <td className="px-4 py-1 text-right border">14</td>
                    <td><button href="#" className="bg-blue-500 p-1 text-white hover:shadow-lg rounded text-xs">View Product</button></td>
                  </tr>
                  <tr className="odd:bg-white even:bg-slate-200">
                    <td className="px-4 py-1 border">Charmeuse Satin Fabric | Silky Soft Satin | 60" Wide | Continuous Yards</td>
                    <td className="px-4 py-1 text-right border">5</td>
                    <td className="px-4 py-1 text-right border">2.8</td>
                    <td className="px-4 py-1 text-right border">14</td>
                    <td><button href="#" className="bg-blue-500 p-1 text-white hover:shadow-lg rounded text-xs">View Product</button></td>
                  </tr>
                </tbody>
            </table>
          </div>
        </div>
      </dialog>
    </div>
