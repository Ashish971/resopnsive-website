import React, { useState } from "react";
import { CiHome } from "react-icons/ci";
import { GoLocation } from "react-icons/go";
import { AiOutlinePhone} from "react-icons/ai";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`
    Name: ${data.fullname}. 
    Email: ${data.email}.
    Number:  ${data.phone}. 
     Message: ${data.msg}`);
  };
  return (
    <>
      <div className="main-breadcrumb">
        <div className="container">
          <h2>Contact Us</h2>
        </div>
      </div>
      <div className="main-contact ">
        <div className="container ">
          <div className="row">
            <div className="col-md-8 order-2 order-lg-1">
              <div className="main-contact-form ">
                <form onSubmit={formSubmit}>
                  <div class="">
                    <label for="exampleInputEmail1" class="form-label mb-">
                      Full Name
                    </label>
                    <input
                      type="text"
                      class="form-control mb-3"
                      id="exampleInputEmail1"
                      name="fullname"
                      value={data.fullname}
                      onChange={inputEvent}
                      placeholder="Enter your name"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Email address
                    </label>

                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      name="email"
                      value={data.email}
                      onChange={inputEvent}
                      placeholder="name@example.com"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Phone
                    </label>

                    <input
                      type="number"
                      class="form-control"
                      id="exampleInputEmail1"
                      name="phone"
                      value={data.phone}
                      onChange={inputEvent}
                      placeholder="mobile no"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Message
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      name="msg"
                      value={data.msg}
                      onChange={inputEvent}
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" class=" main-button btn-get-started">
                      Submit form
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4 order-1 order-lg-2 ">
              <div className="main-contact-details">
                <ul>
                  <li>
                   <GoLocation/>  Maitri Marga , Pulchowk 20, Lalitpur, Nepal
                  </li>
                  <li> <AiOutlinePhone/>  987456123</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Contact;
