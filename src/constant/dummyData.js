import { Modal } from "react-bootstrap";
import AdminImages from "./adminImages";
import Images from "./images";
import { Screens } from "./routes";
import {useNavigate } from "react-router-dom";



export const homeCards = [
  {
    className: "user-listing-card-content",
    icon: Images.Home1,
    title: "AC & Appliance ",
    title2: "Repair",
    spanClass: "user-listing-card-label",
  },
  {
    className: "user-listing-card-content ",
    icon: Images.Home2,
    title: "Deep Cleaning ",
    title2: "Services",
    spanClass: "user-listing-card-label card-content-bg-two",
  },
  {
    className: "user-listing-card-content ",
    icon: Images.Home3,
    title: "Handyman ",
    title2: "Services",
    spanClass: "user-listing-card-label card-content-bg-three",
  },
  {
    className: "user-listing-card-content ",
    icon: Images.Home4,
    title: "Pest Control & ",
    title2: "Waterproofing",
    spanClass: "user-listing-card-label card-content-bg-four",
  },
  {
    className: "user-listing-card-content ",
    icon: Images.Home5,
    title: "Cleaning ",
    title2: "Packages",
    spanClass: "user-listing-card-label card-content-bg-five",
  },
  {
    className: "user-listing-card-content ",
    icon: Images.Home6,
    title: "AAMC Service ",
    title2: "Plan",
    spanClass: "user-listing-card-label card-content-bg-six",
  },
];

export const homeService = [
  {
    image: Images.Service1,
    text: "Same Day Service",
  },
  {
    image: Images.Service2,
    text: "Verified Serviceman",
  },
  {
    image: Images.Service3,
    text: "Satisfaction Guaranteed",
  },
];

export const repairService = [
  {
    image: Images.Repair1,
    text: "AC Repair",
    classImage: "img-fluid img-fluid-user-repair-services-same",
  },
  {
    image: Images.Repair2,
    text: "Geyser Repair",
    classImage: "img-fluid img-fluid-user-repair-services-same",
  },
  {
    image: Images.Repair3,
    text: "Gas Stove Repair",
    classImage: "img-fluid img-fluid-user-repair-services-same",
  },
  {
    image: Images.Repair4,
    text: "Water Cooler Repair",
    classImage: "img-fluid img-fluid-user-repair-services-same",
  },
  {
    image: Images.Repair5,
    text: "Washing Machine Repair",
    classImage: "img-fluid img-fluid-user-repair-services-same",
  },
  {
    image: Images.Repair6,
    text: "Kitchen Chimney Repair",
    classImage: "img-fluid img-fluid-user-repair-services-same",
  },
  {
    image: Images.Repair7,
    text: "Refrigerator Repair",
    classImage: "img-fluid img-fluid-user-repair-services-same",
  },
  {
    image: Images.Repair8,
    text: "Microwave Repair",
    classImage: "img-fluid img-fluid-user-repair-services-same",
  },
  {
    image: Images.Repair9,
    text: "Water Purifier Repair",
    classImage: "img-fluid img-fluid-user-repair-services-same",
  },
  {
    image: Images.Repair10,
    text: "TV Repair",
    classImage: "img-fluid img-fluid-user-repair-services-same",
  },
  {
    image: Images.Repair11,
    text: "Computer Repair",
    classImage: "img-fluid img-fluid-user-repair-services-same",
  },
  {
    image: Images.Repair12,
    text: "See All",
    classImage:
      "img-fluid img-fluid-user-repair-services-same img-fluid-user-repair-fixed",
  },
];

export const cleaningCard = [
  {
    image: Images.Cleaning1,
    title: "Domestic Help Services",
    star: Images.Star,
    rating: " 4.5 (12m Review)",
    bold: "₹550",
    light: "₹650",
    time: "45 min",
    book: "book now",
  },
];

export const handymanContent = [
  {
    image: AdminImages.Staff1,
    text: "Electrician",
  },
  {
    image: AdminImages.Staff2,
    text: "Carpenter",
  },
  {
    image: AdminImages.Staff3,
    text: "Plumber",
  },
  {
    image: AdminImages.Staff4,
    text: "Furniture Assembly & Dismantle",
  },
  {
    image: AdminImages.Staff5,
    text: "House Repairer",
  },
];

