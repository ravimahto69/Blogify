import Card from 'antd/es/card/Card';
import React from 'react'

const Slug = ({title,data}) => {
    
  return (
    <div>
        <Card className='shadow-lg'>
            <h1 className='text-3xl capitalize font-bold  '>{title.split("-").join(" ")}</h1>
            <p className='text-lg mt-3'>{data.description}</p>
        </Card>
    </div>
  )
}

export default Slug