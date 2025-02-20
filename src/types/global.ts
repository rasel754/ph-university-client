export type TError ={
  data:{
    message: string,
    stack: number,
    success: boolean
  };
  status: number;
}


export type TResponse = {
  data?: any;
  error?: TError;
}