export default function Button({ lable, onClick, variant = 'primary', isRounded = false}) {
  const variants = {
    primary: "text-lg font-semibold border-4 border-black px-4 py-2 hover:shadow-neo-2 hover:bg-yellow-400 hover:text-black transition-shadow duration-300",
    secondary: "text-lg text-black font-semibold bg-yellow-400 font-semibold border-4 px-4 py-2 hover:shadow-neo-2 hover:bg-black hover:text-yellow-400 transition-shadow duration-300",
  };

  const rounded = { 
    true: "rounded-2xl",
    false: ""
  }

  return (
    <div>
      <button 
        onClick={onClick} 
        className={`${variants[variant]} ${rounded[isRounded]}`}>
        {lable}
      </button>
    </div>
  );
}