export const appliancesContent = [
  {
    title: " Appliances Suraksha Packages",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas id erat a ornare. Donec bibendum venenatis mollis. Aliquam id libero at mi bibendum venenatis at ac purus. Mauris eu volutpat diam, id vulputate risus. ",
    button: "book now",
  },
];
export const applicationDownload = [
  {
    title: "Download This App",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas id erat a ornare. Donec bibendum venenatis mollis. Aliquam id libero at mi bibendum venenatis at ac purus. Mauris eu volutpat diam, id vulputate risus. ",
    store: Images.Store,
    scan: Images.Scanner,
  },
];

export const servicesTexts = [
  {
    title: "Appliances Repair & Servic ",
    text: "Ac Repair | Air Cooler Repair | Gas Stove Repair | Geyser Repair | Kitchen Chimney Cleaning | Kitchen Chimney Repair | Microwave Oven Repair | Refrigerator Repair | Residential Inverter Repair | TV & Fan Installation | TV Repair | Washing Machine Repair | Water Cooler Repair Water Purifier Repair ",
  },
  {
    title: "Deep Cleaning Services",
    text: "Bathroom Cleaning | Carpet Cleaning | Floor Cleaning | Home Deep Cleaning | Kitchen Deep Cleaning | Office Deep Cleaning | Sofa Cleaning Water Tank Cleaning Handyman Services. Carpenter | Electrician | Furniture Assembly & Dismantle | Plumber | House Painter    ",
  },
  {
    title: "Construction & Remodeling",
    text: "Home Renovation & Remodeling | Bathroom Renovation & Remodeling | Commercial Chimney Service | Painting Contractor | Plumbing Contractor | Electrical Contractor | False Ceiling Contractor | Water Proofing Contractor | Cockroaches, Ants & General Pest Control | Termites Control | Bed Bugs Control    ",
  },
];
export const servicesTextsTwo = [
  {
    title: "Annual Maintenance Contract (AMC)    ",
    text: "Air Conditioner (AC) AMC | Water Purifier (RO) AMC | Kitchen Chimney AMC    ",
  },
  {
    title: "Cleaning Packages ",
    text: "Bathroom Cleaning Package | Water Tank Cleaning Package | Sofa Cleaning Package | Home Cleaning Package",
  },
];

export const chooseListing = [
  {
    image: Images.Choose1,
    title: "100% Satisfaction",
    text: "We Don’t provide service only but we change the perception and feeling along. If not free rework done.",
  },
  {
    image: Images.Choose2,
    title: "Transparency",
    text: "At TAS Home Service we put clear information of service at every stage of operation in front of customers.",
  },
  {
    image: Images.Choose3,
    title: "One Step Solution",
    text: "We provide 110+ services at best price so that customers need not go outside of tashome in for further choice.",
  },
  {
    image: Images.Choose4,
    title: "Quality Assurance",
    text: "We Don’t tell our standards. We show it indeed. The work only is performed by our specialist champs.",
  },
  {
    image: Images.Choose5,
    title: "Best of Cheapest",
    text: "Tashome.in offers best quality of services at least price in order to meet customer standards and demands.",
  },
  {
    image: Images.Choose6,
    title: "Wide Range of Choice",
    text: "we provide various choices in order to satisfy the customer and to meet their demand at the standard they want.",
  },
];

export const footerLink = [
  {
    title: "company",
    link: [
      { text: "About Us", link: Screens.aboutUs },
      { text: "Terms & Conditions", link: Screens.termsOfUse },
      { text: "Privacy Policy", link: Screens.privacyPolicy },
      { text: "Contact Us", link: Screens.contactUs },
      { text: "Careers", link: Screens.career },
    ],
  },
  {
    title: "Consumers",
    link: [
      { text: "Cancellation & Refund Policy", link: Screens.cancelRefund },
      { text: "Terms of Use", link: Screens.termsOfUse },
      { text: "FAQs", link: Screens.faqs },
      { text: "Blog", link: Screens.blogs },
    ],
  },
];

export const socialAccounts = [
  {
    image: Images.Social1,
  },
  {
    image: Images.Social2,
  },
  {
    image: Images.Social3,
  },
  {
    image: Images.Social4,
  },
  {
    image: Images.Social5,
  },
];

