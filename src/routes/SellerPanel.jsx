import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function SellerPanel() {
  const home = useNavigate();
  const goHome = () => {
    home("/")
  }
  const pass = prompt("Please, Enter You'r Seller Passkey.");
  if (pass !== "123456")
    return (<center>
      <section className="section-worng-pass">
        <div className="worng-pass">
          <h1>
            If You Want To Work Us Get Seller Passkey By 
             <a href="mailto:arafat.rahman.6003@email.com">
               online-store@gmail.com
            </a>
          </h1>
           <button class="btn btn-primary" onClick={goHome} style={{marginTop:"20px"}}>Go Home</button>
        </div>
      </section>
      </center>
    );
  const src = useRef();
  const item = useRef();
  const company = useRef();
  const originalPrice = useRef();
  const currentPrice = useRef();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const postItems = {
      image: src.current.value,
      company: company.current.value,
      item_name: item.current.value,
      original_price: originalPrice.current.value,
      current_price: currentPrice.current.value,
    };

    try {
      const res = await fetch("http://localhost:8080/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postItems),
      });

      if (res.ok) {
        alert("Item posted successfully!");
        navigate("/");
      } else {
        alert("Failed to post item");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <main className="seller">
      <center>
        <h2>Dear Add You'r Product ...</h2>
      </center>
      <section className="seller-input">
        <input
          type="text"
          className="sinput"
          placeholder="Enter virtual src for image"
          ref={src}
        />
        <input
          type="text"
          className="sinput"
          placeholder="Enter item name "
          ref={item}
        />
        <input
          type="text"
          className="sinput"
          placeholder="Enter item company"
          ref={company}
        />
        <input
          type="text"
          className="sinput"
          placeholder="Enter original price"
          ref={originalPrice}
        />
        <input
          type="text"
          className="sinput"
          placeholder="Enter current price"
          ref={currentPrice}
        />
      </section>
      <center>
        {" "}
        <button class="btn btn-primary seller-Btn" onClick={handleSubmit}>
          Post Item
        </button>
      </center>
    </main>
  );
}

export default SellerPanel;
