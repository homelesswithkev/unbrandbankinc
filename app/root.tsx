import * as Sentry from "@sentry/react";
Sentry.init({
  dsn: "https://unbrandbankinc.org", // Replace with your DSN from Sentry or similar service
  environment: "production",
});

// app/routes/index.tsx
import { redirect } from "@remix-run/node";

export function loader() {
  return redirect("/splashscreen");
}

export default function Index() {
  return null;
}
