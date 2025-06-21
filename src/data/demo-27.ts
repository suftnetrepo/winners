import Shield from "@/icons/lineal/Shield";
import Email from "@/icons/lineal/Email";
import Target from "@/icons/lineal/Target";
import Wallet from "@/icons/lineal/Wallet";
import Loyalty from "@/icons/lineal/Loyalty";
import Padlock from "@/icons/lineal/Padlock";
import AwardTwo from "@/icons/lineal/AwardTwo";
import CheckList from "@/icons/lineal/CheckList";
import Insurance from "@/icons/lineal/Insurance";
import Telephone from "@/icons/lineal/Telephone";
import Analytics from "@/icons/lineal/Analytics";
import Browser from "@/icons/lineal/Browser";
import IdCard from "@/icons/lineal/IdCard";
import ChatTwo from "@/icons/lineal/ChatTwo";
import SmartphoneTwo from "@/icons/lineal/SmartphoneTwo";
import CloudComputingTwo from "@/icons/lineal/CloudComputingTwo";
import Settings from "@/icons/lineal/Settings";
import color from "@/utils/color";
import ShoppingBasket from "@/icons/lineal/ShoppingBasket";

const serviceList = [
	{
	  id: 1,
	  Icon: Telephone,
	  color: color.blue,
	  title: "Attendance Tracking",
	  description: "Automatically record and analyze attendance for services and events to better understand member engagement.",
	},
	{
	  id: 2,
	  Icon: Shield,
	  color: color.yellow,
	  title: "Service Times",
	  description: "Display and update worship schedules, special services, and holiday events in real time.",
	},
	{
	  id: 3,
	  Icon: CloudComputingTwo,
	  color: color.orange,
	  title: "Fundraising",
	  description: "Launch and manage campaigns for missions, renovations, or outreach with secure donation options.",
	},
	{
	  id: 4,
	  Icon: Analytics,
	  color: color.pink,
	  title: "Event Management",
	  description: "Plan, promote, and track events—from volunteer drives to benefit concerts—with ease.",
	},
	{
	  id: 5,
	  Icon: ChatTwo,
	  color: color.green,
	  title: "Church Communication",
	  description: "Keep members informed with announcements, updates, and prayer requests in one central hub.",
	},
	{
	  id: 6,
	  Icon: SmartphoneTwo,
	  color: color.purple,
	  title: "Online Giving",
	  description: "Offer a simple, secure way to give via credit cards, bank transfers, or mobile payments.",
	},
  ];

const donations = [
	{
		id: 1,
		Icon: ShoppingBasket,
		title: "Bring essential non-perishable food items",
		description:
			"such as (rice, pasta, tinned foods, cereals, toiletries, etc.) directly to the church.",
	},
	{
		id: 2,
		Icon: IdCard,
		title: "Or give financially ",
		description:
			"please speak to any church official or contact us via 07888 230 650 or 07776 696 504 to arrange your donation.",
	}
	
];

const givingList = [
	{
		id: 1,
		Icon: CloudComputingTwo,
		title: "Give online",
		description:
			"via the Tithe.ly app or website. It’s quick, easy, and secure.",
	},
	{
		id: 2,
		Icon: Wallet,
		title: "Write a cheque",
		description:
			"to World Mission Agency – Winners Chapel International.",
	},
	{
		id: 2,
		Icon: Email,
		title: "Use a giving envelope",
		description:
			"during any of our services. You can find these at the back of the church.",
	}
	
];

export const accordionList3 = [
  {
    no: "One",
    expand: false,
    heading: "How long are the services?",
    body: `Sunday and Midweek services are 90 minutes long.`
  },
  {
    no: "Two",
    expand: false,
    heading: "What are the service times?",
    body: `We run three services every Sunday. 11:30 am. On Wednesday, time is 7:00 pm`
  },
  {
    no: "Three",
    expand: false,
    heading: "Who is Jesus Christ?",
    body: `Jesus is the son of God, who came to the world to die for you and me in order to ensure that we have a relationship with our father God. John 3:16 says “For God so loved the world that He gave His only begotten son that whosoever believes in Him shall not perish but have everlasting life”.`
  },
  {
    no: "Four",
    expand: false,
    heading: "What if I need prayers and/or counselling?",
    body: `There are pastors available to counsel and pray with you after every service. Please speak to an usher and they would direct accordingly.`
  },
  {
    no: "Five",
    expand: false,
    heading: "Do you provide Childcare?",
    body: `Yes, our children’s church (2 – 12 years old) and Teens church (13 – 19 year olds) run concurrently with the main services.`
  },
  {
    no: "Six",
    expand: false,
    heading: "Where can I park?",
    body: `Free parking is available on-site at Ormiston Bushfield Academy. Friendly ushers will be there to guide you as you arrive.`
  }
];

