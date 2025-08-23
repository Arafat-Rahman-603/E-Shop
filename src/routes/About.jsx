import { Link } from "react-router-dom";

function About() {
  return (
    <section id="about" className="about container">
      <h2 className="about__title">About Our Store</h2>

      <p className="about__lead">
        Welcome to <strong>Our Store</strong> — your trusted destination for
        high-quality and affordable quality products.
      </p>

      <p className="about__text">
        At <strong>Our Store</strong>, we believe shopping should be simple,
        secure, and enjoyable. We carefully select every item to ensure style,
        durability, and value — backed by reliable delivery and friendly
        support.
      </p>

      <ul className="about__list">
        <li>✔ Handpicked quality</li>
        <li>✔ Fair, transparent pricing</li>
        <li>✔ Fast & reliable delivery</li>
        <li>✔ Helpful customer support</li>
      </ul>

      <p className="about__closing">
        Thanks for choosing <strong>Our Store</strong>. We’re here to make your
        shopping experience better every day!
      </p>
      <p>
        Go for buy some <Link to="/">items</Link>
      </p>
    </section>
  );
}

export default About;
