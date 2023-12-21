

import { DataSource } from 'typeorm'
import path from 'path'

export const typeOrm  = new DataSource({
  type:'postgres',
  host: 'localhost',
  port:5432,
  username:'postgres',
  password:'aliev2002',
  database:'n124',
  synchronize:false,
  logging:false,
  entities:[path.join(process.cwd(), 'src',  'entities', '*.entity.{ts, js}')],
})