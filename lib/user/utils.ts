export function addParamsToURL(
  params: Record<string, string>,
  slug: string,
  pathName: string = "/"
) {
  const searchParams = new URLSearchParams(Object.entries(params));
  return `${pathName}/${slug}?${searchParams.toString()}`;
}
