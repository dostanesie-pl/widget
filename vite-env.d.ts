/// <reference types="vite/client" />
/// <reference types="vite-svg-loader" />

declare module '@/assets/fetched/subjects.json' {
  import { ISubject } from '@/utils/fetchSubjectsCli/types';
  const value: ISubject[];
  export default value;
}
