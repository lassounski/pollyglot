import React from "react";

type LanguageSelectorProps = {
    selectedOption: string,
    setSelectedOption: (value: string) => void
}

export default function LanguageSelector({ selectedOption, setSelectedOption }: LanguageSelectorProps) {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
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
    )
}