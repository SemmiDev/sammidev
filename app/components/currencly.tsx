import { CurrentlyIcon } from './Icons';

function Currently() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='flex items-center justify-center mt-5 mb-8 text-3xl font-bold text-center gap-x-2 md:text-4xl text-secondary'>
                <CurrentlyIcon />
            </h1>

            <div className='flex flex-col items-center justify-center mt-5 mb-8 text-3xl font-bold text-center gap-x-2 md:text-4xl text-secondary'>
                <span className='block mb-8 text-xs md:text-sm text-primary'>
                    Sekarang? mmm lagi belajar ML dari e-book yg keren ini
                </span>
                <a
                    href='https://books.google.co.id/books?id=JvBPEAAAQBAJ&printsec=frontcover&hl=id&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false'
                    target='_blank'
                    rel='noreferrer noopener'
                >
                    <img
                        src='/machine-learning.jpg'
                        alt='ml book daqiqil'
                        className='mx-auto transition duration-100 ease-linear shadow shadow-md hover:shadow-warning w-72 rounded-xl hover:scale-105 shadow-info'
                    />
                </a>
            </div>
        </div>
    );
}

export default Currently;
