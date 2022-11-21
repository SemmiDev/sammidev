import { type PortfolioItemProps } from '~/data/portfolio';

function PortfolioItem({
    title,
    description,
    stack,
    link,
}: PortfolioItemProps) {
    return (
        <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='overflow-hidden transition duration-300 ease-linear border-2 rounded-lg border-secondary hover:border-accent hover:scale-95'
        >
            <div className='w-full p-4'>
                <h3 className='mb-2 text-lg font-semibold md:text-xl md:mb-3 '>
                    {title}
                </h3>

                <p className='my-3 text-xs text-primary-content'>
                    {description}
                </p>

                <p className='flex flex-row flex-wrap items-center justify-start gap-2 text-xs md:text-sm '>
                    {stack.map((item, index) => (
                        <span
                            key={index}
                            className='inline-block px-2 py-1 font-semibold border-2 rounded-md border-accent'
                        >
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </a>
    );
}

export default PortfolioItem;
