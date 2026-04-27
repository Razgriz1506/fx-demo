import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFxDto } from './create-fx.dto';

@Injectable()
export class FxService {
  private requests: any[] = [];
  private counter = 1;

  findAll() {
    return this.requests.sort(
      (a, b) => b.created_at.getTime() - a.created_at.getTime(),
    );
  }

  findOne(id: string) {
    const req = this.requests.find((r) => r.id === id);
    if (!req) throw new NotFoundException('Request not found');
    return req;
  }

  create(dto: CreateFxDto) {
    const req = {
      id: String(this.counter++),
      reference_no: FX-${Date.now()},
      ...dto,
      created_at: new Date(),
    };
    this.requests.push(req);
    return req;
  }
}