export const footerContact = [
  {
    text: "TASPRO SERVICE INDIA PVT.LTD.",
  },
  {
    text: "Office No. 201, Atlantis Corporate Park Ring Road No.1, Telebandha, Raipur Chhattisgarh (22) 492001",
  },
  {
    text: "Email: info@tascompany.in",
  },
  {
    text: "Contact: 7447-0000-45",
  },
  {
    text: "CIN: USIR0000024655604948",
  },
];

export const footerAccount = [
  {
    image: Images.Account3,
  },
  {
    image: Images.Account1,
  },
  {
    image: Images.Account2,
  },
  {
    image: Images.Account3,
  },
  {
    image: Images.Account3,
  },
];

export const modalService = [
  {
    image: Images.ModalService1,
    text: "AC Repair",
  },
  {
    image: Images.ModalService2,
    text: "Air Cooler Repair",
  },
  {
    image: Images.ModalService3,
    text: "Gas Stove Repair",
  },
  {
    image: Images.ModalService4,
    text: "Geyser Repair",
  },
  {
    image: Images.ModalService5,
    text: "Kitchen Chimney...",
  },
  {
    image: Images.ModalService6,
    text: "Microwave Oven...",
  },
  {
    image: Images.ModalService7,
    text: "Refrigerator Repair",
  },
  {
    image: Images.ModalService8,
    text: "Residential Invert...",
  },
  {
    image: Images.ModalService9,
    text: "TV & Fan Insta...",
  },
  {
    image: Images.ModalService10,
    text: "Water Cooler R...",
  },
  {
    image: Images.ModalService11,
    text: "Washing Machi...",
  },
  {
    image: Images.ModalService12,
    text: "Water Purifier...",
  },
];

export const cartWarranty = [
  {
    image: Images.Badge,
    text: "30 days unconditional warranty",
    arrow: Images.ArrowRight,
    link: Screens,
  },
  {
    image: Images.Cart,
    text: "Standrad rate card no hidden charges",
    arrow: Images.ArrowRight,
    link: Screens.rateCard,
  },
];

export const comapnyTraining = [
  {
    image: Images.Fram1,
    text: "Trained & skilled technician serviceman",
  },
  {
    image: Images.Fram2,
    text: "100% satisfaction guaranteed",
  },
  {
    image: Images.Fram3,
    text: "On time service delivery",
  },
  {
    image: Images.Fram4,
    text: "Quality assured service",
  },
  {
    image: Images.Fram5,
    text: "Best price guaranteed",
  },
  {
    image: Images.Fram6,
    text: "Hassle free work",
  },
];

export const splitAcProfile = [
  {
    title: "Split AC",
    image: Images.AcService,
    button: "add",
    warranty: " 30 days warranty",
    heading: " Power Jet Express Cleaning (Split AC)",
    star: Images.Star,
    rate: "4.83 (1.2M reviews)",
    time: Images.Time,
    estimation: "45 minutes approx",
    amount1: "₹499",
    amount2: "₹599",
    off: "30% off",
    text1: "Get 2X deeper dust removal with Foam + PowerJet technology",
    text2: "Intense cleaning of both indoor & outdoor units",
    detail: "More Details >>",
  },
  {
    title: "Window AC",
    image: Images.AcService,
    button: "add",
    warranty: " 30 days warranty",
    heading: " Power Jet Express Cleaning (Split AC)",
    star: Images.Star,
    rate: "4.83 (1.2M reviews)",
    time: Images.Time,
    estimation: "45 minutes approx",
    amount1: "₹499",
    amount2: "₹599",
    off: "30% off",
    text1: "Get 2X deeper dust removal with Foam + PowerJet technology",
    text2: "Intense cleaning of both indoor & outdoor units",
    detail: "More Details >>",
  },
  {
    title: "Split AC",
    image: Images.AcService,
    button: "add",
    warranty: " 30 days warranty",
    heading: " Power Jet Express Cleaning (Split AC)",
    star: Images.Star,
    rate: "4.83 (1.2M reviews)",
    time: Images.Time,
    estimation: "45 minutes approx",
    amount1: "₹499",
    amount2: "₹599",
    off: "30% off",
    text1: "Get 2X deeper dust removal with Foam + PowerJet technology",
    text2: "Intense cleaning of both indoor & outdoor units",
    detail: "More Details >>",
  },
];

