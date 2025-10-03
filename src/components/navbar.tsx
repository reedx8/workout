// 'use client';
import Image from 'next/image';
import Link from 'next/link';
import MyButton from '@/components/mybutton';
// import { useRef } from 'react';

export default function Navbar({
    scrollRef,
    onHomePage,
}: {
    scrollRef?: any;
    onHomePage: boolean;
}) {
    const navStyle =
        'fixed top-0 z-[1000] flex justify-between items-center px-8 py-6 w-full bg-black/15 backdrop-blur-md text-white';

    return (
        <nav className={navStyle}>
            {/* // <nav className='flex items-center justify-between h-16 bg-black text-white px-6'> */}
            <Link href='/'>
                <Image
                    src='/pics/logo6.png'
                    alt='logo'
                    width={70}
                    height={70}
                />
            </Link>
            <div className='flex gap-6 text-lg items-center'>
                <Link href='/management'>MANAGEMENT TEAM</Link>
                <Link href='/training'>TRAINING TEAM</Link>
                {onHomePage ? (
                    <MyButton
                        text='OPEN POSITIONS'
                        isScrollBtn={true}
                        scrollRef={scrollRef}
                    />
                ) : (
                    <Link href='/#open-positions'>
                        <MyButton
                            text='OPEN POSITIONS'
                            isScrollBtn={false}
                            // scrollRef={scrollRef}
                        />
                    </Link>
                )}
            </div>
        </nav>
    );
}
