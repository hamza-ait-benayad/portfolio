const Contact = () => {
  return (
    <div className="section">
      <div className="flex flex-col w-5/6">
        <h1 className="section-title text-stroke" >Contact</h1>
        <div className="flex flex-row gap-12 py-12">
          <div className="w-3/5">
            <div className="relative">
              <form action="">
                <div>
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Your Name"/>
                </div>
                <div>
                <label htmlFor="">Email</label>
                <input type="email" placeholder="example@gmail.com"/>
                </div>
                <div>
                  <label htmlFor="">Message</label>
                <textarea name="" id="" placeholder="Your message here"></textarea>
                </div>
                <button >Send</button>
              </form>
              <div className="absolute top-70 -left-10 -z-1 w-[300px] h-[250px] bg-primary rounded-full blur-[120px] opacity-80" ></div>
            </div>
          </div>
          <div className="relative w-2/5 h-90 flex justify-center">
            <img src="./images/email_sent.svg" alt="" width={300} height={200} />
            <div className="absolute top-0 -right-20 -z-1 w-[300px] h-[300px] bg-primary rounded-full blur-[130px]" ></div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Contact;
