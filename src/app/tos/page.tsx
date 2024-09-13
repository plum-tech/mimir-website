import { redirect } from "next/navigation";
import { tosVersions } from "./version";

export default function Page() {
  return redirect(`/tos/${tosVersions[0]}`)
}