import { Pipe, PipeTransform }  from '@angular/core';

@Pipe({name: 'mapToIterable'})
export class MapToIterable implements PipeTransform {

    public transform(value: any, args: any[] = null): any {

        return Object.keys(value).map((key) => {
            const pair = {};
            const k = 'key';
            const v = 'value';

            pair[k] = key;
            pair[v] = value[key];

            return pair;
        });
    }

}
