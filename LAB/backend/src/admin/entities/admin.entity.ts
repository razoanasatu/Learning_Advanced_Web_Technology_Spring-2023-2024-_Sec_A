import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  fullName: string;

  @Column({ nullable: true })
  phoneNumber: string;
}
