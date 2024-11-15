import React, { useState } from 'react'
import LanguageSelector from './LanguageSelector';
import { translateMessage } from '../lib/OpenAi';

export default function Header() {
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [translation, setTranslation] = useState<string>('');
    const [originalText, setOriginalText] = useState<string>('');


    async function translate() {
        const response = await translateMessage(originalText, selectedOption)
        setTranslation(response.choices[0].message.content ?? '')
    }

    const handleChangeOriginalText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setOriginalText(event.target.value);
    };

    function startOver(): void {
        setTranslation('')
    }

    return (
        <div className="flex flex-col justify-center items-center border-4 border-black rounded-2xl m-4 p-4">
            <p className='w-screen text-center text-2xl font-semibold text-[#035A9D] mb-6 tracking-wide'>
                Text to translate 👇🏽
            </p>
            <textarea placeholder='How are you?'
                className='rounded-lg bg-gray-200 w-full p-4 mb-6'
                value={originalText}
                onChange={handleChangeOriginalText} />

            {translation ?
                <>
                    <p className='w-screen text-center text-2xl font-semibold text-[#035A9D] mb-6 tracking-wide'>
                        Your translation 👇🏽
                    </p>
                    <textarea placeholder='How are you?'
                        className='rounded-lg bg-gray-200 w-full p-4 mb-6'
                        readOnly
                        value={translation} />
                    <button className='text-white bg-[#035A9D] rounded-lg w-full text-2xl font-semibold tracking-wider p-2 mb-6'
                        onClick={startOver}>
                        Start Over
                    </button>
                </>
                :
                <>
                    <p className='w-screen text-center text-2xl font-semibold text-[#035A9D] mb-6 tracking-wide'>
                        Select language 👇🏽
                    </p>
                    <LanguageSelector selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
                    <button className='text-white bg-[#035A9D] rounded-lg w-full text-2xl font-semibold tracking-wider p-2 mb-6'
                        onClick={translate}>
                        Translate
                    </button>
                </>
            }
        </div>
    )
}