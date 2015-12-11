export default {
  messages: {
    header: {
      users: 'Users List',
      guides: 'Guides',
      sections: 'Sections',
      account: 'Account',
      logout: 'Logout',
      login: 'Login'
    },
    guides: {
      'page-title': 'Guides'
    },
    sections: {
      'page-title': 'Sections'
    },
    protected: {
      'page-title': 'Protected Page'
    },
    profile: {
      'page-title': 'Profile - {fullName}',
      'not-found-page-title': 'User profile not found'
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
      login: '/login',
      profile: '/profile/:seed',
      account: '/account'
    }
  }
};
