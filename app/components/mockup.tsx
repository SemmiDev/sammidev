export interface WindowsMockupProps {
    children: JSX.Element[];
}

export default function WindowsMockup(props: WindowsMockupProps) {
    return (
        <div className='p-8 my-5 border mockup-phone md:mockup-window bg-base-300'>
            {props.children}
        </div>
    );
}
