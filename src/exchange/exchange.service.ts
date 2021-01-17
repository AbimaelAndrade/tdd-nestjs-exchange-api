import { BadRequestException, Injectable } from '@nestjs/common';
import { CurrenciesService } from '../currencies/currencies.service';
import { ExchangeInputType } from './types/exchange-input.types';
import { ExchangeCurrency } from './types/exchante.currency.type';
@Injectable()
export class ExchangeService {
  constructor(private currencyService: CurrenciesService) { }
  
  async convertAmount({from, to, amount}: ExchangeInputType) : Promise<ExchangeCurrency> {
    if(!from || !to || !amount){
      throw new BadRequestException()
    }

    try {
      const currencyFrom = await this.currencyService.getCurrency(from);
      const currencyTo = await this.currencyService.getCurrency(to);


      return { amount: (currencyFrom.value / currencyTo.value) * amount}
    }catch (e){
      throw new Error("error");
    }

  }
}
