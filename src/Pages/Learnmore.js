import React, {useEffect} from 'react';
import pcImage from '../Images/pc.png'; // Ensure the image is in the same directory or update the path
import '../CSS/Learnmore.css';
import Navbar from '../Componenets/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useParams } from "react-router-dom";
import FourStepsSection from './FourStepsCards';
import DigitalFutureSection from './DigitalFuture';
import TestimonialsSection from './Testimonials';
import ContactSection from './Contact';
import Footer from '../Componenets/Footer';
import AOS from "aos";
import "aos/dist/aos.css";

// Common data shared across services
const commonFeatures = [
    'Expertise in Digital Solutions',
    'Innovative Design Approach',
    'Strategic Digital Marketing',
    'Data-Driven Decisions',
    'Expertise in Digital Solutions',
    'Expertise in Digital Solutions',
    'Expertise in Digital Solutions',
    'Expertise in Digital Solutions',
];

const commonFeatureCard = {
    title: 'Feature',
    items: [
        { icon: '🎨', text: 'UI/UX User Friendly' },
        { icon: '🎯', text: 'Focus on Target' },
        { icon: '🛡️', text: 'Secure Website' },
        { icon: '💻', text: 'User Experience Flow' },
        { icon: '🎨', text: 'Awesome Graphics Design' },
    ],
};

const commonButtonText = 'DOWNLOAD BROCHURE';

