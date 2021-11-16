import { GoLocation } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
const ContactUs = () => {
  return (
    <>
      <h1 class="section-header">Contact</h1>

      <div class="contact-wrapper">
        <form id="contact-form" class="form-horizontal" role="form">
          <div class="form-group">
            <div class="col-sm-12">
              <input
                type="text"
                class="form-control"
                placeholder="NAME"
                name="name"
                required
                className="form-control"
              />
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-12">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="EMAIL"
                name="email"
                className="form-control"
                required
              />
            </div>
          </div>

          <textarea className="text_area" placeholder="MESSAGE..." required />

          <button class="btn btn-primary send-button" type="submit">
            Submit
          </button>
        </form>

        <div class="direct-contact-container">
          <h3 className="contact-text">
            <GoLocation className="icons" />
            Sangola , Maharashtra
          </h3>
          <h3 className="contact-text">
            <FiPhoneCall className="icons" /> +91 7744071789
          </h3>
          <div className="split">
            <div className="socialIcons">
              <BsInstagram className="instaIcon insta-ic" />
              <AiOutlineFacebook className="fbIcons fb-ic" />
              <HiOutlineMail className="gmailIcon email-ic" />
            </div>
          </div>

          <div class="copyright">Made with ❤️ by Siddharth &copy; 2021</div>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
