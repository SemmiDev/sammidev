function Videography() {
    return (
        <div className='flex flex-col items-center justify-center w-full gap-y-5'>
            <video
                // controls={true}
                autoPlay={true}
                loop={true}
                width='full'
                height='full'
                typeof='video/mp4'
                src='/instagram/videos/13.mp4'
                className='object-cover w-full h-full transition duration-100 ease-linear shadow-sm shadow md:w-full md:h-[700px] rounded-2xl shadow-info hover:scale-105'
            ></video>
        </div>
    );
}

export default Videography;
