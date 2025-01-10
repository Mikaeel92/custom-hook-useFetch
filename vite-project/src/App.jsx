import React from 'react'

const App = () => {

  const {data, loading, errorMsg} = Usefetch('')

  return (
    <div>
      <h1>UseFetch Hook</h1>
    </div>
  )
}

export default App