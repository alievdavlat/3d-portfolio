

export class ErrorHandler extends Error {
  status:number
  constructor(message: string, status: number){
    super()

    this.message = message || 'Internal server Error'
    this.status = status || 500
  }

  getError(){
    return {
      message:this.message,
      status: this.status
    }
  }

}