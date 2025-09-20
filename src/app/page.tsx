'use client';
import Image from 'next/image';
import { useState } from 'react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Application from '@/components/application';
import MyButton from '@/components/mybutton';
import { useRef } from 'react';
import { Anton } from 'next/font/google';
import localFont from 'next/font/local';
import { FaPeopleGroup } from 'react-icons/fa6';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { HiArrowSmallLeft, HiArrowSmallRight } from 'react-icons/hi2';
import Hero from '@/components/hero';

const headlineFont = Anton({
    subsets: ['latin'],
    weight: ['400'],
});

const headlineFont2 = localFont({
    src: '../../public/fonts/EurostileExtendedBlack.ttf',
});

export default function Home() {
    const scrollRef = useRef<HTMLElement | null>(null);

    const workCards = [
      {
        imageName: 'fistbump',
        altName: 'fist bump',
        title: 'Healthy Culture',
        text: 'We foster a supportive, family-like environment where employees are valued, respected, and connected. You’re not just a number—you’re part of a team that looks out for one another.',
        imageFormat: 'jpg',
        borderColor: '[var(--color-myRedBg)]'
      },
      {
        imageName: 'trainer2',
        altName: 'trainer',
        title: 'Autonomy',
        text: 'Our team consist of trusted professionals with the independence to make decisions that keep FitFusion thriving. We empower you to take action and make a real impact in your community.',
        imageFormat: 'jpg',
        borderColor: '[var(--color-myRedBg)]'
      },
      {
        imageName: 'group',
        altName: 'group',
        title: 'Opportunities',
        text: 'No wait for specialty roles—just complete our development program. Advance your career with numerous specialized and instructor positions.',
        imageFormat: 'jpeg',
        borderColor: '[var(--color-myRedBg)]'
      },
      {
        imageName: 'smile',
        altName: 'smile',
        title: 'Community Support',
        text: 'We’re committed to providing a supportive and inclusive community where everyone can thrive. Whether you’re a new hire or a seasoned employee, we’re here to help you succeed.',
        imageFormat: 'jpg',
        borderColor: '[var(--color-myRedBg)]'
      },
      {
        imageName: 'equip',
        altName: 'equipment',
        title: 'Top-Tier Equipment',
        text: 'Take-home equipment, cutting-edge facilities, and premium clients—ensuring you’re always equipped with what you need to succeed.',
        imageFormat: 'jpg',
        borderColor: '[var(--color-myRedBg)]'
      }
    ];

    const liveCards = [
        {
            imageName: 'portland',
            altName: 'portland',
            title: 'Affordable Living',
            text: 'Competitive cost of living with no state income tax means more money in your pocket.',
            imageFormat: 'jpg',
            borderColor: 'white',
        },
        {
            imageName: 'falls',
            altName: 'falls',
            title: 'Outdoor Recreation & Natural Beauty',
            text: 'Located in the heart of the Pacific Northwest, FitFusion offers easy access to stunning landscapes, from the Columbia River to Mount St. Helens and the Pacific Ocean. Enjoy year-round activities like hiking, fishing, and skiing, all just a short drive away.',
            imageFormat: 'jpg',
            borderColor: 'white',
        },
        {
            imageName: 'portland2',
            altName: 'portland2',
            title: 'Ideal Climate',
            text: 'Enjoy mild, comfortable seasons with warm, sunny summers—perfect for outdoor activities year-round.',
            imageFormat: 'jpg',
            borderColor: 'white',
        },
        {
            imageName: 'kids',
            altName: 'kids',
            title: 'Family-Friendly',
            text: 'A great place to raise a family, with excellent schools, safe neighborhoods, and a strong sense of community.',
            imageFormat: 'jpg',
            borderColor: 'white',
        },
        {
            imageName: 'portland3',
            altName: 'portland3',
            title: 'City Access, No Congestion',
            text: 'Just a short drive to Portland, Oregon for top-tier dining, entertainment, and shopping—without the congestion.',
            imageFormat: 'jpg',
            borderColor: 'white',
        },
    ];

    return (
        <main>
            <Navbar scrollRef={scrollRef} />
            <Hero
                scrollRef={scrollRef}
                pageSource={'home'}
                // bgVid={
                //     'https://general-xreed.s3.us-west-2.amazonaws.com/vid.mp4'
                // }
                bgVid={null}
                btnText={'VIEW OPEN POSITIONS'}
            />
            <section className='flex text-white' ref={scrollRef}>
                <div className='relative'>
                    <Image
                        src='/pics/jump.jpg'
                        alt='quads'
                        width={800}
                        height={600}
                    />
                    <div className='absolute inset-0 flex flex-col justify-end pl-4 pb-4'>
                        <h2
                            className={`${headlineFont2.className} text-6xl`}
                            style={{
                                color: 'transparent',
                                WebkitTextStroke: '1px #FFFFFF',
                            }}
                        >
                            Management
                        </h2>
                        <h2 className={`${headlineFont2.className} text-6xl`}>
                            Team
                        </h2>
                    </div>
                </div>
                <div className='relative'>
                    <Image
                        src='/pics/weight.jpg'
                        alt='deadlift'
                        width={800}
                        height={600}
                    />
                    <div className='absolute inset-0 flex flex-col justify-end pl-4 pb-4'>
                        <h2
                            className={`${headlineFont2.className} text-6xl`}
                            style={{
                                color: 'transparent',
                                WebkitTextStroke: '1px #FFFFFF',
                            }}
                        >
                            Training
                        </h2>
                        <h2 className={`${headlineFont2.className} text-6xl`}>
                            Team
                        </h2>
                    </div>
                </div>
            </section>
            <section>
                <div className='flex justify-center py-20'>
                    <iframe
                        // width='560'
                        // height='315'
                        className='border-1 border-black/30 p-4'
                        width='80%' // REFACTOR
                        height='415'
                        // src='https://www.youtube.com/embed/kj6F7H68PW4?si=pifPAuyyGkd7I9XO'
                        src='null'
                        title='YouTube video player'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
            <section className='flex flex-col items-center px-6 py-20 bg-[var(--color-myRedBg)]'>
                <h2
                    className={`${headlineFont2.className} text-center text-5xl`}
                >
                    <span
                        style={{
                            color: 'transparent',
                            WebkitTextStroke: '2px #FFFFFF',
                        }}
                    >
                        BE&nbsp;
                    </span>
                    A PART OF A CULTURE
                </h2>
                <h2
                    className={`${headlineFont2.className} text-center text-5xl`}
                >
                    <span
                        style={{
                            color: 'transparent',
                            WebkitTextStroke: '2px #FFFFFF',
                        }}
                    >
                        WHERE&nbsp;
                    </span>
                    OUR PEOPLE MATTER.
                </h2>
                <div className='bg-black w-full h-0.25 my-8'></div>
                <div className='flex flex-col text-center text-xl mb-10 text-white'>
                    <p>{`At FitFusion, our employees are more than just staff - they're family.`}</p>
                    <p>{`We're here to help you achieve your goals and reach your full potential, helping our community of fitness enthusiasts to achieve their dreams so that they can reach their full potential.`}</p>
                </div>
                <h3
                    className={`${headlineFont.className} text-center text-3xl mb-4 text-white`}
                >
                    Our Values:
                </h3>
                <div className='flex gap-6'>
                    <div className='border-1 border-white h-60 w-60 relative'>
                        <Image
                            src='/pics/run.jpeg'
                            alt='run'
                            width='300'
                            height='300'
                            className='absolute'
                        />
                        <div className='bg-[var(--color-myRedBg)]/60 w-full h-full absolute'></div>
                        <p
                            className={`${headlineFont2.className} absolute bottom-20 text-white text-xl text-center`}
                        >
                            Hard work and Dedication
                        </p>
                    </div>
                    <div className='border-1 border-white h-60 w-60 relative'>
                        <Image
                            src='/pics/run2.jpeg'
                            alt='run'
                            width='300'
                            height='300'
                            className='absolute'
                        />
                        <div className='bg-[var(--color-myRedBg)]/60 w-full h-full absolute'></div>
                        <p
                            className={`${headlineFont2.className} absolute bottom-20 text-white text-xl text-center`}
                        >
                            Teamwork and Unity
                        </p>
                    </div>
                    <div className='border-1 border-white h-60 w-60 relative'>
                        <Image
                            src='/pics/outside.jpeg'
                            alt='run'
                            width='300'
                            height='300'
                            className='absolute'
                        />
                        <div className='bg-[var(--color-myRedBg)]/60 w-full h-full absolute'></div>
                        <p
                            className={`${headlineFont2.className} absolute bottom-25 text-white text-xl text-center`}
                        >
                            Work-Life Balance
                        </p>
                    </div>
                    <div className='border-1 border-white h-60 w-60 relative'>
                        <Image
                            src='/pics/color.jpg'
                            alt='run'
                            width='300'
                            height='300'
                            className='absolute'
                        />
                        <div className='bg-[var(--color-myRedBg)]/60 w-full h-full absolute'></div>
                        <p
                            className={`${headlineFont2.className} absolute bottom-20 text-white text-xl text-center`}
                        >
                            Personal Integrity and Respect
                        </p>
                    </div>
                </div>
            </section>
            <section className='bg-black text-white py-20'>
                <h2 className={`${headlineFont2.className} text-5xl mb-12 px-8`}>
                    <span
                        style={{
                            color: 'transparent',
                            WebkitTextStroke: '2px #FFFFFF',
                        }}
                    >
                        WHY&nbsp;
                    </span>
                    WORK HERE
                </h2>
                <div className='bg-white h-0.25 my-10 mx-8'></div>
                <div className='flex flex-col gap-4 ml-8'>
                    <CardCarousel cards={workCards} />
                    {/* <div className='flex gap-6 flex-nowrap overflow-x-auto'>
                        <Card
                            imageName='fistbump'
                            altName='fist bump'
                            title='Healthy Culture'
                            text='We foster a supportive, family-like environment where employees are valued, respected, and connected. You’re not just a number—you’re part of a team that looks out for one another.'
                            imageFormat='jpg'
                            borderColor='[var(--color-myRedBg)]'
                        />
                        <Card
                            imageName='trainer2'
                            altName='trainer'
                            title='Autonomy'
                            text='Our team consist of trusted professionals with the independence to make decisions that keep FitFusion thriving. We empower you to take action and make a real impact in your community.'
                            imageFormat='jpg'
                            borderColor='[var(--color-myRedBg)]'
                        />
                        <Card
                            imageName='group'
                            altName='group'
                            title='Opportunities'
                            text='No wait for specialty roles—just complete our development program. Advance your career with numerous specialized and instructor positions.'
                            imageFormat='jpeg'
                            borderColor='[var(--color-myRedBg)]'
                        />
                        <Card
                            imageName='smile'
                            altName='smile'
                            title='Community Support'
                            text='We’re committed to providing a supportive and inclusive community where everyone can thrive. Whether you’re a new hire or a seasoned employee, we’re here to help you succeed.'
                            imageFormat='jpg'
                            borderColor='[var(--color-myRedBg)]'
                        />
                        <Card
                            imageName='equip'
                            altName='equipment'
                            title='Top-Tier Equipment'
                            text='Take-home equipment, cutting-edge facilities, and premium clients—ensuring you’re always equipped with what you need to succeed.'
                            imageFormat='jpg'
                            borderColor='[var(--color-myRedBg)]'
                        />
                    </div>
                    <div className='flex gap-4'>
                        <button className='w-15 h-15 bg-black border-1 border-white flex justify-center items-center cursor-pointer'>
                            <HiArrowSmallLeft
                                size={30}
                                className='text-white'
                            />
                        </button>
                        <button className='w-15 h-15 bg-black border-1 border-white flex justify-center items-center cursor-pointer'>
                            <HiArrowSmallRight
                                size={30}
                                className='text-white'
                            />
                        </button>
                    </div> */}
                </div>
            </section>
            <section className='bg-[var(--color-myRedBg)] text-white py-20 mb-12'>
                <h2 className={`${headlineFont2.className} text-5xl px-8`}>
                    <span
                        style={{
                            color: 'transparent',
                            WebkitTextStroke: '2px #FFFFFF',
                        }}
                    >
                        WHY&nbsp;
                    </span>
                    LIVE HERE
                </h2>
                <div className='bg-white h-0.25 my-10 mx-8'></div>
                <div className='flex flex-col gap-4 ml-8'>
                    <CardCarousel cards={liveCards} />
                    {/* <div className='flex gap-6 flex-nowrap overflow-x-auto'> */}
                    {/* <Card
                            imageName='portland'
                            altName='portland'
                            title='Affordable Living'
                            text='Competitive cost of living with no state income tax means more money in your pocket.'
                            imageFormat='jpg'
                            borderColor='white'
                        />
                        <Card
                            imageName='falls'
                            altName='falls'
                            title='Outdoor Recreation & Natural Beauty'
                            text='Located in the heart of the Pacific Northwest, FitFusion offers easy access to stunning landscapes, from the Columbia River to Mount St. Helens and the Pacific Ocean. Enjoy year-round activities like hiking, fishing, and skiing, all just a short drive away.'
                            imageFormat='jpg'
                            borderColor='white'
                        />
                        <Card
                            imageName='portland2'
                            altName='portland2'
                            title='Ideal Climate'
                            text='Enjoy mild, comfortable seasons with warm, sunny summers—perfect for outdoor activities year-round.'
                            imageFormat='jpg'
                            borderColor='white'
                        />
                        <Card
                            imageName='kids'
                            altName='kids'
                            title='Family-Friendly'
                            text='A great place to raise a family, with excellent schools, safe neighborhoods, and a strong sense of community.'
                            imageFormat='jpg'
                            borderColor='white'
                        />
                        <Card
                            imageName='portland3'
                            altName='portland3'
                            title='City Access, No Congestion'
                            text='Just a short drive to Portland, Oregon for top-tier dining, entertainment, and shopping—without the congestion.'
                            imageFormat='jpg'
                            borderColor='white'
                        /> */}
                    {/* </div> */}
                    {/* <div className='flex gap-4'>
                        <button className='w-15 h-15 bg-black border-1 border-white flex justify-center items-center cursor-pointer'>
                            <HiArrowSmallLeft
                                size={30}
                                className='text-white'
                                // className='text-[var(--color-myRedBg)]'
                            />
                        </button>
                        <button className='w-15 h-15 bg-black border-1 border-white flex justify-center items-center cursor-pointer'>
                            <HiArrowSmallRight
                                size={30}
                                className='text-white'
                                // className='text-[var(--color-myRedBg)]'
                            />
                        </button>
                    </div> */}
                </div>
            </section>
            <section className='flex flex-col items-center text-black py-20 px-8'>
                <h2 className={`${headlineFont2.className} text-5xl`}>
                    <span
                        style={{
                            color: 'transparent',
                            WebkitTextStroke: '2px #000000',
                        }}
                    >
                        PICK&nbsp;
                    </span>
                    THE CAREER PATH
                </h2>
                <h2 className={`${headlineFont2.className} text-5xl`}>
                    <span
                        style={{
                            color: 'transparent',
                            WebkitTextStroke: '2px #000000',
                        }}
                    >
                        THAT IS&nbsp;
                    </span>
                    RIGHT FOR YOU
                </h2>
                <div className='bg-black h-0.25 w-full my-8'></div>
                <div className='flex justify-between gap-6'>
                    <div className='py-10 px-15 border-1 w-125 border-[var(--color-myRedBg)] flex flex-col items-center gap-2'>
                        <FaPeopleGroup
                            size={30}
                            className='text-[var(--color-myRedBg)]'
                        />
                        <h2
                            className={`${headlineFont2.className} text-3xl text-center`}
                        >
                            Management Team
                        </h2>
                        <p className='text-center text-md mb-2'>
                            Why join management? Our Management Team is
                            entrusted with the responsibility of managing the
                            day-to-day operations of the company.
                        </p>
                        <MyButton text='LEARN MORE' isScrollBtn={false} />
                    </div>
                    <div className='py-10 px-15 border-1 w-125 border-[var(--color-myRedBg)] flex flex-col items-center gap-2'>
                        <GiWeightLiftingUp
                            size={30}
                            className='text-[var(--color-myRedBg)]'
                        />
                        <h2
                            className={`${headlineFont2.className} text-3xl text-center`}
                        >
                            Training Team
                        </h2>
                        <p className='text-center text-md mb-2'>
                            Looking for a range of job duties to help support
                            our staff and community? Our Training Team provides
                            a full range of functions and a high level of
                            service to our company and community.
                        </p>
                        <MyButton text='LEARN MORE' isScrollBtn={false} />
                    </div>
                </div>
            </section>
            <section>
                <Application />
            </section>
            <Footer />
        </main>
    );
}

