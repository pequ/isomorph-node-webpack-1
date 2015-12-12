export default {
  messages: {
    header: {
      users: 'Users List',
      guides: 'Guides',
      account: 'Account',
      logout: 'Logout',
      login: 'Login'
    },
    guides: {
      'page-title': 'Guides'
    },
    protected: {
      'page-title': 'Protected Page'
    },
    profile: {
      'page-title': 'Profile - {fullName}',
      'not-found-page-title': 'User profile not found'
    },
    section: {
      'page-title': 'ja'
    },
    users: {
      'page-title': 'Users',
      title: 'Some random users',
      email: 'Email address',
      actions: 'Actions',
      add: 'Add random user',
      profile: 'Profile'
    },
    login: {
      help: 'Any credentials will work, it creates a fake session for example.',
      username: {
        label: 'Login',
        placeholder: 'example@app.com'
      },
      password: {
        label: 'Password'
      },
      submit: 'Submit'
    },
    routes: {
      users: '/users',
      guides: '/guides',
      sections: '/sections',
      section: '/sections/:id',
      login: '/login',
      profile: '/profile/:seed',
      account: '/account'
    }
  }
};
