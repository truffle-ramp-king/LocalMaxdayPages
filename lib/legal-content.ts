export type LegalDocument = {
  kind: 'privacy' | 'terms'; title: string; description: string; introduction: string;
  sections: { id: string; title: string; paragraphs: string[] }[];
};

export const privacyPolicy: LegalDocument = {
  kind: 'privacy', title: 'Privacy Policy',
  description: 'How information moves through your MaxDay experience, and the choices available to you.',
  introduction: 'MaxDay PTE LTD (“MaxDay”, “we”, “us”) is responsible for the personal information described in this policy. This policy covers MaxDay’s website and AI creative workflows. The information involved depends on the features you use, the material you provide, and the services you connect.',
  sections: [
    { id: 'scope', title: 'Scope of this policy', paragraphs: [
      'MaxDay connects creative steps such as scripts, images, video, voice, and music in a shared workflow. This policy covers information handled to provide those experiences and respond to enquiries.',
      'Separate notices or a written agreement may apply to an organization’s workspace or a particular feature. Third-party websites and independently connected services have their own privacy policies.'
    ] },
    { id: 'information', title: 'Information you provide', paragraphs: [
      'Account and contact information can include the registration details you submit, your profile, organization, and messages you send for assistance. Purchase records can include the plan or credits purchased and the status of a transaction.',
      'Creative content can include prompts, scripts, reference images, product information, audio, video, generated results, and workflow settings. Material you upload may contain personal information about you or other people. Provide only material you are authorized to use and share.',
      'If you connect another service, the information available depends on the permissions you grant. Review those permissions before connecting a personal, client, or organization account.'
    ] },
    { id: 'technical-data', title: 'Website and technical information', paragraphs: [
      'Requests to the website expose technical information to its hosting provider, such as an IP address, browser details, request time, and requested address. The GitHub Pages preview is hosted by GitHub and is also subject to GitHub’s privacy statement.',
      'The public marketing pages do not provide an account registration or payment form. Links to the MaxDay application take you to a separate service. Authentication, payment, and other application features may use cookies or similar storage under the notices provided there.',
      'Browser settings let you control cookies and site storage. Blocking storage that a feature needs may affect that feature. External images or links can also cause your browser to communicate with the relevant provider.'
    ] },
    { id: 'purposes', title: 'How information is used', paragraphs: [
      'Information is processed to respond to your requests, run the creative steps you select, manage access and purchases, troubleshoot failures, and protect accounts and the service against misuse.',
      'Where communications are sent, service messages concern your account or a request. You can use the unsubscribe instructions in promotional messages to stop receiving that type of communication.',
      'MaxDay does not currently use your uploaded content to train AI models. If we introduce such use in the future, we will update this policy and provide notice before that use begins, explain the content involved and available choices, and obtain consent where required by law. This statement describes MaxDay’s own training practices; processing by a selected third-party model provider is subject to the rules described below.'
    ] },
    { id: 'providers', title: 'AI models and connected services', paragraphs: [
      'A workflow may need to send prompts, reference assets, and other relevant inputs to the model or service that performs a selected step. Different providers can have different processing, retention, and permitted-use rules. Review the rules for a model before sending confidential or personal material.',
      'Connecting a destination or sharing a result can make content available outside MaxDay. Check the destination, recipients, and sharing settings before running or publishing a workflow.'
    ] },
    { id: 'sharing', title: 'When information is shared', paragraphs: [
      'Information may need to be disclosed to providers supporting hosting, generation, account access, payments, or customer support, to the extent required for the relevant activity.',
      'People given access to a shared workspace may be able to view its content. Publicly published material can be copied by other people even if you later remove the original.',
      'Information may also be disclosed when legally required, to address fraud or security incidents, to protect legal rights, or in connection with a transfer of the business, subject to applicable legal safeguards.'
    ] },
    { id: 'retention', title: 'Retention and security', paragraphs: [
      'Retention depends on the purpose of processing, the service involved, your agreement, and applicable legal requirements. Some records may need to be retained for billing, dispute resolution, or compliance after an account closes.',
      'Deleting a workflow or account does not necessarily remove content already exported, published, or held by another provider. Ask about the applicable retention period before uploading material with specific deletion requirements.',
      'No internet service can guarantee absolute security. Keep account credentials private, restrict workspace access to the people who need it, and promptly report suspected unauthorized access through your established MaxDay support channel.'
    ] },
    { id: 'international', title: 'International processing', paragraphs: [
      'Online hosting and AI providers may process information in countries other than your own. The protections available can differ between countries. Where applicable law requires safeguards for a transfer, those requirements apply to the relevant processing.'
    ] },
    { id: 'choices', title: 'Your privacy rights and choices', paragraphs: [
      'Depending on applicable law, you may have rights to access, correct, delete, or receive a copy of your personal information, restrict or object to processing, withdraw consent, or opt out of certain uses. A request may be subject to identity verification and lawful exceptions.',
      'Use your established MaxDay support or account contact to make a request, identify the information or account concerned, and describe the action you seek. Do not send account passwords or unnecessary identity documents.',
      'Where applicable, you may raise a concern with your local data protection authority or appeal a decision through the contact handling your request. Withdrawing consent does not affect processing already lawfully performed.'
    ] },
    { id: 'children', title: 'Children’s information', paragraphs: [
      'Eligibility to use the application is governed by the terms supplied with the relevant service. Do not upload a child’s personal information or likeness without the permissions and safeguards required by applicable law.',
      'If you believe a child’s information has been provided improperly, contact MaxDay through your existing support channel so the matter can be investigated.'
    ] },
    { id: 'updates', title: 'Updates and contact', paragraphs: [
      'The date at the top identifies this version. We will provide notice of material changes before they take effect and obtain consent where required by applicable law.',
      'Address privacy requests to MaxDay PTE LTD through the support contact supplied when your account was created or through your organization’s MaxDay representative. Identify your request as a privacy enquiry so it can be directed to the team responsible for personal information.'
    ] }
  ]
};

