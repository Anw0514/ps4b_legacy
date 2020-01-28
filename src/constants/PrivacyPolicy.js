import React, { Component } from "react";
import SubHeader from "../reusable/SubHeader";
import StyledList from "../reusable/StyledList";

class PrivacyPolicy extends Component {
  render() {
    return (
			<div className='regular-section text-left'>
				<SubHeader marginBottom title='Practical Solutions, Inc. Privacy Policy' />
				<p>
					Practical Solutions, Inc. (“PSI”) takes your privacy very seriously, and as such
					has adopted the following Privacy Policy for the website www.ps4b.com (the
					“Site”). Please read through this privacy statement concerning any information
					we may collect about you.
				</p>
				<p>
					Practical Solutions, Inc. (“PSI”) takes your privacy very seriously, and as such
					has adopted the following Privacy Policy for the website www.ps4b.com (the
					“Site”). Please read through this privacy statement concerning any information
					we may collect about you.
				</p>
				<p>
					This Privacy Policy may be revised at any time. PSI will display the latest
					revision date at the end of the statement. Your continued use of the Site after
					the notice is published constitutes your acceptance of the revised Privacy
					Policy.
				</p>
				<p>
					This privacy policy applies solely to information collected by the Site. It will
					notify you of the following:
				</p>
				<StyledList
					indented
					items={[
						"What choices are available to you regarding the use of your data.",
						"The security procedures in place to protect the misuse of your information.",
						"How you can correct any inaccuracies in the information.",
						"Information Collection, Use, and Sharing."
					]}
				/>
				<p>
					PSI is the sole owner of the information collected on this site. PSI only has
					access to/collect information that you voluntarily provide via email, a contact
					form on the Site, or other direct contact from you. PSI will not sell or rent
					this information to anyone.
				</p>
				<p>
					PSI will use your information to respond to you regarding the reason you
					contacted us, and to address your business needs. PSI will not share your
					information with any third party outside of the organization, other than as
					necessary to fulfill your request, e.g. to provision a subscription.
				</p>
				<p>
					Unless you ask to opt out, we may contact you via email in the future to tell
					you about specials, new products or services, or notify you of changes to this
					privacy policy.
				</p>
				<p>
					The Site is intended for use by adults only. The content on this Site is
					business-oriented and not intended for distribution or consumption by children.
				</p>
				<h5 className='m-top-3'>Information Security, Access, and Control</h5>
				<p>
					You may opt out of any future contacts from us at any time. You can do the
					following at any time by contacting us via email at admin@ps4b.com or phone
					+1-202-239-6247:
				</p>
				<StyledList
					indented
					items={[
						"See what data we have about you, if any.",
						"Change/correct any data we have about you.",
						"Have us delete any data we have about you.",
						"Express any concern you have about our use of your data.",
						"Inquire about the current security in place regarding your data."
					]}
				/>
				<p>
					We take strong precautions to protect your information. When you submit
					sensitive information via the Site, your information is protected both online
					and offline.
				</p>
				<p>
					Understand that no system or digital environment can be made totally
					invulnerable to unauthorized access. However, PSI with its background in
					cybersecurity uses the most current and reliable industry standards and
					procedures to transport and store data in the cloud.
				</p>
				<p>
					Wherever we collect sensitive information (such as credit card data), that
					information is encrypted and transmitted to us in a secure way. You can verify
					this by looking for a lock icon in the address bar and looking for "https" at
					the beginning of the address of the Web page.
				</p>
				<p>
					While we use current encryption technology to protect sensitive information
					transmitted online, and we also protect your information offline. Only employees
					who need the information to perform a specific job (for example, billing or
					customer service) are granted access to personally identifiable information. The
					computers/servers in which we store personally identifiable information are kept
					in a secure environment.
				</p>
				<p>
					While PSI does not usually store sensitive information, it is our policy to
					provide immediate notification if any of your sensitive information is
					compromised.
				</p>
				<h5 className='m-top-3'>Cookies</h5>
				<p>
					We may use "cookies" on this site. A cookie is a piece of data stored on a site
					visitor's hard drive to help us improve your access to our site and identify
					repeat visitors. For instance, we may use cookies to estimate the size of our
					audience: Each web browser accessing the Site is given a unique cookie which is
					then used to determine the size of our audience and the extent of repeat usage.
					Cookies can also enable us to track and target the interests of our users to
					enhance their experience on our site. We use cookies to study trends and
					patterns in our Site visitors, which enable us to make strategic or tactical
					decisions based on what we find. Usage of a cookie is in no way linked to any
					personally identifiable information on our site.
				</p>
				<p>
					By using the Site it means that you have accepted the use of cookies in
					accordance with this Privacy Policy.
				</p>
				<p>
					Most web browsers automatically accept cookies. Most browsers will also allow
					you to change the configuration to refuse all cookies or provide a notification
					when a cookie is sent.
				</p>
				<p>
					If you do not accept the use of cookies you may disable them by changing your
					browser configuration so that cookies from this Site cannot be placed on your
					computer or mobile device. Please use your browser’s help feature or search for
					your specific browser’s configurations that would suite your privacy
					preferences. Please note that disabling cookies or cookie categories does not
					delete any existing cookies that may be on your browser and that is typically a
					separate feature. Again, please check on your specific web browsers
					configurations, settings, and features to understand how to configure the
					handling of cookies to suite your privacy preferences.
				</p>
				<p>
					This website may contain links to other sites, such as our partners or
					subsidiaries of PSI. Please be aware that we are not responsible for the content
					or privacy practices of such other sites. We encourage our users to be aware
					when they leave our site and to read the privacy statements of any other site
					that collects personally identifiable information.
				</p>
				<p>
					If you feel that we are not abiding by this privacy policy, or have questions,
					concerns, or suggestions you should contact us immediately via telephone at
					202-239-6247 or via email at: admin@ps4b.com.
				</p>
				<p className='fs--1 text-center'>
					This Privacy Policy was last updated on September 24, 2019.
				</p>
			</div>
		);
  }
}

export default PrivacyPolicy;