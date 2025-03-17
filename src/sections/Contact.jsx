import { useEffect, useRef, useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const recaptchaRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const loadReCaptcha = () => {
      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/api.js?render=${
        import.meta.env.VITE_RECAPTCHA_SITE_KEY
      }`;
      script.addEventListener("load", () => {});
      document.body.appendChild(script);
    };

    loadReCaptcha();
  }, []);

  emailjs.init({
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    limitRate: {
      id: "app",
      throttle: 1000000,
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await recaptchaRef.current.executeAsync();
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { ...formData, "g-recaptcha-response": token },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log(response);
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="section">
      <div className="flex flex-col w-5/6 ">
        <h1 className="section-title text-stroke">Contact</h1>
        <div className="flex flex-col lg:flex-row py-2 lg:py-12">
          <div className="w-full lg:w-3/5">
            <div className="relative">
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="for collaboration..."
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="">Message</label>
                  <textarea
                    name="message"
                    onChange={handleChange}
                    placeholder="Your message here"
                    required
                  ></textarea>
                </div>

                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  size="invisible"
                />

                <button className="w-[50%] self-center">
                  <RiSendPlaneFill size={30} />
                </button>
              </form>
              <div className="absolute top-0 lg:top-70 -left-10 -z-1 w-[300px] h-[250px] bg-primary rounded-full blur-[120px] opacity-80"></div>
            </div>
          </div>
          <div className="relative hidden lg:flex w-2/5 justify-center">
            <img
              src="./images/email_sent.svg"
              alt=""
              width={300}
              height={200}
            />
            <div className="absolute top-35 -right-20 -z-1 w-[300px] h-[300px] bg-primary rounded-full blur-[130px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
