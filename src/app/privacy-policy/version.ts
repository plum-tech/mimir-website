import { resolveAllVersions } from "@/utils/resolve-terms-version";
export const privacyPolicyVersions = resolveAllVersions(import.meta.url, ".md", "..", "/list")