export const acRepairArea = [
  {
    title: "AC Repair service in Raipur",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humor, or non-characteristic words etc. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham",
  },
  {
    title: "Hiring guide for AC Repair service in Raipur",
    text: "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham",
  },
];
export const faqsContent = [
  {
    title: "There are many variation of passages of lorem ipsum available?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id nunc diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ut congue ligula.",
    key: "1",
  },
  {
    title: "There are many variation of passages of lorem ipsum available?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id nunc diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ut congue ligula.",
    key: "2",
  },
  {
    title: "There are many variation of passages of lorem ipsum available?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id nunc diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ut congue ligula.",
    key: "3",
  },
  {
    title: "There are many variation of passages of lorem ipsum available?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id nunc diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ut congue ligula.",
    key: "4",
  },
  {
    title: "There are many variation of passages of lorem ipsum available?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id nunc diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ut congue ligula.",
    key: "5",
  },
  {
    title: "There are many variation of passages of lorem ipsum available?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id nunc diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ut congue ligula.",
    key: "6",
  },
];

export const tableDetail = [
  {
    one: "Non-Inverter PCB Repaired",
    two: "₹1500",
    three: "₹200",
  },
  {
    one: "Inverter PCB Repaired",
    two: "₹4000",
    three: "₹200",
  },
  {
    one: "Replace LVT",
    two: "₹900",
    three: "₹200",
  },
  {
    one: "Capacitor 2-5 mfd",
    two: "₹250",
    three: "₹250",
  },
  {
    one: "Capacitor 35-50 mfd",
    two: "₹250",
    three: "₹250",
  },
  {
    one: "Capacitor 50-60 mfd",
    two: "₹250",
    three: "₹250",
  },
  {
    one: "Replace Sensor",
    two: "₹250",
    three: "₹250",
  },
];
export const countCartBox = [
  {
    title: " Power Jet Express Cleaning (Split AC)",
    minus: "-",
    plus: "+",
    text: "₹299",
    text2: "₹350",
    id: "1",
  },
  {
    title: "Power Jet Express Cleaning (Window AC)",
    minus: "-",
    plus: "+",
    text: "₹299",
    text2: "₹350",
    id: "2",
  },
];
export const countCartBoxRow = [
  {
    title: " Power Jet Express Cleaning (Split AC)",
    minus: "-",
    plus: "+",
    text: "₹299",
    text2: "₹350",
    image: Images.Delete,
    id: "1",
    quantity: 0,
  },
  {
    title: "Power Jet Express Cleaning (Window AC)",
    minus: "-",
    plus: "+",
    text: "₹299",
    text2: "₹350",
    image: Images.Delete,
    id: "2",
    quantity: 0,
  },
  {
    title: "Power Jet Express Cleaning (Window AC)",
    minus: "-",
    plus: "+",
    text: "₹299",
    text2: "₹350",
    image: Images.Delete,
    id: "3",
    quantity: 0,
  },
];

export const couponsContent = [
  {
    title: "Coupons $ Offer",
    helpingText: "Save upto 15% on every booking",
    image: Images.Coupans,
    percent: Images.Percent,
    subTitle: "Assured Cashback on Paytm",
    text: "Flat ₹30 Cashback",
  },
];

export const workFlow = [
  {
    image: Images.Work1,
    boldText: "Step 1:",
    text: "Lorem ipsum is simply dummy text of the printing.Lorem ipsum is simply dummy text of the printing.",
  },
  {
    image: Images.Work1,
    boldText: "Step 2:",
    text: "Lorem ipsum is simply dummy text of the printing.Lorem ipsum is simply dummy text of the printing.",
  },
  {
    image: Images.Work1,
    boldText: "Step 3:",
    text: "Lorem ipsum is simply dummy text of the printing.Lorem ipsum is simply dummy text of the printing.",
  },
];

