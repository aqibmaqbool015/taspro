import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Images from "../../../constant/images";
import { amountSummary, navigateAmount } from "../../../constant/dummyData";
import "../../screens.css";
import { useNavigate } from "react-router-dom";
import CheckBox from "../../../commonComponents/checkBox";
import { Screens } from "../../../constant/routes";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchOrderById } from "../../../services/api";
import { useMutation } from "@tanstack/react-query";
import { markOrderAsCheckOut } from "../../../services/api";

function PaymentComponent() {
  const [selectedPayment, setSelectedPayment] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
  const handleClicks = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { data: order, isLoading, error } = useQuery({
    queryKey: ["order", id],
    queryFn: () => fetchOrderById(id),
    enabled: !!id,
  });

  const mutation = useMutation({
    mutationFn: markOrderAsCheckOut,
    onSuccess: (data) => {
      console.log("Payment success:", data);
      // Redirect or show success message
      navigate(`/payment-detail/${data?.data?._id} `); // or any route
    },
    onError: (error) => {
      console.error("Payment failed:", error.message);
      alert("Payment failed: " + error.message);
    },
  });

  const total = order?.totalAmount - order?.visitCharges + order?.totalDiscount;
  const amountSummary = [
    {
      title: "Price (Services Price)",
      value: `₹ ${total} `,
      class: "amount-detail-content-figure",
      class2: "amount-exact-point-value",
      listingClass: "display-view-web-cart mt-2",
      classMain: "mt-2 user-account-time-container ",
    },
    {
      title: "Offer Discount",
      value: `₹ ${order?.totalDiscount} `,
      class: "amount-detail-content-figure amount-light",
      class2: "amount-exact-point-value amount-light",
      listingClass: "display-view-web-cart mt-2",
      classMain: "mt-2 user-account-time-container ",
    },
    // {
    //   title: "Coupon Discount",
    //   value: "₹700",
    //   class: "amount-detail-content-figure amount-success",
    //   class2: "amount-exact-point-value amount-success",
    //   listingClass: "display-view-web-cart mt-2",
    //   classMain: "mt-2 user-account-time-container ",
    // },
    {
      title: "Visit Charge",
      value: `₹ ${order?.visitCharges} `,
      class: "amount-detail-content-figure amount-light",
      class2: "amount-exact-point-value amount-light",
      listingClass: "display-view-web-cart mt-2",
      classMain: "mt-2 user-account-time-container border-bottom-container",
    },
    {
      title: "Total Amount",
      value: `₹ ${order?.totalAmount} `,
      class: "amount-detail-content-figure",
      class2: "amount-exact-point-value",
      listingClass:
        "display-view-web-cart mt-2 amount-listing-seperate-grid-total",
      classMain: "mt-2 user-account-time-container ",
    },
    {
      title: "Payment Status",
      value: `${order?.status}`,
      class: "amount-detail-content-figure",
      class2: "amount-exact-point-value",
      listingClass:
        "display-view-web-cart display-view-web-cart-payment-mode mt-2",
      classMain: "mt-2 user-account-time-container ",
    },
    {
      title: "Mod of Payment",
      value: `${selectedPayment}`,
      class: "amount-detail-content-figure",
      class2: "amount-exact-point-value",
      listingClass:
        "display-view-web-cart display-view-web-cart-payment-mode mt-2",
      classMain: "mt-2 user-account-time-container  ",
    },
    {
      title: `You will save ₹ ${order?.totalDiscount}  on this order`,
      class: "amount-detail-content-figure amount-success",
      class2: "amount-exact-point-value amount-success",
      listingClass: "display-view-web-cart mt-2",
      classMain:
        "mt-2 user-account-time-container  border-bottom-none",
    },
  ];
  return (
    <>
      <section className="home-banner-section">
        <Container>
          <Row>
            <Col lg={{ span: 7 }}>
              <div className="home-banner-left-content
              home-banner-left-content-gap">
                <h4 className="heading-title-banner
                heading-title-banner-bottom-gap">Checkout</h4>

                <div className="mt-3 box-cart-container position-relative">
                  <div
                    className="d-flex justify-content-between
                    align-items-center
                  "
                    onClick={handleClicks}
                  >
                    <h5 className="
                    user-provider-dummy-top-heading">payment option</h5>
                    <Button
                      className=" btn-primary-fill-book-border
                      btn-primary-fill-book-border-response
                      btn-outline-primary-increment"
                      style={{ height: "45px" }}
                    // onClick={() => navigate(Screens.cartDetail)}
                    // disabled={!selectedPayment}
                    >
                      <span className="card-label-text-btn">Pay ₹ {order?.totalAmount} </span>
                    </Button>
                  </div>
                  <div className="mt-4">
                    <CheckBox selectedPayment={selectedPayment} onSelect={setSelectedPayment} />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={{ span: 5 }}>
              <div className="mt-4 box-cart-container position-relative">
                <h5 className="
                user-provider-dummy-top-heading">amount summary</h5>
                {amountSummary?.map((item, index) => {
                  return (
                    <>
                      <div className={item.listingClass}>
                        <p className={item.class}>{item.title}</p>
                        <h6 className={item.class2}>{item.value}</h6>
                      </div>
                    </>
                  );
                })}
                <div className="text-center mt-3">
                  <Button
                    className=" btn-primary-fill-book
                    btn-primary-fill-book-rounded
                    btn-primary-fill-book-border-response"
                    onClick={() => mutation.mutate({ orderId: id, modeOfPayment: selectedPayment })}
                    disabled={!selectedPayment || mutation.isPending}
                  >
                    Pay ₹{order?.totalAmount}
                  </Button>
                </div>
                <ul className="px-0 mt-2 mb-0 user-content-align-debit">
                  {navigateAmount.map((item, index) => {
                    return (
                      <>
                        <li className={item.classContainer}>
                          <span className="user-add-cart-amount-label">
                            <img
                              src={item.image}
                              alt=""
                              className={item.class}
                            />
                            {item.text}
                          </span>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
              <div className="mt-2  text-center">
                <div className="box-cart-success-amount">
                  <div className="box-cart-success-amount-flex">
                    <span className="box-cart-succcess-logo">
                      <img src={Images.Cart3} alt="" className="img-fluid" />
                    </span>
                    <h6 className="box-cart-succcess-label">
                      Easy Cancellation/Returns, Background Verified Service
                      Provide.
                    </h6>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default PaymentComponent;
