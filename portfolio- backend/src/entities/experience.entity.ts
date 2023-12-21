
import { Entity, PrimaryGeneratedColumn , Column} from 'typeorm'


@Entity({
 name:"experience"
})

export class Experience {
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
    name:'company'
   })
   company_name:string
   
   
   @Column({
    type:'varchar',
    nullable:false,
    name:'logo'
   })
   logo:string

   @Column({
    type:'varchar',
    nullable:false,
    name:'logo_background'
   })
   logo_background:string

   @Column({
    type:'varchar',
    nullable:false,
    name:'date'
   })
   date:string


   @Column({
    type:'varchar',
    nullable:false,
    name:'decription'
   })
   decription:string[]
  
}


