import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './schemas/users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('Users') private readonly usersModel: Model<Users>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const saltOrRounds = 10;
    const createdUser = new this.usersModel(createUserDto);
    createdUser.password = await bcrypt.hash(
      createdUser.password,
      saltOrRounds,
    );
    return createdUser.save();
  }

  async findAll(): Promise<Users[]> {
    return await this.usersModel.find().exec();
  }

  async findOne(id: string): Promise<Users> {
    return await this.usersModel.findById(id).exec();
  }

  update(id: string, updateUserDto: UpdateUserDto): Promise<Users> {
    return this.usersModel.findByIdAndUpdate(id, updateUserDto, { new: true });
  }

  remove(id: string) {
    return this.usersModel.findByIdAndDelete(id)
  }
}
