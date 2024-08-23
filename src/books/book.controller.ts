import { Controller, Get, Post, Param, ParseIntPipe } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @Post('borrow/:memberId/:bookCode')
  borrowBook(
    @Param('memberId', ParseIntPipe) memberId: number,
    @Param('bookCode') bookCode: string,
  ) {
    return this.bookService.borrowBook(memberId, bookCode);
  }

  @Post('return/:memberId/:bookCode')
  returnBook(
    @Param('memberId', ParseIntPipe) memberId: number,
    @Param('bookCode') bookCode: string,
  ) {
    return this.bookService.returnBook(memberId, bookCode);
  }
}
