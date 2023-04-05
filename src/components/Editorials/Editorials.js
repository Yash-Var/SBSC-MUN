import React from "react";
import United from "../../assets/images/United.jpeg";
import United_ from "../../assets/images/united_.jpeg";
import United__ from "../../assets/images/united__.jpeg";
export const Editorials = () => {
  return (
    <div className="container">
      <div className="abtmain mt-5">
        <p className="heading-text_editorail">Formation of the UN </p>
      </div>

      {/* <br /> */}
      {/* <br /> */}

      <center>
        <img src={United} className="img-fluid united" />
      </center>
      <div className="container">
        <br />
        {/* <br /> */}
        <span className="heading-text_editorail">
          <strong>Author: Anshul Sharma</strong>
        </span>
        {/* <p>
          <strong>Registration No : ************</strong>
        </p> */}
        <p>
          <br />
          After witnessing an unprecedented havoc raged by the World war 2 and
          miserable failure of the United Nations' predecessor League of
          Nations, the world wanted peace. A total of 850 delegates and 2500
          press and radio persons from various nations gathered at San Francisco
          conference making it one of the largest conferences in the world.
        </p>
        <p>
          The idea of creating an international organization for world peace was
          officially mentioned in a joint four-nation declaration signed by the
          United States of America, the United Kingdom, the USSR, and China in
          1943 at the Moscow conference.
        </p>
        <p>
          The charter of the United Nations was adopted unanimously on 25 June
          1945 at the end of the San Francisco conference which was signed by 51
          founding nations(Poland signed it later). The charter came into force
          on 24 October 1945 as per its article 110, paragraph 3, after the
          deposition of instruments of ratification by permanent 5 member states
          and the majority of the other signatories. This day is now observed as
          the United Nations day.
        </p>
        <span className="heading-text_editorail">
          <strong>UN'S Achivements</strong>
          <br />
          <br />
          {/* <br /> */}
        </span>
        <center>
          <img src={United_} className="img-fluid united" />
        </center>

        <p>
          Much has been said about the relevance, success, and failures of the
          United Nations. Today, United Nations' activities impact billions of
          people around the world. It has engaged in promoting disarmament and
          combating extremism and terrorism. It has bought together nations to
          agree to attain Sustainable Development Goals(SDGs). It has assisted
          people in areas of armed conflict, humanitarian aid in natural
          disasters, protected human rights, and ensured gender equality. The
          biggest credit, of course, will be given to the United Nations for
          saving the world from another world war
        </p>
        <p>
          There has been a 40% decline in conflicts since 1990 due to UN support
          and mediation. International Atomic Energy Agency(IAEA) ensures
          nuclear material is used only for peaceful purposes and has agreements
          with over 180 countries. The United Nations treaties limit works to
          produce nuclear weapons. The United Nations Genocide Convention
          prevents and punishes actions of genocide during the war and peaceful
          times. The Security Council recommends actions for its violation. From
          fostering democracy, improving literacy, preventing human rights
          violations, promoting women's rights, combating terrorism, promoting
          press freedom, and combating climate change, the list of United
          Nations' successes goes on.
        </p>
        <span className="heading-text_editorail">
          <strong>UN'S FAILURE</strong>
        </span>
        <br />
        <br />
        <center>
          <img src={United__} className="img-fluid united" />
        </center>
        <br />
      </div>
    </div>
  );
};
