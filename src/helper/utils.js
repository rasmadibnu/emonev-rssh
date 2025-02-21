export function rupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
}

export function suffixRupiah(amount) {
  if (amount >= 1e12) {
    return (amount / 1e12).toFixed(2) + " T";
  } else if (amount >= 1e9) {
    return (amount / 1e9).toFixed(2) + " M";
  } else if (amount >= 1e6) {
    return (amount / 1e6).toFixed(2) + " jt";
  } else {
    return amount.toFixed(2);
  }
}
