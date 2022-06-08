export function api (payload = "") {
  return process.env.BASEURL + payload;
}

export const configAxios = () => {

  const header = {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  }
  return header;
}
