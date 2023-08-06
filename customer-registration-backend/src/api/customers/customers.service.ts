import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private repository: Repository<Customer>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const customer = await this.repository.create(createCustomerDto);
    return await this.repository.save(customer);
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    return await this.repository.findOneBy({ id });
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return await this.repository.update(id, updateCustomerDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
