import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "./responsive.css";
import { Screens } from "./constant/routes";
import Home from "./pages/home/Home";
import Service from "./pages/home/Service";
import RateCard from "./pages/home/RateCard";
import ServiceCart from "./pages/home/ServiceCart";
import CartPage from "./pages/home/CartPage";
import PaymentOption from "./pages/home/PaymentOption";
import CartDetail from "./pages/home/CartDetail";
import OrderConfirmation from "./pages/home/OrderConfirmation";
import ServiceServices from "./pages/services/Service";
import ServiceRateCard from "./pages/services/RateCard";
import ServiceCartServices from "./pages/services/ServiceCart";
import ServiceCartPage from "./pages/services/CartPage";
import ServicePaymentOption from "./pages/services/PaymentOption";
import ServiceCartDetail from "./pages/services/CartDetail";
import ServiceOrderConfirmation from "./pages/services/OrderConfirmation";
import ServiceHome from "./pages/services/Home";
import Login from "./pages/auth/Login";
import OtpAuth from "./pages/auth/Otp";
import SignUp from "./pages/auth/SignUp";
import ProfileBuilding from "./pages/auth/ProfileBuilding";
import CompleteProfile from "./pages/auth/CompleteProfile";
import MySchedule from "./admin/ScheduleHome";
import ScheduleDetail from "./admin/ScheduleDetail";
import BookingService from "./admin/BookingService";
import BookingServiceTab from "./admin/BookingServiceTab";
import BookingAmcDetail from "./admin/BookingAmcDetail";
import ChatAdmin from "./admin/ChatAdmin";
import BookPaymentSummary from "./admin/BookPaymentSummary";
import BookPaymentDetail from "./admin/BookPaymentDetail";
import BookOrderCancel from "./admin/BookOrderCancel";
import AccountHome from "./admin/AccountHome";
import AccountEdit from "./admin/AccountEdit";
import AccountReferHelp from "./admin/AccountReferHelp";
import AccountLanguage from "./admin/AccountLanguage";
import AccountWallet from "./admin/AccountWallet";
import AccountWRatingReviews from "./admin/AccountRatingReviews";
import AccountBank from "./admin/AcountBank";
import NewBank from "./admin/NewBank";
import AccountRemoveBank from "./admin/AccountRemoveBank";
import AccountCoupans from "./admin/AccountCoupans";
import AboutUs from "./pages/footerLinks/AboutUs";
import TermsOfUse from "./pages/footerLinks/TermsOfUse";
import Privacy from "./pages/footerLinks/Privacy";
import CancellationRefund from "./pages/footerLinks/CancellationRefund";
import ContactUs from "./pages/footerLinks/ContactUs";
import Faqs from "./pages/footerLinks/Faqs";
import Careers from "./pages/footerLinks/Careers";
import Blogs from "./pages/footerLinks/Blogs";
import BlogDetail from "./pages/footerLinks/BlogDetail";
import ScheduleHomeCard from "./admin/ScheduleHomeCard";
import OtpSignUp from "./pages/auth/OtpSignUp";
import BookPaymentView from "./admin/BookPaymentView";

function App() {
    const token = localStorage.getItem("token"); // Get token from local storage

  return (
    <>
      <Routes>
        {!token && <Route path={Screens.signUp} element={<SignUp />} />}
          
        <Route path={Screens.authLogin} element={<Login />} />
        <Route path={Screens.otpLogin} element={<OtpAuth />} />
        <Route path={Screens.otpSignup} element={<OtpSignUp />} />
        <Route path={Screens.signUp} element={<SignUp />} />
        
        <Route path={Screens.Home} element={<Home />} />
        <Route path={Screens.service} element={<Service />} />
        <Route path={Screens.rateCard} element={<RateCard />} />
        <Route path={Screens.serviceCart} element={<ServiceCart />} />
        <Route path={Screens.cartPage} element={<CartPage />} />
        <Route path={Screens.paymentOption} element={<PaymentOption />} />
        <Route path={Screens.cartDetail} element={<CartDetail />} />
        <Route path={Screens.orderConfirm} element={<OrderConfirmation />} />

        {/* service */}

        <Route path={Screens.amcService} element={<ServiceHome />} />
        <Route path={Screens.amchomeservice} element={<ServiceServices />} />
        <Route path={Screens.amcrateCard} element={<ServiceRateCard />} />
        <Route
          path={Screens.amcserviceCart}
          element={<ServiceCartServices />}
        />
        <Route path={Screens.amccartPage} element={<ServiceCartPage />} />
        <Route
          path={Screens.amcpaymentOption}
          element={<ServicePaymentOption />}
        />
        <Route path={Screens.amccartDetail} element={<ServiceCartDetail />} />
        <Route
          path={Screens.amcorderConfirm}
          element={<ServiceOrderConfirmation />}
        />

        {/* Auth */}
        
        <Route path={Screens.profileBuilding} element={<ProfileBuilding />} />
        <Route path={Screens.completeProfile} element={<CompleteProfile />} />

        {/* Admin */}
        <Route path={Screens.mySchedule} element={<MySchedule />} />
        <Route path={Screens.myScheduleCard} element={<ScheduleHomeCard />} />
        <Route path={Screens.scheduleDetail} element={<ScheduleDetail />} />
        <Route path={Screens.bookingService} element={<BookingService />} />
        <Route
          path={Screens.bookingServiceDetail}
          element={<BookingServiceTab />}
        />
        <Route path={Screens.bookingAmcDetail} element={<BookingAmcDetail />} />
        <Route path={Screens.chatAdmin} element={<ChatAdmin />} />
        <Route path={Screens.bookPayment} element={<BookPaymentSummary />} />
        <Route path={Screens.bookPaymentView} element={<BookPaymentView />} />
        <Route path={Screens.bookPaymentDetail} element={<BookPaymentDetail />} />
        <Route path={Screens.bookOrderCancel} element={<BookOrderCancel />} />
        <Route path={Screens.accountHome} element={<AccountHome />} />
        <Route path={Screens.accountEdit} element={<AccountEdit />} />
        <Route path={Screens.accountrefer} element={<AccountReferHelp />} />
        <Route path={Screens.accountLanguage} element={<AccountLanguage />} />
        <Route path={Screens.accountWallet} element={<AccountWallet />} />
        <Route path={Screens.accountRatingReviews} element={<AccountWRatingReviews />} />
        <Route path={Screens.accountBank} element={<AccountBank />} />
        <Route path={Screens.newBank} element={<NewBank />} />
        <Route path={Screens.accountBankRemove} element={<AccountRemoveBank />} />
        <Route path={Screens.accountCoupans} element={<AccountCoupans />} />
        <Route path={Screens.aboutUs} element={<AboutUs />} />
        <Route path={Screens.termsOfUse} element={<TermsOfUse />} />
        <Route path={Screens.privacyPolicy} element={<Privacy />} />
        <Route path={Screens.cancelRefund} element={<CancellationRefund />} />
        <Route path={Screens.contactUs} element={<ContactUs />} />
        <Route path={Screens.faqs} element={<Faqs />} />
        <Route path={Screens.career} element={<Careers />} />
        <Route path={Screens.blogs} element={<Blogs />} />
        <Route path={Screens.blogDetail} element={<BlogDetail />} />
      </Routes>
    </>
  );
}

export default App;
