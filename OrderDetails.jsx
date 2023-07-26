import React from 'react'

const OrderDetails = () => {
  return (
    <div className='px-5'>
      <div className="py-2 text-xl">
        Customer Details
      </div>

      <div className=" w-full h-auto my-5 py-5 px-5  bg-slate-100 rounded text-gray-500 text-lg">
        <p className="px-3 font-medium">Customer Name: Kala Mia</p>
        <p className="px-3 font-medium">Customer ID: 539515135</p>
      </div>

      <div className="py-2 text-xl">
        Customer Shipping Address
      </div>

      <div className=" w-full h-auto my-5 py-5 px-5  bg-slate-100 rounded text-gray-500 text-lg">
        <p className="px-3 font-medium">First Name: Dhaka</p>
        <p className="px-3 font-medium">Last Name: Dhaka</p>
        <p className="px-3 font-medium">Company: Dhaka Ltd.</p>
        <p className="px-3 font-medium">Address: Mohammadpur</p>
        <p className="px-3 font-medium">Appartment: 13/A</p>
        <p className="px-3 font-medium">Zip Code: 1205</p>
        <p className="px-3 font-medium">City: Dhaka</p>
        <p className="px-3 font-medium">State: Dhaka</p>
        <p className="px-3 font-medium">Country: Bangladesh</p>
        <p className="px-3 font-medium">Phone Number: 01953624587</p>
      </div>
      <div className="py-2 text-xl">
        Order
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
          </thead><tr className="odd:bg-slate-100 even:bg-slate-200" />
          <tbody>
            <tr className="odd:bg-white even:bg-slate-200">
              <td className="px-4 py-1 border">Charmeuse Satin Fabric | Silky Soft Satin | 60" Wide | Continuous Yards</td>
              <td className="px-4 py-1 text-right border">5</td>
              <td className="px-4 py-1 text-right border">2.8</td>
              <td className="px-4 py-1 text-right border">14</td>
              <td className='text-right'><button href="#" className="bg-blue-500 p-2 text-white hover:shadow-lg rounded text-xs">View Product</button></td>
            </tr>
            <tr className="odd:bg-white even:bg-slate-200">
              <td className="px-4 py-1 border">Charmeuse Satin Fabric | Silky Soft Satin | 60" Wide | Continuous Yards</td>
              <td className="px-4 py-1 text-right border">5</td>
              <td className="px-4 py-1 text-right border">2.8</td>
              <td className="px-4 py-1 text-right border">14</td>
              <td className='text-right'><button href="#" className="bg-blue-500 p-2 text-white hover:shadow-lg rounded text-xs">View Product</button></td>
            </tr>
            <tr className="odd:bg-white even:bg-slate-200">
              <td className="px-4 py-1 border">Charmeuse Satin Fabric | Silky Soft Satin | 60" Wide | Continuous Yards</td>
              <td className="px-4 py-1 text-right border">5</td>
              <td className="px-4 py-1 text-right border">2.8</td>
              <td className="px-4 py-1 text-right border">14</td>
              <td className='text-right'><button href="#" className="bg-blue-500 p-2 text-white hover:shadow-lg rounded text-xs">View Product</button></td>
            </tr>
            <tr className="odd:bg-white even:bg-slate-200">
              <td className="px-4 py-1 border">Charmeuse Satin Fabric | Silky Soft Satin | 60" Wide | Continuous Yards</td>
              <td className="px-4 py-1 text-right border">5</td>
              <td className="px-4 py-1 text-right border">2.8</td>
              <td className="px-4 py-1 text-right border">14</td>
              <td className='text-right'><button href="#" className="bg-blue-500 p-2 text-white hover:shadow-lg rounded text-xs">View Product</button></td>
            </tr>
            <tr className="odd:bg-white even:bg-slate-200">
              <td className="px-4 py-1 border">Charmeuse Satin Fabric | Silky Soft Satin | 60" Wide | Continuous Yards</td>
              <td className="px-4 py-1 text-right border">5</td>
              <td className="px-4 py-1 text-right border">2.8</td>
              <td className="px-4 py-1 text-right border">14</td>
              <td className='text-right'><button href="#" className="bg-blue-500 p-2 text-white hover:shadow-lg rounded text-xs">View Product</button></td>
            </tr>
            <tr className="odd:bg-white even:bg-slate-200">
              <td className="px-4 py-1 border">Charmeuse Satin Fabric | Silky Soft Satin | 60" Wide | Continuous Yards</td>
              <td className="px-4 py-1 text-right border">5</td>
              <td className="px-4 py-1 text-right border">2.8</td>
              <td className="px-4 py-1 text-right border">14</td>
              <td className='text-right'><button href="#" className="bg-blue-500 p-2 text-white hover:shadow-lg rounded text-xs">View Product</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="py-2 text-3xl font-bold flex justify-end mx-4 my-4">
        Total: 45$
      </div>
    </div>
  )
}

export default OrderDetails