/**
 * Normaliza e valida telefone no padrão Brasil (10 ou 11 dígitos: DDD + número).
 */
export function normalizeBrazilPhone(value: string): string {
  const digits = value.replace(/\D/g, "");
  return digits;
}

export function isValidBrazilPhone(value: string): boolean {
  const digits = normalizeBrazilPhone(value);
  return digits.length === 10 || digits.length === 11;
}
