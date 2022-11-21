import { useEffect, useState } from 'react';

interface imageWithTimeProps {
    [key: string]: string;
}

const imageWithTime: imageWithTimeProps = {
    sunrise: '/sunrise.png',
    afternoon: '/afternoon.png',
    sunset: '/sunset.png',
    moon: '/moon.png',
};

function Clock() {
    const [time, setTime] = useState<Date>(new Date());
    const [image, setImage] = useState<string>(imageWithTime.sunrise);

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        if (time.getHours() >= 6 && time.getHours() < 12) {
            setImage(imageWithTime.sunrise);
        } else if (time.getHours() >= 12 && time.getHours() < 16) {
            setImage(imageWithTime.afternoon);
        } else if (time.getHours() >= 17 && time.getHours() < 19) {
            setImage(imageWithTime.sunset);
        } else {
            setImage(imageWithTime.moon);
        }

        return () => clearInterval(timer);
    }, [time]);

    const formattedTime = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        second: 'numeric',
    }).format(time);

    return (
        <div className='flex flex-col items-center justify-center text-xs font-semibold md:text-sm text-warning'>
            <div
                tabIndex={0}
                className='border collapse collapse-arrow border-base-300 bg-base-100 rounded-box'
            >
                <div className='text-xl font-medium collapse-title'>
                    {formattedTime}
                </div>
                <div className='collapse-content'>
                    <img
                        src={image}
                        alt={image}
                        className='object-cover w-40 h-40 my-3 mr-1 '
                    />
                </div>
            </div>
        </div>
    );
}

export default Clock;
