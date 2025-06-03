export function getPageParam() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('page');
}
