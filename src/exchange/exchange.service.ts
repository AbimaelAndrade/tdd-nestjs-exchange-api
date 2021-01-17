import { BadRequestException, Injectable } from '@nestjs/common';
export class CurrenciesService {
  async getCurrency(currency: string): Promise<any> {}
}

@Injectable()
export class ExchangeService {
  constructor(private currencyService: CurrenciesService) { }
  async convertAmount({from, to, amount}) : Promise<any> {
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
