
import { Entity, PrimaryGeneratedColumn , Column} from 'typeorm'


@Entity({
 name:"sections"
})

export class Sections{
   @PrimaryGeneratedColumn('uuid')
   id:string

   @Column({
    type:'varchar',
    length:120,
    nullable:false,
    name:'section'
   })
   section:string

   @Column({
      type:'varchar',
      length:120,
      nullable:false,
      name:'status'
     })
     status:boolean
  

}


