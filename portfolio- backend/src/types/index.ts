
interface Ipayload  {
  id: string,
  username?: string
}

interface IadminAuth {
  id: string;
  username:string;
  password: string;
  avatar: string;
}


export {
  Ipayload,
  IadminAuth
}