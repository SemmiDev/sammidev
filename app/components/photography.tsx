import PortfolioItem from './portfolio-item';
import { PhotographyIcon } from './Icons';
import { photographyData } from '~/data/photography';
import CircleAvatar from './avatar';
import Videography from './videography';

function Photography() {
    return (
        <div>
            <h1 className='flex items-center justify-center mx-auto mt-5 mb-8 text-3xl font-bold gap-x-2 md:text-4xl text-secondary'>
                <PhotographyIcon /> Cinematic
            </h1>

            <div className='flex flex-col items-center justify-center mx-auto mb-5'>
                <div className='-space-x-6 avatar-group'>
                    <div className='avatar'>
                        <div className='w-12'>
                            <img src='/instagram/2.jpg' />
                        </div>
                    </div>
                    <div className='avatar'>
                        <div className='w-12'>
                            <img src='/instagram/3.jpg' />
                        </div>
                    </div>
                    <div className='avatar'>
                        <div className='w-12'>
                            <img src='/instagram/4.jpg' />
                        </div>
                    </div>
                    <div className='avatar placeholder'>
                        <div className='w-12 bg-neutral-focus text-neutral-content'>
                            <a
                                href='https://www.instagram.com/sammidev_/'
                                target={'_blank'}
                                rel={'noreferrer noopener'}
                            >
                                +99
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center mb-12 '>
                <img
                    src='/instagram/25.jpg'
                    alt='me1'
                    className='object-cover w-full h-full transition duration-100 ease-linear rounded-2xl hover:scale-95'
                />{' '}
            </div>

            <div className='flex flex-col items-center justify-center mb-12 md:flex-row'>
                <div className='grid grid-cols-3 gap-4 md:grid-cols-3 lg:grid-cols-5'>
                    {photographyData.map((photo, index) => (
                        <CircleAvatar
                            key={index}
                            src={photo.src}
                            alt={photo.alt}
                        />
                    ))}
                </div>
            </div>

            <div className='flex flex-col items-center justify-center mb-5'>
                <Videography />
            </div>
        </div>
    );
}

export default Photography;
