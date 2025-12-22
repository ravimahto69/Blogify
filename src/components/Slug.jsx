import Card from 'antd/es/card/Card';
import React from 'react'

const Slug = ({title}) => {
    
  return (
    <div>
        <Card className='shadow-lg'>
            <h1 className='text-3xl capitalize font-bold  '>{title.split("-").join(" ")}</h1>
        </Card>
    </div>
  )
}

export default Slug