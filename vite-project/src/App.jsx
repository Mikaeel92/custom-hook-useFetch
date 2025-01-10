import React from 'react'
import UseFetch from '../CustomUseFetch'

const App = () => {

  const {data, loading, errorMsg} = UseFetch('https://dummyjson.com/products')

  return (
    <div>
      <h1>UseFetch Hook</h1>
      {loading ? <div>data is loading please wait</div> : null}
      {errorMsg ? <div>error {errorMsg}</div> : null}
      {data && data.products && data.products.length ?
          data.map((item, index) => (
          <p key={index}>{item.title}</p>
        ))
      : null}
    </div>
  )
}

export default App