const pageData = [
    {
        hero: {
            title: 'SEO (Search Engine Optimization)',
            subtitle: 'Rank high, convert better!',
            description:
                'Looking to maximize your digital presence? We prioritize high-quality content, that is relevant and engaging to both users and search engines.',
            buttonText: 'Get In Touch',
            image: pcImage,
        },
        learnMore: {
            title: 'Descriptions',
            descriptions: [
                'We pay meticulous attention to on-page optimization, ensuring that every aspect of a website is optimized for search engines. This includes optimizing meta tags, headings, images, and content for relevant keywords, as well as improving site speed, mobile-friendliness, and overall user experience.',
                'Our comprehensive SEO services encompass on-page, off-page, and technical optimization to boost your website’s search engine visibility and drive organic traffic.',
            ],
            features: commonFeatures,
            featureCard: commonFeatureCard,
            downloadButtonText: commonButtonText,
        },
    },
    {
        hero: {
            title: 'Application Design & Development',
            subtitle: 'Innovative Solutions for Seamless User Experiences',
            description:
                'Build high-performance, user-centric applications that blend seamless functionality with intuitive design. From concept to deployment, we ensure your app stands out.',
            buttonText: 'Get In Touch',
            image: pcImage,
        },
        learnMore: {
            title: 'Descriptions',
            descriptions: [
                'Create stunning and effective applications that engage your audience. We optimize for performance, ensuring your applications are user-friendly, visually appealing, and tailored to your brand identity.',
                'Whether you’re launching a new application or revamping an existing one, trust us for expert application development that sets you apart. Contact us today!',
            ],
            features: commonFeatures,
            featureCard: commonFeatureCard,
            downloadButtonText: commonButtonText,
        },
    },
    {
        hero: {
            title: 'Website Design & Development',
            subtitle: 'Crafting websites that engage and convert',
            description:
                'Design responsive and visually stunning websites optimized for user experience and performance to drive growth and engagement.',
            buttonText: 'Get In Touch',
            image: pcImage,
        },
        learnMore: {
            title: 'Descriptions',
            descriptions: [
                'Create stunning and effective websites that engage your audience. We optimize for performance, ensuring your website is user-friendly, visually appealing, and tailored to your brand identity.',
                'Whether you’re launching a new site or revamping an existing one, trust us for expert website development that sets you apart. Contact us today!',
            ],
            features: commonFeatures,
            featureCard: commonFeatureCard,
            downloadButtonText: "LET'S CHAT",
        },
    },
    {
        hero: {
            title: 'Digital Marketing',
            subtitle: 'Rank high, convert better!',
            description:
                'Implement data-driven digital marketing strategies to boost visibility, attract targeted traffic, and enhance conversions.',
            buttonText: 'Get In Touch',
            image: pcImage,
        },
        learnMore: {
            title: 'Descriptions',
            descriptions: [
                'We focus on creating targeted digital marketing strategies to maximize engagement and conversions. This includes social media, content creation, and data-driven campaigns to enhance brand visibility and audience reach.',
                'Our services cover social media management, email marketing, and PPC advertising to drive traffic, increase brand awareness, and deliver measurable results.',
            ],
            features: commonFeatures,
            featureCard: commonFeatureCard,
            downloadButtonText: commonButtonText,
        },
    },
    {
        hero: {
            title: 'AI & Automation Solutions',
            subtitle: 'Innovating with AI for smarter decisions',
            description:
                'Leverage AI-driven solutions for automation, predictive analytics, and process optimization to transform business operations.',
            buttonText: 'Get In Touch',
            image: pcImage,
        },
        learnMore: {
            title: 'Descriptions',
            descriptions: [
                'We specialize in AI and automation solutions to streamline operations and enhance decision-making. This includes predictive analytics, process automation, and intelligent algorithms to boost efficiency and accuracy.',
                'Our services cover custom AI models, workflow automation, and data-driven insights to optimize business processes, reduce costs, and improve performance.',
            ],
            features: commonFeatures,
            featureCard: commonFeatureCard,
            downloadButtonText: commonButtonText,
        },
    },
    {
        hero: {
            title: 'Cybersecurity Services',
            subtitle: 'Safeguarding your digital assets',
            description:
                'Implement comprehensive security measures to protect your business from evolving threats and ensure data integrity.',
            buttonText: 'Get In Touch',
            image: pcImage,
        },
        learnMore: {
            title: 'Descriptions',
            descriptions: [
                'We provide comprehensive cybersecurity services to protect your digital assets from evolving threats. This includes threat detection, data encryption, and vulnerability management.',
                'Our services cover network security, endpoint protection, risk assessment, and incident response to ensure robust protection, minimize risks, and enhance overall security posture.',
            ],
            features: commonFeatures,
            featureCard: commonFeatureCard,
            downloadButtonText: commonButtonText,
        },
    },
    {
        hero: {
            title: 'E-commerce Solutions',
            subtitle: 'Powering seamless online shopping',
            description:
                ' Develop scalable and secure e-commerce platforms with intuitive designs and smooth user experiences to maximize sales.',
            buttonText: 'Get In Touch',
            image: pcImage,
        },
        learnMore: {
            title: 'Descriptions',
            descriptions: [
                'We offer tailored e-commerce solutions to enhance online shopping experiences and drive sales. This includes user-friendly website design, secure payment processing, and mobile optimization.',
                'Our services cover product catalog management, shopping cart integration, order tracking, and marketing automation to boost conversions, increase customer retention, and grow your online business.',
            ],
            features: commonFeatures,
            featureCard: commonFeatureCard,
            downloadButtonText: commonButtonText,
        },
    },
    {
        hero: {
            title: 'UI - UX DESIGN',
            subtitle: 'Designing experiences that captivate users.',
            description: 'Create user-centric designs that balance aesthetics and functionality, ensuring seamless interactions and enhanced user satisfaction.',
            buttonText: 'Get In Touch',
            image: pcImage,
        },
        learnMore: {
            title: 'Descriptions',
            descriptions: [
                'We create intuitive UI/UX designs that enhance user experiences and drive engagement. This includes user-centric interfaces, seamless navigation, and responsive designs for all devices.',
                'Our services cover wireframing, prototyping, user research, and usability testing to deliver visually appealing, functional, and engaging digital experiences that meet user needs and business goals.'
            ],
            features: commonFeatures,
            featureCard: commonFeatureCard,
            downloadButtonText: commonButtonText,
        }
    },

    {
        hero: {
            title: 'Brand Identity',
            subtitle: 'Building brands that resonate',
            description: 'Craft a compelling brand identity with impactful visuals and messaging to establish trust and recognition in your market.',
            buttonText: 'Get In Touch',
            image: pcImage,
        },
        learnMore: {
            title: 'Descriptions',
            descriptions: [
               'Id blandit facilisis dolor natoque parturient nostra pharetra himenaeos et litora. Himenaeos nascetur vestibulum finibus porttitor ut leo. Finibus commodo class letius feugiat pede montes sociosqu vulputate ornare mattis posuere. Sit nunc purus netus urna letius.',
                'Id blandit facilisis dolor natoque parturient nostra pharetra himenaeos et litora. Himenaeos nascetur vestibulum finibus porttitor ut leo. Finibus commodo class letius feugiat pede montes sociosqu vulputate ornare mattis posuere. Sit nunc purus netus urna letius.'
            ],
            features: commonFeatures,
            featureCard: commonFeatureCard,
            downloadButtonText: commonButtonText,
        }
    },
];


const LearnMorePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
      useEffect(() => {
        AOS.init({
          duration: 1000,  // Animation duration in milliseconds
          easing: "ease-in-out",
          once: true,       // Whether animation should happen only once
        });
      }, []);

    const { title } = useParams();
    console.log("Title is:", title);

    // Improved matching logic - look for partial matches or keywords
    const serviceData = pageData.find((data) => {
        // Option 1: Check if the URL parameter is contained within any title
        if (data.hero.title.toLowerCase().includes(title.toLowerCase())) {
            return true;
        }

        // Option 2: For SEO specific case
        if (title.toLowerCase().includes("search engine optimization") &&
            data.hero.title.toLowerCase().includes("seo")) {
            return true;
        }

        return false;
    });

    console.log("The service data is:", serviceData);

    if (!serviceData) {
        return <div>Service not found!</div>;
    }
    return (
        <div>
            <Navbar />
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content container">
                    <div className="hero-text" data-aos="fade-right">
                        <h4 style={{ paddingBottom: '15px', color: '#0a57f0' }}>{serviceData.hero.title}</h4>
                        
                        <h2>
                            {serviceData.hero.subtitle }
                            <br/>
                            <br />
                            {serviceData.hero.description}
                        </h2>
                        <p>{serviceData.hero.text}</p>
                        <button className="cta-button">
                            <span>{serviceData.hero.buttonText}</span>
                        </button>
                    </div>
                    <div className="hero-image" data-aos="fade-left">
                        <img src={serviceData.hero.image} alt="Computer Mockup" />
                    </div>
                </div>
            </section>

            {/* Learn More Section */}
            <div className="learnMoreMain">
                <div className="learnMoreText" data-aos="fade-up">
                    <p className="title">{serviceData.learnMore.title}</p>
                    {serviceData.learnMore.descriptions.map((desc, index) => (
                        <p className="description" key={index}>
                            {desc}
                        </p>
                    ))}
                    <div className="curved-line"></div>
                    <div className="feature-grid">
                        {serviceData.learnMore.features.map((item, index) => (
                            <p className="feature-item" key={index}>
                                <FontAwesomeIcon icon={faCheck} style={{ color: '#0a57f0', marginRight: '8px' }} /> {item}
                            </p>
                        ))}
                    </div>
                    <div className="curved-line"></div>
                </div>

                <div data-aos="fade-right"> 
                    <div className="feature-card">
                        <div className="feature-title">{serviceData.learnMore.featureCard.title}</div>
                        <ul className="feature-list">
                            {serviceData.learnMore.featureCard.items.map((item, index) => (
                                <li className="feature-item" key={index}>
                                    <i>{item.icon}</i> {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button
                        className="download-btn"
                        id="glowingBTN"
                        onClick={() => (window.location.href = '#Main')}
                    >
                        {serviceData.learnMore.downloadButtonText}
                    </button>
                </div>
            </div>
            <FourStepsSection />
            <DigitalFutureSection />
            <TestimonialsSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default LearnMorePage;
