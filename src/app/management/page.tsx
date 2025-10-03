'use client';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import SplitSection from '@/components/splitsection';
import { Anton } from 'next/font/google';
import localFont from 'next/font/local';
import MyButton from '@/components/mybutton';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';
// import App from 'next/app';
import Application from '@/components/application';
import HiringProcess from '@/components/hiringprocess';
import { useRef } from 'react';
const headlineFont = Anton({
    subsets: ['latin'],
    weight: ['400'],
});
const headlineFont2 = localFont({
    src: '../../../public/fonts/EurostileExtendedBlack.ttf',
});

export default function Management() {
    const applicationRef = useRef<HTMLElement | null>(null);

    return (
        <main>
            <Navbar onHomePage={false} />
            <Hero
                scrollRef={applicationRef}
                pageSource={'management'}
                // bgVid={
                //     'https://general-xreed.s3.us-west-2.amazonaws.com/vid.mp4'
                // }
                bgVid={null}
                btnText={'APPLY NOW'}
            />
            <SplitSection pageSource={'management'} scrollRef={applicationRef}/>
            <section className='flex gap-6 p-8 bg-[var(--color-myRedBg)] w-full h-90'>
                <div className='w-1/2 flex flex-col gap-2'>
                    <p
                        className={`${headlineFont.className} text-black text-2xl`}
                    >
                        Launch your management career early.
                    </p>
                    <h2
                        className={`${headlineFont2.className} text-5xl text-black`}
                    >
                        <span
                            style={{
                                color: 'transparent',
                                WebkitTextStroke: '2px #000000',
                            }}
                        >
                            MANAGEMENT{' '}
                        </span>
                        PROGRAM
                    </h2>
                    <div className='w-fit mt-10'>
                        <MyButton
                            text='APPLY NOW'
                            isScrollBtn={true}
                            scrollRef={applicationRef}
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-2 w-1/2'>
                    <p className='text-lg'>
                        Nunc nisi erat, vehicula id bibendum eget, porta at leo.
                        Mauris blandit risus fermentum, maximus risus in,
                        fermentum nulla. Phasellus efficitur risus nibh,
                        bibendum cursus eros convallis nec. Fusce eu neque quam.
                        Pellentesque sed pulvinar quam, tempus feugiat purus.
                        Integer varius eget quam et eleifend. Suspendisse ac
                        lorem ac nunc pulvinar tincidunt nec non ex.
                    </p>
                    <button className='flex gap-2 items-center cursor-pointer'>
                        <p
                            className={`${headlineFont2.className} text-black text-3xl text-left`}
                        >
                            MINIMUM REQUIREMENTS
                        </p>
                        <MdKeyboardDoubleArrowDown
                            size={28}
                            className='text-black animate-bounce'
                        />
                    </button>
                </div>
            </section>
            <section className='bg-black w-full py-15 px-10 flex flex-col gap-6 items-center text-white'>
                <h2 className={`${headlineFont2.className} text-5xl`}>
                    <span
                        style={{
                            color: 'transparent',
                            WebkitTextStroke: '2px #FFFFFF',
                        }}
                    >
                        CAREER{' '}
                    </span>
                    OPPORTUNITIES
                </h2>
                <div className='bg-white/30 h-0.25 w-full'></div>
                <p className='text-white text-xl'>
                    Want to join a growing, successful company where your
                    talents, initiative and integrity will be rewarded? Then
                    you’ve come to the right place!
                </p>
                <div className='flex flex-wrap gap-10 items-center justify-center text-white text-xl'>
                    <ol className='list-disc'>
                        <li>Nunc nisi erat</li>
                        <li>Vehicula id bibendum</li>
                        <li>Porta at leo</li>
                        <li>Mauris blandit</li>
                        <li>Maximus risus</li>
                        <li>Fermentum</li>
                    </ol>
                    <ol className='list-disc'>
                        <li>Phasellus</li>
                        <li>Bibendum cursus</li>
                        <li>Fusce eu neque quam</li>
                        <li>Pellentesque</li>
                        <li>Tempus feugiat</li>
                        <li>Integer varius eget</li>
                    </ol>
                    <ol className='list-disc'>
                        <li>Suspendisse ac lorem</li>
                        <li>Tincidunt nec non ex</li>
                        <li>Nunc</li>
                        <li>Vehicula id bibendum</li>
                        <li>Eget Porta</li>
                        <li>Mauris blandit risus fermentum</li>
                    </ol>
                    <ol className='list-disc'>
                        <li>Maximus risus in</li>
                        <li>Fermentum nulla</li>
                        <li>Phasellus efficitur</li>
                        <li>Bibendum cursus</li>
                        <li>Fusce eu neque quam</li>
                        <li>Pellentesque sed</li>
                    </ol>
                </div>
            </section>
            <HiringProcess />
            <section ref={applicationRef}>
                <Application title='START YOUR APPLICATION' />
            </section>
            <Footer />
        </main>
    );
}
