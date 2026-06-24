# BIMData Design System

> BIMData's Design System is an open-source DS. The documentation is available here: [design.bimdata.io](https://design.bimdata.io/)

<p align="center">
  <img src="./design-system.png" alt="BIMData Design System" />
</p>

## Used by

- [BIMData Viewer](https://www.npmjs.com/package/@bimdata/viewer)
- [BIMData Viewer SDK](https://github.com/bimdata/bimdata-viewer-sdk)
- [BIMData Marketplace](https://marketplace.bimdata.io/)
- [BIMData Platform](https://platform.bimdata.io)

## :runner: Getting started

```
npm i @bimdata/design-system
```

## :raising_hand: Compatibility

BIMData Design System is a library compatible with Vue 3.

## :open_hands: Contributing

We are always on the lookout for contributors to help us fix bugs, create new features, or help us improve project documentation. If you are interested, feel free to create a [PR](https://github.com/bimdata/design-system/pulls) or open a [discussion](https://github.com/bimdata/design-system/discussions) on this topic.

## Project setup

If you want to dev on the design system, follow these instruction:

```
npm install

### Compiles and hot-reloads for development
npm run dev

### Run your tests
npm run test
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

| Branches      |       Git tag       | NPM version               |   Env   |
| ------------- | :-----------------: | ------------------------- | :-----: |
| develop       | 1.3.0-beta.1 **\*** | 1.0.3-beta.1<br>tag: next | staging |
| release/X.X.x |        1.1.6        | 1.1.6<br>tag: 1.1.x       |         |
| master        |        1.2.8        | 1.2.8<br>tag: latest      |  prod   |

**\*** The `develop` branch will only release `beta.x` in succession until the release candidate or a higher version has been deployed to `master`.

For Merging this branches together, and to avoid any unexpected behavior, use `--no-ff` git merge option.
After deploying a new latest tag with master branch, merge master into develop to update `package.json` and `CHANGELOG.md`.

## MCP server for agents

This repository includes an HTTP MCP server to expose design-system documentation for coding agents.
It indexes components, guidelines, and CSS classes from the documentation sources.

- Server location: `mcp-server`
- Components source indexed: `src/web/views/Components`
- Guidelines source indexed: `src/web/views/Guidelines`
- CSS source indexed: `src/assets/css`

From the repository root:

```bash
npm run mcp:start
```

Useful commands:

- `npm run mcp:dev` starts server in watch mode
- `npm run mcp:smoke` runs a local smoke test for list/search/detail flows

The MCP server uses streamable HTTP transport at `http://127.0.0.1:3333/mcp`.
Health endpoint: `http://127.0.0.1:3333/health`.

For tool details, see `mcp-server/README.md`.

## License

BIMData Design System is published under the term of MIT License (see [LICENSE](./LICENSE)).
