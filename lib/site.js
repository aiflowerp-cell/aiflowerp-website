export function whatsappUrl(number, message = "Hello, I would like to know more about your furnishings.") {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function telUrl(phone) {
  return `tel:${phone.replace(/\s/g, "")}`;
}
