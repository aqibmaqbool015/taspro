import { Form } from "react-bootstrap";
import Images from "./images";
import { Screens } from "./routes";
import AdminImages from "./adminImages";
import AddressModal from "../commonComponents/Models/AddressModal";

export const accountListing = [
  {
    image: Images.AccountEdit1,
    text: "edit profile",
    link: Screens.accountEdit,
  },
  {
    image: Images.AccountEdit2,
    text: "Saved Address",
  },
  {
    image: Images.AccountEdit3,
    text: "My Wallet",
    link: Screens.accountWallet,
  },
  {
    image: Images.AccountEdit4,
    text: "Change Language",
    link: Screens.accountLanguage,
  },
  {
    image: Images.AccountEdit5,
    text: "Notification Setting",
    toggle: (
      <>
        <Form>
          <Form.Check
            className="user-account-switched-btn"
            type="switch"
            id="notification-switch"
          />
        </Form>
      </>
    ),
  },
  {
    image: Images.AccountEdit6,
    text: "Dark Mode",
    toggle: (
      <>
        <Form>
          <Form.Check
            className="user-account-switched-btn"
            type="switch"
            id="dark-mode-switch"
          />
        </Form>
      </>
    ),
  },
];

export const accountListActivity = [
  {
    image: Images.AccountEdit7,
    text: "My Rating & Reviews",
    link: Screens.accountRatingReviews,
  },
  {
    image: Images.AccountEdit8,
    text: "My Coupon",
    link: Screens.accountCoupans,
  },
  {
    image: Images.AccountEdit9,
    text: "Refer & Earn",
    link: Screens.accountrefer,
  },
];

export const accountReferList = [
  {
    text: "The cash bonus offer is available exclusively to Premium subscribers of TASPRO Company.",
  },
  {
    text: "Only active Premium subscribers are eligible for the cash bonus offer.",
  },
  {
    text: "To qualify for the cash bonus, Premium subscribers must refer a Service Professional to join TASPRO Company using their unique referral invite link.",
  },
  {
    text: "The referral invite link can be found in the referral section of the app.",
  },
  {
    text: "The referred Service Professional must subscribe to a paid plan on TASPRO Company using the Premium subscriber's referral invite link.",
  },
  {
    text: "The Service Professional must maintain an active subscription for a minimum period of 30 days to qualify for the cash bonus.",
  },
  {
    text: "The cash bonus amount will be calculated based on a percentage of the Service Professional's subscription fee.",
  },
  {
    text: "The specific percentage will be determined by TASPRO Company and may vary over time.",
  },
  {
    text: "The cash bonus will be credited to the Premium subscriber's account upon successful qualification.",
  },
  {
    text: "Cash bonuses earned through referrals can be redeemed at any time during the Premium subscriber's active subscription period.",
  },

  {
    text: "The cash bonus can be used towards future payments or withdrawn as cash, subject to TASPRO Company's withdrawal policies.",
  },
  {
    text: "TASPRO Company reserves the right to review and monitor referral activity for any fraudulent or suspicious behavior.",
  },
];

export const modalReferShare = [
  {
    image: AdminImages.Share1,
    text: "Štefančík",
  },
  {
    image: AdminImages.Share2,
    text: "Roksolana",
  },
  {
    image: AdminImages.Share3,
    text: "Mathias",
  },
  {
    image: AdminImages.Share4,
    text: "Joshua Fuller",
  },
  {
    image: AdminImages.Share1,
    text: "Štefančík",
  },
  {
    image: AdminImages.Share2,
    text: "Roksolana",
  },
  {
    image: AdminImages.Share3,
    text: "Mathias",
  },
  {
    image: AdminImages.Share4,
    text: "Joshua Fuller",
  },
];

export const sharePlatfoam = [
  {
    image: AdminImages.Share5,
    text: "WhatsApp",
  },
  {
    image: AdminImages.Share6,
    text: "Facebook",
  },
  {
    image: AdminImages.Share7,
    text: "Twitter",
  },
  {
    image: AdminImages.Share8,
    text: "Instagram",
  },
  {
    image: AdminImages.Share9,
    text: "Linkedin",
  },
];
export const itemCollectionCoins = [
  {
    label: "Total Coins",
    amount: "453",
  },
  {
    label: "14 Coin",
    amount: "₹1",
  },
  {
    label: "Service Fee",
    amount: "₹00",
  },
];