const processList = [
	{
		id: 1,
		Icon: Browser, // Use an icon representing transport
		title: "Book Your Taxi",
		description:
			"Arrange your own taxi to attend the service at a time that suits you best.",
	},
	{
		id: 2,
		Icon: IdCard, // Icon showing receipt or bill
		title: "Pay the Fare",
		description:
			"Pay the taxi driver as usual and make sure to ask for a printed or digital receipt.",
	},
	{
		id: 3,
		Icon: Settings, // Icon showing verification or reimbursement
		title: "Submit Your Receipt",
		description:
			"Give us your taxi receipt after the service and we’ll fully refund your fare.",
	},
	{
		id: 4,
		Icon: SmartphoneTwo, // Replace with phone/support icon
		title: "Need Help?",
		description:
			"If you need assistance with booking or claiming, call 07888 230 650 or 07776 696 504.",
	},
];


const abouts = [
	{
		id: 1,
		Icon: Target,
		color: color.blue,
		title: "Our Vision",
		description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget. Fusce dapibus
        tellus.`,
	},
	{
		id: 2,
		Icon: AwardTwo,
		color: color.green,
		title: "Our Mission",
		description: `Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet. Sed posuere  consectetur.`,
	},
	{
		id: 3,
		Icon: Loyalty,
		color: color.yellow,
		title: "Our Values",
		description: `Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna scelerisque.`,
	},
];

const pricingList = [
  {
    plan: 'Basic',
    price: 20,
    features: [
      'Task and Project Management: Manage up to 10 active projects with basic task tracking.',
      'Team Collaboration: Invite up to 5 engineers to collaborate on projects.',
      'Real-Time Updates: Stay informed with task progress and status updates.',
      'File Sharing: Attach and share files directly within tasks.',
      'Mobile App Access: Access essential features through the mobile app.',
      'Customizable Workflows (Limited): Automate basic processes for simple workflows.',
      'Real-Time Chat (Limited): Chat with up to 5 team members in real time.',
      'Email Support: Get customer support via email during business hours.'
    ]
  },
  {
    plan: 'Premium',
    price: 50,
    features: [
      'Unlimited Projects: Create and manage an unlimited number of projects.',
      'Expanded Team Collaboration: Invite up to 20 engineers with enhanced permissions.',
      'Real-Time Updates and Gantt Charts: Visualize timelines and track progress for all projects.',
      'File Sharing and Cloud Storage: Access up to 1TB of cloud storage for sharing and storing files.',
      'Mobile App (Full Access): Access all platform features on the go with the mobile app.',
      'Advanced Workflows: Automate complex processes with customized workflows.',
      'Real-Time Chat (Full): Communicate with your entire team without restrictions.',
      'Priority Support: Get faster assistance via email and live chat.'
    ]
  },
  {
    plan: 'Premium Plus',
    price: 100,
    features: [
      'Unlimited Projects and Engineers: Manage unlimited projects and invite an unlimited number of engineers.',
      'Enterprise-Level Collaboration: Set advanced roles and permissions for large teams.',
      'Advanced Automation: Build fully automated workflows tailored to your needs.',
      'Budget and Expense Tracking: Monitor project budgets and expenses in real time.',
      'Multi-Project Coordination: Manage interdependent projects within a single dashboard.',
      'Client Portal Access: Allow clients to securely view project progress and milestones.',
      'Custom Branding: Add your company branding to the platform and reports.',
      'Dedicated Account Manager: Receive personalized assistance from a dedicated manager.',
      '24/7 Support: Get round-the-clock support for any issues or inquiries.',
      'Real-Time Chat (Premium): Unlimited chat access for team members, clients, and stakeholders.',
      'Mobile App with Premium Features: Utilize premium features, including offline mode and advanced notifications.',
      'Unlimited Cloud Storage: Store and access files without storage limits.'
    ]
  }
];

const faqList = [
  {
    id: 1,
    Icon: CheckList,
    title: 'Can I cancel my subscription?',
    description: `Yes, you can cancel your subscription at any time through your account settings. Once canceled, your subscription will remain active until the end of your billing cycle. If you encounter any issues, our support team is ready to assist.`
  },
  {
    id: 2,
    Icon: Wallet,
    title: 'Which payment methods do you accept?',
    description: `We accept major credit and debit cards, including Visa, MasterCard, and American Express, powered by Stripe. Stripe ensures secure and seamless payment processing. For more details, please visit our payment page.`
  },
  {
    id: 3,
    Icon: Insurance,
    title: 'How can I manage my Account?',
    description: `You can manage your account settings by logging into the platform and navigating to the “Account” section. Here, you can update your profile, change your subscription plan, review your billing history, and access support. If you need further assistance, feel free to contact our support team.`
  },
  {
    id: 4,
    Icon: Padlock,
    title: 'Is my credit card information secure?',
    description: `Yes, your credit card information is highly secure. We use Stripe, a PCI DSS-compliant payment platform, ensuring all payment data is encrypted and handled with the highest level of security. Your details are never stored on our servers and are processed directly through Stripe's secure gateway.`
  }
];

export default { givingList, serviceList, processList, abouts, pricingList, faqList, donations, accordionList3 };
