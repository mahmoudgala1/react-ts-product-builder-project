/**
 * 
 * @param text 
 * @param maxLength 
 * @returns 
 */
export function txtSlicer(text: string, maxLength: number = 50) {
  if (text.length >= maxLength) return `${text.slice(0, maxLength)}...`;
  return text;
}
