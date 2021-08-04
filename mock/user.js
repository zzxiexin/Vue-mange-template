
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}
const remoteRoutes = [
  {
    path: '/',
    children: [{
      path: 'dashboard',
    }]
  },

  {
    path: '/example',
    children: [
      {
        path: 'table',
      },
      {
        path: 'tree',
      }
    ]
  },

  {
    path: '/form',
    children: [
      {
        path: 'index',
      }
    ]
  },

  {
    path: '/nested',
    children: [
      {
        path: 'menu1',
        children: [
          {
            path: 'menu1-1',
          },
          {
            path: 'menu1-2',
            children: [
              {
                path: 'menu1-2-1'
              },
              {
                path: 'menu1-2-2'
              }
            ]
          },
          {
            path: 'menu1-3',
          }
        ]
      },
      {
        path: 'menu2'
      }
    ]
  },

  {
    path: 'external-link',
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/'
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]
const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin',
    routes: remoteRoutes
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor',
    routes: remoteRoutes
  }
}

module.exports = [
  // user login
  {
    url: '/vue-admin-template/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }

      return {
        code: 20000,
        data: token
      }
    }
  },

  // get user info
  {
    url: '/vue-admin-template/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/vue-admin-template/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
