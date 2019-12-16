import React from 'react'
import { Icon } from 'semantic-ui-react'

export default class Data {
    header() {
        return {
          locationObj: {
            "/company": "About",
            "/contact": "Contact",
            "/solutions": "Solutions",
            "/products": "Products",
            "/exchange-online": "Exchange Online",
            "/dynamics365": "Dynamics 365",
            "/microsoft365": "Microsoft 365",
            "/office365": "Office 365",
            "/services": "Services",
            "/managed-services": "Managed Services",
            "/data-center-consolidation": "Data Center Consolidation",
            "/e-learning": "e-Learning",
            "/network-transformation": "Network Transformation",
            "/security-optimization": "Security Optimization",
            "/workplace-modernization": "Workplace Modernization"
          }
        };
    }












    
    dynamics365() {
        return {
          slides: [
            {
              title: "Dynamics 365 Sales (CRM)",
              text:
                "Simplify complex data to learn more about your customers. Automate the sales cycle, boost productivity, and reduce costs. You will get a better view of your sales team’s performance so you can meet your objectives."
            },
            {
              title: "Business Central (Financials)",
              text:
                "Complete view of your company’s financial situation, monitor cash flow, manage inventory and invoice customers. Stay up to date on your Account Schedules, Budgets, Sales Orders and Vendor Management. When you can have a complete view of your business, you can make better business decisions."
            },
            {
              title: "Customer Service",
              text:
                "360-degree view of each client, full history of their interactions with your department plus their personal preferences. For customers who want to do their own research, Dynamics 365 has a self-service portal with a user-friendly knowledge base and online community"
            },
            {
              title: "Field Service",
              text:
                "Team productivity and efficiency where they can track customer warranties, view repair history as well as maintenance schedules from one application. Manage your inventory from your mobile device. Need a specific technician for a job? Find out who has the right skills with Dynamics 365 for Field Service."
            },
            {
              title: "Project Service Automation",
              text:
                "Project Service Automation by building plans with specially designed templates that can be used again and adjusted for each project. Get a clear view of what stage you’re at and who is working on what. Determine at a glance if the project is profitable and will meet the customer’s expectations. All project details — from the quote to the invoice — is stored in a single system."
            },
            {
              title: "Operations (ERP)",
              text:
                "Operate your warehouse, transport your company’s products and control your inventory. Consolidate your shipments to reduce transportation costs. Give your warehouse managers automated workflow tools so they can respond quickly to changing demands in your business. Manage your workforce and streamline your hiring processes to help reduce errors and save time and money."
            }
          ]
        };
    }











    

    exchangeOnline() {
        return {
          plans: [
            {
              id: "1",
              content:
                "50 GB of inbox storage and can send messages up to 150 MB, inbox management, sharing of calendars",
              price: "4"
            },
            {
              id: "2",
              content:
                "100 GB of inbox storage and can send messages up to 150 MB, inbox management, sharing of calendars Data Loss Prevention (DLP), voicemail",
              price: "8"
            }
          ]
        };
    }











    

