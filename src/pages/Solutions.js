import React, { Component } from 'react'
import SubHeader from '../reusable/SubHeader'
import ImgDiv from '../reusable/ImgDiv'
import IconParagraph from '../reusable/IconParagraph'
import LoneParagraph from '../reusable/LoneParagraph'
import { Grid } from 'semantic-ui-react'
import StyledList from '../reusable/StyledList'

// !!! scroll shit is not dry at alllllll
class Solutions extends Component {
  constructor() {
    super();
    this.mColData = [
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
    ];

    this.icons = [
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
    ];

    this.state = {
        section: ""
    }
  }

  componentDidMount() {
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    // !!! This way of getting the query only works when there's ONE
    const section = window.location.search.split("section=")[1];
    // if you end up with multiple queries in the url, uncomment the next line and use actualSection instead of section from then on
    // const actualSection = section.split("&")[0]
    if (section !== this.state.section) {
      this.setState({ section }, this.findAndScroll);
    }
  }

  findAndScroll() {
    if (this.state.section === "microsoft365") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(this.state.section);
      const xPos = this.offset(section) - 60;
      window.scrollTo(0, xPos);
    }
  }

  offset(el) {
    var rect = el.getBoundingClientRect(),
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop;
  }

  buildLittleList(data) {
    const items = data.slice(1);
    return (
      <Grid.Column>
        <h6 className="fs-2">{data[0]}</h6>
        <StyledList items={items} />
      </Grid.Column>
    );
  }

  microsoftColumns({ title, description, data }) {
    return (
      <Grid.Column>
        <h5>{title}</h5>
        <p>{description}</p>
        <Grid stackable centered columns={2}>
          {data.map(d => {
            return this.buildLittleList(d);
          })}
        </Grid>
      </Grid.Column>
    );
  }

  iconColumn({ iconName, title, list }) {
    return (
      <Grid.Column>
        <IconParagraph iconName={iconName} title={title} list={list} />
      </Grid.Column>
    );
  }

  render() {
    return (
      <div>
        <div id="microsoft365" className="bg-white regular-width">
          <SubHeader title="Microsoft 365" marginTop marginBottom />
          <Grid stackable divided columns={2}>
            {this.mColData.map(c => {
              return this.microsoftColumns(c);
            })}
          </Grid>
        </div>
        <div className="filler" />
        <div id="appsandinfrastructure" className="bg-light-grey">
          <SubHeader paddingTop marginBottom title="Apps and Infrastructure" />
          <div className="narrow-width bg-white lone-paragraph rounded-corners">
            <h5>How do we transform your infrastructure?</h5>
            <p className="text-left drop-cap">
              Practical Solutions, Inc. (PSI) is a leader in helping businesses
              transform and grow by optimizing their IT infrastructure. PSI
              understands that the key to transformation is an IT foundation
              that is stable, robust, and secure. As a Microsoft Gold partner,
              we rely heavily on Microsoft applications and infrastructure to
              ensure our clients have the right foundation to enable their
              business transformation.
            </p>
            <p className="text-left">
              The PSI team can design, implement, and manage a complete
              end-to-end infrastructure optimization solution — transforming the
              IT infrastructure from a cost center into a strategic asset. We
              work closely with clients to develop a balanced solution that
              takes advantage of infrastructure optimization guidance from
              Microsoft, in order to help our clients create an efficient and
              sustainable IT environment. PSI can help clients assess basic IT
              capabilities within their infrastructure, and then execute a
              multi-tier improvement plan.
            </p>
          </div>
          <div className="filler" />
          <ImgDiv
            title="This plan enables proactive monitoring and problem solving resulting in:"
            list={[
              "Reduced costs",
              "Increased IT insights",
              "More energy focused on providing new business capabilities",
              "Improved service levels",
              "Increased organizational agility",
              "Reduced system complexity"
            ]}
            image={require("../assets/imgDivs/app-and-i.jpg")}
          />
          <div className="filler" />
        </div>
        <div id="businessapps" className="bg-white">
          <div className="filler" />
          <h3>Microsoft Business Apps</h3>
          <p className="hella-narrow-width">
            Microsoft 365 Business Applications are native tools fully
            integrated with Microsoft 365 and Azure Applications that are meant
            to drive business efficiency and deliver the insights you need.
            Practical Solutions, Inc. (PSI) is an experienced service provider
            that you can rely on for solutions and help with your Business Apps.
            PSI enables you to build applications that simplify everyday tasks
            without the need for pro developers.
          </p>
          <hr />
          <div className="filler" />
          <Grid stackable className="regular-width" columns={3}>
            {this.icons.map(icon => this.iconColumn(icon))}
          </Grid>
          <div className="filler" />
        </div>
        <div id="dataandbi" className="bg-light-grey">
          <SubHeader
            paddingTop
            marginBottom
            title="Data and Business Intelligence"
          />
          <div className="narrow-width bg-white lone-paragraph rounded-corners text-left">
            <p className="drop-cap">
              The Practical Solutions, Inc. (PSI) Data and Business Intelligence
              program encompasses a wide spectrum of data and analytical
              disciplines. Which are centered on the tactical and strategic use
              of data in support of decision making.
            </p>
            <p>
              PSI holds Microsoft Gold Competencies in both Data Analytics and
              Data Platform. We take a holistic approach in evaluating each data
              challenge and applying the most ideal solution based on enterprise
              data maturity.
            </p>
            <h6>Examples of applied solutions include:</h6>
            <StyledList
              items={[
                "Consolidated and standardized data infrastructure",
                "Seamless access to all data available to each role",
                "Automated operational reports and dashboards that are easy to use, navigate, and drill down",
                "Advanced models that take full advantage of all available data that can predict future events, segment clients for a specific strategy, provide an accurate probability score for a specific response, and many other developments where critical decision support is necessary"
              ]}
            />
          </div>
          <SubHeader
            marginTop
            marginBottom
            title="How do we solve data challenges?"
          />
          <ImgDiv
            title="We cover the entire spectrum of data solutions, including:"
            list={[
              "Consulting and evaluation",
              "Data structuring and consolidation",
              "Data Lake Optimization",
              "Data Cleaning and Mining",
              "End-to-end operational reporting and automation",
              "Data visualization",
              "Descriptive business state analysis",
              "Advanced Analytics and modeling (ex. Propensity, Clustering, Segmentation, Predictive, Scoring)"
            ]}
            image={require("../assets/imgDivs/data-bi-1.png")}
          />
          <div className="filler" />
          <ImgDiv
            right
            title="Our team are experts in the following tools and platforms:"
            list={[
              "Microsoft Azure (including all services such as text analytics, cognitive services, and others)",
              "Power BI, Tableau, QuickSite, KNIME Analytics, SAP BusinessObjects, and various other BI visualization software.",
              "IBM Cognos components",
              "SAS and SPSS",
              "Business Objects",
              "Oracle, Siebel, and Sybase",
              "Adobe Analytics, IBM TeaLeaf, Webtrends, and Google Analytics",
              "Social Media Aggregators"
            ]}
            image={require("../assets/imgDivs/data-bi-2.jpg")}
          />
          <div className="filler" />
        </div>
      </div>
    );
  }
}

export default Solutions