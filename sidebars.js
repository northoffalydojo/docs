module.exports = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'In-person sessions',
      collapsed: false,
      items: ['registration-process', 'age', 'inperson-register'],
    },
    {
      type: 'category',
      label: 'Online sessions',
      items: [
        'what-does-my-child-learn', 'registration-process', 'age', 'invalid-email', 'session-duration',
        {
          Booking: [
            'cant-book-ticket',
            'minimium-tickets-2',
            'latest-booking-link',
          ],
        },
        '',
        {
          type: 'category',
          label: 'Volunteering',
          items: [
            'volunteering-without-garda-vetting',
            'garda-vetting-process',
            'how-to-volunteer',
          ],
        },
        '',
        {
          type: 'category',
          label: 'Gettting in touch',
          items: [
            {
              type: 'doc',
              id: 'no-autoreply',
              label: 'I did not get an autoreply when I sent an email',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Emails',
      items: ['move-to-inbox-gmail', 'subscribed-but-not-receiving-emails'],
    },
  ],
