import Image from 'next/image';
import { Anton } from 'next/font/google';
import localFont from 'next/font/local';
const headlineFont = Anton({
    subsets: ['latin'],
    weight: ['400'],
});
const headlineFont2 = localFont({
    src: '../../public/fonts/EurostileExtendedBlack.ttf',
});
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';
import MyButton from '@/components/mybutton';

export default function SplitSection({ pageSource }: { pageSource: string }) {
    const pic1 =
        pageSource === 'management' ? '/pics/rope.jpg' : '/pics/trainer2.jpg';
    const pic2 =
        pageSource === 'management' ? '/pics/squat.jpg' : '/pics/trainer2.jpg';

    return (
        <section className='w-full'>
            <div className='flex w-full'>
                <div className='w-1/2 h-200'>
                    <Image
                        src={pic1}
                        alt='section pic 1'
                        width={300}
                        height={300}
                        className='w-full h-full'
                    />
                </div>
                <div className='flex flex-col gap-4 w-1/2 bg-[var(--color-myRedBg)] h-200 pt-24 px-10'>
                    <h2 className={`${headlineFont2.className} text-5xl`}>
                        <span
                            style={{
                                color: 'transparent',
                                WebkitTextStroke: '2px #000000',
                            }}
                        >
                            FULL-TIME{' '}
                        </span>
                        ASSISTANT MANAGER
                    </h2>
                    <p
                        className={`${headlineFont.className} text-black text-xl`}
                    >
                        Start at $90,000 + $10,000 hiring bonus + incentives
                        (Average first-year earnings: $97,482)
                    </p>
                    <div className='bg-black/30 h-0.25 w-full'></div>
                    <p className='text-lg text-black'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                    <button className='flex gap-2 items-center cursor-pointer'>
                        <p
                            className={`${headlineFont2.className} text-black text-2xl`}
                        >
                            MINIMUM REQUIREMENTS
                        </p>
                        <MdKeyboardDoubleArrowDown
                            size={28}
                            className='text-black animate-bounce'
                        />
                    </button>
                    <div className='w-fit mt-10'>
                        <MyButton
                            text='APPLY NOW'
                            isScrollBtn={false}
                            // scrollRef={scrollRef}
                        />
                    </div>
                </div>
            </div>
            <div className='flex w-full overflow-y-clip'>
                <div className='flex flex-col gap-4 w-1/2 bg-black h-200 pt-24 px-10'>
                    <h2
                        className={`${headlineFont2.className} text-5xl text-[var(--color-myRedBg)]`}
                    >
                        <span
                            style={{
                                color: 'transparent',
                                WebkitTextStroke: '2px #a22c29',
                            }}
                        >
                            REGIONAL{' '}
                        </span>
                        CLUB MANAGER
                    </h2>
                    <p
                        className={`${headlineFont.className} text-white text-xl`}
                    >
                        Earn up to $127,458 + $25,000 hiring bonus + incentives
                        (Average 4-year Manager earned $147k in 2024)
                    </p>
                    <div className='bg-white/30 h-0.25 w-full'></div>
                    <p className='text-white text-lg'>
                        Our club team consists of people passionate about health
                        and fitness who are committed to making the fitness
                        experience at our clubs an exceptional one. They span
                        multiple departments and are responsible for creating
                        and maintaining a clean, fun, friendly environment and
                        helping set the tone for the club experience.
                    </p>
                    <button className='flex gap-2 items-center cursor-pointer'>
                        <p
                            className={`${headlineFont2.className} text-white text-2xl`}
                        >
                            MINIMUM REQUIREMENTS
                        </p>
                        <MdKeyboardDoubleArrowDown
                            size={28}
                            className='text-white animate-bounce'
                        />
                    </button>
                    <div className='w-fit mt-10'>
                        <MyButton
                            text='APPLY NOW'
                            isScrollBtn={false}
                            // scrollRef={scrollRef}
                        />
                    </div>
                </div>
                <div className='w-1/2 h-200'>
                    <Image
                        src={pic2}
                        alt='section pic 2'
                        width={300}
                        height={300}
                        className='w-full h-full'
                    />
                </div>
            </div>
        </section>
    );
}
