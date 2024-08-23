import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { Member } from '../members/member.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
    @InjectRepository(Member)
    private memberRepository: Repository<Member>,
  ) {}

  async findAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  async borrowBook(memberId: number, bookCode: string): Promise<string> {
    const member = await this.memberRepository.findOne({
      where: { id: memberId },
    });
    if (!member) {
      throw new Error('Member not found.');
    }
    if (member.borrowedBooksCount >= 2) {
      throw new Error('Member cannot borrow more than 2 books.');
    }
    if (member.penaltyEndDate && new Date() < new Date(member.penaltyEndDate)) {
      throw new Error('Member is currently penalized and cannot borrow books.');
    }

    const book = await this.bookRepository.findOne({
      where: { code: bookCode },
    });
    if (!book || book.stock <= 0) {
      throw new Error('This book is currently not available.');
    }

    member.borrowedBooksCount += 1;
    book.stock -= 1;
    await this.memberRepository.save(member);
    await this.bookRepository.save(book);

    return 'Book borrowed successfully.';
  }

  async returnBook(memberId: number, bookCode: string): Promise<string> {
    const member = await this.memberRepository.findOne({
      where: { id: memberId },
    });
    if (!member) {
      throw new Error('Member not found.');
    }
    const book = await this.bookRepository.findOne({
      where: { code: bookCode },
    });
    if (!book) {
      throw new Error('Book not found.');
    }

    if (member.borrowedBooksCount <= 0) {
      throw new Error('Member has not borrowed any books.');
    }

    member.borrowedBooksCount -= 1;
    book.stock += 1;

    const borrowedDate = new Date();
    const today = new Date();
    const diffDays = Math.ceil(
      (today.getTime() - borrowedDate.getTime()) / (1000 * 3600 * 24),
    );
    if (diffDays > 7) {
      member.penaltyEndDate = new Date(
        today.getTime() + 3 * 24 * 60 * 60 * 1000,
      ); // Penalize for 3 days
    }

    await this.memberRepository.save(member);
    await this.bookRepository.save(book);

    return 'Book returned successfully.';
  }
}
