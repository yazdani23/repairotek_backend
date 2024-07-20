type ResourceData<T> = T; // Generic type for resource data

export interface IService<T> {
  create: (data: ResourceData<T>) => Promise<ResourceData<T>>;
  
  update: (
    id: string,
    data: Partial<ResourceData<T>>
  ) => Promise<ResourceData<T> | null>;

  edit: (
    id: string,
    data: Partial<ResourceData<T>>
  ) => Promise<ResourceData<T> | null>;

  delete: (id: string) => Promise<void>;

  getAll: () => Promise<ResourceData<T>[]>;
  getById: (id: string) => Promise<ResourceData<T> | null>;
  search: (searchQuery: string) => Promise<ResourceData<T>[]>;
  filter: (filterCriteria: any) => Promise<ResourceData<T>[]>;
  getAllPaginated: (
    limit: number,
    page: number,
    sort?: string
  ) => Promise<{ data: ResourceData<T>[]; total: number }>;
}

export type Service<T> = IService<T>;

