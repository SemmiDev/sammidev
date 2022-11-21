import { certificateData } from '~/data/certificate';
import CertificateItem from './certificate-item';
import { CertificateIcon } from './Icons';

function Certificate() {
    return (
        <div>
            <h1 className='flex items-center justify-center mt-5 mb-8 text-3xl font-bold text-center gap-x-2 md:text-4xl text-secondary'>
                <CertificateIcon /> Certificate
            </h1>
            <div className='flex flex-col items-center justify-center mx-auto mb-5'>
                <div className='my-5 indicator '>
                    <span className='indicator-item badge badge-secondary'>
                        15+
                    </span>
                    <a
                        className='btn btn-secondary btn-outline'
                        href='https://drive.google.com/drive/folders/1YofO6A6a3o2bLTxSryQ9S5czpkTA1B-A'
                        target='_blank'
                        rel='noreferrer noopener'
                    >
                        Certificate Lainnya
                    </a>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {certificateData.map((item, index) => (
                    <CertificateItem
                        key={index}
                        title={item.title}
                        description={item.description}
                        imgSrc={item.imgSrc}
                    />
                ))}
            </div>
        </div>
    );
}

export default Certificate;
