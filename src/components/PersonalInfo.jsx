import { UserIcon } from 'lucide-react'
import React from 'react'

const PersonalInfo = ({data, onChange, removeBg, setRemoveBg}) => {

    const handleChange = (field,value) => {
        onChange({...data, [field]: value})
    }

  return (
    <div>
        <h3 className='text-lg font-semibold text-gray-900'>Personal Information</h3>
        <p className='text-sm text-gray-600'>Get Started With Personal Information</p>
        <div className='flex items-center gap-2'>
            <label>
                {data.image ? (
                    <img src={typeof data.image === 'string' ? data.image : URL.createObjectURL(data.image)} alt="user-image" className='w-16 h-16 rounded-full object-cover mt-5 ring ring-slate-300 hover:opacity-80'/>
                ) : (
                    <div className='inline-flex items-center gap-2 mt-5 text-slate-600 hover:text-slate-700 cursor-pointer'>
                        <UserIcon className='size-10 p-2.5 border rounded-full'/>
                        upload user image
                    </div>
                )}
                <input type="file" accept='image/jpeg, image/png' className='hidden' onChange={(e) => handleChange("image", e.target.files[0])}/>
            </label>
            {typeof data.image === 'object' && (
                <div className='flex flex-col gap-1 text-sm pl-4'>
                    <p>Remove Background</p>
                    <label className='relative inline-flex items-center cursor-pointer text-gray-900 gap-3'>
                        <input type="checkbox" className='sr-only peer' onChange={()=>setRemoveBg(prev => !prev)} checked={removeBg}/>
                        <div className='w-9 h-5 bg-slate-500 rounded-full peer peer-checked:bg-green-600 transition-all duration-300'>
                        </div>
                        <span className='dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-4'></span>
                    </label>
                </div>
            )}
        </div>
    </div>
  )
}

export default PersonalInfo