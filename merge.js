function merge(arr1, arr2) {
    console.log(arr1, arr2)
    let i = 0
    let j = 0
    const merged = []
    while (i < arr1.length && j < arr2.length){
        console.log(arr1[i],arr2[j])
        if (arr1[i]<=arr2[j]){
            merged.push(arr1[i])
            i++
        }
         else if(arr1[i]>arr2[j]){
            merged.push(arr2[j])
            j++
        }
  
    
    }

    while (i <arr1.length){
        merged.push(arr1[i])
        i++
    }
    while (j <arr2.length){
        merged.push(arr2[j])
        j++
    }
    return merged
}


function mergeSort(arr) {
    if (arr.length <2) return arr
    const mid = Math.floor(arr.length/2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))
   return merge(left, right)
}

module.exports = { merge, mergeSort};