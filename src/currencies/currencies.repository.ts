import { Currency } from "./currency";

export class CurrenciesRepository {
  async getCurrency(currency: string): Promise<Currency> { 
    return new Currency();
  }

  async createCurrency({currency, value }: Currency): Promise<Currency> {
    return new Currency();
  }

  async updateCurrency({currency, value }: Currency): Promise<Currency> {
    return new Currency();
  }

  async deleteCurrency(currency: string): Promise<void>{ return }
}