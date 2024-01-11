import { useState } from "react";
import { useTheme } from "../components/ThemeContext";

const labelClassName = "text-lightText dark:text-darkText text-[15px]"
const inputClassName = "bg-transparent border border-lightText dark:border-darkText text-lightText dark:text-darkText rounded px-2 focus:border-primary focus:border-2 focus:outline-none cursor-pointer"

const ContactForm = () => {
  const {isDarkMode} = useTheme();

  const [payload, setPayload] = useState({
    fullName: "",
    email: "",
    message: ""
  });

  const clear = () => {
    setPayload({
      fullName: "",
      email: "",
      message: ""
    });
  }

  const handleChange = (name:string, value:string) => {
    setPayload((oldPayload) => {
      return {
        ...oldPayload,
        [name]: value
      };
    });
  }

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-lightBG1 dark:bg-darkBG1 flex flex-col justify-center gap-[20px]">
        <p className="self-center text-lightAccent dark:text-darkAccent text-[20px]">Message Me Directly</p>
        <div className="flex flex-col justify-center w-[80%] self-center">
          <label htmlFor="fullName" className={labelClassName}>Full Name</label>
          <input
            name="fullName"
            value={payload.fullName}
            onChange={(event) => handleChange("fullName", event.currentTarget.value)}
            className={inputClassName}
            placeholder="Full Name"
          />
          <label htmlFor="email" className={labelClassName}>Email</label>
          <input
            name="email"
            value={payload.email}
            onChange={(event) => handleChange("email", event.currentTarget.value)}
            className={inputClassName}
            placeholder="Email"
            type="email"
          />
          <label htmlFor="message" className={labelClassName}>Message</label>
          <textarea
            name="message"
            value={payload.message}
            onChange={(event) => handleChange("message", event.currentTarget.value)}
            className={`${inputClassName} h-[120px] resize-none`}
            placeholder="Your message to me"
          />
        </div>
        <div className="flex flex-col justify-center gap-[10px]">
          <button className="bg-primary w-[290px] h-[50px] rounded self-center text-lightBG1 dark:text-darkBG1 font-bold transition-colors duration-300 ease-in-out hover:bg-lightAccent dark:hover:bg-darkAccent cursor-pointer">Send</button>
          <button
            className="w-fit self-center text-lightText dark:text-darkText cursor-pointer"
            onClick={clear}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  )
};

export default ContactForm;