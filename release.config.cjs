/* eslint-disable no-useless-escape */
const branch = process.env.GITHUB_REF.split("/").pop();

const config = {
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        releaseRules: [
          { tag: "PATCH", release: "patch" },
          { tag: "MINOR", release: "minor" },
          { tag: "MAJOR", release: "major" },
        ],
        parserOpts: {
          headerPattern: /^(PATCH|MINOR|MAJOR): (.*)$/,
          headerCorrespondence: ["tag", "subject"],
        },
      },
    ],
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/npm",
      {
        tarballDir: "release",
      },
    ],
    [
      "@semantic-release/github",
      {
        assets: "release/*.tgz",
      },
    ],
    "@semantic-release/git",
  ],
  preset: "eslint",
  branches: [
    "master",
    {
      name: "develop",
      channel: "next",
      prerelease: "beta",
    },
    {
      name: "release/[0-9]+(.[0-9]+)?.(x|X)",
      channel: '${name.replace(/^release\\//g, "")}',
      range: '${name.replace(/^release\\//g, "")}',
    },
  ],
};

if (branch === "master") {
  config.plugins.splice(4, 0, "@semantic-release/changelog");
}

module.exports = config;
