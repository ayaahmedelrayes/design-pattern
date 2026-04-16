
class SortingStrategy {
  sort(arr) {
    throw new Error("sort() must be implemented by subclass");
  }
}

// --- Concrete Strategies ---
class BubbleSort extends SortingStrategy {
  sort(arr) {
    const a = [...arr]; // Don't mutate original
    for (let i = 0; i < a.length - 1; i++) {
      for (let j = 0; j < a.length - 1 - i; j++) {
        if (a[j] > a[j + 1]) {
          [a[j], a[j + 1]] = [a[j + 1], a[j]]; // Swap
        }
      }
    }
    console.log(`Bubble Sort: [${a}]`);
    return a;
  }
}

class QuickSort extends SortingStrategy {
  sort(arr) {
    const sorted = this._quickSort([...arr]);
    console.log(`Quick Sort: [${sorted}]`);
    return sorted;
  }

  _quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1];
    const left = arr.slice(0, -1).filter((x) => x <= pivot);
    const right = arr.slice(0, -1).filter((x) => x > pivot);
    return [...this._quickSort(left), pivot, ...this._quickSort(right)];
  }
}

class MergeSort extends SortingStrategy {
  sort(arr) {
    const sorted = this._mergeSort([...arr]);
    console.log(`Merge Sort: [${sorted}]`);
    return sorted;
  }

  _mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = this._mergeSort(arr.slice(0, mid));
    const right = this._mergeSort(arr.slice(mid));
    return this._merge(left, right);
  }

  _merge(left, right) {
    const result = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) result.push(left[i++]);
      else result.push(right[j++]);
    }
    return [...result, ...left.slice(i), ...right.slice(j)];
  }
}

// --- Context (Sorter) ---
class Sorter {
  constructor() {
    this.strategy = null;
  }

  setSortingStrategy(strategy) {
    this.strategy = strategy;
  }

  sort(arr) {
    if (!this.strategy) {
      console.log("No sorting strategy set!");
      return;
    }
    return this.strategy.sort(arr);
  }
}

// --- Client Code ---
const sorter = new Sorter();

sorter.setSortingStrategy(new BubbleSort());
sorter.sort([5, 3, 8, 1, 2]); // Bubble Sort: [1, 2, 3, 5, 8]

sorter.setSortingStrategy(new QuickSort());
sorter.sort([5, 3, 8, 1, 2]); // Quick Sort: [1, 2, 3, 5, 8]

sorter.setSortingStrategy(new MergeSort());
sorter.sort([5, 3, 8, 1, 2]); // Merge Sort: [1, 2, 3, 5, 8]
