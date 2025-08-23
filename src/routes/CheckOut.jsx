import { useState } from "react";
import { useSelector } from "react-redux";

function Checkout() {
  const selector = useSelector((store) => store.selectedItem);
  const { items } = useSelector((store) => store.fetchItems);
  const amount = items[selector];
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postal: "",
    payment: "cod", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const onlyDigits = value.replace(/\D/g, "");
      setForm({ ...form, [name]: onlyDigits });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^01\d{9}$/.test(form.phone)) {
      alert("Phone number must start with 01 and be exactly 11 digits!");
      return;
    }

    if (form.payment === "card" && form.card.trim() === "") {
      alert("Please enter your card number!");
      return;
    }

    alert("Checkout is unsuccessfull! try again");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h2 className="text-center mb-4">Checkout</h2>
        {amount === undefined ? (
          <h2 className="text-center mb-4 text-secondary">Total Ammount 0</h2>
        ) : (
          <h2 className="text-center mb-4 text-secondary">
            Total Ammount
            <strong class="text-success"> {amount.current_price} </strong>TK
          </h2>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              placeholder="e.g. 01XXXXXXXXX"
              value={form.phone}
              onChange={handleChange}
              maxLength="11"
              required
            />
            <div className="form-text text-muted">
              Must start with <b>01</b> and be exactly <b>11 digits</b>.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Street Address</label>
            <input
              type="text"
              name="address"
              className="form-control"
              placeholder="Enter your address"
              value={form.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">City</label>
              <input
                type="text"
                name="city"
                className="form-control"
                placeholder="Enter city"
                value={form.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Postal Code</label>
              <input
                type="text"
                name="postal"
                className="form-control"
                placeholder="Enter postal code"
                value={form.postal}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Payment Method</label>

            <div className="form-check">
              <input
                type="radio"
                id="cod"
                name="payment"
                value="cod"
                className="form-check-input"
                checked={form.payment === "cod"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="cod">
                Cash on Delivery
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
