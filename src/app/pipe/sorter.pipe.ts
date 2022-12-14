import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  /**
   * A kapott tömb rendezése a szűrőkifejezés alapján.
   * @param value {any[]} - a tömb
   * @param key {string} - az objektumkulcs, amely alapján rendez
   * @returns {any[]} - a kulcs alapján rendezett tömb
   */
  transform(value: any[], key: string): any[] {
    // A KÖVETKEZŐ SORT TÁVOLÍTSD EL!!!
    // return value;

    /**
     * FELADAT!
     * Ellenőrzés: ha a value nem tömb vagy nincs megadva a key,
     * térj vissza a value változóval.
     */
    if (!(value instanceof Array) || key == null)
    {
      return value;
    }

    /**
     * FELADAT!
     * Térj vissza a value.sort metódus eredményével!
     * 1. Ha az a[key] és a b[key] típusa is szám, térj vissza a különbségükkel.
     * 2. Ha nem számok, akkor mind a kettőt konvertáld string típusúra,
     *  azután alakítsd őket kisbetűssé.
     * 3. Térj vissza a két string localeCompare metódus által visszaadott
     *  összehasonlításának az eredményével.
     */

    let result: Array<any> = value.sort((ao, bo) => {
      let a: any = ao[key];
      let b: any = bo[key];

      if ((typeof a == 'number') && (typeof b == 'number'))
      {
        if (a > b)
        {
          return 1;
        }
        else
        {
          if (a == b)
          {
            return 0;
          }
          else
          {
            return -1;
          }
        }
      }

      let as = String(a).toLowerCase();
      let bs = String(b).toLowerCase();

      return as.localeCompare(bs);
    });

    return result;
  }

}

