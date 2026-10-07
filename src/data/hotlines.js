const accessedAt = '2026-10-06';

export const agencies = [
  {
    id: 'doh',
    name: 'Department of Health (DOH)',
    phones: [],
    emails: [],
    website: null,
    referenceIds: [],
    accessedAt
  },
  {
    id: 'popcom',
    name: 'Commission on Population and Development (CPD / POPCOM)',
    phones: [],
    emails: [],
    website: null,
    referenceIds: [],
    accessedAt
  },
  {
    id: 'pcw',
    name: 'Philippine Commission on Women (PCW)',
    phones: [],
    emails: [],
    website: null,
    referenceIds: [],
    accessedAt
  },
  {
    id: 'dswd',
    name: 'Department of Social Welfare and Development (DSWD) WiSUPPORT',
    phones: [
      {
        label: 'Text hotline',
        display: '0918-912-2813',
        href: 'tel:+639189122813'
      }
    ],
    emails: [
      {
        display: 'wisupport@dswd.gov.ph',
        href: 'mailto:wisupport@dswd.gov.ph'
      }
    ],
    website: {
      display: 'DSWD WiSUPPORT FAQs',
      href: 'https://ekwentomo.dswd.gov.ph/faqs/'
    },
    referenceIds: [20],
    accessedAt
  },
  {
    id: 'chr',
    name: 'Commission on Human Rights (CHR)',
    phones: [],
    emails: [],
    website: {
      display: 'CHR Contact Us',
      href: 'https://chr.gov.ph/contact-us/'
    },
    referenceIds: [23],
    accessedAt
  },
  {
    id: 'pnp-wcpc',
    name: 'PNP Women and Children Protection Center (WCPC) / Aleng Pulis',
    phones: [],
    emails: [],
    website: null,
    referenceIds: [],
    accessedAt
  }
];

export const crisisHotlines = [
  {
    id: 'ncmh',
    name: 'National Center for Mental Health (NCMH) Crisis Hotline',
    phones: [
      {
        label: 'Mobile (USAP)',
        display: '0917-899-8727',
        href: 'tel:+639178998727'
      }
    ],
    emails: [],
    website: null,
    referenceIds: [21],
    accessedAt
  },
  {
    id: 'hopeline',
    name: 'Natasha Goulbourn Foundation (NGF) / Hopeline Philippines',
    phones: [
      {
        label: 'Telephone',
        display: '(02) 804-4673',
        href: 'tel:+6328044673'
      },
      {
        label: 'Globe mobile',
        display: '0917-558-4673',
        href: 'tel:+639175584673'
      },
      {
        label: 'Smart mobile',
        display: '0918-873-4673',
        href: 'tel:+639188734673'
      }
    ],
    emails: [],
    website: null,
    referenceIds: [21],
    accessedAt
  },
  {
    id: 'rapha',
    name: 'Rapha Crisis and Trauma Helpline',
    phones: [
      {
        label: 'Mobile',
        display: '0961-718-2655',
        href: 'tel:+639617182655'
      }
    ],
    emails: [
      {
        display: 'cptcsa.helpline@gmail.com',
        href: 'mailto:cptcsa.helpline@gmail.com'
      }
    ],
    website: null,
    referenceIds: [21],
    accessedAt
  },
  {
    id: 'manila-lifeline',
    name: 'Manila Lifeline Centre (MLC)',
    phones: [
      {
        label: 'Telephone',
        display: '(02) 896-9191',
        href: 'tel:+6328969191'
      },
      {
        label: 'Mobile',
        display: '0917-854-9191',
        href: 'tel:+639178549191'
      }
    ],
    emails: [],
    website: null,
    referenceIds: [21],
    accessedAt
  },
  {
    id: 'recovery-hub',
    name: 'Recovery Hub Philippines',
    phones: [
      {
        label: 'Telephone',
        display: '+63 (32) 344-2142',
        href: 'tel:+63323442142'
      }
    ],
    emails: [
      {
        display: 'info@recoveryhub.ph',
        href: 'mailto:info@recoveryhub.ph'
      }
    ],
    website: {
      display: 'Recovery Hub Philippines',
      href: 'https://app.recoveryhub.ph/'
    },
    referenceIds: [21, 23],
    accessedAt
  }
];
