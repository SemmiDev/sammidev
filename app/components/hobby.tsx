import { youtubeContentData } from '~/data/youtube-content';
import { HobbyIcon } from './Icons';
import YoutubeFrame from './youtube-frame';

function Hobby() {
    return (
        <div className='flex flex-col items-center justify-center mx-auto mb-5'>
            <h1 className='flex items-center justify-center mt-5 mb-8 text-3xl font-bold text-center gap-x-2 md:text-4xl text-secondary'>
                <HobbyIcon /> Hobby
            </h1>

            <div className='my-5 indicator'>
                <span className='indicator-item badge badge-secondary'>
                    165+
                </span>
                <a
                    className='btn btn-secondary btn-outline'
                    href='https://www.youtube.com/channel/UCf9eTh_WEnl2NV2ii-F2OZQ'
                    target='_blank'
                    rel='noreferrer noopener'
                >
                    Video Lainnya
                </a>
            </div>

            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
                {youtubeContentData.map((content, index) => (
                    <YoutubeFrame
                        key={index}
                        title={content.title}
                        src={content.src}
                    />
                ))}
            </div>
        </div>
    );
}

export default Hobby;
