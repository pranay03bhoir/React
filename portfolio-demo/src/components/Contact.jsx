import React from "react";

const Contact = () => {
  return (
    <div>
      {/* Contact Section */}
      <section id={`contact`} className={`contact-section`}>
        <h2>Contact Me</h2>
        <p>
          If you would like to get in touch feel free to connect met at,{" "}
          <a href={`mailto:pranay@gmail.com`}>pranay@gmail.com</a>
        </p>
      </section>
    </div>
  );
};

export default Contact;
