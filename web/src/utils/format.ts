const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export function formatCurrency(amount: number) {
  return currencyFormatter.format(amount);
}

export function formatDate(iso: string) {
  const date = new Date(iso);
  return date.toLocaleString();
}
