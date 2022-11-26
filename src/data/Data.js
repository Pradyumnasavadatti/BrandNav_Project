import Logo from "../resources/Logo.svg";
import Illustrator1 from "../resources/part2/illustrator.svg";
import Illustrator2 from "../resources/part4/illustrator.svg";
import Right from "../resources/part4/right.svg";
import Gift from "../resources/part5/Free.svg";
import Globe from "../resources/part6/Globe.svg";
import Netflix from "../resources/part7/netflix.svg";
import Reddit from "../resources/part7/reddit.svg";
import Amazon from "../resources/part7/amazon.svg";
import Discord from "../resources/part7/discord.svg";
import Spotify from "../resources/part7/spotify.svg";
import User1 from "../resources/part8/user1.png";
import User2 from "../resources/part8/user2.png";
import User3 from "../resources/part8/user3.png";
import Facebook from "../resources/part10/Facebook.svg";
import Instagram from "../resources/part10/Instagram.svg";
import Twitter from "../resources/part10/Twitter.svg";

const navbar = {
  img: [Logo],
  options: ["About", "Features", "Pricing", "Testimonials", "Help"],
  //   optionAction: ["www.google.com", "www.wikipedia.org"],
  buttons: ["Sign In", "Sign up"],
};

const head = {
  img: [Illustrator1],
  heading: (
    <>
      Want anything to be easy with
      <span style={{ fontWeight: "bolder" }}> LaslesVPN</span>
    </>
  ),
  para: "Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.",
  buttons: ["Get Started"],
};

const statistics = {
  img: [
    <svg
      width="40%"
      height="40%"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.14832 5.64117C6.5969 5.64117 7.02711 5.46297 7.3443 5.14578C7.66149 4.82858 7.83969 4.39838 7.83969 3.9498C7.83969 3.50122 7.66149 3.07101 7.3443 2.75381C7.02711 2.43662 6.5969 2.25842 6.14832 2.25842C5.69974 2.25842 5.26953 2.43662 4.95234 2.75381C4.63514 3.07101 4.45695 3.50122 4.45695 3.9498C4.45695 4.39838 4.63514 4.82858 4.95234 5.14578C5.26953 5.46297 5.69974 5.64117 6.14832 5.64117ZM3.75157 10.7153C2.89565 10.7153 2.17465 9.99578 2.50219 9.20501V9.20501C2.70053 8.72619 2.99123 8.29113 3.3577 7.92466C3.72417 7.55819 4.15923 7.26749 4.63804 7.06916C5.11686 6.87083 5.63005 6.76875 6.14832 6.76875C6.66658 6.76875 7.17978 6.87083 7.65859 7.06916C8.13741 7.26749 8.57247 7.55819 8.93894 7.92466C9.30541 8.29113 9.59611 8.72619 9.79444 9.20501V9.20501C10.122 9.99578 9.40099 10.7153 8.54506 10.7153H3.75157Z"
        fill="#F53838"
      />
    </svg>,
    <svg
      width="40%"
      height="40%"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.49443 4.79537C9.49443 4.36348 9.40936 3.93582 9.24409 3.53681C9.07881 3.1378 8.83656 2.77524 8.53117 2.46985C8.22578 2.16446 7.86322 1.92221 7.46421 1.75694C7.0652 1.59166 6.63754 1.50659 6.20565 1.50659C5.77376 1.50659 5.3461 1.59166 4.94709 1.75694C4.54807 1.92221 4.18552 2.16446 3.88013 2.46985C3.57474 2.77524 3.33249 3.1378 3.16721 3.53681C3.00194 3.93582 2.91687 4.36348 2.91687 4.79537C2.91687 5.44702 3.1095 6.0531 3.43603 6.56427H3.43227C4.54106 8.30027 6.20565 10.9031 6.20565 10.9031L8.97903 6.56427H8.97574C9.31421 6.03635 9.49422 5.42247 9.49443 4.79537V4.79537ZM6.20565 6.20485C5.83183 6.20485 5.47333 6.05635 5.209 5.79202C4.94467 5.52769 4.79617 5.16919 4.79617 4.79537C4.79617 4.42156 4.94467 4.06305 5.209 3.79872C5.47333 3.53439 5.83183 3.38589 6.20565 3.38589C6.57947 3.38589 6.93797 3.53439 7.2023 3.79872C7.46663 4.06305 7.61513 4.42156 7.61513 4.79537C7.61513 5.16919 7.46663 5.52769 7.2023 5.79202C6.93797 6.05635 6.57947 6.20485 6.20565 6.20485Z"
        fill="#F53838"
      />
    </svg>,
    <svg
      width="40%"
      height="40%"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.88801 1.97644H2.3708C2.12159 1.97644 1.88259 2.07544 1.70637 2.25166C1.53015 2.42788 1.43115 2.66688 1.43115 2.91609V4.79539C1.43115 5.04461 1.53015 5.28361 1.70637 5.45983C1.88259 5.63605 2.12159 5.73505 2.3708 5.73505H9.88801C10.1372 5.73505 10.3762 5.63605 10.5524 5.45983C10.7287 5.28361 10.8277 5.04461 10.8277 4.79539V2.91609C10.8277 2.66688 10.7287 2.42788 10.5524 2.25166C10.3762 2.07544 10.1372 1.97644 9.88801 1.97644ZM7.53889 3.85574C7.53889 4.11522 7.32854 4.32557 7.06906 4.32557V4.32557C6.80958 4.32557 6.59923 4.11522 6.59923 3.85574V3.85574C6.59923 3.59627 6.80958 3.38592 7.06906 3.38592V3.38592C7.32854 3.38592 7.53889 3.59627 7.53889 3.85574V3.85574ZM9.41819 3.85574C9.41819 4.11522 9.20784 4.32557 8.94836 4.32557V4.32557C8.68889 4.32557 8.47854 4.11522 8.47854 3.85574V3.85574C8.47854 3.59627 8.68889 3.38592 8.94836 3.38592V3.38592C9.20784 3.38592 9.41819 3.59627 9.41819 3.85574V3.85574ZM9.88801 6.6747H2.3708C2.12159 6.6747 1.88259 6.7737 1.70637 6.94991C1.53015 7.12613 1.43115 7.36514 1.43115 7.61435V9.49365C1.43115 9.74286 1.53015 9.98187 1.70637 10.1581C1.88259 10.3343 2.12159 10.4333 2.3708 10.4333H9.88801C10.1372 10.4333 10.3762 10.3343 10.5524 10.1581C10.7287 9.98187 10.8277 9.74286 10.8277 9.49365V7.61435C10.8277 7.36514 10.7287 7.12613 10.5524 6.94991C10.3762 6.7737 10.1372 6.6747 9.88801 6.6747ZM7.53889 8.554C7.53889 8.81348 7.32854 9.02382 7.06906 9.02382V9.02382C6.80958 9.02382 6.59923 8.81348 6.59923 8.554V8.554C6.59923 8.29452 6.80958 8.08417 7.06906 8.08417V8.08417C7.32854 8.08417 7.53889 8.29452 7.53889 8.554V8.554ZM9.41819 8.554C9.41819 8.81348 9.20784 9.02382 8.94836 9.02382V9.02382C8.68889 9.02382 8.47854 8.81348 8.47854 8.554V8.554C8.47854 8.29452 8.68889 8.08417 8.94836 8.08417V8.08417C9.20784 8.08417 9.41819 8.29452 9.41819 8.554V8.554Z"
        fill="#F53838"
      />
    </svg>,
  ],
  head: ["90+", "30+", "50+"],
  subHead: ["Users", "Locations", "Servers"],
};