export function CardCarousel({ cards }: { cards: any[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleLeftClick = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
    };

    const handleRightClick = () => {
        setCurrentIndex((prev) => Math.min(cards.length - 1, prev + 1));
    };

    //     return (
    //     <div className='flex flex-col gap-4'>
    //         <div className='flex gap-6 flex-nowrap overflow-x-auto relative'>
    //             {cards.map((card, cardIndex) => (
    //                 <div
    //                     key={cardIndex}
    //                     className={`transition-all duration-500 flex-shrink-0 ${
    //                         cardIndex < currentIndex ? 'absolute z-10' : 'relative z-0'
    //                     }`}
    //                     style={{
    //                         transform: cardIndex < currentIndex
    //                             ? `translateX(-${(cardIndex + 1) * 20}px) translateY(-${(cardIndex + 1) * 10}px)`
    //                             : 'translateX(0) translateY(0)',
    //                         left: cardIndex < currentIndex ? `${cardIndex * 20}px` : 'auto',
    //                     }}
    //                 >
    //                     <Card
    //                         imageName={card.imageName}
    //                         altName={card.altName}
    //                         title={card.title}
    //                         text={card.text}
    //                         imageFormat={card.imageFormat}
    //                         borderColor={card.borderColor}
    //                     />
    //                 </div>
    //             ))}
    //         </div>
    //         <div className='flex gap-4'>
    //             <button
    //                 className={`w-15 h-15 bg-black border-1 border-white flex justify-center items-center cursor-pointer ${
    //                     currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
    //                 }`}
    //                 onClick={handleLeftClick}
    //                 disabled={currentIndex === 0}
    //             >
    //                 <HiArrowSmallLeft
    //                     size={30}
    //                     className='text-white'
    //                 />
    //             </button>
    //             <button
    //                 className={`w-15 h-15 bg-black border-1 border-white flex justify-center items-center cursor-pointer ${
    //                     currentIndex === cards.length - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
    //                 }`}
    //                 onClick={handleRightClick}
    //                 disabled={currentIndex === cards.length - 1}
    //             >
    //                 <HiArrowSmallRight
    //                     size={30}
    //                     className='text-white'
    //                 />
    //             </button>
    //         </div>
    //     </div>
    // );

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex gap-6 flex-nowrap overflow-x-clip'>
                {cards.map((card, cardIndex) => (
                    <div
                        key={cardIndex}
                        className={`transition-all duration-500 flex-shrink-0 ${
                            cardIndex < currentIndex
                                ? 'hidden'
                                : 'w-auto opacity-100'
                        }`}
                        style={{
                            marginLeft:
                                cardIndex < currentIndex ? '-100%' : '0',
                        }}
                    >
                        <Card
                            imageName={card.imageName}
                            altName={card.altName}
                            title={card.title}
                            text={card.text}
                            imageFormat={card.imageFormat}
                            borderColor={card.borderColor}
                        />
                    </div>
                ))}
            </div>
            <div className='flex gap-4'>
                <button
                    className={`w-15 h-15 bg-black border-1 border-white flex justify-center items-center cursor-pointer ${
                        currentIndex === 0
                            ? 'opacity-50 cursor-not-allowed'
                            : 'opacity-100'
                    }`}
                    onClick={handleLeftClick}
                    disabled={currentIndex === 0}
                >
                    <HiArrowSmallLeft size={30} className='text-white' />
                </button>
                <button
                    className={`w-15 h-15 bg-black border-1 border-white flex justify-center items-center cursor-pointer ${
                        currentIndex === cards.length - 1
                            ? 'opacity-50 cursor-not-allowed'
                            : 'opacity-100'
                    }`}
                    onClick={handleRightClick}
                    disabled={currentIndex === cards.length - 1}
                >
                    <HiArrowSmallRight size={30} className='text-white' />
                </button>
            </div>
        </div>
    );
}

export function Card({
    imageName,
    altName,
    title,
    text,
    imageFormat,
    borderColor,
}: {
    imageName: string;
    altName: string;
    title: string;
    text: string;
    imageFormat: string;
    borderColor: string;
}) {
    return (
        <div className='flex flex-col gap-4'>
            <div
                className={`h-100 w-110 border-1 border-${borderColor} relative flex-shrink-0`}
            >
                <Image
                    src={`/pics/cards/${imageName}.${imageFormat}`}
                    alt={altName}
                    width={400}
                    height={300}
                    className='w-full h-full absolute'
                />
                {/* <div className='bg-black/30 w-full h-full absolute'></div> overlay here */}
                {/* <div className='bg-gradient-to-t from-black/30 to-transparent w-full h-full absolute'></div> */}
                <div className='bg-gradient-to-t from-black/80 via-black/20 via-40% to-transparent to-50% w-full h-full absolute'></div>
                <div className='p-8 absolute bottom-0'>
                    <h2 className={`${headlineFont2.className} text-2xl`}>
                        {title}
                    </h2>
                    <p className='text-white text-lg'>{text}</p>
                </div>
            </div>
        </div>
    );
}
