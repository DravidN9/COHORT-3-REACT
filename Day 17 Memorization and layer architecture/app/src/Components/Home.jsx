import React from 'react'

function Home({greet}) {
  return (
    <div>
      <h1>Home this side</h1>
    </div>
  )
}

export default React.memo(Home);
