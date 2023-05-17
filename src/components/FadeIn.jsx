import React from 'react';

import face1Icon from "../assets/icons/face1.png";
import face2Icon from "../assets/icons/face2.png";
import face3Icon from "../assets/icons/face3.png";
import face4Icon from "../assets/icons/face4.png";

class FadeIn extends React.Component {
  componentDidMount() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  }

  render() { 
    return (
      <div>
        <section class="hidden">
          <h1>Hey!</h1>
          <p>This is my website</p>
        </section>

        <section class="hidden">
          <h2>Buy my product</h2>
          <p>
            The things you own end up owning you.
            It's only after you lose everything that you are free to do anything.
          </p>
        </section>

        <section class="hidden">
          <h2>It's really good!</h2>
          <div class="logos">

            <div class="logo hidden">
              <img 
                src={face1Icon} />
            </div>
            <div class="logo hidden">
              <img 
                src={face2Icon} />
            </div>
            <div class="logo hidden">
              <img 
                src={face3Icon} />
            </div>
            <div class="logo hidden">
              <img 
                src={face4Icon} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default FadeIn;