const features = {
  img: [Illustrator2, Right],
  heading: "We Provide Many Features You Can Use",
  para: "You can explore the features that we provide with fun and have their own functions each feature.",
  points: [
    "Powerfull online protection.",
    "Internet without borders.",
    "Supercharged VPN",
    "No specific time limits.",
  ],
};

const plans = {
  img: [Gift],
  heading: "Choose Your Plan",
  para: "Let's choose the package that is best for you and explore it happily and cheerfully.",
  svg: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 7 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.52627 4.32988C2.4646 4.33 2.40351 4.31795 2.3465 4.29441C2.2895 4.27086 2.23771 4.2363 2.1941 4.19269L0.201101 2.19922C0.156198 2.15591 0.12037 2.10409 0.0957069 2.04679C0.0710441 1.98949 0.0580406 1.92785 0.0574548 1.86546C0.056869 1.80308 0.0687129 1.74121 0.0922953 1.68345C0.115878 1.62569 0.150726 1.57321 0.194808 1.52907C0.23889 1.48493 0.291321 1.45 0.349044 1.42634C0.406766 1.40267 0.468624 1.39074 0.531007 1.39124C0.59339 1.39174 0.655049 1.40465 0.712386 1.42924C0.769724 1.45382 0.821592 1.48957 0.864964 1.53441L2.5258 3.19525L5.51624 0.205747C5.60433 0.117589 5.72384 0.0680372 5.84847 0.0679932C5.9731 0.0679491 6.09265 0.117416 6.18081 0.205512C6.26897 0.293609 6.31852 0.413117 6.31856 0.537748C6.3186 0.662379 6.26914 0.781923 6.18104 0.870081L2.85843 4.19269C2.81482 4.2363 2.76303 4.27086 2.70603 4.29441C2.64903 4.31795 2.58794 4.33 2.52627 4.32988Z"
        fill="#2FAB73"
      />
    </svg>
  ),
  head: ["Free Plan", "Standard Plan", "Premium Plan"],
  price: [
    "Free",
    <>
      $9 <span style={{ color: "#4F5665" }}>/mo</span>
    </>,
    <>
      $12 <span style={{ color: "#4F5665" }}>/mo</span>
    </>,
  ],
  plan: [
    [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "No Traffic Logs",
      "Works on All Devices",
    ],
    [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
    ],
    [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
      "Get New Features",
    ],
  ],
};
const networks = {
  img: [Globe],
  heading: "Huge Global Network of Fast VPN",
  para: "See LaslesVPN everywhere to make it easier for you when you move locations.",
};

