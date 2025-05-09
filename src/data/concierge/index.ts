
import { conciergeLifestyleServices } from './lifestyle-services';
import { conciergeHealthServices } from './health-services';
import { conciergeHomeServices } from './home-services';
import { conciergeTravelServices } from './travel-services';
import { conciergeBusinessServices } from './business-services';
import { conciergeShoppingServices } from './shopping-services';
import { conciergeFinancialServices } from './financial-services';

// Re-export all services combined
export const conciergeServices = [
  ...conciergeShoppingServices,
  ...conciergeTravelServices,
  ...conciergeHomeServices,
  ...conciergeHealthServices,
  ...conciergeBusinessServices,
  ...conciergeLifestyleServices,
  ...conciergeFinancialServices
];

// Export individual categories for direct access
export {
  conciergeLifestyleServices,
  conciergeHealthServices,
  conciergeHomeServices,
  conciergeTravelServices,
  conciergeBusinessServices,
  conciergeShoppingServices,
  conciergeFinancialServices
};