export const walletListing = [
  {
    icon: AdminImages.Wallet,
    title: "Jane Cooper",
    text: "09100001933311",
    amount: "₹280",
    time: "Nov,25,2022",
  },
  {
    icon: AdminImages.Wallet,
    title: "Jane Cooper",
    text: "09100001933311",
    amount: "₹280",
    time: "Nov,25,2022",
  },
  {
    icon: AdminImages.Wallet,
    title: "Jane Cooper",
    text: "09100001933311",
    amount: "₹280",
    time: "Nov,25,2022",
  },
  {
    icon: AdminImages.Wallet,
    title: "Jane Cooper",
    text: "09100001933311",
    amount: "₹280",
    time: "Nov,25,2022",
  },
  {
    icon: AdminImages.Wallet,
    title: "Jane Cooper",
    text: "09100001933311",
    amount: "₹280",
    time: "Nov,25,2022",
  },
  {
    icon: AdminImages.Wallet,
    title: "Jane Cooper",
    text: "09100001933311",
    amount: "₹280",
    time: "Nov,25,2022",
  },
  {
    icon: AdminImages.Wallet,
    title: "Jane Cooper",
    text: "09100001933311",
    amount: "₹280",
    time: "Nov,25,2022",
  },
  {
    icon: AdminImages.Wallet,
    title: "Jane Cooper",
    text: "09100001933311",
    amount: "₹280",
    time: "Nov,25,2022",
  },
];

