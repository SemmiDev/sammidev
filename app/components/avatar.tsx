import { type PhotographyProps } from '../data/photography';
export default function CircleAvatar({ src, alt }: PhotographyProps) {
    return (
        <div className='avatar'>
            <div className='w-48 transition duration-100 ease-linear rounded-full shadow shadow-md hover:scale-105 shadow-warning'>
                <img src={src} alt={alt} />
            </div>
        </div>
    );
}
