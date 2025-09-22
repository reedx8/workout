'use client';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import SplitSection from '@/components/splitsection';
import { Anton } from 'next/font/google';
import localFont from 'next/font/local';
import MyButton from '@/components/mybutton';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';
import App from 'next/app';
import Application from '@/components/application';
import { useState, useEffect } from 'react';
const headlineFont = Anton({
    subsets: ['latin'],
    weight: ['400'],
});
const headlineFont2 = localFont({
    src: '../../../public/fonts/EurostileExtendedBlack.ttf',
});

export default function Management() {
    const [activeTab, setActiveTab] = useState('tab1');
    const tabBgColor = 'var(--color-myGrayBg)';
    const activeTabBgColor = 'var(--color-myRedBg)';

    function activateTab(tabName: string) {
        setActiveTab(tabName);
    }

    return (
        <main>
            <Navbar />
            <Hero
                scrollRef={null}
                pageSource={'management'}
                // bgVid={
                //     'https://general-xreed.s3.us-west-2.amazonaws.com/vid.mp4'
                // }
                bgVid={null}
                btnText={'APPLY NOW'}
            />
            <SplitSection pageSource={'management'} />
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
                            isScrollBtn={false}
                            // scrollRef={scrollRef}
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
            <section className='flex flex-col gap-6 bg-white w-full py-20 px-10'>
                <h2
                    className={`${headlineFont2.className} text-5xl text-black`}
                >
                    <span
                        style={{
                            color: 'transparent',
                            WebkitTextStroke: '2px #000000',
                        }}
                    >
                        HIRING{' '}
                    </span>
                    PROCESS
                </h2>
                <div className='bg-black/30 h-0.25 w-full'></div>
                <div className='flex gap-6 w-full'>
                    <div className='flex flex-col gap-4 w-4/10'>
                        <button
                            className={`flex gap-4 items-center py-3 px-5 border-l-2 ${
                                activeTab === 'tab1'
                                    ? 'border-black'
                                    : 'border-gray-400'
                            } cursor-pointer`}
                            style={{
                                backgroundColor:
                                    activeTab === 'tab1'
                                        ? activeTabBgColor
                                        : tabBgColor,
                            }}
                            onClick={() => activateTab('tab1')}
                        >
                            <p
                                className={`${headlineFont2.className} text-3xl`}
                            >
                                1
                            </p>
                            <p className={`${headlineFont.className} text-3xl`}>
                                FILL OUT THE FORM
                            </p>
                        </button>
                        <button
                            className={`flex gap-4 items-center py-3 px-5 border-l-2 ${
                                activeTab === 'tab2'
                                    ? 'border-black'
                                    : 'border-gray-400'
                            } cursor-pointer`}
                            style={{
                                backgroundColor:
                                    activeTab === 'tab2'
                                        ? activeTabBgColor
                                        : tabBgColor,
                            }}
                            onClick={() => activateTab('tab2')}
                        >
                            <p
                                className={`${headlineFont2.className} text-3xl`}
                            >
                                2
                            </p>
                            <p className={`${headlineFont.className} text-3xl`}>
                                COMPLETE THE TEST
                            </p>
                        </button>
                        <button
                            className={`flex gap-4 items-center py-3 px-5 border-l-2 ${
                                activeTab === 'tab3'
                                    ? 'border-black'
                                    : 'border-gray-400'
                            } cursor-pointer`}
                            style={{
                                backgroundColor:
                                    activeTab === 'tab3'
                                        ? activeTabBgColor
                                        : tabBgColor,
                            }}
                            onClick={() => activateTab('tab3')}
                        >
                            <p
                                className={`${headlineFont2.className} text-3xl`}
                            >
                                3
                            </p>
                            <p
                                className={`${headlineFont.className} text-3xl text-left`}
                            >
                                COMPLETE AN APPLICATION IN WORKDAY
                            </p>
                        </button>
                        <button
                            className={`flex gap-4 items-center py-3 px-5 border-l-2 ${
                                activeTab === 'tab4'
                                    ? 'border-black'
                                    : 'border-gray-400'
                            } cursor-pointer`}
                            style={{
                                backgroundColor:
                                    activeTab === 'tab4'
                                        ? activeTabBgColor
                                        : tabBgColor,
                            }}
                            onClick={() => activateTab('tab4')}
                        >
                            <p
                                className={`${headlineFont2.className} text-3xl`}
                            >
                                4
                            </p>
                            <p className={`${headlineFont.className} text-3xl`}>
                                INTERVIEW
                            </p>
                        </button>
                        <button
                            className={`flex gap-4 items-center py-3 px-5 border-l-2 ${
                                activeTab === 'tab5'
                                    ? 'border-black'
                                    : 'border-gray-400'
                            } cursor-pointer`}
                            style={{
                                backgroundColor:
                                    activeTab === 'tab5'
                                        ? activeTabBgColor
                                        : tabBgColor,
                            }}
                            onClick={() => activateTab('tab5')}
                        >
                            <p
                                className={`${headlineFont2.className} text-3xl`}
                            >
                                5
                            </p>
                            <p className={`${headlineFont.className} text-3xl`}>
                                FINAL SELECTION
                            </p>
                        </button>
                        <button
                            className={`flex gap-4 items-center py-3 px-5 border-l-2 ${
                                activeTab === 'tab6'
                                    ? 'border-black'
                                    : 'border-gray-400'
                            } cursor-pointer`}
                            style={{
                                backgroundColor:
                                    activeTab === 'tab6'
                                        ? activeTabBgColor
                                        : tabBgColor,
                            }}
                            onClick={() => activateTab('tab6')}
                        >
                            <p
                                className={`${headlineFont2.className} text-3xl`}
                            >
                                6
                            </p>
                            <p className={`${headlineFont.className} text-3xl`}>
                                WELCOME TO THE TEAM
                            </p>
                        </button>
                    </div>
                    <TabDescription activeTab={activeTab} />
                </div>
            </section>
            <Application />
            <Footer />
        </main>
    );
}

