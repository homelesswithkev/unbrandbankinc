// app/routes/index.tsx
import { redirect } from "@remix-run/node";

export function loader() {
  return redirect("/splashscreen");
}

export default function Index() {
  return null;
}
