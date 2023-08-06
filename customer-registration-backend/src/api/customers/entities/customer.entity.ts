import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Rainbow } from '../enums/colors.enum';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name: string;

  @Column({ unique: true, type: 'varchar', length: 14 })
  public cpf: string;

  @Column({ unique: true, type: 'varchar', length: 120 })
  public email: string;

  @Column({
    type: 'enum',
    enum: Rainbow,
    default: Rainbow.Blue,
  })
  public color: Rainbow;

  @Column({ nullable: true })
  public note: string;

  /*
   * Create and Update Date Columns
   */
  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}
