# Accessing Router Methods

This code explores how to access various react-router methods from a deeply-nested component. Three primary access methods include passing props, using a wrapper, and calling a hook.

## How To Start

Before you begin, make sure you have the required tools installed on your computer. You can find them [here](https://github.com/ReactBetter/docs/blob/main/install_tools.md).

Make sure you clone this repo on your machine. It will download the entire project for you. Use this command in your terminal where you want to download it:

```
git clone git@github.com:ReactBetter/accessing-router-methods.git
```

After downloading the files, you'll need to install the required React packages.

```
npm install
```

Finally, start the project.

```
npm start
```

This will start the React project on your machine. If your browser didn't automatically open, you should visit [http://localhost:3000/](http://localhost:3000/).

## How To Switch Methods

Inside the /src/components folder, you'll find 3 BreadCrumb components along with an index.ts file. In the index file, import the version of the BreadCrumb you want to use and comment out the others.

### BreadCrumbProps

In order to use BreadCrumbProps.tsx, you'll need to actually pass down those props. There are a few changes that you'll need to make:

- In /src/App.tsx, `import { useReactRouter5Props } from './utils/router-v5'`
- In /src/App.tsx, add `{...useReactRouter5Props()}` to each Route's element component props. For example:
```
element={<HomePage {...useReactRouter5Props()} />
```
- In /src/pages, add a `location` prop to each page file. For example:
```
export const About = ({ location }: any) => ( ...
```
- In /src/pages, pass a `location` prop to the GuttersLayout. For example:
```
<GuttersLayout title="About Us" location={location}>
```
- In /src/layouts/GuttersLayout.tsx, add `import { RouteComponentProps } from '../utils/router-v5';`
- In /src/layouts/GuttersLayout.tsx, add `&& RouteComponentProps` to the end of your Props definition. For example:
```
type Props = {
    children: React.ReactNode;
    title: string;
} && RouteComponentProps;
```
- Still in GuttersLayout.tsx, add `location` to your destructured props.
```
export const GuttersLayout = ({ children, location, title }: Props) => { ...
```
- Still in GuttersLayout.tsx, pass the `location` prop to BreadCrumb.
```
<BreadCrumb location={location} />
```

## Resources

You've got questions; we've got answers! Join the React community. Learn something new! Teach something you know. Share a meme.

- [**Subscribe On YouTube**](https://www.youtube.com/channel/UCwsC--bveNpM39MIqsicfUw?sub_confirmation=1)
- [**Join The Discord**](https://discord.gg/Q7BbYEeASE)
- [**Get Your Gear**](https://reactbetter.myspreadshop.com)
- [**Browse The GitHub**](https://github.com/ReactBetter)

We're glad you're here!
