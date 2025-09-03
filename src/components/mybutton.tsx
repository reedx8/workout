import localFont from 'next/font/local';

const headlineFont2 = localFont({
    src: '../../public/fonts/EurostileExtendedBlack.ttf',
});

export default function MyButton({
    text,
    isScrollBtn,
    scrollRef,
}: {
    text: string;
    isScrollBtn: boolean;
    scrollRef?: any;
    // scrollRef?: HTMLElement | undefined;
}) {
    return (
        <button
            type='button'
            className='cursor-pointer py-3 px-6 bg-black text-[var(--color-myRedBg)] border-1 border-[var(--color-myRedBg)]'
            onClick={() =>
                isScrollBtn &&
                scrollRef &&
                scrollRef.current?.scrollIntoView({
                    behavior: 'smooth',
                })
            }
        >
            <p className={`${headlineFont2.className} text-lg`}>{text}</p>
        </button>
    );
}
