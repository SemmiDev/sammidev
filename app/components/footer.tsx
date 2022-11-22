import {
    InstagramIcon,
    YoutubeIcon,
    GithubIcon,
    LinkedInIcon,
    WhatsAppIcon,
    LocationIcon,
} from './Icons';

function Footer() {
    return (
        <footer>
            <div className='max-w-5xl px-4 py-2 mx-auto sm:px-6 lg:px-8'>
                <ul className='flex justify-center gap-2 mt-6 md:gap-2'>
                    <li>
                        <a
                            href='https://www.youtube.com/channel/UCf9eTh_WEnl2NV2ii-F2OZQ'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center justify-center w-12 h-12 gap-x-2 btn btn-circle btn-outline btn-primary '
                        >
                            <YoutubeIcon />
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://www.instagram.com/sammidev_/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center justify-center w-12 h-12 border rounded-full gap-x-2 btn btn-circle btn-outline btn-primary'
                        >
                            <InstagramIcon />
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://github.com/SemmiDev'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center justify-center w-12 h-12 border rounded-full gap-x-2 btn btn-circle btn-outline btn-primary'
                        >
                            <GithubIcon />
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://id.linkedin.com/in/sammi-aldhi-yanto-48a11a196'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center justify-center w-12 h-12 border rounded-full gap-x-2 btn btn-circle btn-outline btn-primary'
                        >
                            <LinkedInIcon />
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://api.whatsapp.com/send?phone=6282387325971&text=hello%20sam%20%F0%9F%98%89%F0%9F%98%8A'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center justify-center w-12 h-12 border rounded-full gap-x-2 btn btn-circle btn-outline btn-primary'
                        >
                            <WhatsAppIcon />
                        </a>
                    </li>
                </ul>
            </div>

            <p className='max-w-md mx-auto mt-8 font-sans text-lg font-bold tracking-widest text-center text-primary bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200'>
                Made with ♡ {new Date().getFullYear()}
            </p>
            <p className='flex items-center justify-center max-w-md mx-auto mt-2 font-sans text-lg font-bold tracking-widest text-center gap-x-2 text-primary bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200'>
                <LocationIcon />
                Pekanbaru
            </p>
            <img
                src='/instagram/29.jpg'
                alt='me2'
                className='object-cover mt-12 w-full h-[500px] transition duration-100 ease-linear rounded-2xl hover:scale-95'
            />
        </footer>
    );
}

export default Footer;
