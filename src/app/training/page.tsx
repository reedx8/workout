'use client';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Footer from '@/components/footer';
import Application from '@/components/application';

export default function Training(){
    return (
        <main>
            <Navbar />
            <Hero scrollRef={null} pageSource={'training'} bgVid={'https://general-xreed.s3.us-west-2.amazonaws.com/vid.mp4'} btnText={'APPLY NOW'} />
            Training
            <Application />
            <Footer />
        </main>
    )
}