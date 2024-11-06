import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormError("Please fill out all fields.");
      setFormSuccess("");
      return;
    }

    setFormError("");
    setFormSuccess("Your message has been sent successfully!");

    // Reset form data
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-6 py-16 text-gray-700 font-sans">
      {/* Hero Section */}


      <div className="container mx-auto flex items-center justify-center min-h-[200px]">
        <div
          className="text-center global-bg text-lg md:text-2xl text-gray-600  rounded-lg py-4 px-6 md:px-8 font-medium shadow-md font-heading"
          data-aos="fade-right"
        >
          <h2 className="text-5xl font-extrabold text-green-800 mb-4">
          Contact Us
          </h2>
          <p className="text-lg text-gray-600 mb-0">
          We’d love to hear from you! If you have any questions, concerns, or suggestions, feel free to reach out to us.
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Section: Contact Info */}
        <div className=" p-8 rounded-lg shadow-lg font-text">
          <h2 className="text-3xl font-bold text-green-700 mb-6 font-heading">Get In Touch</h2>
          <p className="text-lg text-gray-600 mb-6 font-text">Feel free to contact us using the form or via our contact details below.</p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700">Phone:</h3>
            <p className="text-lg text-gray-600">+123 456 7890</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700">Email:</h3>
            <p className="text-lg text-gray-600">support@naturenest.com</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700">Address:</h3>
            <p className="text-lg text-gray-600">123 Green Street, Plant City, NatureLand</p>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Send Us a Message</h2>
          {formError && <p className="text-red-500 mb-4">{formError}</p>}
          {formSuccess && <p className="text-green-500 mb-4">{formSuccess}</p>}

          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-semibold text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-transparent"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-semibold text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-transparent"
                placeholder="Your Email"
                required
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-semibold text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-transparent"
                rows={5}
                placeholder="Your Message"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-6 text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
