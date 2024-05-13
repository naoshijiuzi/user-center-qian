declare namespace API {
  type BaseResponseBoolean = {
    code?: number;
    data?: boolean;
    message?: string;
    description?: string;
  };

  type BaseResponseChart = {
    code?: number;
    data?: Chart;
    message?: string;
    description?: string;
  };

  type BaseResponseInteger = {
    code?: number;
    data?: number;
    message?: string;
    description?: string;
  };

  type BaseResponseListChart = {
    code?: number;
    data?: Chart[];
    message?: string;
    description?: string;
  };

  type BaseResponseListUser = {
    code?: number;
    data?: User[];
    message?: string;
    description?: string;
  };

  type BaseResponseLong = {
    code?: number;
    data?: number;
    message?: string;
    description?: string;
  };

  type BaseResponsePageChart = {
    code?: number;
    data?: PageChart;
    message?: string;
    description?: string;
  };

  type BaseResponseUser = {
    code?: number;
    data?: User;
    message?: string;
    description?: string;
  };

  type Chart = {
    id?: number;
    goal?: string;
    chartData?: string;
    chartType?: string;
    genChart?: string;
    genResult?: string;
    userId?: number;
    createTime?: string;
    updateTime?: string;
    isDelete?: number;
  };

  type ChartAddRequest = {
    goal?: string;
    chartData?: string;
    chartType?: string;
  };

  type ChartQueryRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    id?: number;
    goal?: string;
    chartType?: string;
    userId?: number;
  };

  type ChartUpdateRequest = {
    id?: number;
    goal?: string;
    chartData?: string;
    chartType?: string;
    genChart?: string;
    genResult?: string;
    userId?: number;
    createTime?: string;
    updateTime?: string;
    isDelete?: number;
  };

  type DeleteRequest = {
    id?: number;
  };

  type getChartByIdParams = {
    id: number;
  };

  type listChartByPageParams = {
    chartQueryRequest: ChartQueryRequest;
  };

  type listChartParams = {
    chartQueryRequest: ChartQueryRequest;
  };

  type OrderItem = {
    column?: string;
    asc?: boolean;
  };

  type PageChart = {
    records?: Chart[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageChart;
    searchCount?: PageChart;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type searchUsersParams = {
    username: string;
  };

  type User = {
    id?: number;
    username?: string;
    userAccount?: string;
    avatarUrl?: string;
    gender?: number;
    userPassword?: string;
    phone?: string;
    email?: string;
    userStatus?: number;
    createTime?: string;
    updateTime?: string;
    isDelete?: number;
    userRole?: string;
    planetCode?: string;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserRegisterRequest = {
    userAccount?: string;
    userPassword?: string;
    checkPassword?: string;
    planetCode?: string;
  };
}
