export interface IApiSubject {
  id: number;
  name: string;
  full_name: string;
  is_advanced: boolean | null;
  is_oral: boolean;
  is_bilang: boolean;
  is_special: boolean;
  popularity: number;
  visible_osma: boolean;
  visible_matura: boolean;
  visible_osma_calc: boolean;
  short_name: string;
}

export type ISubject = Pick<IApiSubject, "name" | "full_name">;
