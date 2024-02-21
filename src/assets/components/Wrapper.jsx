import { twMerge } from "tailwind-merge";

const Wrapper = ({ className }) => {
    return (
        <div className={twMerge(`w-full max-w-screen-xl py-5`, className)}>
            Wrapper
        </div>
    );
};

export default Wrapper;
