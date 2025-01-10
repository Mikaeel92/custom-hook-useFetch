import React from 'react'

const App = () => {

  const {data, loading, errorMsg} = Usefetch('https://dummyjson.com/products')

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