import Image from 'next/image';

export default function Footer() {
    return (
        <footer className=' flex flex-col gap-4 px-10 py-4 text-md'>
            <p>FitFusion</p>
            <div className='flex gap-2 items-center'>
                <a href='https://facebook.com' target='_blank'>
                    <Image
                        src='/socials/facebook.png'
                        alt='facebook'
                        width={25}
                        height={25}
                        quality={100}
                    />
                </a>
                <a href='https://x.com' target='_blank'>
                    <Image
                        src='/socials/x.png'
                        alt='x'
                        width={35}
                        height={25}
                    />
                </a>
                <a href='https://instagram.com' target='_blank'>
                    <Image
                        src='/socials/instagram.png'
                        alt='instagram'
                        width={25}
                        height={25}
                        quality={100}
                    />
                </a>
                <a href='https://youtube.com' target='_blank'>
                    <Image
                        src='/socials/youtube.png'
                        alt='youtube'
                        width={35}
                        height={25}
                        quality={100}
                    />
                </a>
                <a href='https://linkedin.com' target='_blank'>
                    <Image
                        src='/socials/linkedin.png'
                        alt='linkedin'
                        width={25}
                        height={25}
                        quality={100}
                    />
                </a>
            </div>
            <div className='flex justify-between'>
                <p>© 2025 Copyright FitFusion. All Rights Reserved.</p>
                <p>
                    Developed by{' '}
                    <a
                        href='https://fullstaxdev.com'
                        className='underline'
                        target='_blank'
                    >
                        Xavier Reed
                    </a>
                </p>
            </div>
        </footer>
    );
}
