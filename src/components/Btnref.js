import React from 'react'

export default function Btnref() {
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <div>
      <button className='btn btn-primary m-2 ' onClick={handleRefresh}>Refresh</button>
    </div>
  )
}
