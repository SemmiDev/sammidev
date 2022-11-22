function Videography() {
    return (
        <div className='flex flex-col w-full gap-y-5'>
            <video
                controls={true}
                width='full'
                height='full'
                typeof='video/mp4'
                src='/instagram/videos/22.mp4'
                className='object-cover w-full transition duration-100 ease-linear shadow-sm shadow h-[800px] rounded-2xl shadow-info hover:scale-105'
            ></video>
            <video
                controls={true}
                width='full'
                height='full'
                typeof='video/mp4'
                src='/instagram/videos/13.mp4'
                className='object-cover w-full h-full transition duration-100 ease-linear shadow-sm shadow rounded-2xl shadow-info hover:scale-105'
            ></video>
            <video
                controls={true}
                width='full'
                height='full'
                typeof='video/mp4'
                src='/instagram/videos/23.mp4'
                className='object-cover w-full h-full transition duration-100 ease-linear shadow-sm shadow rounded-2xl shadow-info hover:scale-105'
            ></video>
        </div>
    );
}

export default Videography;
