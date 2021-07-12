export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  facebook?: string;
  /**
   * full url, no username
   */
  twitter?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * name and id of the mailchimp email field
   */
  mailchimpEmailFieldName?: string;
  /**
   * Postcode
   */
  mailchimpPostcode?: string;
  /**
   /**
   * Postcode
   */
  mailchimpSubscribe?: string;
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
}

const config: WebsiteConfig = {
  title: 'ACC Blog',
  description: 'A collection of articles relevant to parents with school-age children',
  coverImage: 'img/blog-cover.jpg',
  logo: 'img/acc-logo.png',
  lang: 'en',
  siteUrl: 'https://www.acc.edu.au/blog',
  facebook: 'https://www.facebook.com/',
  twitter: 'https://twitter.com/',
  showSubscribe: true,
  mailchimpAction: 'https://acc.us19.list-manage.com/subscribe/post?u=dc5bb8a3985648bbcb67aa739&amp;id=17f25e770f',
  mailchimpName: 'FEMAIL',
  mailchimpEmailFieldName: 'EMAIL',
  mailchimpPostcode: 'POSTCODE',
  mailchimpSubscribe: 'BLOGSUBSC',
  googleSiteVerification: 'GoogleCode',
  footer: '',
};

export default config;
