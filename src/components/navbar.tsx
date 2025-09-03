// 'use client';
import Link from 'next/link';
import MyButton from '@/components/mybutton';
// import { useRef } from 'react';

export default function Navbar({ scrollRef }) {
    const navStyle =
        'fixed top-0 z-[1000] flex justify-between items-center px-8 py-6 w-full bg-black/15 backdrop-blur-md text-white';

    return (
        <nav className={navStyle}>
            {/* // <nav className='flex items-center justify-between h-16 bg-black text-white px-6'> */}
            <p>FitFusion</p>
            <div className='flex gap-6 text-lg items-center'>
                <Link href='/management'>MANAGEMENT TEAM</Link>
                <Link href='/training'>TRAINING TEAM</Link>
                <MyButton
                    text='OPEN POSITIONS'
                    isScrollBtn={true}
                    scrollRef={scrollRef}
                />
            </div>
        </nav>
    );
}
