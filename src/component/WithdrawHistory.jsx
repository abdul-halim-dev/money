import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { FaSearch } from 'react-icons/fa'

const WithdrawHistory = () => {

const tableItem = [
    {id:1, title:"Bangla "},
    {id:1, title:"Sabina "},
    {id:1, title:"Bangladesh "},
    {id:1, title:"Narayon "},
    {id:1, title:"Dhaka "},
    {id:1, title:"Dhaka "},
]


  return (
    <div className='w-full   bg-primary h-screen  '>

    <Header />
    <div className="flex items-center justify-center py-3 bg-secondary shadow-md  " >

        <p className='text-lg font-bold'> Withdraw Log </p>
    </div>

    <div className='w-full  flex items-center justify-center gap-2 flex-col pt-[40px]'>


      
            
<div className='  w-[95%] sm:w-[90%] rounded-lg shadow-lg flex items-center justify-center flex-col gap-3 px-3 bg-secondary py-3'>




 <div className='w-full flex  flex-col gap-2'>
    <div className='w-full flex items-start justify-start gap-2  border-b-2 border-active pb-3 '>
        <input className='bg-primary py-1 pl-3 text-lg font-semibold rounded-xl shadow focus:outline-none focus:border-2 border-active' type="search" name="search" id="search" placeholder='Search by transactions' />
        <button className='bg-active py-[11px] text-secondary px-5 rounded-lg shadow-md '> <FaSearch/> </button>
    </div>

    <div className='w-full flex overflow-auto  '>
    <table class=" border-b-2 pb-3  border-active w-full text-sm text-left rtl:text-right text-black ">
        <thead class="text-xs   text-black uppercase ">
            <tr>
                <th scope="col" class="px-6 py-3">
                Gateway | Transaction
                </th>
                <th scope="col" class="px-6 py-3">
                Initiated
                </th>
                <th scope="col" class="px-6 py-3">
                Amount
                </th>
                <th scope="col" class="px-6 py-3">
                Conversion
                </th>
                <th scope="col" class="px-6 py-3">
                Status
                </th>
                <th scope="col" class="px-6 py-3">
                Details
                </th>
 

            </tr>
        </thead>
        {/* <tbody>
            <tr class="">

                
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>

            </tr>
           
        </tbody> */}

    </table>
    </div>

 
 </div>
    







{/* <table className=' border-b-2 border-active pb-4 w-full flex items-center justify-center flex-col overflow-auto  '>
            <thead className=' w-full border '>
           <tr className=' w-full flex items-center justify-between gap-3 border'>
           <th  >Gateway | Transaction</th>
           <th >Initiated</th>
            <th >Amount</th>
            <th  >Conversion</th>
            <th   >Status</th>
            <th  >Details </th>
           </tr>
            </thead>
            <tbody className='w-full flex items-center justify-between gap-3 border' >
            {
                tableItem.map((item)=>(
                <tr className='border' key={item.id}> <td> { item.title} </td> </tr>
                ))
            }
            </tbody>
</table> */}
     

<div className='   w-full flex items-center justify-center ' >
    <span className='text-sm font-semibold'> Data Not Found </span>
</div>

</div>
      

        


    


    </div>

    <Footer />
</div>
  )
}

export default WithdrawHistory