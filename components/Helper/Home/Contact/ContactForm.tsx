/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess("Your message has been sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#140c1c] rounded-lg p-4 sm:p-10">
      <h2 className="text-bg text-2xl md:text-3xl lg:text-4xl font-bold">
        Lets Crack The Nutshell!
      </h2>
      <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
        Contact Me for Any Information About Our Community or Work.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 w-full">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="input-style"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="input-style"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-5">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="input-style"
            required
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="input-style"
          />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="input-style mt-5"
          rows={5}
          required></textarea>
        <button type="submit" className="btn-primary mt-4" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Success & Error Messages */}
      {success && <p className="text-green-500 mt-3">{success}</p>}
      {error && <p className="text-red-500 mt-3">{error}</p>}
    </div>
  );
};

export default ContactForm;
