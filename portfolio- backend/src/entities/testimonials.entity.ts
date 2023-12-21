
import { Entity, PrimaryGeneratedColumn , Column} from 'typeorm'


@Entity({
 name:"testimonials"
})

export class Testimonials  {
   @PrimaryGeneratedColumn('uuid')
   id:string

   @Column({
    type:'varchar',
    length:120,
    nullable:false,
    name:'name'
   })
   name:string


   @Column({
    type:'varchar',
    length:100,
    nullable:false,
    name:'company'
   })
   company:string


   @Column({
    type:'varchar',
    name:'image'
   })
   image:string

   @Column({
    type:'varchar',
    length:100,
    nullable:false,
    name:'description'
   })
   description:string
  
}


