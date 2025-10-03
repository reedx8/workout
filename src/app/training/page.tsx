'use client';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Footer from '@/components/footer';
import Application from '@/components/application';
import SplitSection from '@/components/splitsection';
import { Anton } from 'next/font/google';
import localFont from 'next/font/local';
import { ImLab } from 'react-icons/im';
import HiringProcess from '@/components/hiringprocess';
import { useRef } from 'react';
const headlineFont = Anton({
    subsets: ['latin'],
    weight: ['400'],
});
const headlineFont2 = localFont({
    src: '../../../public/fonts/EurostileExtendedBlack.ttf',
});

export default function Training() {
    const applicationRef = useRef<HTMLElement | null>(null);

    return (
        <main>
            <Navbar onHomePage={false} />
            <Hero
                scrollRef={applicationRef}
                pageSource={'training'}
                // bgVid={
                //     'https://general-xreed.s3.us-west-2.amazonaws.com/vid.mp4'
                // }
                bgVid={null}
                btnText={'APPLY NOW'}
            />
            <section className='py-16 px-8'>
                <h2
                    className={`${headlineFont2.className} text-5xl text-center`}
                >
                    <span
                        style={{
                            color: 'transparent',
                            WebkitTextStroke: '2px #000000',
                        }}
                    >
                        SALARY,{' '}
                    </span>
                    BENEFITS & PERKS
                </h2>
                <div className='bg-black h-0.25 w-full my-8'></div>
                <p className='text-center text-xl mb-10'>
                    All of our benefits are designed to help you live a healthy
                    lifestyle on and off the job.
                </p>
                <div className='flex justify-between gap-6 flex-wrap'>
                    <div className='border-1 border-black h-auto w-full lg:max-w-130 p-16'>
                        <h2
                            className={`${headlineFont2.className} text-3xl mb-2`}
                        >
                            COMPENSATION & INCENTIVES
                        </h2>
                        <ol className='list-disc text-lg pl-6 flex flex-col gap-2'>
                            <li>
                                Competitive Pay with Annual Salary Increases
                            </li>
                            <li>Overtime (OT) paid at 1.5x base rate Shift</li>
                            <li>Longevity Pay of 3% after 5 years</li>
                            <li>
                                Premium Pay of 6%, 13 Holidays paid at premium
                                rate
                            </li>
                            <li>Deferred Compensation Plans available</li>
                        </ol>
                    </div>
                    <div className='border-1 border-black h-auto w-full lg:max-w-130 bg-black p-16 text-white'>
                        <h2
                            className={`${headlineFont2.className} text-3xl mb-2`}
                        >
                            HEALTH & WELLNESS
                        </h2>
                        <ol className='list-disc text-lg pl-6 flex flex-col gap-2'>
                            <li>Excellent Medical, Dental, and Vision Plans</li>
                            <li>Flexible Spending Accounts</li>
                            <li>Participation Employer-Paid Life Insurance</li>
                            <li>
                                Employer-Paid Long-Term Disability Insurance
                            </li>
                            <li>64 Hours of Sick Leave per year</li>
                            <li>Paid Time Off (PTO):</li>

                            <li className='list-inside'>
                                Start with 216 Hours (5.2 Weeks) per year
                            </li>
                            <li className='list-inside'>
                                Increases to 384 Hours (9.4 Weeks) per year
                            </li>
                        </ol>
                    </div>
                    <div className='flex flex-col w-full lg:grid lg:grid-cols-3 gap-4'>
                        <div className='bg-[var(--color-myRedBg)] h-auto p-8 text-white'>
                            <h2
                                className={`${headlineFont2.className} text-3xl mb-2`}
                            >
                                UNIFORMS & EQUIPMENT
                            </h2>
                            <ol className='list-disc text-lg pl-6 flex flex-col gap-2'>
                                <li>Uniforms Provided</li>
                                <li>Dry Cleaning Services</li>
                                <li>Personal Gym Equipment</li>
                            </ol>
                        </div>
                        <div className='bg-black h-auto p-8 text-white'>
                            <h2
                                className={`${headlineFont2.className} text-3xl mb-2`}
                            >
                                WORK SCHEDULES
                            </h2>
                            <ol className='list-disc text-lg pl-6 flex flex-col gap-2'>
                                <li>Uniforms Provided</li>
                                <li>Dry Cleaning Services</li>
                                <li>Personal Gym Equipment</li>
                            </ol>
                        </div>
                        <div className='border-1 border-black h-auto p-8'>
                            <h2
                                className={`${headlineFont2.className} text-3xl mb-2`}
                            >
                                CAREER & RETIREMENT
                            </h2>
                            <ol className='list-disc text-lg pl-6 flex flex-col gap-2'>
                                <li>Uniforms Provided</li>
                                <li>Dry Cleaning Services</li>
                                <li>Personal Gym Equipment</li>
                            </ol>
                        </div>
                    </div>
                    <div className='bg-[var(--color-myRedBg)] h-50 w-full text-white flex flex-col items-center justify-center align-middle text-center p-4'>
                        <h2
                            className={`${headlineFont.className} text-4xl mb-2`}
                        >
                            Training Team Salary Range $24.86 - $51.06 ($52K -
                            $106K / Year)
                        </h2>
                        <p className='text-xl'>
                            We offer a competitive salary range and a variety of
                            benefits to help you achieve your career goals.
                        </p>
                    </div>
                </div>
            </section>
            <SplitSection pageSource={'training'} scrollRef={applicationRef} />
            <HiringProcess />
            <section ref={applicationRef}>
                <Application
                    title='BEGIN YOUR APPLICATION'
                    subtitle='Fill out the form to view open positions'
                />
            </section>
            <Footer />
        </main>
    );
}
