import { ConsoleLogger } from '../utils/logger';

const logger = new ConsoleLogger();

class Parser {
  constructor(data) {
    this.data = data;
  }

  parseData() {
    try {
      if (!this.data) {
        throw new Error('No data provided');
      }

      const parsedData = JSON.parse(this.data);

      if (typeof parsedData!== 'object') {
        throw new Error('Invalid JSON format');
      }

      return parsedData;
    } catch (error) {
      logger.error('Error parsing data:', error);
      return null;
    }
  }
}

export { Parser };