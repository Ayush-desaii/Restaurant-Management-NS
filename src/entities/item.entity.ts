import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from 'typeorm';
import { Min } from '@nestjs/class-validator';
import { Restaurants } from './restaurant.entity';
import { Images } from '../entities/image.entity';

@Entity()
export class Items {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 30 })
  name: string;

  @Column()
  @Min(0)
  price: number;

  @Column('varchar', { length: 100 })
  description: string;

  @OneToOne(() => Images, (images) => images.item)
  images: Images

  @ManyToOne(() => Restaurants, (restaurant) => restaurant.items)
  restaurent: Restaurants;
}
