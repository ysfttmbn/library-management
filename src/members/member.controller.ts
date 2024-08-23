import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { MemberService } from './member.service';

@Controller('members')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get()
  findAll() {
    return this.memberService.findAll();
  }

  @Get(':id')
  checkMember(@Param('id', ParseIntPipe) memberId: number) {
    return this.memberService.checkMember(memberId);
  }
}
