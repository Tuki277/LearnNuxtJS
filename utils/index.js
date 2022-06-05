export function api (payload = "") {
  console.log(process.env)
  return process.env.BASEURL + payload;
}
