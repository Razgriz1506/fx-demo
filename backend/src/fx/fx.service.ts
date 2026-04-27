import { Injectable } from '@nestjs/common';
import { CreateFxRequestDto } from './dto/create-fx-request.dto';

@Injectable()
export class FxService {
  private requests = [];

  create(dto: CreateFxRequestDto) {
    const req = {
      id: Date.now().toString(),
      reference_no: 'FX-' + Math.floor(Math.random() * 100000),
      ...dto,
      created_at: new Date(),
    };

    this.requests.push(req);
    return req;
  }

  findAll() {
    return this.requests;
  }

  findOne(id: string) {
    return this.requests.find((r) => r.id === id);
  }
}
