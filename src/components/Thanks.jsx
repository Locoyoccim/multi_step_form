import arrow_done from "/src/assets/images/icon-thank-you.svg";
import "/src/styles/thanks.css";

function Thanks() {
  return (
    <section className="thank_section">
      <img src={arrow_done} alt="arrow_done" className="arrow" />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </section>
  );
}

export default Thanks;