    microsoft365() {
        return {
          plans: [
            {
              Title: "Business",
              Price: "$21.95",
              "User maximum": "300",
              "Office 365 applications": true,
              "1 TB file storage and sharing": true,
              "Microsoft Teams chat-based workspace": true,
              "Protect company data across devices": true,
              "Secure access to documents on mobile devices": true,
              "Protect Windows 10 devices against malware, viruses, and spyware with Windows Defender": true,
              "Self-service PC deployment with Windows AutoPilot": false,
              "Automatically deploy Office apps to Windows 10 PCs": false,
              "PSTN Conferencing, Cloud PBX with OneDrive": false,
              "Windows Defender Advanced Threat Protection, Office 365 Advanced Threat Protection, Office 365 Threat Intelligence": false,
              "Power BI Pro, MyAnalytics": false
            },
            {
              Title: "E3",
              Price: "$35.95",
              "User maximum": "Unlimited",
              "Office 365 applications": true,
              "1 TB file storage and sharing": true,
              "Microsoft Teams chat-based workspace": true,
              "Protect company data across devices": true,
              "Secure access to documents on mobile devices": true,
              "Protect Windows 10 devices against malware, viruses, and spyware with Windows Defender": true,
              "Self-service PC deployment with Windows AutoPilot": true,
              "Automatically deploy Office apps to Windows 10 PCs": true,
              "PSTN Conferencing, Cloud PBX with OneDrive": false,
              "Windows Defender Advanced Threat Protection, Office 365 Advanced Threat Protection, Office 365 Threat Intelligence": false,
              "Power BI Pro, MyAnalytics": false
            },
            {
              Title: "E5",
              Price: "$63.95",
              "User maximum": "Unlimited",
              "Office 365 applications": true,
              "1 TB file storage and sharing": true,
              "Microsoft Teams chat-based workspace": true,
              "Protect company data across devices": true,
              "Secure access to documents on mobile devices": true,
              "Protect Windows 10 devices against malware, viruses, and spyware with Windows Defender": true,
              "Self-service PC deployment with Windows AutoPilot": true,
              "Automatically deploy Office apps to Windows 10 PCs": true,
              "PSTN Conferencing, Cloud PBX with OneDrive": true,
              "Windows Defender Advanced Threat Protection, Office 365 Advanced Threat Protection, Office 365 Threat Intelligence": true,
              "Power BI Pro, MyAnalytics": true
            }
          ],
          criteria: [
            "User maximum",
            "Office 365 applications",
            "1 TB file storage and sharing",
            "Microsoft Teams chat-based workspace",
            "Protect company data across devices",
            "Secure access to documents on mobile devices",
            "Protect Windows 10 devices against malware, viruses, and spyware with Windows Defender",
            "Self-service PC deployment with Windows AutoPilot",
            "Automatically deploy Office apps to Windows 10 PCs",
            "PSTN Conferencing, Cloud PBX with OneDrive",
            "Windows Defender Advanced Threat Protection, Office 365 Advanced Threat Protection, Office 365 Threat Intelligence",
            "Power BI Pro, MyAnalytics"
          ]
        };
    }











    

