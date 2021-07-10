module.exports = {
    docs: [
      'introduction',
      {
        type: 'category',
        label: 'In-person sessions',
        collapsed: false,
        items: ['in-person-sessions/registration-process', 'in-person-sessions/register', 'in-person-sessions/registration-process'],
      },
      {
        type: 'category',
        label: 'Online sessions',
        items: [
          'online-sessions/curriculum', 'online-sessions/registration-process', 'online-sessions/age', 'online-sessions/invalid-email', 'online-sessions/duration',
          {
            Booking: [
              'online-sessions/cant-book-ticket',
              'online-sessions/booking/minimium-tickets-2',
              'online-sessions/booking/booking-link',
            ],
          },
          '',
          {
            type: 'category',
            label: 'Volunteering',
            items: [
              'volunteering/volunteering-without-garda-vetting',
              'volunteering/garda-vetting-process',
              'volunteer/volunteering-with-north-offaly-dojo',
            ],
          },
          '',
          {
            type: 'category',
            label: 'Contacting North Offaly Dojo',
            items: [
              {
                type: 'doc',
                id: 'contacting-us/no-autoreply',
                label: 'I did not get an autoreply when I sent an email',
              },
            ],
          },
        ],
      },
      {
        type: 'category',
        label: 'Emails',
        items: ['emails/move-to-inbox-gmail', 'emails/subscribed-but-not-receiving-emails'],
      },
    ],
