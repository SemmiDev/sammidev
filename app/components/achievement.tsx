import { achievementData } from '~/data/achievement';
import { AchievementIcon } from './Icons';

function Achievement() {
    return (
        <div>
            <h1 className='flex items-center justify-center mt-5 mb-8 text-3xl font-bold text-center gap-x-2 md:text-4xl text-secondary'>
                <AchievementIcon /> Achievement
            </h1>
            <ul className='steps steps-vertical'>
                {achievementData.map((item, index) => (
                    <li
                        key={index}
                        data-content={item.dataContent}
                        className={`text-sm font-semibold md:text-md lg:text-lg step ${
                            index % 2 == 0 ? 'step-accent' : 'step-info'
                        }`}
                    >
                        <span
                            className={`text-left ${
                                index % 2 == 0 ? 'text-accent' : 'text-info'
                            }`}
                        >
                            {item.name}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Achievement;
