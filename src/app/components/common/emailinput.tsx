"use client";

import React, { useState } from "react";
import JoinWaitList from "./joinwaitlist";

const EmailInput: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const isValidEmail = (email: string): boolean => {
    // Simple regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    if (!email) {
      setErrorMessage("Email is required.");
      setStatus("error");
      return;
    }

    if (!isValidEmail(email)) {
      setErrorMessage("Invalid email format.");
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/submitEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      console.log("Server Response:", data);

      if (data.success) {
        setStatus("success");
        setErrorMessage(""); // Clear error messages
        setEmail(""); // Clear the input field
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Submission failed."); // Show server error message
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex space-x-4 mt-4 overflow-x-hidden">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        className="
        w-[137px] h-[28px]
        sm:w-[147px] sm:h-[48px]
        lg:w-[457px] lg:h-[61px]
        rounded-[5px] sm:rounded-[5px] lg:rounded-[10px]
        px-4 text-[9px] sm:text-[9px] lg:text-[20px]
        font-extralight 
        placeholder-opacity-50 
        bg-transparent 
        border border-slate-500"
      />
      <JoinWaitList onClick={handleSubmit} />
      {status === "success" && <p className="text-green-500">Thank you!</p>}
      {status === "error" && errorMessage && (
        <p className="text-red-500">{errorMessage}</p>
      )}
    </div>
  );
};

export default EmailInput;