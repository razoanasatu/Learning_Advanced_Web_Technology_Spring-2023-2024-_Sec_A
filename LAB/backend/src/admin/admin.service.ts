import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin, Repository } from 'typeorm';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Injectable()
export class AdminsService {
  constructor(
    @InjectRepository(Admin)
    private adminsRepository: Repository<Admin>,
  ) {}

  async create(createAdminDto: CreateAdminDto): Promise<Admin> {
    const admin = this.adminsRepository.create(createAdminDto);
    return await this.adminsRepository.save(admin);
  }

  async findAll(): Promise<Admin[]> {
    return await this.adminsRepository.find();
  }

  async findOne(id: number): Promise<Admin> {
    return await this.adminsRepository.findOne(id);
  }

  async update(id: number, updateAdminDto: UpdateAdminDto): Promise<Admin> {
    const admin = await this.adminsRepository.findOne(id);
    if (!admin) {
      return null;
    }
    Object.assign(admin, updateAdminDto);
    return await this.adminsRepository.save(admin);
  }

  async remove(id: number): Promise<void> {
    await this.adminsRepository.delete(id);
  }
}
