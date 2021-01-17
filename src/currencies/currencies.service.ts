import { BadRequestException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
export class Currency {
  currency: string;
  value: number
}
export class CurrenciesRepository {
  async getCurrency(currency: string): Promise<Currency> { 
    return new Currency();
  }

  async createCurrency({currency, value }: Currency): Promise<Currency> {
    return new Currency();
  }
}

@Injectable()
export class CurrenciesService {
  constructor(private currenciesRepository: CurrenciesRepository){}

  async getCurrency(currency: string): Promise<Currency> {
     return await this.currenciesRepository.getCurrency(currency);
  }

  async createCurrency({currency, value }: Currency): Promise<Currency> {
    if(value <= 0 ){ 
      throw new BadRequestException('The value must be greater zero.');
    }

    return await this.currenciesRepository
      .createCurrency({currency, value });
 }
}
