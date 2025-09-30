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
        pageSource === 'management' ? '/pics/rope.jpg' : '/pics/jump.jpg';
    const pic2 =
        pageSource === 'management' ? '/pics/squat.jpg' : '/pics/plank.jpg';

    const title1part1 =
        pageSource === 'management' ? 'FULL-TIME' : 'TRAINING TEAM';
    const title1part2 =
        pageSource === 'management' ? ' ASSISTANT MANAGER' : ' OPPORTUNITIES';
    const title2part1 =
        pageSource === 'management' ? 'REGIONAL' : 'TRAINING TEAM';
    const title2part2 =
        pageSource === 'management' ? ' CLUB MANAGER' : ' WORK SCHEDULE';

    const subTitle1 =
        pageSource === 'management'
            ? 'Start at $90,000 + $10,000 hiring bonus + incentives (Average first-year earnings: $97,482)'
            : '';
    const subTitle2 =
        pageSource === 'management'
            ? 'Earn up to $127,458 + $25,000 hiring bonus + incentives (Average 4-year Manager earned $147k in 2024)'
            : '';

    const body1 =
        pageSource === 'management' ? (
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        ) : (
            <div>
                <p>Some of the key roles in our Training Team include:</p>
                <ol className='list-disc'>
                    <li className='ml-6'>Sed ut perspiciatis</li>
                    <li className='ml-6'>Consectetur adipiscing elit</li>
                    <li className='ml-6'>Nemo enim</li>
                    <li className='ml-6'>Neque</li>
                    <li className='ml-6'>Excepteur sint occaecat</li>
                    <li className='ml-6'>Itaque earum rerum hic tenetur</li>
                    <li className='ml-6'>Et harum</li>
                    <li className='ml-6'>Lorem ipsum</li>
                    <li className='ml-6'>Dolor sit amet</li>
                    <li className='ml-6'>Fugiat nulla pariatur</li>
                    <li className='ml-6'>Sunt in culpa</li>
                </ol>
            </div>
        );
    const body2 =
        pageSource === 'management' ? (
            'Our club team consists of people passionate about health and fitness who are committed to making the fitness experience at our clubs an exceptional one. They span multiple departments and are responsible for creating and maintaining a clean, fun, friendly environment and helping set the tone for the club experience.'
        ) : (
            <div className='flex flex-col gap-4'>
                <p className='text-xl font-bold'>Shift Work</p>
                <ol className='list-disc text-lg'>
                    <li className='ml-6'>Day Shift: 9:00 AM - 5:00 PM</li>
                    <li className='ml-6'>Swing Shift: 4:00 PM - 11:00 PM</li>
                </ol>
                <p className='text-xl font-bold'>Remote/Hybrid</p>
                <ol className='list-disc text-lg'>
                    <li className='ml-6'>
                        One day per week of remote work after eight months of
                        training
                    </li>
                </ol>
            </div>
        );

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
                            {/* FULL-TIME{' '} */}
                            {title1part1}
                        </span>
                        {title1part2}
                        {/* ASSISTANT MANAGER */}
                    </h2>
                    <p
                        className={`${headlineFont.className} text-black text-xl`}
                    >
                        {subTitle1}
                        {/* Start at $90,000 + $10,000 hiring bonus + incentives
                        (Average first-year earnings: $97,482) */}
                    </p>
                    <div className='bg-black/30 h-0.25 w-full'></div>
                    <p className='text-lg text-black'>
                        {body1}
                        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum. */}
                    </p>
                    {pageSource === 'management' && (
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
                    )}
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
                            {/* REGIONAL{' '} */}
                            {title2part1}
                        </span>
                        {title2part2}
                        {/* CLUB MANAGER */}
                    </h2>
                    <p
                        className={`${headlineFont.className} text-white text-xl`}
                    >
                        {subTitle2}
                        {/* Earn up to $127,458 + $25,000 hiring bonus + incentives
                        (Average 4-year Manager earned $147k in 2024) */}
                    </p>
                    <div className='bg-white/30 h-0.25 w-full'></div>
                    <p className='text-white text-lg'>
                        {body2}
                        {/* Our club team consists of people passionate about health
                        and fitness who are committed to making the fitness
                        experience at our clubs an exceptional one. They span
                        multiple departments and are responsible for creating
                        and maintaining a clean, fun, friendly environment and
                        helping set the tone for the club experience. */}
                    </p>
                    {pageSource === 'management' && (
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
                    )}
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