    office365() {
        return {
          plans: [
            {
              id: 1,
              Title: "Business Essentials",
              Price: "$5.00",
              "User Maximum": "300",
              "Office Online": true,
              "Office Desktop": false,
              "Office Mobile": false,
              "Personalized Search": true,
              "Corporate Video Portal": false,
              "Enterprise Management": false,
              "Self-Service Business Intelligence": false,
              "EDiscovery Center": false,
              "Compliance and Information Protection": false,
              oneDrive: true,
              Stream: true,
              Exchange: true,
              Teams: true,
              Sharepoint: true,
              Yammer: true,
              PowerBI: false
            },
            {
              id: 2,
              Title: "Business",
              Price: "$8.30",
              "User Maximum": "300",
              "Office Online": true,
              "Office Desktop": true,
              "Office Mobile": true,
              "Personalized Search": false,
              "Corporate Video Portal": false,
              "Enterprise Management": false,
              "Self-Service Business Intelligence": false,
              "EDiscovery Center": false,
              "Compliance and Information Protection": false,
              oneDrive: true,
              Stream: true,
              Exchange: false,
              Teams: false,
              Sharepoint: false,
              Yammer: false,
              PowerBI: false
            },
            {
              id: 3,
              Title: "Business Premium",
              Price: "$12.50",
              "User Maximum": "300",
              "Office Online": true,
              "Office Desktop": true,
              "Office Mobile": true,
              "Personalized Search": true,
              "Corporate Video Portal": false,
              "Enterprise Management": false,
              "Self-Service Business Intelligence": false,
              "EDiscovery Center": false,
              "Compliance and Information Protection": false,
              oneDrive: true,
              Stream: true,
              Exchange: true,
              Teams: true,
              Sharepoint: true,
              Yammer: true,
              PowerBI: false
            },
            {
              id: 4,
              Title: "Pro Plus",
              Price: "$11.99",
              "User Maximum": "Unlimited",
              "Office Online": true,
              "Office Desktop": true,
              "Office Mobile": true,
              "Personalized Search": false,
              "Corporate Video Portal": false,
              "Enterprise Management": true,
              "Self-Service Business Intelligence": true,
              "EDiscovery Center": false,
              "Compliance and Information Protection": false,
              oneDrive: true,
              Stream: false,
              Exchange: false,
              Teams: false,
              Sharepoint: false,
              Yammer: false,
              PowerBI: false
            },
            {
              id: 5,
              Title: "E1",
              Price: "$7.99",
              "User Maximum": "Unlimited",
              "Office Online": true,
              "Office Desktop": false,
              "Office Mobile": false,
              "Personalized Search": true,
              "Corporate Video Portal": true,
              "Enterprise Management": false,
              "Self-Service Business Intelligence": false,
              "EDiscovery Center": false,
              "Compliance and Information Protection": false,
              oneDrive: true,
              Stream: true,
              Exchange: true,
              Teams: true,
              Sharepoint: true,
              Yammer: true,
              PowerBI: false
            },
            {
              id: 6,
              Title: "E3",
              Price: "$19.99",
              "User Maximum": "Unlimited",
              "Office Online": true,
              "Office Desktop": true,
              "Office Mobile": true,
              "Personalized Search": true,
              "Corporate Video Portal": true,
              "Enterprise Management": true,
              "Self-Service Business Intelligence": true,
              "EDiscovery Center": true,
              "Compliance and Information Protection": true,
              oneDrive: true,
              Stream: true,
              Exchange: true,
              Teams: true,
              Sharepoint: true,
              Yammer: true,
              PowerBI: false
            },
            {
              id: 7,
              Title: "E5",
              Price: "$34.99",
              "User Maximum": "Unlimited",
              "Office Online": true,
              "Office Desktop": true,
              "Office Mobile": true,
              "Personalized Search": true,
              "Corporate Video Portal": true,
              "Enterprise Management": true,
              "Self-Service Business Intelligence": true,
              "EDiscovery Center": true,
              "Compliance and Information Protection": true,
              oneDrive: true,
              Stream: true,
              Exchange: true,
              Teams: true,
              Sharepoint: true,
              Yammer: true,
              PowerBI: true
            }
          ],
          criteria: [
            "User Maximum",
            "Office Online",
            "Office Desktop",
            "Office Mobile",
            "Personalized Search",
            "Corporate Video Portal",
            "Enterprise Management",
            "Self-Service Business Intelligence",
            "EDiscovery Center",
            "Compliance and Information Protection",
            "oneDrive",
            "Stream",
            "Exchange",
            "Teams",
            "Sharepoint",
            "Yammer",
            "PowerBI"
          ],
          altMedia: {
            images: [
              require("./assets/office365/be-mobile.jpg"),
              require("./assets/office365/collaboration.jpg"),
              require("./assets/office365/growth.jpg")
            ],
            content: [
              {
                title: "Be mobile! Access Office 365 from any location",
                paragraphs: [
                  "Take your office with you wherever you go! Work from anywhere, on any device. Access Office 365 from your mobile phone, tablet or PC. No extra fees or configurations. Just login to your Office 365 portal, and you’re ready to work! Connect with the right people and share ideas and information at any time, from anywhere."
                ]
              },
              {
                title: "Collaborate better! Work from anywhere, anytime",
                paragraphs: [
                  "Share and co-author documents in Office desktop and web-based apps. Use Lync to instantly connect with colleagues and customers as if they were sitting right next to you. Set up online meetings in minutes, send email and coordinate team work wherever you are!"
                ]
              },
              {
                title: "Grow Your Business! Simplify your IT",
                paragraphs: [
                  "Simplify IT and give your team the best user experience. Free, automatic updates mean that small business owners can stop worrying about IT problems and focus on what matters most: growing their business."
                ]
              }
            ]
          }
        };
    }











    

