import { useRef } from 'react';
import Clock from './clock';
import Footer from './footer';
import { ContactIcon } from './Icons';

function Contact() {
    const nameRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);
    let url = 'https://api.whatsapp.com/send?phone=6282387325971&text=';

    const handleClick = () => {
        const name = nameRef.current?.value;
        const message = messageRef.current?.value;
        const text = `Halo mas Sam, perkenalkan nama saya ${name}, ${message}`;
        const encodedText = encodeURIComponent(text);
        window.open(url + encodedText);
    };

    return (
        <div className='flex flex-col items-center gap-y-5'>
            <h1 className='flex items-center justify-center mt-5 mb-8 text-3xl font-bold text-center gap-x-2 md:text-4xl text-secondary'>
                <ContactIcon /> Contact
            </h1>

            <input
                type='text'
                ref={nameRef}
                required={true}
                placeholder='Type your name'
                className='w-full max-w-xs input input-bordered input-primary'
            />

            <textarea
                className='w-full max-w-xs textarea textarea-primary'
                placeholder='Type your message'
                ref={messageRef}
                required={true}
                maxLength={500}
                rows={5}
            ></textarea>
            <button
                className='w-full max-w-xs mb-12 btn btn-outline btn-primary'
                onClick={handleClick}
            >
                Kirim Pesan
            </button>

            <Clock />
            <Footer />
        </div>
    );
}

export default Contact;
