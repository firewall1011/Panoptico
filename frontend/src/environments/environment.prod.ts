export const environment = {
  production: true,
  services: {
    backend: {
      BASE_URL: 'https://politicaltracker-mac413.herokuapp.com',
      GET_PARTIES_PATH: '/party',
      GET_PARTIES_WITH_MEMBERS_PATH: '/party?members=1',
      GET_CONGRESSPEOPLE_PATH: '/congressperson',
      GET_MONITOR_VOTINGS: '/monitor',
      GET_MONITOR_SUBJECTS: '/subjects-monitor/',
      GET_MONITOR_LAW_COUNTS: '/law-counts',
    },
  },
};