export const setUsApart = [
  {
    icon: "1",
    title: "Lorem ipsum dolor",
    text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "2",
    title: "Lorem ipsum dolor",
    text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "3",
    title: "Lorem ipsum dolor",
    text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "4",
    title: "Lorem ipsum dolor",
    text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "5",
    title: "Lorem ipsum dolor",
    text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const accountRatings = [
  {
    image: AdminImages.Rate1,
    id: "1",
    title: "Darron Kulikowski",
    star: AdminImages.FiveStar,
    review: "4 month ago",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
  },
  {
    image: AdminImages.Rate2,
    id: "2",
    title: "Emly WIlliam",
    star: AdminImages.FiveStar,
    review: "4 month ago",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
  },
  {
    image: AdminImages.Rate3,
    id: "3",
    title: "Tom Latham",
    star: AdminImages.FiveStar,
    review: "4 month ago",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
  },
  {
    image: AdminImages.Rate4,
    id: "4",
    title: "Sarah Willaim",
    star: AdminImages.FiveStar,
    review: "4 month ago",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
  },
];

export const newBankForm = [
  {
    label: "Bank Name",
    placeholder: "Silk Bank",
    type: "text",
  },
  {
    label: "Account Title",
    placeholder: "George David",
    type: "text",
  },
  {
    label: "Account Number",
    placeholder: "1234567890",
    type: "number",
  },
  {
    label: "Re-Enter Account Number",
    placeholder: "1234567890",
    type: "number",
  },
  {
    label: "IBAN Number",
    placeholder: "GB 12 ABCD 102030 123456789",
    type: "text",
  },
];

export const bankCouponsList = [
  {
    image: AdminImages.CouponsAdmin,
    title: "10% Off",
    date: "2023 / 08 / 30",
    text: "ABCD678CE",
  },
  {
    image: AdminImages.CouponsAdmin,
    title: "10% Off",
    date: "2023 / 08 / 30",
    text: "ABCD678CE",
  },
  {
    image: AdminImages.CouponsAdmin,
    title: "10% Off",
    date: "2023 / 08 / 30",
    text: "ABCD678CE",
  },
  {
    image: AdminImages.CouponsAdmin,
    title: "10% Off",
    date: "2023 / 08 / 30",
    text: "ABCD678CE",
  },
  {
    image: AdminImages.CouponsAdmin,
    title: "10% Off",
    date: "2023 / 08 / 30",
    text: "ABCD678CE",
  },
  {
    image: AdminImages.CouponsAdmin,
    title: "10% Off",
    date: "2023 / 08 / 30",
    text: "ABCD678CE",
  },
  {
    image: AdminImages.CouponsAdmin,
    title: "10% Off",
    date: "2023 / 08 / 30",
    text: "ABCD678CE",
  },
  {
    image: AdminImages.CouponsAdmin,
    title: "10% Off",
    date: "2023 / 08 / 30",
    text: "ABCD678CE",
  },
];

export const aboutCheckList = [
  {
    name: "We assure you peace of mind.",
  },
  {
    name: "We assure of honest and competitive pricing",
  },
  {
    name: "We assure you of quality workmanship",
  },
  {
    name: "We assure you of timely delivery",
  },
  {
    name: "We are reliable, reasonable and responsible",
  },
  {
    name: "We deliver what we have agreed",
  },
  {
    name: "Expect exceptional service quality and satisfaction",
  },
  {
    name: "Expect customer service par excellence",
  },
  {
    name: "We are more experienced and having team of experts in fixing the problems of your home or anywhere",
  },
];

export const aboutGraph = [
  {
    graph: Images.Graph1,
    title: "Transparency",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    lineClass: "user-mission-values-line",
    listClass:
      "user-mission-values-graph mt-listing-custom text-center position-relative",
  },
  {
    title: "Accountability",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    graph: Images.Graph2,
    lineClass: "user-mission-line-second",
    listClass:
      "user-mission-values-graph mt-listing-custom text-center position-relative",
  },
  {
    graph: Images.Graph3,
    title: "Professionalism",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    lineClass: "user-mission-values-line",
    listClass:
      "user-mission-values-graph mt-listing-custom text-center position-relative",
  },
  {
    graph: Images.Graph4,
    title: "Quality Excellence",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    lineClass: "user-mission-line-second",
    listClass:
      "user-mission-values-graph mt-listing-custom text-center position-relative",
  },
  {
    graph: Images.Graph5,
    title: "One Stop Solution",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    lineClass: "user-mission-values-line",
    listClass:
      "user-mission-values-graph mt-listing-custom text-center position-relative",
    lineLastImage: "line-last-icon-graph",
  },
];

export const termsUseText = [
  {
    title: "Acceptance of Terms",
    text: "By accessing or using the App, you represent and warrant that you have read, understood, and agree to be bound by these Terms of Use. If you do not agree to these terms, you must not use the App.",
  },
  {
    title: "User Accounts and Security",
    text: "To access certain features of the App, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information, including your username and password. You are solely responsible for all activities that occur under your account.",
  },
];

export const termsUseTextList = [
  {
    title: "User Conduct",
    text: "You agree to use the App in compliance with applicable laws and regulations. You must not engage in any activities that may: ",
    a: "a) Violate the rights of others; ",
    b: "b) Be unlawful, fraudulent, or deceptive; ",
    c: "c) Interfere with or disrupt the App's functionality or infrastructure; ",
    d: "d) Introduce viruses or other malicious code; ",
    e: "e) Collect or store personal data of other users without their consent; ",
    f: "f) Engage in any other activity that is deemed inappropriate or objectionable.",
  },
];

export const termsUseLinks = [
  {
    title: "Third-Party Services and Links",
    text: "The App may contain links or references to third-party websites or services. These links are provided for your convenience, and we do not endorse or assume any responsibility for the content or practices of these third-party sites. Your use of such third-party services is subject to their terms and conditions.",
  },
  {
    title: "Disclaimer of Warranties",
    text: "The App is provided on an 'as is' and 'as available' basis, without warranties of any kind, whether express, implied, or statutory. We do not warrant that the App will be uninterrupted, error-free, or free from viruses or other harmful components.",
  },
  {
    title: "Limitation of Liability",
    text: "To the maximum extent permitted by law, TASPRO Company and its affiliates, officers, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits, arising out of or in connection with your use of the App.",
  },
  {
    title: "Privacy Policy",
    text: "Your privacy is important to us. Please refer to our Privacy Policy, which explains how we collect, use, and disclose your personal information when you use the App.",
  },
  {
    title: "Modifications and Termination",
    text: "We reserve the right to modify, suspend, or terminate the App or these Terms of Use at any time without prior notice. We may also update these Terms of Use from time to time, and it is your responsibility to review them periodically.",
  },
  {
    title: "Governing Law and Jurisdiction",
    text: "These Terms of Use shall be governed by and construed in accordance with the laws of The United States of America. Any disputes arising out of or relating to these Terms of Use shall be subject to the exclusive jurisdiction of the courts in New York",
  },
  {
    title: "Entire Agreement",
    text: "TASPRO Company regarding your use of the App, superseding any prior agreements or understandings.   If you have any questions or concerns about these Terms of Use, please contact us at [Contact Information].",
  },
];

export const privacyTextArray = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar bibendum magna magna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pecenas pulvinar bibendum magna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar bibendum magna magna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar bibendum magna",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar bibendum magna magna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pecenas pulvinar bibendum magna Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar bibendum magna magna Lorem ipsum dolor sit amet.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar bibendum magna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar bibendum magna",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar bibendum magna magna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pecenas pulvinar bibendum magna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar bibendum magna magna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar bibendum magna",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar bibendum magna magna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pecenas pulvinar bibendum magna Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar bibendum magna magna Lorem ipsum dolor sit amet.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
];
export const socialAccountsLinks = [
  {
    image: Images.Social1,
  },
  {
    image: AdminImages.Twitter,
  },
  {
    image: AdminImages.ContactUs4,
  },

  {
    image: Images.Social2,
  },
  {
    image: AdminImages.ContactUs3,
  },
];

export const careersForm = [
  {
    placeholder: "Full Name",
    type: "text",
  },
  {
    placeholder: "Contact Number",
    type: "number",
  },
  {
    placeholder: "Email Id",
    type: "email",
  },
  {
    placeholder: "Looking for Job position",
    type: "text",
  },
];

export const openPositionsCard = [
  {
    image: AdminImages.Brief,
    title: "Ac Technician",
    text: "Window, Castle, Split, HVAC etc",
    post: "(7 post open)",
  },
  {
    image: AdminImages.Brief,
    text: "Window, Castle, Split, HVAC etc",
    post: "(7 post open)",
    title: "Ac Technician",
  },
  {
    image: AdminImages.Brief,
    text: "Window, Castle, Split, HVAC etc",
    post: "(7 post open)",
    title: "Ac Technician",
  },
  {
    image: AdminImages.Brief,
    text: "Window, Castle, Split, HVAC etc",
    post: "(7 post open)",
    title: "Ac Technician",
  },
  {
    image: AdminImages.Brief,
    title: "Ac Technician",
    text: "Window, Castle, Split, HVAC etc",
    post: "(7 post open)",
  },
  {
    image: AdminImages.Brief,
    text: "Window, Castle, Split, HVAC etc",
    post: "(7 post open)",
    title: "Ac Technician",
  },
  {
    image: AdminImages.Brief,
    text: "Window, Castle, Split, HVAC etc",
    post: "(7 post open)",
    title: "Ac Technician",
  },
  {
    image: AdminImages.Brief,
    text: "Window, Castle, Split, HVAC etc",
    post: "(7 post open)",
    title: "Ac Technician",
  },
];

export const userAccountList = [
  {
    image: AdminImages.UserFeedback1,
    text: "335 Like",
  },
  {
    image: AdminImages.UserFeedback2,
    text: "30 Dislike",
  },
  {
    image: AdminImages.UserFeedback3,
    text: "10 Comments",
  },
];

export const allReviewsView = [
  {
    image: Images.UserCustomer,
    title: "Tikesh Dewangan",
    time: "1m ago",
    star: Images.FiveStar,
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id nunc diam. Vestibulum ante ipsum primis in faucibusorci luctus.",
    mainClass:
      "border-box-transparent-customer border-box-transparent-all-reviews services-modal-description-overflow-height",
  },
  {
    image: Images.UserCustomer,
    title: "Tikesh Dewangan",
    time: "1m ago",
    star: Images.FiveStar,
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id nunc diam. Vestibulum ante ipsum primis in faucibusorci luctus.",
    mainClass:
      "border-box-transparent-customer border-box-transparent-all-reviews services-modal-description-overflow-height",
  },
  {
    image: Images.UserCustomer,
    title: "Tikesh Dewangan",
    time: "1m ago",
    star: Images.FiveStar,
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id nunc diam. Vestibulum ante ipsum primis in faucibusorci luctus.",
    mainClass:
      "border-box-transparent-customer border-box-transparent-all-reviews services-modal-description-overflow-height border-last-item-view",
  },
];

export const languageArray = [
  { name: "Pashto" },
  { name: "Albanian" },
  { name: "Arabic" },
  { name: "Catalan" },
  { name: "Portuguese" },
  { name: "English" },
  { name: "Spanish" },
  { name: "Armenian" },
  { name: "German" },
  { name: "Azerbaijani" },
  { name: "Bengali" },
  { name: "Belarusian" },
  { name: "Dutch" },
  { name: "French" },
  { name: "Dzongkha" },
  { name: "Khmer" },
  { name: "Mandarin" },
  { name: "Comorian" },
  { name: "Croatian" },
  { name: "Czech" },
  { name: "Danish" },
  { name: "Tigrinya" },
  { name: "Estonian" },
  { name: "Finnish" },
  { name: "Georgian" },
  { name: "Greek" },
  { name: "Hungarian" },
  { name: "Icelandic" },
  { name: "Hindi" },
  { name: "Indonesian" },
  { name: "Persian (Farsi)" },
  { name: "Hebrew" },
  { name: "Italian" },
  { name: "Japanese" },
  { name: "Kazakh" },
  { name: "Korean" },
  { name: "Kyrgyz" },
  { name: "Lao" },
  { name: "Latvian" },
  { name: "Lithuanian" },
  { name: "Luxembourgish" },
  { name: "Malagasy" },
  { name: "Maltese" },
  { name: "Mongolian" },
  { name: "Montenegrin" },
  { name: "Nepali" },
  { name: "Norwegian" },
  { name: "Romanian" },
  { name: "Russian" },
  { name: "Samoan" },
  { name: "Slovak" },
  { name: "Slovenian" },
  { name: "Somali" },
  { name: "Swati" },
  { name: "Tok Pisin" },
  { name: "Turkish" },
  { name: "Urdu" },
  { name: "Uzbek" },
  { name: "Vietnamese" },
  { name: "Zulu" },
];
