import React from "react";

import TitleHeader from "../components/TitleHeader.jsx";
import ContactExperience from "../components/ContactExperience.jsx";
// import Button from "../components/Button.jsx";

const Contact = () => {
const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
};



  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Contact Me"
          sub="Let's get in touch! Feel free to reach out for collaborations, questions, or just to say hello."
        />
        <div className="grid-12-cols mt-16">
          {/* Left: Contact Form */}
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    name="name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    name="email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message..."
                    name="message"
                    required
                  ></textarea>
                </div>
                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">Send Message</p>
                    <div className="arrow-wrapper">
                      <img alt="arrow" src="/images/arrow-right.svg  " />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          {/* Right: 3D Experience Placeholder */}
          <div className="xl:col-span-7 min-h-96">
            <div className="w-full h-full bg-blue-400 hover:cursor-grap rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
