import Contact from './contact';
import { EtcIcon } from './Icons';

function Etc() {
    return (
        <div className='flex flex-col items-center mb-5 gap-y-5'>
            <h1 className='flex items-center justify-center mt-5 mb-8 text-3xl font-bold text-center gap-x-2 md:text-4xl text-secondary'>
                <EtcIcon /> Etc.
            </h1>

            <div className='shadow stats stats-vertical'>
                <div className='stat'>
                    <div className='stat-title'>👉 Life so far</div>
                    <div className='stat-desc text-warning'>
                        - Breathing since October 20, 2001
                    </div>
                    <div className='stat-desc text-warning'>
                        - Started studying CS in 2020
                    </div>
                    <div className='stat-desc text-warning'>- Gopher</div>
                </div>

                <div className='stat'>
                    <div className='stat-title'>👉 Passionate about</div>
                    <div className='stat-desc text-warning'>- Books</div>
                    <div className='stat-desc text-warning'>- Coding</div>
                    <div className='stat-desc text-warning'>- Cats</div>
                    <div className='stat-desc text-warning'>- Flowers</div>
                    <div className='stat-desc text-warning'>- Musics</div>
                    <div className='stat-desc text-warning'>- Foods</div>
                </div>

                <div className='stat'>
                    <div className='stat-title'>👉 Thinking about</div>
                    <div className='stat-desc text-warning'>
                        - Cloud-Native Apps
                    </div>
                    <div className='stat-desc text-warning'>
                        - Microservices
                    </div>
                    <div className='stat-desc text-warning'>
                        - Typescript, Rust, and Go
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    );
}

export default Etc;
