import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className='flex items-center justify-between h-16 bg-black text-white px-6'>
            <p>FitFusion</p>
            <div className='flex gap-6 text-lg'>
                <Link href='/management'>MANAGEMENT TEAM</Link>
                <Link href='/training'>TRAINING TEAM</Link>
                <button>OPEN POSITIONS</button>
            </div>
        </nav>
    );
}
