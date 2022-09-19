import { useState } from 'react'


function Album({album}) {
    const { title, imagePath } = album;
    return (
        <div className='h-[100vh]'>
            <div className='flex justify-center'>
                <div className='flex-col'>
                    <img className='w-3/12 h-4/6 aspect-[6/7]' src={imagePath} alt={title} />
                    <h2 className='w-fit'>{title}</h2>
                </div>
            </div>
        </div>
    )
}
export default Album