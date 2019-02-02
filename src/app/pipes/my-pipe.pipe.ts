import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})

//https://angular.io/guide/pipes
export class MyPipePipe implements PipeTransform {

  transform(value: Array<object>, args: string, args2: string): any {
	console.log("inside Pipe transform method : ");
	console.log("inside Pipe transform method value : ", value);
	console.log("inside Pipe transform method args : ",args, args2);
	return value.filter(obj => (obj[args] !== undefined || obj[args2] < 18));
	
  }

}
