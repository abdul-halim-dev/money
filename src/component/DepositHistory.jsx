import React from 'react'
import Footer from './Footer'
import Header from './Header'

const DepositHistory = () => {
  return (
    <div className='w-full   bg-primary h-screen  '>

    <Header/>
    <div className="flex items-center justify-center py-3 bg-secondary shadow-md  " >

        <p className='text-lg font-bold'> Deposit History </p>
    </div>

    <div className='w-full  flex items-center justify-center gap-2 flex-col pt-[40px]'>


      
            
<div className='  w-[95%] sm:w-[90%] rounded-lg shadow-lg flex items-center justify-center flex-col gap-3 px-3 bg-secondary py-3'>




 
     

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

 
 
    
 
<div className='   w-full flex items-center justify-center ' >
    <span className='text-sm font-semibold'> Data Not Found </span>
</div>

</div>
      

        


    


    </div>

    <Footer/>
</div>
  )
}

export default DepositHistory