export const termsOfUse: LegalDocument = {
  kind: 'terms', title: 'Terms & Conditions',
  description: 'The ground rules for creating, collaborating, and using MaxDay responsibly.',
  introduction: 'These Terms & Conditions are between you and MaxDay PTE LTD (“MaxDay”, “we”, “us”) and govern your use of our website and the AI content workflow services that link to these terms. Read them together with the Privacy Policy and the terms presented with your account, purchase, or organization agreement.',
  sections: [
    { id: 'agreement', title: 'Using MaxDay', paragraphs: [
      'By using a service that presents these terms for acceptance, you agree to them. If you do not agree, do not use that service. You must be legally able to enter this agreement and meet the eligibility requirements presented with your account. Use only the access granted to you through MaxDay or your organization. A public marketing page does not by itself grant access to the application, a model, or a paid feature. If you act for an organization, you must have authority to do so.',
      'A separately signed agreement or feature-specific terms govern the matters they expressly cover. Nothing here removes rights that applicable consumer law does not allow to be waived.'
    ] },
    { id: 'accounts', title: 'Accounts and workspace access', paragraphs: [
      'Provide accurate account information, protect your credentials, and notify your established support contact if you suspect misuse. Do not sell, lend, or transfer account access without authorization.',
      'Workspace owners are responsible for deciding who should have access and for ensuring that client material can be used within the workspace. Review permissions when people join or leave your team.'
    ] },
    { id: 'workflows', title: 'Workflows and third-party models', paragraphs: [
      'MaxDay helps connect creative steps across AI models. Available features, generation speeds, model availability, and usage limits can vary. Review the selected model, inputs, destination, and cost before running a workflow or batch.',
      'Third-party models and connected services may impose additional restrictions. You are responsible for complying with the conditions that apply to your chosen service and your intended use of its results. Access to a model does not guarantee its continued availability.'
    ] },
    { id: 'content', title: 'Your inputs and generated content', paragraphs: [
      'You must have the rights and permissions needed for the text, images, audio, video, trademarks, personal information, and other material you submit. That includes permission to process someone’s voice or likeness and to use client assets.',
      'You retain rights you hold in your inputs. To operate a requested workflow, MaxDay and the relevant providers need permission to process, store, transmit, and generate results from those inputs for that purpose.',
      'Rights in generated results depend on applicable law, your agreement, and the selected provider’s terms. AI results may not be unique or eligible for intellectual property protection. Review third-party rights and licensing before commercial use.'
    ] },
    { id: 'review', title: 'Review before publishing', paragraphs: [
      'AI results can be inaccurate, incomplete, or inappropriate. Check factual claims, product descriptions, visual details, licensing, and suitability before relying on or publishing a result.',
      'For virtual influencers and creator-style advertising, do not invent real customer experiences or imply that a person endorsed a product when they did not. Make sponsorship and synthetic-media disclosures where required by law or the destination platform.',
      'Keep copies of important source material and approved results. A workflow is not a substitute for your own archival or approval process.'
    ] },
    { id: 'conduct', title: 'Acceptable use', paragraphs: [
      'Do not use MaxDay to infringe intellectual property or privacy, impersonate another person deceptively, create non-consensual intimate material, exploit children, commit fraud, threaten or harass people, or otherwise violate applicable law.',
      'Do not introduce malware, attack infrastructure, seek unauthorized access, bypass safety controls or usage limits, or interfere with another user’s service. Use automation only through authorized means.',
      'Do not remove disclosures or provenance information where doing so would violate applicable law, provider requirements, or the rights of another person.'
    ] },
    { id: 'payment', title: 'Fees, credits, and subscriptions', paragraphs: [
      'The price, credit consumption, billing interval, and any renewal, expiry, cancellation, or refund conditions must be presented with the relevant purchase or service agreement. Review those conditions before paying or starting a chargeable workflow.',
      'Generation costs can depend on a third-party provider and the settings you choose. Running a batch can incur charges for multiple steps. Do not assume that unused credits roll over or that a payment automatically renews unless the applicable purchase terms say so.',
      'If a recurring plan is offered, follow the cancellation method stated with that plan or contact your established MaxDay support representative. Account deletion and billing cancellation may require separate actions. Statutory refund and cancellation rights remain applicable.'
    ] },
    { id: 'platform-rights', title: 'Platform intellectual property', paragraphs: [
      'Rights in MaxDay’s software, interface, branding, and documentation belong to their respective owners. Access to the service does not transfer those rights to you.',
      'Do not copy, redistribute, reverse engineer, or commercially exploit the platform except as authorized by your agreement or permitted by applicable law.'
    ] },
    { id: 'reports', title: 'Reporting harmful or infringing content', paragraphs: [
      'Report a concern through your established MaxDay support contact. Identify the material, where it appears, the rights or rule involved, and a way to contact you. Provide only the information needed to investigate.',
      'Access or content may be restricted when necessary to address a violation, security risk, or legal requirement. If you believe a restriction is mistaken, explain the issue and provide relevant supporting information through the same channel.'
    ] },
    { id: 'availability', title: 'Availability and ending use', paragraphs: [
      'The service may be interrupted by maintenance, technical problems, or provider changes. No particular generation result or uninterrupted availability is guaranteed unless expressly agreed in writing.',
      'You may stop using the service. Any outstanding payment, cancellation, export, and deletion obligations are governed by the applicable service agreement and law. Ending access does not erase information that must lawfully be retained.'
    ] },
    { id: 'liability', title: 'Responsibility and legal rights', paragraphs: [
      'You are responsible for your use of the service and for reviewing material you distribute. AI results do not constitute professional advice or a guarantee of accuracy, fitness for a particular purpose, or freedom from third-party claims.',
      'Any warranty exclusions, liability limits, or dispute procedures in your applicable service agreement are subject to mandatory law. These website terms do not introduce a separate arbitration requirement, class-action waiver, or new monetary liability cap.'
    ] },
    { id: 'changes-contact', title: 'Changes and questions', paragraphs: [
      'The date above identifies this version. Changes to an existing service agreement take effect according to that agreement and applicable notice or acceptance requirements.',
      'For questions about your account, a purchase, or these terms, contact the MaxDay representative or support channel provided with your account. Read the Privacy Policy for information about personal data.'
    ] }
  ]
};
