const config = {
    branches: ['main'],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        ["@semantic-release/git", {
            "assets": ["dist/*.js", "dist/*.js.map"],
            "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
            // confines the message commit format. If it's a chore, they skip the CI indicates to github 
            // that its not supposed to trigger any workflow
        }],
        '@semantic-release/github'
    ]
};

module.exports = config;