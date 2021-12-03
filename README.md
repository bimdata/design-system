# BIMData Design System

> BIMData's Design System is an open-source DS. The documentation is available at this url: [design.bimdata.io](https://design.bimdata.io/)

<p align="center">
  <img src="./screenshots/design-system_illustration.png" alt="Design system illustration" />
</p>

## Used by

- [BIMData Viewer](https://www.npmjs.com/package/@bimdata/viewer)
- [BIMData Viewer SDK](https://github.com/bimdata/bimdata-viewer-sdk)
- BIMData Marketplace (coming soon..)
- [BIMData Platform](https://platform.bimdata.io)

## :runner: Getting started

```
npm i @bimdata/design-system
```

## :raising_hand: Compatibility

BIMData Design System is a library compatible with Vue 2 and Vue 3.

## :open_hands: Contributing

We are always on the lookout for contributors to help us fix bugs, create new features, or help us improve project documentation. If you are interested, feel free to create a [PR](https://github.com/bimdata/design-system/pulls) or open a [discussion](https://github.com/bimdata/design-system/discussions) on this topic.

## Project setup

If you want to dev on the design system, follow these instruction:

```
npm install

### Compiles and hot-reloads for development
npm run serve

### Compiles and minifies for production
npm run build

### Run your tests
npm run test

### Lints and fixes files
npm run lint
```

## :package: Publish / :rocket: Deploy

### Publish new version

To publish & deploy a new design-system version checkout to `develop` branch then:

```
./deploy.sh
```

`deploy.sh` is an helper to deploy a new released version on master.

The script take care of all the tricky things for you so you should always use it for deployment unless you have to perform
a specific action (like bumping an old release version).
If you do need to perform such action, please refer to the next section.

### Semantic release

This repo use semantic-release for tag management and deployment.

It is possible to automatically publish a new npm package from the semantics of a commit message.
The keywords are `MAJOR`, to publish a major version (X.0.0), `MINOR`, to publish a minor version (1.X.0), and `PATCH`, to publish a fix (1.0.X).

They must correspond to the following syntax:

```
/(MAJOR|MINOR|PATCH): .*/
```

Example :

```bash
git commit -m "MINOR: explain the new feature to deploy"
```

The branches on which it is possible to publish are the following:

| Branches      |      Git tag      | Npm version             |   Env   |
| ------------- | :---------------: | ----------------------- | :-----: |
| develop       | 1.3.0-rc.1 **\*** | 1.0.3-rc.1<br>tag: next | staging |
| release/X.X.x |       1.1.6       | 1.1.6<br>tag: 1.1.x     |         |
| master        |       1.2.8       | 1.2.8<br>tag: latest    |  prod   |

**\*** The `develop` branch will only release `rc.x` in succession until the release candidate or a higher version has been deployed to `master`.

For Merging this branches together, and to avoid any unexpected behavior, use `--no-ff` git merge option.
After deploying a new latest tag with master branch, merge master into develop to update `package.json` and `CHANGELOG.md`.
