## Contributing

Any contribution is welcomed, be it an issue found, a feature you would like to see, to any pull request you wish to make.

* [Bug Report](https://github.com/GustavoFenilli/formkit-inertify/issues/new?assignees=GustavoFenilli&labels=bug&template=bug_report.md)
* [Feature Request](https://github.com/GustavoFenilli/formkit-inertify/discussions/new?category=ideas)
* [Pull Request](https://github.com/GustavoFenilli/formkit-inertify#setup-local)

## Setup Local

If you wish to make a pull request, you can test out your feature by following these steps.

1. Install [docker](https://docs.docker.com/get-docker/)
2. Clone this [repository](https://github.com/GustavoFenilli/formkit-inertify)
3. Rename the file `.env.example` to `.env`
4. Run `docker run -it --rm --user="node" -v "$PWD":/usr/src/app -w /usr/src/app node:16 npm install`
5. Run `docker compose up -d`
6. Create a branch with the correct name ( like feature/magic or fix/dumb-error )

And that is it! quite simple right? now you can make your changes and send a PR.
