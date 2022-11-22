import { useRef } from 'react';
import { ContactIcon } from './Icons';

function Contact() {
    const nameRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const handleSubmitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const name = nameRef.current?.value;
        const message = messageRef.current?.value;

        if (name === '' || message === '') {
            alert('Please fill the form');
        } else {
            let url = 'https://api.whatsapp.com/send?phone=6282387325971&text=';
            const text = `Halo mas Sam, perkenalkan nama saya ${name}, ${message}`;
            const encodedText = encodeURIComponent(text);
            window.open(url + encodedText);
        }
    };

    return (
        <div className='flex flex-col items-center gap-y-5'>
            <h1 className='flex items-center justify-center mt-5 mb-8 text-3xl font-bold text-center gap-x-2 md:text-4xl text-secondary'>
                <ContactIcon /> Contact
            </h1>

            <form onSubmit={handleSubmitForm} className='flex flex-col gap-y-3'>
                <input
                    type='text'
                    ref={nameRef}
                    required={true}
                    placeholder='Type your name'
                    className='w-full max-w-xs text-sm input input-bordered input-primary text-primary'
                />

                <textarea
                    className='w-full max-w-xs text-sm border textarea border-primary text-primary'
                    placeholder='Type your message'
                    ref={messageRef}
                    required={true}
                    maxLength={500}
                    rows={5}
                ></textarea>

                <button
                    type='submit'
                    className='w-full max-w-xs mb-12 btn btn-outline btn-primary'
                >
                    Kirim Pesan
                </button>
            </form>
        </div>
    );
}

export default Contact;
