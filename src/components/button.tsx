import ArrowSec from "../icons/arrow-sec.tsx";
import ArrowPri from "../icons/arrow-pri.tsx";

export interface ButtonProps {
  variant?: "primary" | "secondary";
  text: string;
  type?: "submit" | "button";
  href?: string;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const { variant = "primary", text = "Default Text", type = "button", href, onClick } = props;

  const defaultStyles =
    "rounded-[18px] flex capitalize items-center justify-center gap-[9px] w-fit text-white text-base lg:text-lg font-semibold font-['Jost'] leading-snug tracking-tight px-10 py-5 md:px-[54px] md:py-[26px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg";
  const bgClass = variant === "primary" ? "bg-primary-200 hover:bg-primary-100" : "bg-primary-100 hover:bg-primary-200";
  const className = `${defaultStyles} ${bgClass}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {text}
        {variant === "primary" ? <ArrowSec /> : <ArrowPri />}
      </a>
    );
  }

  return (
    <button className={className} type={type} onClick={onClick}>
      {text}
      {variant === "primary" ? <ArrowSec /> : <ArrowPri />}
    </button>
  );
};

export default Button;
