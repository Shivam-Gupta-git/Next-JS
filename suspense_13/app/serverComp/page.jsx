import React, { Suspense } from 'react'
import DataCard from './DataCard'
import LoadingPage from './Loading'

function Page() {
  return (
    <>
    <div className='w-[100%] h-[100vh] bg-green-200 flex flex-col  items-center'>
    <h1 className='mt-5 text-2xl font-bold'>Home Page of Our Component</h1>
    <div className='w-full '>
    <Suspense fallback={<div><LoadingPage/></div>}>
    <DataCard/>
    </Suspense>
    </div>
    </div>
    </>
  )
}

export default Page