const platforms = {
  img: [Netflix, Reddit, Discord, Spotify],
};

const reviews = {
  heading: "Trusted by Thousands of Happy Customer",
  para: "These are the stories of our customers who have joined us with great pleasure when using this crazy feature.",
  svg: (
    <svg
      width="40%"
      height="40%"
      viewBox="0 0 8 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.88007 2.09357L5.01619 1.82268L4.18298 0.133511C4.16022 0.0872627 4.12278 0.0498234 4.07653 0.0270662C3.96055 -0.0301938 3.8196 0.0175229 3.7616 0.133511L2.9284 1.82268L1.06451 2.09357C1.01312 2.10091 0.966141 2.12513 0.93017 2.16184C0.886683 2.20653 0.86272 2.26667 0.863546 2.32902C0.864372 2.39138 0.889919 2.45086 0.934575 2.49439L2.28312 3.80916L1.96452 5.66571C1.95705 5.7089 1.96183 5.75331 1.97832 5.79392C1.9948 5.83453 2.02234 5.86971 2.0578 5.89546C2.09326 5.92122 2.13523 5.93652 2.17895 5.93964C2.22267 5.94276 2.26639 5.93357 2.30514 5.9131L3.97229 5.03658L5.63944 5.9131C5.68495 5.93733 5.73781 5.9454 5.78846 5.93659C5.9162 5.91457 6.00209 5.79344 5.98006 5.66571L5.66146 3.80916L7.01001 2.49439C7.04671 2.45841 7.07094 2.41143 7.07828 2.36004C7.0981 2.23158 7.00854 2.11265 6.88007 2.09357Z"
        fill="#FEA250"
      />
    </svg>
  ),
  user: [
    {
      img: [User1],
      name: "Viezh Robert",
      place: "Warsaw, Poland",
      rating: "4.5",
      review:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
    },
    {
      img: [User2],
      name: "Yessica Christy",
      place: "Shanxi, China",
      rating: "4.5",
      review:
        "I like it because I like to travel far and still can connect with high speed.",
    },
    {
      img: [User3],
      name: "Kim Young Jou",
      place: "Seoul, South Korea",
      rating: "4.5",
      review:
        "This is very unusual for my business that currently requires a virtual private network that has high security.",
    },
    {
      img: [User1],
      name: "Viezh Robert",
      place: "Warsaw, Poland",
      rating: "4.5",
      review:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
    },
    {
      img: [User2],
      name: "Yessica Christy",
      place: "Shanxi, China",
      rating: "4.5",
      review:
        "I like it because I like to travel far and still can connect with high speed.",
    },
    {
      img: [User3],
      name: "Kim Young Jou",
      place: "Seoul, South Korea",
      rating: "4.5",
      review:
        "This is very unusual for my business that currently requires a virtual private network that has high security.",
    },
    {
      img: [User1],
      name: "Viezh Robert",
      place: "Warsaw, Poland",
      rating: "4.5",
      review:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
    },
    {
      img: [User2],
      name: "Yessica Christy",
      place: "Shanxi, China",
      rating: "4.5",
      review:
        "I like it because I like to travel far and still can connect with high speed.",
    },
    {
      img: [User3],
      name: "Kim Young Jou",
      place: "Seoul, South Korea",
      rating: "4.5",
      review:
        "This is very unusual for my business that currently requires a virtual private network that has high security.",
    },
  ],
};

const subscribe = {
  heading: "Subscribe Now for Get Special Features!",
  para: "Let's subscribe with us and find the fun.",
  buttons: ["Subscribe Now"],
};

const footer = {
  img: [Logo, Facebook, Instagram, Twitter],
  para: (
    <p>
      <span style={{ fontWeight: "bolder" }}>LaslesVPN</span> is a private
      virtual network that has unique features and has high security.
    </p>
  ),
  copyRight: "©2020LaslesVPN",
  head: ["Product", "Engage", "Earn Money"],
  points:[["Download", "Pricing", "Locations", "Server", "Countries", "Blog"],
  [
    "LaslesVPN ?",
    "FAQ",
    "Tutorials",
    "About Us",
    "Privacy Policy",
    "Terms of Service",
  ],
  ["Affiliate", "Become Partner"]],
};

export {
  navbar,
  head,
  statistics,
  features,
  plans,
  networks,
  platforms,
  reviews,
  subscribe,
  footer,
};
