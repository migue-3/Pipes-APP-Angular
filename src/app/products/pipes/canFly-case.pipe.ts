import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'canFlyCase'
})
export class CanFlyCasePipe implements PipeTransform {

    transform(value: boolean): 'Can fly' | 'Can not fly' {
        return value ? 'Can fly' : 'Can not fly'
    }

}