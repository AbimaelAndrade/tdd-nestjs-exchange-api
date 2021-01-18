import { BadRequestException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { CurrenciesRepository } from './currencies.repository';
import { Currency } from './currency';
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

  async updateCurrency({currency, value }: Currency): Promise<Currency> {
    if(value <= 0 ){ 
      throw new BadRequestException('The value must be greater zero.');
    }

    return await this.currenciesRepository
      .updateCurrency({currency, value });
  }

  async deleteCurrency(currency: string): Promise<void> {
    await this.currenciesRepository.deleteCurrency(currency);
  }
}
