import { useState } from 'react';
import { Anton } from 'next/font/google';
import localFont from 'next/font/local';
import { useFormStatus } from 'react-dom';
// import { ErrorBoundary } from "react-error-boundary";

const headlineFont = Anton({
    subsets: ['latin'],
    weight: ['400'],
});
const headlineFont2 = localFont({
    src: '../../public/fonts/EurostileExtendedBlack.ttf',
});

export default function Application({title, subtitle}: {title: string, subtitle?: string}) {
    const [selection, setSelection] = useState('default');

    async function handleSearch(formData: FormData) {
        // form action
        const query = String(formData.get('query'));
        alert(`You searched for '${query}'`);

        try {
            // Keeps pending=true for 3 seconds. Replace with API/DB fetch IRL.
            await new Promise((resolve) => setTimeout(resolve, 3000));
        } catch (error) {
            throw new Error('Form submit error');
        }
    }
    function onSelectionChange(e: React.ChangeEvent<HTMLSelectElement>) {
        // form action
        const theSelection = e.target.value;
        setSelection(theSelection);
        alert(`You selected '${theSelection}'`);
    }

    return (
        <div className='flex flex-col items-center w-full bg-[var(--color-myRedBg)] px-10 py-15'>
            <h2
                className={`${headlineFont2.className} text-center text-5xl text-white`}
            >
                {title}
            </h2>
            {subtitle && <p className='text-white text-xl'>{subtitle}</p>}
            <div className='bg-black rounded-lg p-6 min-w-125 mt-8'>
                <form action={handleSearch} className='flex flex-col gap-2'>
                    <input
                        type='text'
                        name='first'
                        className='bg-white text-black p-2 rounded-sm w-full'
                        placeholder='First Name'
                    />
                    <input
                        type='text'
                        name='last'
                        className='bg-white text-black p-2 rounded-sm w-full'
                        placeholder='Last Name'
                    />
                    <input
                        type='email'
                        name='email'
                        className='bg-white text-black p-2 rounded-sm w-full'
                        placeholder='Email'
                    />
                    <input
                        type='text'
                        name='phone'
                        className='bg-white text-black p-2 rounded-sm w-full'
                        placeholder='Phone'
                    />
                    <select
                        onChange={onSelectionChange}
                        className='bg-white text-black p-2 rounded-sm w-full'
                    >
                        <option value='default'>
                            Which position are your interested in?
                        </option>
                        <option value='management'>Management Team</option>
                        <option value='training'>Training Team</option>
                    </select>
                    <label>
                        <textarea
                            name='message'
                            rows={7}
                            cols={60} // Refactor: This is controlling width of inputs above
                            placeholder='Message'
                            className='bg-white text-black rounded-sm p-2'
                        ></textarea>
                    </label>
                    <div className='flex gap-2 max-w-110'>
                        <input type='checkbox' name='sms-updates' />
                        <p className='text-white text-sm'>
                            By checking this box, I agree to receive SMS updates
                            from FitFusion about recruitment. FitFusion operates
                            an SMS campaign that sends opted-in subscribers
                            messages about recruitment. Message and data rates
                            apply. 
                        </p>
                    </div>
                    <SubmitButton
                        loadingText='SUBMITTING...'
                        idleText='SUBMIT'
                    />
                </form>
            </div>
        </div>
    );
}

function SubmitButton({
    idleText,
    loadingText,
}: {
    idleText: string;
    loadingText: string;
}) {
    const { pending } = useFormStatus();

    return (
        <>
            <button
                type='submit'
                className={`${headlineFont2.className} p-1 hover:cursor-pointer rounded-sm bg-[var(--color-myRedBg)] text-white w-full`}
                disabled={pending}
            >
                {pending ? loadingText : idleText}
            </button>
        </>
    );
}
