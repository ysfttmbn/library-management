import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './books/book.entity';
import { Member } from './members/member.entity';
import { BookService } from './books/book.service';
import { MemberService } from './members/member.service';
import { BookController } from './books/book.controller';
import { MemberController } from './members/member.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'yosafat17tambun',
      database: 'library_db',
      entities: [Book, Member],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Book, Member]),
  ],
  controllers: [BookController, MemberController],
  providers: [BookService, MemberService],
})
export class AppModule {}
