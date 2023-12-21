
import { Entity, PrimaryGeneratedColumn , Column} from 'typeorm'


@Entity({
 name:"auth"
})

export class AdminAuth {
   @PrimaryGeneratedColumn('uuid')
   id:string

   @Column({
    type:'varchar',
    length:70,
    nullable:false,
    name:'username'
   })
   username:string


   @Column({
    type:'varchar',
    length:100,
    nullable:false,
    name:'password'
   })
   password:string


   @Column({
    type:'varchar',
    nullable:false,
    name:'avatar'
   })
   avatar:string
   
}


