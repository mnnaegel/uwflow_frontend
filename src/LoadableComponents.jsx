import loadable from '@loadable/component';

export const LoadableLandingPage = loadable(() =>
  import(/* webpackPrefetch: true */ './pageSwitches/LandingPageSwitch'),
);

export const LoadableProfilePage = loadable(() =>
  import(/* webpackPrefetch: true */ './pages/profilePage/ProfilePage'),
);

export const LoadableCoursePage = loadable(() =>
  import(/* webpackPrefetch: true */ './pages/coursePage/CoursePage'),
);

export const LoadableProfPage = loadable(() =>
  import(/* webpackPrefetch: true */ './pages/profPage/ProfPage'),
);

export const LoadableExplorePage = loadable(() =>
  import(/* webpackPrefetch: true */ './pages/explorePage/ExplorePage'),
);

export const LoadableNotFoundPage = loadable(() =>
  import(/* webpackPrefetch: true */ './pages/notFoundPage/NotFoundPage'),
);

export const LoadableAboutPage = loadable(() =>
  import(
    /* webpackPrefetch: true */ './pages/aboutPage/AboutPage'
  ),
);

export const LoadablePrivacyPage = loadable(() =>
  import(
    /* webpackPrefetch: true */ './pages/privacyPage/PrivacyPage'
  ),
);

export const LoadableTestPage = loadable(() =>
  import(/* webpackPrefetch: true */ './desktop/components/testPage/TestPage'),
);
