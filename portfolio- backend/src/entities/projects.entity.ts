
import { Entity, PrimaryGeneratedColumn , Column} from 'typeorm'


@Entity({
 name:"projects"
})

export class Projects{
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
    nullable:false,
    name:'image'
   })
   image:string
   
   
   @Column({
    type:'varchar',
    nullable:false,
    name:'source'
   })
   source:string

   @Column({
    type:'varchar',
    nullable:false,
    name:'description'
   })
   description:string

   @Column({
    type:'varchar',
    nullable:false,
    name:'tags'
   })
   tags:object[]


   @Column({
    type:'varchar',
    nullable:false,
    name:'iframe'
   })
   iframe:string
  
   @Column({
    type:'varchar',
    nullable:false,
    name:'stack'
   })
   stack:string
}