export const textDetailService = [
  {
    title: "Service Inclusion",
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Service Exclusion",
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Important Note",
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export const amountSummary = [
  {
    title: "Price (1 Service)",
    value: "₹499",
    class: "amount-detail-content-figure",
    class2: "amount-exact-point-value",
    listingClass: "display-view-web-cart mt-2",
    classMain: "mt-2 user-account-time-container ",
  },
  {
    title: "Offer Discount",
    value: "-₹200",
    class: "amount-detail-content-figure amount-light",
    class2: "amount-exact-point-value amount-light",
    listingClass: "display-view-web-cart mt-2",
    classMain: "mt-2 user-account-time-container ",
  },
  {
    title: "Coupon Discount",
    value: "₹700",
    class: "amount-detail-content-figure amount-success",
    class2: "amount-exact-point-value amount-success",
    listingClass: "display-view-web-cart mt-2",
    classMain: "mt-2 user-account-time-container ",
  },
  {
    title: "Visit Charge",
    value: "₹120",
    class: "amount-detail-content-figure amount-light",
    class2: "amount-exact-point-value amount-light",
    listingClass: "display-view-web-cart mt-2",
    classMain: "mt-2 user-account-time-container border-bottom-container",
  },
  {
    title: "Total Amount",
    value: "₹1600",
    class: "amount-detail-content-figure",
    class2: "amount-exact-point-value",
    listingClass:
      "display-view-web-cart mt-2 amount-listing-seperate-grid-total",
    classMain: "mt-2 user-account-time-container ",
  },
  {
    title: "Payment Status",
    value: "Not Paid",
    class: "amount-detail-content-figure",
    class2: "amount-exact-point-value",
    listingClass:
      "display-view-web-cart display-view-web-cart-payment-mode mt-2",
    classMain: "mt-2 user-account-time-container ",
  },
  {
    title: "Mod of Payment",
    value: "COD",
    class: "amount-detail-content-figure",
    class2: "amount-exact-point-value",
    listingClass:
      "display-view-web-cart display-view-web-cart-payment-mode mt-2",
    classMain: "mt-2 user-account-time-container  ",
  },
  {
    title: "You will save ₹320/ on this order",
    class: "amount-detail-content-figure amount-success",
    class2: "amount-exact-point-value amount-success",
    listingClass: "display-view-web-cart mt-2",
    classMain:
      "mt-2 user-account-time-container  border-bottom-none",
  },
];
export const amountSummaryDetail = [
  {
    title: "Price (1 Service)",
    value: "₹499",
    class: "amount-detail-content-figure",
    class2: "amount-exact-point-value",
    listingClass: "display-view-web-cart mt-2",
    classMain: "mt-2 user-account-time-container ",
  },
  {
    title: "Offer Discount",
    value: "-₹200",
    class: "amount-detail-content-figure amount-light",
    class2: "amount-exact-point-value amount-light",
    listingClass: "display-view-web-cart mt-2",
    classMain: "mt-2 user-account-time-container ",
  },
  {
    title: "Coupon Discount",
    value: "₹700",
    class: "amount-detail-content-figure amount-success",
    class2: "amount-exact-point-value amount-success",
    listingClass: "display-view-web-cart mt-2",
    classMain: "mt-2 user-account-time-container ",
  },
  {
    title: "Visit Charge",
    value: "₹120",
    class: "amount-detail-content-figure amount-light",
    class2: "amount-exact-point-value amount-light",
    listingClass: "display-view-web-cart mt-2",
    classMain: "mt-2 user-account-time-container",
  },
   {
    title: "Advance Paid Amount",
    value: "₹120",
    class: "amount-detail-content-figure amount-light",
    class2: "amount-exact-point-value amount-light",
    listingClass: "display-view-web-cart mt-2",
    classMain: "mt-2 user-account-time-container border-bottom-container",
  },
  {
    title: "Total Amount",
    value: "₹1600",
    class: "amount-detail-content-figure",
    class2: "amount-exact-point-value",
    listingClass:
      "display-view-web-cart mt-2 amount-listing-seperate-grid-total",
    classMain: "mt-2 user-account-time-container ",
  },
  {
    title: "Payment Status",
    value: "Not Paid",
    class: "amount-detail-content-figure",
    class2: "amount-exact-point-value",
    listingClass:
      "display-view-web-cart display-view-web-cart-payment-mode mt-2",
    classMain: "mt-2 user-account-time-container ",
  },
  {
    title: "Mod of Payment",
    value: "COD",
    class: "amount-detail-content-figure",
    class2: "amount-exact-point-value",
    listingClass:
      "display-view-web-cart display-view-web-cart-payment-mode mt-2",
    classMain: "mt-2 user-account-time-container  ",
  },
  {
    title: "You will save ₹320/ on this order",
    class: "amount-detail-content-figure amount-success",
    class2: "amount-exact-point-value amount-success",
    listingClass: "display-view-web-cart mt-2",
    classMain:
      "mt-2 user-account-time-container  border-bottom-none",
  },
];

export const navigateAmount = [
  {
    image: Images.Cart2,
    text: "Safe & secure checkout",
    class: "img-fluid-content-payment-method width-lock-control",
    classContainer: "user-add-card-payment width-100-main-container",
  },
  {
    image: Images.Cart4,
    class: "img-fluid-content-payment-method",
    classContainer: "user-add-card-payment",
  },
  {
    image: Images.Cart5,
    class: "img-fluid-content-payment-method",
    classContainer: "user-add-card-payment",
  },
  {
    image: Images.Cart6,
    class: "img-fluid-content-payment-method",
    classContainer: "user-add-card-payment",
  },
  {
    image: Images.Cart7,
    class: "img-fluid-content-payment-method",
    classContainer: "user-add-card-payment",
  },
  {
    image: Images.Cart8,
    class: "img-fluid-content-payment-method",
    classContainer: "user-add-card-payment",
  },
  {
    image: Images.Cart9,
    class: "img-fluid-content-payment-method",
    classContainer: "user-add-card-payment",
  },
];

export const termsConstant = [
  {
    title: "Acceptance of Terms",
    text: " By accessing or using the App, you represent and warrant that you have read, understood, and agree to be bound by these Terms of Use. If you do not agree to these terms, you must not use the App.",
  },
  {
    title: "User Accounts and Security",
    text: "To access certain features of the App, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information, including your username and password. You are solely responsible for all activities that occur under your account.",
  },
  {
    title: "User Conduct",
    text: "You agree to use the App in compliance with applicable laws and regulations. You must not engage in any activities that may: ",
    list1: "a) Violate the rights of others; ",
    list2: "b) Be unlawful, fraudulent, or deceptive; ",
    list3:
      "c) Interfere with or disrupt the App's functionality or infrastructure; ",
    list4: "d) Introduce viruses or other malicious code; ",
    list5:
      "e) Collect or store personal data of other users without their consent; ",
    list6:
      "f) Engage in any other activity that is deemed inappropriate or objectionable.",
  },
];
export const checkInterest = [
  {
    name: "Credit Card / Debit Card",
    image: AdminImages.CreditAccount1,
  },
  {
    name: "Google Pay",
    image: AdminImages.CreditAccount2,
  },
  {
    name: "Apple Pay",
    image: AdminImages.CreditAccount3,
  },
  {
    name: "Paypal",
    image: AdminImages.CreditAccount4,
  },
  {
    name: "Cash on Delivery",
    image: AdminImages.CreditAccount5,
  },
];

export const otpCode = [
  {
    place: "7",
  },
  {
    place: "4",
  },
  {
    place: "2",
  },
  {
    place: "6",
  },
];
export const addSplitAmout = [
  {
    image: Images.Work1,
    title: "1.0 TON (Split AC)",
    text: " ₹1250",
    textBold: "₹1050",
    button: "add",
  },
  {
    image: Images.Work1,
    title: "1.5 TON (Split AC)",
    text: " ₹1250",
    textBold: "₹1050",
    button: "add",
  },
  {
    image: Images.Work1,
    title: "1.7 TON (Split AC)",
    text: " ₹1250",
    textBold: "₹1050",
    button: "add",
  },
  {
    image: Images.Work1,
    title: "2.0 TON (Split AC)",
    text: " ₹1250",
    textBold: "₹1050",
    button: "add",
  },
];

export const AmcDurationContent = [
  {
    text: "12 Month Maintenance",
    text2: "₹1050 ",
    text3: "₹1650",
  },
];

export const imagePickerProfile = [
  {
    labelContainer: "circle-container",
    spanImage: "overlay-profile-uploader",
    editIcon: Images.CameraIcon,
    profileContainer: "profile-image-picker",
    placeholderImage: "cover-image-edit-logo",
    coverImage: Images.CoverPicker,
  },
];

export const accountEditProfile = [
  {
    labelContainer: "circle-container circle-container-account",
    spanImage: "overlay-profile-uploader overlay-profile-uploader-account",
    editIcon: Images.AccountEdit10,
    profileContainer: "profile-image-picker profile-image-picker-account",
    placeholderImage: "cover-image-edit-logo cover-image-edit-logo-account",
    coverImage: Images.AccountUser,
  },
];

export const profileBuilding = [
  {
    label: "First Name",
    place: "Enter First Name",
    type: "text",
  },
  {
    label: "Last Name",
    place: "Enter Last Name",
    type: "text",
  },
  {
    label: "Email",
    place: "Enter Email Address",
    type: "email",
  },
];
export const profileComplete = [
  {
    label: "Your Gender",
    place: "Male",
    type: "text",
  },
  {
    label: "Location",
    place: "Time Square NYC Manhattan, USA",
    type: "text",
    icon: (
      <>
        <img src={Images.Location} className="img-fluid-view-effect" />
      </>
    ),
  },
];

export const adminLinkNav = [
  {
    redirect: Screens,
    image: Images.Sidebar1,
    link: "home",
    class: "user-fome-content-link",
  },
  {
    redirect: Screens.myScheduleCard,
    image: AdminImages.ScheduleAdmin,
    link: "My Schedule",
    class: "user-fome-content-link fome-content-link-active",
  },
  {
    redirect: Screens.bookingServiceDetail,
    image: Images.Sidebar3,
    link: "Bookings",
    class: "user-fome-content-link",
  },
  {
    redirect: Screens.accountHome,
    image: Images.Sidebar4,
    link: "Account",
    class: "user-fome-content-link",
  },
];

export const scheduleHomeCard = [
  {
    image: Images.UserSchedule,
    title: "AC Repair",
    text: "Repair & Gas Refil",
    star: Images.Star,
    review: "4.8 | 3,287 reviews",
    label: "Date & Time",
    date: "14/06/2023 | 10:00 am",
    button: "pending",
  },
  {
    image: Images.UserSchedule,
    title: "AC Repair",
    text: "Repair & Gas Refil",
    star: Images.Star,
    review: "4.8 | 3,287 reviews",
    label: "Date & Time",
    date: "14/06/2023 | 10:00 am",
    button: "pending",
  },
  {
    image: Images.UserSchedule,
    title: "AC Repair",
    text: "Repair & Gas Refil",
    star: Images.Star,
    review: "4.8 | 3,287 reviews",
    label: "Date & Time",
    date: "14/06/2023 | 10:00 am",
    button: "pending",
  },
  {
    image: Images.UserSchedule,
    title: "AC Repair",
    text: "Repair & Gas Refil",
    star: Images.Star,
    review: "4.8 | 3,287 reviews",
    label: "Date & Time",
    date: "14/06/2023 | 10:00 am",
    button: "pending",
  },
];
export const scheduleBookingStatus = [
  {
    image: Images.UserSchedule,
    title: "AC Repair",
    text: "Repair & Gas Refil",
    star: Images.Star,
    review: "4.8 | 3,287 reviews",
    label: "Date & Time",
    date: "14/06/2023 | 10:00 am",
    button: "pending",
  },
  {
    image: Images.UserSchedule,
    title: "AC Repair",
    text: "Repair & Gas Refil",
    star: Images.Star,
    review: "4.8 | 3,287 reviews",
    label: "Date & Time",
    date: "14/06/2023 | 10:00 am",
    button: "pending",
  },
  {
    image: Images.UserSchedule,
    title: "AC Repair",
    text: "Repair & Gas Refil",
    star: Images.Star,
    review: "4.8 | 3,287 reviews",
    label: "Date & Time",
    date: "14/06/2023 | 10:00 am",
    button: "pending",
  },
  {
    image: Images.UserSchedule,
    title: "AC Repair",
    text: "Repair & Gas Refil",
    star: Images.Star,
    review: "4.8 | 3,287 reviews",
    label: "Date & Time",
    date: "14/06/2023 | 10:00 am",
    button: "pending",
  },
];

export const itemCollection = [
  {
    label: "Price (1 Service)",
    amount: "₹499",
    class1: "user-account-detail-timer",
    class2: "user-account-detail-timer",
  },
  {
    label: "Offer Discount",
    amount: "-₹200",
    class1: "user-account-detail-timer",
    class2: "user-account-detail-timer",
  },
  {
    label: "Coupan Discount",
    amount: "₹50",
    class1: "user-account-detail-timer",
    class2: "user-account-detail-timer",
  },
  {
    label: " Visit Charge",
    amount: "₹120",
    class1: "user-account-detail-timer",
    class2: "user-account-detail-timer",
  },
  {
    label: "Total Amount",
    amount: "₹1200",
    class1: "user-account-detail-timer",
    class2: "user-account-detail-timer",
  },
  // sss
  {
    label: "Payment Status",
    amount: "Not Paid",
    class1: "user-account-detail-timer",
    class2: "user-account-detail-timer",
  },
  {
    label: "Mode of Payment",
    amount: "COD",
    class1: "user-account-detail-timer",
    class2: "user-account-detail-timer",
  },
];

export const timelineDetail = [
  {
    tick: Images.TickIcon,
    text: "Order Confirmed, Today, Dec 04 You order has been placed.",
    class: "timeline-panel ",
    paragraph: "success-timeline-content-text",
    badge: "timeline-badge",
  },
  {
    tick: Images.TickIcon,
    text: "Shipped, Expected By Dec 6",
    class: "timeline-panel bg-transparent",
    paragraph: "success-timeline-content-text font-text-theme-gray",
    badge: "timeline-badge timeline-badge-transparent",
  },
  {
    tick: Images.TickIcon,
    text: "Out for Delivery",
    class: "timeline-panel bg-transparent",
    paragraph: "success-timeline-content-text font-text-theme-gray",
    badge: "timeline-badge timeline-badge-transparent",
  },
  {
    tick: Images.TickIcon,
    text: "Delivery, dec 10 by 11 PM",
    class: "timeline-panel bg-transparent",
    paragraph: "success-timeline-content-text font-text-theme-gray",
    badge: "timeline-badge timeline-badge-transparent",
  },
];
export const timelineDetailCancel = [
  {
    tick: Images.CrossRed,
    text: "Order Cancellation Confirmed, Today, Dec 04 You order has been placed.",
    class: "timeline-panel timeline-panel-danger",
    paragraph: "success-timeline-content-text timeline-panel-danger-text",
    badge: "timeline-badge timeline-badge-danger",
  },
  {
    tick: Images.TickIcon,
    text: "Shipped, Expected By Dec 6",
    class: "timeline-panel bg-transparent",
    paragraph: "success-timeline-content-text font-text-theme-gray",
    badge: "timeline-badge timeline-badge-transparent",
  },
  {
    tick: Images.TickIcon,
    text: "Out for Delivery",
    class: "timeline-panel bg-transparent",
    paragraph: "success-timeline-content-text font-text-theme-gray",
    badge: "timeline-badge timeline-badge-transparent",
  },
  {
    tick: Images.TickIcon,
    text: "Delivery, dec 10 by 11 PM",
    class: "timeline-panel bg-transparent",
    paragraph: "success-timeline-content-text font-text-theme-gray",
    badge: "timeline-badge timeline-badge-transparent",
  },
];

export const amcBoxAccordion = [
  {
    heading: "AMC Billing Details",
    amount: "Total Amount",
    value: "₹990",
    amount1: "Paid",
    value1: "₹990",
    amount2: "Balance Amount",
    value2: "0",
    amcDetailDrop: [
      {
        one: "Split AC",
        two: "Preventive(1.5 Ton * 2)",
        three: "₹200",
      },
      {
        one: "Window AC",
        two: "Preventive(1.5 Ton * 2)",
        three: "₹200",
      },
      {
        one: "Cassette AC",
        two: "Preventive(1.5 Ton * 2)",
        three: "₹490",
      },
    ],
  },
];
export const amcScheduleRow = [
  {
    text1: "Completed",
    text2: "12/12/23",
    icon: Images.ShowIcon,
    class: "user-off-percent flex-one mb-0 font-weight-400",
    class2: "flex-one text-right",
    img: (
      <img src={Images.ShowIcon} className="img-fluid-content-detail-item" />
    ),
    navigateTo: Screens.bookPaymentView, 
  },
  {
    text1: "Upcoming",
    text2: "13/12/23",
    icon: Images.EditShow,
    class: "user-off-percent color-red-theme flex-one mb-0",
    class2: "flex-one text-right",
    img: (
      <img src={Images.EditShow} className="img-fluid-content-detail-item" />
    ),
    navigateTo: Screens.bookPaymentDetail, 
  },
  {
    text1: "Pending",
    text2: "14/12/23",
    class: "user-content-card-text-repair flex-one mb-0",
  },
  {
    text1: "Pending",
    text2: "15/12/23",
    class: "user-content-card-text-repair flex-one mb-0",
  },
];
