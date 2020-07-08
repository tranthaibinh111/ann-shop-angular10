export enum Role {
  Admin = 0,
  Warehouse = 1,
  Sales = 2,
  CheckWarehouse = 3
}

export interface Account {
  name: string,
  role: Role
}
