"use client";
import { useState } from "react";
import { Input } from "./input";
import { clsx } from "clsx";
const ContactForm = () => {
  const [agreeToPolicy, setAgreeToPolicy] = useState(false);

  return (
    <div className="isolate bg-black px-6 py-24 sm:py-32 lg:px-8 relative">
      {/* Background Shape */}
    

      {/* Form Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-white-900 sm:text-5xl">
          Contact Sales
        </h2>
        <p className="mt-2 text-lg text-white-600">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>

      {/* Form */}
      <form className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* First Name */}
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold text-white-900">
              First name
            </label>
            <div className="mt-2.5">
                <Input id="firstname" placeholder="Tyler" type="text" />
            </div>
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold text-white-900">
              Last name
            </label>
            <div className="mt-2.5">
            <div className="mt-2.5">
                <Input id="lastname" placeholder="Smith" type="text" />
            </div>
            </div>
          </div>

          {/* Company */}
          <div className="sm:col-span-2">
            <label htmlFor="Company" className="block text-sm font-semibold text-white-900">
              Company
            </label>
            <div className="mt-2.5">
                <Input id="companyname" placeholder="company" type="text" />
            </div>
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold text-white-900">
              Email
            </label>
            <div className="mt-2.5">
                <Input id="Emailaddress" placeholder="Email address" type="text" />
            </div>
          </div>

          {/* Phone Number */}
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold text-white-900">
              Phone number
            </label>
            <div className="mt-2.5 flex items-center gap-3 rounded-md border-gray-300 ">
              <select
                id="country"
                name="country"
                className={clsx(
                    `flex mt-2 h-10 border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm
                    file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600
                    focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
                   `
                  
                  )}
              >
                <option>US</option>
                <option>CA</option>
                <option>EU</option>
              </select>
              <div className="mt-2.5 w-full">
                <Input id="phone-number" placeholder="012-456-7891" type="text" />
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold text-white-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                rows={4}
                className="block w-full rounded-md border-none bg-gray-50 dark:bg-zinc-800 px-3.5 py-2 text-black dark:text-white shadow-input 0 outline-none focus:ring-2 focus:ring-[#F9D689]"
              />
            </div>
          </div>

          {/* Privacy Policy Toggle */}
          <div className="flex gap-x-4 sm:col-span-2">
            <button
              type="button"
              className={`flex w-8 h-6 items-center rounded-full p-px ring-1 ring-gray-900/5 transition-colors duration-200 ease-in-out ${
                agreeToPolicy ? "bg-[#F9D689]" : "bg-gray-200"
              }`}
              role="switch"
              aria-checked={agreeToPolicy}
              onClick={() => setAgreeToPolicy(!agreeToPolicy)}
            >
              <span className="sr-only">Agree to policies</span>
              <span
                aria-hidden="true"
                className={`size-4 transform rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition duration-200 ${
                  agreeToPolicy ? "translate-x-3.5" : "translate-x-0"
                }`}
              ></span>
            </button>

            <label className="text-sm text-gray-600">
              By selecting this, you agree to our{" "}
              <a href="#" className="font-semibold text-[#F9D689]">
                privacy&nbsp;policy
              </a>
              .
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-10">
            <button
        type="submit"
        className="block w-full rounded-md bg-[#F9D689] px-3.5 py-2.5 text-center text-sm font-semibold text-black 
        shadow-[0_0_5px_#FFD700,0_0_10px_#FFBF00] hover:shadow-[0_0_7px_#FFD700,0_0_15px_#FFBF00] 
        focus:outline-none focus:ring-2 focus:ring-[#FFBF00] transition-all"
        >
        Let's talk
        </button>


        </div>
      </form>
    </div>
  );
};

export default ContactForm;
