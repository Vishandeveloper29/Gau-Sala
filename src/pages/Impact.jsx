import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import herobnner from '../assets/images/impacthero.png'
import { Heart, Droplet, Cross, Trophy } from 'lucide-react'

const Impact = () => {
  return (
    <div>
      <Navbar />
      <section className='relative w-full overflow-hidden'>
        <img src={herobnner} alt="Impact Hero" className='h-[500px] w-full object-cover brightness-50' />
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='flex max-w-4xl flex-col items-center gap-5 px-5 text-center'>
            <div className='bg-green-100/20 backdrop-blur-sm border border-white/80 rounded-full px-5 py-2'>
              <p className='text-sm font-semibold tracking-wide text-green-500 uppercase'>
                Transparency & Impact
              </p>
            </div>
            <h1 className='text-4xl md:text-5xl lg:text-7xl font-black text-green-700 leading-tight'>
              Measuring Our Compassion
            </h1>
            <p className='max-w-2xl text-sm leading-7 text-gray-600 md:text-lg'>
              Transparency and tangible results are at the core of our mission.
              Explore the data that reflects our unwavering commitment to animal
              welfare and community support.
            </p>
          </div>
        </div>
      </section>
      <section className='bg-[#f6fbef] px-5 py-20 md:px-10 lg:px-20'>
        <div className='mx-auto flex max-w-7xl flex-col gap-12'>
          <div className='flex flex-col gap-3'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-black text-green-800'>
              Our Impact
            </h1>
            <p className='max-w-2xl text-gray-600 leading-7'>
              Every rescue, every treatment, and every act of compassion creates
              meaningful change in the lives of animals and communities.
            </p>
          </div>
          <div className='flex flex-wrap gap-6'>
            <div className='flex flex-1 min-w-[240px] flex-col items-center rounded-3xl bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl'>
              <div className='mb-5 rounded-full bg-green-100 p-4 text-green-700'>
                <Heart size={34} />
              </div>
              <h1 className='text-4xl font-black text-green-800'>
                50k+
              </h1>
              <p className='mt-3 text-sm font-semibold tracking-widest text-gray-500'>
                LIVES TOUCHED
              </p>
            </div>
            <div className='flex flex-1 min-w-[240px] flex-col items-center rounded-3xl bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl'>
              <div className='mb-5 rounded-full bg-green-100 p-4 text-green-700'>
                <Droplet size={34} />
              </div>
              <h1 className='text-4xl font-black text-green-800'>
                1.2M
              </h1>
              <p className='mt-3 text-sm font-semibold tracking-widest text-gray-500'>
                LTRS MILK DISTRIBUTED
              </p>
            </div>
            <div className='flex flex-1 min-w-[240px] flex-col items-center rounded-3xl bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl'>
              <div className='mb-5 rounded-full bg-green-100 p-4 text-green-700'>
                <Cross size={34} />
              </div>
              <h1 className='text-4xl font-black text-green-800'>
                10k+
              </h1>
              <p className='mt-3 text-sm font-semibold tracking-widest text-gray-500'>
                MEDICAL INTERVENTIONS
              </p>
            </div>
            <div className='flex flex-1 min-w-[240px] flex-col items-center rounded-3xl bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl'>
              <div className='mb-5 rounded-full bg-green-100 p-4 text-green-700'>
                <Trophy size={34} />
              </div>
              <h1 className='text-4xl font-black text-green-800'>
                15+
              </h1>
              <p className='mt-3 text-sm font-semibold tracking-widest text-gray-500'>
                AWARDS RECOGNITION
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-[#F1F5EB] px-5 py-20 md:px-10 lg:px-20'>
        <div className='mx-auto flex max-w-7xl flex-col items-center gap-12'>
          <div className='text-center'>
            <h1 className='text-3xl md:text-4xl font-black text-gray-900'>
              5-Year Growth Trajectory
            </h1>
            <p className='mt-4 text-gray-600'>
              Visualizing our increasing capacity to rescue and sustain.
            </p>
          </div>
          <div className='flex w-full flex-col gap-6 rounded-2xl bg-white p-6 shadow-md md:p-10'>
            {[
              { year: '2019', rescue: '20%', distribute: '30%' },
              { year: '2020', rescue: '35%', distribute: '45%' },
              { year: '2021', rescue: '50%', distribute: '60%' },
              { year: '2022', rescue: '65%', distribute: '75%' },
              { year: '2023', rescue: '85%', distribute: '90%' },
            ].map((item) => (
              <div key={item.year} className='flex items-center gap-4'>
                <p className='w-12 font-semibold text-gray-600'>{item.year}</p>
                <div className='relative h-8 flex-1 overflow-hidden rounded-full bg-gray-200'>
                  <div
                    className='absolute left-0 top-0 h-full rounded-full bg-green-300'
                    style={{ width: item.distribute }}
                  ></div>
                  <div
                    className='absolute left-0 top-0 h-full rounded-full bg-green-700'
                    style={{ width: item.rescue }}
                  ></div>
                </div>
              </div>
            ))}
            <div className='mt-2 flex justify-center gap-8'>
              <div className='flex items-center gap-2'>
                <span className='h-4 w-4 rounded-full bg-green-700'></span>
                <p className='text-sm font-medium text-gray-600'>Rescues</p>
              </div>
              <div className='flex items-center gap-2'>
                <span className='h-4 w-4 rounded-full bg-green-300'></span>
                <p className='text-sm font-medium text-gray-600'>Distributions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-[#f6fbef] px-5 py-20 md:px-10 lg:px-20'>
        <div className='mx-auto flex max-w-7xl flex-col gap-14'>
          <div className='text-center'>
            <h1 className='text-3xl md:text-4xl font-black text-gray-900'>
              Heartbeats Mended
            </h1>
          </div>
          <div className='flex flex-col overflow-hidden rounded-3xl bg-white shadow-md lg:flex-row'>
            <div className='lg:w-1/2'>
              <img
                src='https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=1200&auto=format&fit=crop'
                alt='Rescued Cow'
                className='h-full w-full object-cover'
              />
            </div>
            <div className='flex flex-1 flex-col justify-center gap-6 p-8 md:p-12'>
              <div className='w-fit rounded-full bg-pink-100 px-4 py-2'>
                <p className='text-sm font-semibold text-pink-700'>
                  Success Story
                </p>
              </div>
              <h1 className='text-3xl font-black text-gray-900'>
                The Recovery of Bharat
              </h1>
              <p className='leading-8 text-gray-600'>
                Found critically malnourished and injured near a highway,
                Bharat’s journey seemed bleak. Through intensive veterinary
                care, specialized nutrition, and round-the-clock observation,
                his transformation over six months has been nothing short of
                miraculous. Today, he leads our senior herd.
              </p>
              <div className='flex flex-wrap gap-10 pt-4'>
                <div className='flex items-center gap-4'>
                  <div className='h-12 w-1 rounded-full bg-green-700'></div>
                  <div>
                    <h2 className='text-3xl font-black text-green-700'>
                      6 Mos
                    </h2>
                    <p className='text-sm font-medium text-gray-500'>
                      Recovery Time
                    </p>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='h-12 w-1 rounded-full bg-green-300'></div>
                  <div>
                    <h2 className='text-3xl font-black text-green-700'>
                      250kg
                    </h2>
                    <p className='text-sm font-medium text-gray-500'>
                      Weight Gained
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center gap-10 pt-10'>
            <h1 className='text-3xl font-black text-gray-900'>
              Recognized By
            </h1>
            <div className='flex flex-wrap justify-center gap-6'>
              <div className='rounded-xl bg-white px-10 py-6 text-sm font-semibold text-gray-500 shadow-sm'>
                Govt Agency
              </div>
              <div className='rounded-xl bg-white px-10 py-6 text-sm font-semibold text-gray-500 shadow-sm'>
                NGO Partner
              </div>
              <div className='rounded-xl bg-white px-10 py-6 text-sm font-semibold text-gray-500 shadow-sm'>
                Vet Assoc
              </div>
              <div className='rounded-xl bg-white px-10 py-6 text-sm font-semibold text-gray-500 shadow-sm'>
                Eco Award
              </div>
              <div className='rounded-xl bg-white px-10 py-6 text-sm font-semibold text-gray-500 shadow-sm'>
                Trust Seal
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Impact
