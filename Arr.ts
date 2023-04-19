export class Arr {
    static list: number[] = [2, 3, 2, 5, 6, 1, -2, 3, 14, 12];


    bubbleSort(arr: number[]) {
        let needNextPass = true;
        for (let j = 0; j < arr.length - 1 && needNextPass; j++) {
            needNextPass = false;
            for (let i = 1; i < arr.length; i++) {
                if (arr[i - 1] > arr[i]) {
                    [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]
                    needNextPass = true;
                }
            }
        }
        return arr
    }
    bubbleSortByStep(list: number[]): void {
        let needNextPass: boolean = true;
        for (let k = 1; k < list.length && needNextPass; k++) {
            needNextPass = false;
            for (let i = 0; i < list.length - k; i++) {
                if (list[i] > list[i + 1]) {
                    /* Swap list[i] with list[i + 1] */
                    console.log("Swap " + list[i] + " with " + list[i + 1]);
                    let temp: number = list[i];
                    list[i] = list[i + 1];
                    list[i + 1] = temp;

                    needNextPass = true; /* Next pass still needed */
                }
            }
            /* Array may be sorted and next pass not needed */
            if (needNextPass == false) {
                console.log("Array may be sorted and next pass not needed");
                break;
            }
            /* Show the list after sort */
            console.log("List after the  " + k + "' sort: ");
            for (let j = 0; j < list.length; j++) {
                console.log(list[j] + "\t");
            }
            console.log();
        }
    }
}