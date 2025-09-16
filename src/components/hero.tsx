import MyButton from '@/components/mybutton';
import { Anton } from 'next/font/google';
import localFont from 'next/font/local';

const headlineFont = Anton({
    subsets: ['latin'],
    weight: ['400'],
});

const headlineFont2 = localFont({
    src: '../../public/fonts/EurostileExtendedBlack.ttf',
});

export default function Hero({
    scrollRef,
    pageSource,
    bgVid,
    btnText,
}: {
    scrollRef: any;
    pageSource: string;
    bgVid: string;
    btnText: string;
}) {
    // const scrollRef = useRef<HTMLElement | null>(null);

    return (
        <section className='relative min-h-225 w-full overflow-hidden'>
            <video
                autoPlay
                loop
                muted
                playsInline
                className='absolute top-0 left-0 w-full h-full object-cover'
            >
                <source
                    // src='https://general-xreed.s3.us-west-2.amazonaws.com/vid.mp4'
                    src={bgVid}
                    type='video/mp4'
                />
                <p>Your browser does not support the video element.</p>
            </video>
            <div className='absolute top-0 left-0 w-full h-full bg-black/50' />
            <div className='absolute px-10 pt-50 text-white w-full'>
                {pageSource === 'home' && homeHero()}
                {pageSource === 'management' && managementHero()}
                {pageSource === 'training' && trainingHero()}
                <div className='mt-10'>
                    <MyButton
                        text={btnText}
                        isScrollBtn={true}
                        scrollRef={scrollRef}
                    />
                </div>
            </div>
        </section>
    );
}

function homeHero() {
    return (
        <>
            <p className={`${headlineFont.className} text-3xl`}>
                Join Our Team
            </p>
            <div className='bg-white/30 w-full h-0.25 my-10'></div>
            <h1 className={`${headlineFont2.className} text-8xl`}>
                Fit
                <span
                    style={{
                        color: 'transparent',
                        WebkitTextStroke: '2px #FFFFFF',
                    }}
                >
                    Fusion
                </span>
            </h1>
            <h1 className={`${headlineFont2.className} text-8xl`}>
                Gym{' '}
                <span
                    style={{
                        color: 'transparent',
                        WebkitTextStroke: '2px #FFFFFF',
                    }}
                >
                    x
                </span>{' '}
                Crossfit
            </h1>
        </>
    );
}

function managementHero() {
    return (
        <>
            <p className={`${headlineFont.className} text-3xl`}>FitFusion</p>
            <div className='bg-white/30 w-full h-0.25 my-10'></div>
            <h1 className={`${headlineFont2.className} text-8xl`}>
                <span
                    style={{
                        color: 'transparent',
                        WebkitTextStroke: '2px #FFFFFF',
                    }}
                >
                    OUR{' '}
                </span>
                EXCELLENCE{' '}
                <span
                    style={{
                        color: 'transparent',
                        WebkitTextStroke: '2px #FFFFFF',
                    }}
                >
                    STARTS WITH{' '}
                </span>
                YOU
            </h1>
            <p className='text-2xl text-white'>
                FitFusion is seeking driven, community-minded individuals to join our ranks as a Manager.
            </p>
        </>
    );
}

function trainingHero() {
    return (
        <>
            <p className={`${headlineFont.className} text-3xl`}>FitFusion</p>
            <div className='bg-white/30 w-full h-0.25 my-10'></div>
            <h1 className={`${headlineFont2.className} text-8xl`}>
                <span
                    style={{
                        color: 'transparent',
                        WebkitTextStroke: '2px #FFFFFF',
                    }}
                >
                    VITAL{' '}
                </span>
                ROLES.{' '}
                <span
                    style={{
                        color: 'transparent',
                        WebkitTextStroke: '2px #FFFFFF',
                    }}
                >
                    REAL{' '}
                </span>
                IMPACT.
            </h1>
            <p className='text-2xl text-white'>
                Providing a supportive and inclusive commnuity where everyone can thrive.
            </p>
        </>
    );
}
