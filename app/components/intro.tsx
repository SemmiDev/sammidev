const days: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

function PhotoProfile() {
    return (
        <div className='mb-5 avatar'>
            <div className='transition duration-300 ease-linear rounded-full w-28 md:w-36 ring ring-primary hover:ring-info ring-offset-base-100 ring-offset-2 hover:scale-105'>
                <img src='/sammi.jpg' alt='Sammi Aldhi Yanto' />
            </div>
        </div>
    );
}

function Intro() {
    const time: Date = new Date();
    const salutation: string = `Happy ${days[time.getDay()]} 😊`;

    return (
        <div className='flex flex-col items-center justify-center pt-20 pb-6 text-center'>
            <PhotoProfile />
            <h1 className='mb-1 text-3xl font-bold md:text-5xl md:mb-3'>
                Sammi Aldhi Yanto
            </h1>
            <p className='mb-1 italic font-medium text-info md:text-xl'>
                Student ⅋ Software Craftsman
            </p>
            <p className='max-w-3xl mb-6 text-sm font-semibold text-center md:text-lg'>
                <span className='block mb-8 text-xs md:text-sm text-primary'>
                    {salutation}
                </span>
                <span className='block text-accent'>
                    Hellooo ヅ my name is Sam{' '}
                </span>{' '}
                <p className='text-justify md:text-center '>
                    Currently majoring in{' '}
                    <span className='text-secondary'>CS</span> at the{' '}
                    <span className='text-secondary'>Universitas Riau</span>. I
                    love exploring new things / just sharing something on{' '}
                    <a
                        href='https://www.youtube.com/channel/UCf9eTh_WEnl2NV2ii-F2OZQ'
                        target='_blank'
                        rel='noreferrer noopener'
                        className='inline-flex text-primary'
                    >
                        Youtube
                    </a>
                    {', '}
                    mostly about{' '}
                    <span className='text-accent'>
                        programming, algorithms ⅋ data structures, DevOps,
                        coursework & more.
                    </span>{' '}
                    Currently learn about{' '}
                    <span className='text-accent'>
                        ☘ DevOps, Cloud Computing, OSS, Go, TypeScript, React,
                        Remix ⅋ everything 🌎
                    </span>
                </p>
            </p>
        </div>
    );
}

export default Intro;
