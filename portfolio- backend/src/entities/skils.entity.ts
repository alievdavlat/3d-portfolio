
import { Entity, PrimaryGeneratedColumn , Column} from 'typeorm'


@Entity({
 name:"skils"
})

export class Skils {
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
    length:100,
    nullable:false,
    name:'icon'
   })
   icon:string   

}


