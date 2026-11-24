import { formatAmount } from './utils/format.js';

export function renderOrder(order) {
  return `${order.id}: ${formatAmount(order.total)}`;
}
