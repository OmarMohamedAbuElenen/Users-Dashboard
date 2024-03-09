export interface usersType {
  data: singleUser[];
  page: number;
  count: number;
  stats: Stats;
}

export interface singleUser {
  id: number;
  name: string;
  age: number;
  active: boolean;
  last_login: string;
}

export interface Stats {
  avg_age: number;
  active_users_count: number;
  users_count: number;
  inactive_users_count: number;
}
