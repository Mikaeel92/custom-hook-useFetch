import React from 'react'
import UseFetch from '../CustomUseFetch'

const App = () => {

  const {data, loading, errorMsg} = UseFetch('https://dummyjson.com/products')

  return (
    <div className='items-center justify-center flex flex-col gap-2'>
      <h1 className='font-bold text-3xl text-gray-900 mt-4'>UseFetch Hook</h1>
      {loading ? <div>data is loading please wait</div> : null}
      {errorMsg ? <div>error {errorMsg}</div> : null}
      {data && data.products && data.products.length ?
          data.products.map((item, index) => (
          <p key={index}>{item.title}</p>
        ))
      : null}
    </div>
  )
}

export default App