// employers/employer.entity.ts

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  companyName: string;
}
