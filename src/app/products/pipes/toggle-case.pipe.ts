import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

    // miguel | toggleCase = 'MIGUEL'
    // MIGUEL | toggleCase = 'miguel'

    transform(value: any, toUpper: boolean = false): string {
        return (toUpper)
        ? value.toUpperCase()
        : value.toLowerCase()
    }

}