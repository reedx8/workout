import Image from "next/image";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Application from "@/components/application";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <section>
        <p>Join Our Team</p>
        <h1>FitFusion</h1>
        <button>View Open Positions</button>
      </section>
      <section className='flex justify-between'>
        <div>
          <h2>Management Team</h2>
        </div>
        <div>
          <h2>Training Team</h2>
        </div>
      </section>
      <section>
        <p>video here...</p>
      </section>
      <section className='flex flex-col items-center'>
        <h2>BE A PART OF A CULTURE</h2>
        <h2>WHERE OUT PEOPLE MATTER.</h2>
        <p> At FitFusion, our employees are more than just staff - they're family.</p>
        <p>We're here to help you achieve your goals and reach your full potential, helping our community of fitness enthusiasts to achieve their dreams.</p>
        <h3>Our Values:</h3>
        <div className='flex'>
          <div>Hard work and Dedication</div>
          <div>Teamwork and Unity</div>
          <div>Work-Life Balance</div>
          <div>Personal Integrity and Respect</div>
        </div>
      </section>
      <section>
        <h2>WHY WORK HERE</h2>
      </section>
      <section>
        <h2>WHY LIVE HERE</h2>
      </section>
      <section className='flex flex-col items-center'>
        <h2>PICK THE CAREER PATH</h2>
        <h2>THAT IS RIGHT FOR YOU</h2>
        <div className='flex justify-between'>
          <div>
            <h2>Management Team</h2>
            <button>Learn More</button>
          </div>
          <div>
            <h2>Training Team</h2>
            <button>Learn More</button>
          </div>
        </div>
      </section>
      <section>
        <Application/>
      </section>
      <Footer/>
    </main>
  );
}
