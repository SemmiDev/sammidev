import { skillsSetData } from '~/data/skills';
import { SkillsIcon } from './Icons';

function Skills() {
    return (
        <div className='flex flex-col items-center gap-y-2'>
            <h1 className='flex items-center justify-center mt-5 mb-8 text-3xl font-bold text-center gap-x-2 md:text-4xl text-secondary'>
                <SkillsIcon /> Skills
            </h1>
            {skillsSetData.map((skill, index) => (
                <span
                    className='grid grid-cols-2 gap-2 transition duration-75 ease-linear hover:font-bold hover:text-primary text-warning'
                    key={index}
                >
                    ➜ {skill.name}
                    <progress
                        className='w-40 progress progress-secondary'
                        value={skill.value}
                        max={skill.max}
                    ></progress>
                </span>
            ))}
        </div>
    );
}

export default Skills;
