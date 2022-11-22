import { type CertificateItemProps } from '~/data/certificate';

function CertificateItem({ title, description, imgSrc }: CertificateItemProps) {
    return (
        <div className='max-w-lg'>
            <div className='h-full transition duration-300 ease-linear shadow-lg hover:scale-95 shadow-info card w-fill bg-base-100 image-full'>
                <figure>
                    <img
                        src={imgSrc}
                        alt={title}
                        className='object-cover rounded-md'
                    />
                </figure>
                <div className='card-body'>
                    <h2 className='card-title'>🌟🌟🌟</h2>
                    <p>{description}</p>
                    <div className='justify-end card-actions'>
                        <a
                            href={imgSrc}
                            target='_blank'
                            rel='noreferrer noopener'
                            className='btn btn-outline'
                        >
                            Lihat
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CertificateItem;
