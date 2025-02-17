import { assets } from "../../assets/assets";
import { comments } from "../../assets/assets/";

import "./Testimonials.css";

const Testimonials = () => {
  return (
    <>
      <section className="comments">
        <h2>O que estão dizendo sobre nós</h2>
        <div className="wrapper">
          <div className="commentTrackDown">
            {[...comments, ...comments].map((comment, index) => (
              <div className="comment" key={index}>
                <span id="spanLogoGoogle">
                  <img src={assets.logogoogle} alt="google" id="logoGoogle" />
                </span>
                <div className="commentHeader">
                  <picture>
                    <source
                      srcSet={comment.image}
                      type="image/png"
                      className="user"
                    />
                    <img src={assets.userdefault} alt="user" className="user" />
                  </picture>
                  <span className="comment-name">{comment.name}</span>
                </div>
                <div className="comment-stars">{comment.stars}</div>
                <div className="comment-text">{comment.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
