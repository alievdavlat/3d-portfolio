
import { Entity, PrimaryGeneratedColumn , Column} from 'typeorm'


@Entity({
 name:"stack"
})

export class Stack{
   @PrimaryGeneratedColumn('uuid')
   id:string

   @Column({
    type:'varchar',
    length:120,
    nullable:false,
    name:'title'
   })
   title:string


   @Column({
    type:'varchar',
    nullable:false,
    name:'icon'
   })
   icon:string
  
}