    securityOptimization() {
        return {
          altMedia: {
            images: [
              require("./assets/security-optimization/security-assesment.jpg"),
              require("./assets/security-optimization/network-risk-assessment.jpg"),
              require("./assets/security-optimization/application-security-assesment.jpg"),
              require("./assets/security-optimization/HIPAA-security-assessment.jpg"),
              require("./assets/security-optimization/Authentication-Design-security.jpg"),
              require("./assets/security-optimization/web-email-security-assessment.jpg"),
              require("./assets/security-optimization/Authentication-security.jpg"),
              require("./assets/security-optimization/datal-loss-security.jpg"),
              require("./assets/security-optimization/endpoint-security-assessment.jpg")
            ],
            content: [
              {
                title: "Security Assesments",
                paragraphs: [
                  "Security and compliance should always be top of mind for modern businesses. Our assessments can identify shortcomings and suggest improvements that'll put you on solid ground.PSI professionals and solutions will help define your security strategy, improve your security posture, and achieve your compliance goals."
                ]
              },
              {
                title: "Network Risk & Vulnerability Assesments",
                paragraphs: [
                  "PSI professionals as members of your team will help you define the current and future state of your security environment with a complete internal and external cybersecurity assessment. We'll determine how your organization maps to best practices, along with the steps needed to get to the next level of security and maintain a robust security environment as change occurs."
                ]
              },
              {
                title: "Application Security Assesment",
                paragraphs: [
                  "PSI application security assessments include advisory services to provide an in-depth look at vulnerabilities in software."
                ]
              },
              {
                title: "HIPAA Security & Compliance Assesment",
                paragraphs: [
                  "Our HIPAA Security Assessment is an in-depth appraisal of your organization's adherence to existing policies and industry best practices. After identifying any areas of weakness, we'll develop countermeasures in three areas – people, process, and technology – for HIPAA Security Rule requirements"
                ]
              },
              {
                title: "Endpoint Security Design & Implementation",
                paragraphs: [
                  "The most proactive organizations leverage a layered and integrated approach in protecting every IT asset, whether a desktop, laptop, tablet, or smartphone. Modern-day endpoint protection solutions may include anti-virus, anti-spyware, personal firewall, application control, and elements of host intrusion prevention."
                ]
              },
              {
                title: "Web & Email Security Design & Implementation",
                paragraphs: [
                  "Our team of security experts will design Web and Email Security Solutions custom to your environment to help protect your data, your business, and your reputation."
                ]
              },
              {
                title: "Authentication & Data Security",
                paragraphs: [
                  "Managing data access is an important part of any company's security plan. Our experts can help you design and implement solutions for controlling and authenticating users on your network."
                ]
              },
              {
                title: "Data Loss Prevention Design & Implementation",
                paragraphs: [
                  "PSI professionals will work with your team to identify and classify data critical to your business, who has access to it, and what they do with it. Our featured Data Loss Prevention Solutions detect potential data breaches/data loss transmissions and can execute responses ranging from simple notifications to active blocking – based on policy and rules defined to address the risk of inadvertent or accidental leaks or exposure of sensitive data outside authorized means."
                ]
              },
              {
                title: "Authentication Design & Implementation",
                paragraphs: [
                  "PSI professionals and solutions will help define your security strategy, improve your security posture, and achieve your compliance goals."
                ]
              }
            ]
          }
        };
    }











    

