import { Sparkles } from 'lucide-react'
import React from 'react'

const SummaryForm = ({data, onChange, setResumeData}) => {
  return (
    <div className='space-y-4'>
        <div className='flex items-center justify-between'>
            <div className='space-y-1'>
                <h3 className='flex items-center gap-2 text-lg font-semibold text-gray-900'>Professional Summary</h3>
                <p className='text-sm text-gray-500'>Add Summary For Your Resume Here</p>
            </div>
        </div>

        <div className='mt-6 '>
            <textarea value={data || ""} onChange={(e) => onChange(e.target.value)} rows={7} className='w-full px-4 p-3 mt-2 border text-sm border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none' placeholder='Write a compelling professional summary that highlights your key strengths and career objectives...'/>
            <p className='text-sm text-gray-500 max-w-4/5 mx-auto text-center'>Tip: Keep it concise (3-4 sentences) and focused on your key achievements and skills.</p>
        </div>
    </div>
  )
}

export default SummaryForm