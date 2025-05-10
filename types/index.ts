export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  emailAddress: string;
  createdAt: string;
}

export interface IPaginationData {
  page: number;
  pages: number;
  total: number;
  limit: number;
}

// export interface IData {
//   data: {
//     users: IUser[];
//     pagination: IPaginationData;
//   };
// }