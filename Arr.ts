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

    static selectionSort() {
        let y = 0
        let minIndex = -1
        console.log(`begin ${Arr.list}`)
        for (let i = 0; i < Arr.list.length; i++) {
            let min = Arr.list[i]
            for (let j = i + 1; j < Arr.list.length; j++) {
                if (min > Arr.list[j]) {
                    min = Arr.list[j]
                    minIndex = j
                }
            }
            if (min !== Arr.list[i]) {
                let temp = Arr.list[i]
                Arr.list[i] = Arr.list[minIndex]
                Arr.list[minIndex] = temp
            }

            console.log(`-------------------------------`)
            console.log(`step  ${i + 1}:`)
            console.log(`swap ${Arr.list[minIndex]} with min: ${Arr.list[i]}`)
            console.log(`after: ${Arr.list}`)

        }
        return Arr.list
    }

    static insertionBubbleSort() {
        let x = 1
        for (let i = 1; i < Arr.list.length - 1; i++) {
            if (Arr.list[i - 1] > Arr.list[i]) {
                [Arr.list[i - 1], Arr.list[i]] = [Arr.list[i], Arr.list[i - 1]]
            }
            for (let j = i - 1; j > 0; j--) {
                if (Arr.list[j - 1] > Arr.list[j]) {
                    [Arr.list[j - 1], Arr.list[j]] = [Arr.list[j], Arr.list[j - 1]]
                }
            }
            console.log(`step ${x}:`)
            console.log(`arr: ${Arr.list}`)
            console.log("Swap " + Arr.list[i] + " with " + Arr.list[i + 1]);
            console.log(`-------------------------------`)
            x++
        }
        return Arr.list
    }

    static insertionSort() {
        let arr = Arr.list
        for (let i = 1; i < arr.length; i++) {
            let key = arr[i];
            while (i > 0 && arr[i - 1] > key) {
                arr[i] = arr[i - 1];
                i--;
            }
            arr[i] = key;
        }
        return arr;
    }
}