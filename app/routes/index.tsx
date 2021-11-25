import type { LinksFunction } from "remix";
import stylesUrl from "../styles/index.css";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function HomeIndexRoute() {
  return <div>Hello index</div>;
}
