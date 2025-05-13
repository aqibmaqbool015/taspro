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
import { Navigate } from "react-router-dom";

function ProtectedRoute({ element }) {
  const token = localStorage.getItem("token"); // Get token from local storage
  return token ? element : <Navigate to={Screens.authLogin} replace />;
}


function App() {

  return (
    <>
      <Routes>
        <Route path={Screens.signUp} element={<SignUp />} />

        <Route path={Screens.authLogin} element={<Login />} />
        <Route path={Screens.otpLogin} element={<OtpAuth />} />
        <Route path={Screens.otpSignup} element={<OtpSignUp />} />
        <Route path={Screens.signUp} element={<SignUp />} />

        <Route path={Screens.Home} element={<ProtectedRoute element={<Home />} />} />
        <Route path='/service/:id' element={<ProtectedRoute element={<Service />} />} />
        <Route path={Screens.rateCard} element={<ProtectedRoute element={<RateCard />} />} />
        <Route path={Screens.serviceCart} element={<ProtectedRoute element={<ServiceCart />} />} />
        <Route path={Screens.cartPage} element={<ProtectedRoute element={<CartPage />} />} />
        <Route path="/order-payment/:id" element={<ProtectedRoute element={<PaymentOption />} />} />
        <Route path='/payment-detail/:id' element={<ProtectedRoute element={<CartDetail />} />} />
        <Route path={Screens.orderConfirm} element={<ProtectedRoute element={<OrderConfirmation />} />} />

        {/* service */}

        <Route path={Screens.amcService} element={<ProtectedRoute element={<ServiceHome />} />} />
        <Route path={Screens.amchomeservice} element={<ProtectedRoute element={<ServiceServices />} />} />
        <Route path={Screens.amcrateCard} element={<ProtectedRoute element={<ServiceRateCard />} />} />
        <Route
          path={Screens.amcserviceCart} element={<ProtectedRoute element={<ServiceCartServices />} />}
        />
        <Route path={Screens.amccartPage} element={<ProtectedRoute element={<ServiceCartPage />} />} />
        <Route
          path={Screens.amcpaymentOption} element={<ProtectedRoute element={<ServicePaymentOption />} />}
        />
        <Route path={Screens.amccartDetail} element={<ProtectedRoute element={<ServiceCartDetail />} />} />
        <Route
          path={Screens.amcorderConfirm}
          element={<ProtectedRoute element={<ServiceOrderConfirmation />} />}
        />

        {/* Auth */}

        <Route path={Screens.profileBuilding} element={<ProtectedRoute element={<ProfileBuilding />} />} />
        <Route path={Screens.completeProfile} element={<ProtectedRoute element={<CompleteProfile />} />} />

        {/* Admin */}
        <Route path={Screens.mySchedule} element={<ProtectedRoute element={<MySchedule />} />} />
        <Route path={Screens.myScheduleCard} element={<ProtectedRoute element={<ScheduleHomeCard />} />} />
        <Route path={Screens.scheduleDetail} element={<ProtectedRoute element={<ScheduleDetail />} />} />
        <Route path={Screens.bookingService} element={<ProtectedRoute element={<BookingService />} />} />
        <Route
          path={Screens.bookingServiceDetail}
          element={<ProtectedRoute element={<BookingServiceTab />} />}
        />
        <Route path={Screens.bookingAmcDetail} element={<ProtectedRoute element={<BookingAmcDetail />} />} />
        <Route path={Screens.chatAdmin} element={<ProtectedRoute element={<ChatAdmin />} />} />
        <Route path={Screens.bookPayment} element={<ProtectedRoute element={<BookPaymentSummary />} />} />
        <Route path={Screens.bookPaymentView} element={<ProtectedRoute element={<BookPaymentView />} />} />
        <Route path={Screens.bookPaymentDetail} element={<ProtectedRoute element={<BookPaymentDetail />} />} />
        <Route path={Screens.bookOrderCancel} element={<ProtectedRoute element={<BookOrderCancel />} />} />
        <Route path={Screens.accountHome} element={<ProtectedRoute element={<AccountHome />} />} />
        <Route path={Screens.accountEdit} element={<ProtectedRoute element={<AccountEdit />} />} />
        <Route path={Screens.accountrefer} element={<ProtectedRoute element={<AccountReferHelp />} />} />
        <Route path={Screens.accountLanguage} element={<ProtectedRoute element={<AccountLanguage />} />} />
        <Route path={Screens.accountWallet} element={<ProtectedRoute element={<AccountWallet />} />} />
        <Route path={Screens.accountRatingReviews} element={<ProtectedRoute element={<AccountWRatingReviews />} />} />
        <Route path={Screens.accountBank} element={<ProtectedRoute element={<AccountBank />} />} />
        <Route path={Screens.newBank} element={<ProtectedRoute element={<NewBank />} />} />
        <Route path={Screens.accountBankRemove} element={<ProtectedRoute element={<AccountRemoveBank />} />} />
        <Route path={Screens.accountCoupans} element={<ProtectedRoute element={<AccountCoupans />} />} />
        <Route path={Screens.aboutUs} element={<ProtectedRoute element={<AboutUs />} />} />
        <Route path={Screens.termsOfUse} element={<ProtectedRoute element={<TermsOfUse />} />} />
        <Route path={Screens.privacyPolicy} element={<ProtectedRoute element={<Privacy />} />} />
        <Route path={Screens.cancelRefund} element={<ProtectedRoute element={<CancellationRefund />} />} />
        <Route path={Screens.contactUs} element={<ProtectedRoute element={<ContactUs />} />} />
        <Route path={Screens.faqs} element={<ProtectedRoute element={<Faqs />} />} />
        <Route path={Screens.career} element={<ProtectedRoute element={<Careers />} />} />
        <Route path={Screens.blogs} element={<ProtectedRoute element={<Blogs />} />} />
        <Route path={Screens.blogDetail} element={<ProtectedRoute element={<BlogDetail />} />} />
      </Routes>
    </>
  );
}

export default App;
