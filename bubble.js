function bubbleSort(arr) {

    for (let j = 0; j < arr.length; j++ ){
        for (let i = 0; i<arr.length; i++){
            const term = arr[i]
            if (arr[i]>arr[i+1]){
                arr[i]=arr[i+1]
                arr[i+1]=term
            }

        }
    }
    return arr
}

module.exports = bubbleSort;