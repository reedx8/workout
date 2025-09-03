import { on } from "events";

export default function MyButton({
    text,
    isNavBtn,
    scrollRef,
}: {
    text: string;
    isNavBtn: boolean;
    scrollRef?: any;
    // scrollRef?: HTMLElement | undefined;
}) {
    return (
        <button
            type='button'
            className='cursor-pointer p-2 bg-white text-black border-1 border-black/80'
            onClick={() =>
                isNavBtn &&
                scrollRef.current?.scrollIntoView({
                    behavior: 'smooth',
                })
            }
        >
            {text}
        </button>
    );
}
