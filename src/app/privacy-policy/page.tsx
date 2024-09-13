import { redirect } from "next/navigation";
import { privacyPolicyVersions } from "./version";

export default function Page() {
  return redirect(`/privacy-policy/${privacyPolicyVersions[0]}`)
}