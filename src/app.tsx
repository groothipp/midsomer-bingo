import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";

export default function App() {
  return (
    <Router
      root={props => (
        <MetaProvider>
          <Title>Midsomer Bingo</Title>
          <Meta name="description" content="Play Midsomer Bingo!" />
          <Meta property="og:title" content="Midsomer Bingo" />
          <Meta property="og:description" content="Play Midsomer Bingo!" />
          <Meta property="og:image" content="/icon.png" />
          <Meta property="og:type" content="website" />
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
