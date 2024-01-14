import { FormEvent, useState } from "react";
import { useTheme } from "../components/ThemeContext";
import emailjs from '@emailjs/browser';

const labelClassName = "text-lightText dark:text-darkText text-[15px]"
const inputClassName = "bg-transparent border border-lightText dark:border-darkText text-lightText dark:text-darkText rounded px-2 focus:border-primary focus:border-2 focus:outline-none cursor-pointer lg:flex-1"

const ContactForm = () => {
  const {isDarkMode} = useTheme();

  const [payload, setPayload] = useState({
    name: "",
    email: "",
    message: ""
  });

  const clear = () => {
    setPayload({
      name: "",
      email: "",
      message: ""
    });
  }

  const handleChange = (name:string, value:string) => {
    setPayload((oldPayload) => {
      return {
        ...oldPayload,
        [name]: value,
      };
    });
  }

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE,import.meta.env.VITE_EMAILJS_TEMPLATE, '#contactform', import.meta.env.VITE_EMAILJS_SECRET)
      .then(() => {
        alert('Message sent successfully!');
        clear();
      }, () =>{
        alert('Error sending your message');
      });
  }

  return (
    <div className={`${isDarkMode ? 'dark' : ''} sm:flex-1`}>
      <form
        id="contactform"
        className="bg-lightBG1 dark:bg-darkBG1 flex flex-col justify-center gap-[20px] sm:border sm:border-lightText dark:sm:border-darkText sm:rounded-2xl sm:p-[10px] sm:bg-lightBG2 dark:sm:bg-darkBG2"
        onSubmit={(e)=>sendEmail(e)}
      >
        <p className="self-center text-lightAccent dark:text-darkAccent text-[20px]">Message Me Directly</p>
        <div className="flex flex-col justify-center w-[80%] self-center">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-2">
            <div className="flex flex-col lg:flex-row lg:gap-2 lg:flex-1">
              <label htmlFor="name" className={labelClassName}>Full Name</label>
              <input
                name="name"
                value={payload.name}
                onChange={(event) => handleChange("name", event.currentTarget.value)}
                className={inputClassName}
                placeholder="Full Name"
                onInvalid={(e) => {e.currentTarget.setCustomValidity('Please provide a name')}}
                onInput={(e) => e.currentTarget.setCustomValidity('')}
                required
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-2 lg:flex-1">
              <label htmlFor="email" className={labelClassName}>Email</label>
              <input
                name="email"
                value={payload.email}
                onChange={(event) => handleChange("email", event.currentTarget.value)}
                className={inputClassName}
                placeholder="Email"
                type="email"
                onInvalid={(e) => {e.currentTarget.setCustomValidity('Please provide a valid email address')}}
                onInput={(e) => e.currentTarget.setCustomValidity('')}
                required
              />
            </div>
            
          </div>
          <label htmlFor="message" className={labelClassName}>Message</label>
          <textarea
            name="message"
            value={payload.message}
            onChange={(event) => handleChange("message", event.currentTarget.value)}
            className={`${inputClassName} h-[120px] resize-none`}
            placeholder="Your message to me"
            onInvalid={(e) => {e.currentTarget.setCustomValidity('Please provide a message')}}
            onInput={(e) => e.currentTarget.setCustomValidity('')}
            required
          />
        </div>
        <div className="flex flex-col justify-center gap-[10px]">
          <button
            type="submit"
            className="bg-primary w-[290px] h-[50px] rounded self-center text-lightBG1 dark:text-darkBG1 font-bold transition-colors duration-300 ease-in-out hover:bg-lightAccent dark:hover:bg-darkAccent cursor-pointer"
          >
            Send
          </button>
          <button
            type="button"
            className="w-fit self-center text-lightText dark:text-darkText cursor-pointer"
            onClick={clear}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  )
};

export default ContactForm;