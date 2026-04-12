---
date: '2026-01-01'
title: 'iOS Software Engineer II'
company: 'CNN'
location: 'Atlanta, GA'
range: 'January 2026 - Present'
url: 'https://www.cnn.com/'
---

- Improved app build time by ~30% by configuring Xcode 26 compilation caching and implementing build-path optimizations
- Reduced app startup time by ~23% by parallelizing user, subscription, and SDK initialization and sequencing flows
- Automated the release workflow through version bumps after release cuts, GitHub Actions configurations, and phased App Store rollouts
- Added Firebase Performance instrumentation for the Watch tab, articles, and push deep links; documented startup metrics and release management
- Shipped iOS PR code coverage, binary-size gates against the develop branch, and updated Bitrise CI/CD, onboarding, and README documentation
- Removed unused Amazon Ads SDK, non-native scripts and leftover artifacts, and dead code to modernize the native codebase
- Fixed critical Firebase Crashlytics issues, including GDPR privacy text on app resume and offline/airplane-mode refresh and cold-launch stability
- Replaced Node-based secret loading and Jira build notes with bash/curl on CI to trim toolchain dependencies
- Served as iOS release manager for App Store releases (26.7.x), managing phased rollout, listings, and regression handoff
- Enabled local Bitrise workflows to run the same unit-test step as CI with secrets configured before PRs can be opened
