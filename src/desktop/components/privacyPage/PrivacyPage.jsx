import React from 'react';
import {
  PageWrapper,
  PageHeader,
  HeaderTextBox,
  HeaderText,
  PageBodyHeader,
  PageBody,
  PageContentWrapper,
  PageBodyContent,
  PageBodyParagraph,
  InlineLink,
} from './styles/PrivacyPage';

const PrivacyPage = () => (
  <PageWrapper>
    <PageHeader>
      <PageContentWrapper>
        <HeaderTextBox>
          <HeaderText>Privacy Policy</HeaderText>
        </HeaderTextBox>
      </PageContentWrapper>
    </PageHeader>
    <PageBody>
      <PageContentWrapper>
        <PageBodyContent>
          <PageBodyParagraph>
            At UW Flow, accessible from{' '}
            <a
              href="https://uwflow.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              uwflow.com
            </a>
            , one of our main priorities is the privacy of our visitors. This
            Privacy Policy document outlines information we collected and how we
            use it. If you have additional questions or require more information
            about our Privacy Policy, do not hesitate to contact us through
            email at info@uwflow.com.
          </PageBodyParagraph>
          <PageBodyHeader>Log Files</PageBodyHeader>
          <PageBodyParagraph>
            UW Flow follows a standard procedure of using log files. These files
            log visitors when they visit websites. All hosting companies do this
            and a part of hosting services' analytics. The information collected
            by log files include internet protocol (IP) addresses, browser type,
            Internet Service Provider (ISP), date and time stamp, referring/exit
            pages, and possibly the number of clicks. These are not linked to
            any information that is personally identifiable. The purpose of the
            information is for analyzing trends, administering the site,
            tracking users' movement on the website, and gathering demographic
            information. If you choose to upload a transcript, we do not store
            any information related to marks or GPA. If you should choose to
            upload a schedule, we will store its associated information.
          </PageBodyParagraph>
          <PageBodyHeader>Cookies and Web Beacons</PageBodyHeader>
          <PageBodyParagraph>
            Like any other website, UW Flow uses 'cookies'. These cookies are
            used to store information including visitors' preferences, and the
            pages on the website that the visitor accessed or visited. The data
            are used to optimize the users' experience by customizing our web
            page content based on visitors' browser type and/or other
            information.
          </PageBodyParagraph>
          <PageBodyHeader>Third Party Services</PageBodyHeader>
          <PageBodyParagraph>
            At UW Flow, we use a host of open source technologies and external
            libraries that process, but do not store your data. We also use
            third party authentication plugins and software from Google and
            Facebook.
          </PageBodyParagraph>
          <PageBodyHeader>Third Party Privacy Policies</PageBodyHeader>
          <PageBodyParagraph>
            Third Party Privacy Policies UW Flow's Privacy Policy does not apply
            other software. Thus, we are advising you to consult the respective
            Privacy Policies of these third parties for more detailed
            information. This may include their practices and instructions about
            how to opt-out of certain options. You may find a complete list of
            these Privacy Policies and their links here:{' '}
            <a
              href="https://facebook.com/about/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              facebook.com/about/privacy
            </a>
            ,{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              policies.google.com/privacy.
            </a>{' '}
            You can choose to disable cookies through your individual browser
            options. More detailed information regarding cookie management with
            specific web browsers can be found at the browser’s websites.
          </PageBodyParagraph>
          <PageBodyHeader>Information Regarding Children</PageBodyHeader>
          <PageBodyParagraph>
            UW Flow does not knowingly collect any Personal Identifiable
            Information from children under the age of 13. If you think that
            your child provided this kind of information on our website, we
            strongly encourage you to contact us immediately and we will do our
            best efforts to promptly remove such information from our records.
          </PageBodyParagraph>
          <PageBodyHeader>Online Privacy Policy Only</PageBodyHeader>
          <PageBodyParagraph>
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect in UW Flow. This policy is not
            applicable to any information collected offline or via channels
            other than this website.
          </PageBodyParagraph>
          <PageBodyHeader>Consent</PageBodyHeader>
          <PageBodyParagraph>
            By using our website, you hereby consent to our Privacy Policy and
            agree to its Terms and Conditions.
          </PageBodyParagraph>
        </PageBodyContent>
      </PageContentWrapper>
    </PageBody>
  </PageWrapper>
);

export default PrivacyPage;
