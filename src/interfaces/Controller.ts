type ResourceData<T> = T;

interface IController<T> {
  create: (newData: ResourceData<T>) => Promise<ResourceData<T>>;
  update: (
    id: string,
    updatedData: Partial<ResourceData<T>>
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

export type Controller<T> = IController<T>;
