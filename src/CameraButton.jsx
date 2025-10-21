export default function CameraButton({ number, current, setCurrent }) {
    const clickHandler = () => {
        setCurrent(number);
    }

    return (
        <div onClick={clickHandler} className={`${current == number ? "border-white text-white" : "border-violet-950 text-violet-500"} size-18 border flex justify-center items-center text-2xl geologica font-semibold cursor-pointer`}>{number}</div>
    )
}