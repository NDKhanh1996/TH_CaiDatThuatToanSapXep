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
}