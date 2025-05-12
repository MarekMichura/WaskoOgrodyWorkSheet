export async function delay<T>(promise: Promise<T>, ms: number): Promise<T> {
  return await new Promise<T>((resolve) => setTimeout(() => resolve(promise), ms))
}
