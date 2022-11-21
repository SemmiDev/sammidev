import { type YoutubeContentProps } from '~/data/youtube-content';

function YoutubeFrame(props: YoutubeContentProps) {
    return (
        <iframe
            allowFullScreen={true}
            title={props.title}
            className='w-full transition duration-300 ease-linear border rounded-md shadow shadow-md border-1 border-error shadow-warning hover:scale-95'
            src={props.src}
        ></iframe>
    );
}

export default YoutubeFrame;
