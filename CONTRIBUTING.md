## Contributing Guidelines

Contributions are welcome! Feel free to open an issue or submit a pull request if you have a way to improve this project.

Make sure your request is meaningful and you have tested the app locally before submitting a pull request.

This documentation contains a set of guidelines to help you during the contribution process.

### Need some help regarding the basics?

You can refer to the following articles on the basics of Git and GitHub in case you are stuck:

- [Forking a Repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)
- [Cloning a Repo](https://help.github.com/en/desktop/contributing-to-projects/creating-an-issue-or-pull-request)
- [How to create a Pull Request](https://opensource.com/article/19/7/create-pull-request-github)
- [Getting started with Git and GitHub](https://towardsdatascience.com/getting-started-with-git-and-github-6fcd0f2d4ac6)
- [Learn GitHub from Scratch](https://lab.github.com/githubtraining/introduction-to-github)

### Clone the repository

```
git clone https://github.com/DenverCoder1/unicode-formatter.git
cd unicode-formatter
```

### Running the app locally

Open `index.html` to run the project locally

You may use an extension such as Live Server for VS Code to enable helpful development features.

## Formatting

This project uses Prettier internally to keep the formatting consistent.

To install Prettier locally, make sure you have npm installed, and run:

```
npm install prettier
```

To format the code, run:

```
prettier --write "**/*.{md,css,js}"; prettier --write "**/*.html" --print-width 500
```

Note that the `--print-width` option is used to prevent Prettier from breaking up the HTML code into multiple lines.
