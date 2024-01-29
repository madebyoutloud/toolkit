export type Idx<T, K extends string> =
  K extends keyof T ? T[K] :
  K extends `${number}` ? number extends keyof T ? T[number] : never : never;


export type DeepIndex<T, K extends string> = T extends object ? (
  K extends `${infer F}.${infer R}` ? DeepIndex<Idx<T, F>, R> : Idx<T, K>
) : never;
