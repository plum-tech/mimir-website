import { resolveAllVersions } from "@/utils/resolve-terms-version";
export const tosVersions = resolveAllVersions(import.meta.url, ".md", "..", "/list")