import Image from 'next/image';
import Link from 'next/link';
import DemoGif from '@/images/LandingPage/demo.3f897bdf.gif';

export default function Home() {
  return (
    <main className=''>
      <div className='relative isolate pt-14 dark:bg-gray-900'>
        <div
          className='absolute inset-x-8 -z-10 transform-gpu overflow-hidden blur-3xl'
          aria-hidden='true'
        >
          <div />
        </div>
        <div className='py-12 sm:py-20 lg:pb-40'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h1 className='text-4xl font-bold tracking-tight sm:text-6xl'>
                Chat with Anyone, anywhere
              </h1>
              <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300'>
                You speak your language they speak their language{' '}
                <span className='text-indigo-500 dark:text-indigo-500'>
                  Let AI handle the tranlation
                </span>
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6'>
                <Link
                  href='/chat'
                  className='rounded-md bg-indigo-600 px-4 py-3 text-sm font-semibold text-white dark:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  Get started
                </Link>
                <Link
                  href='/pricing'
                  className='text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300'
                >
                  View Pricing <span aria-hidden='true'>-</span>
                </Link>
              </div>

              <div className='mt-16 flow-root sm:me-24'>
                <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                  <Image
                    unoptimized
                    src={DemoGif}
                    alt='app demo'
                    width={2432}
                    height={1442}
                    className='rounded-md shadow-2xl ring-1 ring-gray-900/10'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
