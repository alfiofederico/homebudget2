export const currencyFormatter = (amount) => {
  const formatter = Intl.NumberFormat("ja-JP", {
    currency: "JPY",
    style: "currency",
  });

  return formatter.format(amount);
};