    workplaceModernization() {
        return {
          altMedia: {
            images: [
              require("./assets/workplace-modernization/microsoft365.jpg"),
              require("./assets/workplace-modernization/office365.png"),
              require("./assets/workplace-modernization/ten-enterprise.png"),
              require("./assets/workplace-modernization/exchange-online.png"),
              require("./assets/workplace-modernization/teams.png"),
              require("./assets/workplace-modernization/surface.png")
            ],
            content: [
              {
                title: "Microsoft 365",
                paragraphs: [
                  "Microsoft 365 brings together the productivity of Office 365, Windows 10, and work-anywhere mobility and always-on security in a cost-effective, subscription-based cloud service built for any size organization. With Microsoft 365, you can bring people, information, and insights together by creating a modern hub that fosters collaboration and keeps people productive on a platform that's always up to date.",
                  "Put your move to Microsoft 365 in the hands of the PSI cloud professionals. Our certified Microsoft engineers and cloud specialists will walk you through every step from deployment to management to get you ready to compete in our digital world."
                ]
              },
              {
                title: "Office 365",
                paragraphs: [
                  "The cloud is delivering on its promises – anywhere and anytime access to data and apps using any device. And so is Office 365, a complete suite of familiar Office communications and collaboration apps plus cloud services – all built around a solid security framework.",
                  "When it's time, the cloud professionals at PSI will oversee your move to Office 365, guiding you through every step of the way, way including deployment, migration, and training your employees how to make the most of their new Office 365 productivity tools. Specialized plans are also available to suit the needs of government and non-profit entities and first line workers."
                ]
              },
              {
                title: "Windows 10 Enterprise",
                paragraphs: [
                  "Windows 10 Enterprise is the most secure Windows ever, protecting your sensitive data, your devices, your customer identities, and your intellectual property – with enterprise-grade protection and control. With Windows 10, you can scale up or down month-to-month, reducing up-front costs with a pay-as-you-go subscription model. And it's easy to reassign licenses, onboard new employees, or add and manage additional cloud services as necessary.",
                  "And with PSI as your Microsoft Cloud Solutions Provider you've got a partner to manage everything – from pre-migration consulting, assessment services, and security strategy to deployment and ongoing management. You can focus on strategic priorities while we handle the day-to-day aspects of device configuration, implementation, and post-migration support."
                ]
              },
              {
                title: "Exchange Online",
                paragraphs: [
                  "Exchange Online lets you maintain control over your environment while gaining the advantage of hosting your email on Microsoft servers. With automatic patching and robust security, Exchange Online eliminates the time and effort of maintaining your system. Now you can provide your users with anywhere access to email, calendar, and contacts on all major browsers and across most devices. And integration with Outlook means they'll enjoy a rich, familiar email experience with offline access."
                ]
              },
              {
                title: "Microsoft Teams",
                paragraphs: [
                  "With Teams, everyone stays secure and connected with chat, calls, and meetings within team, private, or small group conversations. Team members can easily schedule and join online Skype meetings with HD video, VoIP, and dial-in audio conferencing options, and share files, apps, or desktops in online meetings. And Teams seamlessly integrates with Office 365 apps like SharePoint, OneNote, PowerBI, Planner, and more."
                ]
              },
              {
                title: "Microsoft Surface",
                paragraphs: [
                  "Dive into the next generation of creativity and productivity with Surface from Microsoft and PSI. Experience unprecedented versatility and power with devices you can use as tablets, laptops, or even portable studios. Whether you need the lightweight portability of the Surface Go or the powerhouse performance of the Surface Book 2, there's something for everybody with Surface."
                ]
              }
            ]
          }
        };
    }











    

