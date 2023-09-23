import { type NextPage } from "next";
import Head from "next/head";

const PrivacyPolicyPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>WoofAi - Privacy Policy</title>
        <meta
          name="WoofAi AI powered dog icon generator"
          content="privacy policy page for dog icon generator app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto my-8 flex max-w-[1024px] flex-col space-y-6 sm:my-12">
        <h2>Privacy Policy</h2>
        <h3>Effective Date: 23 September 2023</h3>
        <h4>1. Introduction</h4>
        <p>
          Welcome to WoofAI, an AI dog icon generator site operated by WoofAI
          Pty Ltd (&quot;WoofAI,&quot; &quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;). This Privacy Policy is designed to help you
          understand how we collect, use, disclose, and safeguard your personal
          information when you use our services.
        </p>
        <h4>2. Information We Collect</h4>
        <p>We may collect the following types of personal information:</p>
        <ol className="space-y-2 pl-6">
          <li>
            a. <strong>User-Provided Information:</strong> When you create an
            account or use our services, you may provide us with information
            such as your name, email address, and payment information.
          </li>
          <li>
            b. <strong>Generated Icons:</strong> The icons and designs you
            create using WoofAI may be stored on our servers.
          </li>
          <li>
            c. <strong>Usage Data:</strong> We collect information about how you
            interact with our website, including your IP address, browser type,
            and the pages you visit.
          </li>
        </ol>
        <h4>3. Use of Information</h4>
        <p>We use your personal information for the following purposes:</p>
        <ol className="space-y-2 pl-6">
          <li>
            a. To provide and improve our services, including generating icons
            and designs.
          </li>
          <li>
            b. To communicate with you regarding your account, orders, and
            customer support inquiries.
          </li>
          <li>
            c. To send you promotional emails and updates about our services,
            provided you have opted in to receive such communications.
          </li>
          <li>
            d. To enforce our Terms of Service and protect our legal rights.
          </li>
        </ol>
        <h4>4. Sharing of Information</h4>
        <p>
          We may share your personal information in the following circumstances:
        </p>
        <ol className="space-y-2 pl-6">
          <li>
            a. With our service providers, who assist us in providing and
            improving our services.
          </li>
          <li>
            b. To comply with legal obligations, such as responding to a
            subpoena or government request.
          </li>
          <li>
            c. In connection with a business transaction, such as a merger or
            acquisition.
          </li>
          <li>d. With your consent or at your direction.</li>
        </ol>
        <h4>5. Security</h4>
        <p>
          We take reasonable measures to protect your personal information from
          unauthorized access, disclosure, or alteration. However, please be
          aware that no method of transmission over the internet or electronic
          storage is completely secure, and we cannot guarantee absolute
          security.
        </p>
        <h4>6. Cookies and Tracking Technologies</h4>
        <p>
          We may use cookies and similar tracking technologies to collect
          information about your browsing behavior on our website. You can
          manage your cookie preferences through your browser settings.
        </p>
        <h4>7. Your Choices</h4>
        <p>
          You have the following choices regarding your personal information:
        </p>
        <ol className="space-y-2 pl-6">
          <li>
            a. <strong>Access and Update:</strong> You can access and update
            your account information through your account settings.
          </li>
          <li>
            b. <strong>Email Preferences:</strong> You can opt out of
            promotional emails by following the instructions provided in the
            email or by contacting us.
          </li>
        </ol>
        <h4>8. Children&apos;s Privacy</h4>
        <p>
          WoofAI is not intended for children under the age of 13. We do not
          knowingly collect personal information from children under 13. If you
          believe that a child under 13 has provided us with personal
          information, please contact us, and we will take steps to remove such
          information.
        </p>
        <h4>9. Changes to this Privacy Policy</h4>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or for other operational, legal, or regulatory
          reasons. The updated Privacy Policy will be posted on our website, and
          the &quot;Effective Date&quot; at the top will indicate when the
          policy was last revised.
        </p>

        <h4>10. Contact Us</h4>
        <p>
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us at:
        </p>
        <p className="pl-6">
          WoofAI Pty Ltd
          <br />
          Sydney, New South Wales
          <br />
          Australia
          <br />
          Email: woof@woofai.com
        </p>

        <p>
          Thank you for choosing WoofAI. We are committed to protecting your
          privacy and providing you with a secure and enjoyable experience on
          our site.
        </p>
      </main>
    </>
  );
};

export default PrivacyPolicyPage;
