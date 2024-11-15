import React, { useState } from 'react'

export default function Header() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="flex flex-col justify-center items-center border-4 border-black rounded-2xl m-4 p-4">
            <p className='w-screen text-center text-2xl font-semibold text-[#035A9D] mb-6 tracking-wide'>Text to translate 👇🏽</p>
            <textarea placeholder='How are you?' className='rounded-lg bg-gray-200 w-full p-4 mb-6'></textarea>
            <p className='w-screen text-center text-2xl font-semibold text-[#035A9D] mb-6 tracking-wide'>Select language 👇🏽</p>
            <div className='flex flex-col self-start ml-8 mb-6'>
                <label className="inline-flex items-center space-x-4">
                    <input
                        type="radio"
                        name="color"
                        value="French"
                        checked={selectedOption === 'French'}
                        onChange={handleChange}
                        className="h-4 w-4"
                    />
                     <span className='text-xl font-semibold'>French 🇫🇷</span>
                </label>
                <label className="inline-flex items-center space-x-4">
                    <input
                        type="radio"
                        name="color"
                        value="Spanish"
                        checked={selectedOption === 'Spanish'}
                        onChange={handleChange}
                        className="h-4 w-4"
                    />
                     <span className='text-xl font-semibold'>Spanish 🇪🇸</span>
                </label>
                <label className="inline-flex items-center space-x-4">
                    <input
                        type="radio"
                        name="color"
                        value="Japanese"
                        checked={selectedOption === 'Japanese'}
                        onChange={handleChange}
                        className="h-4 w-4"
                    />
                    <span className='text-xl font-semibold'>Japanese 🇯🇵</span>
                </label>
            </div>
            <button className='text-white bg-[#035A9D] rounded-lg w-full text-2xl font-semibold tracking-wider p-2 mb-6'>Translate</button>
        </div>
    )
}