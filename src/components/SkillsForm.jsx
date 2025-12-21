import { Plus, Sparkles, X } from 'lucide-react'
import React, { useState } from 'react'

const SkillsForm = ({data, onChange}) => {

    const [skill, setSkill] = useState("")

    const addSkill = () => {
        if(skill.trim() && !data.includes(skill.trim())) {
            onChange([...data, skill.trim()])
            setSkill("")
        }
    }

    const removeSkill = (index) => {
        onChange(data.filter((_, i) => i !== index))
    }

    const handleKeypress = (e) => {
        if(e.key === 'Enter'){
            e.preventDefault()
            addSkill()
        }
    }

  return (
    <div className='space-y-4'>
        <div className=''>
            <h3 className='flex items-center gap-2 text-lg font-semibold text-gray-900'> Skills </h3>
            <p className='text-sm text-gray-900'>Add Your Technical & Soft Skills</p>
        </div>
        <div className='flex gap-2'>
            <input type="text" placeholder='Enter a Skill (e.g JavaScript, Project Management)' className='flex-1 px-3 py-2 text-sm' onChange={(e) => setSkill(e.target.value)} value={skill} onKeyDown={handleKeypress} />
            <button onClick={addSkill} disabled={!skill.trim()} className='flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'  >
                <Plus className='size -4' /> Add
            </button>
        </div>

        {data.length > 0 ? (
            <div className='flex flex-wrap gap-2'>
                {data.map((skill,index) => (
                    <span key={index} className='flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm'>
                        {skill}
                        <button onClick={() => removeSkill(index)} className='ml-1 hover:bg-blue-200 rounded-full p-0.5 transition-colors'>
                            <X className='w-3 h-3' />
                        </button>
                    </span>
                ))}
            </div>
        ) : (
            <div className='text-center py-6 text-gray-500'>
                <Sparkles className='w-10 h-10 mx-auto mb-2 text-gray-300' />
                <p>No Skills Added Yet</p>
                <p className='text-sm'>Add skills to showcase your expertise.</p>
            </div>
        )}

        <div className='bg-blue-50 p-3 rounded-lg'>
            <p className='text-sm text-blue-800'><strong>Tip: </strong>Add 8-12 relevant skills to make your profile stand out. Include both technical(language & tools) and soft skills(communication & leadership).</p>
        </div>
    </div>
  )
}

export default SkillsForm