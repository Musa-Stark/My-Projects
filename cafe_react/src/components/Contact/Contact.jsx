import { useState } from "react";
import Button from "../Button";
import H from "../H";
import P from "../P";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission logic here
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const LocationIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="secondary-text"
    >
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
        fill="currentColor"
      />
    </svg>
  );

  const PhoneIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="secondary-text"
    >
      <path
        d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"
        fill="currentColor"
      />
    </svg>
  );

  const EmailIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="secondary-text"
    >
      <path
        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
        fill="currentColor"
      />
    </svg>
  );

  const ClockIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="secondary-text"
    >
      <path
        d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <div className="min-h-screen lp-bg">
      {/* Hero Section */}
      <div className="pt-20 pb-16 text-center fade-in">
        <div className="max-w-4xl mx-auto px-4">
          <H style="text-5xl md:text-6xl font-bold mb-6">Contact Us</H>
          <P
            text="We'd love to hear from you! Whether you have questions about our menu, want to make a reservation, or simply want to share your coffee experience with us."
            style="text-xl max-w-2xl mx-auto"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div>
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8 h-fit">
            <H style="text-3xl font-bold mb-8 u-l">Get In Touch</H>

            <div className="grid lg:grid-cols-2 gap-y-14">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 lp-bg rounded-full">
                  <LocationIcon />
                </div>
                <div>
                  <H style="text-xl font-semibold mb-2">Visit Our Cafe</H>
                  <P text="123 Coffee Street, Bean District" style="mb-1" />
                  <P text="New York, NY 10001" />
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 lp-bg rounded-full">
                  <PhoneIcon />
                </div>
                <div>
                  <H style="text-xl font-semibold mb-2">Call Us</H>
                  <P text="+1 (555) 123-4567" style="mb-1" />
                  <P text="Mon-Fri: 7AM - 8PM" />
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 lp-bg rounded-full">
                  <EmailIcon />
                </div>
                <div>
                  <H style="text-xl font-semibold mb-2">Email Us</H>
                  <P text="hello@cafestreet.com" style="mb-1" />
                  <P text="We respond within 24 hours" />
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 lp-bg rounded-full">
                  <ClockIcon />
                </div>
                <div>
                  <H style="text-xl font-semibold mb-2">Opening Hours</H>
                  <P text="Monday - Friday: 7:00 AM - 8:00 PM" style="mb-1" />
                  <P text="Saturday - Sunday: 8:00 AM - 9:00 PM" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 fade-in">
          <div className="text-center mb-12">
            <H style="text-4xl font-bold mb-6">Why Choose Cafe Street?</H>
            <P
              text="More than just a cafe, we're a community hub where coffee lovers gather to connect, work, and relax."
              style="text-xl max-w-2xl mx-auto"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg float-animation">
              <div className="w-16 h-16 secondary-bg rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <H style="text-xl font-semibold mb-3">Premium Coffee</H>
              <P text="Ethically sourced beans roasted to perfection for the ultimate coffee experience." />
            </div>

            <div
              className="bg-white rounded-2xl p-6 text-center shadow-lg float-animation"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-16 h-16 secondary-bg rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <H style="text-xl font-semibold mb-3">Cozy Atmosphere</H>
              <P text="A warm, welcoming space perfect for meetings, studying, or catching up with friends." />
            </div>

            <div
              className="bg-white rounded-2xl p-6 text-center shadow-lg float-animation"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="w-16 h-16 secondary-bg rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <H style="text-xl font-semibold mb-3">Expert Service</H>
              <P text="Our passionate baristas are dedicated to crafting the perfect cup every time." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