    company() {
        return {
          partners: [
            [
              "z-imperium.png",
              "ibm-bp.png",
              "fire-eye-silver.png",
              "dell-technologies.jpg"
            ],
            [
              "fortinet-gold.png",
              "click-dimensions.png",
              "silver-peak.png",
              "oracle.png"
            ],
            ["redhat-ready.png", "vmware.png", "hp.png"]
          ],
          introList: [
            "PSI serves several federal and commercial agencies of various sizes with administrative, engineering, and management challenges.",
            "PSI maintains a diverse portfolio that includes development, project management, e-Learning, and strategic planning in both business and IT.",
            "From certified project managers and business analysts to solution architects and developers, we fit the right resources to support clients with their business needs.",
            "We strategically partner with several industry leaders such as Microsoft, IBM, Oracle, and many more."
          ],
          contractRows: [
            ["Contract #", "47QTCA18D007V"],
            ["Contractor", "PRACTICAL SOLUTIONS, INC."],
            ["Address", "20 F ST NW STE 700 WASHINGTON, DC 20001-6705"],
            ["Phone", "5713341395"],
            ["E-mail", "jhajeer@ps4b.com"],
            ["Web Address", "http://www.ps4b.com"],
            ["DUNS", "110321374"],
            ["NAICS", "541512"]
          ],
          employees: [
            {
              name: "Samad Haider",
              role: "Dynamics Analyst",
              avitar: "samad.jpeg"
            },
            {
              name: "Sam Ashtar",
              role: "Software Engineer",
              avitar: "sam.jpeg"
            },
            {
              name: "Andrea Williams",
              role: "Internal Application Developer",
              avitar: "andrea.jpeg"
            },
            {
              name: "Leroy Okpara",
              role: "Jr Network Engineer",
              avitar: "leroy.jpeg"
            }
          ],
          execs: {
            jay: {
              name: "Jay Hajeer",
              role: "CEO",
              image: "jay.jpeg",
              bio: [
                <p className="white">
                  Since he founded the company in 1997, Mr. Hajeer has been
                  instrumental in developing PSI into a modern high performance
                  organization that embodies his vision: “We Deliver Practical
                  Solutions!”
                </p>,
                <p className="white">
                  Mr. Hajeer has built PSI into the trusted solution delivery
                  partner of choice for our clients by drawing from his
                  experience in leading technical programs and projects for
                  several federal agencies as well as private sector entities.
                </p>,
                <p className="white">
                  Mr. Hajeer’s vision for PSI is embodiedin his established
                  approach known as Solution Delivery Methodology (SDM©). This
                  structured methodology materialized gradually from the lessons
                  learned in helping many organizations overcome Administrative,
                  Engineering, and Management challenges.
                </p>
              ]
            },
            nik: {
              name: "Nikolis Pirelli",
              role: "Director of Data and Analytics",
              image: "nik.jpeg",
              bio: [
                <p className="white">
                  Nikolis G. Pirelli is the Director of Data and Analytics at
                  PSI. He spent most of his professional career involved in the
                  entire spectrum of data, from its creation and storage to its
                  consumption and communication.
                </p>,
                <p className="white">
                  He has held several leadership and technical roles throughout
                  his career at various organizations and is well-known for his
                  efficient and realistic methodologies along with his passion
                  for data and its role in business strategy.
                </p>,
                <p className="white">
                  Mr. Pirelli holds a B.S. in Finance from Arizona State
                  University and a M.S. in Business Intelligence and Analytics
                  from Saint Joseph’s University.
                </p>
              ]
            },
            bob: {
              name: "Bob Michels",
              role: "President",
              image: "bob.jpg",
              bio: [
                <p className="white">
                  Mr. Michels leads development and implementation of PSI’s
                  strategy for the public sector and overall growth. His
                  responsibilities include corporate direction, business
                  development, and smart business partnerships.
                </p>,
                <p className="white">
                  Mr. Michels has over 41 years experience in the federal sector
                  prior to PSI. He has led the business growth of several firms
                  helping them navigate the public sector marketplace. He was
                  the Founder/CEO of Mobile Commerce & Computing, Inc. which was
                  the first company to develop applications on hand-held
                  devices.
                </p>,
                <p className="white">
                  Mr. Michels has been featured a number of industry
                  publications such as Forbes, Washington Technology, New York
                  Reporter, and others.
                </p>
              ]
            },
            dave: {
              name: "David Foresman",
              role: "Vice President",
              image: "dave.png",
              bio: [
                <p className="white">
                  David Foresman is Vice President at PSI. David is an
                  experienced management executive specializing in Information
                  Security, Program Management and Solution delivery.
                </p>,
                <p className="white">
                  David has been a key driver in business development and has
                  led technical operations providing technical oversight and
                  program management of several Federal and commercial
                  contracts.
                </p>,
                <p className="white">
                  Prior to PSI, David served on the board of Evolver Inc. and as
                  the Director of the Knowledge management division. He also
                  served as Vice President of the Enterprise services group for
                  Business Strategies International.
                </p>
              ]
            }
          }
        };
    }











    

    home() {
        return {
          slides: [
            <h6>
              <Icon className="gold" name="trophy" />
              Cloud Platform
            </h6>,
            <h6>
              <Icon className="gold" name="trophy" />
              ISV
            </h6>,
            <h6>
              <Icon className="gold" name="trophy" />
              Data Platform
            </h6>,
            <h6>
              <Icon className="gold" name="trophy" />
              Azure DevOps
            </h6>,
            <h6>
              <Icon className="gold" name="trophy" />
              Windows and Devices
            </h6>,
            <h6>
              <Icon className="gold" name="trophy" />
              Data Analytics
            </h6>,
            <h6>
              <Icon className="silver" name="trophy" />
              Small and Midmarket Cloud Solutions
            </h6>
          ],
          iconObjects: {
            1: [
              {
                title: "Microsoft Solutions",
                paragraph:
                  "Design, implement, and support an end-to-end cloud infrastructure.",
                iconName: "Cloud"
              },
              {
                title: "Cybersecurity",
                paragraph:
                  "Dedicated to keeping our clients' enterprise data and network secure.",
                iconName: "Computer-Secure"
              },
              {
                title: "Planning and Strategy",
                paragraph:
                  "Helping clients with their strategic planning in both business and IT contexts.",
                iconName: "Idea-2"
              },
              {
                title: "e-Learning",
                paragraph:
                  "Offering a wide catalog of free and subscription-based online courses.",
                iconName: "Student-Hat2"
              }
            ],
            2: [
              {
                title: "Engineers",
                paragraph:
                  "Designing and integrating solutions within our clients’ diverse environments.",
                iconName: "Engineering"
              },
              {
                title: "Consultants",
                paragraph:
                  "Partnering with our clients to identify their root challenges and help them resolve efficiently.",
                iconName: "Consulting"
              },
              {
                title: "Analysts",
                paragraph:
                  "Studying and dissecting quantitative and qualitative data to guide decisions.",
                iconName: "Monitor-Analytics"
              },
              {
                title: "Strategists",
                paragraph:
                  "Reconciling our teams’ efforts to develop the ideal roadmap to efficiency and productivity.",
                iconName: "Tactic"
              }
            ]
          }
        };
    }











    

