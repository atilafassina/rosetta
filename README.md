This is an opinionated starter template for [Next.JS](https://github.com/zeit/next.js) projects that aim to have multi-language routes, plus other stack decisions to get you closer to the point of simply writing your app.

> ❗️This project runs on a Custom Server until NextJS supports routes `Rewrite()` on stable releases. Using a Custom Server carries a series of tradeoffs that you must evaluate according to your project neccessities, **it is definitely not recommended for everyone**.

## Stack

- [EmotionCSS](https://github.com/emotion-js/emotion)
- [Typescript](https://github.com/microsoft/TypeScript)
- [Nodemon](https://github.com/remy/nodemon)

## Getting started

Clone this project into the destination directory:

```bash
git@github.com:atilafassina/nextjs-multilang-starter.git {{dest_dir}}
```

Navigate into your project‘s directory and install the depedencies

```bash
cd {{dest_dir}} && yarn
```

## Development

| Task         | Description                                                                                 |
| ------------ | ------------------------------------------------------------------------------------------- |
| `server-dev` | Starts the development server with Nodemon so changes to the back-end restart the process.† |
| `dev`        | Starts the development server for Next.JS with the custom server.                           |
| `build`      | Compiles the application for production deployment                                          |
| `start`      | Starts the production server                                                                |

†: Hot reloading does not work in this mode

## Usage

For client-side only development:

```bash
yarn dev
```

For fullstack or server-side development:

```bash
yarn server-dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You‘re now ready to start making changes to your app.

## Configuration

| Key                  | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| `supportedLanguages` | An array of languages that are supported by the application† |
| `defaultLanguage`    | Which language is served on the apps root (`/`)              |

†: The `slug` for the language route is taken from this array.

## Directory Architecture

> TBD