function TabDescription({ activeTab }) {
    const [isVisible, setIsVisible] = useState(false);
    const [hiringTabs, setHiringTabs] = useState([
        {
            tabName: 'tab1',
            number: '1',
            tabTitle: () => {
                return (
                    <>
                        <span
                            style={{
                                color: 'transparent',
                                WebkitTextStroke: '2px #000000',
                            }}
                        >
                            FILL OUT{' '}
                        </span>
                        THE FORM
                    </>
                );
            },
            tabDescription:
                'After you fill out the form at the bottom of this page, you’ll receive a pre-screening text and email with a few quick questions about the basic requirements to become a manager. This helps us determine your eligibility before moving forward in the hiring process.',
        },
        {
            tabName: 'tab2',
            number: '2',
            tabTitle: () => {
                return (
                    <>
                        <span
                            style={{
                                color: 'transparent',
                                WebkitTextStroke: '2px #000000',
                            }}
                        >
                            COMPLETE{' '}
                        </span>
                        THE TEST
                    </>
                );
            },
            tabDescription:
                'Nunc nisi erat, vehicula id bibendum eget, porta at leo. Mauris blandit risus fermentum, maximus risus in, fermentum nulla. Phasellus efficitur risus nibh, bibendum cursus eros convallis nec. Fusce eu neque quam. Pellentesque sed pulvinar quam, tempus feugiat purus. Integer varius eget quam et eleifend. Suspendisse ac lorem ac nunc pulvinar tincidunt nec non ex.',
        },
        {
            tabName: 'tab3',
            number: '3',
            tabTitle: () => {
                return (
                    <>
                        <span
                            style={{
                                color: 'transparent',
                                WebkitTextStroke: '2px #000000',
                            }}
                        >
                            COMPLETE{' '}
                        </span>
                        AN APPLICATION IN WORKDAY
                    </>
                );
            },
            tabDescription:
                'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
        },
        {
            tabName: 'tab4',
            number: '4',
            tabTitle: () => {
                return (
                    <>
                        <span
                            style={{
                                color: 'transparent',
                                WebkitTextStroke: '2px #000000',
                            }}
                        >
                            INTERVIEW
                        </span>
                    </>
                );
            },
            tabDescription:
                'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
        },
        {
            tabName: 'tab5',
            number: '5',
            tabTitle: () => {
                return (
                    <>
                        <span
                            style={{
                                color: 'transparent',
                                WebkitTextStroke: '2px #000000',
                            }}
                        >
                            FINAL{' '}
                        </span>
                        SELECTION
                    </>
                );
            },
            tabDescription:
                'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
        },
        {
            tabName: 'tab6',
            number: '6',
            tabTitle: () => {
                return (
                    <>
                        <span
                            style={{
                                color: 'transparent',
                                WebkitTextStroke: '2px #000000',
                            }}
                        >
                            WELCOME{' '}
                        </span>
                        TO THE TEAM
                    </>
                );
            },
            tabDescription:
                'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
    ]);

    useEffect(() => {
        setIsVisible(false);
        const timer = setTimeout(() => setIsVisible(true), 150);
        return () => clearTimeout(timer);
    }, [activeTab]);

    return (
        <div
            className={`w-6/10 bg-[var(--color-myRedBg)] p-6 flex flex-col border-l-4 gap-4 transition-opacity duration-300 ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <p className={`${headlineFont2.className} text-9xl`}>
                <span
                    style={{
                        color: 'transparent',
                        WebkitTextStroke: '5px #000000',
                        opacity: 0.25,
                    }}
                >
                    {
                        hiringTabs.find((tab) => tab.tabName === activeTab)
                            ?.number
                    }
                </span>
            </p>
            <h2 className={`${headlineFont2.className} text-4xl`}>
                {hiringTabs
                    .find((tab) => tab.tabName === activeTab)
                    ?.tabTitle()}
            </h2>
            <div className='bg-black/30 h-0.25 w-full'></div>
            <p className='text-xl'>
                {
                    hiringTabs.find((tab) => tab.tabName === activeTab)
                        ?.tabDescription
                }
            </p>
        </div>
    );
}
