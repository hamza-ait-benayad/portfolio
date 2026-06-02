import { useEffect, useRef, useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";

const Contact = () => {
  const recaptchaRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  // Init emailjs once on mount
  useEffect(() => {
    emailjs.init({
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      limitRate: {
        id: "app",
        throttle: 10000,
      },
    });
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const token = await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset();

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { ...formData, "g-recaptcha-response": token },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("Email send failed:", err);
      setStatus("error");
    }
  };

  return (
    <div className="section">
      <div className="flex flex-col w-5/6">
        <motion.h2
          className="section-title text-stroke"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>

        <div className="flex flex-col lg:flex-row py-2 lg:py-12 gap-8">
          <div className="w-full lg:w-3/5">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="backdrop-blur-[100px] bg-transparent"
            >
              <div>
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="for collaboration..."
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  onChange={handleChange}
                  placeholder="Your message here"
                  value={formData.message}
                  required
                  rows={5}
                />
              </div>

              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                size="invisible"
              />

              {/* Status feedback */}
              {status === "success" && (
                <p className="text-center text-secondary font-semibold bg-primary/20 rounded-lg py-2 px-4">
                  ✅ Message sent successfully! I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-center text-red-400 font-semibold bg-red-900/20 rounded-lg py-2 px-4">
                  ❌ Something went wrong. Please try again.
                </p>
              )}

              <button
                className="w-[50%] self-center flex gap-2 items-center justify-center"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <span>Sending…</span>
                ) : (
                  <>
                    <RiSendPlaneFill size={20} />
                    <span>Send</span>
                  </>
                )}
              </button>
            </motion.form>
          </div>

          <div className="relative hidden lg:flex w-2/5 justify-center items-center">
            <motion.img
              src="/images/email_sent.svg"
              alt="Email illustration"
              width={300}
              height={200}
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-12 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} All Rights Reserved | Portfolio by Hamza
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
