import PortfolioItem from './portfolio-item';
import { portfolioData } from '~/data/portfolio';
import { PortfolioIcon } from './Icons';

function Portfolio() {
    return (
        <div>
            <h1 className='flex items-center justify-center mx-auto mt-5 mb-8 text-3xl font-bold gap-x-2 md:text-4xl text-secondary'>
                <PortfolioIcon /> Portfolio
            </h1>

            <div className='flex flex-col items-center justify-center mx-auto mb-5'>
                <div className='my-5 indicator '>
                    <span className='indicator-item badge badge-secondary'>
                        320+
                    </span>
                    <a
                        className='btn btn-secondary btn-outline'
                        href='https://github.com/SemmiDev'
                        target='_blank'
                        rel='noreferrer noopener'
                    >
                        Portfolio Lainnya
                    </a>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center md:flex-row'>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                    {portfolioData.map((project, index) => (
                        <PortfolioItem
                            key={index}
                            description={project.description}
                            title={project.title}
                            stack={project.stack}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
