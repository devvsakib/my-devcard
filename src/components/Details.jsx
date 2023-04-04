const Details = ({ onInputChange }) => {
    return (
        <>
            <h2 className='font-semibold'>Build Your Developer Card</h2>
            <p className='text-gray-500'>Just enter your details and download your card</p>
            <div className='mt-10'>
                <div className='flex gap-5'>
                    <div className='flex-1'>
                        <label className='block text-sm font-medium text-gray-500'>Name</label>
                        <input name='name' onChange={onInputChange} type="text" className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 outline-none' />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-500'>Bio</label>
                        <input name='bio' onChange={onInputChange} type="text" className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 outline-none' />
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-4 mt-4'>
                    <div className='flex-1'>
                        <label className='block text-sm font-medium text-gray-500'>Avatar</label>
                        <input type="text" className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 outline-none' />
                    </div>
                    <div className='flex-1'>
                        <label className='block text-sm font-medium text-gray-500'>Github</label>
                        <input type="text" className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 outline-none' />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-500'>Twitter</label>
                        <input type="text" className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 outline-none' />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-500'>Linkedin</label>
                        <input type="text" className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 outline-none' />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-500'>Instagram</label>
                        <input type="text" className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 outline-none' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details