    solutions() {
        return {
          microsoftColumnData: [
            {
              title: "Business",
              description:
                "Microsoft 365 brings together the best-in-class productivity of Office 365 with simple device management and security to connect people and information in an intelligent new way.",
              data: [
                [
                  "Everything you need, everywhere you need it",
                  "Comes with Office",
                  "Email and calendaring",
                  "Chat, call, and meet",
                  "Cloud Storage"
                ],
                [
                  "Don't drown in paperwork",
                  "Manage your customers",
                  "Streamline customer feedback",
                  "Make repetitive tasks easy",
                  "Work with what you have"
                ],
                [
                  "Protect what matters most",
                  "Defend against malware",
                  "Stay in control",
                  "Keep customer data safe"
                ]
              ]
            },
            {
              title: "Enterprise",
              description:
                "Microsoft 365 combines best-in-class productivity apps with intelligent cloud services to transform the way you work.",
              data: [
                [
                  "Optimize your workplace",
                  "Engage employees",
                  "Transform workplace collaboration",
                  "Harness organizational insights",
                  "Create a data driven culture"
                ],
                [
                  "Protect your business",
                  "Secure access to your enterprise",
                  "Safeguard your sensitive data",
                  "Respond to and manage risk",
                  "Defend your digital landscape"
                ],
                [
                  "Streamline business processes",
                  "Centralize apps and workflows",
                  "Automate routine tasks",
                  "Digitize your workflow"
                ]
              ]
            }
          ],
          iconObjects: [
            {
              iconName: "Check",
              title: "Simplify and automate everyday business tasks",
              list: [
                "Automate common tasks without expensive development processes",
                "Reduce dependency on inefficient paper-based processes by implementing a modern set of tools",
                "Increase productivity with applications that solve real business challenges"
              ]
            },
            {
              iconName: "Optimization",
              title: "Modernize to stay competitive",
              list: [
                "Provide exceptional employee and customer experiences",
                "Empower employees to accomplish and create more with less",
                "Reduce redundancy, waste, and inefficiency through planning and consolidation"
              ]
            },
            {
              iconName: "Sync-Cloud",
              title: "Connect employees and processes to data",
              list: [
                "Securely collect, manage, and use data from disparate systems to provide critical insights and action",
                "Access to critical information from anywhere, at anytime, with any device",
                "Connect employees through data driven processes"
              ]
            }
          ]
        };
    }











    

    contactForm() {
        return {
          subjects: [
            { key: "1", text: "Security Optimization", value: "1" },
            { key: "2", text: "Data Center Consolidation", value: "2" },
            { key: "3", text: "e-Learning", value: "3" },
            { key: "4", text: "Network Transformation", value: "4" },
            { key: "5", text: "Workplace Modernization", value: "5" },
            { key: "6", text: "Microsoft 365 Solutions", value: "6" },
            { key: "7", text: "Microsoft 365 Products", value: "7" },
            { key: "8", text: "Business Apps", value: "8" },
            { key: "9", text: "Data and BI", value: "9" },
            { key: "10", text: "Apps and Infrastructure", value: "10" },
            { key: "11", text: "Exchange Online", value: "11" },
            { key: "12", text: "Office 365", value: "12" },
            { key: "13", text: "Dynamics 365", value: "13" }
          ]
        };
    }
}